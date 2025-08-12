"use client"
import React, { useState, useEffect, useRef } from 'react';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  // Absolute Y threshold where navbar becomes sticky (top of #about - 100px)
  const thresholdRef = useRef<number>(0);

  useEffect(() => {
    const about = document.getElementById('about');
    if (!about) return;

    const computeThreshold = () => {
      const aboutAbsTop = about.getBoundingClientRect().top + window.scrollY;
      thresholdRef.current = Math.max(aboutAbsTop - 200, 0);
    };

    const onScroll = () => {
      // Snap show/hide with no transition
      setIsSticky(window.scrollY >= thresholdRef.current);

      // ----- Active section logic -----
      const sections = ['about', 'experiences', 'school', 'projects', 'contact'];
      const winH = window.innerHeight;

      // Near bottom → 'contact'
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100) {
        setActiveSection('contact');
        return;
      }

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const el = document.getElementById(section);
        if (!el) continue;
        const { top } = el.getBoundingClientRect();
        // Check if we're past this section's top (for down-scroll) or if top is in view (for up-scroll)
        if (top <= winH * 0.4) {
          setActiveSection(section);
          break;
        }
      }
    };

    const onResize = () => {
      computeThreshold();
      onScroll();
    };

    computeThreshold();
    onScroll();

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = sectionId === 'contact' ? 0 : 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  return (
    <div
      className={`w-full flex justify-center ${
        isSticky ? 'fixed top-4 left-0 z-50' : 'hidden'
      }`}
      aria-hidden={!isSticky}
    >
      {/* Navigation menu */}
      <div
        className={`${
          isMenuOpen ? 'flex' : 'hidden'
        } md:flex bg-black rounded-2xl md:rounded-full p-4 md:p-2 border border-white/20 flex-col md:flex-row min-w-[200px] md:min-w-0 md:w-auto shadow-[0_0_30px_rgba(139,92,246,0.5)]`}
      >
        <ul className="flex flex-col md:flex-row gap-2">
          {['about', 'experiences', 'school', 'projects', 'contact'].map((section) => (
            <li key={section}>
              <button
                onClick={() => scrollToSection(section)}
                className={`w-full md:w-auto px-6 py-3 md:py-2 rounded-full text-sm font-inter ${
                  activeSection === section
                    ? 'bg-purple-500 text-white shadow-lg'
                    : 'text-white hover:text-purple-300 hover:bg-white/10'
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile menu button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden absolute right-4 bg-black/80 backdrop-blur-sm rounded-full p-3 border border-white/20"
      >
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isMenuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>
    </div>
  );
};

export default Navigation;
