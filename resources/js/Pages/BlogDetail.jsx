import React, { useEffect, useRef, useState } from 'react';
import { usePage } from '@inertiajs/react';
import { Head } from '@inertiajs/react';
import GuestLayout from '@/Layouts/GuestLayout';

const BlogDetail = () => {
  const { url } = usePage();
  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const heroRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);

  const domain = 'https://aegishms.com/'; // 🔴 REPLACE WITH YOUR DOMAIN
  const slug = url.split('/blogs/')[1] || '';

  const posts = [

    {
      id: 7,
      title: 'Aegis Software Achieves ISO/IEC 27001 Certification',
      date: '2026-08-03',
      displayDate: 'August 3, 2026',
      readTime: '5 min read',
      content: `We are proud to announce that Aegis Software Pvt. Ltd. has officially achieved ISO/IEC 27001 certification, an important milestone in our ongoing commitment to information security and customer trust.

For Aegis Software, this achievement is more than a certificate. It reflects the disciplined processes, shared responsibility, and continuous improvement needed to protect information in a changing digital landscape.

**What ISO/IEC 27001 Certification Means**

ISO/IEC 27001 is an internationally recognized standard for information security management systems (ISMS). It provides a structured framework for identifying information-security risks, applying appropriate controls, monitoring their effectiveness, and continually improving how information is protected.

Achieving certification demonstrates that information security is managed through defined policies, processes, responsibilities, and risk-based controls rather than isolated technical measures.

**Why Information Security Matters in Hospitality**

Hotels, restaurants, and hospitality groups depend on technology to manage reservations, operations, payments, reporting, and guest services. These connected workflows make the confidentiality, integrity, and availability of information essential to reliable daily operations.

As a hospitality technology provider, we understand the responsibility that comes with supporting these business-critical processes. Our ISO/IEC 27001 certification reinforces our focus on managing risk responsibly and building secure practices into the way we develop, deliver, and support our solutions.

**What This Milestone Reinforces**

**A Risk-Based Approach to Security**

Information-security risks are identified, assessed, treated, and reviewed through a consistent management framework.

**Stronger Protection of Information**

Policies and controls support the confidentiality, integrity, and availability of customer, business, and operational information.

**Clear Accountability and Security Awareness**

Defined responsibilities, documented processes, and ongoing awareness help make security a shared priority across our organization.

**Preparedness and Operational Resilience**

Structured incident management, continuity planning, and regular review help strengthen our ability to respond to disruption and maintain dependable services.

**Continuous Improvement**

ISO/IEC 27001 is not a one-time exercise. It requires ongoing monitoring, evaluation, review, and improvement as risks, technologies, and business needs evolve.

**Innovation Built on Trust**

At Aegis Software, we believe innovation must be built on a foundation of trust. This certification strengthens our promise to provide secure, world-class technology solutions that help hospitality businesses operate confidently and serve their guests effectively.

We extend our heartfelt thanks to our dedicated team, valued clients, partners, and well-wishers who have been part of this journey. This achievement belongs to all of us, and it motivates us to keep raising the standard.

**Securing Information. Building Trust. Driving Innovation.**`,
      image: '/images/aegis_blog_iso.jpeg',
      category: 'Information Security',
      slug: 'aegis-software-achieves-iso-iec-27001-certification',
      author: 'Aegis Team',
      authorUrl: `${domain}/team`,
      tags: ['ISO/IEC 27001', 'Information Security', 'Cybersecurity', 'Risk Management', 'Hospitality Technology']
    },

    {
      id: 1,
      title: "The Importance of Inventory Management in Hospitality and How Aegis HMS Can Optimize Your Operations",
      date: "2025-01-01", // ISO format for schema
      displayDate: "January 1, 2025",
      readTime: "5 min read",
      content: `In the hospitality industry, effective inventory management is crucial to maintaining operational efficiency, controlling costs, and ensuring guest satisfaction. From restaurants to hotels, managing inventory properly can make the difference between profit and loss.

      **Why Inventory Management Matters**

      Poor inventory management leads to several costly problems: overstocking ties up capital and increases waste, while understocking results in disappointed guests and lost revenue. Additionally, without proper tracking, theft and spoilage can go unnoticed, further eroding profitability.

      **The Aegis HMS Solution**

      Aegis HMS offers a comprehensive inventory management solution specifically designed for the hospitality industry. Our system provides real-time stock tracking, automated reorder alerts, and detailed consumption analytics that help you make informed decisions.

      **Key Features:**
      - Real-time stock level monitoring
      - Automated procurement workflows
      - Vendor management and purchase order tracking
      - Cost analysis and wastage reduction tools
      - Integration with POS and kitchen systems

      **Benefits You'll Experience:**
      With Aegis HMS, hotels and restaurants typically see a 20-30% reduction in inventory costs, improved cash flow, and enhanced guest satisfaction due to consistent product availability.

      **Getting Started**

      Implementing effective inventory management doesn't have to be complex. Our team provides comprehensive training and ongoing support to ensure your staff can maximize the system's benefits from day one.`,
      image: "/images/Modules/inventory.jpg",
      category: "Technology",
      slug: "importance-inventory-management-hospitality-aegis-hms-optimization",
      author: "Aegis Team",
      authorUrl: `${domain}/team`,
      tags: ["Inventory", "HMS", "Hospitality", "Technology"]
    },
    {
      id: 2,
      title: "Improving Sustainability in the Hospitality Sector: A New Chapter for Environmentally Friendly Approaches",
      date: "2025-02-15",
      displayDate: "February 15, 2025",
      readTime: "4 min read",
      content: `The hospitality industry is experiencing a green revolution. As environmental consciousness grows among travelers, businesses are adopting sustainable practices that benefit both the planet and their bottom line.

      **The Sustainability Imperative**

      Modern guests increasingly choose accommodations and dining establishments based on their environmental policies. This shift represents both a challenge and an opportunity for hospitality businesses.

      **Key Areas for Sustainable Implementation:**

      **Energy Efficiency**: Smart thermostats, LED lighting, and energy-efficient appliances can reduce consumption by up to 40% while maintaining guest comfort.

      **Waste Reduction**: Implementing comprehensive recycling programs, composting organic waste, and reducing single-use plastics significantly impacts environmental footprint.

      **Local Sourcing**: Partnering with local farmers and suppliers reduces transportation emissions while supporting the community and often improving food quality.

      **Water Conservation**: Low-flow fixtures, greywater systems, and smart irrigation can reduce water usage by 30-50%.

      **Technology's Role**

      Modern HMS platforms like Aegis can track and optimize resource usage, providing detailed analytics on energy consumption, waste patterns, and supplier sustainability metrics.

      **The Business Case**

      Sustainable practices often lead to cost savings through reduced utility bills, waste disposal fees, and operational efficiencies. Additionally, they attract environmentally conscious guests and can command premium pricing.

      **Looking Forward**

      The future of hospitality is undoubtedly green. Properties that invest in sustainability now will be better positioned for long-term success.`,
      image: "/images/Modules/1.jpg",
      category: "Sustainability",
      slug: "improving-sustainability-hospitality-environmentally-friendly-approaches",
      author: "Environmental Team",
      authorUrl: `${domain}/team`,
      tags: ["Sustainability", "Green Practices", "Hospitality", "Environment"]
    },
    {
      id: 3,
      title: "Redefining Guest Experiences via Aegis HMS: A Transformation of Hospitality",
      date: "2025-03-10",
      displayDate: "March 10, 2025",
      readTime: "6 min read",
      content: `In today's competitive hospitality landscape, exceptional guest experiences aren't just appreciated—they're expected. Aegis HMS is revolutionizing how properties deliver personalized, seamless, and memorable experiences.

      **The Experience Economy**

      We've moved beyond the service economy into the experience economy, where guests seek unique, personalized interactions that create lasting memories.

      **Digital Transformation in Action**

      **Seamless Check-in/Check-out**: Mobile check-in, digital room keys, and express checkout eliminate friction points and reduce wait times.

      **Personalized Service**: Guest preference tracking, automated service requests, and predictive analytics enable staff to anticipate needs before they're expressed.

      **Real-time Communication**: Integrated messaging systems allow guests to communicate with staff instantly, whether requesting amenities or reporting issues.

      **Data-Driven Insights**: Comprehensive analytics help identify service gaps and opportunities for improvement.

      **The Technology Behind the Magic**

      Aegis HMS integrates multiple touchpoints into a unified platform:
      - Property Management System (PMS)
      - Customer Relationship Management (CRM)
      - Point of Sale (POS) systems
      - Mobile applications
      - IoT device integration

      **Measuring Success**

      Properties using Aegis HMS typically see:
      - 25% improvement in guest satisfaction scores
      - 40% reduction in service request response time
      - 30% increase in repeat bookings
      - Enhanced online review ratings

      **Implementation Strategy**

      Successful digital transformation requires careful planning, staff training, and gradual rollout. Our implementation team ensures minimal disruption while maximizing adoption.

      **Future Innovations**

      Emerging technologies like AI-powered chatbots, voice assistants, and augmented reality will further enhance guest experiences in the coming years.`,
      image: "/images/Modules/hms.jpg",
      category: "Guest Experience",
      slug: "redefining-guest-experiences-aegis-hms-transformation-hospitality",
      author: "Guest Experience Team",
      authorUrl: `${domain}/team`,
      tags: ["Guest Experience", "HMS", "Digital Transformation", "Technology"]
    },
    {
      id: 4,
      title: "Aegis Pulse247: Transforming Multi-Property Reporting for Hospitality",
      date: "2025-03-15",
      displayDate: "March 15, 2025",
      readTime: "6 min read",
      content: `Aegis Pulse247 is redefining how hospitality businesses track performance, manage operations, and make informed decisions. Designed for hotels, restaurants, and multi-property groups, it provides real-time insights that drive efficiency and profitability.

      **Complete Visibility Across Properties**

      Hospitality leaders often struggle with fragmented data and inconsistent reporting. Aegis Pulse247 solves this challenge by bringing revenue, occupancy, sales, expenses, and operational metrics into a single unified dashboard—updated in real time.

      **Why Pulse247 Stands Out**

      **Real-Time Analytics**: Receive live performance updates across all outlets, enabling rapid response and strategic planning.

      **Seamless Aegis HMS Integration**: Data flows automatically from Aegis HMS, ensuring accuracy without duplication or manual errors.

      **Unified Dashboard**: Clean, intuitive charts and KPIs present your hotel, restaurant, and trading operations at a glance.

      **Smarter Decision-Making**: Compare properties, identify trends, and uncover new revenue opportunities effortlessly.

      **Increased Efficiency**: Automated reporting minimizes manual work, saving valuable time across departments.

      **Benefits for Hospitality Businesses**

      Whether you manage a boutique hotel or a large multi-property chain, Pulse247 empowers your team to:

      - Strengthen data-driven decision-making
      - Improve operational efficiency
      - Enhance overall guest satisfaction
      - Boost profitability with accurate insights

      **Built for Modern Hospitality**

      With its seamless integration and powerful analytics, Aegis Pulse247 supports leaders in navigating today's competitive hospitality landscape. It transforms scattered information into actionable intelligence—helping teams stay focused, agile, and profitable.`,
      image: "/images/Modules/hms.jpg",
      category: "Hospitality Analytics",
      slug: "aegis-pulse247-transforming-multi-property-reporting-hospitality",
      author: "Analytics & Insights Team",
      authorUrl: `${domain}/team`,
      tags: ["Pulse247", "Analytics", "Multi-Property Reporting", "Hospitality", "HMS Integration"]
    },
    {
      id: 5,  // New KDS blog
      title: 'How AegisHMS Kitchen Display System (KDS) Helps Restaurants Run Smarter',
      date: '2025-05-28',
      displayDate: 'May 28, 2025',
      readTime: '4 min read',
      content: `In every busy restaurant kitchen, speed, accuracy, and communication matter. A missed order, delayed preparation, or unclear instruction can directly affect guest satisfaction.

That's where the AegisHMS Kitchen Display System (KDS) comes in.

**What is a Kitchen Display System?**

A Kitchen Display System (KDS) replaces traditional paper kitchen order tickets with a digital screen inside the kitchen. Orders placed from POS are instantly displayed on the kitchen screen, helping chefs and kitchen staff view, manage, and prepare orders in real time.

With AegisHMS KDS, every order moves seamlessly from POS to Kitchen without manual handover.

**Key Features of AegisHMS KDS**

**1. Real-Time Order Display**

Orders entered at POS are instantly visible in the kitchen display without printing KOTs.

**2. Faster Kitchen Communication**

No waiting for printed tickets or verbal communication between service and kitchen teams.

**3. Order Status Tracking**

Kitchen staff can update order progress:
- New Order
- Preparing
- Ready to Serve
- Served

This helps service staff know exactly when the order is ready.

**4. Reduced Errors**

Clear digital display minimizes:
- missed items
- duplicate preparation
- incorrect modifiers
- lost KOT slips

**5. Better Speed of Service**

Faster kitchen coordination leads to quicker table service and improved guest experience.

**6. Paperless Kitchen Operation**

Reduces dependency on printers and paper KOTs while improving operational efficiency.

**7. Works with Aegis POS**

Fully integrated with Aegis POS, allowing smooth communication between cashier, service team, and kitchen.`,
      image: '/images/kds.PNG',
      category: 'Technology',
      slug: 'aegishms-kitchen-display-system-helps-restaurants-run-smarter',
      author: "Aegis Team",
      authorUrl: `${domain}/team`,
      tags: ["Kitchen Display System", "KDS", "Restaurant Technology", "POS Integration", "Hospitality"]
    },
    {
  id: 6,
  title: 'How AegisHMS Loyalty & Membership Module Helps Build Lasting Guest Relationships',
  date: '2025-06-04',
  displayDate: 'June 4, 2025',
  readTime: '4 min read',
  content: `In today's competitive hospitality landscape, guest retention is key to sustainable growth.

The AegisHMS Loyalty & Membership Module empowers hotels and restaurants to create meaningful guest engagement through structured rewards, tier-based memberships, and real-time tracking.
By turning every transaction into an opportunity for loyalty, businesses can drive repeat visits, increase spending, and enhance long-term customer value.

**What is a Loyalty & Membership Module?**
A Loyalty & Membership Module allows hospitality businesses to reward guests for their continued patronage through points, discounts, exclusive benefits, and membership tiers.
With AegisHMS, every guest interaction becomes an opportunity to strengthen relationships and increase long-term customer value.

**Key Features of AegisHMS Loyalty & Membership Module**

**1. Loyalty Points Management**
Guests earn points for eligible purchases that can be redeemed for rewards and discounts.

**2. Tier-Based Membership Programs**
Create membership levels such as Silver, Gold, and Platinum with unique benefits and privileges.

**3. Real-Time Reward Tracking**
Track loyalty points, rewards, and membership status instantly.

**4. Personalized Guest Engagement**
Offer targeted promotions and exclusive benefits based on guest preferences and spending patterns.

**5. Increased Guest Retention**
Encourage repeat visits through meaningful rewards and loyalty incentives.

**6. Higher Revenue Growth**
Loyal members tend to spend more and engage more frequently with your business.

**7. Seamless AegisHMS Integration**
Fully integrated with AegisHMS POS and Hotel Management solutions for automatic point accumulation and redemption.

**Benefits for Hotels and Restaurants**
- Improve guest retention
- Increase repeat visits and bookings
- Enhance guest satisfaction
- Boost revenue growth
- Strengthen brand loyalty
- Deliver personalized guest experiences

The AegisHMS Loyalty & Membership Module helps hospitality businesses transform everyday transactions into lasting guest relationships.`,
  image: '/images/loyalty-membership.jpg',
  category: 'Customer Engagement',
  slug: 'aegishms-loyalty-membership-module-builds-lasting-guest-relationships',
  author: 'Aegis Team',
  authorUrl: `${domain}/team`,
  tags: [
    'Loyalty Program',
    'Membership',
    'Guest Retention',
    'Customer Engagement',
    'Hospitality Technology'
  ]
},
  ];

  const currentPost = posts.find(post => post.slug === slug);
  const otherPosts = posts.filter(post => post.slug !== slug);

  // Generate meta description from first 160 chars of content (without markdown)
  const getMetaDescription = (content) => {
    return content
      .replace(/\*\*/g, '')
      .split('\n')
      .filter(line => line.trim() !== '' && !line.trim().startsWith('**'))
      .join(' ')
      .substring(0, 160) + '...';
  };

  useEffect(() => {
    setIsLoading(false);

    if (heroRef.current) {
      heroRef.current.style.opacity = '0';
      heroRef.current.style.transform = 'translateY(-30px)';

      setTimeout(() => {
        heroRef.current.style.transition = 'all 0.8s ease-out';
        heroRef.current.style.opacity = '1';
        heroRef.current.style.transform = 'translateY(0)';
      }, 100);
    }

    if (contentRef.current) {
      contentRef.current.style.opacity = '0';
      contentRef.current.style.transform = 'translateY(30px)';

      setTimeout(() => {
        contentRef.current.style.transition = 'all 0.8s ease-out';
        contentRef.current.style.opacity = '1';
        contentRef.current.style.transform = 'translateY(0)';
      }, 300);
    }
  }, [slug]);

  if (isLoading) {
    return (
      <GuestLayout>
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
        </div>
      </GuestLayout>
    );
  }

  if (!currentPost) {
    return (
      <GuestLayout>
        <Head title="Blog Not Found | Aegis Software" />
        <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
          <div className="max-w-md w-full text-center">
            <div className="mb-8">
              <div className="w-24 h-24 mx-auto bg-red-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-12 h-12 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Blog Post Not Found</h1>
              <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist or may have been moved.</p>
              <a
                href="/blogs"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Blogs
              </a>
            </div>
          </div>
        </div>
      </GuestLayout>
    );
  }

  const canonicalUrl = `${domain}/blogs/${currentPost.slug}`;
  const ogImageUrl = `${domain}${currentPost.image}`;
  const metaDescription = getMetaDescription(currentPost.content);

  // Schema.org - BlogPosting
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": canonicalUrl
    },
    "headline": currentPost.title,
    "description": metaDescription,
    "image": ogImageUrl,
    "author": {
      "@type": "Person",
      "name": currentPost.author,
      "url": currentPost.authorUrl
    },
    "publisher": {
      "@type": "Organization",
      "name": "Aegis Software",
      "logo": {
        "@type": "ImageObject",
        "url": `${domain}/images/logo.png`
      }
    },
    "datePublished": currentPost.date,
    "dateModified": currentPost.date,
    "articleBody": currentPost.content.replace(/\*\*/g, ''),
    "keywords": currentPost.tags.join(", ")
  };

  // Schema.org - Breadcrumb
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": domain
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blogs",
        "item": `${domain}/blogs`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": currentPost.title,
        "item": canonicalUrl
      }
    ]
  };

  const formatContent = (content) => {
    return content.split('\n').map((paragraph, index) => {
      if (paragraph.trim() === '') return null;

      if (paragraph.includes('**')) {
        const parts = paragraph.split('**');
        return (
          <p key={index} className="text-lg leading-relaxed text-gray-700">
            {parts.map((part, i) =>
              i % 2 === 1 ? <strong key={i} className="font-semibold text-gray-900">{part}</strong> : part
            )}
          </p>
        );
      }

      return (
        <p key={index} className="text-lg leading-relaxed mb-4 text-gray-700">
          {paragraph.trim()}
        </p>
      );
    });
  };

  return (
    <GuestLayout>
      <Head title={`${currentPost.title} | Aegis Software Blog`} />

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div ref={heroRef} className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="max-w-7xl">
              {/* Breadcrumb */}
              <nav className="flex mb-8" aria-label="Breadcrumb">
                <ol className="flex items-center space-x-4">
                  <li>
                    <a href="/" className="text-blue-200 hover:text-white transition-colors">Home</a>
                  </li>
                  <li>
                    <svg className="w-4 h-4 text-blue-300" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 111.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </li>
                  <li>
                    <a href="/blogs" className="text-blue-200 hover:text-white transition-colors">Blogs</a>
                  </li>
               
                </ol>
              </nav>

              {/* Category Badge */}
              <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-500 bg-opacity-20 text-blue-100 mb-4">
                {currentPost.category}
              </div>

              {/* Title - H1 */}
              <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
                {currentPost.title}
              </h1>

              {/* Meta Information */}
              <div className="flex flex-wrap items-center text-blue-100 space-x-6 mb-8">
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  {currentPost.author}
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {currentPost.displayDate}
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {currentPost.readTime}
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {currentPost.tags && currentPost.tags.map((tag, index) => (
                  <span key={index} className="px-3 py-1 bg-white bg-opacity-10 rounded-full text-sm font-medium">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Blog Content */}
            <div className="lg:col-span-2">
              <article ref={contentRef} className="bg-white rounded-xl shadow-lg overflow-hidden" itemScope itemType="https://schema.org/BlogPosting">
                {/* Featured Image */}
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={currentPost.image}
                    alt={currentPost.title}
                    className="w-full h-96 object-cover"
                    loading="lazy"
                    onError={(e) => {
                      e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIyNCIgZmlsbD0iIzljYTNhZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkJsb2cgSW1hZ2U8L3RleHQ+PC9zdmc+';
                    }}
                  />
                </div>

                {/* Article Content */}
                <div className="p-8">
                  <div className="prose prose-lg max-w-none">
                    {formatContent(currentPost.content)}
                  </div>

                  {/* Share Section */}
                  {/* <div className="border-t border-gray-200 pt-8 mt-12">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-gray-900">Share this article</h3>
                      <div className="flex space-x-4">
                        <button className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors" aria-label="Share on Facebook">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z" clipRule="evenodd" />
                          </svg>
                        </button>
                        <button className="p-3 bg-blue-400 text-white rounded-full hover:bg-blue-500 transition-colors" aria-label="Share on Twitter">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                          </svg>
                        </button>
                        <button className="p-3 bg-blue-700 text-white rounded-full hover:bg-blue-800 transition-colors" aria-label="Share on LinkedIn">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div> */}
                </div>
              </article>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-8">
                {/* Related Posts */}
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Related Articles</h3>
                  <div className="space-y-4">
                    {otherPosts.map((post) => (
                      <a
                        key={post.id}
                        href={`/blogs/${post.slug}`}
                        className="block group"
                      >
                        <div className="flex space-x-4">
                          <div className="flex-shrink-0">
                            <img
                              src={post.image}
                              alt={post.title}
                              className="w-16 h-16 rounded-lg object-cover group-hover:scale-105 transition-transform duration-200"
                              loading="lazy"
                              onError={(e) => {
                                e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iI2YzZjRmNiIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM5Y2EzYWYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5JbWc8L3RleHQ+PC9zdmc+';
                              }}
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2 mb-1">
                              {post.title}
                            </h4>
                            <p className="text-xs text-gray-500">{post.displayDate}</p>
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="max-w-4xl mx-auto mt-16 pt-8 border-t border-gray-200">
            <a
              href="/blogs"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to All Blogs
            </a>
          </div>
        </div>
      </div>
    </GuestLayout>
  );
};

export default BlogDetail;
