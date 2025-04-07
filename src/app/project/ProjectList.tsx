"use client";
import React from "react";
import { motion } from "framer-motion";
const ProjectList = () => {
  const projectList = [
    {
      title: "Mega City Cab Front End",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ipsam ipsum voluptatem sed earum vel labore atque omnis ad quo?",
      badges: ["Next Js", "Full Stack", "MongoDB"],
      link: "https://github.com/dinethjanitha/mega-city-cab",
    },

    {
      title: "Mega City Cab Back End",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ipsam ipsum voluptatem sed earum vel labore atque omnis ad quo?",
      badges: ["Springboot", "MongoDB", "JWT"],
      link: "https://github.com/dinethjanitha/mega-city-cab-backend",
    },


    {
      title: "Real Time Chat App",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ipsam ipsum voluptatem sed earum vel labore atque omnis ad quo?",
      badges: ["Socket.io", "Node.js",],
      link: "https://github.com/dinethjanitha/Real-time-chart-app",
    },

    {
      title: "Crypto Dex",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ipsam ipsum voluptatem sed earum vel labore atque omnis ad quo?",
      badges: ["Node.js", "CLI"],
      link: "https://github.com/dinethjanitha/cryptodex",
    },

    {
      title: "FitZone Front End",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ipsam ipsum voluptatem sed earum vel labore atque omnis ad quo?",
      badges: ["React Js", "Full Stack"],
      link: "https://github.com/dinethjanitha/fitzone",
    },

    {
      title: "FitZone Back End",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ipsam ipsum voluptatem sed earum vel labore atque omnis ad quo?",
      badges: ["Node.js", "Full Stack", "MongoDB"],
      link: "https://github.com/dinethjanitha/fitzone-back",
    },

    {
      title: "TechFix Front End",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ipsam ipsum voluptatem sed earum vel labore atque omnis ad quo?",
      badges: [".NET", "C#"],
      link: "https://github.com/dinethjanitha/Techfix",
    },
    {
      title: "TechFix Back End",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ipsam ipsum voluptatem sed earum vel labore atque omnis ad quo?",
      badges: ["ASP.NET", "SQLServer"],
      link: "https://github.com/dinethjanitha/Techfix-APIs",
    },
    {
      title: "Dogs Nutrition App",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ipsam ipsum voluptatem sed earum vel labore atque omnis ad quo?",
      badges: ["Android Studio", "Java"],
      link: "https://github.com/dinethjanitha/Dogs-Nutrition-App",
    },
    {
      title: "Employee Management System",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ipsam ipsum voluptatem sed earum vel labore atque omnis ad quo?",
      badges: ["EJS", "NodeJS"],
      link: "https://github.com/dinethjanitha/Employee-Management-System-using-EJS-CRUD",
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
      badges: ["PHP", "MySQL" , "BootStrap"],
      link: "https://github.com/dinethjanitha/Online-Reservation-Management-System-for-Gallery-Cafe",
    },

    {
      title: "Hospital MS",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ipsam ipsum voluptatem sed earum vel labore atque omnis ad quo?",
        badges: ["PHP", "MySQL" , "BootStrap"],
      link: "https://github.com/dinethjanitha/Hospital-MS",
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
