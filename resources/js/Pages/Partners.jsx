import GuestLayout from '@/Layouts/GuestLayout'
import React from 'react'
import { Link } from "@inertiajs/react";
import SEO from '@/Components/SEO';
import { 
  HiOutlineLocationMarker, 
  HiOutlineMail, 
  HiOutlinePhone,
  HiOutlineUser,
  HiOutlineDocumentText 
} from 'react-icons/hi'

const Partners = () => {
    const siteUrl = 'https://www.aegishms.com';
    const canonicalUrl = `${siteUrl}/partners`;

    const partners = [
        {
            id: 1,
            name: "Innovates",
            logo: "/images/feature-partner.png",
            address: "Babesa Express Highway, Thimphu",
            email: "info@innovates.bt",
            owner: "Manish Sharma",
            phone: "+975 1726 8753"
        },
        {
            id: 2,
            name: "PBR Technologies & Mobile Solutions",
            logo: "/images/partners/pbr.jpeg", 
            address: "DTD, H/NO. GE-216-0307, Ayi mensah - Greater Accra Region, Ghana",
            email: "sales@pbrtechnologies.com",
            owner: "Robert Asimani",
            phone: "+233 26 300 8000",
            registrationNumber: "BN975151023"
        },
        {
            id: 3,
            name: "Innovative Hospitality",
            logo: "/images/partners/innovative.jpeg", 
            address: "Myanmar",
            email: "innovative.ih.nyinyi@gmail.com",
            phone: "+95 9 254 871 375",
            owner: ""
        }
    ]

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

    // Create Partner schema for each partner
    const partnerSchemas = partners.map((partner, index) => ({
        "@type": "Organization",
        "@id": `${siteUrl}/partners#partner-${index}`,
        "name": partner.name,
        "logo": partner.logo.startsWith('http') ? partner.logo : `${siteUrl}${partner.logo}`,
        "url": canonicalUrl,
        "address": partner.address ? {
            "@type": "PostalAddress",
            "streetAddress": partner.address,
            "addressCountry": partner.address.includes("Ghana") ? "Ghana" : 
                             partner.address.includes("Myanmar") ? "Myanmar" : 
                             partner.address.includes("Thimphu") ? "Bhutan" : ""
        } : undefined,
        "email": partner.email,
        "telephone": partner.phone,
        "founder": partner.owner ? {
            "@type": "Person",
            "name": partner.owner
        } : undefined
    })).filter(schema => schema.name); // Filter out any empty entries

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
                "name": "Our Partners",
                "item": canonicalUrl
            }
        ]
    };

    // Website schema
    const websiteSchema = {
        "@type": "WebSite",
        "@id": `${siteUrl}#website`,
        "url": siteUrl,
        "name": "Aegis Software",
        "publisher": { "@id": `${siteUrl}#organization` }
    };

    // Combine all schemas
    const fullSchema = {
        "@context": "https://schema.org",
        "@graph": [
            organizationSchema,
            websiteSchema,
            breadcrumbSchema,
            ...partnerSchemas
        ]
    };

    return (
        <GuestLayout>
            {/* SEO Meta Tags */}
            <SEO 
                title="Our Partners | Aegis Software Global Partners Network"
                description="Discover Aegis Software's trusted partners worldwide. From Bhutan to Ghana and Myanmar, our partners help deliver innovative hospitality management solutions globally."
                keywords="Aegis partners, software partners Nepal, hospitality partners, Innovates Bhutan, PBR Technologies Ghana, Innovative Hospitality Myanmar"
                image={`${siteUrl}/images/og-partners.jpg`}
                canonical={canonicalUrl}
                schema={fullSchema}
            />

            <div>
                {/* Hero Section */}
                <div
                    className="relative mt-[68px] h-[50vh] flex flex-col justify-center items-center bg-bottom bg-no-repeat bg-cover text-white"
                    style={{ backgroundImage: "url('/images/half-circle-bg.png')" }}
                >
                    <h1 className="text-3xl sm:text-5xl font-semibold mb-8 leading-tight bg-clip-text text-transparent bg-white pb-2">
                        Our Partners
                    </h1>
                    <ul className="st-breadcrumb flex items-center text-sm font-semibold uppercase bg-black/5 rounded-lg p-3">
                        <li>
                            <Link href="/" className="text-white hover:text-white transition-colors">
                                Home
                            </Link>
                        </li>
                        <li className="mx-2 text-gray-400">/</li>
                        <li className="text-gray-300">Our Partners</li>
                    </ul>
                </div>

                {/* Partners Grid */}
                <div className="max-w-6xl mx-auto px-4 py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {partners.map((partner) => (
                            <div 
                                key={partner.id} 
                                className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
                            >
                                {/* Logo */}
                                <div className="p-6 pb-4 text-center border-b border-gray-100">
                                    <img
                                        src={partner.logo}
                                        alt={`${partner.name} logo`}
                                        className="h-20 mx-auto object-contain"
                                        loading="lazy"
                                    />
                                </div>
                                
                                {/* Content */}
                                <div className="p-5 space-y-3">
                                    <h3 className="font-semibold text-lg text-gray-800">
                                        {partner.name}
                                    </h3>
                                    
                                    <div className="space-y-2">
                                        {partner.address && (
                                            <div className="flex items-start gap-2 text-gray-500 text-sm">
                                                <HiOutlineLocationMarker className="w-4 h-4 mt-0.5 flex-shrink-0" />
                                                <span>{partner.address}</span>
                                            </div>
                                        )}
                                        
                                        {partner.email && (
                                            <div className="flex items-start gap-2 text-gray-500 text-sm">
                                                <HiOutlineMail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                                                <a href={`mailto:${partner.email}`} className="hover:text-blue-600 transition-colors">
                                                    {partner.email}
                                                </a>
                                            </div>
                                        )}
                                        
                                        {partner.phone && (
                                            <div className="flex items-start gap-2 text-gray-500 text-sm">
                                                <HiOutlinePhone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                                                <a href={`tel:${partner.phone}`} className="hover:text-blue-600 transition-colors">
                                                    {partner.phone}
                                                </a>
                                            </div>
                                        )}
                                        
                                        {partner.owner && (
                                            <div className="flex items-start gap-2 text-gray-500 text-sm">
                                                <HiOutlineUser className="w-4 h-4 mt-0.5 flex-shrink-0" />
                                                <span>{partner.owner}</span>
                                            </div>
                                        )}
                                    </div>
                                    
                                    {partner.registrationNumber && (
                                        <div className="flex items-start gap-2 text-gray-400 text-xs pt-2 border-t border-gray-100 mt-2">
                                            <HiOutlineDocumentText className="w-3 h-3 mt-0.5 flex-shrink-0" />
                                            <span>Reg No: {partner.registrationNumber}</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </GuestLayout>
    )
}

export default Partners