import React from 'react';
import MainContainer from '../components/layout/MainContainer';
import BlogList from '../components/blog/BlogList';
import './Pages.css';

/**
 * PUBLIC_INTERFACE
 * BlogPage - The main blog listing page
 * Displays all blog posts with filtering options
 * 
 * @returns {React.ReactElement} Rendered component
 */
const BlogPage = () => {
  // Sample data for blog posts
  const blogPosts = [
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
    },
    {
      id: '4',
      title: 'Wolf Communication: Howls, Body Language, and More',
      excerpt: 'Explore the complex communication methods wolves use to coordinate hunts, establish territory, and maintain pack bonds.',
      date: 'January 30, 2023',
      category: 'Behavior',
      image: 'https://images.unsplash.com/photo-1589656966895-2f33e7653819?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: '5',
      title: 'The Evolutionary History of Wolves and Dogs',
      excerpt: 'Dive into the fascinating evolutionary journey of wolves and how they gave rise to our domestic canine companions.',
      date: 'December 12, 2022',
      category: 'Science',
      image: 'https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: '6',
      title: 'Wolf Territories: How Packs Define and Defend Their Land',
      excerpt: 'Understanding how wolf packs establish territories, defend their borders, and adapt to changing landscapes.',
      date: 'November 5, 2022',
      category: 'Behavior',
      image: 'https://images.unsplash.com/photo-1502780402662-acc01c084a25?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <MainContainer>
      <div className="page-header">
        <div className="container">
          <h1 className="page-title">Blog</h1>
          <p className="page-description">Explore articles about wolf behavior, ecology, and conservation efforts</p>
        </div>
      </div>

      <div className="blog-content">
        <div className="container">
          <div className="blog-filters">
            <div className="filter-group">
              <span className="filter-label">Filter by:</span>
              <button className="filter-btn active">All</button>
              <button className="filter-btn">Behavior</button>
              <button className="filter-btn">Ecology</button>
              <button className="filter-btn">Conservation</button>
              <button className="filter-btn">Science</button>
            </div>
          </div>
          
          <BlogList posts={blogPosts} />
        </div>
      </div>
    </MainContainer>
  );
};

export default BlogPage;
