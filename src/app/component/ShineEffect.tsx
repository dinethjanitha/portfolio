import React from 'react'
interface Prop{
  top : number,
  left : number
}
const ShineEffect = ({top , left} : Prop) => {
    return (
        <div className=' z-10' style={{
          overflow:"hidden"
        }}
        >
          {/* Mid-Screen Shine Effect */}
          <div
            style={{
              position: "absolute",
              overflow : "clip",
              width: "600px", // Adjust width for the shine effect
              height: "600px",
              background: "radial-gradient(circle, rgba(255, 255, 255, 0.3) 0%, rgba(25, 6, 240, 0) 50%)",
              top: `${top}%`,
              left: `${left}%`,
              transform: "translate(-50%, -50%)",
              filter: "blur(80px)", // Soft shine
              pointerEvents: "none",
              opacity: 0.4,
              animation: "subtleShine 3s infinite alternate ease-in-out",
            }}
          />
    
          {/* Inline Keyframes */}
          <style>
            {`
              @keyframes subtleShine {
                0% { opacity: 0.2; transform: translate(-50%, -50%) scale(1); }
                100% { opacity: 0.5; transform: translate(-50%, -50%) scale(1.1); }
              }
            `}
          </style>
        </div>
      );
}

export default ShineEffect