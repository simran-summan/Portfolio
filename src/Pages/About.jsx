import React from 'react';
import logoSrc from '../assets/developerActivity.svg';
import logoSrc2 from '../assets/reactPerson.svg';
import { Education } from './Education';

const AboutMe = () => {
  return (
    <section id="about" className="bg-black pt-64">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <h2 className="text-5xl font-bold md:text-center md:mb-12 font-serif sm:text-7xl relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-[#8f87e1] to-[#453e9a] md:py-8">
          About Me
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">
          {/* Text Content */}
          <img src={logoSrc} alt="Logo" className='hidden md:block animate-slideIn w-[20%] absolute z-0 bottom-[-29rem] left-28 opacity-70' />;
          <div className="md:w-[60%] m-auto z-50">
          
            <p className="text-2xl md:text-start text-gray-400 leading-relaxed mb-6 font-serif">
              I am <strong>Simran Summan</strong> an aspiring <strong>frontend developer</strong> with hands-on experience in building dynamic and
              responsive web applications using <strong>React.js</strong>, <strong>Tailwind CSS</strong>, and <strong>Redux</strong>.  
              Proficient in <strong>JavaScript</strong> and various modern frontend technologies, I am currently in the final
              year of a <strong>Bachelor of Computer Applications</strong> program. I am actively seeking opportunities to
              enhance my skills in web development and user interface design.
            </p>
          </div>
          {/* Skills Section */}
          {/* <div className="bg-white shadow-lg rounded-lg p-6 md:w-1/3">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Skills</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <span className="text-blue-500">✔</span>
                <span className="text-gray-700">
                  <strong>Languages:</strong> JavaScript, Java, C, Python, HTML, CSS
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-blue-500">✔</span>
                <span className="text-gray-700">
                  <strong>Frameworks/Libraries:</strong> React.js, Tailwind CSS, Redux
                </span>
              </li>
            </ul>
          </div> */}
          <img src={logoSrc2} alt="Logo" className='hidden md:block w-[20%] absolute z-0 opacity-70 right-16 bottom-[-53rem]' />;
        </div>
      </div>
      <Education/>
    </section>
  );
};

export default AboutMe;
