import DoctorCard from "../../components/doctorCard/DoctorCard";
import { FaFilter } from "react-icons/fa"; 
import Sidebar from "../../components/sidebar/Sidebar";
import NavBar from "../../components/navBar/NavBar";

import "./FindDoctorPage.css"; 

const FindDoctorPage = () => {


  return (
    <div className="find-doctor-page">
      <Sidebar active="Find a Doctor"   />
      <div className="main-content">
        <NavBar
          userImageLink="/path-to-user-image.jpg"
          onProfileClick={() => console.log("Profile clicked")}
           
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
