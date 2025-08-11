"use client";

import React from "react";

type Language = { name: string; logoSrc?: string; logoAlt?: string };
type Cert = { title: string; href: string; logoSrc?: string; logoAlt?: string; borderedLogoSrc?: string };

type Props = {
  blurb: string;
  languages: Language[];
  certs: Cert[]; // expect 2, but supports any
  cvHref: string;
  className?: string;
};

const AboutSkillsCerts: React.FC<Props> = ({
  blurb,
  languages,
  certs,
  cvHref,
  className = "",
}) => {
  return (
    <section className={`relative w-full ${className}`}>
      <div className="max-w-6xl mx-auto px-4">
        {/* Blurb */}
        <div className="bg-black/40 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg px-6 py-6 md:px-8 md:py-8">
          <p className="text-white/90 font-inter text-center leading-relaxed" style={{ fontSize: 'min(3.5vw, 1rem)' }}>
            {blurb}
          </p>
        </div>

        {/* Grid: Languages (left) + Certs (right) */}
        <div className="mt-10 grid gap-6 lg:grid-cols-12">
          {/* Languages */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-3 sm:grid-cols-3 gap-3">
              {languages.map((lang) => (
                <div
                  key={lang.name}
                  className="group bg-black/50 rounded-xl shadow-md p-2 sm:p-3 flex flex-col items-center gap-2 transition-all relative
                             hover:shadow-[0_0_30px_rgba(139,92,246,0.35)]"
                  style={{
                    background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.3), rgba(59, 130, 246, 0.3))',
                    backgroundClip: 'padding-box',
                    border: '2px solid transparent',
                    borderRadius: '0.75rem'
                  }}
                >
                  {/* Gradient border overlay */}
                  <div 
                    className="absolute inset-0 rounded-xl pointer-events-none"
                    style={{
                      background: 'linear-gradient(135deg, #8b5cf6, #3b82f6, #ec4899)',
                      padding: '2px',
                      borderRadius: '0.75rem'
                    }}
                  >
                    <div className="w-full h-full bg-black/50 rounded-xl"></div>
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10 flex flex-col items-center gap-2 w-full">
                    <div className="relative rounded-xl grid place-items-center overflow-hidden w-14 h-16 sm:w-20 sm:h-24">
                      {lang.logoSrc ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={lang.logoSrc}
                          alt={lang.logoAlt ?? `${lang.name} logo`}
                          className="w-full h-full object-contain p-1 sm:p-1.5"
                          loading="lazy"
                        />
                      ) : (
                        <span className="text-white/70 text-xs">{lang.name[0] || "•"}</span>
                      )}
                    </div>
                    <span className="text-white font-inter text-center text-xs sm:text-sm md:text-base">
                      {lang.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certs */}
          <div className="lg:col-span-6 lg:pl-6">
            <div className="flex gap-2 justify-center items-center h-full">
              {certs.map((c) => (
                <a
                  key={c.title}
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-all duration-300 hover:scale-110 group"
                  aria-label={c.title}
                >
                  <div className="relative w-30 h-30 sm:w-65 sm:h-65 rounded-xl overflow-hidden">
                    {/* Default image */}
                    <img
                      src={c.logoSrc}
                      alt={c.logoAlt ?? `${c.title} logo`}
                      className="w-full h-full object-contain transition-opacity duration-300 group-hover:opacity-0"
                      loading="lazy"
                    />
                    {/* Bordered image on hover */}
                    {c.borderedLogoSrc && (
                      <img
                        src={c.borderedLogoSrc}
                        alt={c.logoAlt ?? `${c.title} logo`}
                        className="absolute inset-0 w-full h-full object-contain opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                        loading="lazy"
                      />
                    )}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Download CV and Contact buttons */}
        <div className="mt-12 flex justify-center gap-4">
          <a
            href={cvHref}
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center justify-center rounded-xl border border-white/20
                       bg-slate-900/40 px-6 py-3 md:px-7 md:py-3.5 text-white font-inter font-semibold
                       overflow-hidden transition-colors duration-300 group w-44 text-center
                       hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-500"
            style={{ fontSize: 'min(3.5vw, 1rem)' }}
          >
            {/* sweep overlay */}
            <span
              className="pointer-events-none absolute inset-0 -translate-x-full
                         bg-[linear-gradient(110deg,transparent,rgba(255,255,255,0.2),transparent)]
                         transition-transform duration-500 group-hover:translate-x-full"
            />
            <span className="relative">Download CV</span>
          </a>

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                const elementPosition = contactSection.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - 80;
                window.scrollTo({
                  top: offsetPosition,
                  behavior: 'smooth'
                });
              }
            }}
            className="relative inline-flex items-center justify-center rounded-xl border border-white/20
                       bg-gradient-to-r from-purple-600 to-blue-500 px-6 py-3 md:px-7 md:py-3.5 text-white font-inter font-semibold
                       overflow-hidden transition-all duration-300 w-44 text-center group hover:from-fuchsia-500 hover:to-purple-500 cursor-pointer"
            style={{ fontSize: 'min(3.5vw, 1rem)' }}
          >
            {/* sweep overlay */}
            <span
              className="pointer-events-none absolute inset-0 -translate-x-full
                         bg-[linear-gradient(110deg,transparent,rgba(255,255,255,0.2),transparent)]
                         transition-transform duration-500 group-hover:translate-x-full"
            />
            <span className="relative">Contact Me</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSkillsCerts;
