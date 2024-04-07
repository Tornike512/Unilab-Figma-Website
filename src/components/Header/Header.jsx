import { useNavigate } from "react-router-dom";

import headerNavigation from "./Header.json";

import userLogoWhite from "/src/assets/user-logo-white.png";

import "./Header.scss";

export function Header() {
  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="header-wrapper">
        <h1 className="website-name">ExploreEra</h1>
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
              onClick={() => navigate("/signin")}
              className="user-logo-white"
              src={userLogoWhite}
              alt="User Logo White"
            />
          </>
        </nav>
      </div>
    </header>
  );
}
