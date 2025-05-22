import React from 'react';
import { Link } from 'react-router-dom';
import '../blog/Blog.css';

/**
 * PUBLIC_INTERFACE
 * BlogCard - Displays a preview of a blog post
 * 
 * @param {Object} props - Component props
 * @param {Object} props.post - Blog post object
 * @returns {React.ReactElement} Rendered component
 */
const BlogCard = ({ post }) => {
  return (
    <div className="blog-card">
      {post.image && (
        <div className="blog-card-image">
          <img src={post.image} alt={post.title} />
        </div>
      )}
      
      <div className="blog-card-content">
        <h2 className="blog-card-title">
          <Link to={`/blog/${post.id}`}>{post.title}</Link>
        </h2>
        
        <div className="blog-card-meta">
          <span className="blog-card-date">{post.date}</span>
          {post.category && (
            <span className="blog-card-category">{post.category}</span>
          )}
        </div>
        
        <p className="blog-card-excerpt">{post.excerpt}</p>
        
        <Link to={`/blog/${post.id}`} className="blog-card-link">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
