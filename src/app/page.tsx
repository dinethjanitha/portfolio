"use client"
import Hero from "./component/Hero";

export default function Home() {
  return (
        <div className="h-screen" style={
          {
            background:
            "linear-gradient(0deg, rgba(25,6,240,1) 2%, rgba(25,20,71,1) 50%, rgba(13,9,1,1) 79%)",
          }
        }>
          <Hero/>
        </div>
  );
}
