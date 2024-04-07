import blackUserLogo from "/src/assets/black-user-logo.png";

import "./SecondaryHeader.scss";

export function SecondaryHeader() {
  return (
    <header className="secondary-header">
      <div className="secondary-header-wrapper">
        <h1>ExploreEra</h1>
        <img src={blackUserLogo} alt="Black User Icon" />
      </div>
    </header>
  );
}
