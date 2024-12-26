// src/app/blog/react-hooks.tsx
"use client";

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import '../styles/blog.css';

const ReactHooksPage = () => {
  return (
    <div>
      <Header />
      <div className="blog-post-container">
        <h1 className="post-title">Introduction to React Hooks</h1>
        <p className="post-date">Published on July 20, 2024</p>
        <img src="/images/react-hooks.jpg" alt="React Hooks" className="post-image" />
        <p>
          React Hooks provide a powerful way to use state and other React features without writing classes. This guide introduces Hooks and how they make functional components more powerful.
        </p>
        <h2>What are Hooks?</h2>
        <p>
          Hooks are functions that let you “hook into” React’s state and lifecycle features in functional components.
        </p>
        <h2>Using useState and useEffect</h2>
        <p>
          The useState and useEffect hooks are two of the most widely used hooks. They help manage component state and side effects in your app.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default ReactHooksPage;
