import React from "react";
import PDF from "./YASHWANTH_RESUME.pdf";
import hand from "./hand.png";

const Resume = () => {
    return (
<>
<section id="Resume">
    <h2 className="heading">Resume</h2>
    <p className="summary-resume">  Aspiring software engineer with a strong foundation in programming, data structures, and web development. Experienced in developing innovative projects, with a passion for learning and problem-solving. Proficient in Python, Java, and front-end technologies, with a commitment to delivering Quality solutions.</p>
    <div className="resume">
    <div className="Education">
        <h2 >Education</h2>
        <h2>1. Master of Computer Application</h2>
        <h3 className="About">Maharaja Institute of Technology Mysore</h3>
        <p>2022 - 2024</p>
        <p>I completed my Master of Computer Applications (MCA) from Maharaja Institute of Technology, Mysore, with an impressive 90% score. My academic journey equipped me with strong technical skills and a deep understanding of software development, fostering my passion for problem-solving and innovation.</p>
        <h2>2. Bachelor of Science</h2>
        <h3 className="About">Yuvaraja's College Mysuru</h3>
        <p>2019 - 2022</p>
        <p>I completed my Bachelor of Science (B.Sc.) in Physics, Mathematics, and Computer Science (PMCs) from Yuvaraja’s College, University of Mysore, securing 83%. This academic foundation strengthened my analytical thinking, problem-solving abilities, and programming skills, shaping my interest in technology and software development.</p>
    </div>
    <div className="Experience">
        <h2>Experience</h2>
        <h2>1. Factodigital</h2>
        <h3 className="About">Intern</h3>
        <p>Oct 2023 - Dec 2023</p>
        <p>During my internship at Facto Digital, I successfully developed a simple e-commerce website using
front-end technologies such as HTML, CSS, and JavaScript. The project focused on creating a responsive
and user-friendly interface, incorporating features like product listings, a shopping cart, and dynamic
content updates. This experience enhanced my proficiency in front-end development and taught me the
importance of designing intuitive user experiences.</p>
        <a href={PDF} download={PDF}>Download Resume here</a>
        <img src={hand}></img>
    </div>
    </div>
</section>

</>

    );

};

export default Resume ;