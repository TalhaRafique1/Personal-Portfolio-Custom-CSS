import React from 'react';
import './contact.module.css'; 

const Contact = () => {
  return (
    <div>
      <section className="contact-section">
        <div className="contact-container">
          {/* Left side with map and contact details */}
          <div className="contact-map">
            <iframe
              width="100%"
              height="100%"
              className="absolute inset-0"
              frameBorder={0}
              title="map"
              marginHeight={0}
              marginWidth={0}
              scrolling="no"
              src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
            />
            <div className="contact-map-info">
              <div className="contact-info-item">
                <h2>ADDRESS</h2>
                <p>Korangi 4 number, Karachi, Pakistan</p>
              </div>
              <div className="contact-info-item">
                <h2>EMAIL</h2>
                <a href="mailto:rafiquetalha275@email.com" className="text-indigo-500">rafiquetalha275@email.com</a>
                <h2>PHONE</h2>
                <p>03150378814</p>
              </div>
            </div>
          </div>

          {/* Right side with contact form */}
          <div className="contact-form">
            <h2>Contact Me</h2>
            <p>Have questions or feedback? Reach out to us, and we’ll get back to you soon!</p>

            {/* Contact Form */}
            <div className="relative mb-4">
              <label htmlFor="name" className="text-sm font-bold">Name</label>
              <input type="text" id="name" name="name" className="border rounded" />
            </div>
            <div className="relative mb-4">
              <label htmlFor="email" className="text-sm font-bold">Email</label>
              <input type="email" id="email" name="email" className="border rounded" />
            </div>
            <div className="relative mb-4">
              <label htmlFor="message" className="text-sm font-bold">Message</label>
              <textarea id="message" name="message" className="border rounded" />
            </div>
            <button type="submit">Submit Here</button>
            <p className="small-text">Thank you for reaching out! We’ll review your message and get back to you soon.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
