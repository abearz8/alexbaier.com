"use client";

import React from "react";

export type ExperienceItem = {
  title: string;
  company?: string;
  start: string;
  end: string;
  description: string;
  skills: string[];
  companyUrl?: string;
  logo?: string; // Add optional logo field
};

const ExperienceCard: React.FC<ExperienceItem> = ({
  title,
  company,
  start,
  end,
  description,
  skills,
  companyUrl,
  logo,
}) => {
  // Determine logo source based on company or provided logo
  const getLogoSrc = () => {
    if (logo) return logo;
    if (company?.toLowerCase().includes('bdo')) return '/BDO_logo.png';
    if (company?.toLowerCase().includes('lakeside')) return '/Lakeside_logo.png';
    if (company?.toLowerCase().includes('council')) return '/USC_logo.png';
    return null;
  };

  const logoSrc = getLogoSrc();
  const logoAlt = company ? `${company} logo` : "Company logo";

  const CardContent = () => (
    <div className="bg-black/40 backdrop-blur-md rounded-xl p-4 border border-white/20 mb-4 shadow-lg transition-all duration-300 hover:bg-black/50 hover:scale-105 hover:border-purple-400/60 hover:shadow-[0_0_30px_rgba(139,92,246,0.35)]">
      <div className="flex items-center gap-8">
        {/* Logo Section */}
        <div className="relative shrink-0 rounded-2xl grid place-items-center overflow-hidden transition-colors duration-300" style={{ width: 'min(20vw, 9rem)', height: 'min(20vw, 9rem)' }}>
          {logoSrc ? (
            <img
              src={logoSrc}
              alt={logoAlt}
              className="w-3/4 h-full object-contain p-3"
              loading="lazy"
            />
          ) : (
            <div className="text-white/50 text-sm text-center">
              {company?.charAt(1) || 'C'}
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-4 mb-2">
            <div className="flex-1">
              <h3 className="text-white text-xl font-bold font-inter mb-1">
                {title}
              </h3>
              {company && (
                <p className="text-purple-300 font-inter transition-colors duration-300 hover:text-purple-200">
                  {company}
                </p>
              )}
            </div>
            <div className="text-white/70 font-inter text-sm whitespace-nowrap hidden sm:block">
              {start} – {end}
            </div>
          </div>
          
          <p className="text-white/80 font-inter leading-relaxed mb-3" style={{ fontSize: 'min(3.5vw, 1rem)' }}>
            {description}
          </p>

          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1.5 rounded-xl border border-white/20 text-white/90 bg-gradient-to-r from-purple-500/20 to-blue-500/20 font-inter transition-all duration-300 hover:from-purple-500/30 hover:to-blue-500/30 hover:border-white/40"
                style={{ fontSize: 'min(3vw, 0.875rem)' }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  // If company URL exists, wrap in link; otherwise return regular card
  if (companyUrl) {
    return (
      <a 
        href={companyUrl} 
        target="_blank" 
        rel="noopener noreferrer"
        className="block transition-transform duration-300 hover:scale-102"
      >
        <CardContent />
      </a>
    );
  }

  return <CardContent />;
};

const ExperienceList: React.FC<{ items: ExperienceItem[]; className?: string }> = ({
  items,
  className = "",
}) => {
  return (
    <div className={`w-full ${className}`}>
      {items.map((item, index) => (
        <ExperienceCard key={index} {...item} />
      ))}
      
      {/* See Full CV Button */}
      <div className="mt-8 flex justify-center">
        <a
          href="https://docs.google.com/document/d/1v4zfolOO6jvOjAXZaRmk57VCiLkeD4xrJb9o3LN5Mvc/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="relative inline-flex items-center justify-center rounded-xl border border-white/20
                     bg-slate-900/40 px-6 py-3 md:px-7 md:py-3.5 text-white font-inter font-semibold
                     overflow-hidden transition-colors duration-300 group w-full max-w-6xl text-center
                     hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-500"
          style={{ fontSize: 'min(3.5vw, 1rem)' }}
        >
          {/* sweep overlay */}
          <span
            className="pointer-events-none absolute inset-0 -translate-x-full
                       bg-[linear-gradient(110deg,transparent,rgba(255,255,255,0.2),transparent)]
                       transition-transform duration-500 group-hover:translate-x-full"
          />
          <span className="relative">See Full CV</span>
        </a>
      </div>
    </div>
  );
};

export default ExperienceList;
