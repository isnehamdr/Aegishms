import { motion } from 'framer-motion';
import { Link } from '@inertiajs/react';

export default function HeroSection() {
  return (
    <main className="w-full page-transition  py-24 overflow-hidden bg-gradient-to-b from-[#005C94] to-slate-950"
    
    >
      <div className=" px-4 sm:px-24">
        <div className="flex flex-col items-center justify-center relative z-10 space-y-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center w-full max-w-4xl"
          >
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-2xl sm:text-6xl font-semibold mb-8 md:pt-24 leading-tight bg-clip-text text-transparent bg-white"
            >
              EMPOWERING HOSPITALITY MANAGEMENT
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 1 }}
              className=" text-md text-white mb-12  max-w-4xl mx-auto leading-relaxed"
            >
              AegisHMS is a complete Hotel/Restaurant Management Software designed to help businesses streamline operations, boost revenue, and reduce manpower costs. We offer both server-based and cloud-based solutions tailored to meet your needs.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              <Link
                href="/contact"
                className="sm:px-8 sm:py-4 p-4 rounded-md text-white font-medium bg-gradient-to-r from-[#005c94] to-[#0EA5E9] shadow-lg transition-all duration-300 transform hover:scale-105 hover:bg-gradient-to-r hover:from-[#0EA5E9] hover:to-[#005c94] active:scale-95"
                aria-label="Book a demo with Aegis HMS"
              >
                Book a Demo
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="flex justify-center w-full"
          >
            <img
              src="/images/softwaree.webp"
              alt="Aegis HMS - Hotel and Restaurant Management Software Dashboard"
              className="w-full px-4 mt-12 scale-110 object-contain rounded-lg"
            />
          </motion.div>
        </div>
      </div>
    </main>
  );
}