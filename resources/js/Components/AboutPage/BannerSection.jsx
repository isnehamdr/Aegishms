import React from 'react';
import { motion } from 'framer-motion';
import Breadcrumb from './Breadcrumb';

const BannerSection = () => {
  return (
    <>
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
        className="aboutus mt-[68px] bg-[url('/images/half-circle-bg.png')] bg-bottom bg-no-repeat bg-cover flex flex-col justify-center items-center h-[50vh] text-white"
      >
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-4xl sm:text-6xl font-semibold mb-8 leading-tight"
        >
          About Us
        </motion.h1>
        <Breadcrumb />
      </div>
    </>
  );
};

export default BannerSection;