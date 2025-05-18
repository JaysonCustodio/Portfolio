"use client";
import Image from "next/image";
import Switcher from "./components/switcher";
import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [isOn, setIsOn] = useState(false);
  const toggleSwitch = () => setIsOn(!isOn);

  return (
    <div className={`${isOn ? "group" : ""} flex flex-row max-sm:flex-col h-screen`}>
      {/* Sections */}
      {[
        { label: "PROJECT.jayson", href: "/projects/adeus", image: "/project.jpg", gradient: "from-cyan-400 to-blue-500" },
        { label: "TECH STACK", href: "/tech", image: "/cube.jpg", gradient: "from-pink-400 to-yellow-500" },
        { label: "README.md", href: "/about", image: "/me.jpg", gradient: "from-green-400 to-blue-500" },
        { label: "CONTACT ME", href: "/contact", image: "/contact.jpg", gradient: "from-purple-400 to-pink-500" },
      ].map(({ label, href, image }) => (
        <div
          key={label}
          className="flex-1 bg-black relative flex items-center justify-center group overflow-hidden"
        >
          <Link
            href={href}
            className={`hover:z-50 cursor-pointer p-3 rounded-lg relative z-10 text-white text-3xl font-bold 
                opacity-0 group-hover:opacity-100 transition-all duration-500 
                backdrop-blur-md bg-white/10 
                hover:bg-gradient-to-r 
                hover:from-blue-400 hover:to-cyan-400 
                hover:text-black shadow-md transform hover:scale-110 hover:brightness-110 
                hover:shadow-xl hover:shadow-blue-300/50`}
          >
            {label}
          </Link>

          <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <Image
              src={image}
              alt="Background"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              // REMOVE blur on hover, only scale the background slightly
              className="transition-transform duration-700 transform group-hover:scale-110"
              priority
            />
          </div>
        </div>
      ))}

      {/* Floating Card */}
      <div
        className="absolute z-40 max-sm:w-[280px] m-10 max-sm:m-0 text-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                           group-hover:top-20 group-hover:left-30 group-hover:transform-none 
                           transition-all duration-500 bg-white/10 backdrop-blur-lg p-6 rounded-xl shadow-lg"
      >
        <h1 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-2">
          Jayson Rosales Custodio
        </h1>
        <div className="flex max-sm:m-2 flex-row gap-3 max-sm:gap-1 mb-4 text-gray-300 text-sm">
          <p>Web Developer</p>
        </div>
        <hr className="border-gray-600 mb-4" />
        <Switcher isOn={isOn} toggleSwitch={toggleSwitch} />
      </div>
    </div>
  );
}
