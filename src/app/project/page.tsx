import React from 'react'
import ProjectList from './ProjectList'

const page = () => {
  return (
    <div className=' w-[1200px] mx-auto my-10'>
        <h2 className=' text-5xl'>Projects</h2>
        <div className=' relative transition-all ease-out duration-300 py-2 bg-amber-400 w-30 my-1 hover:w-43'></div>

        <div className=' grid lg:grid-cols-3 grid-cols-3 gap-3 mt-3'>
          <ProjectList/>
        </div>
    </div>
  )
}

export default page