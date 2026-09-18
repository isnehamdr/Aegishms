import React, { useState } from 'react';
import { motion } from 'framer-motion';
import GuestLayout from '@/Layouts/GuestLayout';
import {
  FaBriefcase,
  FaChartLine,
  FaUserShield,
} from 'react-icons/fa';
import SEO from '@/Components/SEO';

const Career = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  // 🔁 CONFIGURE THESE
  const siteUrl = 'https://aegishms.com/'; // Your live domain
  const canonicalUrl = `${siteUrl}/careers`;
  const logoUrl = `${siteUrl}/images/logo.png`; // Must be absolute URL
  const ogImageUrl = `${siteUrl}/images/og-careers.jpg`; // 1200x630 recommended

  const pageTitle = 'Careers | Aegis Software';
  const pageDescription =
    'Join Aegis Software — a leading provider of Hotel and Restaurant Management Software. Explore open positions in sales, business development, and more. Shape the future of hospitality with us!';

  const positions = [
    {
      id: 1,
      title: 'Sales Executive',
      openings: 1,
      responsibilities: [
        'Experience in sales/business development preferred',
        'Strong communication, negotiation & client-handling skills',
        'Hospitality/Hotel Technology experience will be an advantage',
        'Target-oriented and willing to travel',
      ],
      location: 'Nepal',
      type: 'Full-time',
      datePosted: '2024-06-01',
      validThrough: '2025-06-01',
      employmentType: 'FULL_TIME',
    },
    {
      id: 2,
      title: 'Sales Officer',
      openings: 2,
      responsibilities: [
        'Experience in sales/business development preferred',
        'Good communication and presentation skills',
        'Ability to develop new business and maintain client relationships',
        'Willingness to travel within Nepal',
      ],
      location: 'Nepal',
      type: 'Full-time',
      datePosted: '2024-06-01',
      validThrough: '2025-06-01',
      employmentType: 'FULL_TIME',
    },
    {
      id: 3,
      title: 'Sales Intern',
      openings: 2,
      responsibilities: [
        'Fresh graduates or final-year students are encouraged to apply',
        'Enthusiastic and eager to learn sales & business development',
        'Good communication and interpersonal skills',
        'Opportunity to learn and grow with a leading hospitality technology company',
      ],
      location: 'Nepal',
      type: 'Internship',
      datePosted: '2024-06-01',
      validThrough: '2025-06-01',
      employmentType: 'INTERN',
    },
  ];

  // Organization Schema
  const organizationSchema = {
    "@type": "Organization",
    "@id": `${siteUrl}#organization`,
    "name": "Aegis Software",
    "url": siteUrl,
    "logo": logoUrl,
    "sameAs": [
      "https://www.linkedin.com/company/aegis-software",
      "https://twitter.com/aegissoftware"
    ],
  };

  // Website Schema
  const websiteSchema = {
    "@type": "WebSite",
    "@id": `${siteUrl}#website`,
    "url": siteUrl,
    "name": "Aegis Software",
    "publisher": { "@id": `${siteUrl}#organization` }
  };

  // WebPage Schema
  const webpageSchema = {
    "@type": "WebPage",
    "@id": `${canonicalUrl}#webpage`,
    "url": canonicalUrl,
    "name": pageTitle,
    "description": pageDescription,
    "isPartOf": { "@id": `${siteUrl}#website` },
    "about": { "@id": `${siteUrl}#organization` },
  };

  // Breadcrumb Schema
  const breadcrumbSchema = {
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": siteUrl
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Careers",
        "item": canonicalUrl
      }
    ]
  };

  // JobPostings Schemas
  const jobPostingSchemas = positions.map((job) => {
    return {
      "@type": "JobPosting",
      "@id": `${canonicalUrl}#job-${job.id}`,
      "title": job.title,
      "description": `<p>${job.responsibilities.join('</p><p>')}</p>`,
      "datePosted": job.datePosted,
      "validThrough": job.validThrough,
      "employmentType": job.employmentType,
      "hiringOrganization": {
        "@type": "Organization",
        "name": "Aegis Software",
        "sameAs": siteUrl,
        "logo": logoUrl,
      },
      "jobLocation": {
        "@type": "Place",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": job.location,
          "addressCountry": "NP",
        },
      },
      "applicantLocationRequirements": {
        "@type": "Country",
        "name": "NP",
      },
      "occupationalCategory": "Sales, Business Development",
    };
  });

  // Combine all schemas
  const fullSchema = {
    "@context": "https://schema.org",
    "@graph": [
      organizationSchema,
      websiteSchema,
      webpageSchema,
      breadcrumbSchema,
      ...jobPostingSchemas
    ]
  };

  return (
    <GuestLayout>
      <SEO 
        title={pageTitle}
        description={pageDescription}
        keywords="careers, jobs, hotel software jobs, restaurant software careers, sales jobs Nepal, Aegis careers, software company jobs, sales executive, sales officer, sales intern"
        image={ogImageUrl}
        canonical={canonicalUrl}
        schema={fullSchema}
      />

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

      {/* Hero Banner */}
      <div className="aboutus mt-[68px] bg-[url('/images/half-circle-bg.png')] bg-bottom bg-no-repeat bg-cover flex flex-col justify-center items-center h-[50vh] text-white ">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-4xl sm:text-6xl font-semibold mb-8 leading-tight"
        >
          Careers
        </motion.h1>
        <nav aria-label="Breadcrumb">
          <ul className="st-breadcrumb flex items-center text-sm font-semibold uppercase bg-black/5 rounded-lg p-3">
            <li>
              <a href="/" className="text-white hover:text-white transition-colors" aria-label="Home">
                Home
              </a>
            </li>
            <li className="mx-2 text-gray-400">/</li>
            <li className="text-gray-300" aria-current="page">Careers</li>
          </ul>
        </nav>
      </div>

      {/* Our Values */}
      <section className="container max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-4xl sm:text-5xl font-bold mb-4 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#005c94] to-[#0EA5E9] text-start">
          Our Values
        </h2>
        <p className="text-lg text-gray-600 mb-8 sm:max-w-4xl">
          Aegis Software, a leading provider of Hotel and Restaurant Management Software, is hiring! Join our
          dynamic team and contribute to transforming the hospitality industry with innovative software solutions.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ValueCard
            icon={<FaBriefcase size={40} className="text-blue-500" />}
            title="Variety of Work in the Office"
            description="Engage in diverse projects that challenge your skills and foster creativity."
          />
          <ValueCard
            icon={<FaChartLine size={40} className="text-purple-500" />}
            title="Continuous Growth & Support"
            description="Benefit from ongoing professional development and a supportive team culture."
          />
          <ValueCard
            icon={<FaUserShield size={40} className="text-indigo-500" />}
            title="Personal Level Assistant"
            description="Receive dedicated assistance tailored to your individual needs."
          />
        </div>
      </section>

      {/* Open Positions */}
      <section className="container mx-auto px-6 py-16" aria-labelledby="open-positions-heading">
        <h2 id="open-positions-heading" className="text-4xl sm:text-5xl font-bold mb-4 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#005c94] to-[#0EA5E9] text-center">
          Open Positions
        </h2>
        <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
          Explore our current opportunities and find your perfect role
        </p>

        <div className="space-y-4 max-w-4xl mx-auto">
          {positions.map((position, index) => (
            <motion.div
              key={position.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full text-left bg-white border border-gray-200 hover:border-[#0EA5E9] px-6 py-5 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0EA5E9] flex justify-between items-center transition-all"
                aria-expanded={activeIndex === index}
                aria-controls={`job-content-${position.id}`}
              >
                <div>
                  <h3 className="font-semibold text-lg text-gray-900">
                    {position.title} – {position.openings} {position.openings > 1 ? 'Positions' : 'Position'}
                  </h3>
                  <div className="flex items-center mt-1 text-sm text-gray-500">
                    <span>{position.location}</span>
                    <span className="mx-2">•</span>
                    <span>{position.type}</span>
                  </div>
                </div>
                <span
                  className={`text-xl text-gray-500 transition-transform duration-300 ${
                    activeIndex === index ? 'rotate-180' : ''
                  }`}
                >
                  ▼
                </span>
              </button>

              <motion.div
                id={`job-content-${position.id}`}
                role="region"
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: activeIndex === index ? 'auto' : 0,
                  opacity: activeIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="p-6 bg-gray-50 border border-gray-200 border-t-0 rounded-b-lg">
                  <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                    {position.responsibilities.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      Hospitality Tech
                    </span>
                    <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      {position.type}
                    </span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="bg-gradient-to-r from-[#005c94] to-[#0EA5E9] text-white py-16">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Why Join Aegis Software?</h2>
          <p className="text-lg mb-8 opacity-90">
            Be part of a team that's revolutionizing the hospitality industry in Nepal and beyond. 
            Work with cutting-edge technology, collaborate with talented professionals, and grow your career 
            in a supportive environment.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
            <div>
              <div className="text-3xl font-bold mb-2">6+</div>
              <div className="text-sm opacity-80">Years of Innovation</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">500+</div>
              <div className="text-sm opacity-80">Hotels & Restaurants</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="text-sm opacity-80">Support Culture</div>
            </div>
          </div>
        </div>
      </section>
    </GuestLayout>
  );
};

const ValueCard = ({ icon, title, description }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300"
  >
    <div className="mb-4 text-2xl">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);

export default Career;