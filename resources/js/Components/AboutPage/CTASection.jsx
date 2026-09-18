import React from 'react';
import { motion } from 'framer-motion';

const CTASection = () => {
  return (
    <div className="py-20 bg-[#005c94] text-white">
      <div className="px-2 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-4xl sm:text-5xl font-bold text-white mb-6"
        >
          Ready to Transform Your Business?
        </motion.h2>
        <p className="text-lg mb-8">
          Join thousands of businesses already benefiting from AegisHMS/Restro.
        </p>
        <a href="/contact" className="inline-block">
          <button
            className="px-10 py-4 rounded-full text-white font-medium bg-gradient-to-r from-[#60A5FA] to-[#3B82F6] shadow-lg transition-transform transform hover:scale-105 hover:bg-gradient-to-r hover:from-[#3B82F6] hover:to-[#60A5FA]"
            aria-label="Contact us to get started"
          >
            Let's Go
          </button>
        </a>
      </div>
    </div>
  );
};

export default CTASection;