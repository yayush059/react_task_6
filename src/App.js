import "./App.css";
import React, { useState } from "react";

function App() {
  const [selectedSection, setSelectedSection] = useState("Home");

  const sections = [
    "Home",
    "About",
    "Skills",
    "Projects",
    "Experience",
    "Contact",
  ];

  const handleSectionClick = (section) => {
    setSelectedSection(section);
  };

  return (
    <div className="App">
      <div className="header">
        <div className="profile">
          <h1>Ayush Yadav</h1>
        </div>
        <div className="navbar">
          {sections.map((section, index) => (
            <button
              key={index}
              className={selectedSection === section ? "active" : ""}
              onClick={() => handleSectionClick(section)}
            >
              {section}
            </button>
          ))}
        </div>
      </div>
      <div className="main-content">
        {selectedSection === "Home" && (
          <div className="content-section">
            <h2>Welcome to my portfolio!</h2>
            <p>
              I'm Ayush Yadav, a web developer who's dedicated to crafting
              visually stunning and highly adaptable websites, designed to
              provide exceptional user experiences.
            </p>

            <h2>My Interests</h2>
            <ul>
              <li>HTML, CSS, JavaScript, Bootstrap</li>
              <li>Responsive Web Design</li>
              <li>Front-End Development</li>
            </ul>

            <h2>My Projects</h2>
            <div className="project-card-grid">
              <div className="project-card">
                <h3>Project 1</h3>
                <p>
                <h4>IoT based Intelligent Home Automation System using IFTTT with Google Assistant</h4>
Intelligent home automation system (IHAS) with Internet of Things IoT can improve the quality of life for
individuals by automating daily tasks, such as controlling the temperature of a room, turning off lights when
not needed.
                </p>
                
              </div>
              <div className="project-card">
                <h3>Project 2</h3>
                <h4>IoT based EV Motor Health Tracking</h4>
The idea of IoT-based EV motor health tracking aims to leverage the power of the Internet of Things (IoT) to
monitor and assess the health and performance of electric vehicle (EV) motors in real-time.
                
              </div>
            </div>

            <br></br>
            <div className="content-section">
              <h2>About Me</h2>
              <p>
                Hi, I'm Ayush Yadav, a web developer with expertise in HTML and
                CSS. I'm passionate about creating beautiful and responsive
                websites that deliver great user experiences.
              </p>
              <p>
                Right now, I am an undergraduate student at VIT-AP University,
                pursuing a B.Tech in Computer Science. I have a keen interest in
                web design.
              </p>
              
            </div>

            <br></br>
            <div className="content-section">
              <h2>Skills</h2>
              <ul>
                <li>HTML, CSS, JavaScript</li>
                <li>Responsive Web Design</li>
                <li>Front-End Development</li>
                <li>UI/UX Design</li>
              </ul>

              <br></br>
              <div className="content-section">
                <h2>Experience</h2>
                

                <p>Right Now I am working in NSS Club of VIT-AP University.</p>
              </div>

              <br></br>

              <div className="content-section">
                <h2>Contact Me</h2>
                <p>Name: Ayush Yadav</p>
                <p>Mobile: 7752981422</p>
                <p>Email: yayush059@gmail.com</p>
                <p>
                  Linkedin:{" "}
                  <a href="https://www.linkedin.com/in/ayush-yadav-667002185/">
                    {" "}
                    Ayush Yadav{" "}
                  </a>
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {selectedSection === "About" && (
        <div className="content-section">
          <h2>About Me</h2>
          <p>
            Hi, I'm Ayush Yadav, a web developer with expertise in HTML and CSS.
            I'm passionate about creating beautiful and responsive websites that
            deliver great user experiences.
          </p>
          <p>
            Right now, I am an undergraduate student at VIT-AP University,
            pursuing a B.Tech in Computer Science. I have a keen interest in web
            design.
          </p>
          <p>
            I also enjoy designing web pages in Figma and have a strong
            inclination toward UI/UX design.
          </p>
          
        </div>
      )}

      {selectedSection === "Skills" && (
        <div className="content-section">
          <h2>Skills</h2>
          <ul>
            <li>HTML, CSS, JavaScript</li>
            <li>Responsive Web Design</li>
            <li>Front-End Development</li>
            <li>UI/UX Design</li>
            {/* Add more skills as needed */}
          </ul>
        </div>
      )}

      {selectedSection === "Projects" && (
        <div className="content-section">
          <h2>Projects</h2>
          <p>You can see my project works in the Home page.</p>
        </div>
      )}

      {selectedSection === "Experience" && (
        <div className="content-section">
          <h2>Experience</h2>
          <p>Right Now I am working in NSS Club of VIT-AP University.</p>
        </div>
      )}

      {selectedSection === "Contact" && (
        <div className="content-section">
          <h2>Contact Me</h2>
          <p>Name: Ayush Yadav</p>
          <p>Mobile: 7752981422</p>
          <p>Email: yayush059@gmail.com</p>
          <p>
            Linkedin:{" "}
            <a href="https://www.linkedin.com/in/ayush-yadav-667002185/">
              {" "}
              LinkedIn
            </a>
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
