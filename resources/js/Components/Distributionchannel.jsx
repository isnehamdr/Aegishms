import React from 'react'

const DistributionChannel = () => {
  const partners = [
    { src: "/images/channel1.png", name: "Channel 1" },
    { src: "/images/channel2.png", name: "Channel 2" },
    { src: "/images/channel3.png", name: "Channel 3" },
    { src: "/images/channel4.png", name: "Channel 4" },
    { src: "/images/channel5.png", name: "Channel 5" },
    { src: "/images/channel7.png", name: "Channel 6" },
  ];

  return (
    <div className="relative overflow-hidden bg-[#f2f8ff] sm:mx-[-128px]">
      <section className="py-16 sm:py-24 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center">
            
            {/* Left Column: Content */}
            <div className="lg:pr-8 xl:pr-12">
              <div className="inline-block relative mb-6">
                <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl text-[#005c94] tracking-tight mb-4">
                  Distribution Network
                </h2>
                <div className="absolute -bottom-2 left-0 w-24 h-1 bg-gradient-to-r from-[#005c94] to-transparent"></div>
              </div>
              
              <p className="text-gray-700 text-lg sm:text-xl mb-8">
                Strategic partnerships with global distribution leaders ensuring seamless product delivery
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1 mr-3">
                    <div className="w-2 h-2 rounded-full bg-[#005c94]"></div>
                  </div>
                  <p className="text-gray-600">
                    Global reach with local expertise in over 50 countries
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1 mr-3">
                    <div className="w-2 h-2 rounded-full bg-[#005c94]"></div>
                  </div>
                  <p className="text-gray-600">
                    Fast and reliable logistics partnerships
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1 mr-3">
                    <div className="w-2 h-2 rounded-full bg-[#005c94]"></div>
                  </div>
                  <p className="text-gray-600">
                    24/7 tracking and monitoring capabilities
                  </p>
                </div>
              </div>
              
             
            </div>

            {/* Right Column: Logo Grid */}
            <div className="relative">
              <div className=" rounded-2xl ">
                <div className="grid grid-cols-3 gap-4 ">
                  {/* First Row: 3 logos */}
                  {partners.slice(0, 3).map((partner, index) => (
                    <div 
                      key={index}
                      className="aspect-square bg-white rounded-xl border border-gray-200 p-4 flex items-center justify-center group "
                    >
                      <img
                        src={partner.src}
                        alt={`${partner.name} - Distribution Partner`}
                        className="w-full h-auto object-contain max-h-12 sm:max-h-16 group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                  ))}
                  
                  {/* Second Row: 3 logos */}
                  {partners.slice(3, 6).map((partner, index) => (
                    <div 
                      key={index + 3}
                      className="aspect-square bg-white rounded-xl border border-gray-200 p-4 flex items-center justify-center group "
                    >
                      <img
                        src={partner.src}
                        alt={`${partner.name} - Distribution Partner`}
                        className="w-full h-auto object-contain max-h-12 sm:max-h-16 group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
                
              
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

export default DistributionChannel;