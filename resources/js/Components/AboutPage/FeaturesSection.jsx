import React from 'react';
import { motion } from 'framer-motion';
import {
  Shield,
  Clock,
  TrendingUp,
  ServerOff,
  Smartphone,
  ShieldCheck,
  Globe2,
  CalendarDays,
} from 'lucide-react';
import FeatureCard from './FeatureCard';

const FeaturesSection = () => {
  const features = [
    {
      icon: <Shield className="w-8 h-8 text-[#3b82f6]" />,
      title: 'Custom Solutions',
      description: 'Fully customizable software to meet your specific needs and ensure seamless operations.',
    },
    {
      icon: <Clock className="w-8 h-8 text-[#a855f7]" />,
      title: '24/7 Support',
      description: 'Round-the-clock customer support to address any issues or concerns you may have.',
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-[#6366f1]" />,
      title: 'Boost Your Revenue',
      description: 'Streamline operations, reduce costs, and enhance customer satisfaction to increase revenue.',
    },
    {
      icon: <ServerOff className="w-8 h-8 text-[#22c55e]" />,
      title: 'No Server Required',
      description: 'Cloud-based solution with no dependency on expensive servers or SQL licenses.',
    },
    {
      icon: <Smartphone className="w-8 h-8 text-[#f97316]" />,
      title: 'Free Mobile Apps',
      description: 'Owner reporting, POS ordering, and housekeeping apps included at no extra cost.',
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-[#ef4444]" />,
      title: 'Secure & Reliable',
      description: 'No malware/virus risk, OTP-based access, and IP control for maximum data protection.',
    },
    {
      icon: <Globe2 className="w-8 h-8 text-[#0ea5e9]" />,
      title: 'Local Integrations',
      description: 'Integrated with local booking systems like eSewa Hotels—completely free.',
    },
    {
      icon: <CalendarDays className="w-8 h-8 text-[#9333ea]" />,
      title: 'Dual Financial Year Support',
      description: 'All modules are compatible with both English and Nepali fiscal years.',
    },
  ];

  return (
    <section className="py-8 md:px-32 ">
      <div
        className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#005c94] to-[#0EA5E9] mb-12 text-center"
      >
        Why Choose AegisHMS/Restro?
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <FeatureCard key={feature.title} feature={feature} index={index} />
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;