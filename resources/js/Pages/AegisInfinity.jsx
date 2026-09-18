import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import GuestLayout from '@/Layouts/GuestLayout';
import { ArrowRightIcon } from '@heroicons/react/24/solid';
import { Link } from '@inertiajs/react';
import { BsCircleFill } from 'react-icons/bs';
import SEO from '@/Components/SEO';

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

const AegisInfinity = () => {
  const bannerRef = useRef(null);
  const titleRef = useRef(null);
  const breadcrumbRef = useRef(null);
  const modulesRef = useRef([]);
  const featureSectionRef = useRef(null);
  const featureImageRef = useRef(null);
  const featureListRef = useRef(null);

  const siteUrl = 'https://www.aegishms.com';
  const canonicalUrl = `${siteUrl}/aegis-infinity`;
  const ogImageUrl = `${siteUrl}/images/Modules/m1.png`;

  // Initialize module refs array
  modulesRef.current = [];

  useEffect(() => {
    // Banner animations
    const bannerAnimations = () => {
      if (titleRef.current) {
        gsap.fromTo(titleRef.current,
          {
            y: 60,
            opacity: 0,
            scale: 0.9,
            rotationX: 10
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            rotationX: 0,
            duration: 1.2,
            ease: "power3.out",
            delay: 0.3
          }
        );
      }

      if (breadcrumbRef.current) {
        gsap.fromTo(breadcrumbRef.current,
          {
            y: 40,
            opacity: 0,
            scale: 0.95
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.9,
            ease: "back.out(1.7)",
            delay: 0.6
          }
        );
      }

      if (bannerRef.current) {
        // Parallax effect for banner background
        gsap.to(bannerRef.current, {
          backgroundPositionY: "40%",
          ease: "none",
          scrollTrigger: {
            trigger: bannerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1.5
          }
        });
      }
    };

    // Module animations with staggered reveal
    const moduleAnimations = () => {
      modulesRef.current.forEach((module, index) => {
        if (!module) return;

        const isEven = index % 2 === 0;
        
        // Create scroll trigger for each module
        ScrollTrigger.create({
          trigger: module,
          start: "top 75%",
          end: "bottom 25%",
          toggleActions: "play none none reverse",
          onEnter: () => {
            // Animate the entire module container
            gsap.fromTo(module,
              {
                x: isEven ? -100 : 100,
                opacity: 0,
                scale: 0.95,
                rotationY: isEven ? -15 : 15
              },
              {
                x: 0,
                opacity: 1,
                scale: 1,
                rotationY: 0,
                duration: 0.9,
                ease: "power3.out",
                delay: index * 0.1
              }
            );

            // Animate image with parallax
            const image = module.querySelector('img');
            if (image) {
              gsap.fromTo(image,
                {
                  scale: 1.3,
                  opacity: 0,
                  rotation: isEven ? -5 : 5
                },
                {
                  scale: 1,
                  opacity: 1,
                  rotation: 0,
                  duration: 1,
                  ease: "power2.out",
                  delay: index * 0.1 + 0.2
                }
              );

              // Image hover effect
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

              // Image parallax on scroll
              gsap.to(image, {
                y: -40,
                ease: "none",
                scrollTrigger: {
                  trigger: image.parentElement,
                  start: "top bottom",
                  end: "bottom top",
                  scrub: 1
                }
              });
            }

            // Animate text content
            const textContent = module.querySelector('.text-content');
            if (textContent) {
              gsap.fromTo(textContent.children,
                {
                  y: 50,
                  opacity: 0,
                  scale: 0.98
                },
                {
                  y: 0,
                  opacity: 1,
                  scale: 1,
                  duration: 0.7,
                  stagger: 0.15,
                  ease: "power2.out",
                  delay: index * 0.1 + 0.3
                }
              );
            }
          }
        });

        // Module hover effect
        module.addEventListener('mouseenter', () => {
          gsap.to(module, {
            backgroundColor: index % 2 === 0 ? 'rgba(48, 122, 167, 0.03)' : 'rgba(14, 165, 233, 0.03)',
            duration: 0.3,
            ease: "power2.out"
          });
        });

        module.addEventListener('mouseleave', () => {
          gsap.to(module, {
            backgroundColor: 'transparent',
            duration: 0.3,
            ease: "power2.out"
          });
        });
      });
    };

    // Additional features section animation
    const additionalFeaturesAnimation = () => {
      if (featureSectionRef.current) {
        // Section title animation
        const title = featureSectionRef.current.querySelector('h2');
        if (title) {
          gsap.fromTo(title,
            {
              x: -50,
              opacity: 0,
              scale: 0.95
            },
            {
              x: 0,
              opacity: 1,
              scale: 1,
              duration: 0.8,
              ease: "power3.out",
              scrollTrigger: {
                trigger: title,
                start: "top 80%",
                toggleActions: "play none none reverse"
              }
            }
          );
        }

        // Gradient title animation
        const gradientTitle = featureSectionRef.current.querySelector('#additional-features-heading');
        if (gradientTitle) {
          gsap.fromTo(gradientTitle,
            {
              y: 30,
              opacity: 0,
              backgroundPosition: "0% 0%"
            },
            {
              y: 0,
              opacity: 1,
              backgroundPosition: "100% 0%",
              duration: 1.2,
              ease: "power2.out",
              scrollTrigger: {
                trigger: gradientTitle,
                start: "top 85%",
                toggleActions: "play none none reverse"
              }
            }
          );
        }

        // Feature list animation
        if (featureListRef.current) {
          gsap.fromTo(featureListRef.current.children,
            {
              x: -30,
              opacity: 0,
              scale: 0.95
            },
            {
              x: 0,
              opacity: 1,
              scale: 1,
              duration: 0.6,
              stagger: 0.1,
              ease: "back.out(1.7)",
              scrollTrigger: {
                trigger: featureListRef.current,
                start: "top 90%",
                toggleActions: "play none none reverse"
              }
            }
          );

          // Animate the circle icons
          const icons = featureListRef.current.querySelectorAll('svg');
          icons.forEach((icon, index) => {
            gsap.fromTo(icon,
              {
                scale: 0,
                rotation: 180
              },
              {
                scale: 1,
                rotation: 0,
                duration: 0.5,
                ease: "back.out(1.7)",
                delay: index * 0.1,
                scrollTrigger: {
                  trigger: icon,
                  start: "top 90%",
                  toggleActions: "play none none reverse"
                }
              }
            );
          });
        }

        // Feature image animation
        if (featureImageRef.current) {
          gsap.fromTo(featureImageRef.current,
            {
              x: 100,
              opacity: 0,
              scale: 1.1,
              rotation: 5
            },
            {
              x: 0,
              opacity: 1,
              scale: 1,
              rotation: 0,
              duration: 1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: featureImageRef.current,
                start: "top 75%",
                toggleActions: "play none none reverse"
              }
            }
          );

          // Image hover effect
          featureImageRef.current.addEventListener('mouseenter', () => {
            gsap.to(featureImageRef.current, {
              scale: 1.03,
              duration: 0.4,
              ease: "power2.out"
            });
          });

          featureImageRef.current.addEventListener('mouseleave', () => {
            gsap.to(featureImageRef.current, {
              scale: 1,
              duration: 0.4,
              ease: "power2.out"
            });
          });

          // Image parallax
          gsap.to(featureImageRef.current, {
            y: -50,
            ease: "none",
            scrollTrigger: {
              trigger: featureImageRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 1
            }
          });
        }
      }
    };

    // Background gradient animation
    const backgroundAnimation = () => {
      const gradientBackground = document.querySelector('.gradient-background');
      if (gradientBackground) {
        gsap.to(gradientBackground, {
          background: "linear-gradient(to bottom, rgba(48, 122, 167, 0.3) 0%, rgba(48, 122, 167, 0.1) 50%, transparent 100%)",
          duration: 3,
          ease: "power2.inOut",
          repeat: -1,
          yoyo: true
        });
      }
    };

    // Initialize all animations
    const initAnimations = () => {
      bannerAnimations();
      moduleAnimations();
      additionalFeaturesAnimation();
      backgroundAnimation();
    };

    // Handle responsive animations
    const handleResponsive = () => {
      const mm = gsap.matchMedia();
      
      mm.add("(max-width: 768px)", () => {
        // Mobile adjustments
        gsap.defaults({
          duration: 0.6,
          stagger: 0.08
        });
        
        // Reduce parallax intensity on mobile
        ScrollTrigger.getAll().forEach(trigger => {
          if (trigger.vars.scrub) {
            trigger.vars.scrub = 0.5;
          }
        });
      });

      mm.add("(min-width: 769px)", () => {
        // Desktop settings
        gsap.defaults({
          duration: 0.9,
          stagger: 0.15
        });
      });

      return mm;
    };

    const mm = handleResponsive();
    initAnimations();

    // Cleanup
    return () => {
      mm.revert();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  // Add module to refs array
  const addModuleRef = (el) => {
    if (el && !modulesRef.current.includes(el)) {
      modulesRef.current.push(el);
    }
  };

  const modules = [
    {
      id: 1,
      name: "Front Office Management",
      title: "Cloud based front office platform",
      description: "This integrated solution provides complete hotel management capabilities including reservations and forecasts for bookings and occupancy trends, guest and hotel information management, comprehensive financial reporting with night audit and revenue analysis, manager and tourism insights for strategic analytics, detailed meal and room occupancy reports, along with receipt generation and forecasted reporting features.",
      image: "/images/Modules/m16.png",
      alt: "Front Office Software Dashboard - Aegis HMS Hotel Management System",
      slug: "/modules/front-office"
    },
    {
      id: 2,
      name: "Housekeeping Management",
      title: "Smart housekeeping management",
      description: "Streamline room status updates, staff assignments, cleaning schedules, and maintenance requests in real-time. Improve guest satisfaction with timely room readiness and automated alerts.",
      image: "/images/Modules/m2.png",
      alt: "Housekeeping Dashboard - Aegis HMS Hotel Management Software",
      slug: "/modules/housekeeping"
    },
    {
      id: 3,
      name: "Point of Sale",
      title: "Integrated POS system",
      description: "Manage restaurant, bar, spa, and retail sales seamlessly. Track inventory, generate bills, apply discounts, and integrate directly with guest folios for hassle-free checkout.",
      image: "/images/Modules/m3.png",
      alt: "POS System Interface - Aegis HMS Hotel POS Software",
      slug: "/modules/point-of-sales"
    },
    {
      id: 4,
      name: "Finance Management",
      title: "Automated financial control",
      description: "Handle invoicing, payroll, tax calculations, ledger management, and financial reporting. Real-time sync with front office and POS for accurate revenue tracking.",
      image: "/images/Modules/m6.png",
      alt: "Finance Dashboard - Aegis HMS Hotel Accounting Software",
      slug: "/modules/finance"
    },
    {
      id: 5,
      name: "Banquet Management",
      title: "Seamless online booking system",
      description: "The Banquet Module of Aegis HMS simplifies end-to-end event management with tools for scheduling, booking, and billing. It includes detailed menu costing for precise budgeting and profitability analysis. With real-time availability, resource tracking, and customizable reports, it ensures efficient coordination, optimized revenue, and flawless execution of banquets and conferences.",
      image: "/images/Modules/m4.png",
      alt: "Online Booking Dashboard - Aegis HMS Banquet Management Software",
      slug: "/modules/banquet"
    },
    {
      id: 6,
      name: "Inventory Management",
      title: "Material Management Module",
      description: "The Material Management Module of Aegis HMS efficiently manages procurement, inventory, and consumption across departments. It supports both Main Store and Sub Store operations for better control and distribution. With real-time stock tracking, automated reordering, and cost analysis, it minimizes wastage, ensures availability, and enhances operational efficiency and transparency.",
      image: "/images/Modules/m5.png",
      alt: "Inventory Management Dashboard - Aegis HMS Hotel Inventory Software",
      slug: "/modules/inventory"
    },
    {
      id: 7,
      name: "Waiter App",
      title: "Personalized guest journeys",
      description: "Empower staff with a mobile waiter app to take orders, manage tables, send requests to the kitchen or bar in real time, and deliver personalized service. Syncs instantly with POS and guest profiles to enhance responsiveness, reduce errors, and create memorable dining experiences.",
      image: "/images/Modules/m18.png",
      alt: "Mobile Waiter App - Aegis HMS Restaurant Management Software",
      slug: "/modules/waiter-app"
    },
    {
      id: 8,
      name: "F & B Costing",
      title: "AI-powered pricing intelligence",
      description: "The Food & Costing Module of Aegis HMS offers real-time costing, recipe-based costing, and consumption-based costing for complete cost control. It monitors ingredient usage, standardizes recipes, and tracks actual consumption against sales. This ensures accurate pricing, minimizes wastage, and enhances profitability while maintaining consistent food quality and operational efficiency.",
      image: "/images/Modules/m7.png",
      alt: "Food Costing Software - Aegis HMS Restaurant Cost Control",
      slug: "/modules/costing"
    },
    {
      id: 9,
      name: "Payroll Management",
      title: "Personalized guest journeys",
      description: "The Payroll Module of Aegis HMS automates salary processing with precision and compliance. It integrates attendance, shifts, and leave management for accurate earnings and deductions. With auto-linking to the Finance Module, it ensures seamless posting of payroll expenses, real-time reporting, statutory compliance, and enhanced efficiency in overall HR and financial operations.",
      image: "/images/Modules/m8.png",
      alt: "Payroll Management System - Aegis HMS Hotel HR Software",
      slug: "/modules/payroll"
    },
    {
      id: 10,
      name: "Aegis Pulse247",
      title: "Connect all your tools in one place",
      description: "Seamlessly integrate with payment gateways, door locks, accounting software, WhatsApp, Google Calendar, and more. Build a unified tech stack without manual data entry.",
      image: "/images/Modules/m12.png",
      alt: "System Integration Dashboard - Aegis HMS Hotel Software Integration",
      slug: "/modules/aegis-pulse247"
    }
  ];

  // Get feature list from modules
  const featureList = modules.map(module => module.name);

  // Software Application Schema
  const softwareSchema = {
    "@type": "SoftwareApplication",
    "name": "Aegis Infinity Hotel Management System",
    "description": "Complete hotel management system software with integrated modules for hospitality operations",
    "url": canonicalUrl,
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web-Based, Windows, macOS, Linux",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "150"
    },
    "featureList": featureList,
    "publisher": {
      "@type": "Organization",
      "name": "Aegis HMS",
      "url": siteUrl
    }
  };

  // Organization Schema
  const organizationSchema = {
    "@type": "Organization",
    "@id": `${siteUrl}#organization`,
    "name": "Aegis Software",
    "url": siteUrl,
    "logo": `${siteUrl}/images/logo.png`,
    "sameAs": [
      "https://www.facebook.com/aegishms",
      "https://www.linkedin.com/company/aegishms",
      "https://twitter.com/aegishms"
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
        "name": "Aegis Infinity",
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
      softwareSchema,
      breadcrumbSchema
    ]
  };

  return (
    <GuestLayout>
      <SEO 
        title="Aegis Infinity | Complete Hotel Management System Software"
        description="Aegis Infinity is a comprehensive hotel management system software with front office, housekeeping, POS, inventory, banquet, and payroll modules for modern hotels."
        keywords="hotel management software, hotel management system, hotel software, PMS software, hospitality software, hotel POS, inventory management, banquet management, payroll software, Aegis HMS, Aegis Infinity"
        image={ogImageUrl}
        canonical={canonicalUrl}
        schema={fullSchema}
      />

      {/* Main Content */}
      <div>
        {/* Banner Section */}
        <div className="fixed inset-0 -z-10 lg:px-32 gradient-background">
          <div
            className="absolute inset-0 -z-10"
            style={{
              background:
                "linear-gradient(to bottom, rgba(48, 122, 167, 0.2) 0%, transparent 100% )",
            }}
          />
        </div>
        
        {/* H1 Tag for SEO - One per page */}
        <header 
          className="mt-[68px] bg-[url('/images/half-circle-bg.png')] bg-bottom bg-no-repeat bg-cover flex flex-col justify-center items-center h-[50vh] text-white"
          ref={bannerRef}
          role="banner"
        >
          <h1 ref={titleRef} className="text-3xl sm:text-5xl font-semibold mb-8 leading-tight bg-clip-text text-transparent bg-white pb-2">
            Aegis Infinity
          </h1>
          
          {/* Breadcrumb Navigation for SEO */}
          <nav aria-label="Breadcrumb" ref={breadcrumbRef}>
            <ol className="st-breadcrumb flex items-center text-sm font-semibold uppercase bg-black/5 rounded-lg p-3">
              <li>
                <Link href="/" className="text-white hover:text-white transition-colors">Home</Link>
              </li>
              <li className="mx-2 text-gray-400">/</li>
              <li className="text-gray-300" aria-current="page">Aegis Infinity</li>
            </ol>
          </nav>
        </header>

        {/* Main Content Area with semantic HTML */}
        <main id="main-content" role="main">
          {/* Modules Section */}
          <section aria-labelledby="modules-heading" className="w-full overflow-hidden">
            <h2 id="modules-heading" className="sr-only">Aegis Infinity Hotel Management Modules</h2>
            
            {modules.map((module, index) => (
              <article
                key={module.id}
                ref={addModuleRef}
                className={`w-full py-8 ${
                  index % 2 === 0 ? 'lg:bg-gradient-to-bl' : 'lg:bg-gradient-to-br'
                }`}
              >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                  <div
                    className={`
                    flex flex-col 
                    ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} 
                    justify-between items-center gap-6 sm:gap-8 lg:gap-12
                  `}
                  >
                    {/* Text Content */}
                    <div className="w-full lg:w-1/2 order-2 lg:order-1 text-content">
                      <h3 className="text-xl uppercase sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#307aa7] mb-4 sm:mb-6 leading-tight">
                        {module.name}
                      </h3>
                      <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
                        {module.description}
                      </p>
                      <Link 
                        href={module.slug}
                        className="inline-flex items-center text-[#307aa7] hover:text-[#0EA5E9] font-semibold transition-colors"
                        aria-label={`Learn more about ${module.name}`}
                      >
                        Learn More <ArrowRightIcon className="ml-2 h-5 w-5" />
                      </Link>
                    </div>

                    {/* Image with proper alt text */}
                    <div className="w-full lg:w-1/2 flex justify-center order-1 lg:order-2 mb-6 sm:mb-8 lg:mb-0">
                      <div className="relative w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-full">
                        <div
                          className={`rounded-xl ${
                            module.id === 12 ? 'shadow-none' : 'shadow-none'
                          } overflow-hidden group transition-all duration-300`}
                        >
                          <img
                            src={module.image}
                            alt={module.alt}
                            className={`w-[80%] mx-auto h-full ${
                              module.id === 12 ? 'object-contain' : 'object-cover'
                            }`}
                            loading="lazy"
                            onError={(e) => {
                              e.target.src =
                                'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtc2l6ZT0iMTgiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIwLjM1ZW0iIGZpbGw9IiM5Y2FiYjIiPkltYWdlIE5vdCBGb3VuZDwvdGV4dD48L3N2Zz4=';
                              e.target.alt = "Image placeholder for Aegis HMS module";
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </section>

          {/* Feature section */}
          <section
            ref={featureSectionRef}
            className="feature-section relative bg-white py-10 sm:py-16 overflow-hidden lg:px-32"
            aria-labelledby="additional-features-heading"
          >
            <div className="container mx-auto">
              <div className="flex flex-col md:flex-row items-center gap-16">
                <div className="py-10 text-start">
                  <div className="relative inline-block ps-4">
                    <h3 className="text-lg uppercase text-[#231F20]/80 mb-6 relative z-10">
                      Additional Features
                    </h3>
                  </div>
                  <h2 id="additional-features-heading" className="text-2xl sm:text-4xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#005c94] to-[#0EA5E9] mb-8 font-[600]">
                    Programs For Modern Hoteliers
                  </h2>
                  <ul ref={featureListRef} className="grid lg:grid-cols-2 gap-4 text-md text-[#231F20]/80">
                    {[
                      "Wifi Integration",
                      "Channel Manager & Booking Engine Integration",
                      "Telephone Integration",
                      "Passport Scanner Interface",
                      "Waiter App",
                      "Mobile Check-in/Check-out",
                      "Digital Key Management",
                      "Guest Messaging System",
                      "Revenue Management Tools",
                      "Analytics Dashboard"
                    ].map((item, index) => (
                      <li key={index} className="flex items-center">
                        <BsCircleFill className="mr-3 text-[#005C94]" size={8} aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="w-full md:w-1/2">
                  <img
                    ref={featureImageRef}
                    className="w-full h-auto max-h-[400px] md:h-[400px] object-contain"
                    src="/images/Modules/m1.png"
                    alt="Aegis Infinity Hotel Management System Dashboard with integrated programs for modern hoteliers"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* SEO Content Section - Added for better keyword distribution */}
          <section className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Aegis Infinity Hotel Management Software?</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 mb-4">
                  Aegis Infinity is a comprehensive <strong>hotel management system</strong> designed for modern hospitality businesses. Our <strong>hotel software</strong> integrates all essential operations including front office, housekeeping, point of sale, inventory management, and banquet operations into one seamless platform.
                </p>
                <p className="text-gray-700 mb-4">
                  As a leading <strong>PMS software</strong> solution, Aegis Infinity helps hoteliers streamline operations, increase revenue, and enhance guest satisfaction. Our cloud-based <strong>hospitality software</strong> is scalable, secure, and accessible from anywhere, making it the perfect choice for hotels of all sizes.
                </p>
                <p className="text-gray-700">
                  With features like real-time reporting, integrated <strong>hotel POS</strong> systems, automated <strong>inventory management</strong>, and comprehensive <strong>banquet management</strong> tools, Aegis Infinity provides everything you need to run your hotel efficiently and profitably.
                </p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </GuestLayout>
  );
};

export default AegisInfinity;