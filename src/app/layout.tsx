import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "./util/NavBar";
import Beams from "./Beams";
import BlobCursor from "./BlobCursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dineth Janitha",
  description: "Dineth Janith dineth dinethjanitha",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <main className=" relative">
          <div className="absolute inset-0 z-0 pointer-events-none">
            <Beams
              beamWidth={2}
              beamHeight={15}
              beamNumber={12}
              lightColor="#ffffff"
              speed={2}
              noiseIntensity={1.75}
              scale={0.2}
              rotation={0}
            />
          </div>
          <div className="py-1 bg-amber-100 z-10 relative text-center text-black">
            This site still under the development!
          </div>
          <div className=" relative">
            <NavBar />
          </div>
           <div className=" absolute w-full h-dvh z-9990">
        <BlobCursor
          blobType="circle"
          fillColor="#FFFFFF"
          trailCount={3}
          sizes={[10, 10, 60]}
          innerSizes={[20, 35, 25]}
          innerColor="rgba(255,255,255,0.8)"
          opacities={[0.6, 0.6, 0.6]}
          shadowColor="rgba(0,0,0,0.75)"
          shadowBlur={5}
          shadowOffsetX={10}
          shadowOffsetY={10}
          filterStdDeviation={30}
          useFilter={true}
          fastDuration={0.1}
          slowDuration={0.1}
          zIndex={9999}
        />
       </div>
          {children}
        </main>
       
      </body>
    </html>
  );
}
