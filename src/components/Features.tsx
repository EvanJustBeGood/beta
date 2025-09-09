
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
    title: 'Built by gamers - for gamers.',
    description: 'Each PC is hand-built by people who know what great gaming feels like.'
  },
  {
    icon: 'check-circle',
    title: 'Only Verified Components',
    description: 'We use only high-quality parts so you can enjoy the best gaming experience possible.'
  },
  {
    icon: 'headset',
    title: 'Your Gaming Support Team',
    description: 'We\'re always ready to assist you whenever you need.'
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
