import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import GuestLayout from '@/Layouts/GuestLayout';
import { ArrowRightIcon } from '@heroicons/react/24/solid';
import { Link } from '@inertiajs/react';
import SEO from '@/Components/SEO';

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

const AegisCore = () => {
  const bannerRef = useRef(null);
  const modulesRef = useRef([]);
  const titleRef = useRef(null);
  const breadcrumbRef = useRef(null);
  const containerRef = useRef(null);

  const siteUrl = 'https://www.aegishms.com';
  const canonicalUrl = `${siteUrl}/aegis-core`;

  // Create refs for each module
  modulesRef.current = [];

  useEffect(() => {
    // Banner animation
    if (bannerRef.current && titleRef.current && breadcrumbRef.current) {
      gsap.fromTo(
        titleRef.current,
        {
          y: 50,
          opacity: 0,
          scale: 0.9
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power3.out"
        }
      );

      gsap.fromTo(
        breadcrumbRef.current,
        {
          y: 30,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: 0.3,
          ease: "power2.out"
        }
      );

      // Background animation
      gsap.fromTo(
        bannerRef.current,
        {
          backgroundPosition: "center 100px"
        },
        {
          backgroundPosition: "center bottom",
          duration: 1.5,
          ease: "power2.out"
        }
      );
    }

    // Module animations with ScrollTrigger
    modulesRef.current.forEach((module, index) => {
      if (!module) return;

      const isEven = index % 2 === 0;
      
      // Animation for each module
      gsap.fromTo(
        module,
        {
          x: isEven ? -100 : 100,
          opacity: 0,
          scale: 0.95
        },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          scrollTrigger: {
            trigger: module,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
            markers: false
          },
          ease: "power3.out",
          delay: index * 0.1
        }
      );

      // Image hover effect
      const image = module.querySelector('img');
      if (image) {
        image.addEventListener('mouseenter', () => {
          gsap.to(image, {
            scale: 1.05,
            duration: 0.4,
            ease: "power2.out"
          });
        });

        image.addEventListener('mouseleave', () => {
          gsap.to(image, {
            scale: 1,
            duration: 0.4,
            ease: "power2.out"
          });
        });
      }

      // Text content animation
      const textContent = module.querySelector('.text-content');
      const moduleImage = module.querySelector('.module-image');
      
      if (textContent && moduleImage) {
        // Stagger animation for text elements
        gsap.fromTo(
          textContent.children,
          {
            y: 30,
            opacity: 0
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.15,
            scrollTrigger: {
              trigger: textContent,
              start: "top 85%",
              toggleActions: "play none none reverse"
            },
            ease: "power2.out"
          }
        );

        // Image parallax effect
        gsap.to(moduleImage, {
          y: -30,
          scrollTrigger: {
            trigger: module,
            start: "top bottom",
            end: "bottom top",
            scrub: 1
          }
        });
      }
    });

    // Container fade in
    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.8,
          delay: 0.5,
          ease: "power2.out"
        }
      );
    }

    // Floating animation for background elements
    gsap.to(".floating-bg", {
      y: 20,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const modules = [
    {
      id: 1,
      name: "Front Office Management",
      title: "Cloud based front office platform",
      description: "This integrated solution provides complete hotel management capabilities including reservations and forecasts for bookings and occupancy trends, guest and hotel information management, comprehensive financial reporting with night audit and revenue analysis, manager and tourism insights for strategic analytics, detailed meal and room occupancy reports, along with receipt generation and forecasted reporting features.",
      image: "/images/Modules/m16.png",
      alt: "Front Office Software Dashboard for hotel management system",
      slug: "/modules/front-office"
    },
    {
      id: 2,
      name: "Housekeeping Management",
      title: "Smart housekeeping management",
      description: "Streamline room status updates, staff assignments, cleaning schedules, and maintenance requests in real-time. Improve guest satisfaction with timely room readiness and automated alerts.",
      image: "/images/Modules/m2.png",
      alt: "Housekeeping Dashboard for hotel management software",
      slug: "/modules/housekeeping"
    },
    {
      id: 3,
      name: "Point of Sale",
      title: "Integrated POS system",
      description: "Manage restaurant, bar, spa, and retail sales seamlessly. Track inventory, generate bills, apply discounts, and integrate directly with guest folios for hassle-free checkout.",
      image: "/images/Modules/m3.png",
      alt: "POS System Interface for hotel point of sale",
      slug: "/modules/point-of-sales"
    },
    {
      id: 4,
      name: "Finance Management",
      title: "Automated financial control",
      description: "Handle invoicing, payroll, tax calculations, ledger management, and financial reporting. Real-time sync with front office and POS for accurate revenue tracking.",
      image: "/images/Modules/m6.png",
      alt: "Finance Dashboard for hotel accounting software",
      slug: "/modules/finance"
    },
    {
      id: 6,
      name: "Inventory Management",
      title: "Material Management Module",
      description: "The Material Management Module of Aegis HMS efficiently manages procurement, inventory, and consumption across departments. It supports both Main Store and Sub Store operations for better control and distribution. With real-time stock tracking, automated reordering, and cost analysis, it minimizes wastage, ensures availability, and enhances operational efficiency and transparency.",
      image: "/images/Modules/m5.png",
      alt: "Channel Manager Interface for hotel inventory system",
      slug: "/modules/inventory"
    },
    {
      id: 7,
      name: "Waiter App",
      title: "Personalized guest journeys",
      description: "Empower staff with a mobile waiter app to take orders, manage tables, send requests to the kitchen or bar in real time, and deliver personalized service. Syncs instantly with POS and guest profiles to enhance responsiveness, reduce errors, and create memorable dining experiences.",
      image: "/images/Modules/m18.png",
      alt: "Guest Relationship Management mobile app",
      slug: "/modules/waiter-app"
    },
    {
      id: 8,
      name: "Aegis Pulse Reporting App",
      title: "Real-time business intelligence",
      description: "Access live dashboards and actionable insights from anywhere. Monitor occupancy, revenue, departmental performance, and guest trends in real time. Customizable reports and alerts empower managers to make faster, data-driven decisions—anytime, anywhere.",
      image: "/images/Modules/aegis_pulse.png",
      alt: "Aegis Pulse Reporting Dashboard for hotel analytics",
      slug: "/modules/aegis-pulse247"
    }
  ];

  const addModuleToRefs = (el) => {
    if (el && !modulesRef.current.includes(el)) {
      modulesRef.current.push(el);
    }
  };

  // Create feature list from modules
  const featureList = modules.map(module => module.name);

  // Software Application Schema
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Aegis Core Modules",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web-Based",
    "description": "Complete hotel management system with integrated modules for front office, housekeeping, POS, finance, inventory management, and real-time reporting",
    "url": canonicalUrl,
    "image": `${siteUrl}/images/Modules/m16.png`,
    "offers": {
      "@type": "Offer",
      "category": "SoftwareAsAService"
    },
    "featureList": featureList,
    "publisher": {
      "@type": "Organization",
      "name": "Aegis HMS",
      "url": siteUrl
    }
  };

  // Breadcrumb schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
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
        "name": "Aegis Core",
        "item": canonicalUrl
      }
    ]
  };

  // Organization schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteUrl}#organization`,
    "name": "Aegis HMS",
    "url": siteUrl,
    "logo": `${siteUrl}/images/logo.png`,
    "sameAs": [
      "https://www.facebook.com/aegishms",
      "https://www.linkedin.com/company/aegishms",
      "https://twitter.com/aegishms"
    ]
  };

  // Combine schemas
  const fullSchema = {
    "@graph": [
      organizationSchema,
      softwareSchema,
      breadcrumbSchema
    ]
  };

  return (
    <>
      <SEO 
        title="Aegis Core Modules | Complete Hotel Management System"
        description="Explore Aegis HMS core modules including Front Office, Housekeeping, POS, Finance, Inventory, Waiter App, and Aegis Pulse Reporting for complete hotel management."
        keywords="hotel management system, hotel software, front office software, housekeeping management, hotel POS, inventory management, hotel reporting, Aegis HMS, Aegis Core"
        image={`${siteUrl}/images/Modules/m16.png`}
        canonical={canonicalUrl}
        schema={fullSchema}
      />
   <GuestLayout>
        <div>
          {/* Banner Section */}
          <div className="fixed inset-0 -z-10 lg:px-32">
            <div
              className="absolute inset-0 -z-10"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(48, 122, 167, 0.2) 0%, transparent 100% )",
              }}
            />
          </div>
          <div
            ref={bannerRef}
            className="mt-[68px] bg-[url('/images/half-circle-bg.png')] bg-bottom bg-no-repeat bg-cover flex flex-col justify-center items-center h-[50vh] text-white "
          >
            {/* Main H1 for SEO */}
            <h1 ref={titleRef} className="text-3xl sm:text-5xl font-semibold mb-8 leading-tight bg-clip-text text-transparent bg-white pb-2">
              Aegis Core 
            </h1>
            {/* Breadcrumb UI */}
            <ul ref={breadcrumbRef} className="st-breadcrumb flex items-center text-sm font-semibold uppercase bg-black/5 rounded-lg p-3" aria-label="Breadcrumb">
              <li>
                <Link href="/" className="text-white hover:text-white transition-colors">Home</Link>
              </li>
              <li className="mx-2 text-gray-400">/</li>
              <li>
                <Link href="/products" className="text-white hover:text-white transition-colors">Products</Link>
              </li>
              <li className="mx-2 text-gray-400">/</li>
              <li className="text-gray-300">Aegis Core</li>
            </ul>
          </div>
        </div>

        <div 
          ref={containerRef}
          className="w-full overflow-hidden py-8 sm:py-12 lg:py-16"
        >
          {modules.map((module, index) => (
            <div
              key={module.id}
              ref={addModuleToRefs}
              className={`w-full py-8 sm:py-12 lg:py-16 ${
                index % 2 === 0 
                  ? 'lg:bg-gradient-to-bl from-blue-50/30 to-transparent' 
                  : 'lg:bg-gradient-to-br from-indigo-50/30 to-transparent'
              }`}
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className={`
                  flex flex-col 
                  ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} 
                  justify-between items-center gap-6 sm:gap-8 lg:gap-12
                `}>
                  
                  {/* Text Content */}
                  <div className="w-full lg:w-1/2 order-2 lg:order-1 text-content">
                    <div className="mb-4 sm:mb-6">
                      <span className="inline-block text-[#307aa7] text-sm sm:text-base md:text-lg font-semibold border-2 border-[#307aa7] bg-white rounded-lg px-3 sm:px-4 py-1 sm:py-2 tracking-wide whitespace-nowrap overflow-hidden text-ellipsis max-w-full transform transition-transform duration-300 hover:scale-105">
                        {module.name}
                      </span>
                    </div>

                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#307aa7] mb-4 sm:mb-6 leading-tight">
                      {module.title}
                    </h2>

                    <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
                      {module.description}
                    </p>

                    <Link 
                      href={module.slug} 
                      className="inline-flex items-center text-[#307aa7] font-medium group transition-all duration-300 transform hover:translate-x-2 active:scale-95 w-fit"
                      aria-label={`Explore more about ${module.name}`}
                    >
                      <span className="mr-2">Explore More</span>
                      <ArrowRightIcon className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1 flex-shrink-0" />
                    </Link>
                  </div>

                  {/* Image */}
                  <div className="w-full lg:w-1/2 flex justify-center order-1 lg:order-2 mb-6 sm:mb-8 lg:mb-0">
                    <div className="relative w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl h-full module-image">
                      <div className={`
                        rounded-xl sm:rounded-2xl overflow-hidden 
                        ${module.id === 12 ? 'shadow-none' : 'shadow-none '} 
                        group transition-all duration-300 hover:shadow-none
                      `}>
                        <img
                          src={module.image}
                          alt={module.alt}
                          className={`w-full h-full ${
                            module.id === 12 ? 'object-contain' : 'object-cover'
                          } transition-transform duration-500 ease-out`}
                          loading="lazy"
                          onError={(e) => {
                            e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtc2l6ZT0iMTgiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIwLjM1ZW0iIGZpbGw9IiM5Y2FiYjIiPkltYWdlIE5vdCBGb3VuZDwvdGV4dD48L3N2Zz4=';
                          }}
                        />
                        <div className="absolute inset-0 transition-opacity duration-300"></div>
                      </div>
                      
                      {/* Decorative elements */}
                      {index % 2 === 0 ? (
                        <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-100 rounded-full -z-10 opacity-60 blur-xl"></div>
                      ) : (
                        <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-indigo-100 rounded-full -z-10 opacity-60 blur-xl"></div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </GuestLayout>
    </>
  );
};

export default AegisCore;