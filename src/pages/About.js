import React, { useState } from "react";
import { motion } from "framer-motion";
import "./About.css";

function About() {
  const [highlight, setHighlight] = useState("");

  return (
    <div className="about-container">
      {/* Split Layout */}
      <div className="about-section">
        {/* Left Side: Image */}
        <motion.div 
           className="about-image"
           initial={{ scale: 1.5, opacity: 0 }}
           animate={{ scale: 1, opacity: 1 }}
           transition={{ duration: 1, ease: "easeOut" }}
        >
          <img src="/images/image.png" alt="Profile" />
        </motion.div>

        {/* Middle Divider */}
        <div className="divider"></div>

        {/* Right Side: About Me */}
        <motion.div 
          className="about-text"
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}
        >
          <h1>About Me</h1>
          <p className="quote">
            "Design is not just what it looks like and feels like. Design is how it works." – Steve Jobs
          </p>
        </motion.div>
      </div>

      {/* Scrolling Section */}
      <motion.div 
        className="scroll-section"
        initial={{ opacity: 0, y: 100 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <motion.h2 
          className="who-am-i"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.1 }}
          viewport={{ once: true }}
        >
          Who Am I?
        </motion.h2>
        <section className="intro-section">
          <div className="button-group">
            <button
              onMouseEnter={() => setHighlight("passion")}
              onMouseLeave={() => setHighlight("")}
              className="about-button"
            >
              Passion
            </button>
            <button
              onMouseEnter={() => setHighlight("path")}
              onMouseLeave={() => setHighlight("")}
              className="about-button"
            >
              Path
            </button>
            <button
              onMouseEnter={() => setHighlight("interest")}
              onMouseLeave={() => setHighlight("")}
              className="about-button"
            >
              Interest
            </button>
          </div>

          <p className={`intro-text ${highlight === "passion" ? "highlight" : ""}`}>
            I am a UI/UX Designer with a passion for creating visually appealing and user-friendly designs. My interest in UX design
            stems from a deep curiosity about how people interact with digital products.
          </p>

          <p className={`intro-text ${highlight === "path" ? "highlight" : ""}`}>
            Based in Toronto, I have experience in UI component design, front-end development, and responsive web design.
            I am currently completing the Google UX Design Certificate and an Advanced Diploma in Computer Programming and Analysis at George Brown College.
          </p>

          <p className={`intro-text ${highlight === "interest" ? "highlight" : ""}`}>
            I'm exploring new AI tools to improve my workflow and enhance design efficiency.
          </p>
        </section>
      </motion.div>

      {/* Education Section */}
      <motion.div className="education-section"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2>Education..</h2>
        <div className="education-content">
          <div className="education-text">
            <h3>George Brown College</h3>
            <p>Advanced Diploma in Computer Programming and Analysis</p>
            <p> Toronto, Canada</p>
          </div>
          <div className="education-image">
            <img src="/images/Laptop.jpg" alt="Education" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default About;
