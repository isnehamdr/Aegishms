import React, { useRef, useState } from 'react';

const MainContent = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const sectionRef = useRef(null);

  const PREVIEW_LENGTH = 2;

  const paragraphs = [
    "Founded in 2020, Aegis Software is a dynamic technology company specializing in comprehensive software development solutions across diverse industries and business domains. Our mission is to empower businesses—whether start-ups or established enterprises—at every phase of the software development journey, from initial concept and business analysis to full-scale solution development, deployment, and ongoing support.",
    "In today's rapidly evolving marketplace, technology is central to differentiation, growth, and profitability. At Aegis Software, we provide full-cycle services focused on Property Management Solutions, Business Application Development, and Mobile App Development.",
    "As a dedicated solution provider, Aegis Software's team spans product development, technical support, consulting, and sales, all working cohesively to streamline operations and support our clients' growth.",
    "Our commitment to client success extends beyond development. We provide critical after-sales support to ensure that our solutions are optimized over time.",
    "As a trusted enterprise partner, we support our clients, partners, and vendors in creating long-term value across sectors in Nepal.",
    "Our approach centers on having the best people, advanced technology, and a deep understanding of our customers' challenges."
  ];

  const previewParagraphs = paragraphs.slice(0, PREVIEW_LENGTH);
  const remainingParagraphs = paragraphs.slice(PREVIEW_LENGTH);

  return (
    <div className="px-4 sm:px-6 lg:px-8 pb-8">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#005c94] via-[#0C7BB3] to-[#0EA5E9] mb-4 sm:mb-6">
            A Complete Hotel Management Software
          </h1>

          <div className="h-1 w-24 sm:w-32 mx-auto bg-gradient-to-r from-[#005c94] to-[#0EA5E9] rounded-full" />
        </div>

        {/* Main Content */}
        <section className="relative">

          {/* Decorative elements (static) */}
          <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-[#005c94]/5 to-transparent rounded-full blur-xl" />
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-tl from-[#0EA5E9]/5 to-transparent rounded-full blur-xl" />

          <div
            ref={sectionRef}
            className="relative bg-white rounded-2xl sm:rounded-3xl shadow-lg border border-zinc-100 p-6 sm:p-8 overflow-hidden"
          >
            <div className="space-y-2">

              {/* Preview paragraphs */}
              {previewParagraphs.map((paragraph, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="hidden sm:flex w-8 h-8 items-center shrink-0 justify-center bg-gradient-to-br from-[#005c94] to-[#0EA5E9] rounded-full">
                    <span className="text-white font-semibold text-sm">
                      {index + 1}
                    </span>
                  </div>

                  <p className="text-[#231F20]/90  leading-relaxed sm:leading-loose text-sm sm:text-base lg:text-lg">
                    {paragraph}
                  </p>
                </div>
              ))}

              {/* Expanded content */}
              {isExpanded && (
                <>
                  <div className="mt-6 border-t border-zinc-100" />

                  {remainingParagraphs.map((paragraph, index) => (
                    <div
                      key={index + PREVIEW_LENGTH}
                      className="flex items-start gap-4 pt-6 sm:pt-8"
                    >
                      <div className="hidden sm:flex w-8 h-8 items-center justify-center bg-gradient-to-br from-[#005c94] to-[#0EA5E9] rounded-full mt-1">
                        <span className="text-white font-semibold text-sm">
                          {index + PREVIEW_LENGTH + 1}
                        </span>
                      </div>

                      <p className="text-[#231F20]/90 leading-relaxed sm:leading-loose text-sm sm:text-base lg:text-lg">
                        {paragraph}
                      </p>
                    </div>
                  ))}
                </>
              )}

              {/* Toggle button */}
              <div className={`pt-6 ${isExpanded ? 'border-t border-zinc-100' : ''}`}>
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="flex items-center justify-center gap-2 w-full sm:w-auto mx-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#005c94] to-[#0EA5E9] hover:from-[#004a7a] hover:to-[#0C7BB3] text-white font-medium rounded-xl sm:rounded-2xl transition-all duration-200"
                >
                  {isExpanded ? 'Show Less' : 'Continue Reading'}
                </button>
              </div>

            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MainContent;
