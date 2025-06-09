import React from 'react';
import './Blog.css';
import { useEffect } from 'react';


const blogPosts = [
  {
    title: 'Revolutionizing Businesses with AI Automation',
    date: 'May 25, 2025',
    summary: 'Explore how AI and machine learning are transforming industries with automation and predictive insights.',
    image:require('./ai-automation.jpg'),
  },
  {
    title: 'SaaS Trends to Watch in 2025',
    date: 'May 10, 2025',
    summary: 'From vertical SaaS to no-code platforms, discover the latest SaaS innovations shaping business software.',
    image: require('./saas-trends.jpg'),
  },
  {
    title: 'Why Cybersecurity Is Non-Negotiable',
    date: 'April 30, 2025',
    summary: 'Learn why every business must prioritize cybersecurity in an increasingly digital-first world.',
    image: require('./cybersecurity.jpg'),
  },

];

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // 👈 Scroll to top on mount
  }, []);
  return (
    <div className="blog-page">
      <section className="blog-banner">
        <div className="blog-banner-content">
          <h1>Insights & Innovations from Adiion</h1>
          <p>Explore the latest trends, ideas, and updates in tech, automation, and innovation.</p>
        </div>
      </section>

      <section className="blog-section">
        <h2 className="blog-section-title">Latest Articles</h2>
        <div className="blog-grid">
          {blogPosts.map((post, index) => (
            <div className="blog-card" key={index}>
              <img src={post.image} alt={post.title} className="blog-card-img" />
              <div className="blog-card-body">
                <h3>{post.title}</h3>
                <span className="blog-date">{post.date}</span>
                <p>{post.summary}</p>
                <button className="read-more">Read More</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Blog;
