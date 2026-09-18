import GuestLayout from "@/Layouts/GuestLayout";
import { motion } from "framer-motion";
import SEO from "@/Components/SEO";

const Terms = () => {
  const siteUrl = "https://aegishms.com";
  const canonicalUrl = `${siteUrl}/termsandconditions`;
  const ogImageUrl = `${siteUrl}/images/og-terms.jpg`;
  
  const pageTitle = "Terms and Conditions | Aegis Software";
  const pageDescription =
    "Review the official Terms and Conditions for using Aegis Software's hotel and restaurant management solutions. Effective as of February 25, 2025.";

  // Organization Schema
  const organizationSchema = {
    "@type": "Organization",
    "@id": `${siteUrl}#organization`,
    "name": "Aegis Software",
    "url": siteUrl,
    "logo": {
      "@type": "ImageObject",
      "url": `${siteUrl}/images/logo.png`,
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
    "name": "Aegis Software",
    "publisher": { "@id": `${siteUrl}#organization` }
  };

  // WebPage Schema
  const webpageSchema = {
    "@type": "WebPage",
    "@id": `${canonicalUrl}#webpage`,
    "url": canonicalUrl,
    "name": pageTitle,
    "description": pageDescription,
    "isPartOf": { "@id": `${siteUrl}#website` },
    "about": { "@id": `${siteUrl}#organization` }
  };

  // LegalDocument Schema
  const legalDocumentSchema = {
    "@type": "LegalDocument",
    "@id": `${canonicalUrl}#legal-document`,
    "name": "Terms and Conditions",
    "description": "Official terms governing the use of Aegis Software's products and services.",
    "url": canonicalUrl,
    "datePublished": "2020-06-20",
    "dateModified": "2025-02-25",
    "inLanguage": "en-NP",
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
        "name": "Terms and Conditions",
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
      legalDocumentSchema,
      breadcrumbSchema
    ]
  };

  return (
    <GuestLayout>
      <SEO 
        title={pageTitle}
        description={pageDescription}
        keywords="terms and conditions, terms of service, software terms Nepal, Aegis terms, legal policies, service agreement, software usage terms"
        image={ogImageUrl}
        canonical={canonicalUrl}
        schema={fullSchema}
        noIndex={true} // Usually terms pages are set to noindex
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

      {/* Hero Section */}
      <motion.div
        className="mt-[68px] bg-[url('/images/half-circle-bg.png')] bg-bottom bg-no-repeat bg-cover flex flex-col justify-center items-center h-[50vh] text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        aria-labelledby="terms-hero-title"
      >
        <motion.h1
          id="terms-hero-title"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-4xl sm:text-6xl font-semibold mb-8 leading-tight text-center"
        >
          Terms and Conditions
        </motion.h1>

        <nav aria-label="Breadcrumb" className="st-breadcrumb">
          <ul className="flex items-center text-sm font-semibold uppercase bg-black/5 rounded-lg p-3">
            <li>
              <a href="/" className="text-white hover:text-gray-200 transition-colors" aria-label="Home">
                Home
              </a>
            </li>
            <li className="mx-2 text-gray-400" aria-hidden="true">
              /
            </li>
            <li aria-current="page">
              <span className="text-gray-300">Terms and Conditions</span>
            </li>
          </ul>
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
          <h2 className="text-3xl md:text-4xl font-bold text-[#005c94] tracking-tight">Terms and Conditions</h2>
          <p className="text-[#71717a] mt-4">
            Effective Date: <span className="font-medium">20 June 2020</span> •
            Last Updated: <span className="font-medium">25 February 2025</span>
          </p>
        </motion.div>

        {/* Sections */}
        {sections.map((section, index) => (
          <section
            key={index}
            className="bg-[#f7f7f7]/10 p-5 rounded-lg mb-6 hover:border hover:border-[#005c94]/20 transition-all duration-300"
            aria-labelledby={`section-${index + 1}-title`}
          >
            <h2
              id={`section-${index + 1}-title`}
              className="text-xl font-bold text-black mb-2"
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
              <div className="text-[#71717a] mt-2 leading-relaxed">{section.content}</div>
            )}
          </section>
        ))}

        {/* Footer note */}
        <div className="mt-12 text-center text-sm text-[#71717a] border-t border-[#e5e7eb] pt-6">
          <p>© {new Date().getFullYear()} Aegis Software. All rights reserved.</p>
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
    title: "1. Introduction",
    content:
      "These Terms and Conditions (\"Terms\") govern the use of Aegis Software's products and services. By accessing or using our software, you agree to comply with these Terms.",
  },
  {
    title: "2. Definitions",
    content: [
      '"Company" refers to Aegis Software.',
      '"User" refers to individuals or businesses using our software.',
      '"Service" refers to our hotel and restaurant management software and related support services.',
    ],
  },
  {
    title: "3. User Accounts & Responsibilities",
    content: [
      "Users must provide accurate and complete information when registering for an account.",
      "Account security is the user's responsibility. Unauthorized use must be reported immediately.",
    ],
  },
  {
    title: "4. Subscription & Payments",
    content: [
      "Services may require a subscription or one-time payment.",
      "Payments are non-refundable except as explicitly stated.",
      "The company reserves the right to modify pricing with prior notice.",
    ],
  },
  {
    title: "5. Acceptable Use Policy",
    content: [
      "Users must not use our software for illegal activities.",
      "Reverse-engineer, modify, or attempt to hack the system.",
      "Share login credentials or unauthorized access with third parties.",
    ],
  },
  {
    title: "6. Intellectual Property Rights",
    content: [
      "Aegis Software retains ownership of all intellectual property related to the software.",
      "Users are granted a limited, non-transferable license to use the software as per these Terms.",
    ],
  },
  {
    title: "7. Service Availability & Maintenance",
    content: [
      "We strive for maximum uptime but do not guarantee uninterrupted service.",
      "Scheduled maintenance may be conducted, with prior notice when possible.",
    ],
  },
  {
    title: "8. Termination & Suspension",
    content: [
      "We may suspend or terminate accounts if users violate these Terms.",
      "Payment obligations are not met.",
      "Any fraudulent or unauthorized activities are detected.",
    ],
  },
  {
    title: "9. Limitation of Liability",
    content: [
      "Aegis Software is not responsible for any indirect, incidental, or consequential damages.",
      "Loss of business, revenue, or data resulting from the use of our services.",
    ],
  },
  {
    title: "10. Governing Law & Dispute Resolution",
    content: [
      "These Terms shall be governed by the laws of Nepal.",
      "Disputes shall be resolved through arbitration or mediation before legal action.",
    ],
  },
  {
    title: "11. Amendments to Terms",
    content:
      "We reserve the right to modify these Terms at any time. Users will be notified of significant changes.",
  },
  {
    title: "12. Contact Information",
    content: (
      <div className="bg-[#f7f7f7] p-4 rounded-lg border border-gray-200">
        <p className="text-[#005c94] font-semibold">Aegis Software</p>
        <p className="text-[#71717a]">Dhantil Lane 1, Lalitpur 44600, Nepal</p>
        <p className="text-[#71717a]">Email: <a href="mailto:support@aegishms.com" className="text-blue-600 hover:underline">support@aegishms.com</a></p>
        <p className="text-[#71717a]">Phone: <a href="tel:+9779801961498" className="text-blue-600 hover:underline">+977 980-1961498</a></p>
      </div>
    ),
  },
];

export default Terms;