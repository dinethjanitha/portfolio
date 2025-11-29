'use client';

import React from 'react';

export default function CyberBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#083344_1px,transparent_1px),linear-gradient(to_bottom,#083344_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20"></div>
      {/* Scanlines */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/80"></div>
    </div>
  );
}
