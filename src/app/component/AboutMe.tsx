import React from "react";
import { CgProfile } from "react-icons/cg";
import { IoLanguageSharp } from "react-icons/io5";
import { GiWorld } from "react-icons/gi";
import { LuDna } from "react-icons/lu";


const AboutMe = () => {
  return (
    <div
      className=" h-screen p-5"
      style={{
        background: "rgba(25,6,240,1)",
      }}
    >
      <div className=" lg:w-[1200px] overflow-clip mx-auto">
        <div className="my-4">
          <h1 className=" text-3xl font-bold mt-5 flex gap-2">
            <CgProfile />
            About Me
          </h1>
          <div className="w-20 bg-amber-300 h-2 "></div>
        </div>

        <div className=" m-3">
          <h2 className="">
            <span className=" text-4xl font-bold mr-2 ">I</span>am currently
            undergraduage Bsc(Hons) Software Engineering student at cardiff
            metropolitan university.
          </h2>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-10  mt-5">
            <div>
              <h2 className=" text-2xl font-bold text-black flex flex-none gap-3"><IoLanguageSharp />Languages</h2>
              <div className="ml-5">
                <h2>English</h2>
                <h2>Sinhala</h2>
              </div>
            </div>

            <div>
              <h2 className=" text-2xl font-bold text-black grow flex gap-3"><GiWorld />Nationaly</h2>
              <div className="ml-5">
                <h2>Sinhalese</h2>
              </div>
            </div>

            <div>
              <h2 className=" text-2xl font-bold text-black flex-none flex gap-3"><LuDna />Gender</h2>
              <div className="ml-5">
                <li className=" list list-item">Male</li>
              </div>
            </div>
          </div>
        </div>
        {/* <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore non
          eos accusamus, blanditiis totam incidunt quo magni fugiat amet quaerat
          dolores nostrum unde repudiandae optio, voluptate minus mollitia.
          Fugiat, eos!
        </p> */}
      </div>
    </div>
  );
};

export default AboutMe;
