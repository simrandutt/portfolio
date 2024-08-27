// pages/Home.js
import React from 'react';
import ImageWithOverlay from '../components/ImageWithOverlay';
import './Home.css';

const Home = () => (
  <div className="home">
    <section className="hero">
      <h1>Hi, I’m simran, a passionate Frontend Developer</h1>
    </section>
    <section className="projects">
      <h2>My Projects</h2>
      <div className="project-grid">
        {/* Add project components here */}
        <ImageWithOverlay imageSrc="path-to-image" overlayText="Project 1" />
      </div>
    </section>
  </div>
);

export default Home;
