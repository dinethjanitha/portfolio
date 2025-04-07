import React, { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import techRing from "./../../../public/images/tech-rings.svg";
import Image from "next/image";
import myPhoto from "./../../../public/images/myphoto.jpg";
import wavinghand from "./../../../public/images/waving-hand.1da6fc7a.gif";
import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";
import { FaHashnode } from "react-icons/fa6";
import "./timeline.module.css";
import ShineEffect from "./ShineEffect";
import BackGroundEffect from "./BackGroundEffect";
// import myCv from "./../../../public/cv/myCv.pdf"

const Hero = () => {
  const [hoverYValue, setHoverYValue] = useState(0);

  return (
    <div className="p-5 relative" >
      <BackGroundEffect />

      {/* <ShineEffect top={50} left={60} /> */}
      {/* <ShineEffect top={100} left={60} /> */}
      {/* <ShineEffect top={50} left={70} /> */}
      {/* <ShineEffect top={0} left={10} /> */}
      {/* <ShineEffect top={20} left={20} /> */}
      {/* <ShineEffect top={50} left={22} /> */}
      <ShineEffect top={90} left={50} />
      {/* <ShineEffect top={85} left={5} /> */}
      <div className=" grid sm:grid-cols-1  md:grid-cols-10 md:mx-15 ">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="md:col-span-6 lg:order-1 md:order-1 order-2 flex flex-col justify-center items-center text-left"
        >
          <div>
            <motion.div>
              <Image src={wavinghand} width={40} className="mb-3" alt="" />
              <TypeAnimation
                sequence={[
                  "Full Stack Developer",
                  1000,
                  "Web Designer",
                  1000,
                  "Tester",
                ]}
                speed={50}
                repeat={Infinity}
                className="text-5xl font-bold relative z-0"
              />
            </motion.div>

            <h1 className="text-8xl flex font-bold">Hi,I am</h1>
            <h1 className="text-8xl font-bold"></h1>
            <h1 className=" text-7xl font-bold ">Dineth Janitha</h1>

            <div>
              <motion.div
                animate={{ x: [0, 100, 0, 200, 0], y: [200, 300, 100, 0, 0] }}
                //  transition={{ease : "anticipate" , duration: 2}}
                className=" btn btn-active mt-5 animate-bounce rounded-2xl"
              >
                <a href="/cv/DinethJanithaCV.pdf" download>Download CV</a>
                
              </motion.div>
            </div>
          </div>
        </motion.div>
        <div className=" md:col-span-4 sm:order-1 flex justify-center items-center">
          <motion.div
            onMouseMove={(e) => {
              const ract = e.currentTarget.getBoundingClientRect();
              console.log(ract);
              const hoverY = e.clientY - ract.y;
              const halfHeight = ract.height / 2;

              if (hoverY > halfHeight) {
                setHoverYValue(-10);
              } else {
                setHoverYValue(10);
              }
            }}
            whileHover={{ scale: 1, y: hoverYValue }}
            transition={{ type: "spring", stiffness: 50 }}
            className=" relative"
          >
            <div className="relative justify-center items-center ">
              <div className="avatar absolute  top-19  left-14 ">
                <div className="w-66 rounded-full">
                  <Image
                    className="shadow-2xl"
                    width={400}
                    height={400}
                    alt=""
                    src={myPhoto}
                  />
                </div>
              </div>

              <Image
                src={techRing}
                alt=""
                className=" min-w-[10px] max-w-[401px]"
              />
            </div>
          </motion.div>
        </div>
      </div>

      <div className=" flex justify-center gap-5 text-3xl m-3 mt-10 ">
        <motion.div
          whileHover={{ y: -10 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          <a href="https://linkedin.com/in/dinethjanitha" target="_blank">
            <FaLinkedin />
          </a>
        </motion.div>
        <motion.div
          whileHover={{ y: -10 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
           <a href="https://github.com/dinethjanitha" target="_blank"> 
            <FaGithub />
          </a>
        </motion.div>
        <motion.div
          whileHover={{ y: -10 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
           <a href="https://facebook.com/dinethjanith" target="_blank">
            <FaFacebook />
          </a>
        </motion.div>
        <motion.div
          whileHover={{ y: -10 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
           <a href="https://hashnode.com/@dinethjanitha" target="_blank">
            <FaHashnode />
          </a>
        </motion.div>
      </div>

      <div className="flex justify-center">
        <div className=" bg-amber-300  p-[2px] rounded-2xl w-20 "></div>
      </div>
      {/* <motion.div
        whileHover={{ scale: 1, y: -10 }}
        transition={{ type: "spring", stiffness: 50 }}
        className="p-10 bg-blue-500 w-[200px] rounded-lg text-white"
      >
        Hover over me!
      </motion.div> */}
    </div>
  );
};

export default Hero;
