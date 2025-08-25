
import React, { useCallback } from 'react';
import { PcBuild } from '../data/builds';
import { useApp } from '../context/AppContext';
import Icon from './ui/Icon';
import Button from './ui/Button';

interface PcCardProps {
  build: PcBuild;
  onSelect: () => void;
}

const PcCard: React.FC<PcCardProps> = ({ build, onSelect }) => {
  const { state, dispatch } = useApp();
  const { favorites, cart } = state;
  
  const isFavorite = favorites.includes(build.id);
  const isInCart = cart.includes(build.id);

  const handleToggleFavorite = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    dispatch({ type: 'TOGGLE_FAVORITE', payload: build.id });
  }, [build.id, dispatch]);

  const handleAddToCart = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    dispatch({ type: 'ADD_TO_CART', payload: build.id });
  }, [build.id, dispatch]);

  const handleCardClick = useCallback(() => {
    onSelect();
  }, [onSelect]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleCardClick();
    }
  }, [handleCardClick]);

  return (
    <article 
      className="pc-card" 
      onClick={handleCardClick}
      onKeyDown={handleKeyDown}
      role="button" 
      tabIndex={0}
      aria-label={`Подробнее о ${build.name}`}
    >
      <button
        className={`favorite-button ${isFavorite ? 'liked' : ''}`}
        onClick={handleToggleFavorite}
        aria-label={isFavorite ? 'Убрать из избранного' : 'Добавить в избранное'}
        aria-pressed={isFavorite}
      >
        <Icon 
          name="heart" 
          size="md"
          className={isFavorite ? 'liked' : ''}
        />
      </button>

      <div className="card-image">
        <img 
          src={build.image} 
          alt={build.name} 
          loading="lazy"
        />
      </div>

      <div className="card-content">
        <h3 className="card-title">{build.name}</h3>
        <p className="card-price">{build.price}</p>
        
        <span 
          className={`stock-status ${build.inStock ? 'in-stock' : 'out-of-stock'}`}
          aria-label={build.inStock ? 'В наличии' : 'Нет в наличии'}
        >
          {build.inStock ? 'В наличии' : 'Нет в наличии'}
        </span>

        <div className="card-actions">
          <Button
            variant="primary"
            size="sm"
            onClick={handleAddToCart}
            disabled={!build.inStock || isInCart}
            className="add-to-cart-btn"
          >
            {isInCart ? 'В корзине' : 'В корзину'}
          </Button>
          
          <Button
            variant="outline"
            size="sm"
            onClick={handleCardClick}
            className="view-details-btn"
          >
            Подробнее
          </Button>
        </div>
      </div>
    </article>
  );
};

export default PcCard;
