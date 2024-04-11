import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import cameraLogo from "/src/assets/camera-logo.png";
import coloredFacebook from "/src/assets/colored-facebook.png";
import coloredApple from "/src/assets/colored-apple.png";
import coloredGmail from "/src/assets/colored-gmail.png";
import coloredGoogle from "/src/assets/colored-google.png";

import "./RegisterPage.scss";

export function RegisterPage() {
  const [firstNameInput, setFirstNameInput] = useState(() => {
    const storedFirstName = localStorage.getItem("first name");
    return storedFirstName ? JSON.parse(storedFirstName) : "";
  });
  const [lastNameInput, setLastNameInput] = useState(() => {
    const storedLastName = localStorage.getItem("last name");
    return storedLastName ? JSON.parse(storedLastName) : "";
  });
  const [emailInput, setEmailInput] = useState(() => {
    const storedEmail = localStorage.getItem("email");
    return storedEmail ? JSON.parse(storedEmail) : "";
  });
  const [passwordInput, setPasswordInput] = useState(() => {
    const storedPasswordInput = localStorage.getItem("password");
    return storedPasswordInput ? JSON.parse(storedPasswordInput) : "";
  });
  const [confirmPasswordInput, setConfirmPasswordInput] = useState("");
  const [storeInfo, setStoreInfo] = useState(false);

  console.log(firstNameInput);

  const navigate = useNavigate();

  useEffect(() => {
    if (storeInfo) {
      localStorage.setItem(JSON.stringify(firstNameInput), "first name");
      localStorage.setItem(JSON.stringify(lastNameInput), "last name");
      localStorage.setItem(JSON.stringify(emailInput), "email");
      localStorage.setItem(JSON.stringify(passwordInput), "password");
    }
  }, [storeInfo]);

  return (
    <section className="register">
      <div className="register-container">
        <form>
          <div className="first-name-input">
            <label>First name</label>
            <input
              onChange={(e) => {
                setFirstNameInput(e.target.value);
              }}
              type="text"
              placeholder="Enter your first name"
            />
          </div>
          <div className="last-name-input">
            <label>Last name</label>
            <input
              onChange={(e) => {
                setLastNameInput(e.target.value);
              }}
              type="text"
              placeholder="Enter your last name"
            />
          </div>
          <div className="email-input">
            <label>Email</label>
            <input
              onChange={(e) => {
                setEmailInput(e.target.value);
              }}
              type="email"
              placeholder="Enter your email address"
            />
          </div>
          <div className="password-input">
            <label>Password</label>
            <input
              onChange={(e) => {
                setPasswordInput(e.target.value);
              }}
              type="password"
              placeholder="Enter your password"
            />
          </div>
          <div className="confirm-password-input">
            <label>Confirm the password</label>
            <input
              onChange={(e) => {
                setConfirmPasswordInput(e.target.value);
              }}
              type="password"
              placeholder="Re-enter your password"
            />
          </div>
          <button className="upload-image">
            <img src={cameraLogo} alt="Camera Image" />
          </button>
          <button
            // onClick={() => navigate("/signin")}
            onClick={() => {
              setStoreInfo(true);
            }}
            className="register-button"
          >
            Continue
          </button>
        </form>
        <span className="continue-with-text">Or continue with</span>
        <div className="upper-divider"></div>
        <div className="register-socials-grid">
          <div className="register-socials-item">
            <img src={coloredFacebook} alt="Colored Facebook Logo" />
          </div>
          <div className="register-socials-item">
            <img src={coloredApple} alt="Colored Apple Logo" />
          </div>
          <div className="register-socials-item">
            <img src={coloredGoogle} alt="Colored Google Logo" />
          </div>
          <div className="register-socials-item">
            <img src={coloredGmail} alt="Colored Gmail Logo" />
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
