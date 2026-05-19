'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { ArrowUp } from 'lucide-react';

export default function ProgressBar() {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const documentHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY;

      const scrollableDistance = documentHeight - windowHeight;
      setShowBackToTop(scrollY > 300);
      
      if (scrollableDistance > 0) {
        const percentage = (scrollY / scrollableDistance) * 100;
        setScrollPercentage(percentage);
      } else {
        setScrollPercentage(0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

 const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {pathname.startsWith('/sem') && (
        <div className="fixed top-0 left-0 w-full h-1.5 z-[99999] bg-black/20 pointer-events-none">
          <div 
            className="h-full transition-all duration-150 ease-out"
        style={{ 
          width: `${scrollPercentage}%`, 
          backgroundColor: '#C7A669' 
        }}
          />
        </div>
      )}

      {showBackToTop && (
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-[99999] flex items-center justify-center
              h-12 w-12 rounded-full border border-[#d2b48c]/40
            bg-[#1B0D00] text-[#FAE8D7] shadow-[0_12px_32px_rgba(0,0,0,0.28)]
              transition duration-300 hover:-translate-y-1 hover:bg-[#d2b48c] hover:text-[#1B0D00]
              focus:outline-none focus:ring-2 focus:ring-[#d2b48c] focus:ring-offset-2 focus:ring-offset-[#1B0D00]"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </>
  );
}