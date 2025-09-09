
import React from 'react';
import Button from './ui/Button';

const Hero: React.FC = () => {
  const handleGetStarted = () => {
    // Прокрутка к секции с вариантами сборок
    document.querySelector('.build-options-section')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <section id="hero" className="hero-section" aria-labelledby="hero-title">
      <div className="container hero-content">
        <div className="hero-frame">
          <img 
            src="/images/Frame 4.png" 
            alt="LunaPC Frame" 
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
