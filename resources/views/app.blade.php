<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">

<style>
    body {
        font-family: system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
    }

    .fonts-loaded h1,
    .fonts-loaded h2,
    .fonts-loaded h3,
    .fonts-loaded span {
        font-family: "EB Garamond", Georgia, serif;
    }

    .fonts-loaded p,
    .fonts-loaded a {
        font-family: "Inter", system-ui, sans-serif;
    }
</style>

{{-- ======================================================
       SERVER-SIDE SEO — readable by Ahrefs, Google, all crawlers
       Reads from Inertia props before JavaScript loads
  ====================================================== --}}
@php
$inertiaPage = $page ?? [];
$props = $inertiaPage['props'] ?? [];
$seo = $props['seo'] ?? [];

// Default values for Aegis HMS
$siteName = 'Aegis HMS';
$siteUrl = 'https://www.aegishms.com';

$metaTitle = $seo['title'] ?? 'Aegis HMS | Hotel Management System in Nepal';
$metaDescription = $seo['description'] ?? 'Aegis HMS - Complete hotel management system for hotels, resorts, and restaurants in Nepal. Manage bookings, inventory, billing, and more.';
$metaImage = $seo['image'] ?? $siteUrl . '/images/og-home.jpg';
$canonicalUrl = $seo['canonical'] ?? request()->url();
$metaKeywords = $seo['keywords'] ?? 'hotel management system, hotel software Nepal, PMS, property management system, restaurant billing system';
$noIndex = $seo['noIndex'] ?? false;
$publishedTime = $seo['published_time'] ?? null;
$modifiedTime = $seo['modified_time'] ?? null;
$schema = $seo['schema'] ?? null;
$hreflang = $props['hreflang'] ?? [];
@endphp

{{-- REMOVED the static title rendering --}}
{{-- <title>{{ $metaTitle }}</title> --}}

<meta name="description" content="{{ $metaDescription }}">
@if($metaKeywords)
<meta name="keywords" content="{{ $metaKeywords }}">
@endif
<meta name="robots" content="{{ $noIndex ? 'noindex, nofollow' : 'index, follow' }}">
<link rel="canonical" href="{{ $canonicalUrl }}">

<!-- Open Graph -->
<meta property="og:type" content="{{ $seo['og_type'] ?? 'website' }}">
<meta property="og:url" content="{{ $canonicalUrl }}">
<meta property="og:title" content="{{ $metaTitle }}">
<meta property="og:description" content="{{ $metaDescription }}">
<meta property="og:image" content="{{ $metaImage }}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:site_name" content="{{ $siteName }}">
<meta property="og:locale" content="en_NP">

<!-- Twitter Cards -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="{{ $metaTitle }}">
<meta name="twitter:description" content="{{ $metaDescription }}">
<meta name="twitter:image" content="{{ $metaImage }}">

@if($publishedTime)
<meta property="article:published_time" content="{{ $publishedTime }}">
@endif
@if($modifiedTime)
<meta property="article:modified_time" content="{{ $modifiedTime }}">
@endif

<!-- Hreflang tags -->
@if(!empty($hreflang))
@foreach($hreflang as $lang)
<link rel="alternate" href="{{ $lang['href'] }}" hreflang="{{ $lang['hreflang'] }}" />
@endforeach
@endif

@if($schema)
<script type="application/ld+json">
    {
        !!json_encode($schema) !!
    }
</script>
@endif

<!-- Favicon -->
<link rel="icon" type="image/png" href="/images/logo3.png">
<link rel="apple-touch-icon" href="/images/logo3.png">

<!-- Fonts -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap">
<link rel="preload" href="/fonts/inter.woff2" as="font" type="font/woff2" crossorigin>

<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-FK4QJ73DST"></script>
<script>
    window.dataLayer = window.dataLayer || [];

    function gtag() {
        dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', 'G-FK4QJ73DST');
</script>


<nav class="sr-only" aria-label="Site navigation index" style="position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0,0,0,0); white-space: nowrap; border: 0;">
    <!-- Main Pages -->
    <a href="/">Home</a>


    <!-- Aegis Product Lines -->
    <a href="/aegis-hms">Aegis HMS</a>
    <a href="/aegis-core">Aegis Core</a>
    <a href="/aegis-elite">Aegis Elite</a>
    <a href="/aegis-infinity">Aegis Infinity</a>
    <a href="/aegis-restro">Aegis Restro</a>
    <a href="/aegis-order-app">Aegis Order App</a>
    <a href="/aegis-pulse">Aegis Pulse</a>
    <a href="/aegis-ops">Aegis Ops</a>
    <a href="/e-checkin">E-Checkin</a>

    <!-- Aegis Modules -->
    <a href="/modules/front-office">Front Office Module</a>
    <a href="/modules/housekeeping">Housekeeping Module</a>
    <a href="/modules/point-of-sales">Point of Sales Module</a>
    <a href="/modules/banquet">Banquet Module</a>
    <a href="/modules/inventory">Inventory Module</a>
    <a href="/modules/finance">Finance Module</a>
    <a href="/modules/costing">Costing Module</a>
    <a href="/modules/payroll">Payroll Module</a>
    <a href="/modules/foreign-exchange-encashment">Foreign Exchange Encashment</a>
    <a href="/modules/sales-marketing">Sales & Marketing Module</a>
    <a href="/modules/fixed-assets-module">Fixed Assets Module</a>
    <a href="/modules/waiter-app">Waiter App</a>
    <a href="/modules/aegis-pulse247">Aegis Pulse247</a>

    <!-- Aegis Company Pages -->
    <a href="/about-us">About Us</a>
    <a href="/teams">Teams</a>
    <a href="/events">Events</a>
    <a href="/blogs">Blogs</a>
    <a href="/termsandconditions">Terms and Conditions</a>
    <a href="/privacy-aegis-pulse">Privacy Aegis Pulse</a>
</nav>

<!-- ================= INERTIA / VITE ================= -->
@routes
@viteReactRefresh
@vite([
'resources/js/app.jsx'
])
@inertiaHead
</head>

<body class="antialiased font-sans">
    @inertia
</body>

</html>