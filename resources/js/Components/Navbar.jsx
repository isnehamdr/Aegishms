import React, { useEffect, useRef, useState } from "react";
import aegislogo from "../../../public/images/logo.png";
import { Link, usePage } from "@inertiajs/react"; // <-- usePage for scroll
import gsap from "gsap";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const offcanvasRef = useRef(null);
  const overlayRef = useRef(null);
  const menuItemsRef = useRef([]);

  // Scroll to top on Inertia route change
  const { url } = usePage();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [url]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOffcanvasOpen) closeOffcanvas();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOffcanvasOpen]);

  useEffect(() => {
    const handleScroll = () =>
      requestAnimationFrame(() => setIsScrolled(window.scrollY > 50));
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOffcanvasOpen) {
      document.body.style.overflow = "hidden";

      gsap.to(overlayRef.current, {
        opacity: 1,
        duration: 0.3,
        ease: "power2.out",
        onStart: () => {
          overlayRef.current.style.pointerEvents = "auto";
        },
      });

      gsap.to(offcanvasRef.current, {
        x: "0%",
        duration: 0.6,
        ease: "expo.out",
      });

      gsap.from(menuItemsRef.current, {
        y: 40,
        opacity: 0,
        duration: 0.5,
        stagger: 0.12,
        ease: "power3.out",
        delay: 0.2,
      });
    } else {
      document.body.style.overflow = "auto";
      setActiveDropdown(null);

      gsap.to(overlayRef.current, {
        opacity: 0,
        duration: 0.25,
        ease: "power2.in",
        onComplete: () => {
          overlayRef.current.style.pointerEvents = "none";
        },
      });

      gsap.to(offcanvasRef.current, {
        x: "100%",
        duration: 0.5,
        ease: "power2.in",
      });
    }

    return () => {
      gsap.killTweensOf([
        overlayRef.current,
        offcanvasRef.current,
        menuItemsRef.current,
      ]);
    };
  }, [isOffcanvasOpen]);

  const toggleOffcanvas = () => setIsOffcanvasOpen(!isOffcanvasOpen);
  const closeOffcanvas = () => setIsOffcanvasOpen(false);

  // Nav items
  const navLinks = [
    { name: "Home", path: "/" },
    {
      name: "Company",
      dropdown: [
        { name: "About", path: "/about-us" },
        { name: "Our Teams", path: "/teams" },
        { name: "Careers", path: "/careers" },
        { name: "Partners", path: "/partners" },
      ],
    },
    {
      name: "Modules",
      dropdown: [
        { name: "Front Office Management", path: "/modules/front-office" },
        { name: "Housekeeping Management", path: "/modules/housekeeping" },
        { name: "Point of Sale (POS)", path: "/modules/point-of-sales" },
        { name: "Finance Management", path: "/modules/finance" },
        { name: "Inventory Management", path: "/modules/inventory" },

        { name: "Banquet Management", path: "/modules/banquet" },
        { name: "F&B Costing Module", path: "/modules/costing" },
        { name: "Payroll Management", path: "/modules/payroll" },
        { name: "Sales & Marketing Module", path: "/modules/sales-marketing" },
        { name: "Fixed Assets Management", path: "/modules/fixed-assets-module" },
        { name: "Foreign Encashment", path: "/modules/foreign-exchange-encashment" },

      ],
    },
    {
      name: "Services",
      dropdown: [
        { name: "Aegis HMS", path: "/aegis-hms" },
        { name: "Aegis Restro", path: "/aegis-restro" },
        { name: "Aegis Pulse", path: "/aegis-pulse" },
        { name: "Aegis Order APP", path: "/aegis-order-app" },
        { name: "Aegis-OPS", path: "/aegis-ops" },
        { name: "e-Checkin", path: "/e-checkin" },
        { name: "Kitchen Display System (KDS)", path: "/kds" },

      ],
    },
    {
      name: "Products",
      dropdown: [
        { name: "Aegis Core", path: "/aegis-core" },
        { name: "Aegis Elite", path: "/aegis-elite" },
        { name: "Aegis Infinity", path: "/aegis-infinity" },
      ],
    },
    { name: "Events", path: "/events" },
    { name: "Clients", path: "/clients" },
    { name: "Blogs", path: "/blogs" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      {/* Main Navbar */}
      <nav
        className={`fixed w-full top-0 left-0 right-0 z-50 overflow-visible transition-all duration-300 px-4 sm:px-8 ${isScrolled ? "bg-white shadow-md py-2" : "bg-white py-3"
          }`}
      >
        <div className="flex items-center justify-between max-w-7xl mx-auto relative">
          {/* Logo */}
          <Link
            href="/"
            className="w-[120px] md:w-[140px] transition hover:opacity-90"
          >
            <img src={aegislogo} alt="Aegis Logo" className="h-auto w-full" />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex space-x-6 items-center">
            {navLinks.map((item) => (
              <li key={item.name} className="relative group">
                <Link
                  href={item.path ?? "#"}
                  role={item.dropdown ? "button" : undefined}
                  aria-expanded={item.dropdown ? "false" : undefined}
                  className="text-[#005C94] font-semibold text-base tracking-wide hover:text-[#003d66] flex items-center"
                  onClick={(e) => {
                    if (item.dropdown) e.preventDefault();
                    if (item.path && window.location.pathname === item.path) {
                      e.preventDefault();
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }
                  }}
                >
                  {item.name}
                  {item.dropdown && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                </Link>

                {/* Desktop Dropdown */}
                {item.dropdown && (
                  <div
                    className={`absolute left-0 top-full mt-0 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 z-50 ${item.name === "Modules" ? "w-60" : "w-40"
                      }`}
                  >
                    <div
                      className={`bg-white shadow-xl rounded-lg px-4 py-6 ${item.name === "Modules"
                        ? "flex flex-col space-y-2"
                        : "grid grid-cols-1 gap-4"
                        }`}
                    >
                      {item.dropdown.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.path}
                          className="block px-2 py-1 text-sm  text-gray-700 hover:bg-blue-50 hover:text-[#005C94] rounded transition"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleOffcanvas}
            className="lg:hidden text-gray-800 p-2 rounded-md hover:bg-gray-100"
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Overlay */}
      <div
        ref={overlayRef}
        className="fixed inset-0 bg-black bg-opacity-40 z-40 opacity-0 pointer-events-none"
        onClick={closeOffcanvas}
      />

      {/* Mobile Offcanvas */}
      <div
        ref={offcanvasRef}
        className="fixed top-0 right-0 h-full w-screen z-50 flex items-center justify-center backdrop-blur-lg bg-black/60 translate-x-full"
      >
        <button
          onClick={closeOffcanvas}
          className="absolute top-8 right-8 text-white hover:text-gray-300 focus:outline-none z-10"
          aria-label="Close menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <nav className="text-center max-w-2xl w-full px-6">
          <ul className="space-y-4">
            {navLinks.map((item, index) => (
              <li key={item.name}>
                <div>
                  <Link
                    href={item.path ?? "#"}
                    role={item.dropdown ? "button" : undefined}
                    aria-expanded={
                      item.dropdown
                        ? (activeDropdown === item.name).toString()
                        : undefined
                    }
                    ref={(el) => (menuItemsRef.current[index] = el)}
                    onClick={(e) => {
                      if (item.dropdown) {
                        e.preventDefault();
                        setActiveDropdown(
                          activeDropdown === item.name ? null : item.name
                        );
                      } else {
                        closeOffcanvas();
                        if (window.location.pathname === item.path) {
                          e.preventDefault();
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        }
                      }
                    }}
                    className="block text-white text-2xl font-semibold hover:text-blue-200 transition-colors flex items-center justify-center"
                  >
                    {item.name}

                    {item.dropdown && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`ml-3 h-6 w-6 transition-transform ${activeDropdown === item.name ? "rotate-180" : ""
                          }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    )}
                  </Link>

                  {item.dropdown && activeDropdown === item.name && (
                    <ul className="mt-6 space-y-2">
                      {item.dropdown.map((subItem) => (
                        <li key={subItem.name}>
                          <Link
                            href={subItem.path}
                            onClick={closeOffcanvas}
                            className="block text-white text-sm font-medium hover:text-blue-200 transition-colors opacity-90"
                          >
                            {subItem.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
