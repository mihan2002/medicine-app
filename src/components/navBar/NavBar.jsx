import { FaBell } from "react-icons/fa"; // Importing bell icon from React Icons
import "./NavBar.css"; // Assuming you will style in NavBar.css

const NavBar = ({ userImageLink, onProfileClick }) => {
  return (
    <div className="navbar-container">
      <div className="navbar-right">
        <button className="notification-btn">
          <FaBell className="notification-icon" />
        </button>
        <img
          src={userImageLink}
          alt="User"
          className="user-profile-img"
          onClick={onProfileClick} // Triggers the onClick passed from props
        />
      </div>
    </div>
  );
};

export default NavBar;
