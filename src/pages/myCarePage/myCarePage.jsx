import { useEffect, useState } from "react";
import "./myCarePage.css";
import {
  FaClipboard,
  FaPills,
  FaQuestionCircle,
  FaEnvelope,
  FaSearch,
  FaVial,
} from "react-icons/fa";
import { fetchGraphQL } from "../../api/GraphQl";
import Sidebar from "../../components/sidebar/Sidebar";
import NavBar from "../../components/navBar/NavBar";

const MyCarePage = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Example patient ID (replace this with dynamic data)
  const patientId = "123456"; // Replace with actual patient ID or fetch from another source

  useEffect(() => {
    

    // Define the GraphQL query
    const query = `
      query GetPatientByID {
        getPatientByID {
          firstName
          lastName
          gender
        }
      }
    `;

    // Define the variables for the query
    const variables = {
      id: patientId, // Pass the patient ID
    };

    // Make the API call using the fetchGraphQL method
    fetchGraphQL(query, variables)
      .then((responseData) => {
        console.log("API Response:", responseData);
        setData(responseData);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error during API call:", error);
        setError(error);
        setLoading(false);
      });
  }, [ patientId]);

  // Handle loading, error, and data states
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="dashboard-container">
      <Sidebar active="My Care"   />
      <div className="main-content">
        <NavBar
          userImageLink="/path-to-user-image.jpg"
          onProfileClick={() => console.log("Profile clicked")}
           
        />
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
        {data && data.data && data.data.getPatientByID && (
          <div className="patient-info">
            <h3>Patient Data</h3>
            <p>First Name: {data.data.getPatientByID.firstName}</p>
            <p>Last Name: {data.data.getPatientByID.lastName}</p>
            <p>Gender: {data.data.getPatientByID.gender}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyCarePage;
