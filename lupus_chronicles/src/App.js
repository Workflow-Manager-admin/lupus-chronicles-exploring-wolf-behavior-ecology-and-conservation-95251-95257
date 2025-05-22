import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
import AboutPage from './pages/AboutPage';
import './App.css';

/**
 * Main App component for Lupus Chronicles
 * Sets up routing and handles navigation
 */
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/about" element={<AboutPage />} />
        {/* Additional routes will be added here as we implement more pages */}
        <Route path="*" element={
          <div className="app">
            <main style={{ padding: "2rem", textAlign: "center", marginTop: "100px" }}>
              <h1>Page Not Found</h1>
              <p>The page you're looking for doesn't exist or has been moved.</p>
              <a href="/" className="btn">Return Home</a>
            </main>
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;
