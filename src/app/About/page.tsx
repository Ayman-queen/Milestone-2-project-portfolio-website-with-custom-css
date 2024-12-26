import { FC } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import '../styles/about.css'; // Importing blog-specific styles


const About: FC = () => {
  return (
    <div>
      <Header />
      <section className="about-section py-20 min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
        <div className="overlay"></div> {/* Decorative overlay */}
        <div className="container mx-auto px-6 lg:px-20 text-center relative z-10">
          <h1 className="text-6xl font-extrabold mb-8 animate__animated animate__fadeIn animate__delay-1s">
            About Me
          </h1>
          <p className="text-lg font-light text-gray-200 mb-10 animate__animated animate__fadeIn animate__delay-2s">
            I'm Ayman Shaheen, a passionate developer with a deep interest in Web Development, Data Science, and AI. I am currently finishing my degree in Mathematics, and I’m dedicated to building modern, efficient, and responsive web applications. With curiosity and problem-solving at my core, I strive to continuously learn and tackle new challenges in the tech world.
          </p>
          <div className="mt-8">
            <Link href="/" className="back-home text-xl font-semibold hover:underline transition duration-300">
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

