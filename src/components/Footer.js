import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h2 className="footer-heading">About Us</h2>
          <p className="footer-text">
            Suman Food and Beverages offers the finest dining experience with
            pure and delightful food.
          </p>
        </div>
        <div className="footer-section">
          <h2 className="footer-heading">Quick Links</h2>
          <ul className="footer-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/main/about">About</Link>
            </li>
            <li>
              <Link to="/main/contact">Contact</Link>
            </li>
            <li>
              <a href="/main/menu">Menu</a>
            </li>
            <li>
              <a href="/main/faq">FAQ</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h2 className="footer-heading">Follow Us</h2>
          <ul className="footer-social">
            <li>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Suman Food and Beverages. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
