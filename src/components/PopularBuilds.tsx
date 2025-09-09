
import React, { useCallback } from 'react';
import { builds } from '../data/builds';
import { useApp } from '../context/AppContext';
import PcCard from './PcCard';
import Button from './ui/Button';

const PopularBuilds: React.FC = () => {
  const { dispatch } = useApp();

  const handleSelectBuild = useCallback((build: typeof builds[0]) => {
    dispatch({ type: 'SET_SELECTED_BUILD', payload: build });
  }, [dispatch]);

  const handleLearnMore = useCallback(() => {
    // Здесь можно добавить логику для перехода на страницу с подробной информацией
    console.log('Learn more clicked');
  }, []);

  return (
    <section id="popular-builds" className="popular-builds-section" aria-labelledby="popular-builds-title">
      <div className="container">
        <h2 id="popular-builds-title">Popular & Practical PC Builds</h2>
        
        <div className="pc-builds-grid" role="grid" aria-label="Список сборок ПК">
          {builds.map(build => (
            <PcCard
              key={build.id}
              build={build}
              onSelect={() => handleSelectBuild(build)}
            />
          ))}
        </div>
        
        <div className="section-actions">
          <Button
            variant="primary"
            size="lg"
            onClick={handleLearnMore}
            className="learn-more-btn"
          >
            Learn more
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PopularBuilds;
