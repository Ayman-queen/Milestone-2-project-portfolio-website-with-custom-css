'use client'; // Mark this page as a client component

import { FC, useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa'; // Import icons
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import '@/app/styles/contact.css';

const ContactPage: FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Example: Log the data for demonstration
    console.log({ name, email, message });

    // Simulate a delay for form submission
    setTimeout(() => {
      alert('Your message has been sent!');
      setIsSubmitting(false);
      setName('');
      setEmail('');
      setMessage('');
    }, 2000);
  };

  return (
    <div className="contact-page-container">
      <Header />
      <h1 className="contact-title">Contact Us</h1>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="contact-input"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          className="contact-input"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <textarea
          className="contact-textarea"
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={4}
          required
        />
        <button
          type="submit"
          className={`contact-button ${isSubmitting ? 'loading' : ''}`}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
      <div className="social-links">
        <ul>
          <li>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub /> GitHub
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin /> LinkedIn
            </a>
          </li>
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;

