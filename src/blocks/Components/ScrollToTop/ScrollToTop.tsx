"use client"
import React, { useState, useEffect, useRef } from 'react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const thresholdRef = useRef<number>(0);

  useEffect(() => {
    const about = document.getElementById('about');
    if (!about) return;

    const computeThreshold = () => {
      const aboutAbsTop = about.getBoundingClientRect().top + window.scrollY;
      thresholdRef.current = Math.max(aboutAbsTop - 80, 0);
    };

    const toggleVisibility = () => {
      // Show button at the exact same time as navbar becomes sticky
      setIsVisible(window.scrollY >= thresholdRef.current);
    };

    const onResize = () => {
      computeThreshold();
      toggleVisibility();
    };

    computeThreshold();
    toggleVisibility();

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 bg-purple-500 hover:bg-purple-600 text-white font-bold font-inter transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-slate-800 rounded-full p-4 shadow-lg border border-white/20"
          aria-label="Scroll to top"
        >
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="3" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M18 15l-6-6-6 6"/>
          </svg>
        </button>
      )}
    </>
  );
}
