"use client";

import React from "react";

type Language = { name: string; logoSrc?: string; logoAlt?: string };
type Cert = { title: string; href: string; logoSrc?: string; logoAlt?: string };

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
        <div className="bg-black/60 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg px-6 py-6 md:px-8 md:py-8">
          <p className="text-white/90 font-inter text-base sm:text-lg md:text-xl lg:text-2xl text-center leading-relaxed">
            {blurb}
          </p>
        </div>

        {/* Grid: Languages (left) + Certs (right) */}
        <div className="mt-8 grid gap-6 lg:grid-cols-12">
          {/* Languages */}
          <div className="lg:col-span-7 xl:col-span-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {languages.map((lang) => (
                <div
                  key={lang.name}
                  className="group bg-black/50 border border-white/10 rounded-xl shadow-md p-4 flex items-center gap-4 transition-all
                             hover:border-purple-400/60 hover:shadow-[0_0_30px_rgba(139,92,246,0.35)]"
                >
                  <div className="relative w-12 h-12 rounded-lg bg-white/10 border border-white/10 grid place-items-center overflow-hidden shrink-0">
                    {lang.logoSrc ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={lang.logoSrc}
                        alt={lang.logoAlt ?? `${lang.name} logo`}
                        className="w-full h-full object-contain p-2"
                        loading="lazy"
                      />
                    ) : (
                      <span className="text-white/70 text-xs">{lang.name[0] || "•"}</span>
                    )}
                  </div>
                  <span className="text-white font-inter text-sm sm:text-base">
                    {lang.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Certs */}
          <div className="lg:col-span-5 xl:col-span-4 lg:pl-4">
            <div className="flex flex-col gap-4">
              {certs.map((c) => (
                <a
                  key={c.title}
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block bg-black/50 border border-white/10 rounded-3xl shadow-md px-6 py-6 md:px-8 md:py-8
                             transition-all hover:border-purple-400/60 hover:shadow-[0_0_36px_rgba(139,92,246,0.35)]"
                  aria-label={c.title}
                >
                  <div className="flex items-center gap-4">
                    <div className="relative w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-white/10 border border-white/10 grid place-items-center overflow-hidden shrink-0">
                      {c.logoSrc ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={c.logoSrc}
                          alt={c.logoAlt ?? `${c.title} logo`}
                          className="w-full h-full object-contain p-2"
                          loading="lazy"
                        />
                      ) : (
                        <span className="text-white/70 text-xs">AWS</span>
                      )}
                    </div>
                    <h4 className="text-white font-inter font-semibold text-sm sm:text-base md:text-lg leading-snug">
                      {c.title}
                    </h4>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Download CV button */}
        <div className="mt-8 flex justify-center">
          <a
            href={cvHref}
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center justify-center rounded-xl border border-white/20
                       bg-slate-900/40 px-6 py-3 md:px-7 md:py-3.5 text-white font-inter font-semibold
                       overflow-hidden transition-colors duration-300
                       hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-500"
          >
            {/* sweep overlay */}
            <span
              className="pointer-events-none absolute inset-0 -translate-x-full
                         bg-[linear-gradient(110deg,transparent,rgba(255,255,255,0.2),transparent)]
                         transition-transform duration-500 group-hover:translate-x-full"
            />
            <span className="relative">Download CV</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSkillsCerts;
