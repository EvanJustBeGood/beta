
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import Icon from './ui/Icon';

const Header: React.FC = () => {
  const { state } = useApp();
  const { favorites, cart } = state;

  return (
    <header className="main-header">
      <div className="container header-content">
        <Link to="/" className="logo" aria-label="Go to home">
          <img src="/images/logo.svg" alt="LunaPC" className="logo-image" />
          <span className="logo-text">LunaPC</span>
        </Link>
        
        <nav className="main-nav" aria-label="Primary navigation">
          <a href="#hero" className="nav-link">Home</a>
          <a href="#build-options" className="nav-link">Builds</a>
          <a href="#features" className="nav-link">Features</a>
          <a href="#popular-builds" className="nav-link">Popular</a>

          <button type="button" className="nav-button" aria-label="Favorites">
            <Icon name="heart" size="md" />
            {favorites.length > 0 && (
              <span className="badge" aria-label={`${favorites.length} in favorites`}>
                {favorites.length}
              </span>
            )}
          </button>
          
          <button type="button" className="nav-button" aria-label="Cart">
            <Icon name="shopping-cart" size="md" />
            {cart.length > 0 && (
              <span className="badge" aria-label={`${cart.length} in cart`}>
                {cart.length}
              </span>
            )}
          </button>
          
          <NavLink
            to="/login"
            className={({ isActive }) => `login-link ${isActive ? 'active' : ''}`}
          >
            Sign in
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
