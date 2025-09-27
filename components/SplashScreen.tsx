import React from 'react';

interface SplashScreenProps {
  isFinishing: boolean;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ isFinishing }) => {
  return (
    <div className={`fixed inset-0 bg-light-bg dark:bg-dark-bg flex flex-col items-center justify-center z-[100] transition-opacity duration-500 ${isFinishing ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
      <style>
        {`
          .plant-path {
            stroke-dasharray: 200;
            stroke-dashoffset: 200;
            animation: draw 3s ease-out forwards;
          }
          .leaf {
            opacity: 0;
            transform-origin: bottom;
            animation: grow 1s ease-out forwards;
          }
          .leaf-1 { animation-delay: 1s; }
          .leaf-2 { animation-delay: 1.2s; }
          .leaf-3 { animation-delay: 1.4s; }
          .leaf-4 { animation-delay: 1.6s; }

          @keyframes draw {
            to {
              stroke-dashoffset: 0;
            }
          }
          @keyframes grow {
            from {
              opacity: 0;
              transform: scale(0);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }
        `}
      </style>
      <svg width="100" height="100" viewBox="0 0 100 100" className="text-jordan-green">
        <path d="M50 95V20" stroke="currentColor" strokeWidth="4" className="plant-path" />
        <path d="M50 50 C 40 40, 20 45, 20 30" stroke="currentColor" strokeWidth="3" fill="none" className="leaf leaf-1"/>
        <path d="M50 50 C 60 40, 80 45, 80 30" stroke="currentColor" strokeWidth="3" fill="none" className="leaf leaf-2"/>
        <path d="M50 35 C 45 30, 30 32, 30 20" stroke="currentColor" strokeWidth="3" fill="none" className="leaf leaf-3"/>
        <path d="M50 35 C 55 30, 70 32, 70 20" stroke="currentColor" strokeWidth="3" fill="none" className="leaf leaf-4"/>
      </svg>
      <h1 className="text-2xl font-bold text-jordan-green mt-4 animate-pulse">
        Food Security: Jordan
      </h1>
    </div>
  );
};

export default SplashScreen;
