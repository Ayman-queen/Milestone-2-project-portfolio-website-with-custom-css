// src/app/blog/machine-learning.tsx
"use client";

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import '../styles/blog.css';

const MachineLearningPage = () => {
  return (
    <div>
      <Header />
      <div className="blog-post-container">
        <h1 className="post-title">Understanding Machine Learning Models</h1>
        <p className="post-date">Published on October 10, 2024</p>
        <img src="/images/machine-learning.jpg" alt="Machine Learning" className="post-image" />
        <p>
          Machine learning is transforming industries by enabling computers to learn from data and make decisions or predictions. In this article, we'll explore the basics of machine learning, different types of models, and their real-world applications.
        </p>
        <h2>Types of Machine Learning Models</h2>
        <p>
          Machine learning models are typically categorized as supervised, unsupervised, or reinforcement learning. Each type is used for different purposes and has unique advantages and limitations.
        </p>
        <h2>Applications of Machine Learning</h2>
        <p>
          Machine learning has applications in diverse fields such as healthcare, finance, and entertainment. From diagnosing diseases to personalizing recommendations, its impact is widespread and profound.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default MachineLearningPage;
