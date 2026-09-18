import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import GuestLayout from '@/Layouts/GuestLayout';
import Box from '@mui/material/Box';
import { BsCircleFill } from 'react-icons/bs';
import SEO from '@/Components/SEO';
import Hk from '../../../public/images/hk2.png';

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

const Aegisops = () => {
    const featureSectionRef = useRef(null);
    const domain = 'https://aegishms.com/';
    const canonicalUrl = `${domain}/aegis-ops`;
    const ogImageUrl = `${domain}/images/og/aegis-ops.jpg`;

    useEffect(() => {
        // GSAP Animation for Feature Section ONLY
        if (featureSectionRef.current) {
            const featureBoxes = gsap.utils.toArray('.feature-box');

            const getRadius = () => {
                if (window.matchMedia('(max-width: 768px)').matches) {
                    return 140;
                } else {
                    return 240;
                }
            };

            const radius = getRadius();
            const angleIncrement = (Math.PI * 2) / featureBoxes.length;

            featureBoxes.forEach((box, index) => {
                const angle = angleIncrement * index;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;

                gsap.set(box, {
                    x,
                    y,
                    opacity: 0,
                    scale: 0.8
                });
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
                    gsap.to(box, {
                        scale: 1.1,
                        boxShadow: "0 10px 25px rgba(0, 92, 148, 0.3)",
                        duration: 0.3
                    });
                });

                box.addEventListener('mouseleave', () => {
                    gsap.to(box, {
                        scale: 1,
                        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                        duration: 0.3
                    });
                });
            });
        }

        // ✅ Removed GSAP gallery animation context
    }, []);

    // Structured Data - SoftwareApplication
    const softwareSchema = {
        "@type": "SoftwareApplication",
        "name": "Aegis OPS",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web, iOS, Android",
        "description": "Aegis-OPS is a powerful add-on app that streamlines hotel operations and approvals. Management can review and approve finance vouchers and inventory requests in real time. Housekeeping supervisors can assign tasks, monitor team progress, and manage daily operational activities efficiently.",
        "offers": {
            "@type": "Offer",
            "priceCurrency": "USD",
            "price": "0",
            "availability": "https://schema.org/InStock"
        },
        "provider": {
            "@type": "Organization",
            "name": "Aegis Software",
            "url": domain
        },
        "screenshot": `${domain}/images/hk2.png`,
        "featureList": [
            "Real-time Approvals",
            "Finance Voucher Management",
            "Inventory Request Management",
            "Housekeeping Task Assignment",
            "Team Progress Monitoring",
            "Daily Operations Management",
            "Push Notifications",
            "Mobile Accessibility"
        ]
    };

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

    // Breadcrumb Schema
    const breadcrumbSchema = {
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": domain
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Aegis OPS",
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
            softwareSchema,
            breadcrumbSchema
        ]
    };

    return (
        <GuestLayout>
            <SEO 
                title="Aegis OPS – Hotel Operations Management & Approval App | Aegis Software"
                description="Aegis OPS is a powerful hotel operations management app that streamlines approvals, task assignments, and daily operations. Real-time finance voucher approvals, inventory requests, and housekeeping management."
                keywords="hotel operations management, hotel approval app, housekeeping management software, finance voucher approval, inventory request management, task assignment app, hotel operations software, Aegis OPS"
                image={ogImageUrl}
                canonical={canonicalUrl}
                schema={fullSchema}
            />

            <div>
                {/* Banner Section */}
                <div className="fixed inset-0 -z-10 lg:px-32">
                    <div className="absolute top-20 left-20 w-72 h-72 bg-[#005c94]/10 rounded-full mix-blend-multiply filter blur-xl animate-blob" />
                    <div className="absolute top-40 right-20 w-72 h-72 bg-[#0EA5E9]/10 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
                    <div className="absolute -bottom-8 left-20 w-72 h-72 bg-[#33C3F0]/10 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" />
                    <div
                        className="absolute inset-0 -z-10"
                        style={{
                            background:
                                "linear-gradient(109.6deg, rgba(0,92,148,0.05) 11.2%, rgba(14,165,233,0.05) 91.1%)",
                        }}
                    />
                </div>
                <div
                    className="mt-[68px] bg-[url('/images/half-circle-bg.png')] bg-bottom bg-no-repeat bg-cover flex flex-col justify-center items-center h-[50vh] text-white "
                >
                    <h1 className="text-3xl sm:text-5xl font-semibold mb-8 leading-tight bg-clip-text text-transparent bg-white pb-2">
                        Aegis OPS
                    </h1>
                    <ul className="st-breadcrumb flex items-center text-sm font-semibold uppercase bg-black/5 rounded-lg p-3" aria-label="Breadcrumb">
                        <li>
                            <a href="/" className="text-white hover:text-white transition-colors">Home</a>
                        </li>
                        <li className="mx-2 text-gray-400">/</li>
                        <li className="text-gray-300">Aegis OPS</li>
                    </ul>
                </div>
            </div>

            <Box
                className="gallery"
                sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    minHeight: { xs: "auto", md: "50vh" },
                }}
            >
                {/* Left Section */}
                <Box
                    className="left"
                    sx={{
                        width: { xs: "100%", md: "50%" },
                        padding: { xs: "1.5rem", md: "4rem" },
                    }}
                >
                    <Box className="details">
                        <h2 className="text-2xl sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-[#005c94] to-[#0EA5E9] font-bold mb-12">Aegis OPS</h2>
                        <p className="text-base sm:text-base font-[400] text-[#231F20]/80 sm:pe-8">
                            Aegis-OPS is a powerful add-on app that streamlines hotel operations and approvals. Management can review and approve finance vouchers and inventory requests in real time. Housekeeping supervisors can assign tasks, monitor team progress, and manage daily operational activities efficiently, ensuring smooth coordination, faster decisions, and improved overall productivity.
                        </p>
                    </Box>
                </Box>

                {/* ✅ Updated Right Section: Single Static Image */}
                <Box
                    className="rightblock"
                    sx={{
                        width: { xs: "100%", md: "50%" },
                        position: "relative",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "flex-start",
                        marginTop: { xs: "2rem", md: "4rem" },
                    }}
                >
                    <Box
                        sx={{
                            width: { xs: "90%", md: "40vw" },
                            position: { md: "sticky" },
                            top: { md: "100px" },
                            borderRadius: "10px",
                            overflow: "hidden",
                        }}
                    >
                        <img
                            src={Hk}
                            alt="Aegis OPS Mobile App Interface for Hotel Operations Management"
                            loading="lazy"
                            style={{
                                width: "70%",
                                objectFit: "cover",
                            }}
                        />
                    </Box>
                </Box>
            </Box>

            {/* Feature section */}
            <section
                ref={featureSectionRef}
                className="feature-section relative bg-white py-10 sm:py-36 overflow-hidden lg:px-32 "
                aria-labelledby="additional-features-heading"
            >
                <div className="container mx-auto">
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="w-3/4 md:w-1/2 mx-auto sm:px-4 py-10 text-start">
                            <div className="relative inline-block ps-4">
                                <h2 className="text-lg uppercase text-[#231F20]/80 mb-6 relative z-10">
                                    Additional Features
                                </h2>
                                <div className="title-effect absolute top-[-10px] left-[0px] w-[50px] h-[50px] opacity-20">
                                    <div className="absolute top-0 left-0 w-full h-[7px] bg-blue-500 origin-top-left animate-bar-top"></div>
                                    <div className="absolute top-0 right-0 w-[7px] h-full bg-blue-500 origin-top-left animate-bar-right"></div>
                                    <div className="absolute bottom-0 right-0 w-full h-[7px] bg-blue-500 origin-bottom-right animate-bar-bottom"></div>
                                    <div className="absolute bottom-0 left-0 w-[7px] h-full bg-blue-500 origin-bottom-left animate-bar-left"></div>
                                </div>
                            </div>
                            <h2 id="additional-features-heading" className="text-2xl sm:text-4xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#005c94] to-[#0EA5E9] mb-8 font-[600]">
                                Programs For Modern Hoteliers
                            </h2>
                            <ul className="grid lg:grid-cols-2 gap-4 text-md text-[#231F20]/80">
                                {[
                                    "Real-time Approvals",
                                    "Finance Voucher Management",
                                    "Inventory Request Management",
                                    "Housekeeping Task Assignment",
                                    "Team Progress Monitoring",
                                    "Push Notifications",
                                    "Mobile Accessibility",
                                    "Analytics Dashboard"
                                ].map((item, index) => (
                                    <li key={index} className="flex items-center">
                                        <BsCircleFill className="mr-3 text-[#005C94]" size={8} />
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
                                        "Task Management",
                                        "Approval Workflow",
                                        "Inventory Requests",
                                        "Finance Vouchers",
                                        "Housekeeping",
                                        "Team Monitoring",
                                        "Notifications",
                                        "Reports",
                                        "Settings",
                                    ].map((feature, index) => (
                                        <div
                                            key={index}
                                            className="feature-box absolute w-16 h-16 sm:w-24 sm:h-24 bg-[#EEF6FF] rounded-lg flex justify-center items-center shadow-lg transition-all duration-300 cursor-pointer hover:bg-[#D9EAFC]"
                                            style={{
                                                left: '50%',
                                                top: '50%',
                                                transform: 'translate(-50%, -50%)',
                                            }}
                                            aria-label={feature}
                                        >
                                            <p className="text-xs sm:text-sm font-semibold text-[#005c94] text-center p-1 sm:p-2">
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
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Streamline Hotel Operations with Aegis OPS</h2>
                    <div className="prose prose-lg max-w-none">
                        <p className="text-gray-700 mb-4">
                            Aegis OPS is a comprehensive <strong>hotel operations management app</strong> designed to streamline daily workflows and approvals. From <strong>housekeeping task management</strong> to <strong>finance voucher approvals</strong>, our mobile app ensures that hotel staff and management stay connected and productive.
                        </p>
                        <p className="text-gray-700 mb-4">
                            With real-time <strong>push notifications</strong> and an intuitive interface, supervisors can assign tasks, monitor team progress, and manage <strong>inventory requests</strong> on the go. Management can review and approve financial documents instantly, reducing delays and improving operational efficiency.
                        </p>
                        <p className="text-gray-700">
                            Whether you're managing a small boutique hotel or a large resort, Aegis OPS provides the tools you need to coordinate teams, track performance, and make faster decisions. Integrated seamlessly with the Aegis HMS ecosystem, it's the perfect solution for modern hotel operations.
                        </p>
                    </div>
                </div>
            </section>
        </GuestLayout>
    );
};

export default Aegisops;