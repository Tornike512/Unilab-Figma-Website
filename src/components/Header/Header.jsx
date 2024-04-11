import { useNavigate } from "react-router-dom";
import { useState } from "react";

import headerNavigation from "./Header.json";

import userLogoWhite from "/src/assets/user-logo-white.png";

import "./Header.scss";

export function Header() {
  const [showSignInModal, setShowSignInModal] = useState(false);
  const navigate = useNavigate();

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
          </>
        </nav>
      </div>
      {showSignInModal && (
        <nav
          onMouseOver={() => setShowSignInModal(true)}
          onMouseLeave={() => setShowSignInModal(false)}
          className="sign-in-modal"
        >
          <a onClick={() => navigate("/signin")}>Sign in</a>
          <a onClick={() => navigate("/register")}>Sign up</a>
          <a>Sign out</a>
        </nav>
      )}
    </header>
  );
}
