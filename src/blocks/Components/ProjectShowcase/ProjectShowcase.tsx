"use client";

import React from "react";

type ProjectShowcaseProps = {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  liveHref: string;
  githubHref: string;
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
    <div className={`flex flex-col ${isRightAligned ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-8 mb-16`}>
      {/* Image Section */}
      <div className="lg:w-1/2">
        <div className="relative group overflow-hidden rounded-2xl shadow-lg">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      </div>

      {/* Content Section */}
      <div className={`lg:w-1/2 ${isRightAligned ? 'lg:text-right' : 'lg:text-left'} text-center lg:text-left`}>
        <h3 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold font-inter mb-4">
          {title}
        </h3>
        <p className="text-white/80 font-inter text-base sm:text-lg lg:text-xl leading-relaxed mb-6">
          {description}
        </p>
        
        {/* Buttons */}
        <div className={`flex flex-col sm:flex-row gap-4 ${isRightAligned ? 'lg:justify-end' : 'lg:justify-start'}`}>
          <a
            href={liveHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-500 text-white font-inter font-semibold rounded-xl border border-white/20 transition-all duration-300 hover:from-purple-500 hover:to-blue-400 hover:scale-105"
          >
            Live Demo
          </a>
          <a
            href={githubHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 bg-black/40 text-white font-inter font-semibold rounded-xl border border-white/20 transition-all duration-300 hover:bg-black/60 hover:scale-105"
          >
            View Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectShowcase;
