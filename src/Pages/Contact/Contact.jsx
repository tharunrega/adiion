import React from 'react';
import { useEffect } from 'react';

import './Contact.css';
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // 👈 Scroll to top on mount
  }, []);
  return (
    <>
      {/* Banner Section */}
      <section className="contact-banner">
        <div className="banner-overlay">
          <h2>Why Contact Us?</h2>
          <p>
            We’re here to help you with your tech needs, business queries, or collaborations.
            <br />
            Let’s build something amazing together.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact" id="contact">
        <div className="contact-main">
          
          {/* Left Side - Contact Info */}
          <div className="contact-left">
            <h3>Our Office</h3>
            
            <p><FaMapMarkerAlt className="icon" /> 73C, 74C, 2nd Floor, S Park St, Secretariat Colony, Venkatapuram
            Ambattur, Chennai
            Tamil Nadu IN 600053</p>
            <p><FaEnvelope className="icon" /> info@adiion.com</p>
            <p><FaPhone className="icon" /> +91-7029395817</p>
          </div>

          {/* Right Side - Contact Form */}
          <div className="contact-right">
            <h3>Send Us a Message</h3>
            <form className="contact-form">
              <label htmlFor="name">Your Name</label>
              <input type="text" id="name" placeholder="Enter your name" required />

              <label htmlFor="email">Your Email</label>
              <input type="email" id="email" placeholder="Enter your email" required />

              <label htmlFor="message">Your Message</label>
              <textarea id="message" placeholder="Write your message..." rows="5" required></textarea>

              {/* reCAPTCHA can be added here later */}
              <button type="submit">Send Message</button>
            </form>
          </div>

        </div>
      </section>
    </>
  );
};

export default Contact;
