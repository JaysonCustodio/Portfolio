"use client";
import Image from "next/image";
import Switcher from "./components/switcher";
import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [isOn, setIsOn] = useState(false);
  const toggleSwitch = () => setIsOn(!isOn);

  return (
    <div className={`${isOn ? "group" : ""} flex flex-row max-sm:flex-col h-dvh`}>
      {/* Sections */}
      {[
        { label: "PROJECTS", href: "/projects/adeus", image: "/project.jpg", gradient: "from-cyan-400 to-blue-500" },
        { label: "TECH STACK", href: "/tech", image: "/cube.jpg", gradient: "from-pink-400 to-yellow-500" },
        { label: "ABOUT ME", href: "/about", image: "/me.jpg", gradient: "from-green-400 to-blue-500" },
        { label: "CONTACT ME", href: "/contact", image: "/contact.jpg", gradient: "from-purple-400 to-pink-500" },
      ].map(({ label, href, image }) => (
        <div
          key={label}
          className="flex-1 relative flex items-center justify-center group overflow-hidden"
        >
          <Link
            href={href}
            className={`cursor-pointer p-3 rounded-lg relative z-10 text-white text-3xl font-bold 
                opacity-0 group-hover:opacity-100 transition-all duration-500 
                backdrop-blur-md bg-white/10 
                hover:bg-gradient-to-r 
                hover:from-blue-400 hover:to-cyan-400 
                hover:text-black shadow-md transform hover:scale-110 hover:brightness-110 
                hover:shadow-xl hover:shadow-blue-300/50`}
          >
            {label}
          </Link>

          <div className={`${isOn ? "opacity-60" : "opacity-0"} hover:opacity-100 absolute inset-0 z-0 transition-opacity duration-500`}>
            <Image
              src={image}
              alt="Background"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              // REMOVE blur on hover, only scale the background slightly
              className="transition-transform duration-700 transform hover:scale-110"
              priority
            />
          </div>
        </div>
      ))}

      {/* Floating Card */}
      <div
        className={`${isOn ? "max-sm:p-2" : "max-sm:w-xs"} absolute z-40 text-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                           ${isOn && 'top-24 max-sm:top-10 left-36 max-sm:left-30 transform-none'} transition-all duration-500 bg-white/10 backdrop-blur-lg p-5 rounded-xl shadow-lg`}
      >
        <h1 className={`${isOn && "max-sm:hidden"} text-lg font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500`}>
          Jayson Rosales Custodio
        </h1>
        <p className={`text-sm mb-5 ${isOn && "max-sm:hidden"}`}>Web Developer</p>
        <hr className={`${isOn && "max-sm:hidden"} border-gray-600 mb-4`} />
        <Switcher isOn={isOn} toggleSwitch={toggleSwitch} />
      </div>
    </div>
  );
}
