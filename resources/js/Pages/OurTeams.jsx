import React from "react";
import { Link } from "@inertiajs/react";
import GuestLayout from "@/Layouts/GuestLayout";
import SEO from '@/Components/SEO';

// Team Data
const teamData = {
  firstRow: [
    { name: "Bhaskar Bhattarai", role: "Founder / CEO", image: "/images/teams/bhasker.jpeg" },
  ],
  secondRow: [
    { name: "Kiran Kafle", role: "Co-Founder / CTO", image: "/images/teams/kiran Kafle.jpeg" },
    { name: "Anil Bohara", role: "Co-Founder / Operation Head", image: "/images/teams/Anil Bohara.png" },
    { name: "Narayan Pantha", role: "Co-Founder / Admin Head", image: "/images/teams/Narayan Pantha.jpeg" },
  ],
  thirdRow: [
    { name: "Ashish Kumar Shrestha", role: "Project Manager", image: "/images/teams/Aashish.jpeg" },
    { name: "Sujan Dulal", role: "Head - Development", image: "/images/teams/Sujan Dulal.png" },
    { name: "Sandesh Manandhar", role: "Business Development Manager", image: "/images/teams/Sandesh Manandhar.jpg" },
    { name: "Prashant Dangol", role: "Head - Implementation", image: "/images/teams/Prashant Dongol.jpeg" },
    { name: "Narottam Kshetri", role: "Head - Support", image: "/images/teams/Narottam.png" },
  ],
  fourthRow: [
    // { name: "Ashish Shrestha", role: "Head - Development", image: "/images/user.png" },
    // { name: "Member 3", role: "Role 3", image: "/images/user.png" },
    // { name: "Member 4", role: "Role 4", image: "/images/user.png" },
    // { name: "Member 5", role: "Role 5", image: "/images/user.png" },
  ],
};

const OurTeams = () => {
  const siteUrl = 'https://www.aegishms.com';
  const canonicalUrl = `${siteUrl}/teams`;

  // Collect all team members for schema
  const allTeamMembers = [
    ...teamData.firstRow,
    ...teamData.secondRow,
    ...teamData.thirdRow,
    ...teamData.fourthRow,
  ].filter(member => member.name); // Filter out any empty entries

  // Organization schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteUrl}#organization`,
    "name": "Aegis Software",
    "url": siteUrl,
    "logo": `${siteUrl}/images/logo.png`,
    "foundingDate": "2020",
    "description": "Aegis Software develops AegisHMS/Restro – a complete Hotel and Restaurant Management System for businesses in Nepal and beyond.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "Nepal"
    }
  };

  // Create Person schema for each team member
  const teamMemberSchemas = allTeamMembers.map((member, index) => ({
    "@type": "Person",
    "@id": `${siteUrl}/teams#person-${index}`,
    "name": member.name,
    "jobTitle": member.role,
    "worksFor": {
      "@type": "Organization",
      "@id": `${siteUrl}#organization`,
      "name": "Aegis Software"
    },
    "image": member.image.startsWith('http') ? member.image : `${siteUrl}${member.image}`,
    "url": canonicalUrl
  }));

  // Breadcrumb schema
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
        "name": "Our Teams",
        "item": canonicalUrl
      }
    ]
  };

  // Website schema
  const websiteSchema = {
    "@type": "WebSite",
    "@id": `${siteUrl}#website`,
    "url": siteUrl,
    "name": "Aegis Software",
    "publisher": { "@id": `${siteUrl}#organization` }
  };

  // Combine all schemas
  const fullSchema = {
    "@context": "https://schema.org",
    "@graph": [
      organizationSchema,
      websiteSchema,
      breadcrumbSchema,
      ...teamMemberSchemas
    ]
  };

  const renderRow = (members) => (
    <div className="flex justify-center mb-12 flex-wrap gap-4">
      {members.map((member, i) => (
        <TeamCard key={i} member={member} />
      ))}
    </div>
  );

  return (
    <GuestLayout>
      {/* SEO Meta Tags using your SEO component */}
      <SEO 
        title="Our Team | Aegis Software Development Team Nepal"
        description="Meet the expert team behind Aegis HMS. Our dedicated developers, designers, and hospitality specialists work together to create Nepal's best hotel management software."
        keywords="Aegis team, software development team Nepal, hotel management experts, Nepali developers, Bhaskar Bhattarai, Kiran Kafle, Anil Bohara"
        image={`${siteUrl}/images/og-teams.jpg`}
        canonical={canonicalUrl}
        schema={fullSchema}
      />

      {/* Banner Section */}
      <div
        className="relative mt-[68px] h-[50vh] flex flex-col justify-center items-center bg-bottom bg-no-repeat bg-cover text-white"
        style={{ backgroundImage: "url('/images/half-circle-bg.png')" }}
      >
        <h1 className="text-3xl sm:text-5xl font-semibold mb-8 leading-tight bg-clip-text text-transparent bg-white pb-2">
          Our Teams
        </h1>
        <ul className="st-breadcrumb flex items-center text-sm font-semibold uppercase bg-black/5 rounded-lg p-3">
          <li><Link href="/" className="text-white hover:text-white transition-colors">Home</Link></li>
          <li className="mx-2 text-gray-400">/</li>
          <li className="text-gray-300">Our Teams</li>
        </ul>
      </div>

      {/* Teams Section */}
      <div className="container mx-auto px-4 py-20 max-w-7xl">
        {renderRow(teamData.firstRow)}
        {renderRow(teamData.secondRow)}
        {renderRow(teamData.thirdRow)}
      </div>
    </GuestLayout>
  );
};

// TeamCard Component (smaller size)
const TeamCard = ({ member }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 w-60 sm:w-44 md:w-56 flex flex-col gap-2 items-center">
      <img
        src={member.image}
        alt={member.name}
        className="w-24 h-20 sm:w-32 sm:h-28 object-top object-cover"
        loading="lazy"
      />
      <h3 className="text-md font-semibold text-gray-800 text-center">{member.name}</h3>
      <p className="text-xs text-gray-500 text-center">{member.role}</p>
    </div>
  );
};

export default OurTeams;