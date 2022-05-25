import React from 'react';
import { Button } from './Button';

import './HeroSection.css';

function HeroSection() {
  return (
    <div className="hero-container">
      <h1>Go Endlessly</h1>
      <p>Ready to explore?</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Get Started
        </Button>
       
      </div>
    </div>
  );
}

export default HeroSection;
