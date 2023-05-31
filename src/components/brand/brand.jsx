import React from 'react';
import './braand.css';
import imge from './ben-sweet-2LowviVHZ-E-unsplash 1.png';

const Brand = () => {
  return (
    <div className="welcome">
      <div className="gradient-background"></div>
      <div className="text">
        <p>welcome to my</p>
        <p>portfolio</p>
      </div>
      <div className="brandlogo">
        <img src={imge} alt="Logo" />
      </div>
    </div>
  );
};

export default Brand;
