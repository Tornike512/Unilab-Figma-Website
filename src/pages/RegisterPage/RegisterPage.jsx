import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import cameraLogo from "/src/assets/camera-logo.png";
import coloredFacebook from "/src/assets/colored-facebook.png";
import coloredApple from "/src/assets/colored-apple.png";
import coloredGmail from "/src/assets/colored-gmail.png";
import coloredGoogle from "/src/assets/colored-google.png";

import "./RegisterPage.scss";

export function RegisterPage() {
  const [firstNameInput, setFirstNameInput] = useState("");
  const [lastNameInput, setLastNameInput] = useState("");
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

  const [firstNameWarning, setFirstNameWarning] = useState(false);
  const [lastNameWarning, setLastNameWarning] = useState(false);
  const [emailWarning, setEmailWarning] = useState(false);
  const [passwordWarning, setPasswordWarning] = useState(false);
  const [confirmPasswordWarning, setConfirmPasswordWarning] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (storeInfo) {
      localStorage.setItem("email", JSON.stringify(emailInput));
      localStorage.setItem("password", JSON.stringify(passwordInput));

      navigate("/signin");
    }
  }, [storeInfo]);

  const registerValidation = () => {
    const checkEmailValidation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (
      passwordInput === confirmPasswordInput &&
      checkEmailValidation.test(emailInput)
    ) {
      setStoreInfo(true);
    }

    if (storeInfo) {
      navigate("/signin");
    }

    if (passwordInput !== confirmPasswordInput) {
      setPasswordWarning(true);
      setConfirmPasswordWarning(true);
    }

    if (emailInput.trim() === "") {
      setEmailWarning(true);
    }

    if (firstNameInput === "") {
      setFirstNameWarning(true);
    }

    if (lastNameInput === "") {
      setLastNameWarning(true);
    }
  };

  return (
    <section className="register">
      <div className="register-container">
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="first-name-input">
            <label>First name</label>
            <input
              style={
                firstNameWarning
                  ? {
                      border: "1px solid red",
                      boxShadow: "inset 0 0 2px red",
                    }
                  : {}
              }
              onChange={(e) => {
                setFirstNameInput(e.target.value);
                setFirstNameWarning(false);
              }}
              type="text"
              placeholder="Enter your first name"
            />
            {firstNameWarning && (
              <span className="warning">First name is empty</span>
            )}
          </div>
          <div className="last-name-input">
            <label>Last name</label>
            <input
              style={
                lastNameWarning
                  ? {
                      border: "1px solid red",
                      boxShadow: "inset 0 0 2px red",
                    }
                  : {}
              }
              onChange={(e) => {
                setLastNameInput(e.target.value);
                setLastNameWarning(false);
              }}
              type="text"
              placeholder="Enter your last name"
            />
            {lastNameWarning && (
              <span className="warning">Last name is empty</span>
            )}
          </div>
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
              onChange={(e) => {
                setEmailInput(e.target.value);
                setEmailWarning(false);
              }}
              type="email"
              placeholder="Enter your email address"
            />
            {emailWarning && <span className="warning">Email is empty</span>}
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
              style={
                confirmPasswordWarning
                  ? {
                      border: "1px solid red",
                      boxShadow: "inset 0 0 2px red",
                    }
                  : {}
              }
              onChange={(e) => {
                setConfirmPasswordInput(e.target.value);
              }}
              type="password"
              placeholder="Re-enter your password"
            />
            {confirmPasswordWarning && (
              <span className="warning">Passwords do not match</span>
            )}
          </div>
          <button className="upload-image">
            <img src={cameraLogo} alt="Camera Image" />
          </button>
          <button onClick={registerValidation} className="register-button">
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
