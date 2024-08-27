// components/ImageWithOverlay.js
import React from 'react';
import './ImageWithOverlay.css';

const ImageWithOverlay = ({ imageSrc, overlayText }) => (
  <div className="image-container">
    <img src={imageSrc} alt="Overlay" className="image" />
    <div className="overlay">
      <div className="text">{overlayText}</div>
    </div>
  </div>
);

export default ImageWithOverlay;
