
import React, { useEffect, useCallback } from 'react';
import { PcBuild } from '../data/builds';
import { useApp } from '../context/AppContext';
import Button from './ui/Button';
import Icon from './ui/Icon';

interface ModalProps {
  build: PcBuild;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ build, onClose }) => {
  const { dispatch } = useApp();

  const handleAddToCart = useCallback(() => {
    dispatch({ type: 'ADD_TO_CART', payload: build.id });
    onClose();
  }, [build.id, dispatch, onClose]);

  const handleBackdropClick = useCallback((e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  }, [onClose]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    }
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  return (
    <div 
      className="modal-overlay" 
      onClick={handleBackdropClick}
      onKeyDown={handleKeyDown}
      role="dialog" 
      aria-modal="true"
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <div className="modal-content">
        <header className="modal-header">
          <h2 id="modal-title">{build.name}</h2>
          <button
            className="modal-close"
            onClick={onClose}
            aria-label="Закрыть модальное окно"
          >
            <Icon name="times" size="md" />
          </button>
        </header>

        <div className="modal-body">
          <div className="modal-image">
            <img 
              src={build.image} 
              alt={build.name} 
              loading="lazy"
            />
          </div>
          
          <div className="modal-specs">
            <div className="modal-info">
              <p className="modal-price" id="modal-description">
                {build.price}
              </p>
              <span 
                className={`stock-status ${build.inStock ? 'in-stock' : 'out-of-stock'}`}
                aria-label={build.inStock ? 'В наличии' : 'Нет в наличии'}
              >
                {build.inStock ? 'В наличии' : 'Нет в наличии'}
              </span>
            </div>

            <div className="specs-list">
              <h3>Характеристики:</h3>
              <ul>
                {build.specs.map((spec, index) => (
                  <li key={index}>{spec}</li>
                ))}
              </ul>
            </div>

            <div className="modal-actions">
              <Button
                variant="primary"
                size="lg"
                onClick={handleAddToCart}
                disabled={!build.inStock}
                className="add-to-cart-modal-btn"
              >
                Добавить в корзину
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                onClick={onClose}
                className="close-modal-btn"
              >
                Закрыть
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
