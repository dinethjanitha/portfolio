import React from 'react'
import ProjectList from './ProjectList'

const page = () => {
  return (
    <div className=' relative' >
      <div className=' lg:w-[1200px] h-full mx-auto py-10 p-2' >
        <h2 className=' text-5xl'>Projects</h2>
        <div className=' relative transition-all ease-out duration-300 py-2 bg-amber-400 w-30 my-1 hover:w-43'></div>

        <div className=' grid lg:grid-cols-3 sm:grid-cols-1 gap-3 mt-3'>
          <ProjectList/>
        </div>
    </div>
    </div>
  )
}

export default page