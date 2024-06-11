import { useContext } from "react";
import { GlobalContext } from "/src/GlobalContext";
import { useNavigate } from "react-router";
import blackCloseIcon from "/src/assets/black-close-icon.png";

import "./SmallLoginModal.scss";

export function SmallLoginModal() {
  const { setShowSmallModal, showSmallModal } = useContext(GlobalContext);

  console.log(showSmallModal, "smallmodal");

  const navigate = useNavigate();

  return (
    <>
      {showSmallModal && (
        <ul className="small-login-modal">
          <li className="sign-in">
            <p onClick={() => navigate("/signin")}>Sign in </p>
            <img
              onClick={() => {
                setShowSmallModal(false);
              }}
              src={blackCloseIcon}
              alt="Black Close Icon"
            />
          </li>
          <li onClick={() => navigate("/register")} className="sign-up">
            Sign Up
          </li>
          <li>Home</li>
          <li>About us</li>
          <li>Blogs</li>
          <li>Our services</li>
          <li>Our offers</li>
        </ul>
      )}
    </>
  );
}

export default SmallLoginModal;
