"use client"
import Image from 'next/image';
import Switcher from './components/switcher';
import { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [isOn, setIsOn] = useState(false);
  const toggleSwitch = () => setIsOn(!isOn);


  return (
    <div className={`${isOn && 'group'} flex flex-row max-sm:flex-col h-screen`}>
      {/* PROJECT */}
      <div className="flex-1 bg-black relative flex items-center justify-center group">
        <Link href={'/projects/adeus'} className="hover:bg-black cursor-pointer p-3 rounded-lg relative z-10 text-white text-3xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          PROJECT.jayson
        </Link>
        <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <Image
            src="/project.jpg"
            alt="Background Image"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            priority
          />
        </div>
      </div>
      {/* STACK */}
      <div className="flex-1 bg-black relative flex items-center justify-center group">
        <Link href={'/tech'} className="hover:text-black hover:bg-white p-3 rounded-lg relative z-10 text-white text-3xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          TECH STACK
        </Link>
        <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <Image
            src="/cube.jpg"
            alt="Background Image"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            priority
          />
        </div>
      </div>
      {/* ABOUT */}
      <div className="flex-1 bg-black relative flex items-center justify-center group">
        <Link href={'/about'} className="hover:text-black hover:bg-white p-3 rounded-lg relative z-10 text-white text-3xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          README.md
        </Link>
        <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <Image
            src="/me.jpg"
            alt="Background Image"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            priority
          />
        </div>
      </div>
      {/* CONTACT */}
      <div className="flex-1 bg-black relative flex items-center justify-center group">
        <Link href={'/contact'} className="hover:text-black hover:bg-white p-3 rounded-lg relative z-10 text-white text-3xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          CONTACT ME
        </Link>
        <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <Image
            src="/contact.jpg"
            alt="Background Image"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            priority
          />
        </div>
      </div>
      {/* Target div that moves */}
      <div
        className="absolute text-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover:top-20 group-hover:left-30 group-hover:transform-none transition-all duration-500"
      >
        <h1 className='text-lg'>Jayson Rosales Custodio</h1>
        <div className='flex flex-row gap-3 max-sm:gap-1 mb-4'>
          <p>Web Developer</p>
          <p>|</p>
          <p>Engineer</p>
        </div>
        <hr />
        <Switcher isOn={isOn} toggleSwitch={toggleSwitch} />
      </div>
    </div>
  );
}
