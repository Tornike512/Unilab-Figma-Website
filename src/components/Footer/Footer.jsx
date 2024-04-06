import "./Footer.scss";

export function Footer() {
  return (
    <footer className="footer">
      <div className="socials">
        <title>ExploreEra</title>
        <p>Travel agency which helps you to plan your perfect holidays</p>
        <span>Follow us</span>
        <nav className="socials-image">
          <img src="" alt="Instagram Logo" />
          <img src="" alt="Facebook Logo" />
          <img src="" alt="Linkedin Logo" />
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
    </footer>
  );
}
