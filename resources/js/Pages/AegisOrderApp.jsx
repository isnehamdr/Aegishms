import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import GuestLayout from '@/Layouts/GuestLayout';
import Box from '@mui/material/Box';
import { BsCircleFill } from 'react-icons/bs';
import SEO from '@/Components/SEO';

gsap.registerPlugin(ScrollTrigger);

const AegisOrderApp = () => {
    const featureSectionRef = useRef(null);
    const featureBoxesRef = useRef([]);
    const domain = 'https://aegishms.com/';
    const canonicalUrl = `${domain}/aegis-order-app`;
    const ogImageUrl = `${domain}/images/og/aegis-order-app.jpg`;
    
    const features = [
        'Menu Management',
        'Table Ordering',
        'Online Orders',
        'Order Tracking',
        'Payment Processing',
        'Customer Feedback',
        'Kitchen Display',
        'Delivery Sync',
        'Sales Analytics',
    ];
    
    const tools = [
        'Aegis Pulse (Reporting App)',
        'Membership / Loyalty Module',
        'Customer Engagement Tool',
        'Analytics Dashboard',
        'Payment Gateway Integration',
        'Notification System',
        'User Management Portal',
        'API Documentation',
    ];

    useEffect(() => {
        if (featureSectionRef.current) {
            // GSAP animation for feature boxes
            const setupOrbitAnimation = () => {
                const isMobile = window.innerWidth < 768;
                const radius = isMobile ? 100 : 200;
                const angleIncrement = (Math.PI * 2) / featureBoxesRef.current.length;

                // Position boxes in a circle
                featureBoxesRef.current.forEach((box, index) => {
                    if (!box) return;

                    const angle = angleIncrement * index;
                    const x = Math.cos(angle) * radius;
                    const y = Math.sin(angle) * radius;

                    gsap.set(box, {
                        x: x,
                        y: y,
                        opacity: 0,
                        scale: 0.8,
                        rotation: 0
                    });

                    // Hover animation
                    box.addEventListener('mouseenter', () => {
                        gsap.to(box, {
                            scale: 1.15,
                            boxShadow: '0 15px 30px rgba(0, 92, 148, 0.4)',
                            duration: 0.3,
                            ease: 'power2.out'
                        });
                    });

                    box.addEventListener('mouseleave', () => {
                        gsap.to(box, {
                            scale: 1,
                            boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
                            duration: 0.3,
                            ease: 'power2.out'
                        });
                    });
                });

                // ScrollTrigger for reveal animation
                ScrollTrigger.create({
                    trigger: featureSectionRef.current,
                    start: 'top 70%',
                    end: 'bottom 30%',
                    onEnter: () => {
                        gsap.to(featureBoxesRef.current, {
                            opacity: 1,
                            scale: 1,
                            duration: 0.6,
                            stagger: 0.08,
                            ease: 'back.out(1.2)'
                        });
                    },
                    onLeaveBack: () => {
                        gsap.to(featureBoxesRef.current, {
                            opacity: 0,
                            scale: 0.8,
                            duration: 0.4,
                            stagger: 0.03,
                            ease: 'power2.in'
                        });
                    }
                });
            };

            // Setup orbit animation
            setupOrbitAnimation();

            // Handle window resize
            const handleResize = () => {
                ScrollTrigger.refresh();
                setupOrbitAnimation();
            };

            window.addEventListener('resize', handleResize);

            // Cleanup
            return () => {
                window.removeEventListener('resize', handleResize);
                ScrollTrigger.getAll().forEach(trigger => trigger.kill());
            };
        }
        // Feature Section Animation
        if (featureSectionRef.current) {
            const featureBoxes = gsap.utils.toArray('.feature-box');
            const getRadius = () => (window.matchMedia('(max-width: 768px)').matches ? 140 : 240);
            const radius = getRadius();
            const angleIncrement = (Math.PI * 2) / featureBoxes.length;

            featureBoxes.forEach((box, index) => {
                const angle = angleIncrement * index;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;
                gsap.set(box, { x, y, opacity: 0, scale: 0.8 });
            });

            ScrollTrigger.create({
                trigger: featureSectionRef.current,
                start: 'top 80%',
                end: 'bottom 20%',
                onEnter: () =>
                    gsap.to(featureBoxes, {
                        opacity: 1,
                        scale: 1,
                        duration: 0.5,
                        stagger: 0.1,
                        ease: 'power2.out',
                    }),
                onLeaveBack: () =>
                    gsap.to(featureBoxes, {
                        opacity: 0,
                        scale: 0.8,
                        duration: 0.3,
                        stagger: 0.05,
                        ease: 'power2.in',
                    }),
            });

            featureBoxes.forEach((box) => {
                box.addEventListener('mouseenter', () => {
                    gsap.to(box, {
                        scale: 1.1,
                        boxShadow: '0 10px 25px rgba(0, 92, 148, 0.3)',
                        duration: 0.3,
                    });
                });
                box.addEventListener('mouseleave', () => {
                    gsap.to(box, {
                        scale: 1,
                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                        duration: 0.3,
                    });
                });
            });
        }
    }, []);

    // Organization Schema
    const organizationSchema = {
        "@type": "Organization",
        "@id": `${domain}#organization`,
        "name": "Aegis Software",
        "url": domain,
        "logo": `${domain}/images/logo.png`,
        "sameAs": [
            "https://www.facebook.com/aegishms",
            "https://www.linkedin.com/company/aegishms",
            "https://twitter.com/aegishms"
        ]
    };

    // Website Schema
    const websiteSchema = {
        "@type": "WebSite",
        "@id": `${domain}#website`,
        "url": domain,
        "name": "Aegis Software",
        "publisher": { "@id": `${domain}#organization` }
    };

    // Software Schema
    const softwareSchema = {
        "@type": "SoftwareApplication",
        "name": "Aegis Order App",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web, iOS, Android",
        "description": "AegisOrder is a powerful, all-in-one order management app for restaurants, cafes, and food service businesses. Streamline menu management, table ordering, online orders, payment processing, and kitchen display integration.",
        "offers": {
            "@type": "Offer",
            "priceCurrency": "USD",
            "price": "0",
            "availability": "https://schema.org/InStock",
        },
        "provider": {
            "@type": "Organization",
            "name": "Aegis Software",
            "url": domain,
        },
        "featureList": features
    };

    // Breadcrumb Schema
    const breadcrumbSchema = {
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": domain },
            { "@type": "ListItem", "position": 2, "name": "Aegis Order App", "item": canonicalUrl },
        ],
    };

    // Combine all schemas
    const fullSchema = {
        "@context": "https://schema.org",
        "@graph": [
            organizationSchema,
            websiteSchema,
            softwareSchema,
            breadcrumbSchema
        ]
    };

    return (
        <GuestLayout>
            <SEO 
                title="Aegis Order App – Restaurant Order Management Software | Aegis Software"
                description="AegisOrder is a powerful, all-in-one order management app for restaurants, cafes, and food service businesses. Streamline menu management, table ordering, online orders, payment processing, and kitchen display integration."
                keywords="restaurant order app, food ordering system, table ordering app, online ordering software, restaurant POS, menu management, kitchen display system, payment processing for restaurants, Aegis Order App"
                image={ogImageUrl}
                canonical={canonicalUrl}
                schema={fullSchema}
            />

            {/* Banner Section */}
            <div className="fixed inset-0 -z-10 lg:px-32">
                <div
                    className="absolute inset-0 -z-10"
                    style={{
                        background:
                            "linear-gradient(to bottom, rgba(48, 122, 167, 0.2) 0%, transparent 100%)",
                    }}
                />
            </div>

            <div className="mt-[68px] bg-[url('/images/half-circle-bg.png')] bg-bottom bg-no-repeat bg-cover flex flex-col justify-center items-center h-[50vh] text-white">
                <h1 className="text-3xl sm:text-5xl font-semibold mb-8 leading-tight">Aegis Order App</h1>
                <ul className="st-breadcrumb flex items-center text-sm font-semibold uppercase bg-black/5 rounded-lg p-3">
                    <li><a href="/" className="text-white hover:text-white transition-colors">Home</a></li>
                    <li className="mx-2 text-gray-400">/</li>
                    <li className="text-gray-300" aria-current="page">Aegis Order App</li>
                </ul>
            </div>

            {/* Main Content Section */}
            <section className="py-12 sm:px-12 px-4 md:py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-stretch gap-8 lg:gap-12">
                        {/* Left Content */}
                        <div className="lg:w-1/2 flex flex-col justify-center">
                            <div className="mb-8 lg:mb-12">
                                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#005c94] to-[#0EA5E9]">
                                    All-in-One Order Management
                                </h2>
                                <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4">
                                    AegisOrder is a powerful, all-in-one order management app designed to simplify and enhance the entire ordering process for restaurants, cafes, and food service businesses. With dedicated features for Menu Management, Table Ordering, Online Ordering Integration, Order Tracking, Payment Processing, and Customer Feedback, AegisOrder streamlines order workflows from placement to fulfillment within a single easy-to-use platform.
                                </p>
                                <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                                    AegisOrder seamlessly connects with POS systems, kitchen display screens, and delivery partners to provide real-time order updates and ensure timely preparation and delivery. Its intuitive interface enables staff and customers to place and manage orders quickly and accurately, reducing errors and improving service speed.
                                </p>
                            </div>

                            {/* Stats or Additional Info */}
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
                                <div className="bg-[#EEF6FF] p-4 rounded-lg text-center">
                                    <div className="text-2xl font-bold text-[#005c94]">100%</div>
                                    <div className="text-sm text-gray-600">Accuracy</div>
                                </div>
                                <div className="bg-[#EEF6FF] p-4 rounded-lg text-center">
                                    <div className="text-2xl font-bold text-[#005c94]">24/7</div>
                                    <div className="text-sm text-gray-600">Support</div>
                                </div>
                                <div className="bg-[#EEF6FF] p-4 rounded-lg text-center md:col-span-1">
                                    <div className="text-2xl font-bold text-[#005c94]">Real-time</div>
                                    <div className="text-sm text-gray-600">Tracking</div>
                                </div>
                            </div>
                        </div>

                        {/* Right Image - Sticky on desktop */}
                        <div className="lg:w-1/2 relative">
                            <div className="sticky top-24 lg:top-32">
                                <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-300">
                                    <img
                                        src="/images/Modules/m17.jpeg"
                                        alt="Aegis Order App Interface showing order management dashboard"
                                        loading="lazy"
                                        className="w-full h-auto object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                                </div>

                                {/* Device Mockups */}
                                <div className="hidden lg:flex justify-between mt-8 relative">
                                    {/* Left Device - Mobile */}
                                    <div className="w-32 h-48 bg-gray-800 rounded-2xl p-2 shadow-xl transform -rotate-6 relative overflow-hidden border border-gray-700">
                                        <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gray-900 rounded-full"></div>
                                        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gray-900 rounded-full border border-gray-700"></div>
                                        <div className="w-full h-full bg-gray-100 rounded-lg overflow-hidden">
                                            <img
                                                src="/images/Modules/m17.jpeg"
                                                alt="Aegis Order App Mobile View"
                                                loading="lazy"
                                                className="w-full h-full object-cover"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                                        </div>
                                    </div>

                                    {/* Center Device - Tablet */}
                                    <div className="w-40 h-56 bg-gray-800 rounded-3xl p-3 shadow-2xl z-10 relative overflow-hidden border border-gray-700">
                                        <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gray-900 rounded-full"></div>
                                        <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-gray-900 rounded-full border border-gray-700 flex items-center justify-center">
                                            <div className="w-6 h-6 bg-gray-700 rounded-full"></div>
                                        </div>
                                        <div className="w-full h-full bg-gray-100 rounded-2xl overflow-hidden">
                                            <img
                                                src="/images/Modules/m17.jpeg"
                                                alt="Aegis Order App Tablet View"
                                                loading="lazy"
                                                className="w-full h-full object-cover"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                                            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-black/30 rounded-full"></div>
                                        </div>
                                    </div>

                                    {/* Right Device - Mobile */}
                                    <div className="w-32 h-48 bg-gray-800 rounded-2xl p-2 shadow-xl transform rotate-6 relative overflow-hidden border border-gray-700">
                                        <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gray-900 rounded-full"></div>
                                        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gray-900 rounded-full border border-gray-700"></div>
                                        <div className="w-full h-full bg-gray-100 rounded-lg overflow-hidden">
                                            <img
                                                src="/images/Modules/m17.jpeg"
                                                alt="Aegis Order App Mobile View"
                                                loading="lazy"
                                                className="w-full h-full object-cover"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section with Orbit Animation */}
            <section
                ref={featureSectionRef}
                className="feature-section md:py-24 bg-gradient-to-b from-white to-[#F8FBFF] overflow-hidden"
            >
                <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
                        {/* Left Tools List */}
                        <div className="lg:w-1/2">
                            <div className="max-w-lg mx-auto lg:mx-0">
                                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 md:mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#005c94] to-[#0EA5E9]">
                                    Tools for Modern Food Businesses
                                </h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {tools.map((tool, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                                        >
                                            <BsCircleFill className="flex-shrink-0 mr-3 text-[#005C94]" size={10} />
                                            <span className="text-gray-800 text-sm md:text-base">{tool}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right Orbit Animation */}
                        <div className="lg:w-1/2 relative">
                            <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] flex items-center justify-center">
                                {/* Central Logo */}
                                <div className="absolute w-24 h-24 sm:w-32 sm:h-32 bg-white p-4 shadow-[0_20px_60px_rgba(8,_112,_184,_0.4)] rounded-full flex items-center justify-center z-10 transform hover:scale-110 transition-transform duration-300">
                                    <img
                                        src="/images/logo.png"
                                        alt="Aegis Software logo"
                                        className="w-16 h-auto sm:w-20"
                                        loading="lazy"
                                    />
                                </div>

                                {/* Orbit Container */}
                                <div className="absolute inset-0">
                                    {features.map((feature, index) => (
                                        <div
                                            key={index}
                                            ref={el => featureBoxesRef.current[index] = el}
                                            className="feature-box absolute w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-white rounded-xl flex items-center justify-center shadow-lg cursor-pointer transition-all duration-300 border border-gray-100 hover:border-[#005c94]/20"
                                            style={{
                                                left: '50%',
                                                top: '50%',
                                                transform: 'translate(-50%, -50%)',
                                            }}
                                        >
                                            <p className="text-xs sm:text-sm font-semibold text-[#005c94] text-center px-2">
                                                {feature}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SEO Content Section */}
            <section className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Transform Your Restaurant Operations with Aegis Order App</h2>
                    <div className="prose prose-lg max-w-none">
                        <p className="text-gray-700 mb-4">
                            The <strong>Aegis Order App</strong> is a comprehensive <strong>restaurant order management system</strong> designed to streamline every aspect of food service operations. From <strong>table ordering</strong> to <strong>online order integration</strong>, our app provides a seamless experience for both staff and customers.
                        </p>
                        <p className="text-gray-700 mb-4">
                            With features like <strong>menu management</strong>, <strong>kitchen display system integration</strong>, and real-time <strong>order tracking</strong>, Aegis Order ensures that orders are processed accurately and efficiently. The app connects with <strong>payment gateways</strong> and <strong>delivery partners</strong> to provide a complete solution for modern restaurants.
                        </p>
                        <p className="text-gray-700">
                            Whether you're running a casual cafe, a fine dining restaurant, or a multi-location food business, Aegis Order App provides the tools you need to manage orders, improve service speed, and enhance customer satisfaction.
                        </p>
                    </div>
                </div>
            </section>
        </GuestLayout>
    );
};

export default AegisOrderApp;