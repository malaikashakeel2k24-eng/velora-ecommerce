import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div>
          <div className="footer-logo">
            VELORA<span>.</span>
          </div>

          <p>Elevate Your Everyday.</p>
        </div>

        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/collections">Collections</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>

      <div className="copyright">
        © 2026 Velora. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;