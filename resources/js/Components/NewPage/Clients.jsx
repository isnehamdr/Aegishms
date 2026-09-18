import React from 'react'
import { motion } from 'framer-motion';
import { Link } from '@inertiajs/react';

// Chain Properties Logos
const chainPropertiesLogos = [
    {id:5, logo:"/images/clients/aloft_kathmandu.jpeg", name: "Aloft Kathmandu"},
        { id: 2, logo: "/images/clients/best.png", name: "Best Western Plus" },

    { id: 1, logo: "/images/clients/dustin.svg", name: "Dustin Thani" },
        { id: 5, logo: "/images/clients/lords.jpg", name: "Lords Hotel and Resort" },

    { id: 3, logo: "/images/clients/re.png", name: "Regenta" },
    { id: 4, logo: "/images/clients/shinta.jpg", name: "Shinta" },
    
];

// Five Star Hotels & Resorts Logos
const fiveStarLogos = [
    { id: 1, logo: "/images/clients/chandragiri2.jpg", name: "Chandragiri" },
    { id: 2, logo: "/images/clients/himalaya.jpg", name: "Hotel Himalaya" },
   
    
    { id: 5, logo: "/images/clients/pg.png", name: "Pokhara Grand" },
    { id: 6, logo: "/images/clients/siddhartha2.jpg", name: "Siddhartha Villas" },
     { id: 3, logo: "/images/clients/soaltee.jpg", name: "Soaltee" },
    { id: 4, logo: "/images/clients/malla.png", name: "The Malla Hotel" },
    { id: 7, logo: "/images/clients/tiger.jpg", name: "Tiger Palace" },
];

// Exclusive Hotels & Resorts Logos
const exclusiveLogos = [
    { id: 5, logo: "/images/clients/basera.png", name: "Basera" },
    { id: 1, logo: "/images/clients/kavya.avif", name: "Kavya" },
     { id: 6, logo: "/images/clients/hp.png", name: "Hotel Central Plaza" },
     { id: 4, logo: "/images/clients/shinta.jpg", name: "Hotel Shinta" },
      { id: 3, logo: "/images/clients/terrace.jpg", name: "The Terrace" },
    { id: 2, logo: "/images/clients/Varnabas.jpg", name: "Varnabas" },
   
    
    
   
];

// Group Hotels & Resorts Logos
const groupLogos = [
    { name: "Ila Hotels and Resorts", logo: "images/clients/ila.png" },

      { name: "KGH Group", logo: "images/clients/kgh.jpg" },
      { name: "Landmark Hotel annd Resorts ", logo: "images/clients/landmark.png" },

      { name: "Roadhouse", logo: "images/clients/road.png" },

      { name: "Siddhartha Hospitality", logo: "images/clients/sidd.png" },
      { name: "sherpa hospitality", logo: "images/clients/shg.jpg" },
      { name: "Soaltee", logo: "images/clients/soalte.png" },

];

// Regular clients logos
const logos = [
    "/images/clients/1905.jpg",
    "/images/clients/britishcs.jpg",
    "/images/clients/chandragiri.jpg",
    "/images/clients/kgh.jpg",
    "/images/clients/roadhouse.jpg",
    "/images/clients/soaltee.jpg",
    "/images/clients/tiger.png",
    "/images/clients/malla.png",
    "/images/soltee1.png",
    "/images/soltee2.png",
    "/images/soltee3.png",
    "/images/soltee4.png",
    "/images/clients/amala.png",
    "/images/clients/basera.png",
    "/images/clients/bayberryhotel.png",
    "/images/clients/bhairahawa.png",
    "/images/clients/bodhi villa.jpg",
    "/images/clients/dream land.png",
];

// Category Section Component
const CategorySection = ({ title, items, delay = 0 }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay, duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-16 max-w-7xl mx-auto w-full"
        >
            <div className="text-center mb-8">
                <h3 className="text-xl sm:text-2xl font-bold text-black sm:text-white mb-2">
                    {title}
                </h3>
                <div className="w-20 h-0.5 bg-gradient-to-r from-[#60A5FA] to-[#3B82F6] mx-auto rounded-full"></div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {items.map((item, index) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.03, duration: 0.4 }}
                        viewport={{ once: true }}
                        className="relative w-full h-28 bg-white rounded-2xl shadow-lg overflow-hidden group cursor-pointer hover:shadow-2xl transition-all duration-300"
                    >
                        <div className="absolute top-[3px] left-[3px] right-[3px] bottom-[3px] bg-white rounded-2xl shadow-md group-hover:bg-transparent transition-colors duration-300 flex items-center justify-center">
                            <img
                                src={item.logo}
                                alt={item.name}
                                className="w-20 h-20 object-contain transition-transform duration-300 group-hover:scale-110"
                            />
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

const Clients = () => {
    return (
        <div className="relative py-10 sm:py-28 overflow-hidden">
            <div
                className="absolute inset-0 bg-cover bg-no-repeat bg-center z-0"
                style={{ backgroundImage: "url('/images/modified_06.png')", backgroundPosition: "left" }}
            ></div>
            
            <section className="clients-section relative z-10 flex flex-col justify-center items-center h-auto px-4">
                <div className="text-center mb-12 max-w-7xl mx-auto w-full">
                    <h2 className="text-lg uppercase text-black sm:text-white font-semibold tracking-wider mb-4">
                        Valued Partners
                    </h2>
                    <motion.h2
                        className="text-4xl sm:text-5xl font-bold tracking-tight mb-8 text-black sm:text-white"
                        initial={{ opacity: 0, y: -50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        Our Clients
                    </motion.h2>
                  
                </div>

                {/* Chain Properties */}
                <CategorySection 
                    title="Chain Properties" 
                    items={chainPropertiesLogos} 
                    delay={0.1}
                />

                {/* Five Star Hotels & Resorts */}
                <CategorySection 
                    title="Five Star Hotels & Resorts" 
                    items={fiveStarLogos} 
                    delay={0.2}
                />

                {/* Exclusive Hotels & Resorts */}
                <CategorySection 
                    title="Exclusive Hotels & Resorts" 
                    items={exclusiveLogos} 
                    delay={0.3}
                />

                {/* Group Hotels & Resorts */}
                <CategorySection 
                    title="Group Hotels & Resorts" 
                    items={groupLogos} 
                    delay={0.4}
                />

                {/* All Clients Grid */}
                <div className="clients-grid w-full max-w-7xl mx-auto mt-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="text-center mb-12"
                    >
                        <h3 className="text-2xl sm:text-3xl font-bold text-black sm:text-white mb-3">
                            Other Clients
                        </h3>
                        <div className="w-24 h-1 bg-gradient-to-r from-[#60A5FA] to-[#3B82F6] mx-auto rounded-full"></div>
                    </motion.div>
                    
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
                        {logos.slice(0, 18).map((logoUrl, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.02, duration: 0.4 }}
                                viewport={{ once: true }}
                                className="relative w-full h-28 bg-white rounded-2xl shadow-lg overflow-hidden group cursor-pointer hover:shadow-2xl transition-all duration-300"
                            >
                                <div className="absolute top-[3px] left-[3px] right-[3px] bottom-[3px] bg-white rounded-2xl shadow-md group-hover:bg-transparent transition-colors duration-300 flex items-center justify-center">
                                    <img
                                        src={logoUrl}
                                        alt={`Client Logo ${index + 1}`}
                                        className="w-20 h-20 object-contain transition-transform duration-300 group-hover:scale-110"
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
                  <Link
                        href="/clients"
                        className="px-10 py-4 mt-12 rounded-full text-white font-medium bg-gradient-to-r from-[#60A5FA] to-[#3B82F6] shadow-lg hover:scale-105 transition-transform inline-block"
                    >
                        View All
                    </Link>
            </section>
        </div>
    );
};

export default Clients;