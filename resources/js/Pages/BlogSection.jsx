import { Link } from '@inertiajs/react';
import GuestLayout from '@/Layouts/GuestLayout';
import React, { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import SEO from '@/Components/SEO';

gsap.registerPlugin(ScrollTrigger);

const BlogSection = () => {
  const siteUrl = 'https://aegishms.com/';
  const canonicalUrl = `${siteUrl}/blogs`;
  const pageTitle = 'Blogs | Aegis Software';
  const pageDescription =
    'Explore insights on hospitality technology, sustainability, guest experience, and more from Aegis HMS — your partner in digital transformation for hotels and restaurants.';

  const posts = [

    {
      id: 7,
      title: 'Aegis Software Achieves ISO/IEC 27001 Certification',
      date: '2026-08-03',
      readTime: '5 min read',
      excerpt: 'Aegis Software Pvt. Ltd. has achieved ISO/IEC 27001 certification, reinforcing our commitment to information security, responsible risk management, and trusted hospitality technology.',
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
    },

    {
      id: 6,
      title: 'How AegisHMS Loyalty & Membership Module Helps Build Lasting Guest Relationships',
      date: '2025-06-04',
      readTime: '4 min read',
      excerpt: 'Guest retention is essential for long-term hospitality success. Discover how the AegisHMS Loyalty & Membership Module helps hotels and restaurants increase repeat visits, reward loyal customers, and drive revenue growth.',
      content: `In today's competitive hospitality landscape, attracting new guests is important—but retaining existing ones is what drives sustainable growth. Building strong guest relationships can significantly increase repeat business, improve customer satisfaction, and boost overall revenue.

That's where the AegisHMS Loyalty & Membership Module comes in.

**What is a Loyalty & Membership Module?**

A Loyalty & Membership Module enables hotels and restaurants to reward guests for their continued patronage through points, discounts, exclusive benefits, and membership tiers. By creating a structured rewards program, businesses can encourage repeat visits and strengthen guest loyalty.

With AegisHMS, every guest interaction becomes an opportunity to build long-term engagement and increase customer lifetime value.

**Key Features of AegisHMS Loyalty & Membership Module**

**1. Loyalty Points Management**

Guests earn loyalty points on eligible purchases, which can be redeemed for discounts, rewards, or special offers.

**2. Tier-Based Membership Programs**

Create multiple membership levels such as Silver, Gold, and Platinum, each offering unique benefits and incentives.

**3. Real-Time Reward Tracking**

Guests and staff can easily track points, rewards, and membership status, ensuring complete transparency.

**4. Personalized Guest Engagement**

Offer targeted promotions, exclusive discounts, and special rewards based on guest preferences and spending behavior.

**5. Increased Repeat Visits**

Reward programs encourage guests to return more frequently, helping businesses build a loyal customer base.

**6. Higher Revenue Per Guest**

Members are more likely to spend more when they have access to exclusive benefits and reward opportunities.

**7. Seamless Integration with AegisHMS**

The Loyalty & Membership Module works seamlessly with AegisHMS POS and Hotel Management solutions, enabling automatic point accumulation and redemption across operations.

**Benefits for Hotels and Restaurants**

By implementing a well-structured loyalty program, hospitality businesses can:

- Improve guest retention
- Increase repeat bookings and visits
- Enhance guest satisfaction
- Boost revenue growth
- Strengthen brand loyalty
- Deliver personalized guest experiences

In an industry where guest experience matters more than ever, loyalty programs provide a powerful way to stand out from competitors and create meaningful connections with customers.

The AegisHMS Loyalty & Membership Module helps hotels and restaurants transform everyday transactions into long-term guest relationships, driving growth and customer satisfaction simultaneously.`,
      image: '/images/loyalty-membership.jpg',
      category: 'Customer Engagement',
      slug: 'aegishms-loyalty-membership-module-builds-lasting-guest-relationships',
    },

    {
      id: 5,  // New KDS blog - use next available ID
      title: 'How AegisHMS Kitchen Display System (KDS) Helps Restaurants Run Smarter',
      date: '2025-05-28',
      readTime: '4 min read',
      excerpt: 'In every busy restaurant kitchen, speed, accuracy, and communication matter. Discover how the AegisHMS Kitchen Display System (KDS) transforms kitchen operations with real-time order display, reduced errors, and paperless efficiency.',
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
    },
    {
      id: 4,
      title: 'Aegis Pulse247: Transforming Multi-Property Reporting for Hospitality',
      date: '2025-11-14',
      readTime: '6 min read',
      excerpt: 'Aegis Pulse247 is a modern multi-property reporting and analytics platform designed for hotels, restaurants, and hospitality groups aiming to simplify operations and improve decision-making.',
      content: 'Aegis Pulse247 is a modern multi-property reporting and analytics platform designed for hotels, restaurants, and hospitality groups aiming to simplify operations and improve decision-making. Fully integrated with Aegis HMS, it unifies all business data into one centralized system, offering real-time visibility, smarter insights, and enhanced profitability.\n\nWith complete visibility across all properties, Aegis Pulse247 allows management teams to track revenue, occupancy, sales, expenses, and key performance metrics from every hotel or outlet in a single dashboard. Its real-time monitoring eliminates manual reporting, giving instant clarity across the entire portfolio.\n\nAegis Pulse247 stands out with powerful features such as real-time analytics, seamless Aegis HMS integration, a unified dashboard with clear KPIs, and intelligent decision-making tools. Users can identify trends, compare property performance, and uncover new revenue opportunities effortlessly. Automation further boosts efficiency by reducing manual work and streamlining cross-department operations.\n\nWhether managing a boutique hotel or a multi-property chain, Aegis Pulse247 helps hospitality businesses strengthen data-driven decision-making, improve operational efficiency, enhance guest experiences, and ultimately increase overall profitability.',
      image: '/images/Modules/hms.jpg',
      category: 'Web3',
      slug: 'aegis-pulse247-transforming-multi-property-reporting-hospitality',
    },
    {
      id: 1,
      title: 'The Importance of Inventory Management in Hospitality and How Aegis HMS Can Optimize Your Operations',
      date: '2023-01-01',
      readTime: '5 min read',
      excerpt: 'In the hospitality industry, effective inventory management is crucial to maintaining operational efficiency, controlling costs, and ensuring guest satisfaction.',
      content: 'In the hospitality industry, effective inventory management is crucial to maintaining operational efficiency, controlling costs, and ensuring guest satisfaction. Aegis HMS offers a comprehensive solution to track stock levels, automate reorder processes, and minimize wastage, thereby optimizing your overall business operations and improving profitability.',
      image: '/images/Modules/inventory.jpg',
      category: 'Technology',
      slug: 'importance-inventory-management-hospitality-aegis-hms-optimization',
    },
    {
      id: 2,
      title: 'Improving Sustainability in the Hospitality Sector: A New Chapter for Environmentally Friendly Approaches',
      date: '2023-02-15',
      readTime: '4 min read',
      excerpt: 'In recent years, the hospitality industry has undergone a significant shift toward sustainability, adopting eco-friendly practices to reduce environmental impact.',
      content: 'In recent years, the hospitality industry has undergone a significant shift toward sustainability, adopting eco-friendly practices to reduce environmental impact. From energy-efficient appliances and waste reduction to sourcing local and organic products, this new chapter emphasizes responsible operations that not only attract conscious guests but also contribute to global environmental goals.',
      image: '/images/Modules/1.jpg',
      slug: 'improving-sustainability-hospitality-environmentally-friendly-approaches',
    },
    {
      id: 3,
      title: 'Redefining Guest Experiences via Aegis HMS: A Transformation of Hospitality',
      date: '2023-03-10',
      readTime: '6 min read',
      excerpt: 'Providing outstanding guest experiences is not an option but a necessity in today\'s competitive hospitality market.',
      content: 'Providing outstanding guest experiences is not an option but a necessity in today’s competitive hospitality market. Aegis HMS transforms guest interactions by enabling personalized service, seamless check-in and check-out, real-time communication, and insightful feedback mechanisms. This digital transformation empowers hotels and restaurants to exceed guest expectations and foster loyalty.',
      image: '/images/Modules/hms.jpg',
      category: 'Web3',
      slug: 'redefining-guest-experiences-aegis-hms-transformation-hospitality',
    },
  ];

  // Generate full URLs for each post
  const postsWithUrls = posts.map((post) => ({
    ...post,
    url: `${siteUrl}/blogs/${post.slug}`,
    imageAbsoluteUrl: `${siteUrl}${post.image}`,
  }));

  useEffect(() => {
    const runAnimation = () => {
      const cards = document.querySelectorAll('.card');
      const cardIds = Array.from(cards).map((card) => card.id);

      const isLargeScreen = window.innerWidth >= 1024;

      const animatedCardIds = isLargeScreen
        ? cardIds.slice(3)
        : cardIds.slice(1);

      animatedCardIds.forEach((id) => {
        // Kill any existing ScrollTrigger to prevent duplicates
        ScrollTrigger.getById(id)?.kill();

        gsap.fromTo(
          `#${id}`,
          {
            autoAlpha: 0,
            scale: 0.8,
            y: 50,
          },
          {
            autoAlpha: 1,
            scale: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              id: id,
              trigger: `#${id}`,
              start: 'top 90%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });
    };

    runAnimation();

    const resizeHandler = () => {
      // Clean up existing ScrollTriggers
      ScrollTrigger.getAll().forEach((t) => t.kill());
      runAnimation();
    };

    window.addEventListener('resize', resizeHandler);

    return () => {
      window.removeEventListener('resize', resizeHandler);
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  // Organization Schema
  const organizationSchema = {
    "@type": "Organization",
    "@id": `${siteUrl}#organization`,
    "name": "Aegis Software",
    "url": siteUrl,
    "logo": {
      "@type": "ImageObject",
      "url": `${siteUrl}/images/logo.png`,
    },
    "sameAs": [
      "https://www.facebook.com/aegishms",
      "https://www.linkedin.com/company/aegishms",
      "https://twitter.com/aegishms"
    ]
  };

  // Website Schema
  const websiteSchema = {
    "@type": "WebSite",
    "@id": `${siteUrl}#website`,
    "url": siteUrl,
    "name": "Aegis Software",
    "publisher": { "@id": `${siteUrl}#organization` }
  };

  // Blog Schema
  const blogSchema = {
    "@type": "Blog",
    "@id": `${canonicalUrl}#blog`,
    "name": "Aegis Software Blog",
    "description": pageDescription,
    "url": canonicalUrl,
    "publisher": { "@id": `${siteUrl}#organization` },
    "blogPost": postsWithUrls.map((post) => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.excerpt || post.content.substring(0, 160),
      "url": post.url,
      "datePublished": post.date,
      "dateModified": post.date,
      "author": { "@id": `${siteUrl}#organization` },
      "publisher": { "@id": `${siteUrl}#organization` },
      "image": post.imageAbsoluteUrl,
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": post.url,
      },
      "articleBody": post.content
    })),
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
        "name": "Blogs",
        "item": canonicalUrl
      }
    ]
  };

  // Combine all schemas
  const fullSchema = {
    "@context": "https://schema.org",
    "@graph": [
      organizationSchema,
      websiteSchema,
      blogSchema,
      breadcrumbSchema
    ]
  };

  return (
    <GuestLayout>
      <SEO
        title={pageTitle}
        description={pageDescription}
        keywords="hospitality blog, hotel management blog, restaurant technology, hospitality technology, hotel software blog, Aegis HMS insights"
        image={`${siteUrl}/images/og-blog.jpg`}
        canonical={canonicalUrl}
        schema={fullSchema}
      />

      {/* Background Blobs */}
      <div className="fixed inset-0 -z-10 lg:px-32">
        <div className="absolute top-20 left-20 w-72 h-72 bg-[#005c94]/10 rounded-full mix-blend-multiply filter blur-xl animate-blob" />
        <div className="absolute top-40 right-20 w-72 h-72 bg-[#0EA5E9]/10 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-[#33C3F0]/10 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" />
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              'linear-gradient(109.6deg, rgba(0,92,148,0.05) 11.2%, rgba(14,165,233,0.05) 91.1%)',
          }}
        />
      </div>

      {/* Hero Banner */}
      <div className="mt-[68px] bg-[url('/images/half-circle-bg.png')] bg-bottom bg-no-repeat bg-cover flex flex-col justify-center items-center h-[50vh] text-white">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-4xl sm:text-6xl font-semibold mb-8 leading-tight"
        >
          Our Blogs
        </motion.h1>
        <nav aria-label="Breadcrumb">
          <ul className="st-breadcrumb flex items-center text-sm font-semibold uppercase bg-black/5 rounded-lg p-3">
            <li>
              <Link href="/" className="text-white hover:text-white transition-colors" aria-label="Home">
                Home
              </Link>
            </li>
            <li className="mx-2 text-gray-400">/</li>
            <li className="text-gray-300" aria-current="page">Blogs</li>
          </ul>
        </nav>
      </div>

      {/* Blog Cards */}
      <div className="cards-body max-w-7xl bg-transparent container mx-auto my-16 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => {
            return (
              <article
                key={post.id}
                id={`card-${post.id}`}
                className="card relative w-full bg-gray-50 rounded-lg shadow-lg overflow-hidden group"
                itemScope
                itemType="https://schema.org/BlogPosting"
              >
                <meta itemProp="datePublished" content={post.date} />
                <meta itemProp="dateModified" content={post.date} />
                <meta itemProp="headline" content={post.title} />
                <meta itemProp="description" content={post.excerpt || post.content.substring(0, 160)} />
                <link itemProp="url" href={`${siteUrl}/blogs/${post.slug}`} />

                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-[250px] object-cover"
                  loading={index < 2 ? 'eager' : 'lazy'}
                  itemProp="image"
                />

                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={16} />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 group-hover:text-[#005c94] transition-colors line-clamp-2">
                    {post.title}
                  </h2>

                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {post.excerpt || post.content.substring(0, 120)}...
                  </p>

                  <Link
                    href={`/blogs/${post.slug}`}
                    className="flex items-center text-[#005c94] font-medium group/link"
                    aria-label={`Read more about ${post.title}`}
                  >
                    Read Article
                    <ArrowRight
                      size={18}
                      className="ml-1 transition-transform duration-300 group-hover/link:translate-x-1"
                    />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </GuestLayout>
  );
};

export default BlogSection;
