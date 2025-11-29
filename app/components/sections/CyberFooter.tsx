'use client';

import React, { useState, useEffect } from 'react';
import { motion, MotionValue } from 'framer-motion';

interface CyberFooterProps {
  progress: MotionValue<number>;
}

export default function CyberFooter({ progress }: CyberFooterProps) {
  const [scrollPercent, setScrollPercent] = useState(0);
  
  useEffect(() => {
    return progress.on('change', (v) => setScrollPercent(Math.round(v * 100)));
  }, [progress]);

  return (
    <div className="fixed bottom-0 left-0 w-full h-12 bg-black border-t border-cyan-900/50 z-50 flex items-center justify-between px-6 font-mono text-xs text-cyan-500/70">
      <div className="flex items-center gap-4">
        <div className="flex gap-1">
          <div className="w-1 h-4 bg-cyan-500/50 animate-pulse"></div>
          <div className="w-1 h-4 bg-cyan-500/30"></div>
          <div className="w-1 h-4 bg-cyan-500/10"></div>
        </div>
        <span className='mr-1'>SYSTEM_READY </span>
      </div>

      <div className="flex items-center gap-4 flex-1 md:w-1/3 justify-end md:justify-center ml-4 md:ml-0">
        <span className="hidden md:inline">LOADING_MODULES...</span>
        <div className="flex-1 h-1 bg-cyan-900/30 overflow-hidden max-w-[100px] md:max-w-none">
          <motion.div 
            className="h-full bg-cyan-500 shadow-[0_0_10px_#06b6d4]"
            style={{ width: `${scrollPercent}%` }}
          />
        </div>
        <span className="w-8 md:w-12 text-right">{scrollPercent}%</span>
      </div>

      <div className="hidden md:flex items-center gap-4">
        <span>SECURE_CONNECTION</span>
        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
      </div>
    </div>
  );
}
