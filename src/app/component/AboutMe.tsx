import React from "react";
import { CgProfile } from "react-icons/cg";
import { IoLanguageSharp } from "react-icons/io5";
import { GiWorld } from "react-icons/gi";
import { LuDna } from "react-icons/lu";



const AboutMe = () => {
  return (
    <div
      className=" relative h-screen p-5 z-10"
    >
      <div className=" lg:w-[1200px] overflow-clip mx-auto">
        <div className="my-4">
          <h1 className=" text-3xl font-bold mt-5 flex gap-2">
            <CgProfile />
            About Me
          </h1>
          <div className="w-20 bg-amber-300 h-2 "></div>
        </div>

        <div className="">
          <h2 className="">
            <span className=" text-4xl font-bold mr-2 ">I</span>am currently
            undergraduage Bsc(Hons) Software Engineering student at cardiff
            metropolitan university.
          </h2>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-10  mt-5">
            <div>
              <h2 className=" text-2xl font-bold text-[#F5D7E6] flex flex-none gap-3"><IoLanguageSharp />Languages</h2>
              <div className="w-12 h-2 p-1 bg-amber-300"></div>
              <div className="ml-5">
                <li className="text-[#f5f5f5]">English</li>
                <li className=" text-[#f5e612]"><span className="text-[#f5f5f5]">Sinhala</span></li>
              </div>
            </div>

            <div>
              <h2 className=" text-2xl font-bold text-[#F5D7E6] grow flex gap-3"><GiWorld />Nationaly</h2>
              <div className="ml-5">
                <li className="ml-7 text-[#08f53c]">Sinhalese</li>
              </div>
            </div>

            <div>
              <h2 className=" text-2xl font-bold text-[#F5D7E6] flex-none flex gap-3"><LuDna />Gender</h2>
              <div className="ml-5">
                <li className=" list list-item text-[#08f53c]">Male</li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
