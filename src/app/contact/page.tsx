import React from 'react';
import styles from './contact.module.css'; // Importing CSS module

const Contact = () => {
  return (
    <section className={styles['contact-section']}>
      <div className={styles['contact-container']}>
        
        {/* Contact Map Section */}
        <div className={styles['contact-map']}>
          <iframe
            width="100%"
            height="100%"
            frameBorder="0"
            title="map"
            scrolling="no"
            src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
          />
          <div className={styles['contact-map-info']}>
            <div className={styles['contact-info-item']}>
              <h2>ADDRESS</h2>
              <p>Korangi 4 number, Karachi, Pakistan</p>
            </div>
            <div className={styles['contact-info-item']}>
              <h2>EMAIL</h2>
              <a href="mailto:rafiquetalha275@email.com" className={styles['email-link']}>
                rafiquetalha275@email.com
              </a>
              <h2>PHONE</h2>
              <p>03150378814</p>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className={styles['contact-form']}>
          <h2>Contact Me</h2>
          <p>Have questions or feedback? Reach out, and I’ll get back to you soon!</p>

          <div className={styles['form-group']}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" />
          </div>
          <div className={styles['form-group']}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className={styles['form-group']}>
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message"></textarea>
          </div>
          
          <button type="submit" className={styles['submit-btn']}>Submit</button>
          <p className={styles['small-text']}>Thank you for reaching out! I’ll review your message and get back to you soon.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
