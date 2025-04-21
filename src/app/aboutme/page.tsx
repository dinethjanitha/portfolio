"use client"
import React from "react";
import Hero from "../component/Hero";
import AboutMe from "../component/AboutMe";
import BlackEffect from "../component/BlackEffect";
import { motion } from "framer-motion";

const page = () => {
  return (
    <div className=" relative z-10">
      <BlackEffect/>
      <div style={
      {
        // background:
        // "linear-gradient(0deg, rgba(25,6,240,1) 2%, rgba(25,20,71,1) 50%, rgba(13,9,1,1) 79%)",
         background : "#1b06f0"
      }
    } >
      <Hero/>
        <motion.div
          initial={{y:300,}}
          whileInView={{y:0}}
          transition={{duration:5,type: 'spring' , bounce: 0.5}}
        >
            <AboutMe/>
        </motion.div>
        
      </div>
    </div>
  );
};

export default page;
