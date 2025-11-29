'use client';

import React from 'react';
import { motion, useTransform, MotionValue } from 'framer-motion';

interface CyberProfileProps {
  progress: MotionValue<number>;
}

export default function CyberProfile({ progress }: CyberProfileProps) {
  // Photo moves from bottom to center (0% -> 15%)
  // Starting at 30vh (desktop) or 20vh (mobile) ensures it's visible at the bottom but doesn't overlap the text at the top
  const [startY, setStartY] = React.useState('20vh');

  React.useEffect(() => {
    const updateY = () => {
      setStartY(window.innerWidth < 768 ? '15vh' : '30vh');
    };
    updateY();
    window.addEventListener('resize', updateY);
    return () => window.removeEventListener('resize', updateY);
  }, []);

  const y = useTransform(progress, [0, 0.15], [startY, '0vh']);
  const scale = useTransform(progress, [0, 0.15], [1.2, 1]);

  return (
    <motion.div 
      style={{ y, scale }}
      className="absolute z-10 flex items-center justify-center pointer-events-auto"
    >
      <div className="relative h-64 w-64 md:h-80 md:w-80">
        {/* Rotating Rings */}
        <div className="absolute inset-[-20px] rounded-full border border-cyan-500/30 border-dashed animate-[spin_10s_linear_infinite]"></div>
        <div className="absolute inset-[-10px] rounded-full border border-fuchsia-500/20 animate-[spin_15s_linear_infinite_reverse]"></div>
        
        {/* Image Container */}
        <div className="relative h-full w-full overflow-hidden rounded-full border-2 border-cyan-500/50 bg-black shadow-[0_0_50px_rgba(6,182,212,0.4)]">
          <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/50 to-transparent mix-blend-overlay z-10"></div>
          {/* Placeholder for user image - Replace src with actual path */}
          <img
            src="/profile.png" 
            alt="Profile"
            className="h-full w-full object-cover absolute bottom-[-40px]"
            onError={(e) => {
              // Fallback if image not found
              (e.target as HTMLImageElement).src = "https://placehold.co/400x400/000000/06b6d4?text=USER+IMG";
            }}
          />
          {/* Glitch Overlay Effect */}
          <div className="absolute inset-0 bg-cyan-500/10 mix-blend-color-dodge animate-pulse"></div>
        </div>

        {/* Status Indicator on Image */}
        <div className="absolute bottom-4 right-4 flex items-center gap-2 rounded-full bg-black/80 px-3 py-1 border border-green-500/50 backdrop-blur-md z-20">
          <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
          <span className="text-[10px] font-mono text-green-400">ONLINE</span>
        </div>
      </div>
    </motion.div>
  );
}
