import React from 'react';
import { motion } from 'framer-motion';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const WelcomeSection = () => {
  return (
    <motion.div
      variants={fadeIn}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.6, delay: 0.2 }}
      className="py-8 sm:pt-16" // Reduced padding on small screens
    >
      <div className="px-4 sm:px-6 text-center"> 
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#005c94] to-[#0EA5E9] mb-4 sm:mb-6 leading-tight sm:leading-[1.2] pb-2"
        >
          Welcome to AegisHMS / Restro
        </motion.h2>
        <p className="text-zinc-600 max-w-4xl mx-auto leading-relaxed text-base sm:text-lg px-2 sm:px-0">
          AegisHMS/Restro is a complete Hotel/Restaurant Management Software designed to help businesses streamline operations, boost revenue, and reduce manpower costs. We offer both server-based and cloud-based solutions tailored to meet your needs.
        </p>
      </div>
    </motion.div>
  );
};

export default WelcomeSection;