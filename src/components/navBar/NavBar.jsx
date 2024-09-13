import { FaBell } from "react-icons/fa"; 
import "./NavBar.css"; 
import { useContext } from "react";
import { GlobalContext } from "../../GlobalContext";

const NavBar = ({ userImageLink, onProfileClick }) => {
  const { isCollapese } = useContext(GlobalContext); // Use global collapse state

  return (
    <div className="navbar-container">
      {isCollapese && (
        <div className="navbar-brand">
          <span className="brand-line">MedAi</span> 
          <span className="brand-line">Connect</span>
        </div>
      )}
      <div className="navbar-right">
        <button className="notification-btn">
          <FaBell className="notification-icon" />
        </button>
        <img
          src={userImageLink}
          alt="User"
          className="user-profile-img"
          onClick={onProfileClick} 
        />
      </div>
    </div>
  );
};

export default NavBar;
