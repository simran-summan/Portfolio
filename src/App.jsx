import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { FloatingNav } from "./Components/ui/FloatingNav";
import Home from "./Pages/Home";
import About from "./Pages/About"; // Example: You might have an About page
// import Skills from "./Pages/Skills"; // Example: You might have a Skills page
import Projects from "./Pages/Projects"; // Example: You might have a Projects page
import Contact from "./Pages/Contact"; // Example: You might have a Contact page

const navItems = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Skills", link: "/skills" },
  { name: "Projects", link: "/projects" },
  { name: "Contact", link: "/contact" },
];

function App() {
  return (
    <>
      {/* Optional: Add Navigation */}
      <FloatingNav navItems={navItems} />
      {/* Define Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/skills" element={<Skills />} /> */}
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <About/>
    </>
  );
}

export default App;
