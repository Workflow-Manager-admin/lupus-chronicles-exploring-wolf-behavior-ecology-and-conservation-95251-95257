import React from 'react';
import { Link } from 'react-router-dom';
import './MainContainer.css';

/**
 * PUBLIC_INTERFACE
 * Footer - The footer component for Lupus Chronicles
 * Contains copyright info, links, and other footer content
 * 
 * @returns {React.ReactElement} Rendered component
 */
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <h3>Lupus Chronicles</h3>
            <p>Exploring Wolf Behavior, Ecology, and Conservation</p>
          </div>
          
          <div className="footer-links">
            <div className="footer-section">
              <h4>Explore</h4>
              <ul>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/behavior">Behavior</Link></li>
                <li><Link to="/ecology">Ecology</Link></li>
                <li><Link to="/conservation">Conservation</Link></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4>Information</h4>
              <ul>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/resources">Resources</Link></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Lupus Chronicles. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
