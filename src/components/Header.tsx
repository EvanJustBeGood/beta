
import React from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import Icon from './ui/Icon';

const Header: React.FC = () => {
  const { state } = useApp();
  const { favorites, cart } = state;

  return (
    <header className="main-header">
      <div className="container header-content">
        <div className="logo">
          <img src="/images/logo.svg" alt="LunaPC" className="logo-image" />
          <span className="logo-text">LunaPC</span>
        </div>
        
        <nav className="main-nav">
          <button className="nav-button" aria-label="Избранное">
            <Icon name="heart" size="md" />
            {favorites.length > 0 && (
              <span className="badge" aria-label={`${favorites.length} в избранном`}>
                {favorites.length}
              </span>
            )}
          </button>
          
          <button className="nav-button" aria-label="Корзина">
            <Icon name="shopping-cart" size="md" />
            {cart.length > 0 && (
              <span className="badge" aria-label={`${cart.length} в корзине`}>
                {cart.length}
              </span>
            )}
          </button>
          
          <Link to="/login" className="login-link">
            Войти
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
