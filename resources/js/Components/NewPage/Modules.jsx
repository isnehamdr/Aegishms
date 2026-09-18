import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const coreModules = [
  "Aegis Pulse (Reporting App)",
  "Membership / Loyalty Module",
  "Customer Engagement Tool",
  "Analytics Dashboard",
  "Payment Gateway Integration",
  "Notification System",
  "User Management Portal",
  "API Documentation",
];

const modulesData = [
  {
    id: 1,
    name: "Front Office Management",
    title: "Cloud based front office platform",
    description:
      "This integrated solution provides complete hotel management capabilities including reservations and forecasts for bookings and occupancy trends, guest and hotel information management, comprehensive financial reporting with night audit and revenue analysis, manager and tourism insights for strategic analytics, detailed meal and room occupancy reports, along with receipt generation and forecasted reporting features.",
    image: "/images/Modules/m16.png",
    alt: "Front Office Software Dashboard",
    bg: "bg-gradient-to-br from-cyan-50 to-blue-100",
    accentColor: "from-cyan-500 to-blue-600",
    slug: "/modules/front-office",
  },
  {
    id: 2,
    name: "Housekeeping Management",
    title: "Smart housekeeping management",
    description:
      "Streamline room status updates, staff assignments, cleaning schedules, and maintenance requests in real-time. Improve guest satisfaction with timely room readiness and automated alerts.",
    image: "/images/Modules/m2.png",
    alt: "Housekeeping Dashboard",
    bg: "bg-gradient-to-br from-orange-50 to-amber-100",
    accentColor: "from-orange-500 to-amber-600",
    slug: "/modules/housekeeping",
  },
  {
    id: 3,
    name: "Point of Sale (POS)",
    title: "Integrated POS system",
    description:
      "Manage restaurant, bar, spa, and retail sales seamlessly. Track inventory, generate bills, apply discounts, and integrate directly with guest folios for hassle-free checkout.",
    image: "/images/Modules/m3.png",
    alt: "POS System Interface",
    bg: "bg-gradient-to-br from-purple-50 to-pink-100",
    accentColor: "from-purple-500 to-pink-600",
    slug: "/modules/point-of-sales",
  },
  {
    id: 4,
    name: "Finance Management",
    title: "Automated financial control",
    description:
      "AegisHMS Finance Module generates complete statutory and financial reports including Tax Reports, Annex 10, Annex 13, Balance Confirmation, Bank Reconciliation, and Cash & Bank Statements, ensuring accuracy, compliance, and transparency in hotel financial operations.",
    image: "/images/Modules/m6.png",
    alt: "Finance Dashboard",
    bg: "bg-gradient-to-br from-emerald-50 to-teal-100",
    accentColor: "from-emerald-500 to-teal-600",
    slug: "/modules/finance",
  },
];

const Modules = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const panels = gsap.utils.toArray(".panel");
    panels.pop();

    panels.forEach((panel) => {
      const inner = panel.querySelector(".panel-inner");
      const panelHeight = inner.offsetHeight;
      const windowHeight = window.innerHeight;
      const difference = panelHeight - windowHeight;
      const fakeScrollRatio =
        difference > 0 ? difference / (difference + windowHeight) : 0;

      if (fakeScrollRatio) {
        panel.style.marginBottom = panelHeight * fakeScrollRatio + "px";
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: panel,
          start: "bottom bottom",
          end: () =>
            fakeScrollRatio ? `+=${inner.offsetHeight}` : "bottom top",
          pin: true,
          pinSpacing: false,
          scrub: true,
        },
      });

      if (fakeScrollRatio) {
        tl.to(inner, {
          yPercent: -100,
          y: window.innerHeight,
          duration: 1 / (1 - fakeScrollRatio) - 1,
          ease: "none",
        });
      }

      tl.fromTo(
        panel,
        { scale: 1, opacity: 1 },
        { scale: 0.7, opacity: 0.5, duration: 0.9 }
      ).to(panel, { opacity: 0, duration: 0.1 });
    });
  }, []);

  return (
    <>
      {/* Core Modules Section */}
      <section className="pb-24">
        <div className="w-full max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="flex justify-center md:justify-start">
              <img
                src="/images/cycle.png"
                alt="Modules"
                className="w-full max-w-md md:max-w-lg"
              />
            </div>

            {/* Text Content */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Our Core Modules
              </h2>
              <p className="text-gray-700 text-base md:text-lg">
                Our core offering is hotel ERP that goes beyond a traditional PMS, providing comprehensive solutions for modern hospitality management.
              </p>

              {/* Module Cards */}
              <div className="grid sm:grid-cols-2 gap-4">
                {coreModules.map((module, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 md:p-4 bg-white rounded-xl border transition-transform transform hover:scale-105"
                  >
                    <span className="inline-block w-5 h-5 md:w-6 md:h-6 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                      ✓
                    </span>
                    <span className="text-gray-800 font-medium text-sm md:text-base">
                      {module}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Modules Section */}
      <div ref={containerRef} className="relative">
        {modulesData.map((module, index) => (
          <div key={module.id} className="panel relative min-h-[100vh] sm:min-h-[auto]">
            <div className={`panel-inner py-16 md:py-24 ${module.bg}`}>
              <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div
                  className={`grid gap-12 items-center md:grid-cols-2 ${
                    index % 2 !== 0 ? "md:grid-flow-dense" : ""
                  }`}
                >
                  {/* Image */}
                  <div
                    className={`relative group ${
                      index % 2 === 0 ? "" : "md:order-2"
                    }`}
                  >
                    <div className="relative overflow-hidden rounded-xl">
                      <img
                        src={module.image}
                        alt={module.alt}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                    {/* Decorative element */}
                    <div
                      className={`absolute -z-10 top-1/2 -translate-y-1/2 ${
                        index % 2 === 0 ? "-right-8" : "-left-8"
                      } w-48 h-48 md:w-64 md:h-64 bg-gradient-to-r ${
                        module.accentColor
                      } opacity-10 rounded-full blur-3xl`}
                    ></div>
                  </div>

                  {/* Content */}
                  <div
                    className={`space-y-6 ${
                      index % 2 === 0 ? "" : "md:order-1"
                    }`}
                  >
                    <div className="space-y-4">
                      <div className="inline-flex items-center gap-2 px-3 py-1 md:px-4 md:py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-sm text-sm md:text-base">
                        <div
                          className={`w-2 h-2 rounded-full bg-gradient-to-r ${
                            module.accentColor
                          } animate-pulse`}
                        ></div>
                        <span className="text-gray-700 font-semibold">
                          {module.name}
                        </span>
                      </div>

                      <h2 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight">
                        {module.title}
                      </h2>

                      <p className="text-sm md:text-lg text-gray-600 leading-relaxed">
                        {module.description}
                      </p>
                    </div>

                    {/* Features */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {["Real-time Updates", "Cloud-based", "Analytics", "24/7 Support"].map(
                        (feature, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-3 py-2 rounded-lg text-sm md:text-base"
                          >
                            <svg
                              className="w-5 h-5 text-blue-500"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        )
                      )}
                    </div>

                    {/* Learn More */}
                    <a
                      href={module.slug}
                      className={`inline-flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r ${module.accentColor} text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300`}
                    >
                      <span>Learn More</span>
                      <svg
                        className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Modules;
