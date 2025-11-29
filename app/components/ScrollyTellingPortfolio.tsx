'use client';

import React, { useRef } from 'react';
import { useScroll, useSpring } from 'framer-motion';

// Import Sections
import CyberBackground from './sections/CyberBackground';
import CyberProfile from './sections/CyberProfile';
import IntroSection from './sections/IntroSection';
import SkillsSection from './sections/SkillsSection';
import EducationSection from './sections/EducationSection';
import ExperienceSection from './sections/ExperienceSection';
import ProjectsSection from './sections/ProjectsSection';
import ContactSection from './sections/ContactSection';
import CyberFooter from './sections/CyberFooter';

export default function CyberPortfolio() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <div ref={containerRef} className="relative h-[500vh] bg-black text-cyan-50 font-sans selection:bg-cyan-500/30 selection:text-cyan-100 overflow-x-hidden">
      
      {/* --- Cyber Grid Background --- */}
      <CyberBackground />

      {/* --- Fixed Stage --- */}
      <div className="fixed inset-0 flex h-screen w-full items-center justify-center overflow-hidden perspective-1000 pointer-events-none">
        
        {/* --- Central Profile Image --- */}
        <CyberProfile progress={smoothProgress} />

        {/* --- Content Layers --- */}
        <div className="relative z-20 h-full w-full max-w-7xl mx-auto px-6 pointer-events-none">
          
          {/* 1. Intro Text (0% - 15%) */}
          <IntroSection progress={smoothProgress} />

          {/* 2. Skills (15% - 35%) */}
          <SkillsSection progress={smoothProgress} />

          {/* 3. Education (35% - 50%) */}
          <EducationSection progress={smoothProgress} />

          {/* 4. Experience (50% - 65%) */}
          <ExperienceSection progress={smoothProgress} />

          {/* 4. Projects (60% - 75%) */}
          <ProjectsSection progress={smoothProgress} />

          {/* 5. Contact (80% - 100%) */}
          <ContactSection progress={smoothProgress} />

        </div>
      </div>

      {/* --- Fixed Bottom Loading Status Bar --- */}
      <CyberFooter progress={smoothProgress} />

    </div>
  );
}
