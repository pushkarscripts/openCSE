'use client';

import React, { useEffect, useState } from 'react';

interface ReadingTimeProps {
  /**
   * Optional key to force recalculation when routes or chapters change.
   */
  chapterKey?: string;
}

export default function ReadingTime({ chapterKey }: ReadingTimeProps) {
  const [readingTime, setReadingTime] = useState<number | null>(null);

  useEffect(() => {
    const calculateReadingTime = () => {
      // Look for the specific content area first, then fallbacks
      const contentElement = 
        document.getElementById('reading-content') || 
        document.querySelector('.course-content') ||
        document.querySelector('main');

      if (contentElement) {
        // Retrieve pure text content
        const text = contentElement.textContent || '';
        // Extract words using whitespace regex matcher
        const words = text.trim().split(/\s+/).filter((w) => w.length > 0).length;
        // Average reading speed: 200 words per minute, rounded up
        const time = Math.ceil(words / 200);
        setReadingTime(time || 1); // Minimum 1 min read
      } else {
        setReadingTime(null);
      }
    };

    // Delay slightly to ensure React has fully rendered and painted the child components to the DOM
    const timer = setTimeout(calculateReadingTime, 150);

    return () => clearTimeout(timer);
  }, [chapterKey]);

  if (readingTime === null) {
    return (
      <div className="flex items-center gap-2 text-xs sm:text-sm text-[#c7a669] font-medium bg-[#2c1a04]/40 px-3.5 py-1.5 rounded-full w-max border border-[#c7a669]/10 animate-pulse select-none">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2.5" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="w-4 h-4 text-[#c7a669]/50 animate-spin"
        >
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
        <span className="opacity-70">Calculating reading time...</span>
      </div>
    );
  }

  return (
    <>
      <style>{`
        @keyframes clock-hand-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .reading-time-badge:hover .reading-time-clock-hand {
          animation: clock-hand-spin 1.8s infinite linear;
        }
      `}</style>
      <div className="reading-time-badge group flex items-center gap-2.5 text-xs sm:text-sm md:text-base text-[#c7a669] font-medium bg-[#2c1a04]/60 backdrop-blur-xs px-4 py-2 rounded-full w-max border border-[#c7a669]/30 shadow-md select-none transition-all duration-300 hover:border-[#c7a669]/70 hover:bg-[#3d2506]/80 hover:text-[#FAE8D7] hover:-translate-y-[1px]">
        {/* Sleek SVG Clock with animated rotating hands on hover */}
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2.5" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="w-4.5 h-4.5 text-[#c7a669] transition-transform duration-300 group-hover:scale-105 group-hover:text-[#FAE8D7]"
        >
          <circle cx="12" cy="12" r="10" />
          <polyline 
            points="12 6 12 12 15 14" 
            className="reading-time-clock-hand origin-center" 
            style={{ transformOrigin: '12px 12px', transition: 'transform 0.5s ease' }} 
          />
        </svg>
        <span className="font-semibold tracking-wide" style={{ fontFamily: 'Rockwell, Serif, serif' }}>
          {readingTime} min read
        </span>
      </div>
    </>
  );
}
