<?php

use App\Http\Controllers\BlogController;
use App\Http\Controllers\CareerController;
use App\Http\Controllers\EventController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\LogController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::get('/admin-blog', function () {
        return Inertia::render('AdminPages/Blog');
    });

  Route::get('/admin-blog', [BlogController::class, 'index'])->name('ourblogs.index');
    Route::post('/ourblogs', [BlogController::class, 'store'])->name('ourblogs.store');
    Route::get('/ourblogs/{id}', [BlogController::class, 'show'])->name('ourblogs.show');
    Route::put('/ourblogs/{id}', [BlogController::class, 'update'])->name('ourblogs.update');
    Route::delete('/ourblogs/{id}', [BlogController::class, 'destroy'])->name('ourblogs.destroy');

    
    Route::get('/admin-event', function () {
        return Inertia::render('AdminPages/Event');
    });

    Route::get('/admin-event', [EventController::class, 'index'])->name('usevents.index');
    Route::post('/usevents', [EventController::class, 'store'])->name('usevents.store');
    Route::put('/usevents/{event}', [EventController::class, 'update'])->name('usevents.update');
    Route::delete('/usevents/{event}', [EventController::class, 'destroy'])->name('usevents.destroy');

    Route::get('/admin-career', function () {
        return Inertia::render('AdminPages/Career');
    });

    Route::get('/admin-career', [CareerController::class, 'index'])->name('ourcareer.index');
    Route::post('/ourcareer', [CareerController::class, 'store'])->name('ourcareer.store');
    Route::put('/ourcareer/{career}', [CareerController::class, 'update'])->name('ourcareer.update');
    Route::delete('/ourcareer/{career}', [CareerController::class, 'destroy'])->name('ourcareer.destroy');


     Route::get('/admin-career', function () {
        return Inertia::render('AdminPages/Career');
    });

    Route::get('/admin-career', [CareerController::class, 'index'])->name('ourcareer.index');
    Route::post('/ourcareer', [CareerController::class, 'store'])->name('ourcareer.store');
    Route::put('/ourcareer/{career}', [CareerController::class, 'update'])->name('ourcareer.update');
    Route::delete('/ourcareer/{career}', [CareerController::class, 'destroy'])->name('ourcareer.destroy');


    Route::get('/admin-user', function () {
        return Inertia::render('AdminPages/UserManagement');
    });

   Route::get('/ourusers', [UserController::class, 'index'])->name('ourusers.index');
    Route::post('/ourusers', [UserController::class, 'store'])->name('ourusers.store');
    Route::get('/ourusers/{id}', [UserController::class, 'show'])->name('ourusers.show');
    Route::put('/ourusers/{id}', [UserController::class, 'update'])->name('ourusers.update');
    Route::delete('/ourusers/{id}', [UserController::class, 'destroy'])->name('ourusers.destroy');


      Route::get('/activity-log', function () {
        return Inertia::render('AdminPages/ActivityLog');
    });

    Route::get('/logs', [LogController::class, 'index'])->name('logs.index');
});

Route::get('/latest-blogs', [BlogController::class, 'latest'])->name('blogs.latest');

Route::get('/blogs', [BlogController::class, 'publicIndex'])->name('blogs.public.index');
Route::get('/blogs/{slug}', [BlogController::class, 'publicShow'])->name('blogs.public.show');

   Route::get('/events', [EventController::class, 'publicIndex'])->name('events.public.index');

      Route::get('/careers', [CareerController::class, 'publicIndex'])->name('careers.public.index');


// Helper function to get base SEO data
if (! function_exists('getBaseSeo')) {
    function getBaseSeo()
    {
        return [
            'site_name' => 'Aegis HMS',
            'site_url' => 'https://www.aegishms.com',
            'default_image' => '/images/og-home.jpg',
            'twitter_handle' => '@aegishms',
            'locale' => 'en_NP',
        ];
    }
}

// Helper function to get organization schema
if (! function_exists('getOrganizationSchema')) {
    function getOrganizationSchema($siteUrl)
    {
        return [
            '@context' => 'https://schema.org',
            '@type' => 'Organization',
            '@id' => $siteUrl.'#organization',
            'name' => 'Aegis Software',
            'url' => $siteUrl,
            'logo' => $siteUrl.'/images/logo.png',
            'foundingDate' => '2020',
            'description' => 'Aegis Software develops AegisHMS/Restro – a complete Hotel and Restaurant Management System for businesses in Nepal and beyond.',
            'address' => [
                '@type' => 'PostalAddress',
                'addressCountry' => 'Nepal',
            ],
        ];
    }
}

// Helper function to get website schema
if (! function_exists('getWebsiteSchema')) {
    function getWebsiteSchema($siteUrl)
    {
        return [
            '@type' => 'WebSite',
            '@id' => $siteUrl.'#website',
            'url' => $siteUrl,
            'name' => 'Aegis Software',
            'publisher' => ['@id' => $siteUrl.'#organization'],
        ];
    }
}

// Helper function to get breadcrumb schema
if (! function_exists('getBreadcrumbSchema')) {
    function getBreadcrumbSchema($items)
    {
        $itemListElement = [];
        foreach ($items as $position => $item) {
            $itemListElement[] = [
                '@type' => 'ListItem',
                'position' => $position + 1,
                'name' => $item['name'],
                'item' => $item['url'],
            ];
        }

        return [
            '@context' => 'https://schema.org',
            '@type' => 'BreadcrumbList',
            'itemListElement' => $itemListElement,
        ];
    }
}

Route::get('/', function () {
    $siteUrl = 'https://www.aegishms.com';
    $canonicalUrl = $siteUrl;

    // Software Application Schema
    $softwareSchema = [
        '@type' => 'SoftwareApplication',
        'name' => 'Aegis HMS',
        'applicationCategory' => 'BusinessApplication',
        'operatingSystem' => 'Web-based',
        'offers' => [
            '@type' => 'Offer',
            'price' => '0',
            'priceCurrency' => 'USD',
        ],
        'aggregateRating' => [
            '@type' => 'AggregateRating',
            'ratingValue' => '4.8',
            'ratingCount' => '150',
        ],
    ];

    // Organization Schema
    $organizationSchema = [
        '@type' => 'Organization',
        'name' => 'Aegis HMS',
        'url' => $siteUrl,
        'logo' => $siteUrl.'/images/og-home.jpg',
        'sameAs' => [
            'https://www.facebook.com/aegishms',
            'https://www.linkedin.com/company/aegishms',
            'https://twitter.com/aegishms',
        ],
        'contactPoint' => [
            '@type' => 'ContactPoint',
            'telephone' => '+977-9707096690',
            'contactType' => 'customer support',
            'email' => 'info@aegishms.com',
        ],
        'address' => [
            '@type' => 'PostalAddress',
            'streetAddress' => 'Dhantil Lane',
            'addressLocality' => 'Kathmandu',
            'addressRegion' => 'NP',
            'postalCode' => 'XXXXX',
            'addressCountry' => 'Nepal',
        ],
    ];

    // Local Business Schema
    $localBusinessSchema = [
        '@type' => 'LocalBusiness',
        '@id' => $siteUrl.'#localbusiness',
        'name' => 'Aegis HMS',
        'url' => $siteUrl,
        'logo' => $siteUrl.'/images/logo.png',
        'image' => $siteUrl.'/images/og-home.jpg',
        'description' => 'Hotel PMS, property management system, hotel management software Nepal, cloud PMS Nepal, hospitality software, AegisHMS, Aegis Software, server based, IRD approved, real time inventory, channel manager, booking engine, hotel ERP Nepal, restaurant POS system',
        'telephone' => '+977-9707096690',
        'email' => 'info@aegishms.com',
        'priceRange' => '$$',
        'address' => [
            '@type' => 'PostalAddress',
            'streetAddress' => 'Dhantil Lane 1',
            'addressLocality' => 'Lalitpur',
            'addressRegion' => 'Bagmati',
            'postalCode' => '44600',
            'addressCountry' => 'NP',
        ],
        'geo' => [
            '@type' => 'GeoCoordinates',
            'latitude' => 27.6644,
            'longitude' => 85.3188,
        ],
        'areaServed' => [
            '@type' => 'Country',
            'name' => 'Nepal',
        ],
        'sameAs' => [
            'https://www.facebook.com/aegishms',
            'https://www.linkedin.com/company/aegis-software-nepal/',
            'https://www.instagram.com/aegissoftwarenepal/',
            'https://www.youtube.com/@aegissoftware-nepal',
        ],
    ];

    // Website Schema
    $websiteSchema = [
        '@type' => 'WebSite',
        'name' => 'Aegis HMS',
        'url' => $siteUrl,
        'potentialAction' => [
            '@type' => 'SearchAction',
            'target' => [
                '@type' => 'EntryPoint',
                'urlTemplate' => $siteUrl.'/search?q={search_term_string}',
            ],
            'query-input' => 'required name=search_term_string',
        ],
    ];

    // Combine all schemas
    $fullSchema = [
        '@context' => 'https://schema.org',
        '@graph' => [
            $softwareSchema,
            $organizationSchema,
            $localBusinessSchema,
            $websiteSchema,
        ],
    ];

    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
        'seo' => [
            'title' => 'Aegis HMS - Best Hotel and Restaurant Management Software in Nepal | PMS and RMS Solution',
            'description' => 'Aegis HMS is Nepal\'s leading cloud-based hotel and restaurant management software. Streamline operations, boost revenue, and enhance guest experience with our all-in-one PMS solution.',
            'keywords' => 'hotel management software Nepal, restaurant POS system, cloud PMS Nepal, hospitality software, Aegis HMS, hotel ERP Nepal, property management system, IRD approved, channel manager, booking engine',
            'image' => $siteUrl.'/images/og-home.jpg',
            'canonical' => $canonicalUrl,
            'og_type' => 'website',
            'schema' => $fullSchema,
        ],

    ]);
})->name('home');

Route::group([], function () {
    // In your routes/web.php
    Route::get('/modules/{slug}', function ($slug) {
        $siteUrl = 'https://www.aegishms.com';
        $canonicalUrl = $siteUrl.'/modules/'.$slug;

        // Load modules from JSON file
        $modules = json_decode(
            file_get_contents(public_path('modules.json')),
            true
        );
        $module = collect($modules)->firstWhere('slug', $slug);

        if (! $module) {
            abort(404);
        }

        $moduleTitles = [
            'front-office' => 'Front Office Management',
            'housekeeping' => 'Housekeeping Management',
            'point-of-sales' => 'Point of Sale System',
            'banquet' => 'Banquet Management',
            'inventory' => 'Inventory Management',
            'finance' => 'Finance Management',
            'costing' => 'F&B Costing',
            'payroll' => 'Payroll Management',
            'foreign-exchange-encashment' => 'Foreign Exchange Encashment (FEER)',
            'sales-marketing' => 'Sales & Marketing',
            'fixed-assets-module' => 'Fixed Assets Management',
            'waiter-app' => 'Waiter App',
            'aegis-pulse247' => 'Aegis Pulse247',
        ];

        $moduleTitle = $module['title'] ?? ($moduleTitles[$slug] ?? ucfirst(str_replace('-', ' ', $slug)).' Module');

        return Inertia::render('ModuleDetail', [
            'module' => $module,
            'seo' => [
                'title' => $moduleTitle.' | Aegis HMS Hotel Management System',
                'description' => substr($module['description'] ?? 'Explore Aegis HMS '.$moduleTitle.'. Streamline your hotel operations with our comprehensive hotel management software in Nepal.', 0, 160),
                'keywords' => $slug.', hotel management module, '.$slug.' system, hotel software Nepal, Aegis HMS',
                'image' => $siteUrl.($module['image_path'] ?? '/images/og-modules.jpg'),
                'canonical' => $canonicalUrl,
            ],
        ]);
    })->name('modules.show');

    Route::get('/partners', function () {
        $siteUrl = getBaseSeo()['site_url'];
        $canonicalUrl = $siteUrl.'/partners';

        return Inertia::render('Partners', [
            'seo' => [
                'title' => 'Our Partners | Aegis HMS Integration Partners Nepal',
                'description' => 'Discover Aegis HMS partners. We collaborate with leading hotels, resorts, and technology providers across Nepal to deliver exceptional hospitality solutions.',
                'keywords' => 'Aegis partners, hotel software partners Nepal, hospitality partners, hotel management integration',
                'image' => $siteUrl.'/images/og-partners.jpg',
                'canonical' => $canonicalUrl,
                'schema' => getBreadcrumbSchema([
                    ['name' => 'Home', 'url' => $siteUrl],
                    ['name' => 'Partners', 'url' => $canonicalUrl],
                ]),
            ],
        ]);
    });

    Route::get('/teams', function () {
        $siteUrl = getBaseSeo()['site_url'];
        $canonicalUrl = $siteUrl.'/teams';

        return Inertia::render('OurTeams', [
            'seo' => [
                'title' => 'Our Team | Aegis Software Development Team Nepal',
                'description' => 'Meet the expert team behind Aegis HMS. Our dedicated developers, designers, and hospitality specialists work together to create Nepal\'s best hotel management software.',
                'keywords' => 'Aegis team, software development team Nepal, hotel management experts, Nepali developers',
                'image' => $siteUrl.'/images/og-teams.jpg',
                'canonical' => $canonicalUrl,
                'schema' => getBreadcrumbSchema([
                    ['name' => 'Home', 'url' => $siteUrl],
                    ['name' => 'Our Team', 'url' => $canonicalUrl],
                ]),
            ],
        ]);
    });

    // Route::get('/events', function () {
    //     $siteUrl = getBaseSeo()['site_url'];
    //     $canonicalUrl = $siteUrl.'/events';

    //     return Inertia::render('Events', [
    //         'seo' => [
    //             'title' => 'Events & Webinars | Aegis HMS Hospitality Events Nepal',
    //             'description' => 'Stay updated with Aegis HMS events, webinars, and hospitality industry gatherings in Nepal. Join us to learn about hotel management trends.',
    //             'keywords' => 'Aegis events, hotel management webinars, hospitality events Nepal, hotel software seminars',
    //             'image' => $siteUrl.'/images/og-events.jpg',
    //             'canonical' => $canonicalUrl,
    //             'schema' => getBreadcrumbSchema([
    //                 ['name' => 'Home', 'url' => $siteUrl],
    //                 ['name' => 'Events', 'url' => $canonicalUrl],
    //             ]),
    //         ],
    //     ]);
    // });

    Route::get('/about-us', function () {
        $siteUrl = getBaseSeo()['site_url'];
        $canonicalUrl = $siteUrl.'/about-us';

        // Organization schema
        $organizationSchema = getOrganizationSchema($siteUrl);

        // About page schema
        $aboutPageSchema = [
            '@type' => 'AboutPage',
            '@id' => $canonicalUrl.'#webpage',
            'url' => $canonicalUrl,
            'name' => 'About Aegis Software | Hotel Management System Nepal',
            'description' => "Learn about Aegis Software's mission to provide Nepal's best hotel and restaurant management solutions through AegisHMS/Restro software.",
            'isPartOf' => ['@id' => $siteUrl.'#website'],
            'about' => ['@id' => $siteUrl.'#organization'],
            'datePublished' => '2020-01-01',
            'dateModified' => date('Y-m-d'),
        ];

        // Website schema
        $websiteSchema = getWebsiteSchema($siteUrl);

        // Combine schemas
        $fullSchema = [
            '@context' => 'https://schema.org',
            '@graph' => [
                $organizationSchema,
                $aboutPageSchema,
                $websiteSchema,
                getBreadcrumbSchema([
                    ['name' => 'Home', 'url' => $siteUrl],
                    ['name' => 'About Us', 'url' => $canonicalUrl],
                ])['itemListElement'] ? [
                    '@type' => 'BreadcrumbList',
                    'itemListElement' => getBreadcrumbSchema([
                        ['name' => 'Home', 'url' => $siteUrl],
                        ['name' => 'About Us', 'url' => $canonicalUrl],
                    ])['itemListElement'],
                ] : [],
            ],
        ];

        return Inertia::render('AboutUs', [
            'seo' => [
                'title' => 'About Aegis HMS | Hotel Management Software Nepal',
                'description' => 'Aegis Software: Creators of AegisHMS/Restro. Nepal\'s leading hotel & restaurant management system since 2020. Streamline operations with our cloud solution.',
                'keywords' => 'Aegis HMS, hotel management software Nepal, restaurant management system, cloud hotel software, AegisHMS, Restro, Nepal hospitality software, hotel billing system',
                'image' => $siteUrl.'/images/og-about-aegis.jpg',
                'canonical' => $canonicalUrl,
                'og_type' => 'website',
                'published_time' => '2020-01-01',
                'modified_time' => date('Y-m-d'),
                'noIndex' => false,
                'schema' => $fullSchema,
            ],
        ]);
    })->name('about.us');

    Route::get('/services', function () {
        $siteUrl = getBaseSeo()['site_url'];
        $canonicalUrl = $siteUrl.'/services';

        return Inertia::render('Services', [
            'seo' => [
                'title' => 'Our Services | Aegis HMS Hotel Management Solutions Nepal',
                'description' => 'Explore Aegis HMS comprehensive services: hotel management software, restaurant POS, inventory management, billing systems, and cloud solutions for Nepali hospitality businesses.',
                'keywords' => 'hotel management services, restaurant POS Nepal, hotel software services, cloud PMS, hospitality solutions Nepal',
                'image' => $siteUrl.'/images/og-services.jpg',
                'canonical' => $canonicalUrl,
                'schema' => getBreadcrumbSchema([
                    ['name' => 'Home', 'url' => $siteUrl],
                    ['name' => 'Services', 'url' => $canonicalUrl],
                ]),
            ],
        ]);
    });

    Route::get('/clients', function () {
        $siteUrl = getBaseSeo()['site_url'];
        $canonicalUrl = $siteUrl.'/clients';

        return Inertia::render('Clients', [
            'seo' => [
                'title' => 'Our Clients | Aegis HMS Hotel Management Software Clients Nepal',
                'description' => 'See why leading hotels, resorts, and restaurants in Nepal trust Aegis HMS for their property management needs. Join our growing family of satisfied clients.',
                'keywords' => 'Aegis clients, hotel software clients Nepal, restaurant management customers, property management users',
                'image' => $siteUrl.'/images/og-clients.jpg',
                'canonical' => $canonicalUrl,
                'schema' => getBreadcrumbSchema([
                    ['name' => 'Home', 'url' => $siteUrl],
                    ['name' => 'Clients', 'url' => $canonicalUrl],
                ]),
            ],
        ]);
    });

    Route::get('/e-checkin', function () {
        $siteUrl = getBaseSeo()['site_url'];
        $canonicalUrl = $siteUrl.'/e-checkin';

        return Inertia::render('Echeckin', [
            'seo' => [
                'title' => 'E-Checkin | Digital Guest Check-in System Nepal | Aegis HMS',
                'description' => 'Streamline hotel check-ins with Aegis HMS E-Checkin. Digital registration, contactless check-in, and pre-arrival forms for modern hotels in Nepal.',
                'keywords' => 'hotel e-checkin, digital check-in system, contactless check-in Nepal, guest registration software, pre-arrival forms',
                'image' => $siteUrl.'/images/og-echeckin.jpg',
                'canonical' => $canonicalUrl,
                'schema' => getBreadcrumbSchema([
                    ['name' => 'Home', 'url' => $siteUrl],
                    ['name' => 'E-Checkin', 'url' => $canonicalUrl],
                ]),
            ],
        ]);
    });

    Route::get('/aegis-ops', function () {
        $siteUrl = getBaseSeo()['site_url'];
        $canonicalUrl = $siteUrl.'/aegis-ops';

        return Inertia::render('Aegisops', [
            'seo' => [
                'title' => 'Aegis OPS | Hotel Operations Management System Nepal',
                'description' => 'Aegis OPS - Comprehensive hotel operations management system. Streamline housekeeping, maintenance, and front desk operations for Nepali hotels.',
                'keywords' => 'hotel operations management, housekeeping software, maintenance management, hotel ops system Nepal',
                'image' => $siteUrl.'/images/og-aegisops.jpg',
                'canonical' => $canonicalUrl,
                'schema' => getBreadcrumbSchema([
                    ['name' => 'Home', 'url' => $siteUrl],
                    ['name' => 'Aegis OPS', 'url' => $canonicalUrl],
                ]),
            ],
        ]);
    });

    Route::get('/kds', function () {
        $siteUrl = getBaseSeo()['site_url'];
        $canonicalUrl = $siteUrl.'/kds';

        return Inertia::render('Kds', [
            'seo' => [
                'title' => 'Kitchen Display System (KDS) | Hotel Operations Management System Nepal',
                'description' => 'Kitchen Display System (KDS) - Comprehensive hotel operations management system. Streamline housekeeping, maintenance, and front desk operations for Nepali hotels.',
                'keywords' => 'hotel operations management, housekeeping software, maintenance management, hotel kds system Nepal',
                'image' => $siteUrl.'/images/og-aegisops.jpg',
                'canonical' => $canonicalUrl,
                'schema' => getBreadcrumbSchema([
                    ['name' => 'Home', 'url' => $siteUrl],
                    ['name' => 'Kitchen Display System (KDS)', 'url' => $canonicalUrl],
                ]),
            ],
        ]);
    });

    // Route::get('/blogs', function () {
    //     $siteUrl = getBaseSeo()['site_url'];
    //     $canonicalUrl = $siteUrl.'/blogs';

    //     return Inertia::render('BlogSection', [
    //         'seo' => [
    //             'title' => 'Blog | Aegis HMS Hotel Management Insights Nepal',
    //             'description' => 'Read the latest insights on hotel management, restaurant operations, hospitality technology trends, and tips from Aegis HMS experts in Nepal.',
    //             'keywords' => 'hotel management blog, hospitality insights Nepal, restaurant tips, property management articles, hotel technology trends',
    //             'image' => $siteUrl.'/images/og-blog.jpg',
    //             'canonical' => $canonicalUrl,
    //             'og_type' => 'website',
    //             'schema' => [
    //                 '@context' => 'https://schema.org',
    //                 '@type' => 'Blog',
    //                 '@id' => $canonicalUrl.'#blog',
    //                 'url' => $canonicalUrl,
    //                 'name' => 'Aegis HMS Blog',
    //                 'description' => 'Hotel management insights and hospitality technology tips',
    //                 'publisher' => ['@id' => $siteUrl.'#organization'],
    //             ],
    //         ],
    //     ]);
    // });

    // Route::get('/blogs/{slug}', function ($slug) {
    //     $siteUrl = getBaseSeo()['site_url'];
    //     $canonicalUrl = $siteUrl.'/blogs/'.$slug;

    //     // This would typically come from a database
    //     $blogTitles = [
    //         'hotel-management-tips' => 'Essential Hotel Management Tips for 2024',
    //         'restaurant-pos-benefits' => 'Benefits of Modern Restaurant POS Systems',
    //         'cloud-pms-advantages' => 'Why Cloud PMS is Better for Your Hotel',
    //         'aegishms-kitchen-display-system-helps-restaurants-run-smarter' => 'How AegisHMS Kitchen Display System (KDS) Helps Restaurants Run Smarter',
    //         'aegishms-loyalty-membership-module-builds-lasting-guest-relationships' => 'How AegisHMS Loyalty & Membership Module Helps Build Lasting Guest Relationships',
    //     ];

    //     $blogTitle = $blogTitles[$slug] ?? ucfirst(str_replace('-', ' ', $slug));

    //     return Inertia::render('BlogDetail', [
    //         'seo' => [
    //             'title' => $blogTitle.' | Aegis HMS Blog Nepal',
    //             'description' => 'Read "'.$blogTitle.'" - expert insights on hotel management and hospitality technology from Aegis HMS, Nepal\'s leading hotel software provider.',
    //             'keywords' => $slug.', hotel management article, hospitality blog Nepal, hotel software tips',
    //             'image' => $siteUrl.'/images/og-blog-post.jpg',
    //             'canonical' => $canonicalUrl,
    //             'og_type' => 'article',
    //             'published_time' => date('Y-m-d', strtotime('-1 month')),
    //             'modified_time' => date('Y-m-d'),
    //             'schema' => getBreadcrumbSchema([
    //                 ['name' => 'Home', 'url' => $siteUrl],
    //                 ['name' => 'Blog', 'url' => $siteUrl.'/blogs'],
    //                 ['name' => $blogTitle, 'url' => $canonicalUrl],
    //             ]),
    //         ],
    //     ]);
    // });

    Route::get('/contact', function () {
        $siteUrl = getBaseSeo()['site_url'];
        $canonicalUrl = $siteUrl.'/contact';

        return Inertia::render('Contact', [
            'seo' => [
                'title' => 'Contact Us | Aegis HMS Hotel Management Software Nepal',
                'description' => 'Contact Aegis HMS for hotel management software inquiries, demos, pricing, and support. Our team in Nepal is ready to help transform your hospitality business.',
                'keywords' => 'contact Aegis, hotel software inquiry, demo request Nepal, pricing information, support contact',
                'image' => $siteUrl.'/images/og-contact.jpg',
                'canonical' => $canonicalUrl,
                'schema' => getBreadcrumbSchema([
                    ['name' => 'Home', 'url' => $siteUrl],
                    ['name' => 'Contact', 'url' => $canonicalUrl],
                ]),
            ],
        ]);
    })->name('contact');

    Route::get('/aegis-hms', function () {
        $siteUrl = getBaseSeo()['site_url'];
        $canonicalUrl = $siteUrl.'/aegis-hms';

        return Inertia::render('AegisHMS', [
            'seo' => [
                'title' => 'Aegis HMS | Complete Hotel Management System Nepal',
                'description' => 'Aegis HMS - Comprehensive hotel management system for Nepali hotels. Features: front desk, reservations, housekeeping, billing, and reporting. Cloud-based PMS.',
                'keywords' => 'Aegis HMS, hotel management system Nepal, property management system, cloud PMS, hotel software Kathmandu',
                'image' => $siteUrl.'/images/og-aegishms.jpg',
                'canonical' => $canonicalUrl,
                'schema' => getBreadcrumbSchema([
                    ['name' => 'Home', 'url' => $siteUrl],
                    ['name' => 'Aegis HMS', 'url' => $canonicalUrl],
                ]),
            ],
        ]);
    });

    Route::get('/aegis-core', function () {
        $siteUrl = getBaseSeo()['site_url'];
        $canonicalUrl = $siteUrl.'/aegis-core';

        return Inertia::render('AegisCore', [
            'seo' => [
                'title' => 'Aegis Core | Essential Hotel Management Software Nepal',
                'description' => 'Aegis Core - Essential hotel management system for small and medium hotels in Nepal. Manage bookings, guests, and billing with ease.',
                'keywords' => 'Aegis Core, basic hotel software, small hotel management Nepal, essential PMS, budget hotel software',
                'image' => $siteUrl.'/images/og-aegiscore.jpg',
                'canonical' => $canonicalUrl,
                'schema' => getBreadcrumbSchema([
                    ['name' => 'Home', 'url' => $siteUrl],
                    ['name' => 'Aegis Core', 'url' => $canonicalUrl],
                ]),
            ],
        ]);
    });

    Route::get('/aegis-elite', function () {
        $siteUrl = getBaseSeo()['site_url'];
        $canonicalUrl = $siteUrl.'/aegis-elite';

        return Inertia::render('AegisElite', [
            'seo' => [
                'title' => 'Aegis Elite | Premium Hotel Management System for Luxury Hotels Nepal',
                'description' => 'Aegis Elite - Premium hotel management solution for luxury hotels and resorts in Nepal. Advanced features, analytics, and personalized service.',
                'keywords' => 'Aegis Elite, luxury hotel software Nepal, resort management system, premium PMS, 5-star hotel software',
                'image' => $siteUrl.'/images/og-aegiselite.jpg',
                'canonical' => $canonicalUrl,
                'schema' => getBreadcrumbSchema([
                    ['name' => 'Home', 'url' => $siteUrl],
                    ['name' => 'Aegis Elite', 'url' => $canonicalUrl],
                ]),
            ],
        ]);
    });

    Route::get('/aegis-infinity', function () {
        $siteUrl = getBaseSeo()['site_url'];
        $canonicalUrl = $siteUrl.'/aegis-infinity';

        return Inertia::render('AegisInfinity', [
            'seo' => [
                'title' => 'Aegis Infinity | Enterprise Hotel Management Solution Nepal',
                'description' => 'Aegis Infinity - Enterprise-grade hotel management system for hotel chains and large properties in Nepal. Multi-property management, central reservations.',
                'keywords' => 'Aegis Infinity, enterprise hotel software, multi-property PMS, hotel chain management Nepal, central reservation system',
                'image' => $siteUrl.'/images/og-aegisinfinity.jpg',
                'canonical' => $canonicalUrl,
                'schema' => getBreadcrumbSchema([
                    ['name' => 'Home', 'url' => $siteUrl],
                    ['name' => 'Aegis Infinity', 'url' => $canonicalUrl],
                ]),
            ],
        ]);
    });

    Route::get('/aegis-restro', function () {
        $siteUrl = getBaseSeo()['site_url'];
        $canonicalUrl = $siteUrl.'/aegis-restro';

        return Inertia::render('ServiceDetails', [
            'seo' => [
                'title' => 'Aegis Restro | Restaurant Management System Nepal | POS & Billing',
                'description' => 'Aegis Restro - Complete restaurant management system for Nepal. POS, table management, kitchen display, inventory, and billing for restaurants and cafes.',
                'keywords' => 'Aegis Restro, restaurant POS Nepal, restaurant management system, cafe billing software, restaurant inventory Nepal',
                'image' => $siteUrl.'/images/og-aegisrestro.jpg',
                'canonical' => $canonicalUrl,
                'schema' => getBreadcrumbSchema([
                    ['name' => 'Home', 'url' => $siteUrl],
                    ['name' => 'Aegis Restro', 'url' => $canonicalUrl],
                ]),
            ],
        ]);
    });

    Route::get('/aegis-order-app', function () {
        $siteUrl = getBaseSeo()['site_url'];
        $canonicalUrl = $siteUrl.'/aegis-order-app';

        return Inertia::render('AegisOrderApp', [
            'seo' => [
                'title' => 'Aegis Order App | Online Ordering System for Restaurants Nepal',
                'description' => 'Aegis Order App - Online ordering system for restaurants in Nepal. QR code ordering, digital menus, and contactless dining solutions.',
                'keywords' => 'online ordering Nepal, QR menu, restaurant ordering app, digital menu Nepal, contactless dining',
                'image' => $siteUrl.'/images/og-orderapp.jpg',
                'canonical' => $canonicalUrl,
                'schema' => getBreadcrumbSchema([
                    ['name' => 'Home', 'url' => $siteUrl],
                    ['name' => 'Aegis Order App', 'url' => $canonicalUrl],
                ]),
            ],
        ]);
    });

    Route::get('/aegis-pulse', function () {
        $siteUrl = getBaseSeo()['site_url'];
        $canonicalUrl = $siteUrl.'/aegis-pulse';

        return Inertia::render('ServicePluse', [
            'seo' => [
                'title' => 'Aegis Pulse | Business Intelligence & Analytics for Hotels Nepal',
                'description' => 'Aegis Pulse - Business intelligence and analytics for hotels in Nepal. Real-time insights, revenue management, and performance dashboards.',
                'keywords' => 'hotel analytics Nepal, business intelligence hospitality, revenue management Nepal, hotel reporting software, performance dashboards',
                'image' => $siteUrl.'/images/og-pulse.jpg',
                'canonical' => $canonicalUrl,
                'schema' => getBreadcrumbSchema([
                    ['name' => 'Home', 'url' => $siteUrl],
                    ['name' => 'Aegis Pulse', 'url' => $canonicalUrl],
                ]),
            ],
        ]);
    });

    // Route::get('/careers', function () {
    //     $siteUrl = getBaseSeo()['site_url'];
    //     $canonicalUrl = $siteUrl.'/careers';

    //     return Inertia::render('Career', [
    //         'seo' => [
    //             'title' => 'Careers | Join Aegis Software Team Nepal',
    //             'description' => 'Join Aegis Software team in Nepal. We\'re hiring developers, designers, sales professionals, and hospitality experts. Build your career with us.',
    //             'keywords' => 'Aegis careers, software jobs Nepal, hospitality tech careers, developer jobs Kathmandu, IT jobs Nepal',
    //             'image' => $siteUrl.'/images/og-careers.jpg',
    //             'canonical' => $canonicalUrl,
    //             'schema' => getBreadcrumbSchema([
    //                 ['name' => 'Home', 'url' => $siteUrl],
    //                 ['name' => 'Careers', 'url' => $canonicalUrl],
    //             ]),
    //         ],
    //     ]);
    // });

    Route::get('/isms-policy', function () {
        $siteUrl = getBaseSeo()['site_url'];
        $canonicalUrl = $siteUrl.'/isms-policy';

        return Inertia::render('ISMS', [
            'seo' => [
                'title' => 'ISMS Policy | Information Security Management System | Aegis Software',
                'description' => 'Aegis Software ISMS policy ensuring confidentiality, integrity, and availability of information. Committed to protecting information assets against security threats.',
                'keywords' => 'ISMS, information security policy, data security Nepal, ISO 27001, Aegis security, information security management system',
                'image' => $siteUrl.'/images/og-isms.jpg',
                'canonical' => $canonicalUrl,
                'noIndex' => true,
                'schema' => getBreadcrumbSchema([
                    ['name' => 'Home', 'url' => $siteUrl],
                    ['name' => 'ISMS Policy', 'url' => $canonicalUrl],
                ]),
            ],
        ]);
    });

    Route::get('/termsandconditions', function () {
        $siteUrl = getBaseSeo()['site_url'];
        $canonicalUrl = $siteUrl.'/termsandconditions';

        return Inertia::render('Terms', [
            'seo' => [
                'title' => 'Terms and Conditions | Aegis HMS Software Terms of Service',
                'description' => 'Read Aegis HMS terms and conditions. Our software usage terms, service agreements, and legal policies for hotel management software in Nepal.',
                'keywords' => 'terms of service, software terms Nepal, Aegis terms, legal policies, service agreement',
                'image' => $siteUrl.'/images/og-terms.jpg',
                'canonical' => $canonicalUrl,
                'noIndex' => true,
                'schema' => getBreadcrumbSchema([
                    ['name' => 'Home', 'url' => $siteUrl],
                    ['name' => 'Terms & Conditions', 'url' => $canonicalUrl],
                ]),
            ],
        ]);
    });

    Route::get('/privacy-aegis-pulse', function () {
        $siteUrl = getBaseSeo()['site_url'];
        $canonicalUrl = $siteUrl.'/privacy-aegis-pulse';

        return Inertia::render('Pulseterms', [
            'seo' => [
                'title' => 'Privacy Policy | Aegis Pulse Data Privacy Terms',
                'description' => 'Aegis Pulse privacy policy. Learn how we protect your data, privacy practices, and information handling for our analytics platform.',
                'keywords' => 'privacy policy, data protection Nepal, Aegis privacy, GDPR compliance, data security',
                'image' => $siteUrl.'/images/og-privacy.jpg',
                'canonical' => $canonicalUrl,
                'noIndex' => true,
                'schema' => getBreadcrumbSchema([
                    ['name' => 'Home', 'url' => $siteUrl],
                    ['name' => 'Privacy Policy', 'url' => $canonicalUrl],
                ]),
            ],
        ]);
    });

});

require __DIR__.'/auth.php';
