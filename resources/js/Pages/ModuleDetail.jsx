import React from 'react';
import { Link, usePage } from '@inertiajs/react';
import GuestLayout from '@/Layouts/GuestLayout';
import SEO from '@/Components/SEO';

// Import modules.json - make sure the path is correct
import moduledetails from '/public/modules.json';

const ModuleDetail = () => {
    const { url } = usePage();
    
    // Extract slug from URL path (everything after /modules/)
    const slug = url.split('/modules/')[1] || '';
    
    // Find the module based on slug
    const module = moduledetails.find(mod => mod.slug === slug);

    // Debug logging
    console.log('ModuleDetail - URL:', url);
    console.log('ModuleDetail - Slug:', slug);
    console.log('ModuleDetail - Module found:', module);
    console.log('ModuleDetail - All modules:', moduledetails);

    // Base URL
    const baseUrl = "https://www.aegishms.com";
    const canonicalUrl = `${baseUrl}/modules/${module?.slug || slug}`;
    
    // If module not found, show 404 page
    if (!module) {
        return (
            <GuestLayout>
                <SEO 
                    title="Module Not Found | Aegis Software"
                    description="The requested module could not be found on Aegis Software. Please check the URL or browse our available modules."
                    canonical={canonicalUrl}
                    noIndex={true}
                />
                
                <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
                    <div className="max-w-md w-full text-center">
                        <div className="mb-8">
                            <div className="w-24 h-24 mx-auto bg-red-100 rounded-full flex items-center justify-center mb-6">
                                <svg className="w-12 h-12 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h1 className="text-3xl font-bold text-gray-900 mb-2">Module Not Found</h1>
                            <p className="text-gray-600 mb-8">The requested module "{slug}" could not be found.</p>
                            <Link 
                                href="/" 
                                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
                            >
                                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                </svg>
                                Back to Home
                            </Link>
                        </div>
                    </div>
    `           </div>
            </GuestLayout>
        );
    }

    // Generate proper image URL
    const imagePath = module.image_path || '';
    const ogImageUrl = imagePath.startsWith('http') 
        ? imagePath 
        : `${baseUrl}${imagePath.startsWith('/') ? '' : '/'}${imagePath}`;

    // Generate meta description
    const metaDescription = module.description && module.description.length > 160 
        ? module.description.substring(0, 157) + "..." 
        : (module.description || `Learn about ${module.title} - a comprehensive hotel management module from Aegis HMS.`);

    // Generate page title
    const pageTitle = `${module.title} | Aegis HMS Hotel Management Module`;

    // Organization Schema
    const organizationSchema = {
        "@type": "Organization",
        "@id": `${baseUrl}#organization`,
        "name": "Aegis Software",
        "url": baseUrl,
        "logo": `${baseUrl}/images/logo.png`,
        "sameAs": [
            "https://www.facebook.com/aegishms",
            "https://www.linkedin.com/company/aegishms",
            "https://twitter.com/aegishms"
        ]
    };

    // Website Schema
    const websiteSchema = {
        "@type": "WebSite",
        "@id": `${baseUrl}#website`,
        "url": baseUrl,
        "name": "Aegis Software",
        "publisher": { "@id": `${baseUrl}#organization` }
    };

    // Product Schema
    const productSchema = {
        "@type": "Product",
        "name": module.title,
        "description": module.description,
        "url": canonicalUrl,
        "image": ogImageUrl,
        "brand": {
            "@type": "Brand",
            "name": "Aegis Software"
        },
        "offers": {
            "@type": "Offer",
            "url": canonicalUrl,
            "priceCurrency": "USD",
            "price": "0",
            "availability": "https://schema.org/InStock",
            "itemCondition": "https://schema.org/NewCondition"
        }
    };

    // WebPage Schema
    const webpageSchema = {
        "@type": "WebPage",
        "@id": `${canonicalUrl}#webpage`,
        "name": pageTitle,
        "url": canonicalUrl,
        "description": module.description,
        "isPartOf": { "@id": `${baseUrl}#website` },
        "about": { "@id": `${baseUrl}#organization` }
    };

    // Breadcrumb Schema
    const breadcrumbSchema = {
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": baseUrl
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Modules",
                "item": `${baseUrl}/modules`
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": module.title,
                "item": canonicalUrl
            }
        ]
    };

    // Combine all schemas
    const fullSchema = {
        "@context": "https://schema.org",
        "@graph": [
            organizationSchema,
            websiteSchema,
            webpageSchema,
            productSchema,
            breadcrumbSchema
        ]
    };

    // Get features based on module slug
    const getFeatures = (slug) => {
        switch(slug) {
            case 'front-office':
                return [
                    { icon: '📅', title: 'Real-time Booking', desc: 'Instant reservation management with live availability' },
                    { icon: '📊', title: 'Revenue Analytics', desc: 'Comprehensive financial reports and insights' },
                    { icon: '🏨', title: 'Guest Management', desc: 'Complete guest information and history tracking' }
                ];
            case 'housekeeping':
                return [
                    { icon: '🧹', title: 'Room Status Control', desc: 'Real-time room status and maintenance tracking' },
                    { icon: '📋', title: 'Task Assignment', desc: 'Efficient housekeeping task management' },
                    { icon: '📈', title: 'Performance Reports', desc: 'Detailed housekeeping analytics and reports' }
                ];
            case 'point-of-sales':
                return [
                    { icon: '🍽️', title: 'Order Management', desc: 'Streamlined restaurant order processing' },
                    { icon: '👨‍🍳', title: 'Kitchen Display', desc: 'Real-time KDS communication system' },
                    { icon: '💰', title: 'Sales Analytics', desc: 'Menu and item-wise sales insights' }
                ];
            case 'inventory':
                return [
                    { icon: '📦', title: 'Stock Tracking', desc: 'Real-time inventory monitoring and control' },
                    { icon: '🔄', title: 'Auto Reordering', desc: 'Automated purchase order generation' },
                    { icon: '📊', title: 'Cost Analysis', desc: 'Detailed inventory cost and usage reports' }
                ];
            case 'finance':
                return [
                    { icon: '💰', title: 'Financial Control', desc: 'Comprehensive accounting and reporting' },
                    { icon: '📋', title: 'Invoice Management', desc: 'Automated invoicing and payment tracking' },
                    { icon: '📊', title: 'Revenue Analytics', desc: 'Real-time financial insights and forecasts' }
                ];
            case 'banquet':
                return [
                    { icon: '🎉', title: 'Event Management', desc: 'End-to-end banquet and event coordination' },
                    { icon: '📋', title: 'Menu Costing', desc: 'Detailed menu and event cost analysis' },
                    { icon: '📊', title: 'Resource Tracking', desc: 'Real-time availability and resource management' }
                ];
            case 'costing':
                return [
                    { icon: '💰', title: 'Recipe Costing', desc: 'Accurate recipe and menu costing' },
                    { icon: '📊', title: 'Profit Analysis', desc: 'Real-time profitability tracking' },
                    { icon: '🔄', title: 'Consumption Tracking', desc: 'Monitor ingredient usage against sales' }
                ];
            case 'payroll':
                return [
                    { icon: '👥', title: 'Salary Processing', desc: 'Automated payroll calculations' },
                    { icon: '📅', title: 'Attendance Integration', desc: 'Seamless time and attendance tracking' },
                    { icon: '📊', title: 'Statutory Compliance', desc: 'Tax and legal compliance management' }
                ];
            case 'foreign-exchange-encashment':
                return [
                    { icon: '💱', title: 'Currency Conversion', desc: 'Real-time foreign exchange management' },
                    { icon: '📝', title: 'FEER Generation', desc: 'Automated encashment receipt creation' },
                    { icon: '📊', title: 'Compliance Tracking', desc: 'Regulatory compliance monitoring' }
                ];
            case 'sales-marketing':
                return [
                    { icon: '📢', title: 'Campaign Management', desc: 'Track marketing campaigns and ROI' },
                    { icon: '🤝', title: 'Lead Tracking', desc: 'Monitor sales leads and conversions' },
                    { icon: '📊', title: 'Revenue Analysis', desc: 'Sales performance analytics' }
                ];
            case 'fixed-assets-module':
                return [
                    { icon: '🏢', title: 'Asset Tracking', desc: 'Complete fixed asset lifecycle management' },
                    { icon: '📉', title: 'Depreciation', desc: 'Automated depreciation calculations' },
                    { icon: '🔧', title: 'Maintenance', desc: 'Asset maintenance scheduling and tracking' }
                ];
            case 'waiter-app':
                return [
                    { icon: '📱', title: 'Mobile Ordering', desc: 'Take orders directly from tables' },
                    { icon: '👨‍🍳', title: 'Kitchen Integration', desc: 'Real-time kitchen order display' },
                    { icon: '💳', title: 'Payment Processing', desc: 'Integrated payment at table' }
                ];
            case 'aegis-pulse247':
                return [
                    { icon: '📊', title: 'Real-time Analytics', desc: 'Live business performance metrics' },
                    { icon: '📈', title: 'Multi-property Reporting', desc: 'Unified dashboard for all properties' },
                    { icon: '🎯', title: 'Actionable Insights', desc: 'Data-driven decision making tools' }
                ];
            default:
                return [
                    { icon: '⚡', title: 'High Performance', desc: 'Optimized for speed and reliability' },
                    { icon: '📱', title: 'User Friendly', desc: 'Intuitive interface for all users' },
                    { icon: '🔒', title: 'Secure & Safe', desc: 'Enterprise-grade security features' }
                ];
        }
    };

    const features = getFeatures(module.slug);

    return (
        <GuestLayout>
            <SEO 
                title={pageTitle}
                description={metaDescription}
                keywords={`${module.title}, hotel management module, ${module.slug} system, hotel software Nepal, Aegis HMS module, property management system`}
                image={ogImageUrl}
                canonical={canonicalUrl}
                schema={fullSchema}
            />

            <div className="min-h-screen pt-16">
                {/* Hero Section */}
                <div className="relative bg-white shadow-sm border-b">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                        {/* Breadcrumb */}
                        <nav aria-label="Breadcrumb" className="mb-8">
                            <ol className="flex items-center space-x-2 text-sm text-gray-600">
                                <li>
                                    <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
                                </li>
                                <li className="text-gray-400">/</li>
                                <li>
                                    <Link href="/" className="hover:text-blue-600 transition-colors">Products</Link>
                                </li>
                                <li className="text-gray-400">/</li>
                                <li className="text-gray-900 font-medium" aria-current="page">{module.title}</li>
                            </ol>
                        </nav>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            {/* Content */}
                            <div className="space-y-6">
                                <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                                    <svg className="w-4 h-4 mr-1.5" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    Module
                                </div>
                                
                                <div className="space-y-4">
                                    <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
                                        {module.title}
                                    </h1>
                                    {module.subtitle && (
                                        <p className="text-xl text-blue-600 font-medium">
                                            {module.subtitle}
                                        </p>
                                    )}
                                </div>
                                
                                <p className="text-lg text-gray-600 leading-relaxed">
                                    {module.description}
                                </p>
                            </div>
                            
                            {/* Image */}
                            <div className="relative">
                                <div className="rounded-2xl overflow-hidden shadow-xl">
                                    <img 
                                        src={module.image_path} 
                                        alt={`${module.title} - Aegis HMS hotel management software module`}
                                        className="w-full h-auto object-cover"
                                        onError={(e) => {
                                            e.target.onerror = null;
                                            e.target.src = 'https://via.placeholder.com/600x400?text=Aegis+HMS+Module';
                                        }}
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Features/Benefits Section */}
                {features && features.length > 0 && (
                    <div className="py-16 bg-gray-50">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                    Key Features & Benefits
                                </h2>
                                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                    Discover how {module.title} can transform your operations with powerful features designed for efficiency.
                                </p>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {features.map((feature, index) => (
                                    <div 
                                        key={index} 
                                        className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                                    >
                                        <div className="text-4xl mb-4">{feature.icon}</div>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                                        <p className="text-gray-600">{feature.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
                
                {/* CTA Section */}
                <div className="bg-gradient-to-r from-[#005c94] to-[#0EA5E9]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                        <div className="text-center">
                            <h2 className="text-3xl font-bold text-white mb-4">
                                Ready to Get Started with {module.title}?
                            </h2>
                            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                                Join hundreds of businesses already using our platform to streamline their operations.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link 
                                    href="/contact" 
                                    className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-50 transition-all duration-200 shadow-lg"
                                >
                                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    Contact Sales
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Navigation */}
                <div className="bg-gray-50 border-t">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                        <div className="flex justify-center">
                            <Link 
                                href="/" 
                                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                            >
                                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                </svg>
                                Back to Home
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </GuestLayout>
    );
};

export default ModuleDetail;