import React, { useEffect } from 'react';
import { Spotlight } from '../Components/ui/Spotlight';
import { Button } from '../Components/ui/Button';
import AboutMe from './About';

const HomePage = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '../../public/resume.pdf';
    link.download = 'Simran_Resume.pdf';
    link.click();
  };

  return (
    <>
      <div 
        id='home' 
        className="relative h-screen w-full bg-black 
        dark:bg-grid-black/[0.2] bg-grid-white/[0.2] overflow-hidde"
      >
        {/* Radial gradient overlay */}
        <div 
          className="absolute pointer-events-none inset-0 
          flex items-center justify-center 
          bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        ></div>

        {/* Spotlights */}
        <Spotlight 
          className="hidden md:block -top-40 left-0 md:left-60 md:-top-20" 
          fill="white"
        />
        <Spotlight 
          className="hidden md:block -top-10 left-0 md:left-20 md:-top-50 h-[90%] w-[90%] animate-spotlight2" 
          fill="#7974ff"
        />
        <div className='pt-[12rem] md:pt-[20rem]'>
          
        {/* Content Container */}
        <div 
          className="relative z-10 w-full px-4 max-w-7xl 
          mx-auto flex flex-col  items-center 
          text-center space-y-12 md:space-y-6 
          mt-20 md:mt-0"
          >
          {/* Name Title */}
          <h1 
            className="text-5xl md:text-7xl lg:text-8xl 
            font-bold 
            bg-clip-text text-transparent 
            bg-gradient-to-b from-neutral-50 to-neutral-400"
            >
            Hi, I'm <span className='bg-clip-text text-transparent bg-gradient-to-b from-[#8f87e1] to-[#453e9a]'>Simran Summan</span>
          </h1>

          {/* Subtitle */}
          <p 
            className="text-2xl  md:text-lg 
            text-neutral-300 
            max-w-xl lg:max-w-3xl 
            mx-auto"
          >
            Just a frontend developer striving to craft engaging web experiences with React.js, Tailwind CSS, and modern technologies, while constantly learning and growing.
          </p>

          {/* Download Button */}
          <div className='mt-6'>
            <button 
              onClick={handleDownload}
              className="inline-flex h-12 animate-shimmer items-center justify-center 
              rounded-md border border-slate-800 
              bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] 
              bg-[length:200%_100%] 
              px-6 font-medium text-slate-400 
              transition-colors 
              focus:outline-none focus:ring-2 focus:ring-slate-400 
              focus:ring-offset-2 focus:ring-offset-slate-50"
            >
              Download my resume
            </button>
          </div>
        </div>
      </div>
  </div>
      <AboutMe/>
    </>
  );
};

export default HomePage;