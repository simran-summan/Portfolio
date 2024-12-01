import React from 'react';
// import { FloatingNav } from './ui/FloatingNavbar';
import { Link } from "react-router-dom";

const Navbar = () => {
  const navItems = [
    { name: 'Home', href: '/' },
    // { name: 'About', href: '/#about' },
    // { name: 'Education', href: '/#education' },
    { name: 'Skills', href: '/skills' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' }
  ];
  return (
    <nav className="fixed top-0 w-full backdrop-blur-lg shadow-md z-50 pb-3">
      <div className="container mx-auto flex items-center justify-between pt-7 px-6">
        <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-[#a8a1f9] to-[#635bb6]">Portfolio</div>
        <ul className="hidden md:flex space-x-14 pr-8">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="text-gray-300 hover:text-[#6C63E1] font-medium text-md transition-colors"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
        <button
          id="mobile-menu-toggle"
          className="md:hidden text-gray-700 focus:outline-none"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className="hidden bg-white/80 backdrop-blur-md md:hidden shadow-md absolute top-full left-0 w-full"
      >
        <ul className="flex flex-col items-center space-y-4 py-4">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.href}
                className="text-gray-200 hover:text-[#822599] font-medium transition-colors"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
