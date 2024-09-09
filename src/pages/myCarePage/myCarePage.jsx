import NavBar from "../../components/navBar/NavBar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./myCarePage.css"; // Create this CSS file for styling
import { FaClipboard, FaPills, FaQuestionCircle, FaEnvelope, FaSearch, FaVial } from "react-icons/fa"; // Import icons from react-icons
 // Create this CSS file for styling

const MyCarePage = () => {
  const userImageLink = "https://via.placeholder.com/40"; // Replace with actual image URL

  const handleProfileClick = () => {
    console.log("Profile clicked");
  };

  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="main-content">
        <NavBar userImageLink={userImageLink} onProfileClick={handleProfileClick} />
        
        <div className="grid-container">
          <div className="grid-item">
            <FaClipboard className="grid-icon" />
            <span>Appointment Manager</span>
          </div>
          <div className="grid-item">
            <FaPills className="grid-icon" />
            <span>Prescriptions</span>
          </div>
          <div className="grid-item">
            <FaQuestionCircle className="grid-icon" />
            <span>Ask a Doctor</span>
          </div>
          <div className="grid-item">
            <FaEnvelope className="grid-icon" />
            <span>Messages</span>
          </div>
          <div className="grid-item">
            <FaSearch className="grid-icon" />
            <span>Find a Doctor</span>
          </div>
          <div className="grid-item">
            <FaVial className="grid-icon" />
            <span>Lab Results</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCarePage;
