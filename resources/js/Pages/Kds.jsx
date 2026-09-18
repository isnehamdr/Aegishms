import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import GuestLayout from '@/Layouts/GuestLayout';
import Box from '@mui/material/Box';
import { BsCircleFill } from 'react-icons/bs';
import SEO from '@/Components/SEO';


// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

const Kds = () => {
    const featureSectionRef = useRef(null);
    const domain = 'https://aegishms.com/';
    const canonicalUrl = `${domain}/kds`;
    const ogImageUrl = `${domain}/images/og/kds.jpg`;

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
        "name": "Kitchen Display System (KDS)",
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
                "name": "Kitchen Display System (KDS)",
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
                title="Kitchen Display System (KDS) – Hotel Operations Management & Approval App | Aegis Software"
                description="Kitchen Display System (KDS) is a powerful hotel operations management app that streamlines approvals, task assignments, and daily operations. Real-time finance voucher approvals, inventory requests, and housekeeping management."
                keywords="hotel operations management, hotel approval app, housekeeping management software, finance voucher approval, inventory request management, task assignment app, hotel operations software, Kitchen Display System (KDS)"
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
                        Kitchen Display System (KDS)
                    </h1>
                    <ul className="st-breadcrumb flex items-center text-sm font-semibold uppercase bg-black/5 rounded-lg p-3" aria-label="Breadcrumb">
                        <li>
                            <a href="/" className="text-white hover:text-white transition-colors">Home</a>
                        </li>
                        <li className="mx-2 text-gray-400">/</li>
                        <li className="text-gray-300">Kitchen Display System (KDS)</li>
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
                        <h2 className="text-2xl sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-[#005c94] to-[#0EA5E9] font-bold mb-12">   Streamline Hotel Operations with Kitchen Display System (KDS)</h2>
                        <p className="text-base sm:text-base font-[400] text-[#231F20]/80 sm:pe-8">

                            Kitchen Display System (KDS) is a comprehensive hotel operations management app designed to streamline daily workflows and approvals. From housekeeping task management to finance voucher approvals, our mobile app ensures that hotel staff and management stay connected and productive.

                            With real-time push notifications and an intuitive interface, supervisors can assign tasks, monitor team progress, and manage inventory requests on the go. Management can review and approve financial documents instantly, reducing delays and improving operational efficiency.

                            Whether you're managing a small boutique hotel or a large resort, Kitchen Display System (KDS) provides the tools you need to coordinate teams, track performance, and make faster decisions. Integrated seamlessly with the Aegis HMS ecosystem, it's the perfect solution for modern hotel operations.
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
                            src="/images/kds.PNG"
                            alt="Kitchen Display System (KDS) Mobile App Interface for Hotel Operations Management"
                            loading="lazy"
                            style={{
                                width: "100%",
                                objectFit: "cover",
                            }}
                        />
                    </Box>
                </Box>
            </Box>


            {/* Loyalty & Membership Module Section */}
            {/* Loyalty & Membership Module Section */}
            <Box
                sx={{
                    display: "flex",
                    flexDirection: {
                        xs: "column-reverse",
                        md: "row"
                    },
                    minHeight: { xs: "auto", md: "50vh" },
                    py: 8,
                    background:
                        "linear-gradient(109.6deg, rgba(0,92,148,0.03) 11.2%, rgba(14,165,233,0.03) 91.1%)",
                }}
            >
                {/* Right Image */}
                <Box
                    sx={{
                        width: { xs: "100%", md: "50%" },
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        p: { xs: 2, md: 4 },
                    }}
                >
                    <Box
                        sx={{
                            width: { xs: "90%", md: "100%" },
                            borderRadius: "16px",
                            overflow: "hidden",
                            boxShadow: "0 20px 50px rgba(0, 92, 148, 0.15)",
                        }}
                    >
                        <img
                            src="/images/loyalty-membership.jpg"
                            alt="Aegis Loyalty & Membership Module"
                            loading="lazy"
                            style={{
                                width: "100%",
                                display: "block",
                                objectFit: "cover",
                            }}
                        />
                    </Box>
                </Box>

                {/* Left Content */}
                <Box
                    sx={{
                        width: { xs: "100%", md: "50%" },
                        padding: { xs: "1.5rem", md: "4rem" },
                        display: "flex",
                        alignItems: "center",
                    }}
                >
                    <Box>
                        <h2 className="text-2xl sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-[#005c94] to-[#0EA5E9] font-bold mb-8">
                            Build Lasting Guest Relationships with Aegis Loyalty & Membership
                        </h2>

                        <p className="text-base font-[400] text-[#231F20]/80 leading-8">
                            In today's competitive hospitality landscape, guest retention is
                            key to sustainable growth. The Aegis Loyalty & Membership Module
                            empowers hotels and restaurants to create meaningful guest
                            engagement through structured rewards, tier-based memberships,
                            and real-time tracking.
                        </p>

                        <p className="text-base font-[400] text-[#231F20]/80 leading-8 mt-4">
                            By turning every transaction into an opportunity for loyalty,
                            businesses can drive repeat visits, increase spending, and
                            enhance long-term customer value. Guests can earn points,
                            redeem rewards, unlock membership benefits, and enjoy
                            personalized offers tailored to their preferences.
                        </p>

                        <p className="text-base font-[400] text-[#231F20]/80 leading-8 mt-4">
                            Fully integrated with Aegis HMS, the Loyalty & Membership
                            Module helps hospitality businesses strengthen guest
                            relationships, improve retention rates, and increase revenue
                            through smarter customer engagement strategies.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                            {[
                                "Loyalty Points Management",
                                "Tier-Based Membership Programs",
                                "Real-Time Reward Tracking",
                                "Personalized Promotions",
                                "Guest Retention",
                                "Exclusive Member Benefits",
                                "Revenue Growth",
                                "Aegis HMS Integration"
                            ].map((feature, index) => (
                                <div key={index} className="flex items-center">
                                    <BsCircleFill
                                        className="mr-3 text-[#005C94]"
                                        size={8}
                                    />
                                    <span className="text-[#231F20]/80">{feature}</span>
                                </div>
                            ))}
                        </div>
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

        </GuestLayout>
    );
};

export default Kds;