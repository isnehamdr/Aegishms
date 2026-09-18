import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ArrowRight, Calendar, Clock, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from '@inertiajs/react';

const Blogsection = ({ blogPosts = [] }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
    dragFree: false,
    slidesToScroll: 1,
    breakpoints: {
      '(min-width: 768px)': { slidesToScroll: 2 },
      '(min-width: 1024px)': { slidesToScroll: 3 },
    }
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback((index) => {
    if (emblaApi) emblaApi.scrollTo(index);
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);

    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi, onSelect]);

  // Default blog posts if none provided
  const DefaultPosts = [
    {
      id: 7,
      title: 'Aegis Software Achieves ISO/IEC 27001 Certification',
      date: 'August 3, 2026',
      readTime: '5 min read',
      content: 'Aegis Software Pvt. Ltd. has officially achieved ISO/IEC 27001 certification, reinforcing our commitment to protecting information, managing cybersecurity risk, and continuously improving the secure technology solutions we provide to the hospitality industry.',
      excerpt: 'Aegis Software has achieved ISO/IEC 27001 certification, strengthening our commitment to information security, risk management, and customer trust.',
      image: '/images/aegis_blog_iso.jpeg',
      category: 'Information Security',
      slug: 'aegis-software-achieves-iso-iec-27001-certification'
    },
    {
      id: 6,
      title: 'How AegisHMS Loyalty & Membership Module Helps Build Lasting Guest Relationships',
      date: 'June 4, 2025',
      readTime: '4 min read',
      content: 'In today\'s competitive hospitality landscape, guest retention is key to sustainable growth. The AegisHMS Loyalty & Membership Module empowers hotels and restaurants to create meaningful guest engagement through structured rewards, tier-based memberships, and real-time tracking. By turning every transaction into an opportunity for loyalty, businesses can drive repeat visits, increase spending, and enhance long-term customer value. The module offers loyalty points management, tier-based membership programs, personalized promotions, and seamless integration with AegisHMS solutions. Whether you operate a hotel, restaurant, or hospitality group, Aegis helps strengthen customer relationships while boosting revenue and guest satisfaction.',
      excerpt: 'Discover how AegisHMS Loyalty & Membership Module helps hotels and restaurants increase guest retention, reward loyal customers, and drive long-term revenue growth.',
      image: '/images/loyalty-membership.jpg',
      category: 'Customer Engagement',
      slug: 'aegishms-loyalty-membership-module-builds-lasting-guest-relationships'
    },
    {
      id: 5,  // New KDS blog post
      title: 'How AegisHMS Kitchen Display System (KDS) Helps Restaurants Run Smarter',
      date: 'May 28, 2025',
      readTime: '4 min read',
      content: 'In every busy restaurant kitchen, speed, accuracy, and communication matter. A missed order, delayed preparation, or unclear instruction can directly affect guest satisfaction. That\'s where the AegisHMS Kitchen Display System (KDS) comes in. A Kitchen Display System replaces traditional paper kitchen order tickets with a digital screen inside the kitchen. Orders placed from POS are instantly displayed on the kitchen screen, helping chefs and kitchen staff view, manage, and prepare orders in real time. With AegisHMS KDS, every order moves seamlessly from POS to Kitchen without manual handover.',
      excerpt: 'Discover how the AegisHMS Kitchen Display System (KDS) transforms kitchen operations with real-time order display, reduced errors, and paperless efficiency.',
      image: '/images/kds.PNG',
      category: 'Technology',
      slug: 'aegishms-kitchen-display-system-helps-restaurants-run-smarter'
    },
    {
      id: 1,
      title: "The Importance of Inventory Management in Hospitality and How Aegis HMS Can Optimize Your Operations",
      date: "January 1, 2023",
      readTime: "5 min read",
      content: "In the hospitality industry, effective inventory management is crucial for cost control, waste reduction, and ensuring guest satisfaction.",
      excerpt: "Learn how effective inventory management can transform your hospitality business operations...",
      image: "/images/Modules/inventory.jpg",
      category: "Technology",
      slug: "importance-inventory-management-hospitality-aegis-hms-optimization"
    },
    {
      id: 2,
      title: "Improving Sustainability in the Hospitality Sector: A New Chapter for Environmentally Friendly Approaches",
      date: "February 15, 2023",
      readTime: "4 min read",
      content: "In recent years, the hospitality industry has undergone a significant shift toward sustainability as both consumers and businesses recognize the importance of environmental responsibility.",
      excerpt: "Discover how the hospitality industry is embracing sustainability with innovative approaches...",
      image: "/images/Modules/1.jpg",
      category: "Sustainability",
      slug: "improving-sustainability-hospitality-environmentally-friendly-approaches"
    },
    {
      id: 4,
      title: 'Aegis Pulse247: Transforming Multi-Property Reporting for Hospitality',
      date: 'March 15, 2023',
      readTime: '6 min read',
      content: 'Aegis Pulse247 is a modern multi-property reporting and analytics platform designed for hotels, restaurants, and hospitality groups aiming to simplify operations and improve decision-making. Fully integrated with Aegis HMS, it unifies all business data into one centralized system, offering real-time visibility, smarter insights, and enhanced profitability.\n\nWith complete visibility across all properties, Aegis Pulse247 allows management teams to track revenue, occupancy, sales, expenses, and key performance metrics from every hotel or outlet in a single dashboard. Its real-time monitoring eliminates manual reporting, giving instant clarity across the entire portfolio.\n\nAegis Pulse247 stands out with powerful features such as real-time analytics, seamless Aegis HMS integration, a unified dashboard with clear KPIs, and intelligent decision-making tools. Users can identify trends, compare property performance, and uncover new revenue opportunities effortlessly. Automation further boosts efficiency by reducing manual work and streamlining cross-department operations.\n\nWhether managing a boutique hotel or a multi-property chain, Aegis Pulse247 helps hospitality businesses strengthen data-driven decision-making, improve operational efficiency, enhance guest experiences, and ultimately increase overall profitability.',
      image: '/images/Modules/hms.jpg',
      category: 'Hospitality',
      slug: 'aegis-pulse247-transforming-multi-property-reporting-hospitality',
    },
  ];

  const posts = blogPosts.length > 0 ? blogPosts : DefaultPosts;

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <motion.h2
            className="inline-block text-4xl md:text-5xl font-bold text-gray-900 mb-4 relative bg-clip-text text-transparent bg-gradient-to-r from-black to-black"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Featured Articles
          </motion.h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover our latest insights, tutorials, and thought leadership pieces
          </p>

          <Link
            href="/blogs"
            className="inline-flex items-center mt-6 px-10 py-4 rounded-full text-white font-medium bg-gradient-to-r from-[#005c94] to-[#0EA5E9]"
          >
            View All Articles
          </Link>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Mobile Navigation Buttons */}
          <div className="flex justify-center gap-4 mb-8 md:hidden">
            <button
              className="w-12 h-12 rounded-full bg-white flex items-center justify-center transition-all active:scale-95"
              onClick={scrollPrev}
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5 text-gray-700" />
            </button>
            <button
              className="w-12 h-12 rounded-full bg-white flex items-center justify-center transition-all active:scale-95"
              onClick={scrollNext}
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5 text-gray-700" />
            </button>
          </div>

          {/* Carousel Viewport */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-4">
              {posts.map((post, index) => (
                <div
                  key={post.id}
                  className="flex-[0_0_85%] min-w-0 pl-4 md:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
                >
                  <motion.article
                    className="group bg-white rounded-2xl overflow-hidden transition-all duration-300 h-full border border-gray-100 hover:border-[#0EA5E9]/20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="relative overflow-hidden aspect-[12/9]">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute top-4 left-4">
                        <span className="px-4 py-2 bg-white/95 backdrop-blur-sm text-sm font-semibold text-gray-800 rounded-full border border-gray-200">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#005c94] transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <Link
                        href={`/blogs/${post.slug}`}
                        className="inline-flex items-center text-[#005c94] font-semibold group/link hover:text-[#0EA5E9] transition-colors"
                      >
                        Read Article
                        <ArrowRight size={18} className="ml-2 transition-transform group-hover/link:translate-x-1" />
                      </Link>
                    </div>
                  </motion.article>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-12 mt-12 text-center">
          </div>

          {/* Mobile Slide Counter */}
          <div className="text-center mt-4 text-sm text-gray-500 md:hidden">
            <span className="font-medium">{selectedIndex + 1}</span>
            <span className="mx-2">/</span>
            <span>{scrollSnaps.length}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogsection;
