'use client';

import React from 'react';
import { motion, useTransform, MotionValue } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, ShieldCheck } from 'lucide-react';
import { CyberButton } from '../ui/CyberUI';

interface ContactSectionProps {
  progress: MotionValue<number>;
}

export default function ContactSection({ progress }: ContactSectionProps) {
  const opacity = useTransform(progress, [0.85, 0.90, 1], [0, 1, 1]);
  const y = useTransform(progress, [0.85, 0.90], [50, 0]);
  const pointerEvents = useTransform(progress, (v) => (v >= 0.85) ? 'auto' : 'none');

  return (
    <motion.div 
      style={{ opacity, y, pointerEvents }}
      className="absolute inset-0 flex items-center justify-center"
    >
      <div className="text-center bg-black/80 p-6 md:p-12 border border-cyan-500/30 backdrop-blur-xl shadow-[0_0_50px_rgba(6,182,212,0.1)] max-w-2xl w-full mx-4 relative overflow-hidden">
        {/* Decorative lines */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-fuchsia-500 to-transparent"></div>
        
        <ShieldCheck className="mx-auto text-cyan-500 mb-6" size={48} />
        <h2 className="text-2xl md:text-4xl font-bold text-white mb-2">ESTABLISH CONNECTION</h2>
        <p className="text-slate-400 mb-8 text-sm md:text-base">Ready to deploy your next mission-critical application?</p>
        
        <div className="flex justify-center gap-4 mb-8 flex-wrap">
          <CyberButton href="https://github.com/dinethjanitha">GITHUB</CyberButton>
          <CyberButton href="https://www.linkedin.com/in/dinethjanitha/">LINKEDIN</CyberButton>
        </div>

        <div className="flex justify-center gap-6 text-slate-500">
          <Github href='https://github.com/dinethjanitha' className="hover:text-white transition-colors cursor-pointer" />
          {/* <Twitter className="hover:text-white transition-colors cursor-pointer" /> */}
          <Mail  href='mailto:djanithak@gmail.com' className="hover:text-white transition-colors cursor-pointer" />
        </div>
      </div>
    </motion.div>
  );
}
