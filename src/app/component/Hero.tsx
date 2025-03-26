import React, { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import techRing from "./../../../public/images/tech-rings.svg";
import Image from "next/image";
import myImage from "./../../../public/images/myimage.jpg";
import wavinghand from "./../../../public/images/waving-hand.1da6fc7a.gif";

const Hero = () => {

  const [hoverYValue , setHoverYValue] = useState(0);

  return (
    <div className="p-5 relative" style={{
      background:
        "linear-gradient(0deg, rgba(25,6,240,1) 2%, rgba(25,20,71,1) 50%, rgba(13,9,1,1) 79%)",
    }}>
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
            <Image src={wavinghand} width={40} className="mb-3"  alt="" />
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
            
            <h1 className="text-8xl flex font-bold">Hi,I am</h1>
            <h1 className="text-8xl font-bold"></h1>
            <h1 className=" text-7xl font-bold ">Dineth Janitha</h1>
            
            <div>
              <motion.div
               animate = {{x:[ 0 , 100, 0 , 200 , 0] , y : [200,300,100,0, 0]}}
              //  transition={{ease : "anticipate" , duration: 2}}
               className=" btn btn-active">Download CV</motion.div>
            </div>

          </div>
        </motion.div>
        <div className=" md:col-span-4 sm:order-1 flex justify-center items-center">
          <motion.div
            onMouseMove={(e) => {
              const ract = e.currentTarget.getBoundingClientRect();
              console.log(ract);
              const hoverY = e.clientY - ract.y;
              const halfHeight =  ract.height / 2;

              if(hoverY > halfHeight){
                  setHoverYValue(-10);
              }else{
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
                    src={myImage}
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
