<?php

namespace App\Http\Controllers;

use App\Models\Career;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Inertia\Inertia;

class CareerController extends Controller
{
    // PUBLIC website page - must match resources/js/Pages/Career.jsx
    private const PUBLIC_PAGE = 'Career';

    // ADMIN page - must match resources/js/Pages/AdminPages/Career.jsx
    private const ADMIN_PAGE = 'AdminPages/Career';

    /* ------------------------------------------------------------------ */
    /*  PUBLIC WEBSITE                                                     */
    /* ------------------------------------------------------------------ */

    // GET /careers -> only ACTIVE positions
    public function publicIndex()
    {
        $careers = Career::where('status', 'active')
            ->latest('id')
            ->get()
            ->map(fn (Career $c) => $this->present($c))
            ->values();

        return Inertia::render(self::PUBLIC_PAGE, [
            'careers' => $careers,
        ]);
    }

    private function present(Career $career): array
    {
        $responsibilities = $career->responsibilities;
        if (is_string($responsibilities)) {
            $responsibilities = json_decode($responsibilities, true) ?: [];
        }

        $format = fn ($value) => $value ? Carbon::parse($value)->format('Y-m-d') : null;

        // Google JobPosting employmentType values
        $employmentType = $career->employment_type;
        if (! $employmentType) {
            $employmentType = match (strtolower((string) $career->type)) {
                'internship', 'intern' => 'INTERN',
                'part-time', 'part time' => 'PART_TIME',
                'contract', 'contractor' => 'CONTRACTOR',
                default => 'FULL_TIME',
            };
        }

        return [
            'id'               => $career->id,
            'title'            => $career->title,
            'type'             => $career->type,
            'location'         => $career->location,
            'openings'         => (int) ($career->openings ?? 1),
            'responsibilities' => array_values(array_filter(is_array($responsibilities) ? $responsibilities : [])),
            'employment_type'  => $employmentType,
            'date_posted'      => $format($career->date_posted),
            'valid_through'    => $format($career->valid_through),
        ];
    }

    /* ------------------------------------------------------------------ */
    /*  ADMIN                                                              */
    /* ------------------------------------------------------------------ */

    public function index()
    {
        return Inertia::render(self::ADMIN_PAGE, [
            'careers' => Career::latest()->get(),
        ]);
    }

    public function store(Request $request)
    {
        Career::create($this->validated($request));

        return redirect()->route('ourcareer.index')
            ->with('success', 'Career created successfully');
    }

    public function update(Request $request, Career $career)
    {
        $career->update($this->validated($request));

        return redirect()->route('ourcareer.index')
            ->with('success', 'Career updated successfully');
    }

    public function destroy(Career $career)
    {
        $career->delete();

        return redirect()->route('ourcareer.index')
            ->with('success', 'Career deleted successfully');
    }

    // Adjust these rules to match your AddCareer form and your migration.
    private function validated(Request $request): array
    {
        $data = $request->validate([
            'title'              => 'required|string|max:255',
            'type'               => 'nullable|string|max:100',
            'location'           => 'nullable|string|max:255',
            'openings'           => 'nullable|integer|min:1',
            'employment_type'    => 'nullable|string|max:50',
            'date_posted'        => 'nullable|date',
            'valid_through'      => 'nullable|date',
            'status'             => 'nullable|string|in:active,inactive',
            'responsibilities'   => 'nullable|array',
            'responsibilities.*' => 'nullable|string',
        ]);

        $data['openings']         = $data['openings'] ?? 1;
        $data['status']           = $data['status'] ?? 'active';
        $data['responsibilities'] = array_values(array_filter($data['responsibilities'] ?? []));

        return $data;
    }
}