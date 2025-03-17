import React, { useEffect, useState } from 'react';
import './Skills.css';

const skillsData = [
  {
    title: 'UI/UX Design',
    description: 'I have a solid understanding of designing clean and user-friendly interfaces. Whether it\'s web or mobile, I focus on making intuitive layouts that enhance user experience.',
    imageSrc: '/images/wireframe.jpg'
  },
  {
    title: 'Wireframing & Prototyping',
    description: 'I regularly use Figma and Adobe XD to create wireframes and prototypes. I enjoy turning ideas into interactive designs that bring clarity to the development process.',
    imageSrc: '/images/prototype.jpg'
  },
  {
    title: 'User Research & Usability Testing',
    description: 'I believe good design is backed by research. I conduct usability testing and gather feedback to refine my designs, ensuring they meet user expectations.',
    imageSrc: '/images/research.png'
  },
  {
    title: 'Design Systems & Component Libraries',
    description: 'I’ve worked on maintaining design consistency by creating reusable components and UI patterns. This helps in keeping designs scalable and efficient.',
    imageSrc: '/images/design-system.png'
  },
  {
    title: 'Visual Design & Interaction Principles',
    description: 'From typography to color theory, I focus on making visually appealing and accessible designs. I also experiment with motion design and micro-interactions to enhance user engagement.',
    imageSrc: '/images/visual-design.png'
  },
  {
    title: 'Front-End Development Basics',
    description: 'I have a working knowledge of HTML, CSS, and JavaScript, which helps me collaborate effectively with developers. I can translate designs into well-structured code when needed.',
    imageSrc: '/images/frontend.png'
  }
];

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 300);
  }, []);

  return (
    <div className={`skills-container ${isVisible ? 'fade-in' : ''}`}>
      <h2 className="skills-heading">Skills</h2>
      {skillsData.map((skill, index) => (
        <div key={index} className={`skill-item ${index % 2 === 0 ? 'left' : 'right'}`}>
          <img src={skill.imageSrc} alt={skill.title} className="skill-image" />
          <div className="skill-content">
            <h3>{skill.title}</h3>
            <p>{skill.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
