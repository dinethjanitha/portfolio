'use client';

import React, { useState, useEffect } from 'react';
import { motion, useTransform, MotionValue, AnimatePresence } from 'framer-motion';
import { Code, Terminal, Cpu, Database, Globe, Layers } from 'lucide-react';

interface SubSkill {
  label: string;
}

interface SkillNodeProps {
  angle: number;
  distance: number;
  startRadius: number;
  label: string;
  icon: React.ReactNode;
  progress: MotionValue<number>;
  subSkills?: SubSkill[];
}

const SkillNode = ({ angle, distance, startRadius, label, icon, progress, subSkills = [] }: SkillNodeProps) => {
  const [isHovered, setIsHovered] = useState(false);

  // Convert polar to cartesian for the END point (Icon)
  const rad = (angle * Math.PI) / 180;
  const endX = Math.cos(rad) * distance;
  const endY = Math.sin(rad) * distance;

  // Convert polar to cartesian for the START point (Circle Border)
  const startX = Math.cos(rad) * startRadius;
  const startY = Math.sin(rad) * startRadius;

  // Animation transforms
  const opacity = useTransform(progress, [0.15, 0.2, 0.30, 0.35], [0, 1, 1, 0]);
  const scale = useTransform(progress, [0.15, 0.2], [0, 1]);
  const lineLength = useTransform(progress, [0.15, 0.2], [0, 1]);

  return (
    <motion.div 
      style={{ opacity, scale }}
      className={`absolute left-1/2 top-1/2  flex items-center justify-center transition-all duration-300 pointer-events-auto ${isHovered ? 'z-50' : 'z-20'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Connecting Line */}
      <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible w-[1px] h-[1px] pointer-events-none">
        <motion.line 
          x1={startX} y1={startY} 
          x2={endX} y2={endY} 
          stroke="#06b6d4" 
          strokeWidth="1"
          pathLength={lineLength}
          className="opacity-50"
        />
        {/* <motion.circle cx={endX} cy={endY} r="3" fill="#06b6d4" className="animate-pulse" /> */}
        <motion.circle cx={startX} cy={startY} r="2" fill="#06b6d4" className="opacity-50" />
      </svg>

      {/* Node Content */}
      <motion.div 
        style={{ x: endX, y: endY }}
        className="absolute flex flex-col items-center  gap-2"
      >
        {/* Lens Popup */}
        <AnimatePresence>
          {isHovered && subSkills.length > 0 && (
            <motion.div
              initial={{ opacity: 0, x: 0, y: 0 }}
              animate={{ opacity: 1, x: -endX, y: -endY }}
              exit={{ opacity: 0, x: 0, y: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="absolute z-50 -translate-x-1/2 -translate-y-1/2  flex items-center justify-center"
              style={{ top: '50%', left: '50%' }}
            >
              {/* Darken Background (Vignette Shadow) */}
              <div className="absolute inset-0 -z-10 rounded-full shadow-[0_0_0_100vmax_rgba(0,0,0,0.6)] transition-opacity duration-500" />

              {/* The Lens - Classy Glass Effect */}
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.5, opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="relative w-64 h-64 rounded-full bg-black border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.5),inset_0_0_40px_rgba(255,255,255,0.1)] overflow-hidden flex flex-col items-center justify-center backdrop-blur-2xl"
              >
                {/* Glass Glare/Reflection */}
                <div className="absolute -top-20 -left-20 w-40 h-40 bg-white/10 blur-3xl rounded-full pointer-events-none" />
                <div className="absolute  bg-white/10 blur-3xl top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.15)_0%,transparent_50%)] pointer-events-none" />
                
                {/* Magnified Content */}
                <div className="relative z-10 flex flex-col items-center gap-3 p-4 text-center ">
                  <div className="text-cyan-300 drop-shadow-[0_0_20px_rgba(6,182,212,0.6)] transform scale-[2.5] mb-3">
                    {icon}
                  </div>
                  <h3 className="text-lg font-bold text-white tracking-widest uppercase drop-shadow-lg mb-2">
                    {label}
                  </h3>
                  <div className="flex flex-wrap justify-center gap-2 px-4">
                    {subSkills.map((sub, index) => (
                      <span 
                        key={index} 
                        className="text-[10px] font-medium text-cyan-50 bg-white/10 px-2 py-1 rounded-full border border-white/10 backdrop-blur-md shadow-sm"
                      >
                        {sub.label}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="relative flex h-12  w-12 items-center justify-center rounded-none border border-cyan-500/50 bg-black/80 text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.2)] backdrop-blur-sm hover:bg-cyan-950/50 hover:border-cyan-400 transition-colors cursor-pointer z-30">
          {icon}
          <div className="absolute -top-1 -left-1 h-2 w-2 border-t border-l border-cyan-500"></div>
          <div className="absolute -bottom-1 -right-1 h-2 w-2 border-b border-r border-cyan-500"></div>
        </div>
        <span className="whitespace-nowrap font-mono text-xs font-bold uppercase tracking-wider text-cyan-200 bg-black/50 px-2 py-1 z-30">
          {label}
        </span>
      </motion.div>
    </motion.div>
  );
};

interface SkillsSectionProps {
  progress: MotionValue<number>;
}

export default function SkillsSection({ progress }: SkillsSectionProps) {
  const [dimensions, setDimensions] = useState({ radius: 145, distance: 200 });

  useEffect(() => {
    const updateDimensions = () => {
      const isDesktop = window.innerWidth >= 768;
      setDimensions({
        radius: isDesktop ? 185 : 100,
        distance: isDesktop ? 260 : 140
      });
    };
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  const skillsData = [
    { 
      angle: 360, label: "Spring Boot",  icon: <Terminal size={20} />, 
      subSkills: [{ label: "Java 17+" }, { label: "Microservices" }, { label: "Hibernate" }] 
    },
    { 
      angle: 270, label: "React / Next.js", icon: <Code size={20} />, 
      subSkills: [{ label: "Server Actions" }, { label: "Tailwind" }, { label: "Framer Motion" } , { label: "DaicyUI" }] 
    },
    { 
      angle: 315, label: "Languages", icon: <Code size={20} />, 
      subSkills: [{ label: "TypeScript" }, { label: "Javascript" }, { label: "C#" } , { label: "C++" } ,{ label: "R" } , { label: "SQL"}] 
    },
    { 
      angle: 45, label: "Node.js", icon: <Cpu size={20} />, 
      subSkills: [{ label: "Express" }, { label: "NestJS" } , { label: "Multer" } , { label: "Supabase" } , { label: "Cloudinary" } , { label: "Nodemailer" }] 
    },
    { 
      angle: 90, label: "Database", icon: <Database size={20} />, 
      subSkills: [{ label: "PostgreSQL" }, { label: "MongoDB" }, { label: "Pinecone" }] 
    },
    { 
      angle: 135, label: "Cloud", icon: <Globe size={20} />, 
      subSkills: [{ label: "Azure" }, { label: "AWS" }, { label: "Google Cloud" }] 
    },
    { 
      angle: 225, label: "AI / ML", icon: <Layers size={20} />, 
      subSkills: [{ label: "Hugging face" }, { label: "LangChain" }, { label: "NLP" } , { label: "LLM" } , { label: "Agentic AI" } , { label: "RAG" } , ] 
    },
    { 
      angle: 180, label: "Python", icon: <Layers size={20} />, 
      subSkills: [{ label: "FastAPI" }, { label: "Flask" },{ label: "Pandas" },   { label: "NumPy" }] 
    },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none">
      {skillsData.map((skill, index) => (
        <SkillNode 
          key={index}
          angle={skill.angle} 
          startRadius={dimensions.radius} 
          distance={dimensions.distance} 
          label={skill.label} 
          icon={skill.icon} 
          progress={progress}
          subSkills={skill.subSkills}
        />
      ))}
    </div>
  );
}
