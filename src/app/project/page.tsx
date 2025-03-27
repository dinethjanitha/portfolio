import React from 'react'
import ProjectList from './ProjectList'

const page = () => {
  return (
    <div  style={{
      background:
        "linear-gradient(0deg, rgba(25,6,240,1) 2%, rgba(25,20,71,1) 50%, rgba(13,9,1,1) 79%)",
    }}>
      <div className=' w-[1200px] h-full mx-auto py-10' >
        <h2 className=' text-5xl'>Projects</h2>
        <div className=' relative transition-all ease-out duration-300 py-2 bg-amber-400 w-30 my-1 hover:w-43'></div>

        <div className=' grid lg:grid-cols-3 grid-cols-3 gap-3 mt-3'>
          <ProjectList/>
        </div>
    </div>
    </div>
  )
}

export default page