import React, { useState } from "react";


// Sample project data
const projectData = [
  {
    id: 1,
    title: "Web Data Mining To Detect Online Spread Of Terrorism",
    shortNote: `Developed a web data mining system to detect extremist content online using NLP and ANN.
                 Collected and analyzed web data through scraping and text classification techniques.
                  Aimed to identify and flag potential threats for further investigation and monitoring.`,
    details:  `The rapid proliferation of Digital platforms has brought to an increase in the dissemination of all 
types of information, including that related to terrorist activities. Ensuring the detection and 
suppression of such activities is important for safeguarding public safety and social security. This 
project, titled "Web Data Mining to Detect Online Spread of Terrorism Using Machine Learning" 
leverages natural language processing (NLP) and machine learning techniques to identify 
terrorist-related content on platforms such as Twitter and Reddit. Data was gathered via web 
scraping, producing datasets that distinguish between terrorist and non-terrorist activities, which 
were then combined and pre-processed using methods like Term Frequency Inverse Document 
Frequency (TF-IDF) and count vectorization.  
This study applies a range of machine learning algorithms, including K-Nearest Neighbours 
(KNN), Naive Bayes, and Decision Tree, alongside a deep learning approach utilizing Artificial 
Neural Networks (ANN). The models were assessed based on criteria like accuracy, precision, 
recall, and F1-score. Logistic Regression demonstrated excellent performance, obtaining an 
accuracy level of 96.39%, along with high precision and recall. The Naive Bayes classifier 
closely followed with an accuracy level of 95.64%, while the Decision Tree classifier achieved 
92.31% accuracy. The ANN model, trained over 10 epochs, attained a validation accuracy of 
approximately 95%, indicating its efficacy in identifying terrorist activities.  
The discoveries emphasize the capabilities of machine learning and deep learning approaches in 
recognizing and mitigating the spread of terrorist content on social media, aiding in bettering 
security measures and public safety. This project underscores the relevance of advanced 
computational strategies in addressing complex social issues and sets the stage for the research 
and the development in automated terrorist activity detection in the online digital platform.`,
    link: "https://drive.google.com/file/d/1A41HZ4veUnR_tNA5hA0GzmQ0atsWXpg4/view?usp=drive_link",
  },
  {
    id: 2,
    title: "Online Movie Ticket Booking",
    shortNote: `Designed and developed an online movie ticket booking system for seamless user experience.
               Implemented features for browsing movies, selecting seats, and making secure payments.
               Ensured a responsive and user-friendly interface for hassle-free ticket reservations.`,
    details: `The online ticket booking system is now created very effective information to he
    lp streamline the management of an organization and also the user in our daily life. In th
    is project, people can book movie tickets easily online and take entertainment. By this ap
    plication, people can book tickets online in different places. Also, people can search for
     tickets from different movies and concerts tickets on a particular day. This application 
     also available payment system. People can buy online tickets from secured way like mobile
      banking system like SBI,HDFC etc and Cards/UPI. People can also cancel their booking tic
      kets and in that case refund of money will also be ensured through the system. This appl
      ication has an admin panel and user panel. And for access to this system, he/she must lo
      g in this system. In the admin panel, admin can add and update movies, add movies hall. 
      Admin also can add new Movie and tickets and manage that. And a user can book a differen
      t ticket through this application and can pay for the ticket, see the details and update
       information of his desired ticket. At first, the user must have the complete registrati
       on process from the registration page before he enters the main page. All the system is
        user-friendly and easy to use`,
      link : "https://drive.google.com/file/d/1t8g-_VlD9MyTJC4NvLskQ3U16JTujMBT/view?usp=drive_link",
  },
  {
    id: 3,
    title: "Fake Currency Detection",
    shortNote: `Developed a fake currency detection system using image processing and machine learning techniques.
               Utilized various algorithms to analyze and validate currency authenticity by identifying key security features. 
              Aimed to reduce counterfeit currency circulation and improve financial security.`,
    details:  `Fake currency detection is crucial to ensure the integrity of financial systems 
    and protect against counterfeit money. This project focuses on the development of an 
    automated system to identify fake currency using image processing and machine learning 
    techniques. The system utilizes advanced algorithms to analyze currency images, detecting
     key security features such as watermarks, holograms, and patterns to verify authenticity
     . The model is trained on a dataset of real and fake currency images to achieve high 
     accuracy in classification. This approach aims to reduce the circulation of counterfeit
      money, enhancing security in financial transactions and protecting businesses and 
      consumers from financial fraud.`,
    link: "https://drive.google.com/file/d/1L1J96izHr8Ieiwn5wEQdQodWv6ve3Ktb/view?usp=drive_link",
  },
  {
    id: 4,
    title: "Smart Mirror",
    shortNote: `Developed a Smart Mirror using an Arduino microcontroller integrated with 
    an ultrasonic sensor. The system displays useful information such as time, date, weather, 
    and news updates on a reflective surface. The ultrasonic sensor detects proximity,
     enabling features like motion-based activation and interaction. This project combines 
     hardware and software to create a functional and interactive smart mirror for daily use.`,
    details: `In this world, everybody keeps running behind solitude and comfort. Present- day man has diverse
Innovations for a similar purpose. A Brilliant Mirror is proposed, which is an interactive system that
keeps the user updated on the day-to-day happenings. Think about a situation in which you could
examine the mirror and discover something other than yourself. It will inform you of the time and date
each time you investigate it. It will be interesting if the Mirror recognises the user and reminds them
of important meetings on that day. Imagine a scenario in which the mirror could disclose that it’s
drizzling outside and prescribe taking an umbrella. It sounds fascinating, isn’t that so? An intuitive
Mirror is offered as a result. The Smart Mirror gives a close experience that enables the user to simply
stroll up and be greeted with information.

The integration of ultrasonic relay technology enables gesture-based interaction with the smart
mirror, allowing users to control functions without physical contact. By detecting hand gestures, the
mirror can activate or deactivate specific features, adjust settings, or navigate through menus,
enhancing accessibility and usability. Furthermore, the incorporation of LED strips offers
customizable ambient lighting options, enhancing the aesthetic appeal and creating immersive
environments. Users can personalize the lighting to match their mood, time of day, or specific
activities, augmenting the mirror's role as a decorative element within living spaces. The ESP8266
display serves as the central intelligence of the smart mirror, orchestrating the functionalities of the
ultrasonic relay, LED strip, and other components. It enables seamless connectivity to the internet,
allowing real-time updates of weather forecasts, news headlines, calendar events, and other pertinent
information directly onto the mirror surface.`,
    link: "https://drive.google.com/file/d/1GvcrEf56VD6loBMmEb3DtAJaAIQTloM7/view?usp=drive_link",
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div id="Projects" className="projects-section">
      <h2 className="heading">My Projects</h2>
      
      <div className={`projects-grid ${selectedProject ? "hidden" : ""}`}>
        {projectData.map((project) => (
          <div
            key={project.id}
            className="project-box"
            onClick={() => setSelectedProject(project)}
          >
            <h3 className="project-title">{project.title}</h3>
            <p className="project-short-note">{project.shortNote}</p>
            <button className="back-button"><a href={project.link}>Link ←</a></button>

          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="project-details">
          <button className="back-button" onClick={() => setSelectedProject(null)}>← Back</button>
          <h3>{selectedProject.title}</h3>
          <p>{selectedProject.details}</p>
        </div>
      )}
    </div>
  );
};

export default Projects;
