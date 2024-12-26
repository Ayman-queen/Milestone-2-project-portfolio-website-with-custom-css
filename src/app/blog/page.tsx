
'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import '../styles/blog.css'; // Importing blog-specific styles

const BlogPage = () => {
  const [showPost1, setShowPost1] = useState(false);
  const [showPost2, setShowPost2] = useState(false);
  const [showPost3, setShowPost3] = useState(false);

  const togglePost1 = () => setShowPost1(!showPost1);
  const togglePost2 = () => setShowPost2(!showPost2);
  const togglePost3 = () => setShowPost3(!showPost3);

  return (
    <div>
      <Header />
      <div className="blog-container">
        <h1 className="blog-title">Blog</h1>
        <p className="blog-description">
          Read my latest articles and insights on tech, data science, and development.
        </p>

        <div className="blog-posts">
          {/* First Two Posts - Display together */}
          <div className="first-two-posts">
            <div className="post fade-in-left">
              <h3 className="post-title">How to Build a Web App with React and Next.js</h3>
              <p className="post-summary">
                This post walks you through the process of building a full-stack web app using React and Next.js.
              </p>
              <button
                className="read-more-btn"
                onClick={togglePost1}
              >
                {showPost1 ? 'Show Less' : 'Read More'}
              </button>
              {showPost1 && (
                <div className="post-full-content">
                  <img src="ai-web-dev.AVIF" alt="Web App" style={{ width: '500px', height: '220px' }}className="post-image" />
                  <p>
                    In this tutorial, we will learn how to create a full-stack web application using React for the frontend and Next.js for server-side rendering.
                  </p>
                  <h4 className="highlight-heading">Applications of AI in Web Development</h4>
                  <ul>
                    <li><strong>Environment Setup:</strong> Setting up the development environment with Node.js, React, and Next.js.</li>
                    <li><strong>Routing with Next.js:</strong> Using Next.js’s built-in routing system for page navigation.</li>
                    <li><strong>State Management with React:</strong> Managing application state using hooks like useState and useEffect.</li>
                    <li><strong>Deployment to Vercel:</strong> How to deploy your Next.js app to Vercel for easy hosting and continuous integration.</li>
                  </ul>
                </div>
              )}
            </div>

            <div className="post fade-in-right">
              <h3 className="post-title">Understanding Machine Learning Models</h3>
              <p className="post-summary">
                A beginner-friendly guide to understanding how machine learning models work.
              </p>
              <button
                className="read-more-btn"
                onClick={togglePost2}
              >
                {showPost2 ? 'Show Less' : 'Read More'}
              </button>
              {showPost2 && (
                <div className="post-full-content">
                  <img src="machine-learning.jfif"  style={{ width: '500px', height: '220px' }}alt="Machine Learning" className="post-image" />
                  <p>
                    This post introduces machine learning, explaining the basics of algorithms like linear regression, decision trees, and neural networks.
                  </p>
                  <h4 className="highlight-heading">Popular ML Algorithms</h4>
                  <ul>
                    <li><strong>Linear Regression:</strong> A method to model the relationship between a dependent variable and one or more independent variables.</li>
                    <li><strong>Decision Trees:</strong> A tree-like model used to make decisions based on data features.</li>
                    <li><strong>Neural Networks:</strong> A set of algorithms, modeled loosely after the human brain, designed to recognize patterns in data.</li>
                    <li><strong>Random Forest:</strong> An ensemble method that combines multiple decision trees to improve predictive performance.</li>
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Third Post - Display at the End */}
          <div className="post fade-in-bottom">
            <h3 className="post-title">The Future of AI in Web Development</h3>
            <p className="post-summary">
              Exploring the role of AI in shaping the future of web development and user experiences.
            </p>
            <button
              className="read-more-btn"
              onClick={togglePost3}
            >
              {showPost3 ? 'Show Less' : 'Read More'}
            </button>
            {showPost3 && (
              <div className="post-full-content">
                <img src="Artificial intelligence.AVIF" style={{ width: '500px', height: '220px' }} alt="AI in Web Development" className="post-image" />
                <p>
                  Artificial Intelligence is revolutionizing web development by enabling personalized user experiences, automating tasks, and improving performance.
                </p>
                <h4 className="highlight-heading">Applications of AI in Web Development</h4>
                <ul>
                  <li><strong>Personalized User Experience:</strong> Using AI to tailor content and design based on user behavior and preferences.</li>
                  <li><strong>Chatbots and Virtual Assistants:</strong> AI-driven tools that provide customer service and interaction on websites.</li>
                  <li><strong>AI-Powered Design Tools:</strong> Tools that use AI to suggest or create website designs based on user inputs.</li>
                  <li><strong>Content Personalization:</strong> AI that customizes website content, making it more relevant to individual users.</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogPage;
