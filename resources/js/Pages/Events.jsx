// import React, { useState, useEffect, useRef } from "react";
// import { Link } from "@inertiajs/react";
// import GuestLayout from "@/Layouts/GuestLayout";
// import SEO from "@/Components/SEO";

// const SITE_URL = "https://www.aegishms.com"; // no trailing slash
// const FALLBACK_IMAGE = "/images/Modules/hms.jpg";

// const absolute = (img) => (img.startsWith("http") ? img : `${SITE_URL}${img}`);

// // `events` is sent by EventController@publicIndex (from the database)
// const EventsPage = ({ events = [] }) => {
//   const canonicalUrl = `${SITE_URL}/events`;
//   const ogImageUrl = `${SITE_URL}/images/og-events.jpg`;

//   const organizationSchema = {
//     "@type": "Organization",
//     "@id": `${SITE_URL}#organization`,
//     name: "Aegis Software",
//     url: SITE_URL,
//     logo: `${SITE_URL}/images/logo.png`,
//     sameAs: [
//       "https://www.facebook.com/aegishms",
//       "https://www.linkedin.com/company/aegishms",
//       "https://twitter.com/aegishms",
//     ],
//   };

//   const websiteSchema = {
//     "@type": "WebSite",
//     "@id": `${SITE_URL}#website`,
//     url: SITE_URL,
//     name: "Aegis Software",
//     publisher: { "@id": `${SITE_URL}#organization` },
//   };

//   const webpageSchema = {
//     "@type": "WebPage",
//     "@id": `${canonicalUrl}#webpage`,
//     url: canonicalUrl,
//     name: "Our Events | Aegis Software",
//     description:
//       "Discover Aegis Software's participation in hospitality events, exhibitions, and conferences across Nepal. Stay updated with our latest industry engagements.",
//     isPartOf: { "@id": `${SITE_URL}#website` },
//     about: { "@id": `${SITE_URL}#organization` },
//   };

//   const breadcrumbSchema = {
//     "@type": "BreadcrumbList",
//     itemListElement: [
//       { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
//       { "@type": "ListItem", position: 2, name: "Events", item: canonicalUrl },
//     ],
//   };

//   const eventSchemas = events.map((event, index) => ({
//     "@type": "Event",
//     "@id": `${canonicalUrl}#event-${event.id ?? index}`,
//     name: event.title,
//     startDate: event.date,
//     description: event.description || `${event.title} - Aegis Software participation`,
//     image: (event.images || []).map(absolute),
//     organizer: { "@type": "Organization", name: "Aegis Software", url: SITE_URL },
//   }));

//   const fullSchema = {
//     "@context": "https://schema.org",
//     "@graph": [organizationSchema, websiteSchema, webpageSchema, breadcrumbSchema, ...eventSchemas],
//   };

//   return (
//     <GuestLayout>
//       <SEO
//         title="Our Events | Aegis Software Hospitality Events Nepal"
//         description="Discover Aegis Software's participation in hospitality events, exhibitions, and conferences across Nepal. Stay updated with our latest industry engagements and networking opportunities."
//         keywords="Aegis events, hotel management webinars, hospitality events Nepal, hotel software seminars, HAN Expo, travel mart, hospitality conferences"
//         image={ogImageUrl}
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
//               "linear-gradient(109.6deg, rgba(0,92,148,0.05) 11.2%, rgba(14,165,233,0.05) 91.1%)",
//           }}
//         />
//       </div>

//       {/* Banner Section */}
//       <div
//         className="relative mt-[68px] h-[50vh] flex flex-col justify-center items-center bg-bottom bg-no-repeat bg-cover text-white"
//         style={{ backgroundImage: "url('/images/half-circle-bg.png')" }}
//       >
//         <h1 className="text-4xl sm:text-6xl font-semibold mb-8 leading-tight bg-clip-text text-transparent bg-white pb-2">
//           Our Events
//         </h1>

//         <nav aria-label="Breadcrumb">
//           <ul className="st-breadcrumb flex items-center text-sm font-semibold uppercase bg-black/5 rounded-lg p-3">
//             <li>
//               <Link href="/" className="text-white hover:text-white transition-colors">
//                 Home
//               </Link>
//             </li>
//             <li className="mx-2 text-gray-400">/</li>
//             <li className="text-gray-300" aria-current="page">Events</li>
//           </ul>
//         </nav>
//       </div>

//       {/* Introduction Section */}
//       <section className="container mx-auto px-4 py-12 max-w-4xl text-center">
//         <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#005c94] to-[#0EA5E9]">
//           Connecting with the Hospitality Industry
//         </h2>
//         <p className="text-lg text-gray-600">
//           Aegis Software actively participates in hospitality events, exhibitions, and conferences across Nepal.
//           We're committed to engaging with industry professionals, sharing insights, and showcasing our innovative
//           hotel management solutions. Check out our recent and upcoming events below.
//         </p>
//       </section>

//       {/* Events Section */}
//       <div className="container mx-auto px-4 py-12 max-w-7xl">
//         {events.length === 0 ? (
//           <p className="py-16 text-center text-gray-500">
//             No events have been added yet. Please check back soon.
//           </p>
//         ) : (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//             {events.map((event) => (
//               <EventCard key={event.id} event={event} />
//             ))}
//           </div>
//         )}
//       </div>

//       {/* Call to Action Section */}
//       <section className="bg-gradient-to-r from-[#005c94] to-[#0EA5E9] text-white py-16 mt-12">
//         <div className="container mx-auto px-4 text-center max-w-4xl">
//           <h2 className="text-3xl sm:text-4xl font-bold mb-4">Meet Us at Our Next Event</h2>
//           <p className="text-lg mb-8 opacity-90">
//             Interested in connecting with our team? Visit us at upcoming hospitality events or schedule a meeting.
//           </p>
//           <Link
//             href="/contact"
//             className="inline-flex items-center bg-white text-[#005c94] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
//           >
//             Contact Us
//           </Link>
//         </div>
//       </section>
//     </GuestLayout>
//   );
// };

// // Event Card with Autoplay Slider
// const EventCard = ({ event }) => {
//   const images = event.images?.length ? event.images : [FALLBACK_IMAGE];
//   const total = images.length;

//   const [current, setCurrent] = useState(0);
//   const intervalRef = useRef(null);

//   const stopAutoplay = () => {
//     clearInterval(intervalRef.current);
//     intervalRef.current = null;
//   };

//   const startAutoplay = () => {
//     if (intervalRef.current || total <= 1) return;
//     intervalRef.current = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % total);
//     }, 3000);
//   };

//   useEffect(() => {
//     startAutoplay();
//     return stopAutoplay;
//   }, [total]);

//   const nextSlide = () => setCurrent((prev) => (prev + 1) % total);
//   const prevSlide = () => setCurrent((prev) => (prev - 1 + total) % total);

//   return (
//     <article
//       className="bg-white rounded-xl overflow-hidden w-full shadow-lg hover:shadow-xl transition-shadow duration-300"
//       onMouseEnter={stopAutoplay}
//       onMouseLeave={startAutoplay}
//       itemScope
//       itemType="https://schema.org/Event"
//     >
//       {/* Slider */}
//       <div className="relative w-full h-72 overflow-hidden">
//         <img
//           src={images[current]}
//           alt={`${event.title} - Event image ${current + 1}`}
//           className="w-full h-full object-cover transition-all duration-700"
//           loading="lazy"
//           itemProp="image"
//           onError={(e) => {
//             e.currentTarget.onerror = null;
//             e.currentTarget.src = FALLBACK_IMAGE;
//           }}
//         />

//         {total > 1 && (
//           <>
//             <button
//               onClick={prevSlide}
//               className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 text-white w-9 h-9 rounded-full flex items-center justify-center hover:bg-black/70 transition focus:outline-none focus:ring-2 focus:ring-white"
//               aria-label="Previous image"
//             >
//               ‹
//             </button>
//             <button
//               onClick={nextSlide}
//               className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 text-white w-9 h-9 rounded-full flex items-center justify-center hover:bg-black/70 transition focus:outline-none focus:ring-2 focus:ring-white"
//               aria-label="Next image"
//             >
//               ›
//             </button>
//             <div className="absolute bottom-3 right-3 bg-black/50 text-white text-xs px-2 py-1 rounded-full">
//               {current + 1} / {total}
//             </div>
//           </>
//         )}
//       </div>

//       {/* Content */}
//       <div className="p-6 text-center">
//         <h3 className="text-xl font-semibold text-gray-800 mb-2" itemProp="name">
//           {event.title}
//         </h3>
//         <p className="text-gray-500 text-sm" itemProp="startDate" content={event.date}>
//           {event.display_date}
//         </p>
//         {event.description && (
//           <>
//             <p className="text-gray-600 text-sm mt-3 line-clamp-3">{event.description}</p>
//             <meta itemProp="description" content={event.description} />
//           </>
//         )}
//         <meta itemProp="organizer" content="Aegis Software" />
//       </div>
//     </article>
//   );
// };

// export default EventsPage;


import React, { useState, useEffect, useRef } from "react";
import { Link } from "@inertiajs/react";
import GuestLayout from "@/Layouts/GuestLayout";
import SEO from "@/Components/SEO";

const SITE_URL = "https://www.aegishms.com"; // no trailing slash
const FALLBACK_IMAGE = "/images/Modules/hms.jpg";

const imgurl = import.meta.env.VITE_IMAGE_PATH || "";

// Build the full image URL from the DB value.
// - already absolute (http/https) -> keep as is
// - otherwise -> prefix with VITE_IMAGE_PATH (handles stray/missing slashes)
const resolveImage = (path) => {
  if (!path) return FALLBACK_IMAGE;
  if (/^https?:\/\//i.test(path)) return path;

  const base = imgurl.replace(/\/+$/, "");
  let clean = path.replace(/^\/+/, "");

  // If the base already ends with /storage and the DB path also starts with
  // storage/, drop the duplicate so we get /storage/events/... (not /storage/storage/...)
  if (/\/storage$/i.test(base)) {
    clean = clean.replace(/^storage\//i, "");
  }

  return `${base}/${clean}`;
};

const absolute = (img) => (/^https?:\/\//i.test(img) ? img : `${SITE_URL}${img.startsWith("/") ? "" : "/"}${img}`);

// `events` is sent by EventController@publicIndex (from the database)
const EventsPage = ({ events = [] }) => {
  const canonicalUrl = `${SITE_URL}/events`;
  const ogImageUrl = `${SITE_URL}/images/og-events.jpg`;

  const organizationSchema = {
    "@type": "Organization",
    "@id": `${SITE_URL}#organization`,
    name: "Aegis Software",
    url: SITE_URL,
    logo: `${SITE_URL}/images/logo.png`,
    sameAs: [
      "https://www.facebook.com/aegishms",
      "https://www.linkedin.com/company/aegishms",
      "https://twitter.com/aegishms",
    ],
  };

  const websiteSchema = {
    "@type": "WebSite",
    "@id": `${SITE_URL}#website`,
    url: SITE_URL,
    name: "Aegis Software",
    publisher: { "@id": `${SITE_URL}#organization` },
  };

  const webpageSchema = {
    "@type": "WebPage",
    "@id": `${canonicalUrl}#webpage`,
    url: canonicalUrl,
    name: "Our Events | Aegis Software",
    description:
      "Discover Aegis Software's participation in hospitality events, exhibitions, and conferences across Nepal. Stay updated with our latest industry engagements.",
    isPartOf: { "@id": `${SITE_URL}#website` },
    about: { "@id": `${SITE_URL}#organization` },
  };

  const breadcrumbSchema = {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Events", item: canonicalUrl },
    ],
  };

  const eventSchemas = events.map((event, index) => ({
    "@type": "Event",
    "@id": `${canonicalUrl}#event-${event.id ?? index}`,
    name: event.title,
    startDate: event.date,
    description: event.description || `${event.title} - Aegis Software participation`,
    image: (event.images || []).filter(Boolean).map((img) => absolute(resolveImage(img))),
    organizer: { "@type": "Organization", name: "Aegis Software", url: SITE_URL },
  }));

  const fullSchema = {
    "@context": "https://schema.org",
    "@graph": [organizationSchema, websiteSchema, webpageSchema, breadcrumbSchema, ...eventSchemas],
  };

  return (
    <GuestLayout>
      <SEO
        title="Our Events | Aegis Software Hospitality Events Nepal"
        description="Discover Aegis Software's participation in hospitality events, exhibitions, and conferences across Nepal. Stay updated with our latest industry engagements and networking opportunities."
        keywords="Aegis events, hotel management webinars, hospitality events Nepal, hotel software seminars, HAN Expo, travel mart, hospitality conferences"
        image={ogImageUrl}
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
              "linear-gradient(109.6deg, rgba(0,92,148,0.05) 11.2%, rgba(14,165,233,0.05) 91.1%)",
          }}
        />
      </div>

      {/* Banner Section */}
      <div
        className="relative mt-[68px] h-[50vh] flex flex-col justify-center items-center bg-bottom bg-no-repeat bg-cover text-white"
        style={{ backgroundImage: "url('/images/half-circle-bg.png')" }}
      >
        <h1 className="text-4xl sm:text-6xl font-semibold mb-8 leading-tight bg-clip-text text-transparent bg-white pb-2">
          Our Events
        </h1>

        <nav aria-label="Breadcrumb">
          <ul className="st-breadcrumb flex items-center text-sm font-semibold uppercase bg-black/5 rounded-lg p-3">
            <li>
              <Link href="/" className="text-white hover:text-white transition-colors">
                Home
              </Link>
            </li>
            <li className="mx-2 text-gray-400">/</li>
            <li className="text-gray-300" aria-current="page">Events</li>
          </ul>
        </nav>
      </div>

      {/* Introduction Section */}
      <section className="container mx-auto px-4 py-12 max-w-4xl text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#005c94] to-[#0EA5E9]">
          Connecting with the Hospitality Industry
        </h2>
        <p className="text-lg text-gray-600">
          Aegis Software actively participates in hospitality events, exhibitions, and conferences across Nepal.
          We're committed to engaging with industry professionals, sharing insights, and showcasing our innovative
          hotel management solutions. Check out our recent and upcoming events below.
        </p>
      </section>

      {/* Events Section */}
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        {events.length === 0 ? (
          <p className="py-16 text-center text-gray-500">
            No events have been added yet. Please check back soon.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        )}
      </div>

      {/* Call to Action Section */}
      <section className="bg-gradient-to-r from-[#005c94] to-[#0EA5E9] text-white py-16 mt-12">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Meet Us at Our Next Event</h2>
          <p className="text-lg mb-8 opacity-90">
            Interested in connecting with our team? Visit us at upcoming hospitality events or schedule a meeting.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center bg-white text-[#005c94] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </GuestLayout>
  );
};

// Event Card with Autoplay Slider
const EventCard = ({ event }) => {
  // Resolve every DB path to a full URL; use the fallback only when there are no images
  const dbImages = (event.images || []).filter(Boolean);
  const images = dbImages.length ? dbImages.map(resolveImage) : [FALLBACK_IMAGE];
  const total = images.length;

  const [current, setCurrent] = useState(0);
  const intervalRef = useRef(null);

  const stopAutoplay = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  const startAutoplay = () => {
    if (intervalRef.current || total <= 1) return;
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, 3000);
  };

  useEffect(() => {
    startAutoplay();
    return stopAutoplay;
  }, [total]);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % total);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + total) % total);

  return (
    <article
      className="bg-white rounded-xl overflow-hidden w-full shadow-lg hover:shadow-xl transition-shadow duration-300"
      onMouseEnter={stopAutoplay}
      onMouseLeave={startAutoplay}
      itemScope
      itemType="https://schema.org/Event"
    >
      {/* Slider */}
      <div className="relative w-full h-72 overflow-hidden">
        <img
          src={images[current]}
          alt={`${event.title} - Event image ${current + 1}`}
          className="w-full h-full object-cover transition-all duration-700"
          loading="lazy"
          itemProp="image"
        />

        {total > 1 && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 text-white w-9 h-9 rounded-full flex items-center justify-center hover:bg-black/70 transition focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Previous image"
            >
              ‹
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 text-white w-9 h-9 rounded-full flex items-center justify-center hover:bg-black/70 transition focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Next image"
            >
              ›
            </button>
            <div className="absolute bottom-3 right-3 bg-black/50 text-white text-xs px-2 py-1 rounded-full">
              {current + 1} / {total}
            </div>
          </>
        )}
      </div>

      {/* Content */}
      <div className="p-6 text-center">
        <h3 className="text-xl font-semibold text-gray-800 mb-2" itemProp="name">
          {event.title}
        </h3>
        <p className="text-gray-500 text-sm" itemProp="startDate" content={event.date}>
          {event.display_date}
        </p>
        {event.description && (
          <>
            <p className="text-gray-600 text-sm mt-3 line-clamp-3">{event.description}</p>
            <meta itemProp="description" content={event.description} />
          </>
        )}
        <meta itemProp="organizer" content="Aegis Software" />
      </div>
    </article>
  );
};

export default EventsPage;