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
    <div className="bg-black/40 backdrop-blur-md rounded-xl p-4 border border-white/20 mb-4 shadow-lg transition-all duration-300 hover:bg-black/40 hover:scale-105 hover:border-purple-400/40 hover:shadow-xl">
      <div className="flex items-center gap-8">
        {/* Logo Section */}
        <div className="relative shrink-0 rounded-2xl grid place-items-center overflow-hidden transition-colors duration-300" style={{ width: 'min(20vw, 9rem)', height: 'min(20vw, 9rem)' }}>
          {logoSrc ? (
            <img
              src={logoSrc}
              alt={logoAlt}
              className="w-full h-full object-contain p-3"
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
            <div>
              <h3 className="text-white font-bold font-inter mb-1" style={{ fontSize: 'min(4vw, 1.25rem)' }}>
                {title}
              </h3>
              {company && (
                <p className="text-purple-300 font-inter transition-colors duration-300 hover:text-purple-200" style={{ fontSize: 'min(3.5vw, 1rem)' }}>
                  {company}
                </p>
              )}
            </div>
            <div className="text-white/70 font-inter text-sm whitespace-nowrap" style={{ fontSize: 'min(3vw, 0.875rem)' }}>
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
        className="block transition-transform duration-300 hover:scale-105"
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
    </div>
  );
};

export default ExperienceList;
