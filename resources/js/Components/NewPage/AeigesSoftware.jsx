import React, { useEffect, useRef } from "react";
import { CheckIcon } from "@heroicons/react/24/solid";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AeigesSoftware = () => {
  const leftColRef = useRef(null);
  const rightColRef = useRef(null);
  const sectionRef = useRef(null);

  const features = [
    { title: "24/7/365 Tech Support", description: "Round-the-clock assistance from our expert technical team." },
    { title: "Regular Product Updates", description: "Continuous enhancements and new features delivered regularly." },
    { title: "Emerging Technologies", description: "Leveraging cutting-edge innovations to future-proof your solutions." },
    { title: "Customer Segments", description: "Tailored solutions serving diverse industries and business sizes." },
    { title: "Compliance", description: "Full adherence to industry regulations and security standards." },
    { title: "Fast Implementation", description: "Quick deployment minimizing disruption to your operations." },
    { title: "7 Provinces Presence", description: "Extensive regional coverage with local support teams." },
    { title: "Complete Integration", description: "Seamless connection with your existing systems and workflows." },
    { title: "Proven Track Record", description: "Years of successful deployments and satisfied clients." },
    { title: "Exclusive Knowledge Base", description: "Comprehensive resources and documentation for self-service." },
  ];

  // Split features evenly for two columns (large screen GSAP layout)
  const leftFeatures = [];
  const rightFeatures = [];
  features.forEach((feature, i) => {
    if (i % 2 === 0) leftFeatures.push(feature);
    else rightFeatures.push(feature);
  });

  // Duplicate for smooth scroll (large screens)
  const leftFeaturesLoop = [...leftFeatures, ...leftFeatures];
  const rightFeaturesLoop = [...rightFeatures, ...rightFeatures];

  useEffect(() => {
    if (window.innerWidth < 1024) return; // Only run on large screens

    const leftCol = leftColRef.current;
    const rightCol = rightColRef.current;
    const section = sectionRef.current;

    if (!leftCol || !rightCol || !section) return;

    const leftHeight = leftCol.scrollHeight;
    const rightHeight = rightCol.scrollHeight;
    const maxHeight = Math.max(leftHeight, rightHeight);

    leftCol.style.minHeight = `${maxHeight}px`;
    rightCol.style.minHeight = `${maxHeight}px`;

    const scrollDistance = maxHeight / 2;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: `+=${scrollDistance + section.offsetHeight}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });

    tl.fromTo(leftCol, { y: 0 }, { y: -scrollDistance, ease: "none" }, 0);
    tl.fromTo(rightCol, { y: -scrollDistance }, { y: 0, ease: "none" }, 0);

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  const FeatureCard = ({ feature }) => (
  <div className="relative group p-6 text-center bg-white rounded-2xl shadow-sm hover:shadow-lg transition">
    {/* Background gradient on hover */}
    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

    {/* Icon with animated background */}
    <div className="relative mb-4 inline-flex mx-auto">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg blur-md opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
      <div className="relative bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg p-2.5 shadow-lg group-hover:scale-110 transition-transform duration-300">
        <CheckIcon className="h-5 w-5 text-white" />
      </div>
    </div>

    {/* Content */}
    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
      {feature.title}
    </h3>
    <p className="text-gray-600 leading-relaxed">{feature.description}</p>

    {/* Animated border on hover */}
    <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-200 transition-colors duration-300" />
  </div>
);


  return (
    <div>
      {/* LARGE SCREEN – GSAP section */}
      <section
        ref={sectionRef}
        className="hidden lg:flex bg-[#f9f9ff] h-screen px-8 overflow-hidden items-center"
      >
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 h-full">
          {/* LEFT – Sticky content */}
          <div className="mt-24 space-y-10 h-full flex flex-col">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
              Aegis Software <br /> Differentiators
            </h2>
            <p className="text-gray-600 text-lg max-w-xl">
              Designed for hospitality businesses of all sizes, combining modern
              technology, compliance, and proven results to optimize operations.
            </p>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
              {[
                { value: "24/7", label: "Support" },
                { value: "7+", label: "Provinces" },
                { value: "100%", label: "Compliant" },
              ].map((item, i) => (
                <div key={i}>
                  <div className="text-4xl font-bold text-gray-900">{item.value}</div>
                  <div className="text-sm text-gray-600 font-medium">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT – Two columns */}
          <div className="grid grid-cols-2 gap-8 h-full items-center">
            <div ref={leftColRef} className="flex flex-col gap-8">
              {leftFeaturesLoop.map((feature, i) => (
                <FeatureCard key={`left-${i}`} feature={feature} />
              ))}
            </div>
            <div ref={rightColRef} className="flex flex-col-reverse gap-8">
              {rightFeaturesLoop.map((feature, i) => (
                <FeatureCard key={`right-${i}`} feature={feature} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SMALL & MEDIUM SCREEN – simple 2-column layout */}
      {/* SMALL & MEDIUM SCREEN – animated stacked cards */}
<section className="block lg:hidden bg-[#f9f9ff] px-4 py-12">
  <div className="max-w-3xl mx-auto text-center space-y-6">
    <h2 className="text-3xl font-bold text-gray-900">Aegis Software Differentiators</h2>
    <p className="text-gray-600 text-lg">
      Designed for hospitality businesses of all sizes, combining modern technology,
      compliance, and proven results to optimize operations.
    </p>
  </div>

  <div className="max-w-3xl mx-auto mt-10 space-y-6">
    {features.map((feature, i) => (
      <div
        key={`mobile-${i}`}
        className="relative group p-6 bg-white rounded-2xl shadow-sm hover:shadow-lg transition"
      >
        {/* Background gradient on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

        {/* Icon with animated background */}
        <div className="relative mb-4 inline-flex mx-auto">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg blur-md opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
          <div className="relative bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg p-2.5 shadow-lg group-hover:scale-110 transition-transform duration-300">
            <CheckIcon className="h-5 w-5 text-white" />
          </div>
        </div>

        {/* Content */}
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
          {feature.title}
        </h3>
        <p className="text-gray-600 leading-relaxed">{feature.description}</p>

        {/* Animated border on hover */}
        <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-200 transition-colors duration-300" />
      </div>
    ))}
  </div>
</section>

    </div>
  );
};

export default AeigesSoftware;
