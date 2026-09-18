import GuestLayout from "@/Layouts/GuestLayout";
import { motion } from "framer-motion";
import SEO from "@/Components/SEO";

const ISMS = () => {
  const siteUrl = "https://aegishms.com";
  const canonicalUrl = `${siteUrl}/isms-policy`;
  const ogImageUrl = `${siteUrl}/images/og-isms.jpg`;

  const pageTitle = "ISMS Policy | Information Security Management System | Aegis Software";
  const pageDescription =
    "Aegis Software is committed to assuring confidentiality, integrity, and availability of information. Read our Information Security Management System (ISMS) policy statement.";

  // Organization Schema
  const organizationSchema = {
    "@type": "Organization",
    "@id": `${siteUrl}#organization`,
    "name": "Aegis Software Pvt. Ltd",
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
    "name": "Information Security Management System Policy",
    "description": "Official ISMS policy governing information security practices at Aegis Software.",
    "url": canonicalUrl,
    "datePublished": "2025-08-20",
    "dateModified": "2025-08-20",
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
        "name": "ISMS Policy",
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
        keywords="ISMS, information security policy, data security, Nepal software security, Aegis security, information security management system, ISO 27001, confidentiality integrity availability"
        image={ogImageUrl}
        canonical={canonicalUrl}
        schema={fullSchema}
        noIndex={true}
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
        aria-labelledby="isms-hero-title"
      >
        <motion.h1
          id="isms-hero-title"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-4xl sm:text-6xl font-semibold mb-8 leading-tight text-center"
        >
          ISMS Policy
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
              <span className="text-gray-300">ISMS Policy</span>
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
            Security Policy
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#005c94] tracking-tight">
            Information Security <br />Management System (ISMS)
          </h2>
          <p className="text-[#71717a] mt-4">
            Effective Date: <span className="font-medium">20 August 2025</span>
          </p>
        </motion.div>

        {/* Commitment Statement */}
        <motion.section
          className="bg-[#f7f7f7]/10 p-5 rounded-lg mb-6 hover:border hover:border-[#005c94]/20 transition-all duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          aria-labelledby="commitment-title"
        >
          <h2 id="commitment-title" className="text-xl font-bold text-black mb-3">
            Our Commitment
          </h2>
          <p className="text-[#71717a] leading-relaxed">
            We at <strong className="text-[#005c94]">Aegis Software Pvt. Ltd</strong> are committed to assure our 
            customers and other stakeholders for the <strong>Confidentiality, Integrity, and Availability</strong> of 
            information for the day-to-day Business and Technical operations. We recognize that information is a valuable 
            asset and are dedicated to protecting it from unauthorized access, disclosure, alteration, loss, or destruction.
          </p>
        </motion.section>

        {/* ISMS Framework Section */}
        <motion.section
          className="bg-[#f7f7f7]/10 p-5 rounded-lg mb-6 hover:border hover:border-[#005c94]/20 transition-all duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          aria-labelledby="isms-title"
        >
          <h2 id="isms-title" className="text-xl font-bold text-black mb-3">
            Information Security Management System (ISMS)
          </h2>
          <p className="text-[#71717a] leading-relaxed">
            We have established an <strong>Information Security Management System (ISMS)</strong> comprising appropriate 
            information security policies, procedures, processes, and controls. The ISMS is designed to safeguard the 
            information assets of the organization and its customers against information security threats while supporting 
            business objectives, regulatory requirements, and contractual obligations.
          </p>
          <p className="text-[#71717a] leading-relaxed mt-3">
            Through continual monitoring, assessment, and improvement of the ISMS, we strive to maintain the trust and 
            confidence of our customers, employees, business partners, and other interested parties.
          </p>
        </motion.section>

        {/* Key Commitments - Bullet List */}
        <motion.section
          className="bg-[#f7f7f7]/10 p-5 rounded-lg mb-6 hover:border hover:border-[#005c94]/20 transition-all duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          aria-labelledby="commitments-title"
        >
          <h2 id="commitments-title" className="text-xl font-bold text-black mb-3">
            To meet this commitment, we will:
          </h2>
          <ul className="space-y-3 text-[#71717a] pl-5 list-disc">
            <li>Implement and maintain an effective Information Security Management System;</li>
            <li>Deploy most appropriate technology and infrastructure;</li>
            <li>Meet all the contractual obligations on information security;</li>
            <li>Provide information security awareness to all employees;</li>
            <li>Meet all the regulatory and legislation requirements;</li>
            <li>Create and maintain a security conscious culture within Information Services; and</li>
            <li>Continually improve the information security management system.</li>
          </ul>
        </motion.section>

        {/* CIA Triad Section */}
        <motion.section
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          aria-labelledby="cia-title"
        >
          <div className="bg-[#f7f7f7]/10 p-5 rounded-lg hover:border hover:border-[#005c94]/20 transition-all duration-300">
            <div className="text-3xl mb-2">🔒</div>
            <h3 className="text-lg font-bold text-black mb-2">Confidentiality</h3>
            <p className="text-[#71717a] text-sm">
              Ensuring information is accessible only to those authorized to access it.
            </p>
          </div>
          <div className="bg-[#f7f7f7]/10 p-5 rounded-lg hover:border hover:border-[#005c94]/20 transition-all duration-300">
            <div className="text-3xl mb-2">✓</div>
            <h3 className="text-lg font-bold text-black mb-2">Integrity</h3>
            <p className="text-[#71717a] text-sm">
              Safeguarding the accuracy and completeness of information and processing methods.
            </p>
          </div>
          <div className="bg-[#f7f7f7]/10 p-5 rounded-lg hover:border hover:border-[#005c94]/20 transition-all duration-300">
            <div className="text-3xl mb-2">⏱️</div>
            <h3 className="text-lg font-bold text-black mb-2">Availability</h3>
            <p className="text-[#71717a] text-sm">
              Ensuring information is accessible when required by authorized users.
            </p>
          </div>
        </motion.section>

        {/* Approval Section */}
        <motion.section
          className="bg-[#f0f9ff] p-6 rounded-lg border border-[#005c94]/20 mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          aria-labelledby="approval-title"
        >
          <h2 id="approval-title" className="text-lg font-bold text-[#005c94] mb-4">
            Approved By
          </h2>
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4">
            <div>
              <p className="text-black font-semibold text-lg">Bhaskar Bhattarai</p>
              <p className="text-[#71717a] text-sm">CEO</p>
            </div>
            <div className="text-right">
              {/* <div className="w-48 h-0.5 bg-[#005c94]/30 mb-2 hidden sm:block"></div> */}
              {/* <p className="text-[#71717a] text-sm">Signature</p> */}
              <p className="text-[#71717a] text-sm mt-2">
                Date: <span className="font-medium">20th August 2025</span>
              </p>
            </div>
          </div>
        </motion.section>

        {/* Footer note */}
        <div className="mt-12 text-center text-sm text-[#71717a] border-t border-[#e5e7eb] pt-6">
          <p>© {new Date().getFullYear()} Aegis Software Pvt. Ltd. All rights reserved.</p>
          <p className="mt-2">
            <a href="/termsandconditions" className="text-blue-600 hover:underline mx-2">Terms of Service</a>
            <span>|</span>
            <a href="/privacy-aegis-pulse" className="text-blue-600 hover:underline mx-2">Privacy Policy</a>
            <span>|</span>
            <a href="/isms-policy" className="text-blue-600 hover:underline mx-2">ISMS Policy</a>
          </p>
        </div>
      </div>
    </GuestLayout>
  );
};

export default ISMS;