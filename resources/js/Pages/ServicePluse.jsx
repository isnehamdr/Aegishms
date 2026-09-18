import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import GuestLayout from '@/Layouts/GuestLayout';
import Box from '@mui/material/Box';
import { BsCircleFill } from 'react-icons/bs';
import SEO from '@/Components/SEO';

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const ServicePluse = () => {
    const featureSectionRef = useRef(null);
    const siteUrl = 'https://aegishms.com';
    const canonicalUrl = `${siteUrl}/aegis-pulse`;
    const ogImageUrl = `${siteUrl}/images/og-pulse.jpg`;

    useEffect(() => {
        // GSAP Feature Section Animation
        if (featureSectionRef.current) {
            const featureBoxes = gsap.utils.toArray('.feature-box');
            const getRadius = () => window.matchMedia('(max-width: 768px)').matches ? 140 : 240;
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
                onEnter: () => {
                    gsap.to(featureBoxes, {
                        opacity: 1,
                        scale: 1,
                        duration: 0.5,
                        stagger: 0.1,
                        ease: "power2.out"
                    });
                },
                onLeaveBack: () => {
                    gsap.to(featureBoxes, {
                        opacity: 0,
                        scale: 0.8,
                        duration: 0.3,
                        stagger: 0.05,
                        ease: "power2.in"
                    });
                }
            });

            featureBoxes.forEach(box => {
                box.addEventListener('mouseenter', () => {
                    gsap.to(box, { scale: 1.1, boxShadow: "0 10px 25px rgba(0, 92, 148, 0.3)", duration: 0.3 });
                });
                box.addEventListener('mouseleave', () => {
                    gsap.to(box, { scale: 1, boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", duration: 0.3 });
                });
            });
        }

        // GSAP Gallery Animation
        let ctx = gsap.context(() => {
            const photos = document.querySelectorAll(".photo:not(:first-child)");
            gsap.set(photos, { opacity: 0, scale: 0.5 });
            const animation = gsap.to(photos, {
                opacity: 1,
                scale: 1,
                duration: 1,
                stagger: 1,
            });

            ScrollTrigger.create({
                trigger: ".gallery",
                start: "top top",
                end: "bottom bottom",
                animation: animation,
                pin: ".rightblock",
                scrub: true,
                markers: false,
            });
        });

        return () => ctx.revert();
    }, []);

    // Organization Schema
    const organizationSchema = {
        "@type": "Organization",
        "@id": `${siteUrl}#organization`,
        "name": "Aegis Software",
        "url": siteUrl,
        "logo": `${siteUrl}/images/logo.png`,
        "sameAs": [
            "https://www.facebook.com/aegishms",
            "https://www.linkedin.com/company/aegishms",
            "https://twitter.com/aegishms"
        ]
    };

    // Website Schema
    const websiteSchema = {
        "@type": "WebSite",
        "@id": `${siteUrl}#website`,
        "url": siteUrl,
        "name": "Aegis Software",
        "publisher": { "@id": `${siteUrl}#organization` }
    };

    // Software Schema for Aegis Pulse
    const softwareSchema = {
        "@type": "SoftwareApplication",
        "name": "Aegis Pulse247",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web",
        "description": "Multi-property reporting solution for hotels, restaurants, and trading operations with real-time analytics and unified dashboard. Track performance across all your properties from a single, unified platform.",
        "offers": {
            "@type": "Offer",
            "priceCurrency": "USD",
            "price": "0",
            "availability": "https://schema.org/InStock"
        },
        "provider": {
            "@type": "Organization",
            "name": "Aegis Software",
            "url": siteUrl
        },
        "featureList": [
            "Multi-property Reporting",
            "Real-time Analytics",
            "Unified Dashboard",
            "Operational Insights",
            "Performance Tracking",
            "Data Integration",
            "Custom Reports",
            "Business Intelligence"
        ]
    };

    // WebPage Schema
    const webpageSchema = {
        "@type": "WebPage",
        "@id": `${canonicalUrl}#webpage`,
        "url": canonicalUrl,
        "name": "Aegis Pulse | Multi-Property Reporting Solution by Aegis Software",
        "description": "Track performance across all properties with Aegis Pulse247. Real-time operational data, unified dashboard, and actionable insights for hotels, restaurants, and trading operations.",
        "isPartOf": { "@id": `${siteUrl}#website` },
        "about": { "@id": `${siteUrl}#organization` }
    };

    // Breadcrumb Schema
    const breadcrumbSchema = {
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": siteUrl
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Aegis Pulse",
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
            softwareSchema,
            breadcrumbSchema
        ]
    };

    return (
        <GuestLayout>
            <SEO 
                title="Aegis Pulse | Multi-Property Reporting Solution by Aegis Software"
                description="Track performance across all properties with Aegis Pulse247. Real-time operational data, unified dashboard, and actionable insights for hotels, restaurants, and trading operations."
                keywords="hotel reporting software, multi-property management, real-time analytics, Aegis HMS, business intelligence, hospitality software, performance tracking, operational insights"
                image={ogImageUrl}
                canonical={canonicalUrl}
                schema={fullSchema}
            />

            <main>
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
                <div
                    className="mt-[68px] bg-[url('/images/half-circle-bg.png')] bg-bottom bg-no-repeat bg-cover flex flex-col justify-center items-center h-[50vh] text-white"
                    aria-label="Aegis Pulse247 Hero Banner"
                >
                    <h1 className="text-3xl sm:text-5xl font-semibold mb-8 leading-tight">Aegis Pulse</h1>
                    <nav aria-label="Breadcrumb" className="st-breadcrumb flex items-center text-sm font-semibold uppercase bg-black/5 rounded-lg p-3">
                        <a href="/" className="text-white hover:text-[#0EA5E9] transition-colors" aria-label="Home">Home</a>
                        <span className="mx-2 text-gray-400">/</span>
                        <span className="text-gray-300" aria-current="page">Aegis Pulse</span>
                    </nav>
                </div>

                {/* Gallery Section */}
                <Box className="gallery" sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    minHeight: { xs: "auto", md: "100vh" },
                }}>
                    <Box className="left" sx={{
                        width: { xs: "100%", md: "50%" },
                        marginLeft: { xs: 0, md: "auto" },
                        "& .details": {
                            height: { xs: "auto", md: "90vh" },
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            width: { xs: "100%", md: "40vw" },
                            marginLeft: { xs: 0, md: "auto" },
                            color: "#000",
                            fontSize: { xs: "1rem", md: "3rem" },
                            fontWeight: 900,
                            padding: { xs: "1rem", md: "0" },
                        },
                    }}>
                        <Box className="details">
                            <h2 className="text-2xl sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-[#005c94] to-[#0EA5E9] font-bold mb-4">Aegis Pulse247</h2>
                            <p className="text-base sm:text-lg font-[400] text-[#231F20]/80 sm:pe-8">
                                Our multi-property reporting solution enables you to track performance across all your properties from a single, unified platform. Seamlessly integrated with Aegis HMS, it pulls in real-time operational data to provide a comprehensive business overview—giving you clear visibility into your hotel, restaurant, and trading operations. Powered by advanced analytics, the system delivers actionable insights that support smarter, data-driven decision-making. By streamlining reporting and uncovering optimization opportunities, it enhances operational efficiency and drives improved profitability across your entire portfolio.
                            </p>
                        </Box>
                    </Box>

                    <Box className="rightblock" sx={{
                        width: { xs: "100%", md: "50%" },
                        height: { xs: "auto", md: "90vh" },
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: { xs: "2rem 1rem", md: 0 },
                        marginTop: { xs: "0", md: 0 },
                    }}>
                        <Box sx={{
                            width: { xs: "100%", sm: "90%", md: "40vw" },
                            height: { xs: "300px", sm: "400px", md: "60vh" },
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            margin: "0 auto",
                            "& .photo": {
                                width: "100%",
                                height: "100%",
                                borderRadius: "10px",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                "& img": {
                                    width: "100%",
                                    height: "100%",
                                    borderRadius: "10px",
                                    objectFit: "contain",
                                    maxWidth: "100%",
                                    maxHeight: "100%",
                                }
                            }
                        }}>
                            <Box className="photo">
                                <img 
                                    src="/images/Modules/m12.png" 
                                    alt="Aegis Pulse247 dashboard showing multi-property analytics and real-time reporting interface"
                                    className="object-contain"
                                    loading="lazy"
                                />
                            </Box>
                        </Box>
                    </Box>
                </Box>

                {/* Feature Section */}
                <section
                    ref={featureSectionRef}
                    className="feature-section relative bg-white py-10 sm:py-36 overflow-hidden lg:px-32"
                    aria-labelledby="features-title"
                >
                    <div className="container mx-auto">
                        <div className="flex flex-col md:flex-row items-center">
                            <div className="w-3/4 md:w-1/2 mx-auto sm:px-4 py-10 text-start">
                                <div className="relative inline-block ps-4">
                                    <h2 className="text-lg uppercase text-[#231F20]/80 mb-6 relative z-10" id="features-title">
                                        Additional Features
                                    </h2>
                                    <div className="title-effect absolute top-[-10px] left-[0px] w-[50px] h-[50px] opacity-20">
                                        <div className="absolute top-0 left-0 w-full h-[7px] bg-blue-500 origin-top-left animate-bar-top"></div>
                                        <div className="absolute top-0 right-0 w-[7px] h-full bg-blue-500 origin-top-left animate-bar-right"></div>
                                        <div className="absolute bottom-0 right-0 w-full h-[7px] bg-blue-500 origin-bottom-right animate-bar-bottom"></div>
                                        <div className="absolute bottom-0 left-0 w-[7px] h-full bg-blue-500 origin-bottom-left animate-bar-left"></div>
                                    </div>
                                </div>
                                <h2 className="text-2xl sm:text-4xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#005c94] to-[#0EA5E9] mb-8 font-[600]">
                                    Programs For Modern Software Agencies
                                </h2>
                                <ul className="grid lg:grid-cols-2 gap-4 text-md text-[#231F20]/80">
                                    {[
                                        "Multi-property Reporting",
                                        "Real-time Analytics",
                                        "Unified Dashboard",
                                        "Custom Reports",
                                        "Data Integration",
                                        "Performance Tracking",
                                        "Business Intelligence",
                                        "Operational Insights"
                                    ].map((item, index) => (
                                        <li key={index} className="flex items-center">
                                            <BsCircleFill className="mr-3 text-[#005C94]" size={8} aria-hidden="true" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="w-full md:w-1/2 relative">
                                <div className="relative w-full h-[400px] flex justify-center items-center">
                                    <div className="absolute w-32 h-32 bg-white p-2 shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] rounded-full flex justify-center items-center z-10">
                                        <img
                                            src="/images/logo.png"
                                            alt="Aegis Software logo"
                                            className="w-18 h-12"
                                            loading="lazy"
                                        />
                                    </div>
                                    <div className="absolute inset-0">
                                        {[
                                            "Analytics",
                                            "Reports",
                                            "Dashboard",
                                            "Integration",
                                            "Tracking",
                                            "Insights",
                                            "Performance",
                                            "Metrics",
                                            "Data",
                                        ].map((feature, index) => (
                                            <div
                                                key={index}
                                                className="feature-box absolute w-16 h-16 sm:w-24 sm:h-24 bg-[#EEF6FF] rounded-lg flex justify-center items-center shadow-lg transition-all duration-300 cursor-pointer hover:bg-[#D9EAFC]"
                                                style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}
                                                aria-label={feature}
                                            >
                                                <p className="text-sm font-semibold text-[#005c94] text-center p-2">
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
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Aegis Pulse for Multi-Property Reporting?</h2>
                        <div className="prose prose-lg max-w-none">
                            <p className="text-gray-700 mb-4">
                                <strong>Aegis Pulse247</strong> is a comprehensive <strong>multi-property reporting solution</strong> designed for hotels, restaurants, and trading operations. It provides <strong>real-time analytics</strong> and a <strong>unified dashboard</strong> to track performance across all your properties from a single platform.
                            </p>
                            <p className="text-gray-700 mb-4">
                                Seamlessly integrated with Aegis HMS, it pulls in operational data to provide a complete business overview. With advanced analytics and <strong>business intelligence</strong> capabilities, you can make data-driven decisions that improve efficiency and profitability.
                            </p>
                            <p className="text-gray-700">
                                Whether you manage a single property or a large portfolio, Aegis Pulse delivers actionable insights, streamlines reporting, and uncovers optimization opportunities to drive success across your entire organization.
                            </p>
                        </div>
                    </div>
                </section>
            </main>
        </GuestLayout>
    );
};

export default ServicePluse;