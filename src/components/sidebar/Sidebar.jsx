import { useState } from "react";
import { FaHome, FaClipboardList, FaBell, FaSearch } from "react-icons/fa";
import "./Sidebar.css";
import logo from "./logo.png"; // Import your logo here

const Sidebar = () => {
  // State to manage active menu item
  const [activeItem, setActiveItem] = useState("My Care");

  // Function to handle item click and set active item
  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
  };

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <img src={logo} alt="Logo" className="sidebar-logo" />
        <div className="sidebar-brand">
          <span>MedAi</span>
          <span>Connect</span>
        </div>
      </div>
      <ul className="sidebar-menu">
        <li
          className={`menu-item ${activeItem === "My Care" ? "active" : ""}`}
          onClick={() => handleItemClick("My Care")}
        >
          <FaHome
            size={20}
            color={activeItem === "My Care" ? "#1A73E8" : "#B0B0B0"}
          />
          <span>My Care</span>
        </li>
        <li
          className={`menu-item ${
            activeItem === "Appointments" ? "active" : ""
          }`}
          onClick={() => handleItemClick("Appointments")}
        >
          <FaClipboardList
            size={20}
            color={activeItem === "Appointments" ? "#1A73E8" : "#B0B0B0"}
          />
          <span>Appointments</span>
        </li>
        <li
          className={`menu-item ${
            activeItem === "Notifications" ? "active" : ""
          }`}
          onClick={() => handleItemClick("Notifications")}
        >
          <FaBell
            size={20}
            color={activeItem === "Notifications" ? "#1A73E8" : "#B0B0B0"}
          />
          <span>Notifications</span>
        </li>
        <li
          className={`menu-item ${
            activeItem === "Find a Doctor" ? "active" : ""
          }`}
          onClick={() => handleItemClick("Find a Doctor")}
        >
          <FaSearch
            size={20}
            color={activeItem === "Find a Doctor" ? "#1A73E8" : "#B0B0B0"}
          />
          <span>Find a Doctor</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
