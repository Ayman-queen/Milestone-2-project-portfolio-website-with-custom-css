import Header from '@/components/Header';
import Footer from '@/components/Footer';
import '@/app/styles/home.css';
import '@/app/styles/header.css'
import Image from 'next/image';
import Link from 'next/link';

const HomePage = () => {
  return (
    <div>
      <Header />
      {/* Home Page Content */}
      <section className="home-section">
        <div className="container mx-auto p-10 space-y-8">
          {/* Animated Title */}
          <h1 className="home-title">
            Welcome to My Portfolio
          </h1>

          {/* Profile Picture */}
          <div className="home-image">
            <Image
              src="/hijab-girl.jpg"
              alt="Ayman Shaheen"
              width={200}
              height={200}
              className="mx-auto"
            />
          </div>

          {/* Description */}
          <p className="home-description">
            I am a passionate developer focused on creating modern web applications, machine learning models, and data-driven solutions.
          </p>

          {/* Links */}
          <div className="home-links space-x-6">
            <Link href="/about" className="home-link">
              Learn More About Me
            </Link>
            <Link href="/portfolio" className="home-link">
              View My Portfolio
            </Link>
            <Link href="/skills" className="home-link">
              Explore My Services
            </Link>
            <Link href="/blog" className="home-link">
              Read My Blog
            </Link>
          </div>

          {/* Download CV */}
          <div className="download-cv">
            <a
              href="/ayman_cv.pdf"
              download="Ayman_Shaheen_CV.pdf"
              className="download-link"
            >
              Download My CV
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default HomePage;
