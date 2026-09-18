<!DOCTYPE html>
<html>
<head>
    <title>New Contact Form Submission</title>
</head>
<body>
    <h2>New Contact Form Submission</h2>
    
    <p><strong>Name:</strong> {{ $firstName }} {{ $lastName }}</p>
    <p><strong>Email:</strong> {{ $email }}</p>
    <p><strong>Phone:</strong> {{ $phone }}</p>
    <p><strong>Message:</strong></p>
    <p>{{ $messageContent }}</p>
    
    <p>Submitted at: {{ now()->format('Y-m-d H:i:s') }}</p>
</body>
</html>