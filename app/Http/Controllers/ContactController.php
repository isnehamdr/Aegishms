<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Log;
use App\Mail\ContactFormMail;

class ContactController extends Controller
{
    public function store(Request $request)
    {
        // Validate form data
        $validatedData = $request->validate([
            'firstName' => 'required|string|max:255',
            'lastName'  => 'required|string|max:255',
            'email'     => 'required|email|max:255',
            'phone'     => 'required|string|max:20',
            'message'   => 'required|string',
        ]);

        try {
            // Increase execution time for slow SMTP connections
            set_time_limit(120);

            Log::info("Sending contact email...", $validatedData);

            // Send email immediately
            Mail::to('shresthatimesh@gmail.com')
                ->send(new ContactFormMail($validatedData));

            Log::info("Mail sent successfully.");

            return back()->with('success', 'Thank you for your message! We will get back to you soon.');
        } catch (\Exception $e) {
            Log::error("Email sending failed: " . $e->getMessage());
            return back()->with('error', 'Failed to send message. Please try again later.');
        }
    }
}
