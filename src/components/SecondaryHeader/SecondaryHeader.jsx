import { useNavigate } from "react-router-dom";

import blackUserLogo from "/src/assets/black-user-logo.png";
import blackNavIcon from "/src/assets/nav-icon-black.png";

import "./SecondaryHeader.scss";

export function SecondaryHeader() {
  const navigate = useNavigate();

  return (
    <header className="secondary-header">
      <div className="secondary-header-wrapper">
        <h1 onClick={() => navigate(`/`)}>ExploreEra</h1>
        <img
          className="black-user-icon"
          onClick={() => navigate(`/`)}
          src={blackUserLogo}
          alt="Black User Icon"
        />
        <img
          className="black-nav-icon"
          onClick={() => navigate("/")}
          src={blackNavIcon}
          alt="Black Navigation Icon"
        />
      </div>
    </header>
  );
}
