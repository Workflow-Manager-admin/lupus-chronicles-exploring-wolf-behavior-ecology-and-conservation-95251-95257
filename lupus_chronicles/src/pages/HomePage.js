import React from 'react';
import { Link } from 'react-router-dom';
import MainContainer from '../components/layout/MainContainer';
import BlogList from '../components/blog/BlogList';
import './Pages.css';

/**
 * PUBLIC_INTERFACE
 * HomePage - The main landing page for Lupus Chronicles
 * Features a hero section and recent blog posts
 * 
 * @returns {React.ReactElement} Rendered component
 */
const HomePage = () => {
  // Sample data for featured blog posts
  const featuredPosts = [
    {
      id: '1',
      title: 'The Social Structure of Wolf Packs',
      excerpt: 'Discover how wolves organize their complex family structures and the roles each member plays in the pack hierarchy.',
      date: 'April 15, 2023',
      category: 'Behavior',
      image: 'https://images.unsplash.com/photo-1564466809058-bf4114d55352?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: '2',
      title: 'Wolves as Keystone Species: Yellowstone\'s Ecological Recovery',
      excerpt: 'Learn how the reintroduction of wolves to Yellowstone National Park triggered a cascade of positive ecological changes.',
      date: 'March 22, 2023',
      category: 'Ecology',
      image: 'https://images.unsplash.com/photo-1551972251-12070d63502a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: '3',
      title: 'Conservation Challenges Facing Wolf Populations Worldwide',
      excerpt: 'An exploration of the threats facing wolf populations and the conservation efforts working to protect them.',
      date: 'February 8, 2023',
      category: 'Conservation',
      image: 'https://images.unsplash.com/photo-1591824438708-ce405f36ba3d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <MainContainer>
      <div className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Lupus Chronicles</h1>
            <p className="hero-subtitle">Exploring Wolf Behavior, Ecology, and Conservation</p>
            <p className="hero-description">
              Join us on a journey into the fascinating world of wolves. Discover their complex social behaviors,
              ecological importance, and the conservation efforts aimed at protecting these magnificent creatures.
            </p>
            <div className="hero-buttons">
              <Link to="/blog" className="btn btn-large">Explore Articles</Link>
              <Link to="/about" className="btn btn-large btn-outline">About Us</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="featured-section">
        <div className="container">
          <h2 className="section-title">Featured Articles</h2>
          <BlogList posts={featuredPosts} />
          
          <div className="section-footer">
            <Link to="/blog" className="btn">View All Articles</Link>
          </div>
        </div>
      </div>
      
      <div className="topics-section">
        <div className="container">
          <h2 className="section-title">Explore Topics</h2>
          
          <div className="topics-grid">
            <div className="topic-card">
              <div className="topic-icon">🐺</div>
              <h3>Behavior</h3>
              <p>Wolf social structures, communication, hunting techniques, and more.</p>
              <Link to="/behavior" className="topic-link">Learn More</Link>
            </div>
            
            <div className="topic-card">
              <div className="topic-icon">🌿</div>
              <h3>Ecology</h3>
              <p>The ecological role of wolves and their impact on ecosystems.</p>
              <Link to="/ecology" className="topic-link">Learn More</Link>
            </div>
            
            <div className="topic-card">
              <div className="topic-icon">🌎</div>
              <h3>Conservation</h3>
              <p>Conservation efforts, challenges, and successes in wolf protection.</p>
              <Link to="/conservation" className="topic-link">Learn More</Link>
            </div>
          </div>
        </div>
      </div>
    </MainContainer>
  );
};

export default HomePage;
