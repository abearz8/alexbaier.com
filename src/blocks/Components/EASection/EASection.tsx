"use client";

import React, { useState, useRef, useEffect } from "react";

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

  const startWaveAnimation = (element: HTMLElement, mouseX: number, mouseY: number) => {
    const rect = element.getBoundingClientRect();
    const x = mouseX - rect.left;
    const y = mouseY - rect.top;
    
    // Calculate angle from center
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const angle = Math.atan2(y - centerY, x - centerX) * (180 / Math.PI);
    const startAngle = (angle < 0 ? angle + 360 : angle) + 90;
    
    element.style.setProperty('--start-angle', `${startAngle}deg`);
    element.classList.add('wave-border');
    
    // Remove the class after animation completes to allow re-triggering
    setTimeout(() => {
      element.classList.remove('wave-border');
    }, 300);
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
          
          @keyframes waveBorder {
            0% { background: conic-gradient(from var(--start-angle, 0deg), #8b5cf6 0deg, transparent 0deg, transparent 360deg); }
            2% { background: conic-gradient(from var(--start-angle, 0deg), #8b5cf6 0deg, #8b5cf6 7.2deg, transparent 7.2deg, transparent 360deg); }
            4% { background: conic-gradient(from var(--start-angle, 0deg), #8b5cf6 0deg, #8b5cf6 14.4deg, transparent 14.4deg, transparent 360deg); }
            6% { background: conic-gradient(from var(--start-angle, 0deg), #8b5cf6 0deg, #8b5cf6 21.6deg, transparent 21.6deg, transparent 360deg); }
            8% { background: conic-gradient(from var(--start-angle, 0deg), #8b5cf6 0deg, #8b5cf6 28.8deg, transparent 28.8deg, transparent 360deg); }
            10% { background: conic-gradient(from var(--start-angle, 0deg), #8b5cf6 0deg, #8b5cf6 36deg, transparent 36deg, transparent 360deg); }
            12% { background: conic-gradient(from var(--start-angle, 0deg), #8b5cf6 0deg, #8b5cf6 43.2deg, transparent 43.2deg, transparent 360deg); }
            14% { background: conic-gradient(from var(--start-angle, 0deg), #8b5cf6 0deg, #8b5cf6 50.4deg, transparent 50.4deg, transparent 360deg); }
            16% { background: conic-gradient(from var(--start-angle, 0deg), #8b5cf6 0deg, #8b5cf6 57.6deg, transparent 57.6deg, transparent 360deg); }
            18% { background: conic-gradient(from var(--start-angle, 0deg), #8b5cf6 0deg, #8b5cf6 64.8deg, transparent 64.8deg, transparent 360deg); }
            20% { background: conic-gradient(from var(--start-angle, 0deg), #8b5cf6 0deg, #8b5cf6 72deg, transparent 72deg, transparent 360deg); }
            22% { background: conic-gradient(from var(--start-angle, 0deg), #8b5cf6 0deg, #8b5cf6 79.2deg, transparent 79.2deg, transparent 360deg); }
            24% { background: conic-gradient(from var(--start-angle, 0deg), #8b5cf6 0deg, #8b5cf6 86.4deg, transparent 86.4deg, transparent 360deg); }
            26% { background: conic-gradient(from var(--start-angle, 0deg), #8b5cf6 0deg, #8b5cf6 93.6deg, transparent 93.6deg, transparent 360deg); }
            28% { background: conic-gradient(from var(--start-angle, 0deg), #8b5cf6 0deg, #8b5cf6 100.8deg, transparent 100.8deg, transparent 360deg); }
            30% { background: conic-gradient(from var(--start-angle, 0deg), #8b5cf6 0deg, #8b5cf6 108deg, transparent 108deg, transparent 360deg); }
            32% { background: conic-gradient(from var(--start-angle, 0deg), #8b5cf6 0deg, #8b5cf6 115.2deg, transparent 115.2deg, transparent 360deg); }
            34% { background: conic-gradient(from var(--start-angle, 0deg), #8b5cf6 0deg, #8b5cf6 122.4deg, transparent 122.4deg, transparent 360deg); }
            36% { background: conic-gradient(from var(--start-angle, 0deg), #8b5cf6 0deg, #8b5cf6 129.6deg, transparent 129.6deg, transparent 360deg); }
            38% { background: conic-gradient(from var(--start-angle, 0deg), #8b5cf6 0deg, #8b5cf6 136.8deg, transparent 136.8deg, transparent 360deg); }
            40% { background: conic-gradient(from var(--start-angle, 0deg), #8b5cf6 0deg, #8b5cf6 144deg, transparent 144deg, transparent 360deg); }
            42% { background: conic-gradient(from var(--start-angle, 0deg), #8b5cf6 0deg, #8b5cf6 151.2deg, transparent 151.2deg, transparent 360deg); }
            44% { background: conic-gradient(from var(--start-angle, 0deg), #8b5cf6 0deg, #8b5cf6 158.4deg, transparent 158.4deg, transparent 360deg); }
            46% { background: conic-gradient(from var(--start-angle, 0deg), #8b5cf6 0deg, #8b5cf6 165.6deg, transparent 165.6deg, transparent 360deg); }
            48% { background: conic-gradient(from var(--start-angle, 0deg), #8b5cf6 0deg, #8b5cf6 172.8deg, transparent 172.8deg, transparent 360deg); }
            50% { background: conic-gradient(from var(--start-angle, 0deg), #8b5cf6 0deg, #8b5cf6 180deg, transparent 180deg, transparent 360deg); }
            52% { background: conic-gradient(from var(--start-angle, 0deg), #8b5cf6 0deg, #8b5cf6 187.2deg, transparent 187.2deg, transparent 360deg); }
            54% { background: conic-gradient(from var(--start-angle, 0deg), #8b5cf6 0deg, #8b5cf6 194.4deg, transparent 194.4deg, transparent 360deg); }
            56% { background: conic-gradient(from var(--start-angle, 0deg), #8b5cf6 0deg, #8b5cf6 201.6deg, transparent 201.6deg, transparent 360deg); }
            58% { background: conic-gradient(from var(--start-angle, 0deg), #8b5cf6 0deg, #8b5cf6 208.8deg, transparent 208.8deg, transparent 360deg); }
            60% { background: conic-gradient(from var(--start-angle, 0deg), #8b5cf6 0deg, #8b5cf6 216deg, transparent 216deg, transparent 360deg); }
            62% { background: conic-gradient(from var(--start-angle, 0deg), #8b5cf6 0deg, #8b5cf6 223.2deg, transparent 223.2deg, transparent 360deg); }
            64% { background: conic-gradient(from var(--start-angle, 0deg), #8b5cf6 0deg, #8b5cf6 230.4deg, transparent 230.4deg, transparent 360deg); }
            66% { background: conic-gradient(from var(--start-angle, 0deg), #8b5cf6 0deg, #8b5cf6 237.6deg, transparent 237.6deg, transparent 360deg); }
            68% { background: conic-gradient(from var(--start-angle, 0deg), #8b5cf6 0deg, #8b5cf6 244.8deg, transparent 244.8deg, transparent 360deg); }
            70% { background: conic-gradient(from var(--start-angle, 0deg), #8b5cf6 0deg, #8b5cf6 252deg, transparent 252deg, transparent 360deg); }
            72% { background: conic-gradient(from var(--start-angle, 0deg), #8b5cf6 0deg, #8b5cf6 259.2deg, transparent 259.2deg, transparent 360deg); }
            74% { background: conic-gradient(from var(--start-angle, 0deg), #8b5cf6 0deg, #8b5cf6 266.4deg, transparent 266.4deg, transparent 360deg); }
            76% { background: conic-gradient(from var(--start-angle, 0deg), #8b5cf6 0deg, #8b5cf6 273.6deg, transparent 273.6deg, transparent 360deg); }
            78% { background: conic-gradient(from var(--start-angle, 0deg), #8b5cf6 0deg, #8b5cf6 280.8deg, transparent 280.8deg, transparent 360deg); }
            80% { background: conic-gradient(from var(--start-angle, 0deg), #8b5cf6 0deg, #8b5cf6 288deg, transparent 288deg, transparent 360deg); }
            82% { background: conic-gradient(from var(--start-angle, 0deg), #8b5cf6 0deg, #8b5cf6 295.2deg, transparent 295.2deg, transparent 360deg); }
            84% { background: conic-gradient(from var(--start-angle, 0deg), #8b5cf6 0deg, #8b5cf6 302.4deg, transparent 302.4deg, transparent 360deg); }
            86% { background: conic-gradient(from var(--start-angle, 0deg), #8b5cf6 0deg, #8b5cf6 309.6deg, transparent 309.6deg, transparent 360deg); }
            88% { background: conic-gradient(from var(--start-angle, 0deg), #8b5cf6 0deg, #8b5cf6 316.8deg, transparent 316.8deg, transparent 360deg); }
            90% { background: conic-gradient(from var(--start-angle, 0deg), #8b5cf6 0deg, #8b5cf6 324deg, transparent 324deg, transparent 360deg); }
            92% { background: conic-gradient(from var(--start-angle, 0deg), #8b5cf6 0deg, #8b5cf6 331.2deg, transparent 331.2deg, transparent 360deg); }
            94% { background: conic-gradient(from var(--start-angle, 0deg), #8b5cf6 0deg, #8b5cf6 338.4deg, transparent 338.4deg, transparent 360deg); }
            96% { background: conic-gradient(from var(--start-angle, 0deg), #8b5cf6 0deg, #8b5cf6 345.6deg, transparent 345.6deg, transparent 360deg); }
            98% { background: conic-gradient(from var(--start-angle, 0deg), #8b5cf6 0deg, #8b5cf6 352.8deg, transparent 352.8deg, transparent 360deg); }
            100% { background: conic-gradient(from var(--start-angle, 0deg), #8b5cf6 0deg, #8b5cf6 360deg); }
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
                "relative z-10 flex-1 px-6 text-sm sm:text-base font-inter font-semibold rounded-tl-2xl",
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
                "relative z-10 flex-1 px-6 text-sm sm:text-base font-inter font-semibold rounded-tr-2xl",
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
                          <h4 className="text-white text-xl font-bold font-inter mb-2">{item.org}</h4>
                          <p className="text-purple-300 font-inter mb-3">{item.position}</p>
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
                      <p className="text-white/80 font-inter leading-relaxed mb-3" style={{ fontSize: 'min(3.5vw, 1rem)' }}>
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
                      <div className="w-full h-16 mb-6 flex items-center justify-center">
                        <img src={award.iconSrc} alt={`${award.title} icon`} className="max-w-[70%] max-h-full object-contain" loading="lazy" />
                      </div>
                      <h4 className="text-white text-xl font-bold font-inter mb-2">{award.title}</h4>
                      <p className="text-white/80 font-inter leading-relaxed" style={{ fontSize: 'min(3.5vw, 1rem)' }}>
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