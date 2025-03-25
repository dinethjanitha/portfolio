"use client";
import React from "react";
import { motion } from "framer-motion";
const ProjectList = () => {
  const projectList = [
    {
      title: "Online Vehical Reservation app",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ipsam ipsum voluptatem sed earum vel labore atque omnis ad quo?",
      badges: ["Next Js", "Full Stack", "MongoDB"],
      link: "#",
    },
  ];

  return (
    <>
      {projectList.map((project, index) => {
        return (
          <div
            key={index}
            className=" p-5 bg-[#b0b0b0] flex flex-col gap-3 rounded-2xl shadow-lg shadow-amber-100 "
          >
            <h1 className=" text-black text-xl font-bold">
              {project.title}
            </h1>
            <p className=" text-black opacity-80">
                {project.description}
            </p>
            <div className="flex flex-row gap-3">
                {
                    project.badges.map((badge , index) => {
                        return (
                            <div key={index}className="badge badge-primary">{badge}</div>
                        )
                    })
                }
              
            </div>
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 50 }}
            >
              <a
                href={project.link}
                className="btn btn-secondary w-50 hover:border-2 rounded-xl "
              >
                Source
              </a>
            </motion.div>
          </div>
        );
      })}
    </>
  );
};

export default ProjectList;
