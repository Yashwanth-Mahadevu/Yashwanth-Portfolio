import React from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Resume from "./components/Resume";

const App = () => {
  return (
    <div className="bg-gray-900 text-white">
      <Navbar />
      <Hero />
      <About />
      <Resume/>
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
