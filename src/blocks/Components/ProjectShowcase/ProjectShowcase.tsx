"use client";

import React from "react";

type ProjectShowcaseProps = {
  title: string;
  description: string;
  imageSrc: string;
  smallImageSrc?: string;
  imageAlt: string;
  liveHref: string;
  githubHref?: string;
  align: "left" | "right";
  isLast?: boolean;
};

const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({
  title,
  description,
  imageSrc,
  smallImageSrc,
  imageAlt,
  liveHref,
  githubHref,
  align,
  isLast = false,
}) => {
  const isRightAligned = align === "right";

  return (
    <div className={`relative ${isLast ? 'mb-0' : 'mb-20 sm:mb-24'}`}>
      {/* Image Section - Smaller and positioned */}
      <div className={`w-full lg:w-2/3 relative ${isRightAligned ? 'lg:ml-auto' : 'lg:mr-auto'}`}>
        <a
          href={liveHref}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <div className="relative group overflow-hidden rounded-2xl shadow-lg">
            <img
              src={smallImageSrc || imageSrc}
              alt={imageAlt}
              className="w-full h-auto transition-transform duration-300 group-hover:scale-105 lg:hidden"
              loading="lazy"
            />
            <img
              src={imageSrc}
              alt={imageAlt}
              className="w-full h-auto transition-transform duration-300 group-hover:scale-105 hidden lg:block"
              loading="lazy"
            />
          </div>
        </a>
      </div>

      {/* Content Section - Positioned to overlap */}
      <div className={`z-20 mt-6 lg:mt-0 lg:absolute lg:top-18 ${isRightAligned ? 'lg:left-4 lg:w-45/100 lg:pr-8' : 'lg:right-0 lg:w-45/100 lg:pl-8'} text-center lg:text-left`}>
        <h3 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold font-inter mb-4">
          {title}
        </h3>
        <p className="text-white/80 font-inter text-base sm:text-lg lg:text-xl leading-relaxed mb-6">
          {description}
        </p>
        
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          {githubHref && (
            <a
              href={githubHref}
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center justify-center w-48 py-2 bg-gradient-to-r from-purple-600 to-blue-500 text-white font-inter font-semibold rounded-xl border border-white/20 transition-all duration-300 hover:from-purple-500 hover:to-blue-400 hover:scale-105 text-lg overflow-hidden group mx-auto lg:mx-0"
            >
              {/* sweep overlay */}
              <span
                className="pointer-events-none absolute inset-0 -translate-x-full
                           bg-[linear-gradient(110deg,transparent,rgba(255,255,255,0.2),transparent)]
                           transition-transform duration-500 group-hover:translate-x-full"
              />
              <span className="relative">View Code</span>
            </a>
          )}
        </div>
        
      </div>
    </div>
  );
};

export default ProjectShowcase;
