import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRightIcon } from '@heroicons/react/24/solid';
import { Link } from '@inertiajs/react';

gsap.registerPlugin(ScrollTrigger);

const CoreModules = () => {
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
      name: "Point of Sale (POS)",
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
      description: "AegisHMS Finance Module generates complete statutory and financial reports including Tax Reports, Annex 10, Annex 13, Balance Confirmation, Bank Reconciliation, and Cash & Bank Statements, ensuring accuracy, compliance, and transparency in hotel financial operations.",
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
      title: "Material Management Moduel ",
      description: "The Material Management Module of Aegis HMS efficiently manages procurement, inventory, and consumption across departments. It supports both Main Store and Sub Store operations for better control and distribution. With real-time stock tracking, automated reordering, and cost analysis, it minimizes wastage, ensures availability, and enhances operational efficiency and transparency.",
      image: "/images/Modules/m5.png",
      alt: "Channel Manager Interface",
      slug: "/modules/inventory"
    },
    {
      id: 7,
      name: "F&B Costing Module",
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
      name: "Foreign Encashment ",
      title: "Efficient inventory management",
      description: "The Foreign Exchange Encashment Receipt (FEER) feature in Aegis HMS manages foreign currency transactions efficiently, ensuring accurate conversion, compliance with regulations, automated receipt generation, and seamless integration with the hotel’s finance system.",
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

  const sectionRefs = useRef(modules.map(() => null));
  const imageRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
  // Preload all images
  modules.forEach((mod) => {
    const img = new Image();
    img.src = mod.image;
  });

  let ctx = gsap.context(() => {
    const triggers = sectionRefs.current.map((section, index) => {
      if (!section) return null;

      return ScrollTrigger.create({
        trigger: section,
        start: 'top center',
        end: 'bottom center',
        onToggle: (self) => {
          if (self.isActive) {
            const img = imageRef.current;
            if (!img) return;

            // Directly update image src without opacity animation
            img.src = modules[index].image;
            img.alt = modules[index].alt;
            setCurrentIndex(index);
          }
        },
      });
    }).filter(Boolean);

    return () => {
      triggers.forEach((t) => t.kill());
    };
  });

  return () => ctx.revert();
}, []);


  return (
    <div className="w-full py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop Layout: Sticky Image + Scrollable Content */}
        <div className="hidden lg:flex flex-row gap-10 lg:gap-16">
          <div className="lg:sticky lg:top-40 w-1/2 flex justify-center h-fit self-start">
            <div className="w-full max-w-2xl">
              <img
                ref={imageRef}
                src={modules[0].image}
                alt={modules[0].alt}
                className="w-full h-[60vh] object-contain transition-transform duration-300"
                style={{ opacity: 0, transform: 'scale(1)' }}
                onLoad={(e) => {
                  e.target.style.opacity = '1';
                }}
                onError={(e) => {
                  e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtc2l6ZT0iMTgiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIwLjM1ZW0iIGZpbGw9IiM5Y2FiYjIiPkltYWdlIE5vdCBGb3VuZDwvdGV4dD48L3N2Zz4=';
                  e.target.style.opacity = '1';
                }}
              />
            </div>
          </div>

          <div className="w-1/2 space-y-24">
            {modules.map((module, index) => (
              <div
                key={module.id}
                ref={(el) => (sectionRefs.current[index] = el)}
                className="py-2 space-y-6"
              >
                {/* Module Tag */}
               

                {/* Title */}
                <h2 className="mb-3 capitalize text-3xl font-bold text-[#307aa7] sm:text-4xl">
                  {module.name}
                </h2>

                {/* Description */}
                <p className="mb-4 text-lg leading-relaxed text-gray-700">
                  {module.description}
                </p>

                {/* CTA Link */}
                <Link
                  href={module.slug}
                  className="inline-flex items-center font-medium text-[#307aa7] hover:underline"
                >
                  Explore More
                  <ArrowRightIcon className="ml-2 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Layout: Each module has its own image */}
        <div className="lg:hidden space-y-12">
          {modules.map((module, index) => (
            <div key={module.id} className="py-2 space-y-4">
              <div className="mb-4 rounded-lg overflow-hidden ">
                <img
                  src={module.image}
                  alt={module.alt}
                  className="w-full h-64 object-contain "
                  onError={(e) => {
                    e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtc2l6ZT0iMTgiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIwLjM1ZW0iIGZpbGw9IiM5Y2FiYjIiPkltYWdlIE5vdCBGb3VuZDwvdGV4dD48L3N2Zz4=';
                  }}
                />
              </div>

              {/* <div className="mb-3">
                <span className="inline-block text-[#307aa7] text-md font-semibold  tracking-wide">
                  {module.title}
                </span>
              </div> */}

              <h2 className="text-2xl font-bold text-[#307aa7] mb-3 capitalize">
                {module.name}
              </h2>

              <p className="text-gray-700 text-base leading-relaxed mb-4">
                {module.description}
              </p>

              <Link
                href={module.slug}
                className="inline-flex items-center text-[#307aa7] font-medium hover:underline"
              >
                Explore More
                <ArrowRightIcon className="w-4 h-4 ml-2" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoreModules;