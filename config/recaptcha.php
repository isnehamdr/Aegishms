<?php
return [
    'api_site_key' => env('RECAPTCHA_SITE_KEY'),
    'api_secret_key' => env('RECAPTCHA_SECRET_KEY'),
    'version' => 'v2',
    'skip_ip' => [],
    'default_validation_route' => 'biscolab-recaptcha/validate',
    'default_token_parameter_name' => 'token',
    'default_language' => null,
    'default_form_id' => 'biscolab-recaptcha-invisible-form',
    'explicit' => false,
    'tag_attributes' => [
        'theme' => 'light',
        'size' => 'normal',
        'tabindex' => 0,
        'callback' => null,
        'expired-callback' => null,
        'error-callback' => null,
    ]
];