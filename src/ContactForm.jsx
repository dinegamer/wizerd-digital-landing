// import { useState } from "react";

// import LinkWithIcon from "./LinkWithIcon";
// useState(initialState)
// import React from 'react';
// import LinkWithIcon from "./LinkWithIcon";

const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    // Encode le message pour l'URL
    const encodedMessage = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );
    
    // Ouvre le client mail avec les informations pré-remplies
    window.location.href = `mailto:teenagerdine@gmail.com?subject=Contact from ${name}&body=${encodedMessage}`;
    
    // Reset le formulaire
    e.target.reset();
  };

  return (
    <section id="contactSection">
      <div className="contact-intro">
        <p className="contact-title">Get in Touch</p>
        <p className="contact-subtitle">Let's Create Something Amazing Together</p>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <div className="contact-card">
            <div className="contact-header">
              <h3>Contact Information</h3>
              <p>Fill in the form or contact me directly</p>
            </div>
            
            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <a href="https://wa.me/73449230" className="contact-text">WhatsApp Support 24/7</a>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <a href="mailto:teenagerdine@gmail.com" className="contact-text">teenagerdine@gmail.com</a>
              </div>

              {/* <div className="social-links">
                <LinkWithIcon to="GITHUB_URL" svg="github" />
                <LinkWithIcon to="LINKEDIN_URL" svg="Linkedin" />
                <LinkWithIcon to="TWITTER_URL" svg="Twitter" />
              </div> */}
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="form-input"
              autoComplete="name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="form-input"
              autoComplete="email"
              style={{ color: 'black', backgroundColor: 'white' }} // Ajustez les couleurs pour voir si l'affichage change

            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              name="message"
              required
              rows="5"
              className="form-input"
            ></textarea>
          </div>

          <button type="submit" className="submit-btn">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;