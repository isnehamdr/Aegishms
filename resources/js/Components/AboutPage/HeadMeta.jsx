import React from 'react';
import { Head } from '@inertiajs/react';

const HeadMeta = ({ siteUrl }) => {
  const ogImageUrl = `${siteUrl}/images/og-about-us.jpg`;
  const logoUrl = `${siteUrl}/images/logo.png`;

  const schemaData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${siteUrl}#organization`,
        name: 'Aegis Software',
        url: siteUrl,
        logo: logoUrl,
        foundingDate: '2020',
        description: 'Aegis Software develops AegisHMS/Restro – a complete Hotel and Restaurant Management System for businesses in Nepal and beyond.',
        address: {
          '@type': 'PostalAddress',
          addressCountry: 'Nepal',
        },
      },
      {
        '@type': 'SoftwareApplication',
        '@id': `${siteUrl}/software#aegis-hms-restro`,
        name: 'AegisHMS / Restro',
        url: `${siteUrl}/software`,
        description: 'A complete cloud-based and on-premise Hotel & Restaurant Management Software for businesses in Nepal.',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web, Android, iOS',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'NPR',
          availability: 'https://schema.org/InStock',
          url: `${siteUrl}/pricing`,
        },
        author: {
          '@type': 'Organization',
          name: 'Aegis Software',
          url: siteUrl,
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.8',
          reviewCount: '120',
        },
      },
      {
        '@type': 'WebPage',
        '@id': `${siteUrl}/about#webpage`,
        url: `${siteUrl}/about`,
        name: 'About Us | Aegis Software',
        description: 'Learn about Aegis Software – creators of AegisHMS/Restro, Nepal\'s leading cloud-based Hotel & Restaurant Management Software since 2020.',
        isPartOf: { '@id': `${siteUrl}#website` },
        about: { '@id': `${siteUrl}#organization` },
        datePublished: '2020-01-01',
        dateModified: new Date().toISOString().split('T')[0],
      },
      {
        '@type': 'WebSite',
        '@id': `${siteUrl}#website`,
        url: siteUrl,
        name: 'Aegis Software',
        publisher: { '@id': `${siteUrl}#organization` },
      },
    ],
  };

  return (
    <Head title="About Us | Aegis Software">
      <meta
        name="description"
        content="Learn about Aegis Software – creators of AegisHMS/Restro, Nepal's leading cloud-based Hotel & Restaurant Management Software since 2020."
      />
      <link rel="canonical" href={`${siteUrl}/about`} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${siteUrl}/about`} />
      <meta property="og:title" content="About Us | Aegis Software" />
      <meta
        property="og:description"
        content="Learn about Aegis Software – creators of AegisHMS/Restro, Nepal's leading cloud-based Hotel & Restaurant Management Software since 2020."
      />
      <meta property="og:image" content={ogImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="en_NP" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={`${siteUrl}/about`} />
      <meta name="twitter:title" content="About Us | Aegis Software" />
      <meta
        name="twitter:description"
        content="Learn about Aegis Software – creators of AegisHMS/Restro, Nepal's leading cloud-based Hotel & Restaurant Management Software since 2020."
      />
      <meta name="twitter:image" content={ogImageUrl} />

      {/* Schema.org Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
    </Head>
  );
};

export default HeadMeta;