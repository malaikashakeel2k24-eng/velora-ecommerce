import { useState } from "react";

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="inner-page">
      <section className="page-hero">
        <p className="section-label">04 — CONTACT</p>
        <h1>Let's create something <span>beautiful.</span></h1>
        <p>
          Have a question about Velora? Send us a message and our team will
          get back to you.
        </p>
      </section>

      <section className="contact-page">
        <div className="contact-info">
          <h2>Get in touch.</h2>
          <p>
            We're always happy to hear from you. Whether you have a product
            question or simply want to say hello, we'd love to connect.
          </p>

          <div className="contact-detail">
            <strong>Email</strong>
            <span>hello@velora.com</span>
          </div>

          <div className="contact-detail">
            <strong>Location</strong>
            <span>Hyderabad, Pakistan</span>
          </div>
        </div>

        <form className="contact-form-page" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            placeholder="Email Address"
            required
          />

          <textarea
            placeholder="Your Message"
            rows="6"
            required
          ></textarea>

          <button type="submit" className="primary-btn">
            Send Message →
          </button>

          {submitted && (
            <p className="success-message">
              Thank you! Your message has been received.
            </p>
          )}
        </form>
      </section>
    </main>
  );
}

export default Contact;