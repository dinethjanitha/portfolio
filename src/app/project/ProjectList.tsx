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

    {
      title: "Mega City Cab Front End",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ipsam ipsum voluptatem sed earum vel labore atque omnis ad quo?",
      badges: ["Next Js", "Full Stack", "MongoDB"],
      link: "#",
    },

    {
      title: "Mega City Cab Back End",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ipsam ipsum voluptatem sed earum vel labore atque omnis ad quo?",
      badges: ["Next Js", "Full Stack", "MongoDB"],
      link: "#",
    },


    {
      title: "Real Time Chat App",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ipsam ipsum voluptatem sed earum vel labore atque omnis ad quo?",
      badges: ["Next Js", "Full Stack", "MongoDB"],
      link: "#",
    },

    {
      title: "Crypto Dex",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ipsam ipsum voluptatem sed earum vel labore atque omnis ad quo?",
      badges: ["Next Js", "Full Stack", "MongoDB"],
      link: "#",
    },

    {
      title: "FitZone Front End",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ipsam ipsum voluptatem sed earum vel labore atque omnis ad quo?",
      badges: ["Next Js", "Full Stack", "MongoDB"],
      link: "#",
    },

    {
      title: "FitZone Back End",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ipsam ipsum voluptatem sed earum vel labore atque omnis ad quo?",
      badges: ["Next Js", "Full Stack", "MongoDB"],
      link: "#",
    },

    {
      title: "TechFix Back End",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ipsam ipsum voluptatem sed earum vel labore atque omnis ad quo?",
      badges: ["ASP.NET", "SQL"],
      link: "#",
    },
    {
      title: "Dogs Nutrition App",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ipsam ipsum voluptatem sed earum vel labore atque omnis ad quo?",
      badges: ["ASP.NET", "SQL"],
      link: "#",
    },
    {
      title: "Employee Management System",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ipsam ipsum voluptatem sed earum vel labore atque omnis ad quo?",
      badges: ["EJS", "NodeJS"],
      link: "#",
    },
    {
      title: "Employee Management System",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ipsam ipsum voluptatem sed earum vel labore atque omnis ad quo?",
      badges: ["EJS", "NodeJS"],
      link: "#",
    },
    {
      title: "Gallary Cafe",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ipsam ipsum voluptatem sed earum vel labore atque omnis ad quo?",
      badges: ["EJS", "NodeJS"],
      link: "#",
    },

    {
      title: "Hospital MS",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ipsam ipsum voluptatem sed earum vel labore atque omnis ad quo?",
      badges: ["EJS", "NodeJS"],
      link: "#",
    },


  ];

  return (
    <>
      {projectList.map((project, index) => {
        return (
          <div
            key={index}
            className=" p-5 bg-stone-50 flex flex-col gap-3 rounded-2xl shadow-lg shadow-neutral-700 "
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
