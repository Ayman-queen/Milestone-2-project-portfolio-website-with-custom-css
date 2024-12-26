// src/app/blog/web-performance.tsx
"use client";

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import '../styles/blog.css';

const WebPerformancePage = () => {
  return (
    <div>
      <Header />
      <div className="blog-post-container">
        <h1 className="post-title">Advanced Web Performance Optimization Techniques</h1>
        <p className="post-date">Published on August 5, 2024</p>
        <img src="/images/web-performance.jpg" alt="Web Performance Optimization" className="post-image" />
        <p>
          Optimizing web performance is essential for a smooth user experience and high search engine rankings. Here, we’ll discuss advanced techniques to make your website faster and more efficient.
        </p>
        <h2>Image Optimization</h2>
        <p>
          Compress and format images correctly to reduce load times. Lazy load images to avoid loading off-screen content immediately.
        </p>
        <h2>Code Splitting</h2>
        <p>
          Code splitting allows you to load only the necessary parts of your code, improving loading speeds for your users.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default WebPerformancePage;
