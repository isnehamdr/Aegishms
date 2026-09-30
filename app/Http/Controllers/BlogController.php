<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Inertia\Inertia;

class BlogController extends Controller
{
    // Inertia page (relative to resources/js/Pages, no extension).
    // Must match the real folder/file casing, e.g. Pages/AdminPages/Blog.jsx
    private const PAGE = 'AdminPages/Blog';

    // GET /ourblogs
    // - Inertia/browser request      -> admin page
    // - JSON request (your website)  -> published blogs as JSON
    public function index(Request $request)
    {
        if ($request->wantsJson() && ! $request->header('X-Inertia')) {
            return response()->json(
                Blog::where('status', true)->latest('date')->latest('id')->get()
            );
        }

        return Inertia::render(self::PAGE, [
            'blogs' => Blog::latest('date')->latest('id')->get(),
        ]);
    }

    // POST /ourblogs
    public function store(Request $request)
    {
        $validated = $this->validated($request);

        $validated['slug']   = $this->uniqueSlug($validated['slug'] ?? null, $validated['title']);
        $validated['status'] = $request->boolean('status', true);
        $validated['tags']   = $validated['tags'] ?? [];

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

        $validated['slug']   = $this->uniqueSlug($validated['slug'] ?? null, $validated['title'], $blog->id);
        $validated['status'] = $request->boolean('status');
        // An empty tags array isn't sent in multipart data, so default it
        // here, otherwise removing all tags would never save.
        $validated['tags']   = $validated['tags'] ?? [];

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

    // remove the image file from disk too
    if ($blog->image) {
        Storage::disk('public')->delete($blog->image);
    }

    $blog->forceDelete(); // permanently removes the row from the database

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

    // Unique even against soft-deleted rows (the DB unique index includes them)
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