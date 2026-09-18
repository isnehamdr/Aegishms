import React, { useEffect, useRef } from 'react';
import { Head } from '@inertiajs/react'; // Use Inertia's Head component
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import GuestLayout from '@/Layouts/GuestLayout';
import { ArrowRightIcon } from '@heroicons/react/24/solid';
import { Link } from '@inertiajs/react';
import SEO from '@/Components/SEO';

import { BsCircleFill } from 'react-icons/bs';

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

const AegisElite = () => {
  const bannerRef = useRef(null);
  const titleRef = useRef(null);
  const breadcrumbRef = useRef(null);
  const modulesRef = useRef([]);
  const featureSectionRef = useRef(null);
  const featureListRef = useRef(null);
  const featureImageRef = useRef(null);

  
  const siteUrl = 'https://www.aegishms.com';
  const canonicalUrl = `${siteUrl}/aegis-core`;

  // Initialize module refs array
  modulesRef.current = [];

  useEffect(() => {
    // Optimize performance
    gsap.config({
      nullTargetWarn: false,
      force3D: true
    });

    // Banner animations - SMOOTH LIKE CORE
    const bannerAnimations = () => {
      if (titleRef.current) {
        gsap.fromTo(titleRef.current,
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
      }

      if (breadcrumbRef.current) {
        gsap.fromTo(breadcrumbRef.current,
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
      }

      if (bannerRef.current) {
        gsap.fromTo(bannerRef.current,
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
    };

    // Module animations - SMOOTH LIKE CORE
    const moduleAnimations = () => {
      modulesRef.current.forEach((module, index) => {
        if (!module) return;

        const isEven = index % 2 === 0;
        
        // Set initial state
        gsap.set(module, {
          x: isEven ? -80 : 80,
          opacity: 0,
          scale: 0.95
        });

        // Smooth scroll trigger
        ScrollTrigger.create({
          trigger: module,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
          onEnter: () => {
            // Module container animation
            gsap.to(module, {
              x: 0,
              opacity: 1,
              scale: 1,
              duration: 0.8,
              ease: "power3.out",
              delay: index * 0.1
            });

            // Image animation
            const image = module.querySelector('img');
            if (image) {
              gsap.fromTo(image,
                {
                  scale: 1.1,
                  opacity: 0
                },
                {
                  scale: 1,
                  opacity: 1,
                  duration: 0.6,
                  ease: "power2.out",
                  delay: index * 0.1 + 0.2
                }
              );

              // Simple hover effect
              image.addEventListener('mouseenter', () => {
                gsap.to(image, {
                  scale: 1.05,
                  duration: 0.3,
                  ease: "power2.out"
                });
              });

              image.addEventListener('mouseleave', () => {
                gsap.to(image, {
                  scale: 1,
                  duration: 0.3,
                  ease: "power2.out"
                });
              });

              // Image parallax on scroll
              gsap.to(image, {
                y: -30,
                ease: "none",
                scrollTrigger: {
                  trigger: image.parentElement,
                  start: "top bottom",
                  end: "bottom top",
                  scrub: 1
                }
              });
            }

            // Text content animation
            const textContent = module.querySelector('.text-content');
            if (textContent) {
              gsap.fromTo(textContent.children,
                {
                  y: 30,
                  opacity: 0
                },
                {
                  y: 0,
                  opacity: 1,
                  duration: 0.6,
                  stagger: 0.15,
                  ease: "power2.out"
                }
              );
            }
          },
          onLeaveBack: () => {
            gsap.to(module, {
              x: isEven ? -80 : 80,
              opacity: 0,
              scale: 0.95,
              duration: 0.3,
              ease: "power2.in"
            });
          }
        });

        // Module hover effect
        module.addEventListener('mouseenter', () => {
          gsap.to(module, {
            scale: 1.01,
            duration: 0.3,
            ease: "power2.out"
          });
        });

        module.addEventListener('mouseleave', () => {
          gsap.to(module, {
            scale: 1,
            duration: 0.3,
            ease: "power2.out"
          });
        });
      });
    };

    // Additional features section animation - SMOOTH LIKE CORE
    const additionalFeaturesAnimation = () => {
      if (featureSectionRef.current) {
        // Section title animation
        const title = featureSectionRef.current.querySelector('h2.text-lg.uppercase');
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
              opacity: 0
            },
            {
              y: 0,
              opacity: 1,
              duration: 0.9,
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
              x: 50,
              opacity: 0,
              scale: 1.1
            },
            {
              x: 0,
              opacity: 1,
              scale: 1,
              duration: 0.9,
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
        }
      }
    };

    // Title effect animation
    const titleEffectAnimation = () => {
      const titleEffect = document.querySelector('.title-effect');
      if (titleEffect) {
        const bars = titleEffect.querySelectorAll('div');
        
        // Reset animation
        gsap.set(bars, {
          scale: 0,
          opacity: 0.2
        });

        // Animate each bar sequentially
        bars.forEach((bar, index) => {
          gsap.to(bar, {
            scale: 1,
            opacity: 0.6,
            duration: 0.5,
            delay: index * 0.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: titleEffect,
              start: "top 80%",
              toggleActions: "play none none reverse"
            }
          });
        });
      }
    };

    // Initialize all animations
    const initAnimations = () => {
      bannerAnimations();
      moduleAnimations();
      additionalFeaturesAnimation();
      titleEffectAnimation();
    };

    // Handle responsive animations
    const handleResponsive = () => {
      const mm = gsap.matchMedia();
      
      mm.add("(max-width: 768px)", () => {
        // Mobile adjustments
        gsap.defaults({
          duration: 0.5,
          stagger: 0.05
        });
      });

      mm.add("(min-width: 769px)", () => {
        // Desktop settings
        gsap.defaults({
          duration: 0.8,
          stagger: 0.15
        });
      });

      return mm;
    };

    const mm = handleResponsive();
    
    // Use requestAnimationFrame for smoother initialization
    requestAnimationFrame(() => {
      initAnimations();
    });

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
      alt: "Front Office Software Dashboard",
      slug: "/modules/front-office"
    },
    {
      id: 2,
      name: "Housekeeping Management",
      title: "Smart housekeeping management",
      description: "Streamline room status updates, staff assignments, cleaning schedules, and maintenance requests in real-time. Improve guest satisfaction with timely room readiness and automated alerts.",
      image: "/images/Modules/m2.png",
      alt: "Housekeeping Dashboard",
      slug: "/modules/housekeeping"
    },
    {
      id: 3,
      name: "Point of Sale",
      title: "Integrated POS system",
      description: "Manage restaurant, bar, spa, and retail sales seamlessly. Track inventory, generate bills, apply discounts, and integrate directly with guest folios for hassle-free checkout.",
      image: "/images/Modules/m3.png",
      alt: "POS System Interface",
      slug: "/modules/point-of-sales"
    },
    {
      id: 4,
      name: "Finance Management",
      title: "Automated financial control",
      description: "Handle invoicing, payroll, tax calculations, ledger management, and financial reporting. Real-time sync with front office and POS for accurate revenue tracking.",
      image: "/images/Modules/m6.png",
      alt: "Finance Dashboard",
      slug: "/modules/finance"
    },
    {
      id: 5,
      name: "Banquet Management",
      title: "Seamless online booking system",
      description: "The Banquet Module of Aegis HMS simplifies end-to-end event management with tools for scheduling, booking, and billing. It includes detailed menu costing for precise budgeting and profitability analysis. With real-time availability, resource tracking, and customizable reports, it ensures efficient coordination, optimized revenue, and flawless execution of banquets and conferences.",
      image: "/images/Modules/m4.png",
      alt: "Online Booking Dashboard",
      slug: "/modules/banquet"
    },
    {
      id: 6,
      name: "Inventory Management",
      title: "Material Management Module",
      description: "The Material Management Module of Aegis HMS efficiently manages procurement, inventory, and consumption across departments. It supports both Main Store and Sub Store operations for better control and distribution. With real-time stock tracking, automated reordering, and cost analysis, it minimizes wastage, ensures availability, and enhances operational efficiency and transparency.",
      image: "/images/Modules/m5.png",
      alt: "Channel Manager Interface",
      slug: "/modules/inventory"
    },
    {
      id: 7,
      name: "F & B Costing Management",
      title: "AI-powered pricing intelligence",
      description: "The Food & Costing Module of Aegis HMS offers real-time costing, recipe-based costing, and consumption-based costing for complete cost control. It monitors ingredient usage, standardizes recipes, and tracks actual consumption against sales. This ensures accurate pricing, minimizes wastage, and enhances profitability while maintaining consistent food quality and operational efficiency.",
      image: "/images/Modules/m7.png",
      alt: "Revenue Analytics Dashboard",
      slug: "/modules/costing"
    },
    {
      id: 8,
      name: "Payroll Management",
      title: "Personalized guest journeys",
      description: "The Payroll Module of Aegis HMS automates salary processing with precision and compliance. It integrates attendance, shifts, and leave management for accurate earnings and deductions. With auto-linking to the Finance Module, it ensures seamless posting of payroll expenses, real-time reporting, statutory compliance, and enhanced efficiency in overall HR and financial operations.",
      image: "/images/Modules/m8.png",
      alt: "Guest Relationship Management",
      slug: "/modules/payroll"
    },
    {
      id: 9,
      name: "Foreign Encashment Receipt",
      title: "Efficient inventory management",
      description: "The Foreign Exchange Encashment Receipt (FEER) feature in Aegis HMS manages foreign currency transactions efficiently, ensuring accurate conversion, compliance with regulations, automated receipt generation, and seamless integration with the hotel's finance system.",
      image: "/images/Modules/m9.png",
      alt: "Inventory Management System",
      slug: "/modules/foreign-exchange-encashment"
    },
    {
      id: 10,
      name: "Sales & Marketing Module",
      title: "Real-time operational insights",
      description: "The Sales & Marketing Module of Aegis HMS manages leads, campaigns, and corporate client interactions. It includes daily sales call tracking, inquiry follow-ups, and conversion monitoring. With CRM integration, real-time reporting, and revenue analysis, it boosts marketing efficiency, strengthens customer relationships, and drives informed, data-driven business growth.",
      image: "/images/Modules/m10.png",
      alt: "Business Intelligence Dashboard",
      slug: "/modules/sales-marketing"
    },
    {
      id: 11,
      name: "Fixed Assets Management",
      title: "Manage your hotel from anywhere",
      description: "The Fixed Assets Module of Aegis HMS manages asset acquisition, depreciation, maintenance, and disposal. It ensures accurate valuation, compliance, and reporting, providing real-time tracking and optimized utilization of all organizational assets.",
      image: "/images/Modules/m11.png",
      alt: "Mobile Hotel Management App",
      slug: "/modules/fixed-assets-module"
    },
    {
      id: 12,
      name: "Aegis Pulse247",
      title: "Connect all your tools in one place",
      description: "Seamlessly integrate with payment gateways, door locks, accounting software, WhatsApp, Google Calendar, and more. Build a unified tech stack without manual data entry.",
      image: "/images/Modules/m12.png",
      alt: "System Integration Dashboard",
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
        title="Aegis Elite Modules | Complete Hotel Management System"
        description="Aegis Elite - Complete hotel management software with 12+ modules. Features include front office, housekeeping, POS, finance, banquet, inventory & integration tools."
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
            {/* H1 - Only one per page */}
            <h1 ref={titleRef} className="text-3xl sm:text-5xl font-semibold mb-8 leading-tight bg-clip-text text-transparent bg-white pb-2">
              Aegis Elite
            </h1>
            {/* Breadcrumb UI */}
            <nav aria-label="Breadcrumb">
              <ul ref={breadcrumbRef} className="st-breadcrumb flex items-center text-sm font-semibold uppercase bg-black/5 rounded-lg p-3" aria-label="Breadcrumb">
                <li>
                  <a href="/" className="text-white hover:text-white transition-colors">Home</a>
                </li>
                <li className="mx-2 text-gray-400">/</li>
                <li className="text-gray-300">Products</li>
              </ul>
            </nav>
          </div>

          {/* Modules Section */}
          <section aria-labelledby="modules-heading" className="w-full overflow-hidden">
            <h2 id="modules-heading" className="sr-only">Aegis Elite Modules and Features</h2>
            
            {modules.map((module, index) => (
              <article
                key={module.id}
                ref={addModuleRef}
                className={`w-full py-8 ${index % 2 === 0 ? 'lg:bg-gradient-to-bl' : 'lg:bg-gradient-to-br'}`}
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
                      <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl capitalize font-bold text-[#307aa7] mb-4 sm:mb-6 leading-tight">
                        {module.name}
                      </h3>

                      <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
                        {module.description}
                      </p>
                      
                      {/* Optional CTA */}
                      <div className="mt-4">
                        <Link 
                          href={module.slug}
                          className="inline-flex items-center text-[#307aa7] font-semibold hover:text-[#005c94] transition-colors"
                          aria-label={`Learn more about ${module.name}`}
                        >
                          Learn More
                          <ArrowRightIcon className="ml-2 h-4 w-4" />
                        </Link>
                      </div>
                    </div>

                    {/* Image */}
                    <div className="w-full lg:w-1/2 flex justify-center order-1 lg:order-2 mb-6 sm:mb-8 lg:mb-0">
                      <div className="relative w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-full">
                        <div
                          className={`rounded-xl ${module.id === 12 ? 'shadow-none' : 'shadow-none'} overflow-hidden group transition-all duration-300`}
                        >
                          <img
                            src={module.image}
                            alt={module.alt}
                            className={`w-[80%] mx-auto h-full ${
                              module.id === 12 ? 'object-contain' : 'object-cover'
                            }`}
                            loading={index < 3 ? "eager" : "lazy"}
                            onError={(e) => {
                              e.target.src =
                                'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtc2l6ZT0iMTgiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIwLjM1ZW0iIGZpbGw9IiM5Y2FiYjIiPkltYWdlIE5vdCBGb3VuZDwvdGV4dD48L3N2Zz4=';
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
            className="feature-section relative bg-white py-10 sm:py-16 overflow-hidden lg:px-32 "
            aria-labelledby="additional-features-heading"
          >
            <div className="container mx-auto">
              <div className="flex flex-col md:flex-row items-center gap-16">
                <div className=" py-10 text-start">
                  <div className="relative inline-block ps-4">
                    <h2 className="text-lg uppercase text-[#231F20]/80 mb-6 relative z-10">
                      Additional Features
                    </h2>
                    <div className="title-effect absolute top-[-10px] left-[0px] w-[50px] h-[50px] opacity-20">
                      <div className="absolute top-0 left-0 w-full h-[7px] bg-blue-500 origin-top-left animate-bar-top"></div>
                      <div className="absolute top-0 right-0 w-[7px] h-full bg-blue-500 origin-top-left animate-bar-right"></div>
                      <div className="absolute bottom-0 right-0 w-full h-[7px] bg-blue-500 origin-bottom-right animate-bar-bottom"></div>
                      <div className="absolute bottom-0 left-0 w-[7px] h-full bg-blue-500 origin-bottom-left animate-bar-left"></div>
                    </div>
                  </div>
                  <h3 id="additional-features-heading" className="text-2xl sm:text-4xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#005c94] to-[#0EA5E9] mb-8 font-[600]">
                    Programs For Modern Hoteliers
                  </h3>
                  <ul ref={featureListRef} className="grid lg:grid-cols-2 gap-4 text-md text-[#231F20]/80">
                    {[
                      "Wifi Integration",
                      "Channel Manager & Booking Engine Integration",
                      "Telephone Integration",
                      "Passport Scanner Interface",
                      "Waiter App"
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
                    alt="Aegis HMS Additional Features - Programs for modern hoteliers"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </GuestLayout>
    </>
  );
};

export default AegisElite;