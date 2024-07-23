function Contact() {
  return (
    <div className="contact-container">
      <header className="contact-header">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you! Whether you have a question, feedback, or just want to say hello, feel free to reach out to us.</p>
      </header>

      <section className="contact-form-section">
        <h2>Get in Touch</h2>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          <button type="submit" className="submit-button">Send Message</button>
        </form>
      </section>

      <section className="contact-info-section">
        <h2>Our Information</h2>
        <p><strong>Address:</strong> 123 Food Street, Flavor Town, FT 45678</p>
        <p><strong>Email:</strong> info@sumanfoods.com</p>
        <p><strong>Phone:</strong> (123) 456-7890</p>
      </section>

      <section className="contact-map-section">
        <h2>Find Us Here</h2>
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345095975!2d144.9556513153107!3d-37.81732797975195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf57706b4eae2057!2sVictoria!5e0!3m2!1sen!2sau!4v1622721324871!5m2!1sen!2sau"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Google Maps"
          ></iframe>
        </div>
      </section>
    </div>
  );
}

export default Contact;
