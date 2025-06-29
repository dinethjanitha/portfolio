"use client"
import React from "react";
import Hero from "../component/Hero";
import AboutMe from "../component/AboutMe";
import { motion } from "framer-motion";

const page = () => {
  return (
    <div className=" relative z-10 flex flex-col">
      <Hero/>
        <motion.div
        className=" "
               >
            <AboutMe/>
        </motion.div>
    </div>
  );
};

export default page;
