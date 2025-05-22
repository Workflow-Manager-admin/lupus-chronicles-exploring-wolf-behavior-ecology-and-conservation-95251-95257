import React from 'react';
import { Link } from 'react-router-dom';
import './MainContainer.css';

/**
 * PUBLIC_INTERFACE
 * Header - The navigation header for Lupus Chronicles
 * Contains the logo, site title and navigation links
 * 
 * @returns {React.ReactElement} Rendered component
 */
const Header = () => {
  return (
    <header className="site-header">
      <div className="container">
        <div className="header-content">
          <div className="logo-container">
            <Link to="/" className="logo">
              <span className="logo-icon">🐺</span>
              <span className="logo-text">Lupus Chronicles</span>
            </Link>
          </div>
          <nav className="main-navigation">
            <ul className="nav-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/behavior">Behavior</Link></li>
              <li><Link to="/ecology">Ecology</Link></li>
              <li><Link to="/conservation">Conservation</Link></li>
              <li><Link to="/about">About</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
