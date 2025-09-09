
import React from 'react';
import Button from './ui/Button';

interface BuildOption {
  id: string;
  title: string;
  description: string;
  image: string;
  action: string;
  buttonText: string;
}

const buildOptions: BuildOption[] = [
  {
    id: 'available-now',
    title: 'Available now',
    description: 'Ready-to-ship builds available immediately',
    image: '/images/option_available_now.svg',
    action: 'choose',
    buttonText: 'Choose'
  },
  {
    id: 'configure',
    title: 'Configure a powerful PC',
    description: 'Create your ideal configuration',
    image: '/images/option_configure.svg',
    action: 'configure',
    buttonText: 'Configure'
  },
  {
    id: 'customize',
    title: 'Customize by specs',
    description: 'Tell us your requirements - we\'ll pick the parts',
    image: '/images/option_customize.svg',
    action: 'customize',
    buttonText: 'Customize'
  }
];

const BuildOptions: React.FC = () => {
  const handleOptionClick = (action: string) => {
    switch (action) {
      case 'choose':
        // Прокрутка к популярным сборкам
        document.querySelector('.popular-builds-section')?.scrollIntoView({ 
          behavior: 'smooth' 
        });
        break;
      case 'configure':
        // Здесь можно добавить логику для перехода к конфигуратору
        console.log('Configure PC clicked');
        break;
      case 'customize':
        // Здесь можно добавить логику для перехода к кастомизации
        console.log('Customize PC clicked');
        break;
      default:
        break;
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent, action: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleOptionClick(action);
    }
  };

  return (

<section id="build-options" className="build-options-section" aria-labelledby="build-options-title">
      <div className="container">
        <header className="section-header">
          <h2 id="build-options-title">Build the computer of your dreams.</h2>
          <p className="section-description">
            Customize it yourself or choose from ready-made solutions.
          </p>
        </header>
        
        <div className="build-options-grid" role="grid" aria-label="Варианты сборки ПК">
          {buildOptions.map((option) => (
            <article 
              key={option.id} 
              className="option-card"
              aria-labelledby={`option-title-${option.id}`}
              aria-describedby={`option-desc-${option.id}`}
              tabIndex={0}
              onKeyDown={(e) => handleKeyDown(e, option.action)}
            >
              <div className="option-image">
                <img 
                  src={option.image} 
                  alt={option.description} 
                  loading="lazy"
                />
              </div>
              
              <div className="option-content">
                <h3 id={`option-title-${option.id}`}>{option.title}</h3>
                <p id={`option-desc-${option.id}`}>{option.description}</p>
                
                <Button
                  type="button"
                  variant="primary"
                  size="md"
                  onClick={() => handleOptionClick(option.action)}
                  className="option-button"
                  data-action={option.action}
                >
                  {option.buttonText}
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BuildOptions;
