'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function ProgressBar() {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const documentHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY;

      const scrollableDistance = documentHeight - windowHeight;
      
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

  if (!pathname.startsWith('/sem')) {
    return null;
  }

  return (
    
    <div className="fixed top-0 left-0 w-full h-1.5 z-[99999] bg-black/20 pointer-events-none">
      <div 
        className="h-full transition-all duration-150 ease-out"
        style={{ 
          width: `${scrollPercentage}%`, 
          backgroundColor: '#C7A669' 
        }}
      />
    </div>
  );
}