'use client';

import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import '../styles/projects.css'; // Import custom styles
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaFileCode } from 'react-icons/fa';
import 'swiper/css';

const Projects = () => {
  const [inView, setInView] = useState(false);

  // Detect when a project comes into view
  const handleScroll = (entries: any) => {
    entries.forEach((entry: any) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show'); // Trigger the animation
      } else {
        entry.target.classList.remove('show'); // Reset the animation if it's out of view
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleScroll, {
      threshold: 0.5, // Trigger when 50% of the element is visible
    });

    // Observing all project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card) => observer.observe(card));

    // Clean up the observer
    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "TypeScript 45 Assignment",
      description: "A TypeScript assignment that demonstrates various TypeScript features and best practices.",
      link: "https://github.com/Ayman-queen/typescript-45-Assignment",
      icon: <FaFileCode size={50} color="#61DBFB" />,
      interactiveFeatures: "Interactive form handling and data validation using TypeScript, showcasing error handling and type-safe practices.",
    },
    {
      title: "Hackathon Milestones",
      description: "Projects and milestones achieved during a hackathon event. Showcases collaborative and innovative solutions.",
      link: "https://github.com/Ayman-queen/Hackathon-milestones",
      icon: (
        <div className="icon-group">
          <FaNodeJs size={50} color="#68A063" />
          <FaHtml5 size={50} color="#E44D26" />
          <FaCss3Alt size={50} color="#1572B6" />
        </div>
      ),
      interactiveFeatures: "Real-time updates and collaborative work tracking with full-stack integration using Node.js and WebSockets.",
    },
    {
      title: "Countdown Timer Next.js",
      description: "A countdown timer application built with Next.js. It features a user-friendly interface for setting and tracking countdowns.",
      link: "https://github.com/Ayman-queen/project-countdown-timer-nextjs",
      icon: <FaReact size={50} color="#61DBFB" />,
      interactiveFeatures: "User interaction with dynamic countdown settings and live tracking of the countdown timer.",
    },
    {
      title: "E-Store Mobile (Figma to Next.js)",
      description: "A mobile e-store project converted from a Figma design to Next.js for fast and responsive e-commerce solutions.",
      link: "https://github.com/Ayman-queen/e-store-mobile-figma-to-nextjs",
      icon: <FaReact size={50} color="#61DBFB" />,
      interactiveFeatures: "Interactive product filtering, dynamic cart management, and mobile-friendly UI using Figma-to-Next.js conversion.",
    },
    {
      title: "HTML & CSS Basics",
      description: "A project showcasing foundational HTML and CSS skills, building simple yet responsive web pages.",
      link: "https://github.com/Ayman-queen/html-css",
      icon: (
        <div className="icon-group">
          <FaHtml5 size={50} color="#E44D26" />
          <FaCss3Alt size={50} color="#1572B6" />
        </div>
      ),
      interactiveFeatures: "Responsive design with interactive form elements and CSS transitions for a dynamic user experience.",
    },
  ];

  return (
    <div>
      <Header />
      <div className="portfolio-container">
        <h1 className="portfolio-title">My Projects</h1>
        <p className="portfolio-description">Here are some of the projects I've worked on:</p>

        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-icon">{project.icon}</div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="interactive-features">
                <h4>Interactive Features:</h4>
                <p>{project.interactiveFeatures}</p>
              </div>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                View Project
              </a>

              {/* Swiper for project images */}
              <Swiper spaceBetween={10} slidesPerView={1} loop autoplay={{ delay: 3000 }} className="project-carousel">
                {project.images?.map((image: string | undefined, idx: number) => (
                  <SwiperSlide key={idx}>
                    <img
                      src={image}
                      alt={`Screenshot of ${project.title}`}
                      className="project-image"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Projects;

