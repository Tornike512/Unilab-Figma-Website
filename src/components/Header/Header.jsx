import headerNavigation from "./Header.json";

import userLogo from "/src/assets/user-logo.png";

import "./Header.scss";

export function Header() {
  return (
    <header className="header">
      <h1 className="website-name">ExploreEra</h1>
      <nav className="navigation">
        <ul className="navigation-list">
          {headerNavigation.navigation.map((nav) => {
            console.log(nav);
            return (
              <li className="navigation-item" key={nav.id}>
                {nav.title}
              </li>
            );
          })}
        </ul>
        <img src={userLogo} alt="User Logo" />
      </nav>
    </header>
  );
}
