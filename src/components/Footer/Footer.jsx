import "./Footer.scss";

import instagramLogo from "/src/assets/instagram-logo.png";
import facebookLogo from "/src/assets/facebook-logo.png";
import linkedinLogo from "/src/assets/linkedin-logo.png";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-wrapper">
        <div className="socials">
          <h2>ExploreEra</h2>
          <p>Travel agency which helps you to plan your perfect holidays</p>
          <span>Follow us</span>
          <nav className="socials-image">
            <img src={instagramLogo} alt="Instagram Logo" />
            <img src={facebookLogo} alt="Facebook Logo" />
            <img src={linkedinLogo} alt="Linkedin Logo" />
          </nav>
        </div>
        <nav className="links">
          <span>Links</span>
          <a href="#">Home</a>
          <a href="#">About us</a>
          <a href="#">Blogs</a>
          <a href="#">Our services</a>
          <a href="#">Our offer</a>
        </nav>
        <div className="contact">
          <h3>Contact us</h3>
          <span className="email">exploreera@gmail.com</span>
          <span className="phone-number">555111222</span>
          <label className="subscribe">Subscribe news</label>
          <form action="">
            <input type="email" placeholder="Email" />
            <img
              src=""
              alt="Send Arrow Logo
          "
            />
          </form>
        </div>
      </div>
      <span className="copyright">Copyright 2024</span>
    </footer>
  );
}
