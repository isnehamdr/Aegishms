import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const WhyAegis = () => {
  const patronizedBy = [
    { 
      src: "/images/review.png", 
      alt: "Independent Luxury Hotels", 
      title: "Independent Luxury Hotels",
      description: "Boutique hotels and luxury independent properties"
    },
    { 
      src: "/images/restaurant.png", 
      alt: "Restaurants & Foodservice Outlets", 
      title: "Restaurants & Foodservice Outlets",
      description: "Fine dining to casual eateries"
    },
    { 
      src: "/images/hotel.png", 
      alt: "Budget & Economy Hotels", 
      title: "Budget & Economy Hotels",
      description: "Affordable accommodations and budget chains"
    },
    { 
      src: "/images/bar-counter.png", 
      alt: "Bars, Lounges & Pubs", 
      title: "Bars, Lounges & Pubs",
      description: "Nightlife and beverage establishments"
    },
    { 
      src: "/images/hotel-service.png", 
      alt: "Luxury Resorts & Boutique Properties", 
      title: "Luxury Resorts & Boutique Properties",
      description: "Premium resorts and boutique stays"
    },
    { 
      src: "/images/disco-ball.png", 
      alt: "Clubs & Entertainment Venues", 
      title: "Clubs & Entertainment Venues",
      description: "Entertainment and nightlife venues"
    },
    { 
      src: "/images/resort.png", 
      alt: "Midscale Hotels", 
      title: "Midscale Hotels",
      description: "Mid-range hotel properties"
    },
    { 
      src: "/images/event.png", 
      alt: "Banquets & Events", 
      title: "Banquets & Events",
      description: "Event spaces and banquet halls"
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const titleRef = useRef(null);
  const heroRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);

  // GSAP Animations
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Hero section animation
    const heroAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none reverse"
      }
    });

    // Different animations for mobile and desktop
    if (window.innerWidth < 1024) {
      // Mobile animation: Content first, then image
      heroAnimation
        .fromTo(contentRef.current, 
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
        )
        .fromTo(imageRef.current, 
          { opacity: 0, scale: 0.9, y: 30 },
          { opacity: 1, scale: 1, y: 0, duration: 1, ease: "power3.out" },
          "-=0.5"
        );
    } else {
      // Desktop animation: Original layout (text first, then image)
      heroAnimation
        .fromTo(contentRef.current.querySelector('h2'), 
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
        )
        .fromTo(contentRef.current.querySelector('p'), 
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
          "-=0.5"
        )
        .fromTo(imageRef.current, 
          { opacity: 0, scale: 0.9, rotateY: -10 },
          { opacity: 1, scale: 1, rotateY: 0, duration: 1, ease: "power3.out" },
          "-=0.3"
        );
    }

    // Title animation
    gsap.fromTo(titleRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          end: "top 50%",
          toggleActions: "play none none reverse"
        }
      }
    );



    // Hover animations for cards
  

    // Handle resize
    

    // Cleanup
    return () => {
     
    };
  }, []);

  // Add card to ref array
  const addToRefs = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  return (
    <>
      {/* Why Aegis Section - Content first on mobile, image first on desktop */}
      <section 
        ref={heroRef}
        className="py-16 sm:py-24 bg-[#f2f8ff]  sm:mx-[-128px]"
      >
        <div className="absolute inset-0 " />
        <div className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Content - First on mobile, second on desktop */}
            <div 
              ref={contentRef}
              className="order-1 lg:order-1" // Mobile: first, Desktop: first (unchanged)
            >
              <div className="ps-0 lg:ps-12">
                <h2 className="text-[#307aa7] text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-wide leading-tight mb-6">
                  AegisHMS
                </h2>
                <div className="space-y-4 text-base sm:text-lg leading-relaxed">
                  <p className='text-[#46728e] font-semibold'>
                    A COMPLETE HOTEL MANAGEMENT SYSTEM
                  </p>
                  <p className='text-gray-600'>
                    With its user-friendly design, simple implementation, and continuous updates, AegisHMS adapts to your hotel's unique needs and keeps you aligned with industry standards. By automating repetitive work, enhancing transparency, and offering 24/7 support, it helps your team focus on what matters most: delivering exceptional guest experiences. More than software, AegisHMS is your strategic partner for growth, guest satisfaction, and staying ahead in hospitality.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Image - Second on mobile, second on desktop */}
            <div 
              ref={imageRef}
              className="order-2 lg:order-2 rounded-xl overflow-hidden transform transition-transform duration-500 will-change-transform"
            >
              <img 
                src="/images/restaurant.jpg" 
                alt="Aegis HMS Dashboard" 
                className="w-full h-auto object-cover shadow-2xl"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

   {/* Patronized Section */}
<section ref={sectionRef} className="py-16 sm:py-24 w-full">
  <div className="w-full px-4 mx-auto max-w-7xl">
    <div 
      ref={titleRef}
      className="text-center mb-12 sm:mb-16"
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
        We Are <span className="text-[#307aa7]">Patronized</span> By
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg">
        Trusted by hospitality establishments of all sizes across the industry
      </p>
    </div>

    <div className="relative w-full">
      {/* Mobile view - 2 columns */}
      <div className="lg:hidden">
        <div className="grid grid-cols-2 gap-4 sm:gap-6">
          {patronizedBy.map((item, index) => (
            <div
              key={index}
              ref={addToRefs}
              className=" rounded-xl flex flex-col items-center text-center border border-gray-100"
            >
              {/* Image with border */}
              <div className="mb-3 sm:mb-4">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-lg border-2 border-gray-100 flex items-center justify-center ">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                    loading="lazy"
                  />
                </div>
              </div>
              
              <div className="w-full">
                <h3 className="font-semibold text-gray-800 text-xs sm:text-sm">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop view - 4 columns */}
      <div className="hidden lg:grid grid-cols-2 lg:grid-cols-4 gap-6">
        {patronizedBy.map((item, index) => (
          <div
            key={index}
            ref={addToRefs}
            className="bg-white rounded-xl p-6 flex flex-col items-center text-center border border-gray-200"
          >
            {/* Image with consistent border */}
            <div className="mb-4">
              <div className="w-20 h-20 rounded-lg border-2 border-gray-100 flex items-center justify-center p-3">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-12 h-12 object-contain"
                  loading="lazy"
                />
              </div>
            </div>
            
            {/* Content */}
            <div>
              <h3 className="font-semibold text-gray-900 text-base">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>
    </>
  );
};

export default WhyAegis;