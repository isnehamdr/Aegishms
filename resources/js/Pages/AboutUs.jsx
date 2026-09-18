// resources/js/Pages/AboutUs.jsx
import React from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import BannerSection from '@/Components/AboutPage/BannerSection';
import WelcomeSection from '@/Components/AboutPage/WelcomeSection';
import MainContent from '@/Components/AboutPage/MainContent';
import FeaturesSection from '@/Components/AboutPage/FeaturesSection';
import CTASection from '@/Components/AboutPage/CTASection';
import SEO from '@/Components/SEO';

const AboutUs = () => {
  const siteUrl = 'https://www.aegishms.com';
  const canonicalUrl = `${siteUrl}/about-us`;

  // Organization schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteUrl}#organization`,
    "name": "Aegis Software",
    "url": siteUrl,
    "logo": `${siteUrl}/images/logo.png`,
    "foundingDate": "2020",
    "description": "Aegis Software develops AegisHMS/Restro – a complete Hotel and Restaurant Management System for businesses in Nepal and beyond.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "Nepal"
    }
  };

  // About page schema
  const aboutPageSchema = {
    "@type": "AboutPage",
    "@id": `${canonicalUrl}#webpage`,
    "url": canonicalUrl,
    "name": "About Aegis Software | Hotel Management System Nepal",
    "description": "Learn about Aegis Software's mission to provide Nepal's best hotel and restaurant management solutions through AegisHMS/Restro software.",
    "isPartOf": { "@id": `${siteUrl}#website` },
    "about": { "@id": `${siteUrl}#organization` },
    "datePublished": "2020-01-01",
    "dateModified": new Date().toISOString().split('T')[0]
  };

  // Website schema
  const websiteSchema = {
    "@type": "WebSite",
    "@id": `${siteUrl}#website`,
    "url": siteUrl,
    "name": "Aegis Software",
    "publisher": { "@id": `${siteUrl}#organization` }
  };

  // Breadcrumb schema
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
        "name": "About Us",
        "item": canonicalUrl
      }
    ]
  };

  // Combine schemas into a graph
  const fullSchema = {
    "@context": "https://schema.org",
    "@graph": [
      organizationSchema,
      aboutPageSchema,
      websiteSchema,
      breadcrumbSchema
    ]
  };

  return (
    <>
      <SEO
        title="About Aegis HMS | Hotel Management Software Nepal"
        description="Aegis Software: Creators of AegisHMS/Restro. Nepal's leading hotel & restaurant management system since 2020. Streamline operations with our cloud solution."
        keywords="Aegis HMS, hotel management software Nepal, restaurant management system, cloud hotel software, AegisHMS, Restro, Nepal hospitality software, hotel billing system"
        image={`${siteUrl}/images/og-about-aegis.jpg`}
        canonical={canonicalUrl}
        publishedTime="2020-01-01"
        modifiedTime={new Date().toISOString().split('T')[0]}
        schema={fullSchema}
      />

      <GuestLayout>
        <div>
          <BannerSection />
          <WelcomeSection />
          <MainContent />
          <FeaturesSection />
          <CTASection />
        </div>
      </GuestLayout>
    </>
  );
};

export default AboutUs;