import { useEffect, useRef, useState } from "react";

export default function StatsHero() {
  const sectionRef = useRef(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsActive(true);
          observer.disconnect(); // run once
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative isolate w-full overflow-hidden mb-24"
    >
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#1e40af,_transparent_60%)] opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#005C94] via-[#003f66] to-slate-950" />

      {/* Wave Container */}
      <div className="relative py-24 sm:py-32">
        {/* Top Glow */}
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-blue-500/30 to-transparent" />

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">
          {/* Badge */}
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur text-sm font-semibold text-blue-200 mb-8">
            ✦ Proven Performance
          </span>

          {/* Heading */}
          <h2 className="mx-auto max-w-4xl mb-16 text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
            Grow your revenue with
            <span className="block bg-gradient-to-r from-blue-300 via-white to-indigo-300 bg-clip-text text-transparent">
              advanced distribution technology
            </span>
          </h2>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
            <StatCard
              end={500}
              suffix="+"
              label="Customers Worldwide"
              active={isActive}
            />
            <StatCard
              end={150}
              suffix="+"
              label="Rooms Supported"
              active={isActive}
            />
            <StatCard
              end={475}
              suffix="+"
              label="Locations Live"
              active={isActive}
            />
            <StatCard
              end={75}
              label="Expert Teams"
              active={isActive}
            />
            <StatCard
              end={7}
              suffix="+"
              label="Provinces Covered"
              active={isActive}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------
   STAT CARD COMPONENT
------------------------------------- */

function StatCard({ end, label, suffix = "", active }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;

    const duration = 2200;
    const start = performance.now();

    function animate(time) {
      const progress = Math.min((time - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
      setCount(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);
  }, [active, end]);

  return (
    <div className="group relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      {/* Hover Glow */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-400/20 to-indigo-500/20 opacity-0 group-hover:opacity-100 transition pointer-events-none" />

      <div className="relative z-10">
        <div className="text-3xl font-bold text-white md:text-4xl">
          {count.toLocaleString()}
          {suffix}
        </div>
        <div className="mt-2 text-sm font-medium tracking-wide text-blue-200">
          {label}
        </div>
      </div>
    </div>
  );
}
