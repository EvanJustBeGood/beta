
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
        <div className="hero-text">
          <h1 id="hero-title">
            Your personal gateway to high‑performance gaming.
          </h1>
          <p className="hero-description">
            Custom‑built gaming PCs focused on stability, power, and comfort.
          </p>
          
          <div className="hero-actions">
            <Button
              variant="primary"
              size="lg"
              onClick={handleGetStarted}
              className="hero-cta"
            >
              Start building
            </Button>
          </div>
        </div>
        
        <div className="hero-image">
          <picture>
            <source srcSet="/images/hero_pc.webp" type="image/webp" />
            <img 
              src="/images/hero_pc.svg" 
              alt="Высокопроизводительный игровой ПК" 
              loading="eager"
            />
          </picture>
        </div>
      </div>
    </section>
  );
};

export default Hero;
