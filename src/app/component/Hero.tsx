import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import techRing from "./../../../public/images/tech-rings.svg";
import Image from "next/image";
import myImage from "./../../../public/images/myimage.jpg";

const Hero = () => {
  return (
    <div className="p-5">
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
                className="text-5xl font-bold"
              />
            </motion.div>
            <h1 className="text-8xl font-bold">Hi, I am</h1>
            <h1 className=" text-7xl font-bold ">Dineth Janitha</h1>
          </div>
        </motion.div>
        <div className=" md:col-span-4 sm:order-1 flex justify-center items-center">
          <motion.div
            whileHover={{ scale: 1, y: -10, x: -5 }}
            transition={{ type: "spring", stiffness: 50 }}
            className=" relative"
          >
            <div className="avatar absolute top-27 left-23 lg:top-19 md:top-14 lg:left-14 md:left-10.5">
              <div className="md:w-47 w-50 lg:w-66 rounded-full">
                <Image
                  className="shadow-2xl"
                  width={400}
                  height={400}
                  alt=""
                  src={myImage}
                />
              </div>
            </div>

            <Image
              src={techRing}
              alt=""
              className=" min-w-[10px] max-w-[401px]"
            />
          </motion.div>
        </div>
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
