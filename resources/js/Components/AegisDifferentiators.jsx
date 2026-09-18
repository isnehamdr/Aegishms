export default function AegisDifferentiators() {
  const differentiators = [
    { image: "/images/icon3.png", title: "24/7/365 Tech Support" },
    { image: "/images/icon4.png", title: "Regular Product Updates" },
    { image: "/images/icon1.png", title: "Emerging Technologies built on modern architecture to ensure speed, reliability & future scalability" },
    { image: "/images/07.png", title: "Customer Segments serving 5-star luxury hotels to budget properties, adapting to each client’s unique needs." },
    { image: "/images/06.png", title: "Compliance" },
    { image: "/images/08.png", title: "Fast Implementation" },
    { image: "/images/09.png", title: "7 Provinces Presence" },
    { image: "/images/04.png", title: "Complete Integration" },
    { image: "/images/icon2.png", title: "Proven Track Record: 5+ years, 400+ satisfied clients and growing" },
    { image: "/images/10.png", title: "Exclusive knowledge base" }
  ];

  return (
    <div className=" py-12 sm:py-16 md:py-20 bg-[#f2f8ff] sm:mx-[-128px]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Left Column - Title & Description */}
          <div className="lg:col-span-2">
            <div className="sticky top-20">
              <h2 className="text-[#307aa7] text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight">
                AEGIS SOFTWARE <br />
                <span className="text-lg sm:text-xl font-semibold text-gray-700 tracking-tight leading-tight">DIFFERENTIATORS</span>
              </h2>
            
            </div>
          </div>

          {/* Right Column - Differentiators Grid */}
          <div className="lg:col-span-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {differentiators.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 sm:p-5 bg-white border border-gray-200 rounded-xl hover:shadow-md transition-shadow duration-200"
                >
                  <div className="w-16 h-16 flex-shrink-0 flex items-center justify-center bg-blue-50 rounded-lg">
                    <img
                      src={item.image}
                      alt="agies software differentiators"
                      className="w-12 h-12 object-contain"
                      loading="lazy"
                    />
                  </div>
                  <p className="text-gray-800 text-sm sm:text-base leading-relaxed">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}