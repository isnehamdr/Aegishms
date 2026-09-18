import React, { useEffect, useRef } from 'react';
import { Head } from '@inertiajs/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import GuestLayout from '@/Layouts/GuestLayout';
import Box from '@mui/material/Box';
import { BsCircleFill } from 'react-icons/bs';

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const ServiceDetails = () => {
    const featureSectionRef = useRef(null);

    useEffect(() => {
        // Feature circle animation
        if (featureSectionRef.current) {
            const featureBoxes = gsap.utils.toArray('.feature-box');
            const getRadius = () => (window.matchMedia('(max-width: 768px)').matches ? 140 : 240);
            const radius = getRadius();
            const angleIncrement = (Math.PI * 2) / featureBoxes.length;

            featureBoxes.forEach((box, index) => {
                const angle = angleIncrement * index;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;
                gsap.set(box, { x, y, opacity: 0, scale: 0.8 });
            });

            ScrollTrigger.create({
                trigger: featureSectionRef.current,
                start: 'top 80%',
                end: 'bottom 20%',
                onEnter: () =>
                    gsap.to(featureBoxes, {
                        opacity: 1,
                        scale: 1,
                        duration: 0.5,
                        stagger: 0.1,
                        ease: 'power2.out',
                    }),
                onLeaveBack: () =>
                    gsap.to(featureBoxes, {
                        opacity: 0,
                        scale: 0.8,
                        duration: 0.3,
                        stagger: 0.05,
                        ease: 'power2.in',
                    }),
            });

            featureBoxes.forEach((box) => {
                box.addEventListener('mouseenter', () =>
                    gsap.to(box, { scale: 1.1, boxShadow: '0 10px 25px rgba(0, 92, 148, 0.3)', duration: 0.3 })
                );
                box.addEventListener('mouseleave', () =>
                    gsap.to(box, { scale: 1, boxShadow: '0 4px 6px rgba(0,0,0,0.1)', duration: 0.3 })
                );
            });
        }
    }, []);

    // SEO data
    const title = 'Aegis Restro – Restaurant Management Software | Aegis Software';
    const description =
        'Aegis Restro is an all-in-one restaurant management software with POS, inventory, CRM, and kitchen management modules. Simplify restaurant operations and boost efficiency.';
    const url = 'https://aegishms.com/services/aegisrestro';
    const imageUrl = 'https://aegishms.com/images/aegisrestro-og.jpg';

    const schema = {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'Aegis Restro',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web',
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
        description,
        url,
        logo: 'https://aegishms.com/images/logo.png',
        provider: {
            '@type': 'Organization',
            name: 'Aegis Software',
            url: 'https://aegishms.com/',
        },
    };

    return (
        <GuestLayout>
            <Head title={title}>
                <meta name="description" content={description} />
                <meta property="og:image" content={imageUrl} />
                <link rel="canonical" href={url} />
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
            </Head>

            {/* Banner Section */}
            <div className="fixed inset-0 -z-10 lg:px-32">
                <div className="absolute top-20 left-20 w-72 h-72 bg-[#005c94]/10 rounded-full mix-blend-multiply blur-xl animate-blob" />
                <div className="absolute top-40 right-20 w-72 h-72 bg-[#0EA5E9]/10 rounded-full mix-blend-multiply blur-xl animate-blob animation-delay-2000" />
                <div className="absolute -bottom-8 left-20 w-72 h-72 bg-[#33C3F0]/10 rounded-full mix-blend-multiply blur-xl animate-blob animation-delay-4000" />
            </div>

            <div className="mt-[68px] bg-[url('/images/half-circle-bg.png')] bg-bottom bg-no-repeat bg-cover flex flex-col justify-center items-center h-[50vh] text-white">
                <h1 className="text-3xl sm:text-5xl font-semibold mb-8 leading-tight">Aegis Restro</h1>
                <ul className="flex items-center text-sm font-semibold uppercase bg-black/5 rounded-lg p-3">
                    <li><a href="/" className="text-white">Home</a></li>
                    <li className="mx-2 text-gray-400">/</li>
                    <li className="text-gray-300">Aegis Restro</li>
                </ul>
            </div>

            {/* Content Section */}
            <Box
                className="gallery sm:px-12 px-4"
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    minHeight: { xs: 'auto', md: '100vh' },
                }}
            >
                {/* Left */}
                <Box
                    className="left"
                    sx={{
                        width: { xs: '100%', md: '50%' },
                        padding: { xs: '1.5rem', md: '4rem' },
                    }}
                >
                    <Box className="details">
                        <h2 className="text-2xl sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-[#005c94] to-[#0EA5E9] font-bold mb-4">Aegis Restro</h2>
                        <p className="text-base sm:text-lg font-[400] text-[#231F20]/80 sm:pe-8">
                           
AegisRestro is a powerful and user-friendly restaurant management system designed to streamline operations and enhance customer experience. Built for restaurants, cafés, bars, and hotels, it manages everything from order taking and billing to inventory and reporting—all within a single intuitive platform.

                           Its advanced POS supports dine-in, takeaway, and delivery orders, along with multiple payment options including QR and digital wallets. The integrated Kitchen Display System (KDS) ensures smooth coordination between service and kitchen teams, reducing errors and improving speed.
                        
                        </p>
                    </Box>
                    <Box className="details mt-12">
                        
                        <p className="text-base sm:text-lg font-[400] text-[#231F20]/80 sm:pe-8 sm:mb-12">
                               
AegisRestro simplifies inventory tracking, stock alerts, vendor management, recipe costing, and menu analysis to help maximize profitability. With detailed analytics and real-time access through AegisPulse, owners can make smarter, faster decisions from anywhere.

Scalable, secure, and reliable, AegisRestro is more than software—it’s a complete operational partner for modern hospitality businesses.
                        </p>
                    </Box>
                </Box>

                {/* ✅ Sticky Right Image */}
                <Box
                    className="rightblock"
                    sx={{
                        width: { xs: '100%', md: '50%' },
                        position: 'relative',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'flex-start',
                        marginTop: { xs: '2rem', md: '8rem' },
                    }}
                >
                    <Box
                        sx={{
                            width: { xs: '90%', md: '40vw' },
                            position: { md: 'sticky' },
                            top: { md: '100px' },
                            borderRadius: '10px',
                            overflow: 'hidden',
                        }}
                    >
                        <img
                            src="/images/Modules/m17.jpeg"
                            alt="Aegis Restro Interface"
                            loading="lazy"
                            style={{
                                width: '100%',
                                height: '80%',
                                objectFit: 'cover',
                            }}
                        />
                    </Box>
                </Box>
            </Box>

            {/* Feature Section */}
            <section
                ref={featureSectionRef}
                className="feature-section relative bg-white py-10 sm:py-36 overflow-hidden lg:px-32"
            >
                <div className="container mx-auto">
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="w-3/4 md:w-1/2 mx-auto sm:px-4 py-10 text-start">
                            <h2 className="text-2xl sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-[#005c94] to-[#0EA5E9] mb-8 font-[600]">
                                Tools for Modern Restaurants
                            </h2>
                            <ul className="grid lg:grid-cols-2 gap-4 text-md text-[#231F20]/80">
                                {[
                                    'POS & Billing',
                                    'Inventory Management',
                                    'Kitchen Display System',
                                    'Table Reservation',
                                    'Staff Scheduling',
                                    'Reporting & Analytics',
                                    'CRM & Loyalty Programs',
                                    'Multi-Outlet Support',
                                ].map((item, index) => (
                                    <li key={index} className="flex items-center">
                                        <BsCircleFill className="mr-3 text-[#005C94]" size={8} />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="w-full md:w-1/2 relative">
                            <div className="relative w-full h-[400px] flex justify-center items-center">
                             <div className="absolute w-32 h-32 bg-white p-2 shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] rounded-full flex justify-center items-center z-10">
                                    <img
                                        src="/images/logo.png"
                                        alt="Aegis Software logo"
                                        className="w-18 h-12"
                                        loading="lazy"
                                    />
                                </div>
                                <div className="absolute inset-0">
                                    {[
                                        'Front Office',
                                        'POS',
                                        'Inventory',
                                        'Finance',
                                        'Housekeeping',
                                        'Payroll',
                                        'Banquet',
                                        'Costing',
                                        'Sales & Marketing',
                                    ].map((feature, index) => (
                                        <div
                                            key={index}
                                            className="feature-box absolute w-16 h-16 sm:w-24 sm:h-24 bg-[#EEF6FF] rounded-lg flex justify-center items-center shadow-lg"
                                            style={{
                                                left: '50%',
                                                top: '50%',
                                                transform: 'translate(-50%, -50%)',
                                            }}
                                        >
                                            <p className="text-xs sm:text-sm font-semibold text-[#005c94] text-center p-2">
                                                {feature}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </GuestLayout>
    );
};

export default ServiceDetails;

// import React, { useEffect, useRef } from 'react';
// import { Head } from '@inertiajs/react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import GuestLayout from '@/Layouts/GuestLayout';
// import Box from '@mui/material/Box';
// import { BsCircleFill } from 'react-icons/bs';

// // Register ScrollTrigger
// gsap.registerPlugin(ScrollTrigger);

// const ServiceDetails = () => {
//     const featureSectionRef = useRef(null);

//     useEffect(() => {
//         // Feature circle animation
//         if (featureSectionRef.current) {
//             const featureBoxes = gsap.utils.toArray('.feature-box');
//             const getRadius = () => (window.matchMedia('(max-width: 768px)').matches ? 140 : 240);
//             const radius = getRadius();
//             const angleIncrement = (Math.PI * 2) / featureBoxes.length;

//             featureBoxes.forEach((box, index) => {
//                 const angle = angleIncrement * index;
//                 const x = Math.cos(angle) * radius;
//                 const y = Math.sin(angle) * radius;
//                 gsap.set(box, { x, y, opacity: 0, scale: 0.8 });
//             });

//             ScrollTrigger.create({
//                 trigger: featureSectionRef.current,
//                 start: 'top 80%',
//                 end: 'bottom 20%',
//                 onEnter: () =>
//                     gsap.to(featureBoxes, {
//                         opacity: 1,
//                         scale: 1,
//                         duration: 0.5,
//                         stagger: 0.1,
//                         ease: 'power2.out',
//                     }),
//                 onLeaveBack: () =>
//                     gsap.to(featureBoxes, {
//                         opacity: 0,
//                         scale: 0.8,
//                         duration: 0.3,
//                         stagger: 0.05,
//                         ease: 'power2.in',
//                     }),
//             });

//             featureBoxes.forEach((box) => {
//                 box.addEventListener('mouseenter', () =>
//                     gsap.to(box, { scale: 1.1, boxShadow: '0 10px 25px rgba(0, 92, 148, 0.3)', duration: 0.3 })
//                 );
//                 box.addEventListener('mouseleave', () =>
//                     gsap.to(box, { scale: 1, boxShadow: '0 4px 6px rgba(0,0,0,0.1)', duration: 0.3 })
//                 );
//             });
//         }
//     }, []);

//     // SEO data
//     const title = 'Aegis Restro – Restaurant Management Software | Aegis Software';
//     const description =
//         'Aegis Restro is an all-in-one restaurant management software with POS, inventory, CRM, and kitchen management modules. Simplify restaurant operations and boost efficiency.';
//     const url = 'https://aegishms.com/services/aegisrestro';
//     const imageUrl = 'https://aegishms.com/images/aegisrestro-og.jpg';

//     const schema = {
//         '@context': 'https://schema.org',
//         '@type': 'SoftwareApplication',
//         name: 'Aegis Restro',
//         applicationCategory: 'BusinessApplication',
//         operatingSystem: 'Web',
//         offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
//         description,
//         url,
//         logo: 'https://aegishms.com/images/logo.png',
//         provider: {
//             '@type': 'Organization',
//             name: 'Aegis Software',
//             url: 'https://aegishms.com/',
//         },
//     };

//     return (
//         <GuestLayout>
//             <Head title={title}>
//                 <meta name="description" content={description} />
//                 <meta property="og:image" content={imageUrl} />
//                 <link rel="canonical" href={url} />
//                 <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
//             </Head>

//             {/* Banner Section */}
//             <div className="fixed inset-0 -z-10 lg:px-32">
//                 <div className="absolute top-20 left-20 w-72 h-72 bg-[#005c94]/10 rounded-full mix-blend-multiply blur-xl animate-blob" />
//                 <div className="absolute top-40 right-20 w-72 h-72 bg-[#0EA5E9]/10 rounded-full mix-blend-multiply blur-xl animate-blob animation-delay-2000" />
//                 <div className="absolute -bottom-8 left-20 w-72 h-72 bg-[#33C3F0]/10 rounded-full mix-blend-multiply blur-xl animate-blob animation-delay-4000" />
//             </div>

//             <div className="mt-[68px] bg-[url('/images/half-circle-bg.png')] bg-bottom bg-no-repeat bg-cover flex flex-col justify-center items-center h-[50vh] text-white">
//                 <h1 className="text-3xl sm:text-5xl font-semibold mb-8 leading-tight">Aegis Restro</h1>
//                 <ul className="flex items-center text-sm font-semibold uppercase bg-black/5 rounded-lg p-3">
//                     <li><a href="/" className="text-white">Home</a></li>
//                     <li className="mx-2 text-gray-400">/</li>
//                     <li className="text-gray-300">Aegis Restro</li>
//                 </ul>
//             </div>

//             {/* Content Section */}
//             <Box
//                 className="gallery"
//                 sx={{
//                     display: 'flex',
//                     flexDirection: { xs: 'column', md: 'row' },
//                     minHeight: { xs: 'auto', md: '100vh' },
//                 }}
//             >
//                 {/* Left */}
//                 <Box
//                     className="left"
//                     sx={{
//                         width: { xs: '100%', md: '50%' },
//                         padding: { xs: '1.5rem', md: '4rem' },
//                     }}
//                 >
//                     <Box className="details">
//                         <h2 className="text-2xl sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-[#005c94] to-[#0EA5E9] font-bold mb-4">Aegis Restro</h2>
//                         <p className="text-base sm:text-lg font-[400] text-[#231F20]/80 sm:pe-8">
//                             AegisRestro is a powerful and user-friendly restaurant management system designed to streamline operations, enhance efficiency, and improve customer experience. Built for modern restaurants, cafes, bars, and hotels, it handles every aspect of restaurant operations from order taking and billing to inventory management and reporting, all through a single, intuitive platform.

//                             The system features an advanced POS module that allows staff to process dine-in, takeaway, and delivery orders quickly and accurately. With support for multiple payment options, QR payments, and integration with digital wallets, billing becomes seamless and error-free. Kitchen Display Systems (KDS) ensure smooth communication between the front-of-house and kitchen staff, reducing mistakes and improving service speed.

                        
//                         </p>
//                     </Box>
//                     <Box className="details mt-12">
                        
//                         <p className="text-base sm:text-lg font-[400] text-[#231F20]/80 sm:pe-8 sm:mb-12">
//                                 AegisRestro simplifies inventory and stock management, allowing managers to track ingredient usage, generate low-stock alerts, and manage vendor orders efficiently. The platform also supports recipe costing and menu analysis, enabling better decision-making for pricing, promotions, and profitability.

//                             Reporting and analytics provide detailed insights into sales trends, revenue, and customer preferences. With integration to AegisPulse, restaurant owners and managers can access real-time data from anywhere, ensuring timely decisions and better operational control.

//                             Designed for scalability, AegisRestro adapts to single outlets or multi-branch operations. Security and reliability are central to the system, ensuring all sensitive data is protected while offering regular updates and technical support.

//                             In essence, AegisRestro is not just a management tool—it is a complete operational partner. By automating routine tasks, providing actionable insights, and improving communication across teams, AegisRestro empowers restaurants to deliver exceptional dining experiences while optimizing performance and profitability.
//                         </p>
//                     </Box>
//                 </Box>

//                 {/* ✅ Sticky Right Image */}
//                 <Box
//                     className="rightblock"
//                     sx={{
//                         width: { xs: '100%', md: '50%' },
//                         position: 'relative',
//                         display: 'flex',
//                         justifyContent: 'center',
//                         alignItems: 'flex-start',
//                         marginTop: { xs: '2rem', md: '8rem' },
//                     }}
//                 >
//                     <Box
//                         sx={{
//                             width: { xs: '90%', md: '40vw' },
//                             position: { md: 'sticky' },
//                             top: { md: '100px' },
//                             borderRadius: '10px',
//                             overflow: 'hidden',
//                         }}
//                     >
//                         <img
//                             src="/images/Modules/m17.jpeg"
//                             alt="Aegis Restro Interface"
//                             loading="lazy"
//                             style={{
//                                 width: '100%',
//                                 height: '80%',
//                                 objectFit: 'cover',
//                             }}
//                         />
//                     </Box>
//                 </Box>
//             </Box>

//             {/* Feature Section */}
//             <section
//                 ref={featureSectionRef}
//                 className="feature-section relative bg-white py-10 sm:py-36 overflow-hidden lg:px-32"
//             >
//                 <div className="container mx-auto">
//                     <div className="flex flex-col md:flex-row items-center">
//                         <div className="w-3/4 md:w-1/2 mx-auto sm:px-4 py-10 text-start">
//                             <h2 className="text-2xl sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-[#005c94] to-[#0EA5E9] mb-8 font-[600]">
//                                 Tools for Modern Restaurants
//                             </h2>
//                             <ul className="grid lg:grid-cols-2 gap-4 text-md text-[#231F20]/80">
//                                 {[
//                                     'POS & Billing',
//                                     'Inventory Management',
//                                     'Kitchen Display System',
//                                     'Table Reservation',
//                                     'Staff Scheduling',
//                                     'Reporting & Analytics',
//                                     'CRM & Loyalty Programs',
//                                     'Multi-Outlet Support',
//                                 ].map((item, index) => (
//                                     <li key={index} className="flex items-center">
//                                         <BsCircleFill className="mr-3 text-[#005C94]" size={8} />
//                                         {item}
//                                     </li>
//                                 ))}
//                             </ul>
//                         </div>

//                         <div className="w-full md:w-1/2 relative">
//                             <div className="relative w-full h-[400px] flex justify-center items-center">
//                              <div className="absolute w-32 h-32 bg-white p-2 shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] rounded-full flex justify-center items-center z-10">
//                                     <img
//                                         src="/images/logo.png"
//                                         alt="Aegis Software logo"
//                                         className="w-18 h-12"
//                                         loading="lazy"
//                                     />
//                                 </div>
//                                 <div className="absolute inset-0">
//                                     {[
//                                         'Front Office',
//                                         'POS',
//                                         'Inventory',
//                                         'Finance',
//                                         'Housekeeping',
//                                         'Payroll',
//                                         'Banquet',
//                                         'Costing',
//                                         'Sales & Marketing',
//                                     ].map((feature, index) => (
//                                         <div
//                                             key={index}
//                                             className="feature-box absolute w-16 h-16 sm:w-24 sm:h-24 bg-[#EEF6FF] rounded-lg flex justify-center items-center shadow-lg"
//                                             style={{
//                                                 left: '50%',
//                                                 top: '50%',
//                                                 transform: 'translate(-50%, -50%)',
//                                             }}
//                                         >
//                                             <p className="text-xs sm:text-sm font-semibold text-[#005c94] text-center p-2">
//                                                 {feature}
//                                             </p>
//                                         </div>
//                                     ))}
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </GuestLayout>
//     );
// };

// export default ServiceDetails;


// import React, { useEffect, useRef } from 'react';
// import { Head } from '@inertiajs/react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import GuestLayout from '@/Layouts/GuestLayout';
// import Box from '@mui/material/Box';
// import { BsCircleFill, BsCheckCircle } from 'react-icons/bs';

// // Register ScrollTrigger
// gsap.registerPlugin(ScrollTrigger);

// const ServiceDetails = () => {
  
//     const featureSectionRef = useRef(null);
//     const contentSectionRef = useRef(null);
//     const imageRef = useRef(null);
//     const heroRef = useRef(null);
//     const statsRef = useRef(null);

//     useEffect(() => {
//         // Feature circle animation
//         if (featureSectionRef.current) {
//             const featureBoxes = gsap.utils.toArray('.feature-box');
//             const getRadius = () => (window.matchMedia('(max-width: 768px)').matches ? 140 : 240);
//             const radius = getRadius();
//             const angleIncrement = (Math.PI * 2) / featureBoxes.length;

//             featureBoxes.forEach((box, index) => {
//                 const angle = angleIncrement * index;
//                 const x = Math.cos(angle) * radius;
//                 const y = Math.sin(angle) * radius;
//                 gsap.set(box, { x, y, opacity: 0, scale: 0.8 });
//             });

//             ScrollTrigger.create({
//                 trigger: featureSectionRef.current,
//                 start: 'top 80%',
//                 end: 'bottom 20%',
//                 onEnter: () =>
//                     gsap.to(featureBoxes, {
//                         opacity: 1,
//                         scale: 1,
//                         duration: 0.5,
//                         stagger: 0.1,
//                         ease: 'power2.out',
//                     }),
//                 onLeaveBack: () =>
//                     gsap.to(featureBoxes, {
//                         opacity: 0,
//                         scale: 0.8,
//                         duration: 0.3,
//                         stagger: 0.05,
//                         ease: 'power2.in',
//                     }),
//             });

//             featureBoxes.forEach((box) => {
//                 box.addEventListener('mouseenter', () =>
//                     gsap.to(box, { scale: 1.1, boxShadow: '0 10px 25px rgba(0, 92, 148, 0.3)', duration: 0.3 })
//                 );
//                 box.addEventListener('mouseleave', () =>
//                     gsap.to(box, { scale: 1, boxShadow: '0 4px 6px rgba(0,0,0,0.1)', duration: 0.3 })
//                 );
//             });
//         }
//           if (contentSectionRef.current) {
//             // Animate heading
//             gsap.fromTo('.content-heading',
//                 { opacity: 0, y: 30 },
//                 {
//                     opacity: 1,
//                     y: 0,
//                     duration: 0.8,
//                     ease: "power2.out",
//                     scrollTrigger: {
//                         trigger: contentSectionRef.current,
//                         start: "top 80%",
//                         toggleActions: "play none none reverse"
//                     }
//                 }
//             );

//             // Animate paragraphs with stagger
//             gsap.fromTo('.content-paragraph',
//                 { opacity: 0, y: 20 },
//                 {
//                     opacity: 1,
//                     y: 0,
//                     duration: 0.8,
//                     stagger: 0.3,
//                     ease: "power2.out",
//                     scrollTrigger: {
//                         trigger: '.content-paragraph',
//                         start: "top 85%",
//                         toggleActions: "play none none reverse"
//                     }
//                 }
//             );

//             // Animate feature highlights
//             gsap.fromTo('.feature-highlight',
//                 { 
//                     opacity: 0,
//                     scale: 0.8,
//                     rotationX: -45 
//                 },
//                 {
//                     opacity: 1,
//                     scale: 1,
//                     rotationX: 0,
//                     duration: 0.6,
//                     stagger: 0.2,
//                     ease: "back.out(1.7)",
//                     scrollTrigger: {
//                         trigger: '.feature-highlight',
//                         start: "top 90%",
//                         toggleActions: "play none none reverse"
//                     }
//                 }
//             );

//             // Add hover effects to feature highlights
//             const highlights = gsap.utils.toArray('.feature-highlight');
//             highlights.forEach(highlight => {
//                 highlight.addEventListener('mouseenter', () => {
//                     gsap.to(highlight, {
//                         scale: 1.05,
//                         y: -5,
//                         duration: 0.3,
//                         ease: "power2.out",
//                         boxShadow: "0 15px 30px rgba(0, 92, 148, 0.15)"
//                     });
//                 });

//                 highlight.addEventListener('mouseleave', () => {
//                     gsap.to(highlight, {
//                         scale: 1,
//                         y: 0,
//                         duration: 0.3,
//                         ease: "power2.out",
//                         boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)"
//                     });
//                 });
//             });
//         }

//         // Image animation
//         if (imageRef.current) {
//             gsap.fromTo(imageRef.current,
//                 { 
//                     opacity: 0,
//                     scale: 0.85,
//                     rotationY: -10 
//                 },
//                 {
//                     opacity: 1,
//                     scale: 1,
//                     rotationY: 0,
//                     duration: 1.2,
//                     delay: 0.4,
//                     ease: "power3.out",
//                     scrollTrigger: {
//                         trigger: imageRef.current,
//                         start: "top 80%",
//                         toggleActions: "play none none reverse"
//                     }
//                 }
//             );

//             // Continuous subtle floating animation
//             gsap.to(imageRef.current, {
//                 y: 15,
//                 duration: 3,
//                 repeat: -1,
//                 yoyo: true,
//                 ease: "sine.inOut"
//             });
//         }

//         // Stats animation
//         if (statsRef.current) {
//             gsap.fromTo('.stat-item',
//                 { opacity: 0, scale: 0.5 },
//                 {
//                     opacity: 1,
//                     scale: 1,
//                     duration: 0.8,
//                     stagger: 0.2,
//                     ease: "elastic.out(1, 0.5)",
//                     scrollTrigger: {
//                         trigger: statsRef.current,
//                         start: "top 85%",
//                         toggleActions: "play none none reverse"
//                     }
//                 }
//             );

//             // Count up animation for stats
//             const counters = document.querySelectorAll('.stat-number');
//             counters.forEach(counter => {
//                 const target = +counter.getAttribute('data-target');
//                 const increment = target / 50;
//                 let current = 0;
                
//                 const updateCounter = () => {
//                     if (current < target) {
//                         current += increment;
//                         counter.textContent = Math.floor(current) + '+';
//                         setTimeout(updateCounter, 30);
//                     } else {
//                         counter.textContent = target + '+';
//                     }
//                 };
                
//                 ScrollTrigger.create({
//                     trigger: counter,
//                     start: "top 90%",
//                     onEnter: updateCounter,
//                     once: true
//                 });
//             });
//         }

//     }, []);

//     // SEO data
//     const title = 'Aegis Restro – Restaurant Management Software | Aegis Software';
//     const description =
//         'Aegis Restro is an all-in-one restaurant management software with POS, inventory, CRM, and kitchen management modules. Simplify restaurant operations and boost efficiency.';
//     const url = 'https://aegishms.com/services/aegisrestro';
//     const imageUrl = 'https://aegishms.com/images/aegisrestro-og.jpg';

//     const schema = {
//         '@context': 'https://schema.org',
//         '@type': 'SoftwareApplication',
//         name: 'Aegis Restro',
//         applicationCategory: 'BusinessApplication',
//         operatingSystem: 'Web',
//         offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
//         description,
//         url,
//         logo: 'https://aegishms.com/images/logo.png',
//         provider: {
//             '@type': 'Organization',
//             name: 'Aegis Software',
//             url: 'https://aegishms.com/',
//         },
//     };

//     return (
//         <GuestLayout>
//             <Head title={title}>
//                 <meta name="description" content={description} />
//                 <meta property="og:image" content={imageUrl} />
//                 <link rel="canonical" href={url} />
//                 <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
//             </Head>

//    {/* Banner Section */}
//                 <div className="fixed inset-0 -z-10 lg:px-32">
                    
//                     <div
//                         className="absolute inset-0 -z-10"
//                         style={{
//                             background:
//                                 "linear-gradient(to bottom, rgba(48, 122, 167, 0.2) )",
//                         }}
//                     />
//                 </div>

//             <div className="mt-[68px] bg-[url('/images/half-circle-bg.png')] bg-bottom bg-no-repeat bg-cover flex flex-col justify-center items-center h-[50vh] text-white">
//                 <h1 className="text-3xl sm:text-5xl font-semibold mb-8 leading-tight">Aegis Restro</h1>
//                 <ul className="flex items-center text-sm font-semibold uppercase bg-black/5 rounded-lg p-3">
//                     <li><a href="/" className="text-white">Home</a></li>
//                     <li className="mx-2 text-gray-400">/</li>
//                     <li className="text-gray-300">Aegis Restro</li>
//                 </ul>
//             </div>

//             {/* Enhanced Content Section */}
//             <div 
//                 ref={contentSectionRef}
//                 id="content"
//                 className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24"
//             >
//                 <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
//                     {/* Left Content */}
//                     <div className="lg:w-1/2 space-y-8">
//                         {/* Main Heading */}
//                         <div>
//                             <h2 className="content-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#005c94] to-[#0EA5E9]">
//                                 Revolutionizing Restaurant Management
//                             </h2>
//                             <p className="content-paragraph text-lg text-gray-600 leading-relaxed mb-6">
//                                 AegisRestro is a powerful and user-friendly restaurant management system designed to streamline operations, enhance efficiency, and improve customer experience. Built for modern restaurants, cafes, bars, and hotels, it handles every aspect of restaurant operations from order taking and billing to inventory management and reporting.
//                             </p>
//                         </div>

//                         {/* Feature Highlights */}
//                         <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//                             {[
//                                 {
//                                     icon: "💳",
//                                     title: "Advanced POS System",
//                                     description: "Quick order processing with multiple payment options"
//                                 },
//                                 {
//                                     icon: "🍽️",
//                                     title: "Kitchen Display",
//                                     description: "Seamless front-to-back communication"
//                                 },
//                                 {
//                                     icon: "📊",
//                                     title: "Real-time Analytics",
//                                     description: "Actionable insights for better decisions"
//                                 },
//                                 {
//                                     icon: "🔄",
//                                     title: "Inventory Management",
//                                     description: "Track stock and automate reordering"
//                                 }
//                             ].map((feature, index) => (
//                                 <div 
//                                     key={index}
//                                     className="feature-highlight bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-50 transform hover:scale-[1.02] cursor-pointer"
//                                 >
//                                     <div className="text-3xl mb-4">{feature.icon}</div>
//                                     <h3 className="text-lg font-semibold text-[#005c94] mb-2">{feature.title}</h3>
//                                     <p className="text-gray-600 text-sm">{feature.description}</p>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>

//                     {/* Right Image - Enhanced */}
//                     <div className="lg:w-1/2 flex items-center justify-center">
//                         <div className="relative w-full max-w-lg group">
//                             <div 
//                                 ref={imageRef}
//                                 className="relative w-full h-[400px] lg:h-[500px] flex items-center justify-center bg-gradient-to-br from-blue-50 to-white overflow-hidden"
//                             >
//                                 <img
//                                     src="/images/Modules/m17.jpeg"
//                                     alt="Aegis Restro Interface"
//                                     className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
//                                     loading="lazy"
//                                 />
                                
//                                 {/* Overlay gradient */}
//                                 <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                
//                                 {/* Floating elements */}
//                                 <div className="absolute top-6 left-6 w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
//                                 <div className="absolute bottom-6 right-6 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200 animate-pulse"></div>
//                             </div>
                            
                          
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Feature Section */}
//             <section
//                 ref={featureSectionRef}
//                 className="feature-section relative bg-white py-10 sm:py-36 overflow-hidden lg:px-32"
//             >
//                 <div className="container mx-auto">
//                     <div className="flex flex-col md:flex-row items-center">
//                         <div className="w-3/4 md:w-1/2 mx-auto sm:px-4 py-10 text-start">
//                             <h2 className="text-2xl sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-[#005c94] to-[#0EA5E9] mb-8 font-[600]">
//                                 Tools for Modern Restaurants
//                             </h2>
//                             <ul className="grid lg:grid-cols-2 gap-4 text-md text-[#231F20]/80">
//                                 {[
//                                     'POS & Billing',
//                                     'Inventory Management',
//                                     'Kitchen Display System',
//                                     'Table Reservation',
//                                     'Staff Scheduling',
//                                     'Reporting & Analytics',
//                                     'CRM & Loyalty Programs',
//                                     'Multi-Outlet Support',
//                                 ].map((item, index) => (
//                                     <li key={index} className="flex items-center">
//                                         <BsCircleFill className="mr-3 text-[#005C94]" size={8} />
//                                         {item}
//                                     </li>
//                                 ))}
//                             </ul>
//                         </div>

//                         <div className="w-full md:w-1/2 relative">
//                             <div className="relative w-full h-[400px] flex justify-center items-center">
//                                 <div className="absolute w-32 h-32 bg-white p-2 shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] rounded-full flex justify-center items-center z-10">
//                                     <img
//                                         src="/images/logo.png"
//                                         alt="Aegis Software logo"
//                                         className="w-18 h-12"
//                                         loading="lazy"
//                                     />
//                                 </div>
//                                 <div className="absolute inset-0">
//                                     {[
//                                         'Front Office',
//                                         'POS',
//                                         'Inventory',
//                                         'Finance',
//                                         'Housekeeping',
//                                         'Payroll',
//                                         'Banquet',
//                                         'Costing',
//                                         'Sales & Marketing',
//                                     ].map((feature, index) => (
//                                         <div
//                                             key={index}
//                                             className="feature-box absolute w-16 h-16 sm:w-24 sm:h-24 bg-[#EEF6FF] rounded-lg flex justify-center items-center shadow-lg"
//                                             style={{
//                                                 left: '50%',
//                                                 top: '50%',
//                                                 transform: 'translate(-50%, -50%)',
//                                             }}
//                                         >
//                                             <p className="text-xs sm:text-sm font-semibold text-[#005c94] text-center p-2">
//                                                 {feature}
//                                             </p>
//                                         </div>
//                                     ))}
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </GuestLayout>
//     );
// };

// export default ServiceDetails;
