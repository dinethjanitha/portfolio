'use client';

import React from 'react';
import { motion, useTransform, MotionValue } from 'framer-motion';
import { ChevronRight , Github } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface ProjectsSectionProps {
  progress: MotionValue<number>;
}

const project = [
    {
        id : 1,
        title : "Chuti - AI Child safe Chat App",
        technologies : "Flask • Node.js • MongoDB • HuggingFace • Expo • Next.js • Microservices ",
        link : "https://github.com/dinethjanitha/Chuti-backend"
    },
    {
        id : 2,
        title : "AI based Web Crawler and Chat bot ",
        technologies : "FastAPI • LangChain • Gemini • MongoDB • Next.js • Neo4j • Pinecone",
        link : "https://github.com/dinethjanitha/webcrawler/"
    },
    {
        id : 3,
        title : "FitZone - Schedule and Die Plan Generator",
        technologies : "Node.js • MongoDB • Next.js • Daicy UI • Tailwind",
        link : "https://github.com/dinethjanitha/fitzone/"
    },
    {
        id : 4,
        title : "Cooking Class Ceylon - Company Website",
        technologies : "Node.js • MongoDB • Next.js • Reactbites • Tailwind",
        link : "https://www.cookingclassceylon.com/"
    }
]

export default function ProjectsSection({ progress }: ProjectsSectionProps) {
  const opacity = useTransform(progress, [0.65, 0.70, 0.80, 0.85], [0, 1, 1, 0]);
  const scale = useTransform(progress, [0.65, 0.70, 0.85], [0.8, 1, 1.2]);
  const pointerEvents = useTransform(progress, (v) => (v >= 0.65 && v <= 0.85) ? 'auto' : 'none');

  const router = useRouter()
  return (
    <motion.div 
      style={{ opacity, scale, pointerEvents }}
      className="absolute inset-0 flex items-center justify-center"
    >
      <div className="flex flex-col items-center gap-8 mt-[5vh] md:mt-[10vh] px-4 w-full max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500 shrink-0">
          Personal Projects
        </h2>
        
        {/* 
           Mobile: Horizontal Scroll (Snap)
           Desktop: Grid / Flex Wrap
        */}
        <div className="flex md:flex-wrap overflow-x-auto md:overflow-visible w-full md:justify-center gap-6 pb-8 md:pb-0 snap-x snap-mandatory px-4 md:px-0 scrollbar-hide">
          {project.map((item) => (
            <div 
              key={item.id} 
              className="group relative shrink-0 w-[85vw] md:w-72 h-[60vh] md:h-96 bg-slate-900/50 border border-white/10 overflow-hidden hover:border-cyan-500/50 transition-all duration-500 snap-center"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/90 z-10"></div>
              <Github  className="absolute inset-0  w-full h-full object-cover opacity-20 group-hover:opacity-80 transition-opacity duration-500 grayscale group-hover:grayscale-0" />

              
              <div className="absolute bottom-0 left-0 w-full p-6 z-20 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                <p className="text-xs text-cyan-400 font-mono mb-4">{item.technologies}</p>
                <button onClick={() => {
                    router.push(item.link)
                }} className="flex items-center gap-2 text-xs font-bold text-white uppercase tracking-wider hover:text-cyan-400 transition-colors">
                  View Source <ChevronRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
