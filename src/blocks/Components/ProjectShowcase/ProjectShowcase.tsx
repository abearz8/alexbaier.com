"use client";

import React from "react";

type ProjectShowcaseProps = {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  liveHref: string;
  githubHref?: string;
  align: "left" | "right";
};

const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({
  title,
  description,
  imageSrc,
  imageAlt,
  liveHref,
  githubHref,
  align,
}) => {
  const isRightAligned = align === "right";

  return (
    <div className="relative mb-32">
      {/* Image Section - Smaller and positioned */}
      <div className={`w-full lg:w-3/5 relative ${isRightAligned ? 'lg:ml-auto' : 'lg:mr-auto'}`}>
        <a
          href={liveHref}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <div className="relative group overflow-hidden rounded-2xl shadow-lg">
            <img
              src={imageSrc}
              alt={imageAlt}
              className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </a>
      </div>

      {/* Content Section - Positioned to overlap */}
      <div className={`z-20 mt-6 lg:mt-0 lg:absolute lg:top-0 ${isRightAligned ? 'lg:left-0 lg:w-1/2 lg:pr-8' : 'lg:right-0 lg:w-1/2 lg:pl-8'} text-center lg:text-left`}>
        <h3 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold font-inter mb-4">
          {title}
        </h3>
        <p className="text-white/80 font-inter text-base sm:text-lg lg:text-xl leading-relaxed mb-6">
          {description}
        </p>
        
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href={liveHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-500 text-white font-inter font-semibold rounded-xl border border-white/20 transition-all duration-300 hover:from-purple-500 hover:to-blue-400 hover:scale-105"
          >
            Live Demo
          </a>
          {githubHref && (
            <a
              href={githubHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-black/40 text-white font-inter font-semibold rounded-xl border border-white/20 transition-all duration-300 hover:bg-black/60 hover:scale-105"
            >
              View Code
            </a>
          )}
        </div>
        
      </div>
    </div>
  );
};

export default ProjectShowcase;
