import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showWhatsApp, setShowWhatsApp] = useState(false);
  const whatsappNumber = '+9779801061466';

  const containerRef = useRef(null);
  const textRef = useRef(null);
  const animationRef = useRef(null);

  const LOGO_SIZE = 44;
  const LOGO_SIZE_MOBILE = 40;
  const SCROLL_THRESHOLD = 100;

  const toggleVisibility = () => {
    setIsVisible(window.scrollY > 300);
    setShowWhatsApp(window.scrollY > SCROLL_THRESHOLD);
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const expandContainer = () => {
    if (!containerRef.current || !textRef.current) return;
    if (animationRef.current) animationRef.current.kill();

    const container = containerRef.current;
    const text = textRef.current;
    const logoSize = window.innerWidth < 768 ? LOGO_SIZE_MOBILE : LOGO_SIZE;

    gsap.set(text, { display: 'block' });
    const textWidth = text.scrollWidth;
    const totalWidth = logoSize + textWidth + 40; // padding

    animationRef.current = gsap.timeline()
      .to(container, { duration: 0.5, width: totalWidth, height: logoSize, padding: '0 1.25rem', borderRadius: '9999px', ease: "expo.out" })
      .to(text, { duration: 0.4, opacity: 1, x: 0, ease: "power3.out" }, "-=0.3")
      .to(container.querySelector('a'), { duration: 0.3, scale: 1.08, ease: "elastic.out(1,0.5)" }, "-=0.4");
  };

  const collapseContainer = () => {
    if (!containerRef.current || !textRef.current) return;
    if (animationRef.current) animationRef.current.kill();

    const container = containerRef.current;
    const text = textRef.current;
    const logoSize = window.innerWidth < 768 ? LOGO_SIZE_MOBILE : LOGO_SIZE;

    animationRef.current = gsap.timeline({
      onComplete: () => {
        gsap.set(container, { width: logoSize, height: logoSize, padding: 0, borderRadius: '9999px' });
        gsap.set(text, { display: 'none' });
      }
    })
      .to(text, { duration: 0.25, opacity: 0, x: 15, ease: "power3.in" })
      .to(container, { duration: 0.4, width: logoSize, height: logoSize, padding: 0, borderRadius: '9999px', ease: "expo.in" }, "-=0.1")
      .to(container.querySelector('a'), { duration: 0.25, scale: 1, ease: "power2.out" }, "-=0.2");
  };

  const handleMouseEnter = () => expandContainer();
  const handleMouseLeave = () => collapseContainer();

  useEffect(() => {
    if (showWhatsApp && containerRef.current && textRef.current) {
      const container = containerRef.current;
      gsap.set(container, { width: LOGO_SIZE, height: LOGO_SIZE, padding: 0, borderRadius: '9999px', overflow: 'hidden', opacity: 0, y: 20, scale: 0.8 });
      gsap.set(textRef.current, { opacity: 0, x: 15, display: 'none' });

      animationRef.current = gsap.timeline()
        .to(container, { duration: 0.6, opacity: 1, y: 0, scale: 1, ease: "back.out(1.7)" })
        .to(container, { duration: 1.5, y: -6, repeat: -1, yoyo: true, ease: "sine.inOut" }, "+=0.2");
    }
  }, [showWhatsApp]);

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    toggleVisibility();
    const handleResize = () => {
      if (containerRef.current && showWhatsApp) {
        const logoSize = window.innerWidth < 768 ? LOGO_SIZE_MOBILE : LOGO_SIZE;
        gsap.set(containerRef.current, { width: logoSize, height: logoSize });
      }
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) animationRef.current.kill();
    };
  }, [showWhatsApp]);

  const handleTouch = () => {
    if (!showWhatsApp) return;
    expandContainer();
    window.open(`https://wa.me/${whatsappNumber}`, '_blank');
    setTimeout(() => collapseContainer(), 3000);
  };

  return (
    <>
      {/* Back to Top */}
      {isVisible && (
        <button onClick={scrollToTop} className="fixed bottom-6 right-6 w-10 h-10 md:w-11 md:h-11 bg-[#005c94] text-white border-2 border-[#005c94] rounded-full cursor-pointer z-[999] shadow-xl flex items-center justify-center hover:scale-110 transition-all duration-300" aria-label="Back to top">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 md:w-6 md:h-6">
            <path d="M12 19V5M5 12l7-7 7 7"/>
          </svg>
        </button>
      )}

      {/* WhatsApp */}
      {showWhatsApp && (
        <div
          ref={containerRef}
          className="fixed bottom-20 right-6 z-[999] cursor-pointer flex items-center gap-3 bg-[#25D366] border border-gray-600 rounded-full shadow-xl"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onTouchEnd={handleTouch}
        >
          <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-[#128C7E] transition-colors duration-200 relative" aria-label={`Chat on WhatsApp: ${whatsappNumber}`}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-5 h-5 md:w-6 md:h-6 pointer-events-none">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            <span className="absolute -top-2 -right-2 bg-red-500 w-5 h-5 rounded-full animate-ping"></span>
          </a>
          <span ref={textRef} className="text-white font-medium text-sm md:text-base whitespace-nowrap opacity-0">{whatsappNumber}</span>
        </div>
      )}
    </>
  );
};

export default BackToTop;
