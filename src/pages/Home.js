import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <section className="personal-details">
        <div className="profile-header">
          <img
            src="/images/Profle.jpg"  
            alt="Manvi Gumber"
            className="profile-img"
          />
          <div>
            <h1 className="name">Manvi Gumber</h1>
            <p className="title">UI/UX Designer & Full Stack Developer</p>
          </div>
        </div>

        <div className="bio">
          <p>
            Innovative UI/UX Designer with a strong background in designing intuitive,
            engaging, and user-friendly digital experiences. Proficient in design tools like
            Figma, Sketch, and Adobe XD, with a keen eye for visual hierarchy, typography,
            and interaction design principles. Strong problem-solving skills, user research
            experience, and a collaborative approach to working with developers and
            stakeholders.
          </p>
        </div>

        <div className="contact-details">
          <h2>Contact Information</h2>
          <p><strong>Email:</strong> officialmanvigumber@gmail.com</p>
          <p><strong>Phone:</strong> +1 647-624-3809</p>
          <p><strong>Location:</strong> Toronto, Canada</p>
        </div>

        {/* Buttons forc:\Users\Owner\Downloads\Cover letter.pdf Resume & Cover Letter */}
        <div className="button-group">
          <a href="/Manvi_Gumber_Resume.pdf" className="button" target="_blank" rel="noopener noreferrer">
            View Resume
          </a>
          <a href="/Manvi_Gumber_Resume.pdf" className="button" download="Manvi_Gumber_Resume.pdf">
            Download Resume
          </a>
          <a href="/Manvi_Gumber_Cover_Letter.pdf" className="button" target="_blank" rel="noopener noreferrer">
            View Cover Letter
          </a>
          <a href="/Manvi_Gumber_Cover_Letter.pdf" className="button" download="Manvi_Gumber_Cover_Letter.pdf">
            Download Cover Letter
          </a>
        </div>

      </section>
    </div>
  );
}

export default Home;
