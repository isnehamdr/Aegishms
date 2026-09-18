import React from 'react';
import { FaCircle } from 'react-icons/fa';

export default function FeatureStrip() {
  return (
    <div className="overflow-hidden bg-[#005c94] h-16 flex items-center justify-center px-32 lg:mx-[-128px]">
      <div className="flex items-center animate-marquee whitespace-nowrap">
        {[...Array(2)].map((_, i) => (
          <React.Fragment key={i}>
            <FaCircle className="text-xs text-white mx-2 inline-flex" />
            <span className="mx-2 text-2xl text-white">Front Office</span>

            <FaCircle className="text-xs text-white mx-2 inline-flex" />
            <span className="mx-2 text-2xl text-white">Point of Sale</span>

            <FaCircle className="text-xs text-white mx-2 inline-flex" />
            <span className="mx-2 text-2xl text-white">Housekeeping</span>

            <FaCircle className="text-xs text-white mx-2 inline-flex" />
            <span className="mx-2 text-2xl text-white">Payroll</span>

            <FaCircle className="text-xs text-white mx-2 inline-flex" />
            <span className="mx-2 text-2xl text-white">Banquet Module</span>

            <FaCircle className="text-xs text-white mx-2 inline-flex" />
            <span className="mx-2 text-2xl text-white">Costing Module</span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}