import { useNavigate } from "react-router-dom";
import { useState } from "react";

import headerNavigation from "./Header.json";

import userLogoWhite from "/src/assets/user-logo-white.png";
import menuIcon from "/src/assets/menu-icon.png";

import "./Header.scss";

export function Header() {
  const [showSignInModal, setShowSignInModal] = useState(false);

  const storedAuthorized = JSON.parse(localStorage.getItem("signed in"));

  console.log(storedAuthorized);

  const navigate = useNavigate();

  const handleSignOut = () => {
    localStorage.removeItem("signed in");
    navigate("register");
    setShowSignInModal(false);
  };

  return (
    <header className="header">
      <div className="header-wrapper">
        <h1 onClick={() => navigate("/")} className="website-name">
          ExploreEra
        </h1>
        <nav className="navigation">
          <ul className="navigation-list">
            {headerNavigation.navigation.map((nav) => {
              return (
                <li className="navigation-item" key={nav.id}>
                  {nav.title}
                </li>
              );
            })}
          </ul>

          <>
            <img
              onMouseOver={() => {
                setShowSignInModal(true);
              }}
              onMouseLeave={() => {
                setShowSignInModal(false);
              }}
              className="user-logo-white"
              src={userLogoWhite}
              alt="User Logo White"
            />
            <img
              className="menu-icon"
              onClick={() => navigate("/signin")}
              src={menuIcon}
              alt="Menu Icon"
            />
          </>
        </nav>
      </div>
      {showSignInModal && (
        <nav
          onMouseOver={() => setShowSignInModal(true)}
          onMouseLeave={() => setShowSignInModal(false)}
          className="sign-in-modal"
        >
          {!storedAuthorized && (
            <a
              onClick={() => {
                setShowSignInModal(false);
                navigate("/signin");
              }}
            >
              Sign in
            </a>
          )}
          {!storedAuthorized && (
            <a
              onClick={() => {
                setShowSignInModal(false);
                navigate("/register");
              }}
            >
              Sign up
            </a>
          )}
          <a onClick={handleSignOut}>Sign out</a>
        </nav>
      )}
    </header>
  );
}
