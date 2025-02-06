import React from "react";
import Profile from "./Photo.jpeg";
import Linkedin from "./Linkedin.png";
import Git from "./git.png";
import Mail from "./Mail.png";
import X from "./X.webp"
import Bgimage from "./dvn6.jpg";

const Hero = () => {
  const heroStyle = {
   backgroundImage: `url(${Bgimage})`,
   backgroundSize: "cover",
  };

  return (
    <section style={heroStyle} id="hero">
    <div className="image">
        <img src={Profile} className="image-link"></img>
        <div className="images">
        <h1>YASHWANTH M</h1>
        <h3 className="summary"> -  Aspiring Software Developer with expertise in React, Python, Java and Web Technology . Passionate about building scalable and efficient software solutions.</h3>
        <div className="Social-links">
          <a href="https://www.linkedin.com/in/yashwanthm-/">
          <img src={Linkedin} className="Social-images"></img></a>
          <a href="https://github.com/Yashwanth-Mahadevu">
            <img src={Git} className="Social-images"></img></a>
          <a href="mailto:yashwanthmyash2001@gmail.com">
            <img src={Mail} className="Social-images"></img>
          </a>
          <a href="https://x.com/Yashwanth__09">
          <img src={X} className="Social-images"></img>
          </a>
        </div>


    </div>
    </div>
    
    </section>
  );
};

export default Hero;
