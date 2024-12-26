"use client";

import { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import emailjs from "emailjs-com";
import "../styles/contact.css"; // Ensure you use unique styles

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        "YOUR_SERVICE_ID", // Replace with your EmailJS Service ID
        "YOUR_TEMPLATE_ID", // Replace with your EmailJS Template ID
        formData,
        "YOUR_PUBLIC_KEY" // Replace with your EmailJS Public Key
      );
      setIsSent(true);
    } catch (error) {
      console.error("Failed to send message:", error);
      alert("There was an issue sending your message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    
    <div className="contact-page-container">
      <Header />
      <h1 className="contact-title">Contact Us</h1>

      {!isSent ? (
        <form className="contact-form animated-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="contact-input"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="contact-input"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleInputChange}
            required
            className="contact-textarea"
          ></textarea>
          <button
            type="submit"
            className={`contact-button ${isSubmitting ? "loading" : ""}`}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      ) : (
        <div className="thank-you-message">
          <h2 className="success-title">Thank You!</h2>
          <p>Your message has been successfully sent. We'll get back to you shortly!</p>
        </div>
      )}

      <div className="social-links">
        <h3>Follow Us</h3>
        <ul>
          <li>
            <a href="mailto:shaheenayman786@gmail.com" target="_blank" rel="noopener noreferrer">
              <FaEnvelope /> Email
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/ayman-shaheen-3071722b9" target="_blank" rel="noopener noreferrer">
              <FaLinkedin /> LinkedIn
            </a>
          </li>
          <li>
            <a href="https://github.com/Ayman-queen" target="_blank" rel="noopener noreferrer">
              <FaGithub /> GitHub
            </a>
          </li>
        </ul>
        <Footer />
      </div>
    </div>
  );
};

export default ContactPage;