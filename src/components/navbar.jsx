import React from "react";
import About from "./About";

const Navbar = () => {
  return (
    <>
    <nav className="nav">
        <a href="#hero" className="h3">My Portfolio</a>
        <ul className="links">
             <li><a href="#About">About</a></li>
             <li><a href="#Resume">Resume</a></li>
            <li><a href="#Skills">Skills</a></li>
            <li><a href="#Projects">Projects</a></li>
            <li><a href="#Contact"> Contact</a></li>
        </ul>
    </nav>
    </>
  );
};

export default Navbar;
