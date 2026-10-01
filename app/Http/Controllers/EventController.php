<?php

namespace App\Http\Controllers;

use App\Models\Event;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class EventController extends Controller
{
    private function rules(): array
    {
        return [
            'title'             => 'required|string|max:255',
            'date'              => 'required|date',
            'description'       => 'nullable|string',
            'images'            => 'nullable|array',
            'images.*'          => 'image|mimes:jpg,jpeg,png,webp|max:2048',
            'existing_images'   => 'nullable|array',
            'existing_images.*' => 'string',
        ];
    }

    public function index()
    {
        // Must match the real path: resources/js/Pages/AdminPages/Event.jsx
        return Inertia::render('AdminPages/Event', [
            'events' => Event::latest()->get(),
        ]);
    }

    public function store(Request $request)
    {
        $request->validate($this->rules());

        $imagePaths = [];
        if ($request->hasFile('images')) {
            foreach ($request->file('images') as $image) {
                $imagePaths[] = $image->store('events', 'public');
            }
        }

        Event::create([
            'title'       => $request->title,
            'date'        => $request->date,
            'description' => $request->description,
            'images'      => $imagePaths,
        ]);

        return redirect()->route('usevents.index')
            ->with('success', 'Event created successfully');
    }

    public function update(Request $request, Event $event)
    {
        $request->validate($this->rules());

        $current = $event->images ?? [];

        // keep only paths that truly belong to this event
        $keep = array_values(array_intersect($request->input('existing_images', []), $current));

        foreach (array_diff($current, $keep) as $removed) {
            Storage::disk('public')->delete($removed);
        }

        if ($request->hasFile('images')) {
            foreach ($request->file('images') as $image) {
                $keep[] = $image->store('events', 'public');
            }
        }

        $event->update([
            'title'       => $request->title,
            'date'        => $request->date,
            'description' => $request->description,
            'images'      => $keep,
        ]);

        return redirect()->route('usevents.index')
            ->with('success', 'Event updated successfully');
    }

    public function destroy(Event $event)
    {
        foreach ($event->images ?? [] as $image) {
            Storage::disk('public')->delete($image);
        }

        $event->delete();

        return redirect()->route('usevents.index')
            ->with('success', 'Event deleted successfully');
    }
}