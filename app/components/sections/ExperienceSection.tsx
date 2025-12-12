"use client";

import React from "react";
import { motion, useTransform, MotionValue } from "framer-motion";

interface ExperienceSectionProps {
  progress: MotionValue<number>;
}

export default function ExperienceSection({
  progress,
}: ExperienceSectionProps) {
  const opacity = useTransform(progress, [0.5, 0.55, 0.65, 0.7], [0, 1, 1, 0]);
  const y = useTransform(progress, [0.5, 0.55, 0.7], [100, 0, -100]);
  const pointerEvents = useTransform(progress, (v) =>
    v >= 0.5 && v <= 0.7 ? "auto" : "none"
  );

  return (
    <motion.div
      style={{ opacity, y, pointerEvents }}
      className="absolute inset-0 flex items-center justify-center"
    >
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mt-[10vh] px-4 md:px-0">
        {[
          {
            role: "AI Software Engineer Intern",
            company: "SLT Mobitel",
            year: "2024 Sep - Present",
            desc: "I architect RAG systems using LangChain. I manage full-stack implementation including real-time Apache Kafka streaming, and developing responsive frontends with complex data visualizations.",
          },
          {
            role: "Intern Software Engineer",
            company: "TalentBoozt",
            year: "2023 Dec - 2024 Aug",
            desc: "Designed scalable REST APIs across Spring Boot, ASP.NET, and Node.js within an MVC architecture. Engineered advanced MongoDB aggregations, and integrated Hugging Face AI models via Flask microservices",
          },
          {
            role: "Lead Developer And Director",
            company: "Sports Tv Network",
            year: "2024 May - Present",
            desc: "Leading backend architecture and microservices migration.",
          },
        ].map((job, i) => (
          <div
            key={i}
            className="relative group bg-black/60 border border-cyan-900/50 p-6 backdrop-blur-md hover:border-cyan-500/50 transition-all duration-300"
          >
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="flex justify-between items-start mb-4">
              <h3 className="lg:text-2xl md:text-2xl text-[15px] font-bold text-white group-hover:text-cyan-400 transition-colors">
                {job.role}
              </h3>
              <span className="font-mono lg:text-xs md:text-md text-[11px]  text-fuchsia-400 border border-fuchsia-900/50 px-2 py-1 rounded">
                {job.year}
              </span>
            </div>
            <p className="text-cyan-600 text-sm font-mono mb-2">
              @{job.company}
            </p>
            <p className="text-slate-400 text-sm leading-relaxed">{job.desc}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
