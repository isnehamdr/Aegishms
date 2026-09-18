import Footer from '@/Components/Footer'
import HeroSection from '@/Components/HomePage/Hero'
import Integratedpartner from '@/Components/Integratedpartner'
import Navbar from '@/Components/Navbar'
import AeigesSoftware from '@/Components/NewPage/AeigesSoftware'
import Blogsection from '@/Components/NewPage/Blogsection'
import Clients from '@/Components/NewPage/Clients'
import Hero from '@/Components/NewPage/Hero'
import Modules from '@/Components/NewPage/Modules'
import Patronized from '@/Components/NewPage/Patronized'
import StatsHero from '@/Components/NewPage/Statshero'
import TestimonialSlider from '@/Components/NewPage/Testimonials'
import Product from '@/Components/Product'
import GuestLayout from '@/Layouts/GuestLayout'
import { Head } from '@inertiajs/react'
import React from 'react'



const New = () => {

    // SEO Metadata
    const pageTitle = "Aegis HMS - Best Hotel and Restaurant Management Software in Nepal | PMS & RMS Solution";
    const pageDescription = "Aegis HMS is Nepal's leading cloud-based hotel and restaurant management software. Streamline operations, boost revenue, and enhance guest experience with our all-in-one PMS solution";
    return (

        <>

            <Head>
                {/* Primary Meta Tags */}
                <title>
                    Aegis HMS – Hotel & Restaurant Software Nepal
                </title>

                <meta
                    name="description"
                    content="Aegis HMS is Nepal’s leading hotel and restaurant management software. Manage PMS, POS, RMS , banquets,hospitality, integration and operations from one platform."
                />
                <meta
                    name="keywords"
                    content="hotel management software Nepal, restaurant POS system, cloud PMS Nepal, hospitality software, Aegis HMS, hotel ERP Nepal"
                />

                {/* Canonical */}

                {/* Open Graph */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.aegishms.com/" />
                <meta
                    property="og:title"
                    content="Aegis HMS – Hotel & Restaurant Software Nepal"
                />
                <meta
                    property="og:description"
                    content="Nepal’s leading cloud-based hotel and restaurant management software for hotels, resorts, and hospitality businesses."
                />
                <meta
                    property="og:image"
                    content="https://www.aegishms.com/images/og-home.jpg"
                />
                <meta property="og:site_name" content="Aegis HMS" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@aegishms" />
                <meta
                    name="twitter:title"
                    content="Aegis HMS – Hotel & Restaurant Software Nepal"
                />
                <meta
                    name="twitter:description"
                    content="Cloud-based hotel & restaurant management software built for modern hospitality businesses in Nepal."
                />
                <meta
                    name="twitter:image"
                    content="https://www.aegishms.com/images/og-home.jpg"
                />

                {/* SEO Directives */}
                <meta
                    name="robots"
                    content="index, follow, max-image-preview:large"
                />
                <meta name="author" content="Aegis Software" />
                <meta name="language" content="English" />
                <meta name="geo.region" content="NP" />
                <meta name="geo.placename" content="Kathmandu" />

                {/* Structured Data: Software Application */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
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
                    })}
                </script>

                {/* Structured Data: Organization */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        "name": "Aegis HMS",
                        "url": "https://www.aegishms.com/",
                        "logo": "https://www.aegishms.com/images/og-home.jpg",
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
                            "streetAddress": "Dhantil Lane ",
                            "addressLocality": "Kathmandu",
                            "addressRegion": "NP",
                            "postalCode": "XXXXX",
                            "addressCountry": "Nepal"
                        }
                    })}
                </script>


                {/* Hreflang for multi-language / multi-region */}
                {/* English - Nepal */}
                <link rel="alternate" href="https://www.aegishms.com/" hreflang="en-NP" />

                {/* English - Global */}
                <link rel="alternate" href="https://www.aegishms.com/en/" hreflang="en" />

                {/* Nepali - Nepal */}
                <link rel="alternate" href="https://www.aegishms.com/np/" hreflang="ne-NP" />

                {/* Default / fallback */}
                <link rel="alternate" href="https://www.aegishms.com/" hreflang="x-default" />
            </Head>


            <GuestLayout>

                {/* <Hero /> */}

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
    )
}

export default New