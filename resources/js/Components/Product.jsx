import React, { useState, useEffect, useRef } from 'react'
import { Check, ChevronRight } from 'lucide-react'
import { Link } from '@inertiajs/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Product = () => {
  const [hoveredCard, setHoveredCard] = useState(null)
  const cardsRef = useRef([])
  const sectionRef = useRef(null)
  const headingRef = useRef(null)

  const products = [
    {
      name: 'AEGIS CORE',
      description: 'Perfect for small to medium businesses getting started',
      features: [
        'Front Office Management',
        'Point of Sales (POS)',
        'Inventory Management',
        'Finance & Accounting',
        'Housekeeping Module',
        'Waiter App',
        'QR Payment Integration'
      ],
      gradient: 'from-blue-500 to-cyan-500',
      highlight: 'bg-blue-50 border-blue-200',
      link: '/aegis-core'
    },
    {
      name: 'AEGIS ELITE ',
      description: 'Complete solution with unlimited possibilities',
      features: [
        'All CORE features included',
        'Banquet Management',
        'Channel Manager Integration',
        'Booking Engine Integration',
        'Housekeeping App',
        'AEGIS Pulse Analytics',
        'Waiter App',
        'Wifi Integration',
      ],
      gradient: 'from-blue-500 to-cyan-500',
      highlight: 'bg-blue-50 border-blue-200',
      link: '/aegis-infinity'
    },
    {
      name: 'AEGIS INFINITY',
      description: 'Advanced features for growing hospitality businesses',
      features: [
        'All Elite features included',
        'Fixed Assets Management',
        'Payroll System',
        'Sales & Marketing Suite',
        'WiFi Integration',
        'Door Lock Integration',
        'Membership & Loyalty Program and many more...',
      ],
      gradient: 'from-blue-500 to-cyan-500',
      highlight: 'bg-blue-50 border-blue-200',
      link: '/aegis-elite'
    },
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animation
      gsap.from(headingRef.current.children, {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: headingRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      })

      // Set initial state for cards with staggered positions
      gsap.set(cardsRef.current, {
        y: (index) => 100 + (index * 60),
        opacity: 0,
        scale: 0.9,
        rotateX: 15
      })

      // Main cards animation - aligns once and stays
      cardsRef.current.forEach((card, index) => {
        gsap.to(card, {
          y: 0,
          opacity: 1,
          scale: 1,
          rotateX: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
            end: 'center 40%',
            scrub: 1.5,
            // Once the animation completes, it stays in final position
            onComplete: () => {
              gsap.set(card, {
                y: 0,
                opacity: 1,
                scale: 1,
                rotateX: 0
              })
            }
          },
          delay: index * 0.15
        })
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <>
      <div className="overflow-hidden">
        <div className="w-full py-16 px-4 sm:px-6 lg:px-8" ref={sectionRef}>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16" ref={headingRef}>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Our Products
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive hospitality management solutions tailored to your business needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-1000">
              {products.map((product, index) => (
                <div
                  key={index}
                  ref={(el) => (cardsRef.current[index] = el)}
                  className={`relative bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-500 ease-out will-change-transform ${
                    hoveredCard === index 
                      ? 'transform -translate-y-3 shadow-2xl scale-105' 
                      : 'hover:shadow-lg'
                  }`}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                  style={{
                    transformStyle: 'preserve-3d',
                  }}
                >
                  <div className={`h-2 bg-gradient-to-r ${product.gradient} transition-all duration-500 ${
                    hoveredCard === index ? 'h-3' : ''
                  }`}></div>

                  <div className="p-8">
                    <h3 className="text-3xl font-bold text-gray-900 mt-2 mb-3 transition-colors duration-300">
                      {product.name}
                    </h3>

                    <p className="text-gray-600 mb-6 transition-colors duration-300">
                      {product.description}
                    </p>

                    <div className="space-y-3 mb-8">
                      {product.features.map((feature, idx) => (
                        <div 
                          key={idx} 
                          className="flex items-start gap-3 transition-transform duration-300 hover:translate-x-1"
                        >
                          <div className={`flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r ${product.gradient} flex items-center justify-center mt-0.5 transition-all duration-300`}>
                            <Check className="w-3 h-3 text-white" />
                          </div>
                          <span className="text-sm text-gray-700 leading-tight">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    <Link
                      href={product.link}
                      aria-label={`Learn more about ${product.name}`}
                      className="w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 bg-[#0c9de0] text-white hover:bg-[#0a8ac9] hover:gap-3 hover:shadow-lg transform hover:scale-105 active:scale-95"
                    >
                      Learn More
                      <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </>
  )
}

export default Product