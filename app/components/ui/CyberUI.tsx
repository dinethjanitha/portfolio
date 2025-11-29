'use client';

import React from 'react';

export const CyberButton = ({ children, href }: { children: React.ReactNode; href: string }) => (
  <a 
    href={href}
    className="group relative inline-flex items-center justify-center px-8 py-3 font-mono text-sm font-bold text-cyan-400 transition-all duration-200 bg-black border border-cyan-500/50 hover:bg-cyan-950/30 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] clip-path-polygon"
  >
    <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-cyan-500"></span>
    <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-cyan-500"></span>
    {children}
  </a>
);

export const GlitchText = ({ text }: { text: string }) => {
  return (
    <div className="relative inline-block group">
      <span className="relative z-10">{text}</span>
      <span className="absolute top-0 left-0 -z-10 w-full h-full text-red-500 opacity-0 group-hover:opacity-70 group-hover:translate-x-[2px] transition-all duration-100 select-none">{text}</span>
      <span className="absolute top-0 left-0 -z-10 w-full h-full text-blue-500 opacity-0 group-hover:opacity-70 group-hover:-translate-x-[2px] transition-all duration-100 select-none">{text}</span>
    </div>
  );
};
