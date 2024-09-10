import { useState } from "react";
import {
  FaHome,
  FaClipboardList,
  FaBell,
  FaSearch,
  FaBars,
} from "react-icons/fa"; // Added FaBars for toggle button
import { useNavigate } from "react-router-dom";
import "./Sidebar.css";
import logo from "./logo.png";

const Sidebar = ({ active }) => {
  const [activeItem, setActiveItem] = useState(active);
  const [isCollapsed, setIsCollapsed] = useState(false); // State to handle sidebar collapse
  const navigate = useNavigate();

  const handleItemClick = (itemName, route) => {
    setActiveItem(itemName);
    navigate(route);
  };

  const handleToggleSidebar = () => {
    setIsCollapsed(!isCollapsed); // Toggle collapsed state
  };

  return (
    <div className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
      <div className="sidebar-header">
        {!isCollapsed && (
          <><button className="toggle-btn" onClick={handleToggleSidebar}>
            <img
              src={logo}
              alt="Logo"
              className={`sidebar-logo ${isCollapsed ? "hidden" : ""}`}
            />
            <div className="sidebar-brand">
              <span>MedAi</span>
              <span>Connect</span>
            </div>
            </button>
          </>
        )}
        {isCollapsed && (
          <>
            <button className="toggle-btn" onClick={handleToggleSidebar}>
              <FaBars size={20} />
            </button>
          </>
        )}
      </div>
      <ul className="sidebar-menu">
        <li
          className={`menu-item ${activeItem === "My Care" ? "active" : ""}`}
          onClick={() => handleItemClick("My Care", "/my-care")}
        >
          <FaHome
            size={20}
            color={activeItem === "My Care" ? "#1A73E8" : "#B0B0B0"}
          />
          {!isCollapsed && <span>My Care</span>}
        </li>
        <li
          className={`menu-item ${
            activeItem === "Appointments" ? "active" : ""
          }`}
          onClick={() => handleItemClick("Appointments", "/appointments")}
        >
          <FaClipboardList
            size={20}
            color={activeItem === "Appointments" ? "#1A73E8" : "#B0B0B0"}
          />
          {!isCollapsed && <span>Appointments</span>}
        </li>
        <li
          className={`menu-item ${
            activeItem === "Notifications" ? "active" : ""
          }`}
          onClick={() => handleItemClick("Notifications", "/notifications")}
        >
          <FaBell
            size={20}
            color={activeItem === "Notifications" ? "#1A73E8" : "#B0B0B0"}
          />
          {!isCollapsed && <span>Notifications</span>}
        </li>
        <li
          className={`menu-item ${
            activeItem === "Find a Doctor" ? "active" : ""
          }`}
          onClick={() => handleItemClick("Find a Doctor", "/find-doctor")}
        >
          <FaSearch
            size={20}
            color={activeItem === "Find a Doctor" ? "#1A73E8" : "#B0B0B0"}
          />
          {!isCollapsed && <span>Find a Doctor</span>}
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
