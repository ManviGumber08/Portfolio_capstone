// src/pages/Landing.js
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'; // Optional, for navigation
import './Landing.css';

function Landing() {
  useEffect(() => {
    // Optional: Add smooth scroll effect to landing page
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="landing-container">
      <div className="landing-content">
        <h1 className="name">Manvi Gumber</h1>
        <p className="quote">"Designing Experiences that Empower People"</p>
        <div className="animated-images">
          <img src="/images/animated-img1.jpg" alt="Animated Image 1" className="animated-img" />
          <img src="/images/animated-img2.jpg" alt="Animated Image 2" className="animated-img" />
        </div>
      </div>
      <div className="scroll-indicator">
        <p>Scroll down to explore</p>
      </div>
    </div>
  );
}

export default Landing;
