import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';

const Integratedpartner = () => {
  const integrations = [
    {
      id: 1,
      title: "Channel Manager & Booking Engines",
      description: "Channel Manager Integration of Aegis HMS automates real-time booking updates across multiple online travel platforms efficiently.",
      icons: [
        "images/channel1.png",
        "images/channel2.png",
        "images/channel3.png",
        "images/channel4.png",
        "images/partners/ratetiger.svg",
        "images/partners/rategain.png",
        "images/channel5.png",
        "images/channel7.png",
        "images/intergratedPartners/channel8.png",
        "images/intergratedPartners/channel9.png"
      ]
    },
    {
      id: 3,
      title: "Internet & TV",
      description: "Internet & TV Integration of Aegis HMS offers seamless guest internet access and displays personalized welcoming messages through interactive TV, enhancing the guest experience and automating usage tracking and billing",
      icons: [
        "images/intergratedPartners/i1.png",
        "images/intergratedPartners/i2.png",
        "images/intergratedPartners/wl.jpg",
        "images/intergratedPartners/i4.png",
        "images/intergratedPartners/i5.png",
        "images/intergratedPartners/i6.png",
        "images/intergratedPartners/o4.png",
      ]
    },
    {
      id: 4,
      title: "Telephone| EPBAX",
      description: "Telephone/EPABX Integration of Aegis HMS manages internal and external calls, automates billing, and tracks usage efficiently.",
      icons: [
        "images/intergratedPartners/t1.png",
        "images/intergratedPartners/t2.png",
        "images/intergratedPartners/t3.png",
       
        "images/intergratedPartners/g3.png"

      ]
    },
    // {
    //   id: 5,
    //   title: "Payment Gateways",
    //   description: "Payment Gateway Integration of Aegis HMS enables secure, real-time online transactions with automated reconciliation and reporting.",
    //   icons: [
    //     "images/intergratedPartners/g1.png",
    //     "images/intergratedPartners/g2.png",
    //     "images/intergratedPartners/g3.png"
    //   ]
    // },
    {
      id: 6,
      title: "Other Integrations",
      description: "Other Integrations of Aegis HMS include passport scanners, Faremas, ReviewPro, and more, enabling seamless data exchange, enhanced guest verification, and improved operational efficiency across multiple platforms.",
      icons: [
        "images/intergratedPartners/o1.png",
        "images/intergratedPartners/o2.png",
        "images/intergratedPartners/o3.png",
        "images/partners/sin.jfif",
         "images/intergratedPartners/g1.png",
        "images/intergratedPartners/g2.png",

      ]
    }
  ];

  // Custom hook for navigation buttons
  const usePrevNextButtons = (emblaApi) => {
    const [prevBtnDisabled, setPrevBtnDisabled] = React.useState(true);
    const [nextBtnDisabled, setNextBtnDisabled] = React.useState(true);

    const onPrevButtonClick = React.useCallback(() => {
      if (!emblaApi) return;
      emblaApi.scrollPrev();
    }, [emblaApi]);

    const onNextButtonClick = React.useCallback(() => {
      if (!emblaApi) return;
      emblaApi.scrollNext();
    }, [emblaApi]);

    const onSelect = React.useCallback((emblaApi) => {
      setPrevBtnDisabled(!emblaApi.canScrollPrev());
      setNextBtnDisabled(!emblaApi.canScrollNext());
    }, []);

    React.useEffect(() => {
      if (!emblaApi) return;

      onSelect(emblaApi);
      emblaApi.on('reInit', onSelect);
      emblaApi.on('select', onSelect);
    }, [emblaApi, onSelect]);

    return {
      prevBtnDisabled,
      nextBtnDisabled,
      onPrevButtonClick,
      onNextButtonClick
    };
  };

  // Custom hook for dot indicators
  const useDotButton = (emblaApi) => {
    const [selectedIndex, setSelectedIndex] = React.useState(0);
    const [scrollSnaps, setScrollSnaps] = React.useState([]);

    const onDotButtonClick = React.useCallback(
      (index) => {
        if (!emblaApi) return;
        emblaApi.scrollTo(index);
      },
      [emblaApi]
    );

    const onInit = React.useCallback((emblaApi) => {
      setScrollSnaps(emblaApi.scrollSnapList());
    }, []);

    const onSelect = React.useCallback((emblaApi) => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    }, []);

    React.useEffect(() => {
      if (!emblaApi) return;

      onInit(emblaApi);
      onSelect(emblaApi);

      emblaApi.on('reInit', onInit);
      emblaApi.on('reInit', onSelect);
      emblaApi.on('select', onSelect);
    }, [emblaApi, onInit, onSelect]);

    return {
      selectedIndex,
      scrollSnaps,
      onDotButtonClick
    };
  };

  // Navigation Button Components
  const PrevButton = ({ onClick, disabled }) => (
    <button
      className={`embla__button embla__button--prev ${disabled ? 'embla__button--disabled' : ''}`}
      type="button"
      onClick={onClick}
      disabled={disabled}
    >
      <svg className="embla__button__svg" viewBox="0 0 532 532">
        <path
          fill="currentColor"
          d="M355.66 11.354c13.793-13.805 36.208-13.805 50.001 0 13.785 13.804 13.785 36.238 0 50.034L201.22 266l204.442 204.61c13.785 13.805 13.785 36.239 0 50.044-13.793 13.796-36.208 13.796-50.002 0a5994246.277 5994246.277 0 0 0-229.332-229.454 35.065 35.065 0 0 1-10.326-25.126c0-9.2 3.393-18.26 10.326-25.2C172.192 194.973 332.731 34.31 355.66 11.354Z"
        />
      </svg>
    </button>
  );

  const NextButton = ({ onClick, disabled }) => (
    <button
      className={`embla__button embla__button--next ${disabled ? 'embla__button--disabled' : ''}`}
      type="button"
      onClick={onClick}
      disabled={disabled}
    >
      <svg className="embla__button__svg" viewBox="0 0 532 532">
        <path
          fill="currentColor"
          d="M176.34 520.646c-13.793 13.805-36.208 13.805-50.001 0-13.785-13.804-13.785-36.238 0-50.034L330.78 266 126.34 61.391c-13.785-13.805-13.785-36.239 0-50.044 13.793-13.796 36.208-13.796 50.002 0 22.928 22.947 206.395 206.507 229.332 229.454a35.065 35.065 0 0 1 10.326 25.126c0 9.2-3.393 18.26-10.326 25.2-45.865 45.901-206.404 206.564-229.332 229.52Z"
        />
      </svg>
    </button>
  );

  const DotButton = ({ onClick, className, index, selectedIndex }) => (
    <button
      type="button"
      onClick={onClick}
      className={`embla__dot ${className} ${index === selectedIndex ? 'embla__dot--selected' : ''}`}
    />
  );

  // Carousel Component
  const IntegrationCarousel = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({
      align: 'start',
      slidesToScroll: 1,
      breakpoints: {
        '(min-width: 640px)': { slidesToScroll: 1 },
        '(min-width: 768px)': { slidesToScroll: 1 },
        '(min-width: 1024px)': { slidesToScroll: 2 }
      }
    });

    const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi);
    const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);

    const FallbackIcon = ({ className }) => (
      <div className={`bg-gray-200 rounded-lg flex items-center justify-center ${className}`}>
        <span className="text-gray-500 text-xs font-medium">Icon</span>
      </div>
    );

    const ImageIcon = ({ src, alt, className }) => {
      const [hasError, setHasError] = React.useState(false);

      if (hasError) {
        return <FallbackIcon className={className} />;
      }

      return (
        <img
          src={src}
          alt={alt}
          className={className}
          onError={() => setHasError(true)}
          loading="lazy"
        />
      );
    };

    return (
      <div className="embla ">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {integrations.map((integration) => (
              <div className="embla__slide" key={integration.id}>
                <div className="bg-white rounded-xl flex flex-col p-4 sm:p-6 shadow-sm  transition-all duration-300 border border-gray-200  h-full">
                  {/* Icons Section */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {integration.icons.map((iconSrc, iconIndex) => (
                        <div
                          key={iconIndex}
                          className="transition-transform duration-200 flex-shrink-0"
                        >
                          <ImageIcon
                            src={iconSrc}
                            alt={`${integration.title} icon ${iconIndex + 1}`}
                            className="w-16 h-16 md:w-20 md:h-20 rounded-lg object-contain p-1"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Text Section */}
                  <div>
                    <h2 className="text-[#307aa7] text-lg sm:text-xl md:text-2xl font-bold mb-2 leading-tight">
                      {integration.title}
                    </h2>
                    <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed">
                      {integration.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="embla__controls mt-6">
          <div className="embla__buttons">
            <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
            <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
          </div>

          <div className="embla__dots">
            {scrollSnaps.map((_, index) => (
              <DotButton
                key={index}
                onClick={() => onDotButtonClick(index)}
                index={index}
                selectedIndex={selectedIndex}
              />
            ))}
          </div>
        </div>
      </div>
    );
  };

  // CSS styles for the carousel
  const carouselStyles = `
    .embla {
      max-width: 100%;
      margin: auto;
      --slide-spacing: 1rem;
      --slide-size: 100%;
    }
    @media (min-width: 640px) {
      .embla {
        --slide-spacing: 1rem;
        --slide-size: 50%;
      }
    }
    @media (min-width: 1024px) {
      .embla {
        --slide-spacing: 1.5rem;
        --slide-size: calc(100% / 3);
      }
    }
    @media (min-width: 1280px) {
      .embla {
        --slide-spacing: 2rem;
        --slide-size: calc(100% / 3);
      }
    }
    .embla__viewport {
      overflow: hidden;
    }
    .embla__container {
      display: flex;
      touch-action: pan-y pinch-zoom;
      margin-left: calc(var(--slide-spacing) * -1);
    }
    .embla__slide {
      min-width: 0;
      flex: 0 0 var(--slide-size);
      padding-left: var(--slide-spacing);
    }
    .embla__controls {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 1.5rem;
    }
    .embla__buttons {
      display: flex;
      gap: 0.5rem;
      align-items: center;
    }
    .embla__button {
      background-color: white;
      border: 2px solid #e5e7eb;
      width: 2.5rem;
      height: 2.5rem;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: all 0.2s ease;
    }
    .embla__button:hover:not(:disabled) {
      border-color: #067dba;
      color: #067dba;
    }
    .embla__button--disabled {
      opacity: 0.3;
      cursor: not-allowed;
    }
    .embla__button__svg {
      width: 35%;
      height: 35%;
    }
    .embla__dots {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      gap: 0.5rem;
    }
    .embla__dot {
      width: 0.5rem;
      height: 0.5rem;
      border-radius: 50%;
      background-color: #e5e7eb;
      border: none;
      padding: 0;
      cursor: pointer;
      transition: background-color 0.2s ease;
    }
    .embla__dot:hover {
      background-color: #9ca3af;
    }
    .embla__dot--selected {
      background-color: #067dba;
      transform: scale(1.2);
    }
  `;

  return (
    <>
      <style>{carouselStyles}</style>
      <div className=" ">
        <div className="w-full py-8 px-4 sm:py-12 sm:px-6 lg:py-16 lg:px-8 xl:py-20">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 sm:gap-6 mb-8 sm:mb-12 lg:mb-16">
              <div className="flex-1">
                <h2 className="text-2xl sm:text-3xl md:text-4xl text-center font-semibold">
                  <span className="block">Aegis Integrated (Partners)</span>
                </h2>
              </div>
            </div>

            {/* Carousel Component */}
            <IntegrationCarousel />
          </div>
        </div>
      </div>
    </>
  );
};

export default Integratedpartner;