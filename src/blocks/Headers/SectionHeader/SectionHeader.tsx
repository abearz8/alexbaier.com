"use client";
import React from "react";

interface SectionHeaderProps {
  children: React.ReactNode;
  className?: string;
  accentClassName?: string;
}

export default function SectionHeader({
  children,
  className = "",
  accentClassName = "bg-purple-500",
}: SectionHeaderProps) {
  return (
    <div className="text-center mb-8">
      <h2
        className={[
          "relative inline-block font-inter font-bold text-white leading-tight",
          "isolate", 
          className,
        ].join(" ")}
      >
      {/* Text above the bar */}
      <span className="relative z-10">{children}</span>

      {/* Painted bar */}
      <span
        aria-hidden
        className={[
          "absolute left-15 right-[-0.4em]", 
          "h-[0.35em]",                       
          "bottom-[0.05em]",                  
          "rounded-[3px]",
          "z-0",
          accentClassName,
        ].join(" ")}
      />
      </h2>
    </div>
  );
}
