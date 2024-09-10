import { FaBell } from "react-icons/fa"; 
import "./NavBar.css"; 

const NavBar = ({ userImageLink, onProfileClick, isSidebarCollapsed }) => {
  return (
    <div className="navbar-container">
      {isSidebarCollapsed && (
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
