"use client"
import React from "react";
import Hero from "../component/Hero";
import AboutMe from "../component/AboutMe";

const page = () => {
  return (
    <div className="">
      <div style={
      {
        background:
        "linear-gradient(0deg, rgba(25,6,240,1) 2%, rgba(25,20,71,1) 50%, rgba(13,9,1,1) 79%)",
      }
    } >
      <Hero/>
        
      </div>
      <AboutMe/>
    </div>
  );
};

export default page;
