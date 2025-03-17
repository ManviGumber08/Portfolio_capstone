import React from 'react';
import './Design.css';

const projects = [
  {
    name: 'ShiftSmart (Main Project)',
    description: 'A worker scheduling application that helps companies manage employee shifts efficiently. Designed to replace traditional Excel-based scheduling, improving automation and communication.',
    imageSrc: '/images/ShiftSmart.png',
    link: '/images/case/shift-smart.html'
  },
  {
    name: 'Knowlex',
    description: 'An end-to-end application for the EdTech industry. Knowlex is a platform where users can exchange knowledge for other knowledge, creating a unique learning experience.',
    imageSrc: '/images/knowlex.png',
    link: '/images/case/knowlex.html'
  },
  {
    name: 'Accessible Travel',
    description: 'A feature added to the Ryanair application that allows users to book and manage air travel Special Assistance, ensuring accessibility for all passengers.',
    imageSrc: '/images/Accessible-Travel.png',
    link: '/projects/accessible-travel'
  },
  {
    name: 'Docmeup',
    description: 'A healthcare platform that assists users in booking medical appointments, simplifying the healthcare process for patients and doctors alike.',
    imageSrc: '/images/docmeup.png',
    link: '/projects/docmeup'
  },
  {
    name: 'Obgyn Website',
    description: 'Responsive website designed for a Gynaecological Clinic located in a small town. This platform assists users in booking medical appointments and provides essential healthcare information.',
    imageSrc: '/images/Obgyn.png',
    link: '/projects/obgyn'
  }
];

const Design = () => {
  return (
    <div className="design-container">
      <h2 className="design-heading">My Projects</h2>
      {projects.map((project, index) => (
        <div key={index} className={`project-item ${index % 2 === 0 ? 'left' : 'right'}`}>
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            <img src={project.imageSrc} alt={project.name} className="project-image" />
          </a>
          <div className="project-content">
            <h3 className={index === 0 ? 'main-project-title' : ''}>{project.name}</h3>
            <p>{project.description}</p>
            <a href={project.link} className="case-study-link" target="_blank" rel="noopener noreferrer">
              Read Case Study →
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Design;
