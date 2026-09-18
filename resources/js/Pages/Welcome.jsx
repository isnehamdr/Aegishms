// resources/js/Pages/Welcome.jsx
import React from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import HeroSection from '@/Components/HomePage/Hero';
import Integratedpartner from '@/Components/Integratedpartner';
import Navbar from '@/Components/Navbar';
import AeigesSoftware from '@/Components/NewPage/AeigesSoftware';
import Blogsection from '@/Components/NewPage/Blogsection';
import Clients from '@/Components/NewPage/Clients';
import Hero from '@/Components/NewPage/Hero';
import Modules from '@/Components/NewPage/Modules';
import Patronized from '@/Components/NewPage/Patronized';
import StatsHero from '@/Components/NewPage/Statshero';
import TestimonialSlider from '@/Components/NewPage/Testimonials';
import Product from '@/Components/Product';
import SEO from '@/Components/SEO';

const Welcome = () => {
    const siteUrl = 'https://www.aegishms.com';
    const canonicalUrl = siteUrl;

    // Software Application Schema
    const softwareSchema = {
        "@type": "SoftwareApplication",
        "name": "Aegis HMS",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web-based",
        "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "ratingCount": "150"
        }
    };

    // Organization Schema
    const organizationSchema = {
        "@type": "Organization",
        "name": "Aegis HMS",
        "url": siteUrl,
        "logo": `${siteUrl}/images/og-home.jpg`,
        "sameAs": [
            "https://www.facebook.com/aegishms",
            "https://www.linkedin.com/company/aegishms",
            "https://twitter.com/aegishms"
        ],
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+977-9707096690",
            "contactType": "customer support",
            "email": "info@aegishms.com"
        },
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Dhantil Lane",
            "addressLocality": "Kathmandu",
            "addressRegion": "NP",
            "postalCode": "XXXXX",
            "addressCountry": "Nepal"
        }
    };

    // Local Business Schema
    const localBusinessSchema = {
        "@type": "LocalBusiness",
        "@id": `${siteUrl}#localbusiness`,
        "name": "Aegis HMS",
        "url": siteUrl,
        "logo": `${siteUrl}/images/logo.png`,
        "image": `${siteUrl}/images/og-home.jpg`,
        "description": "Hotel PMS, property management system, hotel management software Nepal, cloud PMS Nepal, hospitality software, AegisHMS, Aegis Software, server based, IRD approved, real time inventory, channel manager, booking engine, hotel ERP Nepal, restaurant POS system",
        "telephone": "+977-9707096690",
        "email": "info@aegishms.com",
        "priceRange": "$$",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Dhantil Lane 1",
            "addressLocality": "Lalitpur",
            "addressRegion": "Bagmati",
            "postalCode": "44600",
            "addressCountry": "NP"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 27.6644,
            "longitude": 85.3188
        },
        "areaServed": {
            "@type": "Country",
            "name": "Nepal"
        },
        "sameAs": [
            "https://www.facebook.com/aegishms",
            "https://www.linkedin.com/company/aegis-software-nepal/",
            "https://www.instagram.com/aegissoftwarenepal/",
            "https://www.youtube.com/@aegissoftware-nepal"
        ]
    };

    // Website Schema
    const websiteSchema = {
        "@type": "WebSite",
        "name": "Aegis HMS",
        "url": siteUrl,
        "potentialAction": {
            "@type": "SearchAction",
            "target": {
                "@type": "EntryPoint",
                "urlTemplate": `${siteUrl}/search?q={search_term_string}`
            },
            "query-input": "required name=search_term_string"
        }
    };

    // Combine all schemas
    const fullSchema = {
        "@context": "https://schema.org",
        "@graph": [
            softwareSchema,
            organizationSchema,
            localBusinessSchema,
            websiteSchema
        ]
    };

    return (
        <>
            <SEO 
                title="Aegis HMS - Best Hotel and Restaurant Management Software in Nepal | PMS and RMS Solution"
                description="Aegis HMS is Nepal's leading cloud-based hotel and restaurant management software. Streamline operations, boost revenue, and enhance guest experience with our all-in-one PMS solution."
                keywords="hotel management software Nepal, restaurant POS system, cloud PMS Nepal, hospitality software, Aegis HMS, hotel ERP Nepal, property management system, IRD approved, channel manager, booking engine"
                image={`${siteUrl}/images/og-home.jpg`}
                canonical={canonicalUrl}
                schema={fullSchema}
            >
                {/* Hreflang tags */}
                <link rel="alternate" href={siteUrl} hreflang="en-NP" />
         
                <link rel="alternate" href={siteUrl} hreflang="x-default" />
            </SEO>

            <GuestLayout>
                <HeroSection />
                <Patronized />
                <StatsHero />
                <Modules />
                <Integratedpartner />
                <AeigesSoftware />
                <Product />
                <TestimonialSlider />
                <Clients />
                <Blogsection />
            </GuestLayout>
        </>
    );
};

export default Welcome;