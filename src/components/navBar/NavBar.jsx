import { FaBell } from "react-icons/fa"; 
import { Link } from "react-router-dom"; // Import Link from react-router-dom
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
        <Link to="/notifications" className="notification-btn">
          <FaBell className="notification-icon" />
        </Link>
        <Link to="/myprofile">
          <img
            src={userImageLink}
            alt="User"
            className="user-profile-img"
            onClick={onProfileClick} 
          />
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
