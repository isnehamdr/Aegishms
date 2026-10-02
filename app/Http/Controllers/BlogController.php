<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Inertia\Inertia;

class BlogController extends Controller
{
    // ADMIN Inertia page (relative to resources/js/Pages, no extension)
    private const PAGE = 'AdminPages/Blog';

    // PUBLIC website pages - must match your real file names in resources/js/Pages
    private const PUBLIC_LIST_PAGE   = 'BlogSection';
    private const PUBLIC_DETAIL_PAGE = 'BlogDetail';

    private const DEFAULT_CATEGORIES = [
        'Information Security',
        'Hotel Management',
        'Sustainability',
        'Technology',
        'Guest Experience',
    ];

    /* ------------------------------------------------------------------ */
    /*  PUBLIC WEBSITE                                                     */
    /* ------------------------------------------------------------------ */

    // GET /blogs  -> only published blogs
    public function publicIndex()
    {
        $posts = Blog::where('status', true)
            ->latest('date')
            ->latest('id')
            ->get()
            ->map(fn (Blog $b) => $this->present($b))
            ->values();

        return Inertia::render(self::PUBLIC_LIST_PAGE, [
            'posts' => $posts,
        ]);
    }

    // GET /blogs/{slug} -> one published blog (404 if missing / draft)
    public function publicShow(string $slug)
    {
        $blog = Blog::where('status', true)->where('slug', $slug)->firstOrFail();

        $related = Blog::where('status', true)
            ->where('id', '!=', $blog->id)
            ->latest('date')
            ->latest('id')
            ->take(5)
            ->get()
            ->map(fn (Blog $b) => $this->present($b))
            ->values();

        return Inertia::render(self::PUBLIC_DETAIL_PAGE, [
            'post'         => $this->present($blog),
            'relatedPosts' => $related,
        ]);
    }

    // Same shape for list + detail, so the React pages stay simple.
    private function present(Blog $blog): array
    {
        $tags = $blog->tags;
        if (is_string($tags)) {
            $tags = json_decode($tags, true) ?: [];
        }

        $date  = $blog->date ? Carbon::parse($blog->date) : null;
        $image = $blog->image;

        if ($image && ! Str::startsWith($image, ['http://', 'https://', '/'])) {
            $image = '/storage/' . $image; // needs `php artisan storage:link`
        }

        return [
            'id'           => $blog->id,
            'title'        => $blog->title,
            'slug'         => $blog->slug,
            'excerpt'      => $blog->excerpt,
            'content'      => $blog->content,
            'category'     => $blog->category,
            'author'       => $blog->author ?: 'Aegis Team',
            'author_url'   => $blog->author_url,
            'read_time'    => $blog->read_time,
            'tags'         => array_values(is_array($tags) ? $tags : []),
            'date'         => $date?->format('Y-m-d'),
            'display_date' => $date?->format('F j, Y'),
            'image'        => $image,
        ];
    }

    /* ------------------------------------------------------------------ */
    /*  ADMIN                                                              */
    /* ------------------------------------------------------------------ */

    // GET /admin-blog
    public function index(Request $request)
    {
        if ($request->wantsJson() && ! $request->header('X-Inertia')) {
            return response()->json(
                Blog::where('status', true)->latest('date')->latest('id')->get()
            );
        }

        return Inertia::render(self::PAGE, [
            'blogs'      => Blog::latest('date')->latest('id')->get(),
            'categories' => $this->categories(),
        ]);
    }

    // POST /ourblogs
    public function store(Request $request)
    {
        $validated = $this->validated($request);

        $validated['category'] = $this->normalizeCategory($validated['category'] ?? null);
        $validated['slug']     = $this->uniqueSlug($validated['slug'] ?? null, $validated['title']);
        $validated['status']   = $request->boolean('status', true);
        $validated['tags']     = $validated['tags'] ?? [];

        if ($request->hasFile('image')) {
            $validated['image'] = $request->file('image')->store('blogs', 'public');
        }

        Blog::create($validated);

        return back()->with('success', 'Blog created successfully.');
    }

    // GET /ourblogs/{id}
    public function show($id)
    {
        return response()->json(Blog::findOrFail($id));
    }

    // PUT /ourblogs/{id}  (the form sends POST + _method=put)
    public function update(Request $request, $id)
    {
        $blog = Blog::findOrFail($id);

        $validated = $this->validated($request);

        $validated['category'] = $this->normalizeCategory($validated['category'] ?? null);
        $validated['slug']     = $this->uniqueSlug($validated['slug'] ?? null, $validated['title'], $blog->id);
        $validated['status']   = $request->boolean('status');
        $validated['tags']     = $validated['tags'] ?? [];

        if ($request->hasFile('image')) {
            if ($blog->image) {
                Storage::disk('public')->delete($blog->image);
            }
            $validated['image'] = $request->file('image')->store('blogs', 'public');
        } else {
            unset($validated['image']); // keep the existing image
        }

        $blog->update($validated);

        return back()->with('success', 'Blog updated successfully.');
    }

    // DELETE /ourblogs/{id}
    public function destroy($id)
    {
        $blog = Blog::withTrashed()->findOrFail($id);

        if ($blog->image) {
            Storage::disk('public')->delete($blog->image);
        }

        $blog->forceDelete();

        return back()->with('success', 'Blog deleted successfully.');
    }

    private function validated(Request $request): array
    {
        return $request->validate([
            'title'      => 'required|string|max:255',
            'slug'       => 'nullable|string|max:255',
            'excerpt'    => 'nullable|string',
            'content'    => 'required|string',
            'image'      => 'nullable|image|max:4096',
            'category'   => 'nullable|string|max:255',
            'author'     => 'required|string|max:255',
            'author_url' => 'nullable|string|max:255',
            'date'       => 'required|date',
            'read_time'  => 'nullable|string|max:50',
            'tags'       => 'nullable|array',
            'tags.*'     => 'string|max:50',
        ]);
    }

    private function categories(): array
    {
        $used = Blog::query()
            ->whereNotNull('category')
            ->where('category', '!=', '')
            ->distinct()
            ->orderBy('category')
            ->pluck('category')
            ->all();

        $result = [];
        foreach (array_merge(self::DEFAULT_CATEGORIES, $used) as $c) {
            $c = trim($c);
            if ($c === '') {
                continue;
            }
            $result[mb_strtolower($c)] ??= $c;
        }

        return array_values($result);
    }

    private function normalizeCategory(?string $category): ?string
    {
        $category = trim((string) $category);

        if ($category === '') {
            return null;
        }

        foreach ($this->categories() as $existing) {
            if (mb_strtolower($existing) === mb_strtolower($category)) {
                return $existing;
            }
        }

        return $category;
    }

    private function uniqueSlug(?string $slug, string $title, ?int $ignoreId = null): string
    {
        $base = Str::slug($slug ?: $title) ?: Str::random(8);
        $slug = $base;
        $i = 2;

        while (Blog::withTrashed()
            ->where('slug', $slug)
            ->when($ignoreId, fn ($q) => $q->where('id', '!=', $ignoreId))
            ->exists()) {
            $slug = $base . '-' . $i++;
        }

        return $slug;
    }
}