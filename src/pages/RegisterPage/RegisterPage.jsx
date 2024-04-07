import "./RegisterPage.scss";

export function RegisterPage() {
  return (
    <section className="register">
      <div className="register-container">
        <form>
          <div className="first-name-input">
            <label>First name</label>
            <input type="text" placeholder="Enter your first name" />
          </div>
          <div className="last-name-input">
            <label>Last name</label>
            <input type="text" placeholder="Enter your last name" />
          </div>
          <div className="email-input">
            <label>Email</label>
            <input type="email" placeholder="Enter your email address" />
          </div>
          <div className="password-input">
            <label>Password</label>
            <input type="password" placeholder="Enter your password" />
          </div>
          <div className="confirm-password-input">
            <label>Confirm the password</label>
            <input type="password" placeholder="Re-enter your password" />
          </div>
          <button className="upload-image">
            <img src="" alt="Camera Image" />
          </button>
          <button className="register-button">Continue</button>
        </form>
        <span className="continue-with-text">Or continue with</span>
        <div className="register-socials-grid">
          <div className="register-socials-item">
            <img src="" alt="Colored Facebook Logo" />
          </div>
          <div className="register-socials-item">
            <img src="" alt="Colored Apple Logo" />
          </div>
          <div className="register-socials-item">
            <img src="" alt="Colored Google Logo" />
          </div>
          <div className="register-socials-item">
            <img src="" alt="Colored Gmail Logo" />
          </div>
          <p className="terms-of-service">
            By signing in or creating an account, you agree with our <br />
            <a href="#">Terms & conditions</a> and
            <a href="#">Privacy policy</a>
          </p>
        </div>
      </div>
    </section>
  );
}
