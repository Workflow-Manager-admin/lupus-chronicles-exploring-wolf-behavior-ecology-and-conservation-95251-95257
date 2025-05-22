import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './MainContainer.css';

/**
 * PUBLIC_INTERFACE
 * MainContainer - The primary layout component for Lupus Chronicles
 * Wraps all content with consistent header and footer
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components to render within the container
 * @returns {React.ReactElement} Rendered component
 */
const MainContainer = ({ children }) => {
  return (
    <div className="main-container">
      <Header />
      <div className="content-wrapper">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default MainContainer;
