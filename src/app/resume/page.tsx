import React from "react";

const Resume = () => {

  const education = [
    {
      time : "Nov 2024 - Precent",
      courseName : "BSc(Hons) Software Engineering",
      grade : null,
      institute : "Cardiff Metropolitan University Affiliate with ICBT campus" 
    } ,
    {
      time : "2022 - 2024",
      courseName : "Higher Diploma in Computing and Software Engineering",
      grade : "Grade : Distinction",
      institute : "Cardiff Metropolitan University Affiliate with ICBT campus" 
    },
    
 ]



  return (
    <div
      className=" h-screen"
      style={{
        background:
          "linear-gradient(0deg, rgba(25,6,240,1) 2%, rgba(25,20,71,1) 50%, rgba(13,9,1,1) 79%)",
      }}
    >
      <div className=" lg:w-[1200px] lg:mx-auto p-2">
        <h1 className=" text-5xl text-center pt-6">My Resume</h1>

        <div className=" grid lg:grid-cols-2">
          <div>
            <h2 className="  text-4xl mt-5">Education</h2>
            {/* <ul className=" w-80 mt-5">
            <li className=" relative flex mb-2 gap-4  overflow-clip">
              <div className=" before:absolute  before:left-[10px] before:rounded-4xl before:top-[26px] before:h-full  before:w-[3px]  before:bg-gray-400 ">
                <svg
                  height="24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  className=""
                >
                  <circle r="12" cx="12" cy="12" />
                </svg>
              </div>

              <div className=" text-sm  ">
                <p className="text-xl italic font-bold ">2023</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem,
                  ut modi nihil sed amet suscipit, nam dignissimos, porro deserunt
                  mollitia veniam soluta. Atque ab eius neque repudiandae, facere
                  amet corrupti?
                </p>
              </div>
            </li>
          </ul> */}

            <div className="mt-5 ml-5">
              {
                education.map((e,index) => {
                  return (
                    <div key={index} className="flex flex-row gap-4 mt-1">
                    <div className="w-[24px] flex flex-col justify-center items-center  ">
                      <div className=" flex-none">
                        <svg
                          height="24"
                          width="24"
                          xmlns="http://www.w3.org/2000/svg"
                          className=""
                        >
                          <circle r="12" cx="12" cy="12" fill="white" />
                        </svg>
                      </div>
    
                      <div className=" bg-amber-300 grow w-1 mt-1 rounded-2xl "></div>
                    </div>
                    <div className=" relative">
                      <p className=" text-2xl top-[-2000px]">{e.time}</p>
                      <p className="text-xl font-bold text-amber-300">
                        <i>{e.courseName}</i>
                      </p>
                      <div className="h-2"></div>
                      <p className=" text-amber-400">{e.grade}</p>
                      <p>{e.institute}</p>
                      <br />
                    </div>
                  </div>
                  )
                })
              }
            </div>
          </div>

          <div>
            <h2 className=" text-4xl mt-5">Experinces</h2>
            
           

          </div>
        </div>

        {/* end */}

        {/* <div className="w-80 mt-1 relative">
          <div className="flex flex-col justify-start items-start ">
                <div className=" flex flex-row flex-none gap-1">
                  <svg
                    height="24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    className=""
                  >
                    <circle r="12" cx="12" cy="12" />
                  </svg>

                  <p className=" text-xl">2003</p>
                </div>

                <div className=" flex flex-row absolute left-3 top-7 gap-3">
                  <div className=" bg-amber-300 grow w-4 mt-1 rounded-2xl "></div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus sequi quis eligendi officia aut inventore nulla sed, et tempore quas, autem modi placeat cumque vel assumenda debitis. Reiciendis, quod adipisci?</p>

                </div>
              </div>
        </div> */}
      </div>
    </div>
  );
};

export default Resume;
