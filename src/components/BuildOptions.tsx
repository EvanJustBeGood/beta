
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
    title: 'Доступно сейчас',
    description: 'Готовые сборки, доступные для немедленной покупки',
    image: '/images/option_available_now.svg',
    action: 'choose',
    buttonText: 'Выбрать'
  },
  {
    id: 'configure',
    title: 'Настроить мощный ПК',
    description: 'Создайте свою идеальную конфигурацию',
    image: '/images/option_configure.svg',
    action: 'configure',
    buttonText: 'Настроить'
  },
  {
    id: 'customize',
    title: 'Настроить по спецификациям',
    description: 'Укажите требования, мы подберем компоненты',
    image: '/images/option_customize.svg',
    action: 'customize',
    buttonText: 'Настроить'
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

  return (
    <section className="build-options-section" aria-labelledby="build-options-title">
      <div className="container">
        <header className="section-header">
          <h2 id="build-options-title">Создайте компьютер своей мечты.</h2>
          <p className="section-description">
            Настройте его сами или выберите из готовых решений.
          </p>
        </header>
        
        <div className="build-options-grid" role="grid" aria-label="Варианты сборки ПК">
          {buildOptions.map((option) => (
            <article 
              key={option.id} 
              className="option-card"
              aria-labelledby={`option-title-${option.id}`}
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
                <p>{option.description}</p>
                
                <Button
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
