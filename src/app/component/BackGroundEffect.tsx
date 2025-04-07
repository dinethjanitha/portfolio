"use client"
import React, { useState } from 'react'
import { motion } from 'framer-motion';

const BackGroundEffect = () => {
  const [hoverXValue , setHoverXValue] = useState(0)
  return (
    <div style={{
        position : "absolute"
    }}>
        <motion.div className=' absolute top-0 left-12 w-30' onMouseMove={(e) => {
          const ract = e.currentTarget.getBoundingClientRect();
          console.log(ract)
          const hoverY = e.clientX - ract.x;
              const halfHeight = ract.height / 2;

              if (hoverY > halfHeight) {
                setHoverXValue(-10);
              } else {
                setHoverXValue(10);
              }
        }}
            whileHover={{ x : hoverXValue}}
            transition={{ type: "spring", stiffness: 50 }}
        >
           <div className=' w-10 border-3 h-10 border-amber-300 rotate-45'>
           </div>
        </motion.div>


        <motion.div className=' absolute top-20 left-[300px] w-30' onMouseMove={(e) => {
          const ract = e.currentTarget.getBoundingClientRect();
          console.log(ract)
          const hoverY = e.clientX - ract.x;
              const halfHeight = ract.height / 2;

              if (hoverY > halfHeight) {
                setHoverXValue(-10);
              } else {
                setHoverXValue(10);
              }
        }}
            whileHover={{ x : hoverXValue}}
            transition={{ type: "spring", stiffness: 50 }}
        >
            <div className=' w-10 border-3 h-10 border-amber-300 rotate-45'>
            </div>
        </motion.div>
    </div>
  )
}

export default BackGroundEffect