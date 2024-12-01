import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
// import { FloatingNav } from "./Components/ui/FloatingNav";
import Home from "./Pages/Home";
import About from "./Pages/About"; // Example: You might have an About page
import Skills from "./Pages/Skills"; // Example: You might have a Skills page
import Projects from "./Pages/Projects"; // Example: You might have a Projects page
import Contact from "./Pages/Contact"; // Example: You might have a Contact page
import Navbar from "./Components/Navbar";
import { Education } from "./Pages/Education";
import Footer from "./Components/Footer";

const navItems = [
  { name: "Home", link: "/" },
  { name: "Skills", link: "/skills" },
  { name: "Projects", link: "/projects" },
  { name: "Contact", link: "/contact" },
];

function App() {
  return (
    <>
      {/* Optional: Add Navigation */}
      {/* <FloatingNav navItems={navItems} /> */}
      <Navbar/>
      {/* Define Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills/>} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
