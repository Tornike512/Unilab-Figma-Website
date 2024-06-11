import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { SmallLoginModal } from "/src/components/SmallLoginModal";
import { GlobalContext } from "/src/GlobalContext";

import headerNavigation from "./Header.json";

import userLogoWhite from "/src/assets/user-logo-white.png";
import menuIcon from "/src/assets/menu-icon.png";

import "./Header.scss";

export function Header() {
  const [showSignInModal, setShowSignInModal] = useState(false);

  const { showSmallModal, setShowSmallModal } = useContext(GlobalContext);

  const storedAuthorized = JSON.parse(localStorage.getItem("signed in"));

  const navigate = useNavigate();

  const handleSignOut = () => {
    localStorage.removeItem("signed in");
    navigate("/register");
    setShowSignInModal(false);
  };

  console.log(showSmallModal, "header");
  return (
    <header className="header">
      <div className="header-wrapper">
        <h1 onClick={() => navigate(`/`)} className="website-name">
          ExploreEra
        </h1>
        {showSmallModal && <SmallLoginModal />}
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
              onClick={() => setShowSmallModal(true)}
              className="menu-icon"
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
          {storedAuthorized && <a onClick={handleSignOut}>Sign out</a>}
        </nav>
      )}
    </header>
  );
}
