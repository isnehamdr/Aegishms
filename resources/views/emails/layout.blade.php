<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{ $title ?? 'Aegis Software' }}</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
        }
        .header {
            background-color: #005c94;
            padding: 20px;
            text-align: center;
            color: white;
            border-radius: 5px 5px 0 0;
        }
        .content {
            padding: 20px;
            border: 1px solid #ddd;
            border-top: none;
            border-radius: 0 0 5px 5px;
        }
        .footer {
            margin-top: 20px;
            text-align: center;
            font-size: 12px;
            color: #777;
        }
        .button {
            display: inline-block;
            padding: 10px 20px;
            background-color: #0EA5E9;
            color: white;
            text-decoration: none;
            border-radius: 5px;
            margin: 10px 0;
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>Aegis Software</h1>
    </div>
    
    <div class="content">
        {{ $slot }}
    </div>
    
    <div class="footer">
        <p>&copy; {{ date('Y') }} Aegis Software. All rights reserved.</p>
        <p>Dhantil Lane 1, Lalitpur 44600, Nepal</p>
    </div>
</body>
</html>