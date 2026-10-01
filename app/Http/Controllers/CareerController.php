<?php

namespace App\Http\Controllers;

use App\Models\Career;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CareerController extends Controller
{
    public function index()
    {
        return Inertia::render('AdminPages/Career', [
            'careers' => Career::latest()->get(),
        ]);
    }

    public function store(Request $request)
    {
        Career::create($this->validated($request));

        return redirect()->route('ourcareer.index')
            ->with('success', 'Career created successfully.');
    }

    public function update(Request $request, Career $career)
    {
        $career->update($this->validated($request));

        return redirect()->route('ourcareer.index')
            ->with('success', 'Career updated successfully.');
    }

    public function destroy(Career $career)
    {
        $career->delete();

        return redirect()->route('ourcareer.index')
            ->with('success', 'Career deleted successfully.');
    }

    private function validated(Request $request): array
    {
        // Drop blank responsibility rows before validating
        $request->merge([
            'responsibilities' => array_values(array_filter(
                (array) $request->input('responsibilities', []),
                fn ($r) => filled($r)
            )),
        ]);

        return $request->validate([
            'title'              => 'required|string|max:255',
            'openings'           => 'required|integer|min:1',
            'responsibilities'   => 'required|array|min:1',
            'responsibilities.*' => 'required|string',
            'location'           => 'required|string|max:255',
            'type'               => 'required|string|max:100',
            'date_posted'        => 'required|date',
            'valid_through'      => 'nullable|date|after_or_equal:date_posted',
            'employment_type'    => 'required|string|max:100',
            'status'             => 'required|in:active,closed',
        ]);
    }
}