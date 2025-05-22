import React from 'react';
import { Link } from 'react-router-dom';
import './Blog.css';

/**
 * PUBLIC_INTERFACE
 * BlogPost - Displays a full blog post with details
 * 
 * @param {Object} props - Component props
 * @param {Object} props.post - Blog post object
 * @returns {React.ReactElement} Rendered component
 */
const BlogPost = ({ post }) => {
  if (!post) {
    return (
      <div className="blog-post-not-found">
        <h2>Post Not Found</h2>
        <p>The blog post you're looking for doesn't exist or has been removed.</p>
        <Link to="/blog" className="btn">Return to Blog</Link>
      </div>
    );
  }

  return (
    <article className="blog-post">
      {post.image && (
        <div className="blog-post-image">
          <img src={post.image} alt={post.title} />
        </div>
      )}
      
      <div className="blog-post-content">
        <h1 className="blog-post-title">{post.title}</h1>
        
        <div className="blog-post-meta">
          <span className="blog-post-date">{post.date}</span>
          {post.category && (
            <span className="blog-post-category">{post.category}</span>
          )}
        </div>
        
        <div className="blog-post-body">
          {post.content}
        </div>
        
        {post.tags && post.tags.length > 0 && (
          <div className="blog-post-tags">
            {post.tags.map((tag, index) => (
              <span key={index} className="blog-post-tag">{tag}</span>
            ))}
          </div>
        )}
      </div>
    </article>
  );
};

export default BlogPost;
