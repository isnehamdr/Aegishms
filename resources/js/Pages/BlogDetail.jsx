
// import React, { useEffect, useRef } from 'react';
// import { Link } from '@inertiajs/react';
// import { Calendar, Clock, User, ChevronRight, ArrowLeft } from 'lucide-react';
// import GuestLayout from '@/Layouts/GuestLayout';
// import SEO from '@/Components/SEO';




// const DOMAIN = 'https://aegishms.com'; // no trailing slash
// const FALLBACK_IMAGE = '/images/Modules/hms.jpg';

// const absolute = (path) => (path?.startsWith('http') ? path : `${DOMAIN}${path || FALLBACK_IMAGE}`);

// const stripMarkdown = (text = '') =>
//   text.replace(/\*\*/g, '').replace(/^\s*-\s+/gm, '').replace(/\s+/g, ' ').trim();

// const renderInline = (text) =>
//   text.split('**').map((part, i) =>
//     i % 2 === 1 ? (
//       <strong key={i} className="font-semibold text-gray-900">{part}</strong>
//     ) : (
//       part
//     )
//   );

// // Supports: blank-line paragraphs, **Heading** lines, "- bullet" lists, inline **bold**
// const formatContent = (content = '') => {
//   const out = [];
//   let list = [];

//   const flushList = (key) => {
//     if (!list.length) return;
//     out.push(
//       <ul key={`ul-${key}`} className="list-disc pl-6 space-y-1 text-lg text-gray-700 mb-4">
//         {list.map((item, i) => (
//           <li key={i}>{renderInline(item)}</li>
//         ))}
//       </ul>
//     );
//     list = [];
//   };

//   content.split('\n').forEach((raw, idx) => {
//     const line = raw.trim();

//     if (line.startsWith('- ')) {
//       list.push(line.slice(2));
//       return;
//     }

//     flushList(idx);
//     if (!line) return;

//     if (/^\*\*[^*]+\*\*$/.test(line)) {
//       out.push(
//         <h3 key={idx} className="text-xl font-semibold text-gray-900 mt-6 mb-2">
//           {line.slice(2, -2)}
//         </h3>
//       );
//     } else {
//       out.push(
//         <p key={idx} className="text-lg leading-relaxed mb-4 text-gray-700">
//           {renderInline(line)}
//         </p>
//       );
//     }
//   });

//   flushList('end');
//   return out;
// };

// // `post` and `relatedPosts` are sent by BlogController@publicShow
// const BlogDetail = ({ post, relatedPosts = [] }) => {
//   const heroRef = useRef(null);
//   const contentRef = useRef(null);

//   useEffect(() => {
//     const timers = [];
//     [[heroRef, -30, 100], [contentRef, 30, 300]].forEach(([ref, y, delay]) => {
//       const el = ref.current;
//       if (!el) return;
//       el.style.opacity = '0';
//       el.style.transform = `translateY(${y}px)`;
//       timers.push(
//         setTimeout(() => {
//           el.style.transition = 'all 0.8s ease-out';
//           el.style.opacity = '1';
//           el.style.transform = 'translateY(0)';
//         }, delay)
//       );
//     });
//     return () => timers.forEach(clearTimeout);
//   }, [post.id]);

//   const tags = post.tags || [];
//   const image = post.image || FALLBACK_IMAGE;
//   const canonicalUrl = `${DOMAIN}/blogs/${post.slug}`;
//   const metaDescription = (post.excerpt || stripMarkdown(post.content)).slice(0, 160);

//   const schema = {
//     '@context': 'https://schema.org',
//     '@graph': [
//       {
//         '@type': 'BlogPosting',
//         mainEntityOfPage: { '@type': 'WebPage', '@id': canonicalUrl },
//         headline: post.title,
//         description: metaDescription,
//         image: absolute(image),
//         author: {
//           '@type': 'Person',
//           name: post.author,
//           ...(post.author_url ? { url: post.author_url } : {}),
//         },
//         publisher: {
//           '@type': 'Organization',
//           name: 'Aegis Software',
//           logo: { '@type': 'ImageObject', url: `${DOMAIN}/images/logo.png` },
//         },
//         datePublished: post.date,
//         dateModified: post.date,
//         articleBody: stripMarkdown(post.content),
//         keywords: tags.join(', '),
//       },
//       {
//         '@type': 'BreadcrumbList',
//         itemListElement: [
//           { '@type': 'ListItem', position: 1, name: 'Home', item: DOMAIN },
//           { '@type': 'ListItem', position: 2, name: 'Blogs', item: `${DOMAIN}/blogs` },
//           { '@type': 'ListItem', position: 3, name: post.title, item: canonicalUrl },
//         ],
//       },
//     ],
//   };

//   return (
//     <GuestLayout>
//       <SEO
//         title={`${post.title} | Aegis Software Blog`}
//         description={metaDescription}
//         keywords={tags.join(', ')}
//         image={absolute(image)}
//         canonical={canonicalUrl}
//         schema={schema}
//       />

//       <div className="min-h-screen bg-gray-50">
//         {/* Hero */}
//         <div ref={heroRef} className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white">
//           <div className="absolute inset-0 bg-black opacity-20"></div>
//           <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
//             <nav className="flex mb-8" aria-label="Breadcrumb">
//               <ol className="flex items-center space-x-4">
//                 <li>
//                   <Link href="/" className="text-blue-200 hover:text-white transition-colors">Home</Link>
//                 </li>
//                 <li><ChevronRight className="w-4 h-4 text-blue-300" /></li>
//                 <li>
//                   <Link href="/blogs" className="text-blue-200 hover:text-white transition-colors">Blogs</Link>
//                 </li>
//               </ol>
//             </nav>

//             {post.category && (
//               <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-500 bg-opacity-20 text-blue-100 mb-4">
//                 {post.category}
//               </div>
//             )}

//             <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">{post.title}</h1>

//             <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-blue-100 mb-8">
//               <div className="flex items-center">
//                 <User className="w-5 h-5 mr-2" />
//                 {post.author}
//               </div>
//               <div className="flex items-center">
//                 <Calendar className="w-5 h-5 mr-2" />
//                 {post.display_date}
//               </div>
//               {post.read_time && (
//                 <div className="flex items-center">
//                   <Clock className="w-5 h-5 mr-2" />
//                   {post.read_time}
//                 </div>
//               )}
//             </div>

//             {tags.length > 0 && (
//               <div className="flex flex-wrap gap-2">
//                 {tags.map((tag) => (
//                   <span key={tag} className="px-3 py-1 bg-white bg-opacity-10 rounded-full text-sm font-medium">
//                     #{tag}
//                   </span>
//                 ))}
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Main */}
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
//             <div className="lg:col-span-2">
//               <article
//                 ref={contentRef}
//                 className="bg-white rounded-xl shadow-lg overflow-hidden"
//                 itemScope
//                 itemType="https://schema.org/BlogPosting"
//               >
//                 <img
//                   src={image}
//                   alt={post.title}
//                   className="w-full h-96 object-cover"
//                   onError={(e) => {
//                     e.currentTarget.onerror = null;
//                     e.currentTarget.src = FALLBACK_IMAGE;
//                   }}
//                 />

//                 <div className="p-8">
//                   <div className="prose prose-lg max-w-none">{formatContent(post.content)}</div>
//                 </div>
//               </article>
//             </div>

//             {/* Sidebar */}
//             <aside className="lg:col-span-1">
//               <div className="sticky top-24 space-y-8">
//                 {relatedPosts.length > 0 && (
//                   <div className="bg-white rounded-xl shadow-lg p-6">
//                     <h3 className="text-xl font-bold text-gray-900 mb-6">Related Articles</h3>
//                     <div className="space-y-4">
//                       {relatedPosts.map((rp) => (
//                         <Link key={rp.id} href={`/blogs/${rp.slug}`} className="block group">
//                           <div className="flex space-x-4">
//                             <img
//                               src={rp.image || FALLBACK_IMAGE}
//                               alt={rp.title}
//                               className="w-16 h-16 flex-shrink-0 rounded-lg object-cover group-hover:scale-105 transition-transform duration-200"
//                               loading="lazy"
//                               onError={(e) => {
//                                 e.currentTarget.onerror = null;
//                                 e.currentTarget.src = FALLBACK_IMAGE;
//                               }}
//                             />
//                             <div className="flex-1 min-w-0">
//                               <h4 className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2 mb-1">
//                                 {rp.title}
//                               </h4>
//                               <p className="text-xs text-gray-500">{rp.display_date}</p>
//                             </div>
//                           </div>
//                         </Link>
//                       ))}
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </aside>
//           </div>

//           <div className="max-w-4xl mx-auto mt-16 pt-8 border-t border-gray-200">
//             <Link href="/blogs" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
//               <ArrowLeft className="w-4 h-4 mr-2" />
//               Back to All Blogs
//             </Link>
//           </div>
//         </div>
//       </div>
//     </GuestLayout>
//   );
// };

// export default BlogDetail;



import React, { useEffect, useRef } from 'react';
import { Link } from '@inertiajs/react';
import { Calendar, Clock, User, ChevronRight, ArrowLeft } from 'lucide-react';
import GuestLayout from '@/Layouts/GuestLayout';
import SEO from '@/Components/SEO';

const DOMAIN = 'https://aegishms.com'; // no trailing slash
const FALLBACK_IMAGE = '/images/Modules/hms.jpg';
const imgurl = (import.meta.env.VITE_IMAGE_PATH || '').replace(/\/+$/, ''); // no trailing slash

// Pick the image field regardless of what the controller calls it
const pickImage = (obj = {}) =>
  obj.image ?? obj.image_url ?? obj.featured_image ?? obj.thumbnail ?? obj.cover_image ?? null;

// Turn whatever is stored in the DB into a usable <img src>
const resolveImage = (path) => {
  if (!path) return FALLBACK_IMAGE;
  path = String(path).trim().replace(/\\/g, '/');

  // Full URL, protocol-relative URL, or data URI: use as is
  if (/^(https?:)?\/\//i.test(path) || path.startsWith('data:')) return path;

  const clean = path.replace(/^\/+/, '');
  if (!imgurl) return `/${clean}`;

  // Avoid doubling the base, e.g. base ".../storage" + path "storage/blogs/a.jpg"
  const basePath = imgurl.replace(/^https?:\/\/[^/]+/i, '').replace(/^\/+/, '');
  const rel =
    basePath && clean.startsWith(`${basePath}/`) ? clean.slice(basePath.length + 1) : clean;
  return `${imgurl}/${rel}`;
};

// Falls back only if the real image fails, and logs the failing URL in dev
const handleImgError = (e) => {
  const el = e.currentTarget;
  if (import.meta.env.DEV) console.warn('Image failed to load:', el.src);
  el.onerror = null;
  el.src = FALLBACK_IMAGE;
};

// Make any URL absolute (for SEO / schema)
const absolute = (url) => {
  if (!url) return `${DOMAIN}${FALLBACK_IMAGE}`;
  if (/^https?:\/\//i.test(url)) return url;
  if (url.startsWith('//')) return `https:${url}`;
  return `${DOMAIN}${url.startsWith('/') ? url : `/${url}`}`;
};

const stripMarkdown = (text = '') =>
  text.replace(/\*\*/g, '').replace(/^\s*-\s+/gm, '').replace(/\s+/g, ' ').trim();

const renderInline = (text) =>
  text.split('**').map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i} className="font-semibold text-gray-900">{part}</strong>
    ) : (
      part
    )
  );

// Supports: blank-line paragraphs, **Heading** lines, "- bullet" lists, inline **bold**
const formatContent = (content = '') => {
  const out = [];
  let list = [];

  const flushList = (key) => {
    if (!list.length) return;
    out.push(
      <ul key={`ul-${key}`} className="list-disc pl-6 space-y-1 text-lg text-gray-700 mb-4">
        {list.map((item, i) => (
          <li key={i}>{renderInline(item)}</li>
        ))}
      </ul>
    );
    list = [];
  };

  content.split('\n').forEach((raw, idx) => {
    const line = raw.trim();

    if (line.startsWith('- ')) {
      list.push(line.slice(2));
      return;
    }

    flushList(idx);
    if (!line) return;

    if (/^\*\*[^*]+\*\*$/.test(line)) {
      out.push(
        <h3 key={idx} className="text-xl font-semibold text-gray-900 mt-6 mb-2">
          {line.slice(2, -2)}
        </h3>
      );
    } else {
      out.push(
        <p key={idx} className="text-lg leading-relaxed mb-4 text-gray-700">
          {renderInline(line)}
        </p>
      );
    }
  });

  flushList('end');
  return out;
};

// `post` and `relatedPosts` are sent by BlogController@publicShow
const BlogDetail = ({ post, relatedPosts = [] }) => {
  const heroRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const timers = [];
    [[heroRef, -30, 100], [contentRef, 30, 300]].forEach(([ref, y, delay]) => {
      const el = ref.current;
      if (!el) return;
      el.style.opacity = '0';
      el.style.transform = `translateY(${y}px)`;
      timers.push(
        setTimeout(() => {
          el.style.transition = 'all 0.8s ease-out';
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
        }, delay)
      );
    });
    return () => timers.forEach(clearTimeout);
  }, [post.id]);

  const tags = post.tags || [];
  const image = resolveImage(pickImage(post));
  const canonicalUrl = `${DOMAIN}/blogs/${post.slug}`;
  const metaDescription = ("" || stripMarkdown(post.content)).slice(0, 160);

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BlogPosting',
        mainEntityOfPage: { '@type': 'WebPage', '@id': canonicalUrl },
        headline: post.title,
        description: metaDescription,
        image: absolute(image),
        author: {
          '@type': 'Person',
          name: post.author,
          ...(post.author_url ? { url: post.author_url } : {}),
        },
        publisher: {
          '@type': 'Organization',
          name: 'Aegis Software',
          logo: { '@type': 'ImageObject', url: `${DOMAIN}/images/logo.png` },
        },
        datePublished: post.date,
        dateModified: post.date,
        articleBody: stripMarkdown(post.content),
        keywords: tags.join(', '),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: DOMAIN },
          { '@type': 'ListItem', position: 2, name: 'Blogs', item: `${DOMAIN}/blogs` },
          { '@type': 'ListItem', position: 3, name: post.title, item: canonicalUrl },
        ],
      },
    ],
  };

  return (
    <GuestLayout>
      <SEO
        title={`${post.title} | Aegis Software Blog`}
        description={metaDescription}
        keywords={tags.join(', ')}
        image={absolute(image)}
        canonical={canonicalUrl}
        schema={schema}
      />

      <div className="min-h-screen bg-gray-50">
        {/* Hero */}
        <div ref={heroRef} className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <nav className="flex mb-8" aria-label="Breadcrumb">
              <ol className="flex items-center space-x-4">
                <li>
                  <Link href="/" className="text-blue-200 hover:text-white transition-colors">Home</Link>
                </li>
                <li><ChevronRight className="w-4 h-4 text-blue-300" /></li>
                <li>
                  <Link href="/blogs" className="text-blue-200 hover:text-white transition-colors">Blogs</Link>
                </li>
              </ol>
            </nav>

            {post.category && (
              <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-500 bg-opacity-20 text-blue-100 mb-4">
                {post.category}
              </div>
            )}

            <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">{post.title}</h1>

            

            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-blue-100 mb-8">
              <div className="flex items-center">
                <User className="w-5 h-5 mr-2" />
                {post.author}
              </div>
              <div className="flex items-center">
                <Calendar className="w-5 h-5 mr-2" />
                {post.display_date}
              </div>
              {post.read_time && (
                <div className="flex items-center">
                  <Clock className="w-5 h-5 mr-2" />
                  {post.read_time}
                </div>
              )}
            </div>

            {tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-white bg-opacity-10 rounded-full text-sm font-medium">
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Main */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <article
                ref={contentRef}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
                itemScope
                itemType="https://schema.org/BlogPosting"
              >
                <img
                  src={image}
                  alt={post.title}
                  className="w-full h-96 object-cover"
                  onError={handleImgError}
                />

                <div className="p-8">
                  
                  <div className="prose prose-lg max-w-none">{formatContent(post.content)}</div>
                </div>
              </article>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                {relatedPosts.length > 0 && (
                  <div className="bg-white rounded-xl shadow-lg p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-6">Related Articles</h3>
                    <div className="space-y-4">
                      {relatedPosts.map((rp) => (
                        <Link key={rp.id} href={`/blogs/${rp.slug}`} className="block group">
                          <div className="flex space-x-4">
                            <img
                              src={resolveImage(pickImage(rp))}
                              alt={rp.title}
                              className="w-16 h-16 flex-shrink-0 rounded-lg object-cover group-hover:scale-105 transition-transform duration-200"
                              loading="lazy"
                              onError={handleImgError}
                            />
                            <div className="flex-1 min-w-0">
                              <h4 className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2 mb-1">
                                {rp.title}
                              </h4>
                              <p className="text-xs text-gray-500">{rp.display_date}</p>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </aside>
          </div>

          <div className="max-w-4xl mx-auto mt-16 pt-8 border-t border-gray-200">
            <Link href="/blogs" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to All Blogs
            </Link>
          </div>
        </div>
      </div>
    </GuestLayout>
  );
};

export default BlogDetail;