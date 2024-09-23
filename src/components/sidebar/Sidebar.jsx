import { useState, useContext } from "react";
import {
  FaHome,
  FaClipboardList,
  FaBell,
  FaSearch,
  FaBars,
} from "react-icons/fa"; 
import { useNavigate } from "react-router-dom";
import "./Sidebar.css";
import logo from "./logo.png";
import { GlobalContext } from "../../GlobalContext";

const Sidebar = ({ active }) => {
  const [activeItem, setActiveItem] = useState(active);
  const { isCollapese, setIsCollapese } = useContext(GlobalContext);

  const navigate = useNavigate();

  const handleItemClick = (itemName, route) => {
    setActiveItem(itemName);
    navigate(route);
  };

  const handleToggleSidebar = () => {
    setIsCollapese(!isCollapese); // Update global state to collapse or expand sidebar
  };

  return (
    <div className={`sidebar ${isCollapese ? "collapsed" : ""}`}>
      <div className="sidebar-header">
        {!isCollapese && (
          <>
            <button className="toggle-btn" onClick={handleToggleSidebar}>
              <img
                src={logo}
                alt="Logo"
                className={`sidebar-logo ${isCollapese ? "hidden" : ""}`}
              />
              <div className="sidebar-brand">
                <span>MedAi</span>
                <span>Connect</span>
              </div>
            </button>
          </>
        )}
        {isCollapese && (
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
          {!isCollapese && <span>My Care</span>}
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
          {!isCollapese && <span>Appointments</span>}
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
          {!isCollapese && <span>Notifications</span>}
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
          {!isCollapese && <span>Find a Doctor</span>}
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
