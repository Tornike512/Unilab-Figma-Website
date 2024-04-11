import { useState } from "react";
import { useNavigate } from "react-router-dom";

import coloredFacebook from "/src/assets/colored-facebook.png";
import coloredApple from "/src/assets/colored-apple.png";
import coloredGmail from "/src/assets/colored-gmail.png";
import coloredGoogle from "/src/assets/colored-google.png";

import "./SignInPage.scss";

export function SignInPage() {
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  const storedEmail = localStorage.getItem("email");
  const storedPassword = localStorage.getItem("password");

  console.log(storedEmail);
  console.log(storedPassword);

  return (
    <section className="sign-in-page">
      <div className="sign-in-container">
        <form>
          <div className="email-input">
            <label>Email</label>
            <input type="email" placeholder="Enter your email address" />
          </div>
          <div className="password-input">
            <label>Password</label>
            <input type="password" placeholder="Enter your password" />
          </div>
          <button className="sign-in-button">Countinue</button>
        </form>
        <div className="divider-text">Or continue with</div>
        <div className="upper-divider"></div>
        <div className="sign-in-socials-grid">
          <div className="home-page-socials">
            <img src={coloredFacebook} alt="Colored Facebook Icon" />
          </div>
          <div className="home-page-socials">
            <img src={coloredApple} alt="Colored apple Icon" />
          </div>
          <div className="home-page-socials">
            <img src={coloredGoogle} alt="Colored Google Icon" />
          </div>
          <div className="home-page-socials">
            <img src={coloredGmail} alt="Colored Gmail Icon" />
          </div>
        </div>
        <p className="terms-of-service">
          By signing in or creating an account, you agree with our <br />
          <a href="#">Terms & conditions</a> and <a href="#">Privacy policy</a>
        </p>
      </div>
    </section>
  );
}
