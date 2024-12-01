"use client";
import React from "react";
import { Button } from "../Components/ui/MovingBorder";
// import { Brands } from "../../public/html";

const Skills = () => {
  return (
    <div className="min-h-screen bg-black py-24  w-full font-sans md:px-10 h-full bg-dot-white/[0.2] relative ">
        <div className="absolute pointer-events-none inset-0  bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_50%,black)]"></div>
        <div className="mx-20">
      <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-[#afa9f1] to-[#6e68b8] mb-8 font-serif">
        Languages:
      </h2>
      <div className="grid grid-cols-6">
        <Button
          borderClassName="bg-[radial-gradient(var(--yellow-500)_40%,transparent_70%)]"
          
          borderRadius="1.75rem"
          className="p-8 text-white border-slate-800 flex-col"
          >
          <img src="../../public/js-logo.png" alt="" />
          <h1 className="text-2xl font-semibold text-neutral-300">
            Javascript
          </h1>
        </Button>
        <Button
          borderClassName="bg-[radial-gradient(var(--sky-500)_40%,transparent_70%)]"
          
          borderRadius="1.75rem"
          className="p-8 text-white border-slate-800 flex-col"
        >
          <img src="../../public/css-logo.png" alt="" />
          <h1 className="text-2xl font-semibold text-neutral-300">CSS</h1>
        </Button>
        <Button
          borderClassName="bg-[radial-gradient(var(--orange-500)_40%,transparent_70%)]"
          
          borderRadius="1.75rem"
          className="p-8 text-white border-slate-800 flex-col"
          >
          <img src="../../public/html-logo.png" alt="" />
          <h1 className="text-2xl font-semibold text-neutral-300">HTML</h1>
        </Button>
        <Button
          borderClassName="bg-[radial-gradient(var(--red-500)_40%,transparent_70%)]"
          
          borderRadius="1.75rem"
          className="p-9 text-white border-slate-800 flex-col"
          >
          <img src="../../public/java-logo.png" alt="" />
          <h1 className="text-2xl font-semibold text-neutral-300">
            Java
          </h1>
        </Button>
        <Button
          borderClassName="bg-[radial-gradient(var(--blue-500)_40%,transparent_70%)]"
          
          borderRadius="1.75rem"
          className="p-8 text-white border-slate-800 flex-col"
          >
          <img src="../../public/c-logo.png" alt="" />
          <h1 className="text-2xl font-semibold text-neutral-300">
            C
          </h1>
        </Button>
        <Button
          borderClassName="bg-[radial-gradient(var(--yellow-500)_40%,transparent_70%)]"
          
          borderRadius="1.75rem"
          className="p-6 text-white border-slate-800 flex-col"
          >
          <img src="../../public/python-logo.png" alt="" />
          <h1 className="text-2xl font-semibold text-neutral-300">
            Python
          </h1>
        </Button>
      </div>
      <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-[#afa9f1] to-[#6e68b8] mb-8 font-serif mt-8">
        Libraries:
      </h2>
      <div className="grid grid-cols-6">
        <Button
          borderClassName="bg-[radial-gradient(var(--blue-500)_40%,transparent_70%)]"
          
          borderRadius="1.75rem"
          className="p-6 text-white border-slate-800 flex-col"
          >
          <img src="../../public/react-logo.png" alt="" />
          <h1 className="text-2xl font-semibold text-neutral-300">
            React
          </h1>
        </Button>
        <Button
          borderClassName="bg-[radial-gradient(var(--sky-500)_40%,transparent_70%)]"
          
          borderRadius="1.75rem"
          className="p-6 text-white border-slate-800 flex-col"
          >
          <img src="../../public/tailwind-logo.png" alt="" />
          <h1 className="text-2xl font-semibold text-neutral-300 pt-6">
            TailwindCSS
          </h1>
        </Button>
        <Button
          borderClassName="bg-[radial-gradient(var(--purple-500)_40%,transparent_70%)]"
          
          borderRadius="1.75rem"
          className="p-6 text-white border-slate-800 flex-col"
          >
          <img src="../../public/redux-logo.png" alt="" />
          <h1 className="text-2xl font-semibold text-neutral-300">
            Redux
          </h1>
        </Button>
        </div>
      </div>
    </div>
  );
};

export default Skills;
