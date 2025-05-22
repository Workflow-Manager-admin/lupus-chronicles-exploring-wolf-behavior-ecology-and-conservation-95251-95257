import React from 'react';
import BlogCard from '../common/BlogCard';
import './Blog.css';

/**
 * PUBLIC_INTERFACE
 * BlogList - Displays a list of blog posts
 * 
 * @param {Object} props - Component props
 * @param {Array} props.posts - Array of blog post objects
 * @returns {React.ReactElement} Rendered component
 */
const BlogList = ({ posts }) => {
  if (!posts || posts.length === 0) {
    return (
      <div className="blog-list-empty">
        <p>No posts available at the moment. Check back later!</p>
      </div>
    );
  }

  return (
    <div className="blog-list">
      {posts.map((post) => (
        <BlogCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default BlogList;
