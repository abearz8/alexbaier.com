"use client";

import React, { useState } from "react";

type Extracurricular = {
  org: string;
  position: string;
  description: string;
  logoSrc: string;
};

type Award = {
  title: string;
  description: string;
  iconSrc: string;
};

type EASectionProps = {
  extracurriculars: Extracurricular[];
  awards: Award[];
  className?: string;
};

const EASection: React.FC<EASectionProps> = ({
  extracurriculars,
  awards,
  className = "",
}) => {
  const [activeTab, setActiveTab] = useState<"extracurriculars" | "awards">("awards");
  const [isAnimating, setIsAnimating] = useState(false);

  const handleTabChange = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      // Switch to the opposite tab
      setActiveTab(activeTab === "extracurriculars" ? "awards" : "extracurriculars");
      // Reset animation state after transition completes
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  return (
    <section className={`relative w-full ${className}`}>
      <style>
        {`
          .ea-card {
            position: relative;
            overflow: hidden;
          }
          
          .ea-card::before {
            content: '';
            position: absolute;
            inset: 0;
            border-radius: inherit;
            padding: 2px;
            background: linear-gradient(90deg, transparent, transparent);
            mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            mask-composite: subtract;
            -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            -webkit-mask-composite: xor;
            pointer-events: none;
            z-index: 1;
            opacity: 0;
            transition: opacity 0.3s ease;
          }
          
          .ea-card.wave-border::before {
            background: conic-gradient(from var(--start-angle, 0deg), #8b5cf6 0deg, #8b5cf6 7.2deg, transparent 7.2deg, transparent 360deg);
            animation: waveBorder 0.3s ease-out forwards;
          }
        `}
      </style>

      {/* Toggle Bar */}
      <div className="relative mx-auto mb-0 flex w-full max-w-md items-center">
          <div className="relative flex w-full h-16 rounded-t-2xl border border-white/15 bg-black/60 backdrop-blur-md">
            {/* Moving indicator */}
            <span
              aria-hidden
              className={[
                "absolute top-0 h-full w-1/2 rounded-t-2xl bg-gradient-to-r from-purple-600 to-blue-500",
                "transition-transform duration-300 ease-out",
                activeTab === "awards" ? "translate-x-0" : "translate-x-full",
              ].join(" ")}
            />
            
            {/* Awards Tab */}
            <button
              onClick={() => handleTabChange()}
              className={[
                "relative z-10 flex-1 px-6 text-xs sm:text-sm md:text-base font-inter font-semibold rounded-tl-2xl",
                "transition-all duration-200 ease-out flex items-center justify-center h-full",
                activeTab === "awards" ? "text-white" : "text-white/70 hover:text-white/90",
              ].join(" ")}
            >
              <span className="text-center">Awards</span>
            </button>
            
            {/* Extracurriculars Tab */}
            <button
              onClick={() => handleTabChange()}
              className={[
                "relative z-10 flex-1 px-6 text-xs sm:text-sm md:text-base font-inter font-semibold rounded-tr-2xl",
                "transition-all duration-200 ease-out flex items-center justify-center h-full",
                activeTab === "extracurriculars" ? "text-white" : "text-white/70 hover:text-white/90",
              ].join(" ")}
            >
              <span className="text-center">Extracurriculars</span>
            </button>
          </div>
        </div>

        {/* Content Container with Animation */}
        <div className={[
          "relative rounded-3xl border border-white/10 bg-black/40 backdrop-blur-md p-6 lg:p-8 shadow-[0_10px_40px_rgba(0,0,0,0.35)]",
          "transition-all duration-500 ease-out",
          isAnimating ? "scale-[1.02] border-purple-400/60 shadow-[0_0_30px_rgba(139,92,246,0.4)]" : "scale-100 border-white/10"
        ].join(" ")}>
          
          {/* Animated Border Overlay */}
          <div className={[
            "absolute inset-0 rounded-3xl pointer-events-none",
            "transition-opacity duration-500 ease-out",
            isAnimating ? "opacity-100" : "opacity-0"
          ].join(" ")}>
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-purple-500/20 animate-pulse"></div>
          </div>

          {/* Content with Fade Animation */}
          <div className={[
            "relative z-10 transition-all duration-300 ease-out",
            isAnimating ? "opacity-50 scale-95" : "opacity-100 scale-100"
          ].join(" ")}>
            {activeTab === "extracurriculars" ? (
              /* Extracurriculars Content */
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 min-h-[275px]">
                {extracurriculars.map((item, index) => (
                  <div
                    key={index}
                    className="ea-card group relative rounded-2xl border-2 border-white/20 bg-black/50 backdrop-blur-md p-5 shadow-lg transition-all duration-300"
                  >
                    <div className="relative z-10 flex flex-col justify-center h-full">
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <div className="flex-1">
                          <h4 className="text-white text-lg sm:text-xl lg:text-2xl font-bold font-inter mb-2">{item.org}</h4>
                          <p className="text-purple-300 font-inter text-lg mb-3">{item.position}</p>
                        </div>
                        <div className="w-14 h-14 rounded-xl bg-white/10 border border-white/10 grid place-items-center overflow-hidden flex-shrink-0 hidden xs:grid">
                          <img
                            src={item.logoSrc}
                            alt={`${item.org} logo`}
                            className="w-full h-full object-contain p-2"
                            loading="lazy"
                          />
                        </div>
                      </div>
                      <p className="text-white/80 font-inter leading-relaxed mb-3 text-base sm:text-lg">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              /* Awards Content */
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 min-h-[275px]">
                {awards.map((award, index) => (
                  <div
                    key={index}
                    className="ea-card group relative rounded-2xl border-2 border-white/20 bg-black/50 backdrop-blur-md p-5 shadow-lg transition-all duration-300"
                  >
                    <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
                      <div className={`w-full h-16 ${award.iconSrc?.includes('Ivey') ? 'mb-4 mt-2' : 'mb-6'} flex items-center justify-center`}>
                        <img src={award.iconSrc} alt={`${award.title} icon`} className="max-w-[70%] max-h-full object-contain" loading="lazy" />
                      </div>
                      <h4 className="text-white text-lg sm:text-xl lg:text-2xl font-bold font-inter mb-2">{award.title}</h4>
                      <p className="text-white/80 font-inter leading-relaxed text-base sm:text-lg">
                        {award.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
    </section>
  );
};

export default EASection;