'use client';


import '../styles/skills.css'; // Import custom styles

import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Skills = () => {
  const skills = [
    { name: 'JavaScript', level: 90, icon: '⚡' },
    { name: 'TypeScript', level: 85, icon: '💡' },
    { name: 'React', level: 80, icon: '⚛️' },
    { name: 'Node.js', level: 75, icon: '🌱' },
    { name: 'Python', level: 70, icon: '🐍' },
    { name: 'CSS', level: 95, icon: '🎨' },
    { name: 'HTML', level: 95, icon: '🔧' },
  ];

  const [isVisible, setIsVisible] = useState(false);

  // Scroll visibility trigger
  const handleScroll = () => {
    const section = document.getElementById('skills-section');
    if (section) {
      const rect = section.getBoundingClientRect();
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        setIsVisible(true);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check visibility when component first loads
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <Header />
      <section
        id="skills-section"
        className={`skills-section ${isVisible ? 'show' : ''}`}
      >
        <div className="container mx-auto">
          <h2 className="skills-title">Skills & Technologies</h2>
          <div className="skills-list">
            {skills.map((skill, index) => (
              <div key={index} className="skill-item">
                <div className="skill-icon">{skill.icon}</div>
                <div className="skill-details">
                  <h3 className="skill-name">{skill.name}</h3>
                  <div className="progress-bar">
                    <div
                      className="progress"
                      style={{
                        width: `${skill.level}%`,
                        backgroundColor: `hsl(${skill.level * 1.2}, 70%, 50%)`,
                      }}
                    ></div>
                  </div>
                  <span className="level-text">{skill.level}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Skills;
