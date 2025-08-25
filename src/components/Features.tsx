
import React from 'react';
import Icon from './ui/Icon';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: 'tools',
    title: 'Создано геймерами — для геймеров.',
    description: 'Каждый ПК собирается вручную людьми, которые знают, что такое настоящие игровые ощущения.'
  },
  {
    icon: 'check-circle',
    title: 'Только проверенные компоненты',
    description: 'Мы используем только высококачественные детали, чтобы вы могли наслаждаться лучшим игровым опытом.'
  },
  {
    icon: 'headset',
    title: 'Ваша команда поддержки по играм',
    description: 'Мы всегда готовы помочь вам, когда вам это понадобится.'
  }
];

const Features: React.FC = () => {
  return (
    <section className="features-section" aria-labelledby="features-title">
      <div className="container features-grid">
        {features.map((feature, index) => (
          <article 
            key={index} 
            className="feature-item"
            aria-labelledby={`feature-title-${index}`}
          >
            <Icon 
              name={feature.icon} 
              size="lg" 
              className="feature-icon"
              aria-hidden="true"
            />
            <h3 id={`feature-title-${index}`}>{feature.title}</h3>
            <p>{feature.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Features;
