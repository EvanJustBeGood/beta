
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
    <section className="hero-section" aria-labelledby="hero-title">
      <div className="container hero-content">
        <div className="hero-text">
          <h1 id="hero-title">
            Ваш персональный путь к высокопроизводительным играм.
          </h1>
          <p className="hero-description">
            LunaPC поставляет игровые ПК, собранные вручную людьми, которые знают, 
            что такое настоящие игровые ощущения.
          </p>
          
          <div className="hero-actions">
            <Button
              variant="primary"
              size="lg"
              onClick={handleGetStarted}
              className="hero-cta"
            >
              Начать сборку
            </Button>
          </div>
        </div>
        
        <div className="hero-image">
          <img 
            src="/images/hero_pc.svg" 
            alt="Высокопроизводительный игровой ПК" 
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
