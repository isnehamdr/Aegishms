<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class ContactFormMail extends Mailable
{
    use Queueable, SerializesModels;

    public $data;

    public function __construct(array $data)
    {
        $this->data = $data;
    }

    public function build()
    {
        return $this->from(config('mail.from.address'), config('mail.from.name'))
                   ->subject('New Contact Form Submission')
                   ->view('emails.contact') // Make sure this view exists
                   ->with([
                       'firstName' => $this->data['firstName'],
                       'lastName' => $this->data['lastName'],
                       'email' => $this->data['email'],
                       'phone' => $this->data['phone'],
                       'messageContent' => $this->data['message'], // Renamed to avoid conflict
                   ]);
    }
}