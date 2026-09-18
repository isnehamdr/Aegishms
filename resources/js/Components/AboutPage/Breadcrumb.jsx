import React from 'react';

const Breadcrumb = () => {
  return (
    <ul className="st-breadcrumb flex items-center text-sm font-semibold uppercase bg-black/5 rounded-lg p-3">
      <li>
        <a href="/" className="text-white hover:text-white transition-colors" aria-label="Home">
          Home
        </a>
      </li>
      <li className="mx-2 text-gray-400">/</li>
      <li className="active">
        <span className="text-gray-300">About Us</span>
      </li>
    </ul>
  );
};

export default Breadcrumb;