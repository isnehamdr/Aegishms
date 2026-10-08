import GuestLayout from "@/Layouts/GuestLayout";
import { motion } from "framer-motion";
import { usePage } from "@inertiajs/react";
import SEO from "@/Components/SEO";

const PrivacyPolicy = () => {
    const { url } = usePage();

    const siteUrl = "https://aegishms.com";
    const canonicalUrl = `${siteUrl}${url}`;
    const ogImageUrl = `${siteUrl}/images/og-privacy.jpg`;

    const pageTitle = "Privacy Policy | Aegis HMS";
    const pageDescription =
        "Read how Aegis Software Pvt. Ltd. collects, uses, shares, and protects data across its hospitality management software, ERP, POS, and mobile apps.";

    const organizationSchema = {
        "@type": "Organization",
        "@id": `${siteUrl}#organization`,
        name: "Aegis HMS",
        url: siteUrl,
        logo: {
            "@type": "ImageObject",
            url: `${siteUrl}/images/logo.png`,
        },
        contactPoint: [
            {
                "@type": "ContactPoint",
                telephone: "+977-9801961498",
                contactType: "customer support",
                email: "info@aegishms.com",
                availableLanguage: ["English", "Nepali"],
            },
        ],
    };

    const websiteSchema = {
        "@type": "WebSite",
        "@id": `${siteUrl}#website`,
        url: siteUrl,
        name: "Aegis HMS",
        publisher: { "@id": `${siteUrl}#organization` },
    };

    const webpageSchema = {
        "@type": "WebPage",
        "@id": `${canonicalUrl}#webpage`,
        name: pageTitle,
        description: pageDescription,
        url: canonicalUrl,
        isPartOf: { "@id": `${siteUrl}#website` },
        about: { "@id": `${siteUrl}#organization` },
    };

    const privacyPolicySchema = {
        "@type": "PrivacyPolicy",
        "@id": `${canonicalUrl}#privacy-policy`,
        name: "Privacy Policy of Aegis HMS",
        description: pageDescription,
        url: canonicalUrl,
        dateModified: "2026-10-08",
        isPartOf: { "@id": `${siteUrl}#website` },
        publisher: { "@id": `${siteUrl}#organization` },
    };

    const breadcrumbSchema = {
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
            { "@type": "ListItem", position: 2, name: "Privacy Policy", item: canonicalUrl },
        ],
    };

    const fullSchema = {
        "@context": "https://schema.org",
        "@graph": [
            organizationSchema,
            websiteSchema,
            webpageSchema,
            privacyPolicySchema,
            breadcrumbSchema,
        ],
    };

    return (
        <GuestLayout>
            <SEO
                title={pageTitle}
                description={pageDescription}
                keywords="privacy policy, data protection Nepal, Aegis HMS privacy, hotel software privacy, ISO 27001, hospitality data security"
                image={ogImageUrl}
                canonical={canonicalUrl}
                schema={fullSchema}
                noIndex={false}
            />

            {/* Background blobs */}
            <div className="fixed inset-0 -z-10 overflow-hidden lg:px-32">
                <div className="absolute top-20 left-4 sm:left-20 w-56 h-56 sm:w-72 sm:h-72 bg-[#005c94]/10 rounded-full mix-blend-multiply filter blur-xl animate-blob" />
                <div className="absolute top-40 right-4 sm:right-20 w-56 h-56 sm:w-72 sm:h-72 bg-[#0EA5E9]/10 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
                <div className="absolute -bottom-8 left-4 sm:left-20 w-56 h-56 sm:w-72 sm:h-72 bg-[#33C3F0]/10 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" />
                <div
                    className="absolute inset-0 -z-10"
                    style={{
                        background:
                            "linear-gradient(109.6deg, rgba(0,92,148,0.05) 11.2%, rgba(14,165,233,0.05) 91.1%)",
                    }}
                />
            </div>

            {/* Hero */}
            <motion.div
                className="mt-[68px] bg-[url('/images/half-circle-bg.png')] bg-bottom bg-no-repeat bg-cover flex flex-col justify-center items-center min-h-[40vh] sm:min-h-[45vh] lg:h-[50vh] px-4 py-10 text-white"
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
                    className="text-3xl sm:text-5xl lg:text-6xl font-semibold mb-6 sm:mb-8 leading-tight text-center"
                >
                    Privacy Policy
                </motion.h1>

                <nav
                    aria-label="Breadcrumb"
                    className="st-breadcrumb flex items-center text-xs sm:text-sm font-semibold uppercase bg-black/5 rounded-lg p-2.5 sm:p-3"
                >
                    <ol className="flex items-center">
                        <li>
                            <a href="/" className="text-white hover:text-gray-200 transition-colors" aria-label="Home">
                                Home
                            </a>
                        </li>
                        <li className="mx-2 text-gray-400" aria-hidden="true">/</li>
                        <li aria-current="page">
                            <span className="text-gray-300">Privacy Policy</span>
                        </li>
                    </ol>
                </nav>
            </motion.div>

            {/* Content */}
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16">
                <motion.div
                    className="text-center space-y-2 mb-8 sm:mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <div className="inline-block px-3 py-1 text-xs font-medium bg-[#f4f4f5] text-[#005c94] rounded-full mb-2">
                        Legal Document
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#005c94] tracking-tight">
                        Privacy Policy
                    </h2>
                    <p className="text-[#71717a] mt-4 text-sm sm:text-base">
                        Last Updated: <span className="font-medium">October 8, 2026</span>
                    </p>
                </motion.div>

                {/* Intro */}
                <div className="space-y-4 text-[#71717a] leading-relaxed text-sm sm:text-base mb-8 sm:mb-10">
                    {introParagraphs.map((text, i) => (
                        <p key={i}>{text}</p>
                    ))}
                </div>

                {/* Table of contents */}
                <nav
                    aria-label="Table of contents"
                    className="bg-[#f7f7f7]/10 p-4 sm:p-5 rounded-lg border border-[#e5e7eb] mb-8 sm:mb-10"
                >
                    <p className="text-lg font-bold text-black mb-3">On this page</p>
                    <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5 text-md">
                        {sections.map((section, index) => (
                            <li key={section.title}>
                                <a
                                    href={`#section-${index}`}
                                    className="text-[#005c94] hover:underline break-words"
                                >
                                    {index + 1}. {section.title}
                                </a>
                            </li>
                        ))}
                    </ol>
                </nav>

                {/* Sections */}
                <div className="space-y-5 sm:space-y-6">
                    {sections.map((section, index) => (
                        <section
                            key={section.title}
                            id={`section-${index}`}
                            className="scroll-mt-24 bg-[#f7f7f7]/10 p-4 sm:p-5 rounded-lg border border-[#e5e7eb] hover:border-[#005c94]/20 transition-colors duration-300"
                            aria-labelledby={`section-${index}-title`}
                        >
                            <h2
                                id={`section-${index}-title`}
                                className="text-lg sm:text-xl font-bold text-black mb-3 break-words"
                            >
                                {index + 1}. {section.title}
                            </h2>

                            {section.paragraphs?.map((text, i) => (
                                <p key={i} className="text-[#71717a] mt-2 leading-relaxed text-sm sm:text-base">
                                    {text}
                                </p>
                            ))}

                            {section.items && <BulletList items={section.items} />}

                            {section.subsections?.map((sub) => (
                                <div key={sub.title} className="mt-5">
                                    <h3 className="text-base sm:text-lg font-semibold text-[#005c94] mb-1">
                                        {sub.title}
                                    </h3>
                                    <BulletList items={sub.items} />
                                </div>
                            ))}

                            {section.contact && <ContactCard />}
                        </section>
                    ))}
                </div>

                {/* Footer note */}
                <div className="mt-10 sm:mt-12 text-center text-xs sm:text-sm text-[#71717a] border-t border-[#e5e7eb] pt-6">
                    <p>© {new Date().getFullYear()} Aegis HMS. All rights reserved.</p>
                    <p className="mt-2 flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
                        <a href="/termsandconditions" className="text-blue-600 hover:underline">
                            Terms of Service
                        </a>
                        <span aria-hidden="true">|</span>
                        <a href="/privacy-policy" className="text-blue-600 hover:underline">
                            Privacy Policy
                        </a>
                    </p>
                </div>
            </div>
        </GuestLayout>
    );
};

const BulletList = ({ items }) => (
    <ul className="space-y-2 text-[#71717a] pl-5 mt-2 list-disc text-sm sm:text-base leading-relaxed marker:text-[#005c94]">
        {items.map((item, i) => (
            <li key={i} className="break-words">
                {typeof item === "string" ? (
                    item
                ) : (
                    <>
                        <span className="font-semibold text-black/80">{item.label}</span> {item.text}
                    </>
                )}
            </li>
        ))}
    </ul>
);

const ContactCard = () => (
    <div className="mt-3 bg-[#f7f7f7] p-4 rounded-lg border border-[#e5e7eb] text-sm sm:text-base">
        <p className="text-[#005c94] font-semibold">Aegis Software Pvt. Ltd.</p>
        <dl className="mt-2 space-y-1.5 text-[#71717a]">
            <div className="flex flex-col sm:flex-row sm:gap-2">
                <dt className="font-medium text-black/80 sm:w-20 shrink-0">Address</dt>
                <dd>Dhantil Lane 1, Lalitpur 44600, Nepal</dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-2">
                <dt className="font-medium text-black/80 sm:w-20 shrink-0">Phone</dt>
                <dd className="flex flex-wrap gap-x-2">
                    <a href="tel:+9779707096690" className="text-blue-600 hover:underline">
                        +977 9707096690
                    </a>
                    <span aria-hidden="true">/</span>
                    <a href="tel:+9779801961498" className="text-blue-600 hover:underline">
                        +977 9801961498
                    </a>
                </dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-2">
                <dt className="font-medium text-black/80 sm:w-20 shrink-0">Email</dt>
                <dd className="break-all">
                    <a href="mailto:info@aegishms.com" className="text-blue-600 hover:underline">
                        info@aegishms.com
                    </a>
                </dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-2">
                <dt className="font-medium text-black/80 sm:w-20 shrink-0">Website</dt>
                <dd className="break-all">
                    <a
                        href="https://aegishms.com"
                        className="text-blue-600 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        https://aegishms.com
                    </a>
                </dd>
            </div>
        </dl>
    </div>
);

const introParagraphs = [
    'Welcome to Aegis Software Pvt. Ltd. ("Aegis HMS", "we", "our", or "us"). We operate the website https://aegishms.com and provide next-generation hospitality management software, ERP systems, POS solutions, and related mobile applications (collectively, the "Services").',
    "We are committed to protecting your privacy. As an ISO/IEC 27001 certified company, we adhere to high standards of information security to ensure that the data of our clients (hotels, resorts, restaurants, and hospitality businesses) and their guests remains confidential, secure, and available.",
    "Please read this Privacy Policy carefully to understand how we collect, use, protect, and handle your information.",
];

const sections = [
    {
        title: "Information We Collect",
        paragraphs: [
            "We collect information to provide better services to all our users and clients. The data we collect depends on how you interact with us.",
        ],
        subsections: [
            {
                title: "A. Information You Provide to Us",
                items: [
                    {
                        label: "Account and Contact Data:",
                        text: "When you request a demo, sign up for our services, or contact our 24/7 support team, we may collect your name, business email address, phone number, hotel/company name, job title, and physical business address.",
                    },
                    {
                        label: "Customer Support and Communications:",
                        text: "Any information you provide when opening a support ticket, participating in chat logs, or reporting a system bug.",
                    },
                ],
            },
            {
                title: "B. Information Collected via our Software Solutions (PMS, POS, ERP, Mobile Apps)",
                items: [
                    "In providing cloud-ready or server-based platforms (including Aegis Core, Aegis Elite, Aegis Infinity, Aegis Pulse, and mobile apps like the Waiter App or Housekeeping App), we may process the following.",
                    {
                        label: "Operational Client Data:",
                        text: "Financial records, inventory logs, employee payroll information, and internal operational workflows generated by your business operations.",
                    },
                    {
                        label: "Guest Information (Processed as a Data Processor):",
                        text: "In providing Property Management Systems (PMS) to our clients, our platform acts as a data processor. The system stores guest profile data (names, IDs, contact information, check-in/out records, room preferences, and booking details) entered by the hotel or via connected booking engines and channel managers.",
                    },
                ],
            },
            {
                title: "C. Automatically Collected Data (Usage & Cookies)",
                items: [
                    {
                        label: "Technical Log Data:",
                        text: "IP addresses, browser types, Internet Service Providers (ISPs), operating systems, and device identifiers when you browse our website or log into our cloud modules.",
                    },
                    {
                        label: "Cookies:",
                        text: "We use cookies to understand site preferences, maintain secure user login sessions, and optimize web performance.",
                    },
                ],
            },
        ],
    },
    {
        title: "How We Use Your Information",
        paragraphs: ["We use the collected information for the following business purposes:"],
        items: [
            "To deploy, configure, and maintain your hospitality management system ecosystem.",
            "To provide real-time updates and live analytics across multi-property environments via modules like Aegis Pulse.",
            "To process payments, billing, and support requests securely.",
            "To ensure system compatibility with third-party digital integrations (e.g., door locks, channel managers, payment gateways, passport scanners).",
            "To monitor, detect, and prevent technical issues, cyber threats, or unauthorized access, keeping aligned with our ISO/IEC 27001 frameworks.",
        ],
    },
    {
        title: "Data Sharing and Third-Party Integrations",
        paragraphs: [
            "We do not sell, trade, or rent your personal information to third parties. We only share information under the following essential circumstances:",
        ],
        items: [
            {
                label: "With Third-Party Integration Partners:",
                text: "If your hotel ecosystem requires integration with third-party software (e.g., global booking engines, electronic door locks, external payment gateways, or local tax authorities like the Inland Revenue Department - IRD), data will be shared with these systems as authorized by your configuration.",
            },
            {
                label: "For Legal Compliance:",
                text: "We may disclose data if required to do so by applicable laws in Nepal or in response to valid legal requests by public authorities.",
            },
        ],
    },
    {
        title: "Data Security",
        paragraphs: [
            "Security is at the core of what we do. Aegis Software Pvt. Ltd. implements comprehensive technical and organizational measures to safeguard data:",
        ],
        items: [
            "Our information security controls are independently certified under the ISO/IEC 27001 standard.",
            "We utilize data encryption protocols for both data in transit and data at rest on our cloud-ready systems.",
            "We deploy role-based access management within our applications, ensuring that only authorized personnel can view sensitive operational or guest data.",
        ],
    },
    {
        title: "Data Retention",
        paragraphs: [
            "We retain your personal and business data only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, or as required by contractual agreements and statutory financial regulations in Nepal.",
            "Guest data stored within an individual hotel's database is governed by that specific hotel's retention policies.",
        ],
    },
    {
        title: "Your Data Rights",
        paragraphs: [
            "Depending on your jurisdiction, you may have the right to access, update, correct, or request the deletion of the personal information we hold about you. If you wish to exercise any of these rights, please contact us directly using the details provided below.",
        ],
    },
    {
        title: "Changes to This Privacy Policy",
        paragraphs: [
            'We may update our Privacy Policy from time to time to reflect changes in our software features, legal requirements, or security practices. Any updates will be posted directly on this page with a revised "Last Updated" date.',
        ],
    },
    {
        title: "Contact Us",
        paragraphs: [
            "If you have any questions, concerns, or requests regarding this Privacy Policy or our information security practices, please reach out to us:",
        ],
        contact: true,
    },
];

export default PrivacyPolicy;