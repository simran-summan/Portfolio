import React from 'react';
import { Spotlight } from '../Components/ui/Spotlight';
import { Button } from '../Components/ui/Button';
import bg1 from '../assets/bg2.jpg';

const HomePage = () => {
  return (<div
      className="h-[45rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative" >
        <div
        className="absolute inset-0 "
        style={{
          backgroundImage: `url(${bg1})`,
          filter: 'blur(0.9px)', // Apply blur
        }}
      ></div>
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white"/>
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-30 md:pt-0 mt-24">
        <h1
          className="text-4xl md:text-8xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 ">
          Hi, I'm <span className='text-teal-200'>Simran</span>
        </h1>
        <p
          className="mt-4 font-normal text-base text-neutral-300 max-w-3xl text-center mx-auto">
          Just a frontend developer striving to craft engaging web experiences with React.js, Tailwind CSS, and modern technologies, while constantly learning and growing.
        </p>
        <div className='flex justify-center mt-9'>
        <Button text='Know more'/>
        </div>
      </div>
    </div>)
    
};

export default HomePage;

      