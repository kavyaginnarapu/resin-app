import React from 'react';
import './resin.css';
import resin1 from '../assets/images/resin1.jpg';
import resin2 from '../assets/images/resin2.jpg';
import resin3 from '../assets/images/resin3.jpg';

const images = [
  resin1,
  resin2,
  resin3,
  // Add the rest of your images here
];

const Resin = () => {
  return (
    <div className="resin">
      {images.map((image, index) => (
        <div className="image-container" key={index}>
          <img src={image} alt={`Sample ${index}`} />
        </div>
      ))}
    </div>
  );
  
};

export default Resin;
