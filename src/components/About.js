
function About() {
  return (
    <div className="about-container">
      <header className="about-header">
        <h1>About Us</h1>
        <p>Discover our journey and what drives us to deliver the best to our customers.</p>
      </header>

      <section className="about-overview">
        <h2>Company Overview</h2>
        <p>
          Welcome to <strong>Suman Food and Beverages</strong>, your go-to destination for delicious and healthy
          food options. Founded in 2008, we have been committed to providing our customers with the finest
          culinary experiences. Our journey began with a simple idea - to make good food accessible to everyone.
        </p>
      </section>

      <section className="about-mission">
        <h2>Our Mission</h2>
        <p>
          Our mission is to create a memorable dining experience by offering high-quality, diverse, and sustainable
          food choices. We believe in the power of good food to bring people together and make a positive impact
          on the community.
        </p>
      </section>

      <section className="about-values">
        <h2>Our Values</h2>
        <ul>
          <li>
            <h3>Quality</h3>
            <p>We are dedicated to providing the best quality ingredients and exceptional service to our customers.</p>
          </li>
          <li>
            <h3>Sustainability</h3>
            <p>We prioritize sustainable practices in sourcing, production, and packaging to protect our planet.</p>
          </li>
          <li>
            <h3>Community</h3>
            <p>We believe in giving back to the community and supporting local initiatives and causes.</p>
          </li>
        </ul>
      </section>

      <section className="about-team">
        <h2>Meet Our Team</h2>
        <div className="team-members">
          <div className="team-member">
            <img src="team-member1.jpg" alt="Team Member 1" />
            <h3>John Doe</h3>
            <p>Founder & CEO</p>
          </div>
          <div className="team-member">
            <img src="team-member2.jpg" alt="Team Member 2" />
            <h3>Jane Smith</h3>
            <p>Head Chef</p>
          </div>
          <div className="team-member">
            <img src="team-member3.jpg" alt="Team Member 3" />
            <h3>Emily Johnson</h3>
            <p>Marketing Director</p>
          </div>
        </div>
      </section>

      <section className="about-contact">
        <h2>Contact Us</h2>
        <p>Have any questions? Feel free to reach out to us!</p>
        <a href="mailto:info@sumanfoods.com" className="contact-button">Get in Touch</a>
      </section>
    </div>
  );
}

export default About;
