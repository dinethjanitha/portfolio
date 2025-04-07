import React from 'react'

const ShineNEffect = () => {
  return (
    <div className='' style={{
        position :"absolute",
        width : "600px",
        height : "600px",
        bottom : "0px",
        left : "200px",
        backgroundImage : "radial-gradient(75% 75% at 50% 50%, #08010BFF 0%, #8B99D000 100%)",
        transform: "translate(-50%, -50%)",
        filter: "blur(80px)", // Soft shineaa
        pointerEvents: "none",
        opacity: 0.4,
        animation: "subtleShine 3s infinite alternate ease-in-out",
    }}>

<style>
            {`
              @keyframes subtleShine {
                0% { opacity: 0.2; transform: translate(-50%, -50%) scale(1); }
                100% { opacity: 0.5; transform: translate(-50%, -50%) scale(1.1); }
              }
            `}
          </style>
    </div>
  )
}

export default ShineNEffect