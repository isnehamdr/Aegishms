import React from 'react';
import { Head } from '@inertiajs/react';

const SEO = ({ 
  title, 
  description, 
  keywords, 
  image, 
  canonical,
  noIndex = false,
  publishedTime,
  modifiedTime,
  schema,
  children 
}) => {
  const siteUrl = 'https://www.aegishms.com';
  const siteName = 'Aegis HMS';
  const twitterHandle = '@aegishms';
  
  // Default values
  const metaTitle = title || 'Aegis HMS | Hotel Management System in Nepal';
  const metaDescription = description || 'Aegis HMS - Complete hotel management system for hotels, resorts, and restaurants in Nepal. Manage bookings, inventory, billing, and more.';
  const metaImage = image || `${siteUrl}/images/og-home.jpg`;
  const canonicalUrl = canonical || (typeof window !== 'undefined' ? window.location.href : siteUrl);

  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{metaTitle}</title>
      <meta name="title" content={metaTitle} />
      <meta name="description" content={metaDescription} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content={noIndex ? 'noindex, nofollow' : 'index, follow'} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={metaImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="en_NP" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={twitterHandle} />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={metaImage} />

      {/* Article Meta */}
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}

      {/* Schema.org JSON-LD */}
      {schema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      )}
      
      {children}
    </Head>
  );
};

export default SEO;