'use client';

import React from 'react';
import { motion, useTransform, MotionValue } from 'framer-motion';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

interface EducationSectionProps {
  progress: MotionValue<number>;
}

export default function EducationSection({ progress }: EducationSectionProps) {
  // Adjust these ranges based on where you place it in the main scroll
  // Placed between Skills (ends ~0.35) and Experience (starts ~0.50)
  const opacity = useTransform(progress, [0.35, 0.40, 0.50, 0.55], [0, 1, 1, 0]);
  const scale = useTransform(progress, [0.35, 0.40], [0.8, 1]);
  const x = useTransform(progress, [0.35, 0.40, 0.50, 0.55], [-50, 0, 0, 50]);
  const pointerEvents = useTransform(progress, (v) => (v >= 0.35 && v <= 0.55) ? 'auto' : 'none');

  const educationData = [
    {
      degree: "Bachelor of Science in Software Engineering",
      school: "Cardiff Metropolitan University",
      year: "2023 - 2026",
      desc: "Specialized in Artificial Intelligence and Software Engineering. Graduated with Honors.",
      icon: <GraduationCap className="text-cyan-400" size={24} />
    },
    // {
    //   degree: "Full Stack Web Development Bootcamp",
    //   school: "Tech Academy",
    //   year: "2021",
    //   desc: "Intensive 12-week program focused on MERN stack and modern web technologies.",
    //   icon: <CodeIcon className="text-fuchsia-400" size={24} />
    // }
  ];

  return (
    <motion.div 
      style={{ opacity, scale, x, pointerEvents }}
      className="absolute inset-0 flex items-center justify-center z-30"
    >
      <div className="w-full max-w-5xl flex flex-col md:flex-row gap-6 items-center justify-center mt-[10vh] px-4 md:px-0">
        {educationData.map((edu, i) => (
          <div key={i} className="relative group w-full md:w-[450px] bg-black/40 border border-cyan-500/30 p-6 md:p-8 backdrop-blur-xl overflow-hidden hover:bg-black/60 transition-all duration-500">
            
            {/* Holographic Corner Accents */}
            <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-cyan-500/50 rounded-tl-lg"></div>
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-cyan-500/50 rounded-br-lg"></div>
            
            {/* Scanning Line Effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/10 to-transparent translate-y-[-100%] group-hover:translate-y-[100%] transition-transform duration-1000 ease-in-out"></div>

            <div className="flex items-start gap-4 mb-6 relative z-10">
              <div className="p-3 bg-cyan-950/50 border border-cyan-500/30 rounded-lg shadow-[0_0_15px_rgba(6,182,212,0.2)]">
                {edu.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">{edu.degree}</h3>
                <p className="text-cyan-600 font-mono text-sm mt-1">{edu.school}</p>
              </div>
            </div>

            <div className="relative z-10 pl-[60px]">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2 py-0.5 text-[10px] font-bold bg-fuchsia-900/30 text-fuchsia-300 border border-fuchsia-500/30 rounded uppercase tracking-wider">
                  {edu.year}
                </span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed border-l-2 border-cyan-900/50 pl-4">
                {edu.desc}
              </p>
            </div>

            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:20px_20px] -z-0"></div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

// Helper Icon
const CodeIcon = ({ className, size }: { className?: string, size?: number }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);
