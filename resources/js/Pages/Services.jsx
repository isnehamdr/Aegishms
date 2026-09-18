import React, { useEffect, useRef } from 'react';
import { Head } from '@inertiajs/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import GuestLayout from '@/Layouts/GuestLayout';

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const cardsData = [
    {
      id: 1,
      imageSrc: '/images/client4.jpg',
      title: 'The Importance of Inventory Management in Hospitality and How Aegis HMS Can Optimize Your Operations',
      description: 'In the hospitality industry, effective inventory management is critical for reducing waste, controlling costs, and ensuring seamless guest experiences. Discover how Aegis HMS provides real-time tracking, automated alerts, and predictive analytics to streamline your operations.',
      url: '/services/inventory-management',
      datePublished: '2024-05-15',
    },
    {
      id: 2,
      imageSrc: '/images/client3.jpg',
      title: 'Improving Sustainability in the Hospitality Sector: A New Chapter for Environmentally Friendly Approaches',
      description: 'In recent years, the hospitality industry has undergone a green transformation. Learn how Aegis HMS supports eco-friendly initiatives through energy monitoring, waste reduction analytics, and sustainable procurement tools.',
      url: '/services/sustainability-hospitality',
      datePublished: '2024-04-22',
    },
    {
      id: 3,
      imageSrc: '/images/client2.jpg',
      title: 'Redefining Guest Experiences via Aegis HMS: A Transformation of Hospitality',
      description: 'Providing outstanding guest experiences is not an option—it’s a necessity. Explore how Aegis HMS leverages AI-driven personalization, integrated CRM, and real-time feedback to elevate every touchpoint in the guest journey.',
      url: '/services/guest-experience',
      datePublished: '2024-03-10',
    },
  ];

  const cardRefs = useRef([]);

  useEffect(() => {
    cardRefs.current.forEach((cardRef, index) => {
      if (!cardRef) return;
      const triggerElem = cardRef;
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerElem,
          pin: true,
          markers: false,
          start: '-10% top',
          end: '90% top',
          scrub: true,
        },
      });

      if (index === cardRefs.current.length - 1) {
        tl.to(triggerElem, {
          scale: 0.85,
          y: 20 * index,
          duration: 1,
          ease: 'power2.out',
        });
      } else {
        tl.to(triggerElem, {
          filter: 'blur(4px)',
          scale: 0.85,
          y: 80 * index,
          duration: 1,
          ease: 'power2.out',
        }).set(triggerElem, {
          autoAlpha: 0,
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  // Schema.org JSON-LD for Article List
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Aegis Software Services & Insights",
    "description": "Expert articles and service guides on hospitality technology, inventory management, sustainability, and guest experience optimization.",
    "url": "https://aegishms.com/services",
    "itemListElement": cardsData.map((card, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Article",
        "headline": card.title,
        "description": card.description,
        "url": `https://aegishms.com/${card.url}`,
        "datePublished": card.datePublished,
        "image": `https://aegishms.com/${card.imageSrc}`,
        "author": {
          "@type": "Organization",
          "name": "Aegis Software"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Aegis Software",
          "logo": {
            "@type": "ImageObject",
            "url": "https://aegishms.com/images/logo.png"
          }
        }
      }
    }))
  };

  return (
    <GuestLayout>
      {/* SEO Meta Tags */}
      <Head title="Services & Insights | Aegis Software">
        <meta name="description" content="Explore expert guides on hospitality technology, inventory optimization, sustainability, and guest experience powered by Aegis HMS." />
        <meta name="keywords" content="hospitality software, hotel management system, inventory management, sustainable hospitality, guest experience, Aegis HMS, hotel technology" />
        <meta property="og:title" content="Services & Insights | Aegis Software" />
        <meta property="og:description" content="Expert resources to optimize your hospitality operations with Aegis HMS." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://aegishms.com/services" />
        <meta property="og:image" content="https://aegishms.com/images/og-services.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Services & Insights | Aegis Software" />
        <meta name="twitter:description" content="Optimize hospitality operations with expert guides on inventory, sustainability, and guest experience." />
        <meta name="twitter:image" content="https://aegishms.com/images/og-services.jpg" />
        <link rel="canonical" href="https://aegishms.com/services" />
        <html lang="en" />
      </Head>

      {/* Schema.org Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <main>
        {/* Banner Section */}
        <div className="fixed inset-0 -z-10 lg:px-32">
          <div className="absolute top-20 left-20 w-72 h-72 bg-[#005c94]/10 rounded-full mix-blend-multiply filter blur-xl animate-blob" />
          <div className="absolute top-40 right-20 w-72 h-72 bg-[#0EA5E9]/10 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-[#33C3F0]/10 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" />
          <div
            className="absolute inset-0 -z-10"
            style={{
              background: "linear-gradient(109.6deg, rgba(0,92,148,0.05) 11.2%, rgba(14,165,233,0.05) 91.1%)",
            }}
          />
        </div>

        <div
          className="aboutus mt-[70px] bg-[url('/images/half-circle-bg.png')] bg-bottom bg-no-repeat bg-cover flex flex-col justify-center items-center h-[50vh] text-white opacity-80"
          aria-labelledby="page-title"
        >
          <motion.h1
            id="page-title"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-4xl sm:text-6xl font-semibold mb-8 leading-tight"
          >
            Services
          </motion.h1>

          <nav aria-label="Breadcrumb" className="st-breadcrumb flex items-center text-sm font-semibold uppercase bg-black/5 rounded-lg p-3">
            <a href="/" className="text-white hover:text-[#0EA5E9] transition-colors" aria-label="Home">Home</a>
            <span className="mx-2 text-gray-400" aria-hidden="true">/</span>
            <span className="text-gray-300" aria-current="page">Services</span>
          </nav>
        </div>

        <div className="min-h-screen pt-8 pb-16">
          <div
            className="container mx-auto max-w-[1200px] px-2 sm:px-8 pb-[100vh] mt-16"
            role="feed"
            aria-label="Services and insights articles"
          >
            {cardsData.map((card, index) => (
              <article
                key={card.id}
                ref={(el) => (cardRefs.current[index] = el)}
                className="card relative rounded-[20px] overflow-hidden mb-8 shadow-lg"
                itemScope
                itemType="https://schema.org/Article"
              >
                <a 
                  href={card.url} 
                  className="block"
                  aria-label={`Read article: ${card.title}`}
                >
                  <div className="card-image-wrap w-full h-[400px] sm:h-[600px] relative">
                    <img
                      src={card.imageSrc}
                      alt={card.title}
                      className="card-image w-full h-full object-cover"
                      loading="lazy"
                      itemProp="image"
                    />
                    <div
                      className="absolute inset-0"
                      style={{
                        background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.7) 100%)',
                        pointerEvents: 'none',
                      }}
                    />
                    <div className="absolute bottom-8 sm:left-8 px-2 text-white max-w-[80%]">
                      <h2 className="text-xl sm:text-2xl font-bold mb-2" itemProp="headline">
                        {card.title}
                      </h2>
                      <p className="text-md" itemProp="description">
                        {card.description}
                      </p>
                      <meta itemProp="datePublished" content={card.datePublished} />
                      <meta itemProp="url" content={`https://aegishms.com/${card.url}`} />
                    </div>
                  </div>
                </a>
              </article>
            ))}
          </div>
        </div>
      </main>
    </GuestLayout>
  );
};

export default Services;