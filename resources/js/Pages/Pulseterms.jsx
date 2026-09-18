import GuestLayout from "@/Layouts/GuestLayout";
import { motion } from "framer-motion";
import { usePage } from "@inertiajs/react";
import SEO from "@/Components/SEO";

const Pulseterms = () => {
    const { url } = usePage();
    
    const siteUrl = 'https://aegishms.com';
    const canonicalUrl = `${siteUrl}${url}`;
    const ogImageUrl = `${siteUrl}/images/og-privacy-policy.jpg`;

    // Organization Schema
    const organizationSchema = {
        "@type": "Organization",
        "@id": `${siteUrl}#organization`,
        "name": "Aegis HMS",
        "url": siteUrl,
        "logo": {
            "@type": "ImageObject",
            "url": `${siteUrl}/images/logo.png`
        },
        "contactPoint": [
            {
                "@type": "ContactPoint",
                "telephone": "+977-9801961498",
                "contactType": "customer support",
                "email": "support@aegishms.com",
                "availableLanguage": ["English", "Nepali"]
            }
        ]
    };

    // Website Schema
    const websiteSchema = {
        "@type": "WebSite",
        "@id": `${siteUrl}#website`,
        "url": siteUrl,
        "name": "Aegis HMS",
        "publisher": { "@id": `${siteUrl}#organization` }
    };

    // WebPage Schema
    const webpageSchema = {
        "@type": "WebPage",
        "@id": `${canonicalUrl}#webpage`,
        "name": "Privacy Policy for Aegis Pulse | Aegis HMS",
        "description": "Learn how Aegis Pulse collects, uses, and protects your business and personal data. Our Privacy Policy ensures transparency and compliance with data protection standards.",
        "url": canonicalUrl,
        "isPartOf": { "@id": `${siteUrl}#website` },
        "about": { "@id": `${siteUrl}#organization` }
    };

    // PrivacyPolicy Schema
    const privacyPolicySchema = {
        "@type": "PrivacyPolicy",
        "@id": `${canonicalUrl}#privacy-policy`,
        "name": "Privacy Policy for Aegis Pulse",
        "description": "This Privacy Policy explains how Aegis Pulse collects, uses, stores, and protects your data.",
        "url": canonicalUrl,
        "datePublished": "2020-06-20",
        "dateModified": "2025-02-25",
        "isPartOf": { "@id": `${siteUrl}#website` },
        "publisher": { "@id": `${siteUrl}#organization` }
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
                "name": "Privacy Policy for Aegis Pulse",
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
            privacyPolicySchema,
            breadcrumbSchema
        ]
    };

    return (
        <GuestLayout>
            <SEO 
                title="Privacy Policy for Aegis Pulse | Aegis HMS"
                description="Learn how Aegis Pulse collects, uses, and protects your business and personal data. Our Privacy Policy ensures transparency and compliance with data protection standards."
                keywords="privacy policy, data protection, Aegis Pulse privacy, GDPR compliance, data security, hospitality data privacy, hotel software privacy"
                image={ogImageUrl}
                canonical={canonicalUrl}
                schema={fullSchema}
                noIndex={false}
            />

            {/* Background Blobs */}
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

            <motion.div
                className="mt-[68px] bg-[url('/images/half-circle-bg.png')] bg-bottom bg-no-repeat bg-cover flex flex-col justify-center items-center h-[50vh] text-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                aria-labelledby="privacy-policy-title"
            >
                <motion.h1
                    id="privacy-policy-title"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="text-4xl sm:text-6xl font-semibold mb-8 leading-tight text-center"
                >
                    Privacy Policy for Aegis Pulse
                </motion.h1>

                <nav aria-label="Breadcrumb" className="st-breadcrumb flex items-center text-sm font-semibold uppercase bg-black/5 rounded-lg p-3">
                    <ol className="flex items-center">
                        <li>
                            <a href="/" className="text-white hover:text-gray-200 transition-colors" aria-label="Home">
                                Home
                            </a>
                        </li>
                        <li className="mx-2 text-gray-400" aria-hidden="true">/</li>
                        <li aria-current="page">
                            <span className="text-gray-300">Privacy Policy for Aegis Pulse</span>
                        </li>
                    </ol>
                </nav>
            </motion.div>

            <div className="container sm:w-3/4 mx-auto p-6 md:p-12">
                <motion.div
                    className="text-center space-y-2 mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <div className="inline-block px-3 py-1 text-xs font-medium bg-[#f4f4f5] text-[#005c94] rounded-full mb-2">
                        Legal Document
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#005c94] tracking-tight">
                        Privacy Policy for Aegis Pulse
                    </h2>
                    <p className="text-[#71717a] mt-4">
                        Effective Date: <span className="font-medium">20 June 2020</span> •
                        Last Updated: <span className="font-medium">25 February 2025</span>
                    </p>
                </motion.div>

                <div className="space-y-6">
                    {sections.map((section, index) => (
                        <section
                            key={index}
                            className="bg-[#f7f7f7]/10 p-5 rounded-lg border border-[#e5e7eb] hover:border-[#005c94]/20 transition-colors duration-300"
                            aria-labelledby={`section-${index}`}
                        >
                            <h2
                                id={`section-${index}`}
                                className="text-xl font-bold text-black mb-3"
                            >
                                {section.title}
                            </h2>
                            {Array.isArray(section.content) ? (
                                <ul className="space-y-2 text-[#71717a] pl-5 list-disc">
                                    {section.content.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            ) : (
                                <div className="text-[#71717a] mt-2 leading-relaxed">
                                    {section.content}
                                </div>
                            )}
                        </section>
                    ))}
                </div>

                {/* Footer note */}
                <div className="mt-12 text-center text-sm text-[#71717a] border-t border-[#e5e7eb] pt-6">
                    <p>© {new Date().getFullYear()} Aegis HMS. All rights reserved.</p>
                    <p className="mt-2">
                        <a href="/termsandconditions" className="text-blue-600 hover:underline mx-2">Terms of Service</a>
                        <span>|</span>
                        <a href="/privacy-aegis-pulse" className="text-blue-600 hover:underline mx-2">Privacy Policy</a>
                    </p>
                </div>
            </div>
        </GuestLayout>
    );
};

const sections = [
    {
        title: "1. Information We Collect",
        content: "We collect the following types of information to deliver our services:",
    },
    {
        title: "a. Business Data",
        content: [
            "Hotel/restaurant names, locations, and registration details",
            "Performance metrics (e.g., revenue, occupancy, sales reports)",
            "Inventory and procurement data",
            "Staff roles and activity logs",
        ],
    },
    {
        title: "b. User Information",
        content: [
            "Names, email addresses, and roles of system users",
            "Login credentials (username, password)",
            "Usage patterns and access logs",
        ],
    },
    {
        title: "c. Technical Data",
        content: [
            "IP addresses, device/browser details, and access times",
            "Logs of report generation and data queries",
        ],
    },
    {
        title: "2. How We Use the Information",
        content: [
            "Provide centralized reporting and analytics",
            "Improve decision-making through visual dashboards and trends",
            "Ensure secure and authorized access to data",
            "Diagnose technical issues and enhance system performance",
            "Comply with applicable laws and regulations",
        ],
    },
    {
        title: "3. Data Confidentiality and Sharing",
        content: [
            "No data is sold to third parties.",
            "Data may be shared with service providers (e.g., hosting, analytics) strictly for operational purposes.",
            "Aggregated, anonymized data may be used for internal analysis or product improvement.",
            "Data may be disclosed when legally required or to enforce our Terms of Service.",
        ],
    },
    {
        title: "4. Data Security",
        content: [
            "Encrypted connections (SSL/TLS)",
            "Access control and role-based permissions",
            "Regular security monitoring and audits",
            "Secure cloud infrastructure and backup protocols",
        ],
    },
    {
        title: "5. Data Retention",
        content:
            "Your data will be retained for as long as your account is active or as needed for our operational and legal obligations. Upon termination, data will be archived or deleted as per our data retention policy.",
    },
    {
        title: "6. Cookies & Tracking",
        content:
            "We use cookies and analytics tools to enhance user experience and monitor system performance. You can manage cookies through your browser settings.",
    },
    {
        title: "7. Your Rights",
        content: [
            "Access, correct, or delete your personal or business data",
            "Restrict or object to certain types of processing",
            "Request data export in a machine-readable format",
            "To make such a request, please contact us at support@aegishms.com",
        ],
    },
    {
        title: "8. Third-Party Services",
        content:
            "If you integrate third-party tools (e.g., PMS, POS, or payment systems), please review their privacy practices as we are not responsible for their handling of your data.",
    },
    {
        title: "9. Policy Updates",
        content:
            "We may revise this Privacy Policy to reflect changes in our services or legal requirements. Updates will be posted on this page with a new effective date.",
    },
    {
        title: "10. Contact Information",
        content: (
            <div className="bg-[#f7f7f7] p-4 rounded-lg border border-[#e5e7eb]">
                <p className="text-[#005c94] font-semibold">Aegis Pulse - Aegis HMS</p>
                <p className="text-[#71717a]">Dhantil Lane 1, Lalitpur 44600</p>
                <p className="text-[#71717a]">Email: <a href="mailto:support@aegishms.com" className="text-blue-600 hover:underline">support@aegishms.com</a></p>
                <p className="text-[#71717a]">Phone: <a href="tel:+9779801961498" className="text-blue-600 hover:underline">+977 980-1961498</a></p>
            </div>
        ),
    },
];

export default Pulseterms;