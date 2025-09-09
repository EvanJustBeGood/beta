
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
    title: 'Built by gamers — for gamers.',
    description: 'Every PC is hand‑assembled by people who know what real gameplay feels like.'
  },
  {
    icon: 'check-circle',
    title: 'Only proven components',
    description: 'We use high‑quality parts so you can enjoy the best gaming experience.'
  },
  {
    icon: 'headset',
    title: 'Your gaming support team',
    description: 'We’re always here to help when you need it.'
  }
];

const Features: React.FC = () => {
  return (
    <section id="features" className="features-section" aria-labelledby="features-title">
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
