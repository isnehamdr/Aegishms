import { useEffect, useState } from "react";
import { FaWhatsapp, FaArrowUp } from "react-icons/fa";

const Whatsapp = () => {
  const whatsappNumber = "+9779801061466";
  const whatsappMessage = "Hello! I'm interested in your services.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-4">
      {/* Back to Top */}
      {showTop && (
        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          className="group relative w-12 h-12 rounded-full bg-white/80 backdrop-blur border border-gray-200 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
          <FaArrowUp className="mx-auto text-gray-800 group-hover:text-blue-600 transition" />
          <span className="absolute inset-0 rounded-full bg-blue-500/10 opacity-0 group-hover:opacity-100 transition" />
        </button>
      )}

      {/* WhatsApp */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group relative w-14 h-14 rounded-full flex items-center justify-center
        bg-gradient-to-br from-green-400 to-green-600 text-white
        shadow-xl transition-all duration-300
        hover:scale-110 hover:shadow-2xl
        animate-float"
      >
        {/* Glow */}
        <span className="absolute inset-0 rounded-full bg-green-400/40 blur-xl opacity-70 group-hover:opacity-100 transition" />

        {/* Icon */}
        <FaWhatsapp size={28} className="relative z-10" />

        {/* Notification Ping */}
        <span className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-red-500 rounded-full animate-ping" />
        <span className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-red-500 rounded-full" />
      </a>
    </div>
  );
};

export default Whatsapp;
