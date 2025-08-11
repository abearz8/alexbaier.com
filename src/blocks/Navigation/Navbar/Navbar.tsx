"use client"
import { useState, useEffect } from 'react';

interface NavbarProps {
  className?: string;
}

export default function Navbar({ className = "" }: NavbarProps) {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Start sticky behavior after 110% of viewport height
      const stickyThreshold = window.innerHeight * 1.1;
      setIsSticky(window.scrollY > stickyThreshold);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`w-full transition-all duration-300 ${
      isSticky 
        ? 'fixed top-0 left-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/20' 
        : 'relative'
    } ${className}`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Brand */}
          <div className="text-white font-bold font-inter text-xl">
            Alex Baier
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="#home" 
              className="text-white font-inter font-medium hover:text-purple-300 transition-colors duration-200"
            >
              Home
            </a>
            <a 
              href="#about" 
              className="text-white font-inter font-medium hover:text-purple-300 transition-colors duration-200"
            >
              About
            </a>
            <a 
              href="#projects" 
              className="text-white font-inter font-medium hover:text-purple-300 transition-colors duration-200"
            >
              Projects
            </a>
            <a 
              href="#contact" 
              className="text-white font-inter font-medium hover:text-purple-300 transition-colors duration-200"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white hover:text-purple-300 transition-colors duration-200">
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
