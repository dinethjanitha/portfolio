"use client"
import React from "react";
import { motion } from "framer-motion";
import { FaJs, FaHtml5, FaCss3Alt, FaAngular, FaJava, FaReact, FaPython, FaPhp, FaBootstrap, FaRProject } from 'react-icons/fa';
import { SiTypescript, SiCplusplus, SiPostgresql, SiKotlin, SiMysql, SiMongodb, SiExpress, SiSpring, SiFirebase } from 'react-icons/si';


const Skills = () => {

    const gridItems = [
        // Use the actual Icon Component (e.g., FaJs) for the 'icon' property
        { id: 'js', icon: FaJs, alt: 'JavaScript Logo', span: 'col-span-2 row-span-2', bgColor: 'bg-[#f0db4f]', iconColor: 'text-black', iconSize: 'text-6xl' }, // Added iconColor, adjusted size
        { id: 'html', icon: FaHtml5, alt: 'HTML5 Logo', iconColor: 'text-orange-500' },
        { id: 'css', icon: FaCss3Alt, alt: 'CSS3 Logo', iconColor: 'text-blue-500' },
        { id: 'angular', icon: FaAngular, alt: 'Angular Logo', iconColor: 'text-red-600' },
        { id: 'cpp', icon: SiCplusplus, alt: 'C++ Logo', iconColor: 'text-blue-600' },
        { id: 'ts', icon: SiTypescript, alt: 'TypeScript Logo', span: 'col-span-2 sm:col-span-1', iconColor: 'text-blue-500', iconSize: 'text-5xl' },
        { id: 'java', icon: FaJava, alt: 'Java Logo', iconColor: 'text-orange-500' },
        { id: 'csharp', icon: SiKotlin, alt: 'C# Logo', iconColor: 'text-purple-600' },
        { id: 'react', icon: FaReact, alt: 'React Logo', iconColor: 'text-cyan-400' },
        { id: 'python', icon: FaPython, alt: 'Python Logo', span: 'col-span-2 row-span-2', iconColor: 'text-yellow-400', iconSize: 'text-6xl' },
        { id: 'postgres', icon: SiPostgresql, alt: 'PostgreSQL Logo', iconColor: 'text-blue-600' },
        { id: 'kotlin', icon: SiKotlin, alt: 'Kotlin Logo', iconColor: 'text-purple-500' },
        { id: 'mysql', icon: SiMysql, alt: 'MySQL Logo', iconColor: 'text-blue-700' },
        { id: 'mongo', icon: SiMongodb, alt: 'MongoDB Logo', iconColor: 'text-green-600' },
        { id: 'express', icon: SiExpress, alt: 'Express Logo', iconColor: 'text-gray-400' }, // Replaced text with icon
        { id: 'spring', icon: SiSpring, alt: 'Spring Logo', span: 'col-span-2 row-span-2', iconColor: 'text-green-500', iconSize: 'text-6xl' },
        { id: 'firebase', icon: SiFirebase, alt: 'Firebase Logo', iconColor: 'text-yellow-500' },
        { id: 'php', icon: FaPhp, alt: 'PHP Logo', iconColor: 'text-indigo-500' },
        { id: 'bootstrap', icon: FaBootstrap, alt: 'Bootstrap Logo', iconColor: 'text-purple-600' },
        { id: 'r', icon: FaRProject, alt: 'R Logo', iconColor: 'text-blue-600' },
        { id: 'r2', icon: FaRProject, alt: 'R Logo', iconColor: 'text-blue-600' },
        // Add other items...
      ];

  return (
    <div className=" grid grid-cols-6 w-[600px] gap-2 bg-black">
    <div className=" col-span-2 bg-gray-700 row-span-2"><FaJs className=" text-[200px] p-1"/></div>
    <div className=" rounded-xl bg-gray-700 p-3 col-span-1 row-span-1 flex justify-center items-center aspect-square"><FaJs className=" text-[70px]"/></div>
    <div className=" rounded-xl p-3 col-span-1 bg-gray-700 row-span-1 flex justify-center items-center aspect-square"><FaJs className=" text-[70px]"/></div>
    <div className=" rounded-xl bg-gray-700 p-3 col-span-1 row-span-1 flex justify-center items-center aspect-square"><FaJs className=" text-[70px]"/></div>
    <div className=" rounded-xl bg-gray-700 p-3 col-span-1 row-span-1 flex justify-center items-center aspect-square"><FaJs className=" text-[70px]"/></div>
    <div className=" rounded-xl bg-gray-700 col-span-2 row-span-2"><FaJs className=" text-[200px] p-1"/></div>
    <div className=" rounded-xl bg-gray-700 p-3 col-span-1 row-span-1 flex justify-center items-center aspect-square"><FaJs className=" text-[70px]"/></div>
    <div className=" rounded-xl bg-gray-700 p-3 col-span-1 row-span-1 flex justify-center items-center aspect-square"><FaJs className=" text-[70px]"/></div>
    <div className=" rounded-xl bg-gray-700 p-3 col-span-1 row-span-1 flex justify-center items-center aspect-square"><FaJs className=" text-[70px]"/></div>
    <div className=" rounded-xl bg-gray-700 p-3 col-span-1 row-span-1 flex justify-center items-center aspect-square"><FaJs className=" text-[70px]"/></div>
    <div className=" rounded-xl bg-gray-700 p-3 col-span-1 row-span-1 flex justify-center items-center aspect-square"><FaJs className=" text-[70px]"/></div>
    <div className=" rounded-xl bg-gray-700 p-3 col-span-1 row-span-1 flex justify-center items-center aspect-square"><FaJs className=" text-[70px]"/></div>
</div>
  );
};

export default Skills;
