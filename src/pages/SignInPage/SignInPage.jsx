import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import coloredFacebook from "/src/assets/colored-facebook.png";
import coloredApple from "/src/assets/colored-apple.png";
import coloredGmail from "/src/assets/colored-gmail.png";
import coloredGoogle from "/src/assets/colored-google.png";

import "./SignInPage.scss";

export function SignInPage() {
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [authorized, setAuthorized] = useState(() => {
    const storedAuthorize = localStorage.getItem("signed in");
    return storedAuthorize ? JSON.parse(storedAuthorize) : false;
  });

  const [emailWarning, setEmailWarning] = useState(false);
  const [passwordWarning, setPasswordWarning] = useState(false);

  const storedEmail = JSON.parse(localStorage.getItem("email"));
  const storedPassword = JSON.parse(localStorage.getItem("password"));

  const navigate = useNavigate();

  const handleEmailInput = (e) => {
    setEmailInput(e.target.value);
    setEmailWarning(false);
  };

  const handlePasswordInput = (e) => {
    setPasswordInput(e.target.value);
    setPasswordWarning(false);
  };

  const handleSignInButton = () => {
    if (emailInput === storedEmail && passwordInput === storedPassword) {
      navigate("/bookflight");
      localStorage.setItem("signed in", JSON.stringify(true));
    }

    if (emailInput !== storedEmail) {
      setEmailWarning(true);
    }

    if (passwordInput !== storedPassword) {
      setPasswordWarning(true);
    }
  };

  return (
    <section className="sign-in-page">
      <div className="sign-in-container">
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="email-input">
            <label>Email</label>
            <input
              style={
                emailWarning
                  ? {
                      border: "1px solid red",
                      boxShadow: "inset 0 0 2px red",
                    }
                  : {}
              }
              onChange={handleEmailInput}
              type="email"
              placeholder="Enter your email address"
            />
            {emailWarning && <span className="warning">Wrong password</span>}
          </div>
          <div className="password-input">
            <label>Password</label>
            <input
              style={
                passwordWarning
                  ? {
                      border: "1px solid red",
                      boxShadow: "inset 0 0 2px red",
                    }
                  : {}
              }
              onChange={handlePasswordInput}
              type="password"
              placeholder="Enter your password"
            />
            {passwordWarning && <span className="warning">Wrong password</span>}
          </div>
          <button onClick={handleSignInButton} className="sign-in-button">
            Countinue
          </button>
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
