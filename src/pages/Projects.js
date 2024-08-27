import React from 'react';
import './Projects.css'; // Add your Projects-specific styles in this file
import ImageWithOverlay from '../components/ImageWithOverlay';

const Projects = () => {
  return (
    <div className="projects-page">
      <h1>My Projects</h1>
      <div className="project-gallery">
        <ImageWithOverlay src="path/to/image1.jpg" alt="Project 1" overlayText="Project 1 Description" />
        <ImageWithOverlay src="path/to/image2.jpg" alt="Project 2" overlayText="Project 2 Description" />
        {/* Add more projects as needed */}
      </div>
    </div>
  );
};

export default Projects;
