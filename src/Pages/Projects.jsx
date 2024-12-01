"use client";
import logoSrc2 from '../assets/reactPerson.svg';

// import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../Components/ui/Card"
// import Link from "react-router-dom";

const project = [
{
  title : 'Book Store App ',
  desc: 'Built a React.js book store app with CRUD, Axios for APIs, and Tailwind CSS for responsive design. Added intuitive navigation and real-time form validation.',
  tech: 'ReactJs | TailwindCss | Axios',
  depo: 'https://book-bazaar-app.vercel.app/',
  github: 'https://github.com/simran-summan/Book-store-app',
  img: 'https://images.unsplash.com/photo-1491841651911-c44c30c34548?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
},
{
  title : 'Medicine Supply Management System ',
  desc: 'Collaborated on supply management system with inventory tracking, real-time communication via Socket.IO, and optimized UX. Streamlined API integration with backend using Axios.',
  tech: 'ReactJs | TailwindCSS | Axios | Socket.IO',
  depo: '',
  github: 'https://github.com/ByteZO/Medicine-Supply-Management-System',
  img: 'https://images.unsplash.com/photo-1585435557343-3b092031a831?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
},
{
  title : 'Recipe Router App ',
  desc: 'Created a React-based recipe app with search, favorite saving, and detailed recipe views. Designed an intuitive layout for better accessibility and scalability.',
  tech: 'ReactJs | TailwindCss',
  depo: 'https://food-recipe-app-beryl.vercel.app/',
  github: 'https://github.com/simran-summan/Food-recipe-app',
  img: 'https://images.unsplash.com/photo-1512058454905-6b841e7ad132?q=80&w=1995&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
},
{
  title : 'Rock paper scissors game',
  desc: 'Created an interactive Rock-Paper-Scissors game using HTML, CSS, and JavaScript. Features dynamic gameplay logic and real-time result updates for an engaging user experience.',
  tech: 'HTML | CSS | JavaScript',
  depo: 'https://simran-summan.github.io/Rock-paper-scissor-game',
  github: 'https://github.com/simran-summan/Rock-paper-scissor-game',
  img: 'https://static.vecteezy.com/system/resources/previews/000/691/498/non_2x/rock-paper-scissors-pop-art-vector-design.jpg'
},
{
  title : 'Pomodora timer',
  desc: 'A Pomodoro timer using HTML, CSS, and JavaScript. Features customizable work and break intervals with a sleek, responsive design for efficient time management.',
  tech: 'HTML | CSS | JavaScript',
  depo: 'https://simran-summan.github.io/Pomodora-Timer',
  github: 'https://github.com/simran-summan/Pomodora-Timer',
  img: 'https://cfw.paymoapp.com/wp-content/uploads/2021/05/pomofocus.webp'
}
]

const Projects=()=> {
  return (
    <div className="w-full font-sans md:px-10 h-full bg-black  bg-dot-white/[0.2] relative ">
      <div className="absolute pointer-events-none inset-0  bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_50%,black)]"></div>
      <h2 className="text-5xl font-bold text-center text-[#5f58c4] mb-2 font-serif pt-28">
          Projects
        </h2>
        <div className="md:grid md:grid-cols-2 px-14">
      {project.map((item, index) => (
        <CardContainer className="inter-var" key={index}>
          <CardBody className="relative group/card hover:shadow-2xl hover:shadow-purple-500/[0.1] bg-black border-white/[0.2] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border"> 
            <CardItem
              style={{ transform: "translateZ(100%)" }}
              className="w-full mt-4"
            >
              <img
                src={item.img}
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
                />
            </CardItem>
            <CardItem
              style={{ transform: "translateZ(50%)" }}
              className="text-xl font-bold text-white mt-10"
              >
              {item.title}
            </CardItem>
            <CardItem
              style={{ transform: "translateZ(60%)" }}
              className="text-sm max-w-sm mt-2 text-neutral-300"
              >
              {item.desc}
            </CardItem>
            <div className="flex justify-between items-center mt-7">
              <a
                style={{ transform: "translateZ(20%)" }}
                href={item.github}
                target="__blank"
                className="px-4 py-2 rounded-xl bg-white text-black text-xs font-bold hover:bg-slate-300"
              >
                Github
              </a>
              {item.depo &&  <CardItem
                style={{ transform: "translateZ(20%)" }}
                as="a"
                href={item.depo}
                target="__blank"
                className="px-4 py-2 rounded-xl text-xs font-normal text-white hover:text-slate-300"
                >
                Check out the link →
              </CardItem>}
             
            </div>
          </CardBody>
        </CardContainer>
      ))}
    </div>
      </div>
  );
  
}

export default Projects;