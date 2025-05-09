import React from 'react';
import '../../styles.scss';

const Blog = () => {
  return (
    <div className="container blog-page">
      <div className="text-zone">
        <h1>
          Blog
        </h1>
        <div className="blog-grid">
          <div className="blog-card">
            <h2>Coming Soon</h2>
            <p>Stay tuned for insightful articles about technology, development, and more!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog; 