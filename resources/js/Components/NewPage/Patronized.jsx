import React from "react";

const patronizedBy = [
  {
    src: "/images/review.png",
    alt: "Independent Luxury Hotels",
    title: "Independent Luxury Hotels",
    description: "Boutique hotels and luxury independent properties",
  },
  {
    src: "/images/restaurant.png",
    alt: "Restaurants & Foodservice Outlets",
    title: "Restaurants & Foodservice Outlets",
    description: "Fine dining to casual eateries",
  },
  {
    src: "/images/hotel.png",
    alt: "Budget & Economy Hotels",
    title: "Budget & Economy Hotels",
    description: "Affordable accommodations and budget chains",
  },
  {
    src: "/images/bar-counter.png",
    alt: "Bars, Lounges & Pubs",
    title: "Bars, Lounges & Pubs",
    description: "Nightlife and beverage establishments",
  },
  {
    src: "/images/hotel-service.png",
    alt: "Luxury Resorts & Boutique Properties",
    title: "Luxury Resorts & Boutique Properties",
    description: "Premium resorts and boutique stays",
  },
  {
    src: "/images/disco-ball.png",
    alt: "Clubs & Entertainment Venues",
    title: "Clubs & Entertainment Venues",
    description: "Entertainment and nightlife venues",
  },
  {
    src: "/images/resort.png",
    alt: "Midscale Hotels",
    title: "Midscale Hotels",
    description: "Mid-range hotel properties",
  },
  {
    src: "/images/event.png",
    alt: "Banquets & Events",
    title: "Banquets & Events",
    description: "Event spaces and banquet halls",
  },
];

const Patronized = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50 -z-10" />

      {/* WHY AEGIS */}
      <div className="max-w-7xl mx-auto px-6 pt-28 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <span className="inline-block mb-4 text-sm font-semibold tracking-wider text-blue-600 uppercase">
              Why Aegis
            </span>

            <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Smarter Hospitality,
              <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Seamless Operations
              </span>
            </h2>

            <p className="text-lg text-gray-600 max-w-xl">
              A complete hotel management system designed to simplify
              operations, boost efficiency, and elevate guest experiences.
            </p>

            <div className="mt-8 space-y-5">
              {[
                "Real-time operational tracking",
                "Seamless department integration",
                "24/7 dedicated support",
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center shadow-lg">
                    <svg
                      className="w-4 h-4 text-white"
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
                  </div>
                  <span className="text-gray-800 font-medium">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
            <p>
              AegisHMS is more than hotel management software—it’s a complete
              ecosystem that connects every department, tracks tasks in real
              time, and improves communication across your property.
            </p>

            <p>
              Designed with simplicity in mind, AegisHMS adapts to your hotel’s
              needs while staying aligned with modern hospitality standards.
              Automation, transparency, and continuous updates help your team
              work smarter—not harder.
            </p>

            <p className="font-medium text-gray-800">
              More than software, AegisHMS is your strategic partner for growth,
              efficiency, and guest satisfaction.
            </p>
          </div>
        </div>
      </div>

      {/* PATRONIZED BY */}
      <div className="max-w-7xl mx-auto px-6 pb-28">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Intro Card */}
          <div className="lg:col-span-1 flex flex-col justify-center">
            <h3 className="text-3xl font-bold mb-4">
              Patronized by
            </h3>
            <p className="text-gray-600 text-lg">
              Trusted by hospitality leaders across hotels, resorts,
              restaurants, and entertainment venues.
            </p>
          </div>

          {/* Cards */}
          {patronizedBy.map((item, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-2xl bg-white/70 backdrop-blur-md border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center shadow-lg">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-6 h-6 invert"
                  />
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-1 text-gray-900">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Patronized;
