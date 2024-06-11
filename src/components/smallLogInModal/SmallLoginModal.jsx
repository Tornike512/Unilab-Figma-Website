import blackCloseIcon from "/src/assets/black-close-icon.png";

import "./SmallLoginModal.scss";

export function SmallLoginModal() {
  return (
    <ul className="small-login-modal">
      <li className="sign-in">
        Sign in <img src={blackCloseIcon} alt="Black Close Icon" />
      </li>
      <li className="sign-up">Sign Up</li>
      <li>Home</li>
      <li>About us</li>
      <li>Blogs</li>
      <li>Our services</li>
      <li>Our offers</li>
    </ul>
  );
}

export default SmallLoginModal;
