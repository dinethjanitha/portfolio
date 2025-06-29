"use client"
import Hero from "./component/Hero";
export default function Home() {
  return (
    <div className="h-screen relative overflow-hidden">
      {/* Beams as background */}
       
      {/* Main content */}
      <div className="relative z-10">
        <Hero />
      </div>
      {/* BlobCursor always on top */}
       
    </div>
  );
}