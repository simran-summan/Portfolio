import { Link } from "react-router-dom";

const Footer = () => {
    return (
      <footer className="bg-black text-gray-400 pb-7 md:pb-16">
        <div className="border-t border-gray-500 w-[20%] text-black m-auto md:pt-8"> cewwubruibfushfsiogjpos</div>
        <div className="container mx-auto px-6 md:px-14 lg:px-18">
          <div className="flex flex-col md:flex-row lg:space-x-[18rem] items-center space-y-0 md:space-y-0">
            {/* Left Section */}
            <div className="md:flex items-center space-x-2 hidden  ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-6 h-6 text-white"
              >
                <path d="M20.99 4H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-2 4l-7 4.5L4 8V6l7 4.5L19 6v2z" />
              </svg>
              <p className="text-md">simransumman7@gmail.com</p>
            </div>
                {/* Navigation Section */}
            <div className="text-center">
              <div className="md:flex space-y-3 md:space-y-0 lg:space-x-20">
              <Link
                className="text-2xl md:text-md hover:text-white transition-colors md:flex-none flex justify-center"
                to={'/'}
                >
                Home
              </Link>
              <Link
                to={'/skills'}
                className="text-2xl md:text-md hover:text-white transition-colors md:flex-none flex justify-center"
                >
                Skills
              </Link>
              <Link
                to={'/projects'}
                className="text-2xl md:text-md hover:text-white transition-colors md:flex-none flex justify-center"
                >
                Project
              </Link>
              <Link
                to={'/contact'}
                className="text-2xl md:text-md hover:text-white transition-colors md:flex-none flex justify-center"
                >
                Contact
              </Link>
              </div>
              <p className="text-md pt-3 pb-3">
                © {new Date().getFullYear()} My Portfolio. All Rights Reserved.
              </p>
            </div>

            {/* Center Section */}
            <div className="flex space-x-6">
              <a
                href="https://x.com/simscodes"
                target="__blank"
                className="hover:text-[#453e9a] transition-colors"
                aria-label="Twitter"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-6 h-6"
                >
                  <path d="M22.46 6c-.77.35-1.57.59-2.46.69a4.41 4.41 0 001.94-2.42 8.63 8.63 0 01-2.77 1.06 4.31 4.31 0 00-7.44 3.93A12.3 12.3 0 013 5.15a4.31 4.31 0 001.33 5.75 4.23 4.23 0 01-1.95-.54v.05a4.31 4.31 0 003.46 4.23 4.27 4.27 0 01-1.94.07 4.31 4.31 0 004.02 2.98 8.66 8.66 0 01-5.37 1.85A12.21 12.21 0 0021 8.29a8.76 8.76 0 002.46-2.29z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/simran-summan-42b747246/"
                target="__blank"
                className="hover:text-[#453e9a] transition-colors"
                aria-label="LinkedIn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-6 h-6"
                >
                  <path d="M22.23 0H1.77C.79 0 0 .774 0 1.729v20.542C0 23.226.79 24 1.77 24h20.46c.98 0 1.77-.774 1.77-1.729V1.729C24 .774 23.21 0 22.23 0zM7.07 20.452H3.56V9.035h3.51v11.417zM5.316 7.645a2.028 2.028 0 110-4.056 2.028 2.028 0 010 4.056zm15.137 12.807h-3.51v-5.919c0-1.413-.029-3.233-1.97-3.233-1.97 0-2.27 1.537-2.27 3.125v6.027h-3.51V9.035h3.37v1.55h.05c.47-.88 1.617-1.812 3.33-1.812 3.56 0 4.22 2.344 4.22 5.392v6.288z" />
                </svg>
              </a>
              {/* GitHub */}
            <a
              href="https://github.com/simran-summan"
              target="__blank"
              className="hover:text-[#453e9a] transition-colors"
              aria-label="GitHub"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-6 h-6"
              >
                <path d="M12 2a10 10 0 00-3.16 19.48c.5.09.68-.22.68-.48v-1.68c-2.78.6-3.37-1.34-3.37-1.34a2.66 2.66 0 00-1.11-1.46c-.91-.62.07-.6.07-.6a2.11 2.11 0 011.53 1.03 2.14 2.14 0 002.92.84 2.14 2.14 0 01.64-1.33c-2.22-.25-4.56-1.11-4.56-4.94a3.86 3.86 0 011-2.68 3.6 3.6 0 01.1-2.65s.84-.27 2.75 1a9.41 9.41 0 015 0c1.91-1.32 2.75-1 2.75-1a3.6 3.6 0 01.1 2.65 3.86 3.86 0 011 2.68c0 3.84-2.35 4.69-4.59 4.94a2.4 2.4 0 01.69 1.88v2.8c0 .26.18.57.69.47A10 10 0 0012 2z" />
              </svg>
            </a>
            </div>
  
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  