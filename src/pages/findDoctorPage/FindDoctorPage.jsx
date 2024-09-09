import DoctorCard from "../../components/doctorCard/DoctorCard";
import NavBar from "../../components/navBar/NavBar";
import Sidebar from "../../components/sidebar/Sidebar";
import { FaFilter } from "react-icons/fa"; // Import the filter icon

import "./FindDoctorPage.css"; // CSS for main page layout

const FindDoctorPage = () => {
  const userImageLink = "https://via.placeholder.com/40";

  const handleProfileClick = () => {
    console.log("Profile clicked");
  };

  return (
    <div className="find-doctor-page">
      <Sidebar />
      <div className="main-content">
        <NavBar
          userImageLink={userImageLink}
          onProfileClick={handleProfileClick}
        />
        <div className="doctor-list-header">
          <h2>
            Connect With Our Top-Rated Doctors For Personalized Medical Care.
          </h2>
        </div>
        <div className="inner-main-content">
        <div className="search-and-filter">
          <input type="text" className="search-input" placeholder="Search" />
          <button className="filter-btn">
            <FaFilter /> {/* Display the filter icon */}
          </button>
        </div>
        <div className="doctor-cards-container">
          <DoctorCard />
          <DoctorCard />
          <DoctorCard />
          <DoctorCard />
          <DoctorCard />
          <DoctorCard />
        </div>
        </div>
      </div>
    </div>
  );
};

export default FindDoctorPage;
