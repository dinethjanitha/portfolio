import React from 'react'

const ShineEffect = () => {
    return (
        <div
          style={{
            position: "relative",
            width: "100vw",
            height: "100vh",
            background: "rgba(25, 6, 240, 1)", // Base background color
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
          }}
        >
          {/* Mid-Screen Shine Effect */}
          <div
            style={{
              position: "absolute",
              width: "60vw", // Adjust width for the shine effect
              height: "60vh",
              background: "radial-gradient(circle, rgba(255, 255, 255, 0.3) 0%, rgba(25, 6, 240, 0) 50%)",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              filter: "blur(80px)", // Soft shine
              pointerEvents: "none",
              opacity: 0.4,
              animation: "subtleShine 3s infinite alternate ease-in-out",
            }}
          />
    
          <h1 style={{ color: "white", fontSize: "2rem", fontWeight: "bold", zIndex: 1 }}>
            Your Content Here ✨
          </h1>
    
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