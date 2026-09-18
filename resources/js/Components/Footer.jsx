import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { ImFacebook2 } from "react-icons/im";
import { FaLinkedin, FaInstagramSquare, FaYoutubeSquare } from "react-icons/fa";
import isoimageone from '../../../public/images/iso_one.png'
import isoimagetwo from '../../../public/images/iso_two.png'
import irdapproved from '../../../public/images/ird_approved.png'
// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Partners and Clients data
const partners = [
    { id: 1, logo: '/images/channel1.png', alt: 'Partner 1' },
    { id: 2, logo: '/images/channel2.png', alt: 'Partner 2' },
    { id: 3, logo: '/images/channel3.png', alt: 'Partner 3' },
    { id: 4, logo: '/images/channel4.png', alt: 'Partner 4' },
    { id: 5, logo: '/images/channel5.png', alt: 'Partner 5' },
];

const clients = [
    { id: 1, logo: 'images/clients/1905.jpg', alt: 'Client 1' },
    { id: 2, logo: 'images/clients/britishcs.jpg', alt: 'Client 2' },
    { id: 3, logo: 'images/clients/chandragiri.jpg', alt: 'Client 3' },
    { id: 4, logo: 'images/clients/kgh.jpg', alt: 'Client 4' },
    { id: 5, logo: 'images/clients/roadhouse.jpg', alt: 'Client 5' },
];

const Footer = () => {
    const footerRef = useRef(null);
    const contactSectionRef = useRef(null);
    const partnersRef = useRef(null);
    const clientsRef = useRef(null);
    const logoRef = useRef(null);

    // Navigation links
    const quickLinks = [
        { name: "Aegis Core", path: "/aegis-core" },
        { name: "Aegis Elite", path: "/aegis-elite" },
        { name: 'Aegis Infinity', path: "/aegis-infinity" },
        { name: "Aegis HMS", path: "/aegis-hms" },
    ];

    const companyLinks = [
        { name: "About", path: "/about-us" },
        { name: "Clients", path: "/clients" },
        { name: "Blogs", path: "/blogs" },
        { name: "Careers", path: "/careers" },
    ];

    const handleNavClick = (e, path) => {
        if (window.location.pathname === path) {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    // GSAP Animations
    useEffect(() => {
        if (!footerRef.current) return;

        // Fade in entire footer
        gsap.fromTo(footerRef.current,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: footerRef.current,
                    start: "top bottom-=100",
                    toggleActions: "play none none reverse"
                }
            }
        );

        // Stagger animation for contact info items
        const contactItems = contactSectionRef.current?.querySelectorAll('.contact-item');
        if (contactItems) {
            gsap.fromTo(contactItems,
                { opacity: 0, x: -20 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 0.6,
                    stagger: 0.1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: contactSectionRef.current,
                        start: "top bottom-=50",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        }

        // Bounce animation for social media icons
        const socialIcons = contactSectionRef.current?.querySelectorAll('.social-icon');
        if (socialIcons) {
            gsap.fromTo(socialIcons,
                { y: 20, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.5,
                    stagger: 0.1,
                    ease: "bounce.out",
                    scrollTrigger: {
                        trigger: contactSectionRef.current,
                        start: "top bottom-=30",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        }

        // Floating animation for logo
        if (logoRef.current) {
            gsap.to(logoRef.current, {
                y: -5,
                duration: 2,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            });
        }

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <footer
            ref={footerRef}
            className="py-8 md:py-10 lg:py-12 bg-[#b2cedf]/40 overflow-hidden"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8  mb-10">

                    {/* About Us */}
                    <div className="space-y-4 col-span-2">
                        <div className="footer-logo">
                            <img
                                src="/images/logo.png"
                                alt="Aegis Logo"
                                className="w-auto h-12 md:h-14"
                                ref={logoRef}
                            />
                        </div>
                        <p className="text-black leading-relaxed text-sm md:text-base sm:pe-12">
                            Aegis HMS/Restro is a complete Hotel/Restaurant Management Software designed to help businesses streamline operations, boost revenue, and reduce manpower costs.
                        </p>

                        {/* Contact Info in About Section for mobile */}
                        <div className="lg:hidden space-y-3 mt-4">
                            <div className="flex items-center">
                                <FaMapMarkerAlt className="text-[#005c96] mr-3 flex-shrink-0" />
                                <span className="text-sm">Dhantil Lane 1, Lalitpur 44600</span>
                            </div>
                            <div className="flex items-center">
                                <FaEnvelope className="text-[#005c96] mr-3 flex-shrink-0" />
                                <a href="mailto:info@aegishms.com" className="text-black hover:text-[#005c96] transition duration-300 text-sm">
                                    info@aegishms.com
                                </a>
                            </div>
                            <div className="flex items-center">
                                <FaPhoneAlt className="text-[#005c96] mr-3 flex-shrink-0" />
                                <a href="tel:+9779707096690" className="text-black hover:text-[#005c96] transition duration-300 text-sm">
                                    +977 9707096690
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4 col-span-1">
                        <h3 className="text-lg font-semibold text-black">Quick Links</h3>
                        <ul className="space-y-2">
                            {quickLinks.map((item, index) => (
                                <li key={index} className="contact-item">
                                    <a
                                        href={item.path}
                                        onClick={(e) => handleNavClick(e, item.path)}
                                        className="text-black hover:text-[#005c96] transition duration-300 text-sm md:text-base flex items-center"
                                    >
                                        <span className="text-[#005c96] mr-2">↳</span>
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div className="space-y-4 col-span-1">
                        <h3 className="text-lg font-semibold text-black">Company</h3>
                        <ul className="space-y-2">
                            {companyLinks.map((item, index) => (
                                <li key={index} className="contact-item">
                                    <a
                                        href={item.path}
                                        onClick={(e) => handleNavClick(e, item.path)}
                                        className="text-black hover:text-[#005c96] transition duration-300 text-sm md:text-base flex items-center"
                                    >
                                        <span className="text-[#005c96] mr-2">↳</span>
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Us - Desktop only */}
                    <div className="hidden lg:block space-y-4 col-span-1">
                        <h3 className="text-lg font-semibold text-black">Contact Us</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start contact-item">
                                <FaMapMarkerAlt className="text-[#005c96] mt-1 mr-3 flex-shrink-0" />
                                <span className="text-sm">Dhantil Lane 1, Lalitpur 44600</span>
                            </li>
                            <li className="flex items-center contact-item">
                                <FaEnvelope className="text-[#005c96] mr-3 flex-shrink-0" />
                                <a href="mailto:info@aegishms.com" className="text-black hover:text-[#005c96] transition duration-300 text-sm">
                                    info@aegishms.com
                                </a>
                            </li>

                        </ul>
                    </div>
                </div>

                {/* Support and Social Section */}
                <div
                    ref={contactSectionRef}
                    className="py-6 border-t border-gray-300"
                >
                    <div className="flex flex-col lg:flex-row justify-between items-center gap-6">

                        {/* Support Contact */}
                        <div className="w-full lg:w-auto">
                            <h3 className="text-lg font-semibold text-black mb-3 text-center lg:text-left"> Contact</h3>
                            <ul>
                                <li className="flex items-center contact-item mb-4">
                                    <FaPhoneAlt className="text-[#005c96] mr-3 flex-shrink-0" />
                                    <a href="tel:+9779707096690" className="text-black hover:text-[#005c96] transition duration-300 text-sm">
                                        +977 9707096690
                                    </a>
                                </li>
                            </ul>
                            <div className="flex flex-col sm:flex-row flex-wrap gap-8 justify-center lg:justify-start">
                                <div className="flex items-center text-sm ">
                                    <span className="text-black font-semibold text-md">Support Extn:</span>
                                    <a
                                        href="tel:+9779707096690,1"
                                        className="text-black hover:text-[#005c96] text-lg transition duration-300 ml-2 font-semibold"
                                    >
                                        1
                                    </a>
                                </div>
                                <div className="flex items-center text-sm">
                                    <span className="text-black font-semibold text-md ">Sales Extn:</span>
                                    <a
                                        href="tel:+9779707096690,2"
                                        className="text-black hover:text-[#005c96] text-lg transition duration-300 ml-2 font-semibold"
                                    >
                                        2
                                    </a>
                                </div>
                                <div className="flex items-center text-sm">
                                    <span className="text-black font-semibold text-md ">Account Extn:</span>
                                    <a
                                        href="tel:+9779707096690,3"
                                        className="text-black hover:text-[#005c96] text-lg transition duration-300 ml-2 font-semibold"
                                    >
                                        3
                                    </a>
                                </div>
                            </div>
                        </div>
                        
                        {/*ISO*/}
                        <div className="flex flex-col gap-3">
                            <p className="font-semibold text-lg text-center">Built on Global and Regional security standards

</p>
                        <div className="flex flex-col lg:flex-row gap-3 items-center justify-center">
                            <div >
                            <img src={irdapproved} className="lg:w-32 w-24"/>
                        </div>
                        <a href="https://connect2.amtivo.com/cert/amtivocert10001.asp?c=536916&v=i4d49rip72&e=127568" target="__blank">
                            <img src={isoimageone} className="lg:w-44 w-32"/>
                        </a>
                        </div>
                        </div>
                        {/* Social Media */}
                        <div className="w-full lg:w-auto">
                            <h3 className="text-lg font-semibold text-black mb-3 text-center lg:text-left">Follow Us</h3>
                            <ul className="flex justify-center lg:justify-start space-x-4">
                                <li>
                                    <a
                                        href="https://www.facebook.com/aegishms"
                                        className="text-black hover:text-[#1877F2] transition duration-300 social-icon block"
                                        aria-label="Facebook"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <ImFacebook2 size={22} />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.linkedin.com/company/aegis-software-nepal/"
                                        className="text-black hover:text-[#0A66C2] transition duration-300 social-icon block"
                                        aria-label="LinkedIn"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <FaLinkedin size={22} />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.instagram.com/aegissoftwarenepal/"
                                        className="text-black hover:text-[#E1306C] transition duration-300 social-icon block"
                                        aria-label="Instagram"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <FaInstagramSquare size={22} />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.youtube.com/@aegissoftware-nepal"
                                        className="text-black hover:text-[#FF0000] transition duration-300 social-icon block"
                                        aria-label="YouTube"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <FaYoutubeSquare size={22} />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Partners and Clients Section - Optional */}
                {/* {partners.length > 0 && clients.length > 0 && (
                    <div className="mt-8 pt-8 border-t border-gray-300">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                           
                            <div ref={partnersRef}>
                                <h3 className="text-xl font-bold text-gray-600 mb-6 text-center">Our Partners</h3>
                                <div className="flex flex-wrap justify-center gap-4 sm:gap-6 items-center">
                                    {partners.map((partner) => (
                                        <div key={partner.id} className="bg-white p-2 rounded">
                                            <img
                                                src={partner.logo}
                                                alt={partner.alt}
                                                className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
                                                loading="lazy"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div ref={clientsRef}>
                                <h3 className="text-xl font-bold text-gray-600 mb-6 text-center">Featured Clients</h3>
                                <div className="flex flex-wrap justify-center gap-4 sm:gap-6 items-center">
                                    {clients.map((client) => (
                                        <div key={client.id} className="bg-white p-2 rounded">
                                            <img
                                                src={client.logo}
                                                alt={client.alt}
                                                className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
                                                loading="lazy"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                )} */}

                {/* Bottom Footer - Copyright */}
                <div className="mt-8 pt-6 border-t border-gray-300">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">

                        {/* Copyright */}
                        <div className="text-center md:text-left">
                            <span className="text-black text-xs sm:text-sm md:text-base">
                                Copyright 2025 | All Rights Reserved Aegis |
                                <a
                                    href="/termsandconditions"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-[#005c96] transition font-semibold duration-300 ml-1"
                                >
                                    Terms & Privacy
                                </a>  |
                                <a
                                    href="/isms-policy"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-[#005c96] transition font-semibold duration-300 ml-1"
                                >
                                  ISMS Policy Statement
                                </a>
                                {" "} | Crafted by{" "}
                                <a
                                    href="https://www.sait.com.np/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-bold hover:text-[#005c96] transition duration-300"
                                >
                                    S.A I.T Solution Nepal
                                </a>
                            </span>
                        </div>


                    </div>
                </div>
            </div>

            <div className="sr-only">
                <h2>Aegis HMS – Hotel Management Software Company in Nepal</h2>

                <p>
                    Aegis HMS is a Nepal-based software company providing cloud hotel management systems,
                    restaurant POS software, hospitality ERP, PMS, and RMS solutions.
                </p>

                <address>
                    <strong>Business Address:</strong> Dhantil Lane 1, Lalitpur 44600, Nepal<br />
                    <strong>Phone:</strong> +977 9707096690<br />
                    <strong>Email:</strong> info@aegishms.com
                </address>

                <p>
                    Serving hotels, restaurants, resorts, and hospitality businesses across Nepal.
                </p>
            </div>

        </footer>
    );
};

export default Footer;