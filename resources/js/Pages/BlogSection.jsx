
// import { Link } from '@inertiajs/react';
// import GuestLayout from '@/Layouts/GuestLayout';
// import React, { useEffect, useMemo } from 'react';
// import gsap from 'gsap';
// import ScrollTrigger from 'gsap/ScrollTrigger';
// import { Calendar, Clock, ArrowRight } from 'lucide-react';
// import { motion } from 'framer-motion';
// import SEO from '@/Components/SEO';

// gsap.registerPlugin(ScrollTrigger);

// const SITE_URL = 'https://aegishms.com'; // no trailing slash
// const FALLBACK_IMAGE = '/images/Modules/hms.jpg';

// // remove **bold** and list dashes so excerpts / SEO text read cleanly
// const plain = (text = '') =>
//   text.replace(/\*\*/g, '').replace(/^\s*-\s+/gm, '').replace(/\s+/g, ' ').trim();

// // `posts` is sent by BlogController@publicIndex (published blogs from the DB)
// const BlogSection = ({ posts: serverPosts = [] }) => {
//   const canonicalUrl = `${SITE_URL}/blogs`;
//   const pageTitle = 'Blogs | Aegis Software';
//   const pageDescription =
//     'Explore insights on hospitality technology, sustainability, guest experience, and more from Aegis HMS — your partner in digital transformation for hotels and restaurants.';

//   const posts = useMemo(
//     () =>
//       serverPosts.map((p) => {
//         const image = p.image || FALLBACK_IMAGE;
//         return {
//           id: p.id,
//           title: p.title,
//           slug: p.slug,
//           date: p.date,
//           displayDate: p.display_date,
//           readTime: p.read_time,
//           category: p.category,
//           content: p.content || '',
//           excerpt: p.excerpt || plain(p.content).slice(0, 160),
//           image,
//           url: `${SITE_URL}/blogs/${p.slug}`,
//           imageAbsoluteUrl: image.startsWith('http') ? image : `${SITE_URL}${image}`,
//         };
//       }),
//     [serverPosts]
//   );

//   useEffect(() => {
//     const runAnimation = () => {
//       const cards = document.querySelectorAll('.card');
//       const cardIds = Array.from(cards).map((card) => card.id);
//       const isLargeScreen = window.innerWidth >= 1024;
//       const animatedCardIds = isLargeScreen ? cardIds.slice(3) : cardIds.slice(1);

//       animatedCardIds.forEach((id) => {
//         ScrollTrigger.getById(id)?.kill();
//         gsap.fromTo(
//           `#${id}`,
//           { autoAlpha: 0, scale: 0.8, y: 50 },
//           {
//             autoAlpha: 1,
//             scale: 1,
//             y: 0,
//             duration: 0.8,
//             ease: 'power3.out',
//             scrollTrigger: {
//               id,
//               trigger: `#${id}`,
//               start: 'top 90%',
//               toggleActions: 'play none none reverse',
//             },
//           }
//         );
//       });
//     };

//     runAnimation();

//     const resizeHandler = () => {
//       ScrollTrigger.getAll().forEach((t) => t.kill());
//       runAnimation();
//     };

//     window.addEventListener('resize', resizeHandler);
//     return () => {
//       window.removeEventListener('resize', resizeHandler);
//       ScrollTrigger.getAll().forEach((t) => t.kill());
//     };
//   }, [posts.length]);

//   const organizationSchema = {
//     '@type': 'Organization',
//     '@id': `${SITE_URL}/#organization`,
//     name: 'Aegis Software',
//     url: SITE_URL,
//     logo: { '@type': 'ImageObject', url: `${SITE_URL}/images/logo.png` },
//     sameAs: [
//       'https://www.facebook.com/aegishms',
//       'https://www.linkedin.com/company/aegishms',
//       'https://twitter.com/aegishms',
//     ],
//   };

//   const websiteSchema = {
//     '@type': 'WebSite',
//     '@id': `${SITE_URL}/#website`,
//     url: SITE_URL,
//     name: 'Aegis Software',
//     publisher: { '@id': `${SITE_URL}/#organization` },
//   };

//   const blogSchema = {
//     '@type': 'Blog',
//     '@id': `${canonicalUrl}#blog`,
//     name: 'Aegis Software Blog',
//     description: pageDescription,
//     url: canonicalUrl,
//     publisher: { '@id': `${SITE_URL}/#organization` },
//     blogPost: posts.map((post) => ({
//       '@type': 'BlogPosting',
//       headline: post.title,
//       description: post.excerpt,
//       url: post.url,
//       datePublished: post.date,
//       dateModified: post.date,
//       author: { '@id': `${SITE_URL}/#organization` },
//       publisher: { '@id': `${SITE_URL}/#organization` },
//       image: post.imageAbsoluteUrl,
//       mainEntityOfPage: { '@type': 'WebPage', '@id': post.url },
//     })),
//   };

//   const breadcrumbSchema = {
//     '@type': 'BreadcrumbList',
//     itemListElement: [
//       { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
//       { '@type': 'ListItem', position: 2, name: 'Blogs', item: canonicalUrl },
//     ],
//   };

//   const fullSchema = {
//     '@context': 'https://schema.org',
//     '@graph': [organizationSchema, websiteSchema, blogSchema, breadcrumbSchema],
//   };

//   return (
//     <GuestLayout>
//       <SEO
//         title={pageTitle}
//         description={pageDescription}
//         keywords="hospitality blog, hotel management blog, restaurant technology, hospitality technology, hotel software blog, Aegis HMS insights"
//         image={`${SITE_URL}/images/og-blog.jpg`}
//         canonical={canonicalUrl}
//         schema={fullSchema}
//       />

//       {/* Background Blobs */}
//       <div className="fixed inset-0 -z-10 lg:px-32">
//         <div className="absolute top-20 left-20 w-72 h-72 bg-[#005c94]/10 rounded-full mix-blend-multiply filter blur-xl animate-blob" />
//         <div className="absolute top-40 right-20 w-72 h-72 bg-[#0EA5E9]/10 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
//         <div className="absolute -bottom-8 left-20 w-72 h-72 bg-[#33C3F0]/10 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" />
//         <div
//           className="absolute inset-0 -z-10"
//           style={{
//             background:
//               'linear-gradient(109.6deg, rgba(0,92,148,0.05) 11.2%, rgba(14,165,233,0.05) 91.1%)',
//           }}
//         />
//       </div>

//       {/* Hero Banner */}
//       <div className="mt-[68px] bg-[url('/images/half-circle-bg.png')] bg-bottom bg-no-repeat bg-cover flex flex-col justify-center items-center h-[50vh] text-white">
//         <motion.h1
//           initial={{ opacity: 0, y: 10 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.5, duration: 1 }}
//           className="text-4xl sm:text-6xl font-semibold mb-8 leading-tight"
//         >
//           Our Blogs
//         </motion.h1>
//         <nav aria-label="Breadcrumb">
//           <ul className="st-breadcrumb flex items-center text-sm font-semibold uppercase bg-black/5 rounded-lg p-3">
//             <li>
//               <Link href="/" className="text-white hover:text-white transition-colors" aria-label="Home">
//                 Home
//               </Link>
//             </li>
//             <li className="mx-2 text-gray-400">/</li>
//             <li className="text-gray-300" aria-current="page">Blogs</li>
//           </ul>
//         </nav>
//       </div>

//       {/* Blog Cards */}
//       <div className="cards-body max-w-7xl bg-transparent container mx-auto my-16 px-4">
//         {posts.length === 0 ? (
//           <p className="py-24 text-center text-gray-500">
//             No blogs have been published yet. Please check back soon.
//           </p>
//         ) : (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//             {posts.map((post, index) => (
//               <article
//                 key={post.id}
//                 id={`card-${post.id}`}
//                 className="card relative w-full bg-gray-50 rounded-lg shadow-lg overflow-hidden group"
//                 itemScope
//                 itemType="https://schema.org/BlogPosting"
//               >
//                 <meta itemProp="datePublished" content={post.date} />
//                 <meta itemProp="dateModified" content={post.date} />
//                 <meta itemProp="headline" content={post.title} />
//                 <meta itemProp="description" content={post.excerpt} />
//                 <link itemProp="url" href={post.url} />

//                 <img
//                   src={post.image}
//                   alt={post.title}
//                   className="w-full h-[250px] object-cover"
//                   loading={index < 2 ? 'eager' : 'lazy'}
//                   itemProp="image"
//                   onError={(e) => {
//                     e.currentTarget.onerror = null;
//                     e.currentTarget.src = FALLBACK_IMAGE;
//                   }}
//                 />

//                 <div className="p-6">
//                   <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
//                     <div className="flex items-center gap-1">
//                       <Calendar size={16} />
//                       <span>{post.displayDate}</span>
//                     </div>
//                     {post.readTime && (
//                       <div className="flex items-center gap-1">
//                         <Clock size={16} />
//                         <span>{post.readTime}</span>
//                       </div>
//                     )}
//                   </div>

//                   <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 group-hover:text-[#005c94] transition-colors line-clamp-2">
//                     {post.title}
//                   </h2>

//                   <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>

//                   <Link
//                     href={`/blogs/${post.slug}`}
//                     className="flex items-center text-[#005c94] font-medium group/link"
//                     aria-label={`Read more about ${post.title}`}
//                   >
//                     Read Article
//                     <ArrowRight
//                       size={18}
//                       className="ml-1 transition-transform duration-300 group-hover/link:translate-x-1"
//                     />
//                   </Link>
//                 </div>
//               </article>
//             ))}
//           </div>
//         )}
//       </div>
//     </GuestLayout>
//   );
// };

// export default BlogSection;



import { Link } from '@inertiajs/react';
import GuestLayout from '@/Layouts/GuestLayout';
import React, { useEffect, useMemo } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import parse, { domToReact, Element } from 'html-react-parser';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import SEO from '@/Components/SEO';

gsap.registerPlugin(ScrollTrigger);

const SITE_URL = 'https://aegishms.com'; // no trailing slash
const FALLBACK_IMAGE = '/images/Modules/hms.jpg';

const imgurl = import.meta.env.VITE_IMAGE_PATH || '';

const resolveImage = (path) => {
  if (!path) return FALLBACK_IMAGE;
  if (/^https?:\/\//i.test(path)) return path;

  const base = imgurl.replace(/\/+$/, '');

  // Strip any storage prefix the DB path may already contain
  const clean = path
    .replace(/^\/+/, '')
    .replace(/^(storage\/app\/public|app\/public|storage|public)\//i, '');

  return `${base}/${clean}`;
};

// absolute URL for SEO / schema
const toAbsolute = (url) =>
  /^https?:\/\//i.test(url) ? url : `${SITE_URL}${url.startsWith('/') ? '' : '/'}${url}`;

// ---------- Content helpers ----------

// True when the text contains HTML tags (rich-text editor output)
const isHtml = (text = '') => /<\/?[a-z][\s\S]*>/i.test(text);

// remove **bold** and list dashes from old plain-text posts
const stripMarkdown = (text = '') =>
  text.replace(/\*\*/g, '').replace(/^\s*-\s+/gm, '').replace(/\s+/g, ' ').trim();

// remove HTML tags and decode common entities
const stripHtml = (html = '') =>
  html
    .replace(/<(script|style)[\s\S]*?<\/\1>/gi, ' ')
    .replace(/<[^>]*>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/\s+/g, ' ')
    .trim();

// plain text for excerpts, meta tags and schema (works for HTML and old posts)
const plain = (text = '') => (isHtml(text) ? stripHtml(text) : stripMarkdown(text));

// ---------- Excerpt renderer (html-react-parser) ----------
// Flattens block tags into inline spans so the excerpt stays a clean 2-line preview.
// Bold / italic are kept; images, scripts and iframes are dropped.

const DROP_TAGS = new Set(['script', 'style', 'iframe', 'img', 'figure', 'video', 'audio']);
const FLATTEN_TAGS = new Set([
  'p', 'div', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
  'ul', 'ol', 'li', 'blockquote', 'pre', 'table',
  'thead', 'tbody', 'tr', 'td', 'th', 'a', 'section', 'article',
]);

const excerptOptions = {
  replace: (node) => {
    if (!(node instanceof Element)) return;

    const { name, children } = node;

    if (DROP_TAGS.has(name)) return <></>;
    if (name === 'br') return <> </>;

    if (FLATTEN_TAGS.has(name)) {
      return (
        <>
          {domToReact(children, excerptOptions)}{' '}
        </>
      );
    }

    return; // strong, em, b, i, span... render as normal
  },
};

// `posts` is sent by BlogController@publicIndex (published blogs from the DB)
const BlogSection = ({ posts: serverPosts = [] }) => {
  const canonicalUrl = `${SITE_URL}/blogs`;
  const pageTitle = 'Blogs | Aegis Software';
  const pageDescription =
    'Explore insights on hospitality technology, sustainability, guest experience, and more from Aegis HMS — your partner in digital transformation for hotels and restaurants.';

  const posts = useMemo(
    () =>
      serverPosts.map((p) => {
        const image = resolveImage(p.image);

        // Display excerpt: the saved excerpt, otherwise a plain-text preview of the content
        const excerpt = p.excerpt || plain(p.content).slice(0, 160);

        return {
          id: p.id,
          title: p.title,
          slug: p.slug,
          date: p.date,
          displayDate: p.display_date,
          readTime: p.read_time,
          category: p.category,
          content: p.content || '',
          excerpt,
          excerptIsHtml: isHtml(excerpt),
          excerptText: plain(excerpt).slice(0, 160), // for meta tags and schema
          image,
          url: `${SITE_URL}/blogs/${p.slug}`,
          imageAbsoluteUrl: toAbsolute(image),
        };
      }),
    [serverPosts]
  );

  useEffect(() => {
    const runAnimation = () => {
      const cards = document.querySelectorAll('.card');
      const cardIds = Array.from(cards).map((card) => card.id);
      const isLargeScreen = window.innerWidth >= 1024;
      const animatedCardIds = isLargeScreen ? cardIds.slice(3) : cardIds.slice(1);

      animatedCardIds.forEach((id) => {
        ScrollTrigger.getById(id)?.kill();
        gsap.fromTo(
          `#${id}`,
          { autoAlpha: 0, scale: 0.8, y: 50 },
          {
            autoAlpha: 1,
            scale: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              id,
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
      ScrollTrigger.getAll().forEach((t) => t.kill());
      runAnimation();
    };

    window.addEventListener('resize', resizeHandler);
    return () => {
      window.removeEventListener('resize', resizeHandler);
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [posts.length]);

  const organizationSchema = {
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: 'Aegis Software',
    url: SITE_URL,
    logo: { '@type': 'ImageObject', url: `${SITE_URL}/images/logo.png` },
    sameAs: [
      'https://www.facebook.com/aegishms',
      'https://www.linkedin.com/company/aegishms',
      'https://twitter.com/aegishms',
    ],
  };

  const websiteSchema = {
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: SITE_URL,
    name: 'Aegis Software',
    publisher: { '@id': `${SITE_URL}/#organization` },
  };

  const blogSchema = {
    '@type': 'Blog',
    '@id': `${canonicalUrl}#blog`,
    name: 'Aegis Software Blog',
    description: pageDescription,
    url: canonicalUrl,
    publisher: { '@id': `${SITE_URL}/#organization` },
    blogPost: posts.map((post) => ({
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.excerptText,
      url: post.url,
      datePublished: post.date,
      dateModified: post.date,
      author: { '@id': `${SITE_URL}/#organization` },
      publisher: { '@id': `${SITE_URL}/#organization` },
      image: post.imageAbsoluteUrl,
      mainEntityOfPage: { '@type': 'WebPage', '@id': post.url },
    })),
  };

  const breadcrumbSchema = {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Blogs', item: canonicalUrl },
    ],
  };

  const fullSchema = {
    '@context': 'https://schema.org',
    '@graph': [organizationSchema, websiteSchema, blogSchema, breadcrumbSchema],
  };

  return (
    <GuestLayout>
      <SEO
        title={pageTitle}
        description={pageDescription}
        keywords="hospitality blog, hotel management blog, restaurant technology, hospitality technology, hotel software blog, Aegis HMS insights"
        image={`${SITE_URL}/images/og-blog.jpg`}
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
        {posts.length === 0 ? (
          <p className="py-24 text-center text-gray-500">
            No blogs have been published yet. Please check back soon.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
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
                <meta itemProp="description" content={post.excerptText} />
                <link itemProp="url" href={post.url} />

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
                      <span>{post.displayDate}</span>
                    </div>
                    {post.readTime && (
                      <div className="flex items-center gap-1">
                        <Clock size={16} />
                        <span>{post.readTime}</span>
                      </div>
                    )}
                  </div>

                  <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 group-hover:text-[#005c94] transition-colors line-clamp-2">
                    {post.title}
                  </h2>

                  {/* div (not p): the parsed excerpt may contain inline elements */}
                  <div className="text-gray-600 mb-4 line-clamp-2">
                    {post.excerptIsHtml ? parse(post.excerpt, excerptOptions) : post.excerpt}
                  </div>

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
            ))}
          </div>
        )}
      </div>
    </GuestLayout>
  );
};

export default BlogSection;