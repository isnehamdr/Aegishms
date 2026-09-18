import React from 'react';
import { motion } from 'framer-motion';

const FeatureCard = ({ feature, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.15 * index }}
      className="bg-white rounded-2xl shadow-sm border border-zinc-200 p-6 hover:shadow-md transition"
    >
      <div className="bg-zinc-50 rounded-xl p-3 w-fit mb-4">{feature.icon}</div>
      <h3 className="text-lg font-semibold text-zinc-900 mb-2">{feature.title}</h3>
      <p className="text-zinc-600 text-sm leading-relaxed">{feature.description}</p>
    </motion.div>
  );
};

export default FeatureCard;