import React from "react";


const Contact = () => {
  return (
    <>
     <div id="Contact" className="About">
      <h1 className="heading">Contact Me</h1>

      <div className="Contact">
        <h2>My Address</h2>
        <p> Kirugavalu, Malavalli, Mandya Dist, 571424</p>
        <a 
          href="https://maps.app.goo.gl/AvtqoKkcv8inu5RQ7" target="_blank"
        >
          → View on Google Maps
        </a>
      </div>

      <div>
        <h2>Connect with Me</h2>
        <ul className="Contact1">
          <li> → LinkedIn
            <a href="https://www.linkedin.com/in/yashwanthm-/"  className="link">
            : Yashwanth M
            </a>
          </li>
          <li> → GitHub
            <a  href="https://github.com/Yashwanth-Mahadevu" className="link">
            : Yashwanth-Mahadevu
            </a> 
          </li>
          <li> → Email Me 
            <a href="mailto:yashwanthmyash2001@gmail.com" className="link">
            :Yashwanthmyash2001@gmail.com
            </a> 
          </li>
        </ul>
      </div>
    </div>
    </>
  );
};

export default Contact;
