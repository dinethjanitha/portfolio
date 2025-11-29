'use client';

import React from 'react';
import { motion, useTransform, MotionValue } from 'framer-motion';
import { Terminal } from 'lucide-react';
import { GlitchText } from '../ui/CyberUI';

interface IntroSectionProps {
  progress: MotionValue<number>;
}

export default function IntroSection({ progress }: IntroSectionProps) {
  // Starts fully visible (opacity 1), then fades out as you scroll
  // Moves up (-100px) as the photo moves up to take its place
  const opacity = useTransform(progress, [0, 0.15], [1, 0]);
  const y = useTransform(progress, [0, 0.15], [0, -100]);

  return (
    <motion.div 
      style={{ opacity, y }}
      className="absolute inset-0 flex flex-col items-center justify-start pt-[20vh] md:pt-[15vh] text-center pointer-events-none"
    >
      <div className="mb-4 flex items-center gap-2 text-cyan-500/80 font-mono text-sm tracking-[0.2em]">
        <Terminal size={14} />
        <span>INITIALIZING SYSTEM...</span>
      </div>
      <h1 className="text-4xl md:text-6xl lg:text-8xl font-black tracking-tighter text-white mb-2 drop-shadow-[0_0_10px_rgba(6,182,212,0.8)]">
        <GlitchText text="DINETH" /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500">JANITHA</span>
      </h1>
      <p className="text-lg md:text-2xl text-cyan-200/70 font-mono max-w-2xl px-4">
        &lt;Software Engineer /&gt; <span className="mx-2 text-fuchsia-500">|</span> Full Stack Architect
      </p>
    </motion.div>
  );
}
