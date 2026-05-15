import Link from 'next/link';
import Navbar from './components/navbar';

export default function NotFound() {
  return (
    // BREAKOUT CONTAINER: Ignores the body's broken flex rules and covers the screen
    <div 
      className="absolute inset-0 z-50 flex flex-col"
      style={{ backgroundColor: 'var(--background)' }}
    >
      {/* We keep the Navbar inside our breakout container so it still shows up */}
      <div className="w-full">
        <Navbar />
      </div>
      
      {/* Perfect Centering Container */}
      <div 
        style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          justifyContent: 'center', 
          textAlign: 'center',
          flexGrow: 1, 
          width: '100%',
          padding: '2rem'
        }}
      >
        <h1 
          className="text-8xl md:text-9xl font-bold tracking-widest"
          style={{ color: 'var(--foreground)', marginBottom: '1rem' }}
        >
          404
        </h1>
        
        <h2 
          className="section-heading"
          style={{ color: '#C7A669', marginBottom: '1rem' }}
        >
          Oops! Page Not Found
        </h2>
        
        <p 
          className="p-text max-w-lg mx-auto"
          style={{ color: '#F0DDB6', marginBottom: '2.5rem', opacity: 0.9 }}
        >
          Looks like you've wandered off the syllabus. The notes you are looking for don't exist or have been moved.
        </p>
        
        <Link 
          href="/" 
          className="hover:scale-105 transition-transform duration-200 shadow-lg"
          style={{ 
            backgroundColor: '#C7A669', 
            color: '#1B0D00',
            padding: '1rem 2.5rem',
            borderRadius: '9999px',
            fontWeight: 'bold',
            fontSize: '1.125rem',
            display: 'inline-block'
          }}
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
}