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
import { Link } from "react-router-dom";

const MyCarePage = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const patientId = "123456";

  useEffect(() => {
    const query = `
      query Query{
        getPatientByID {
          firstName
          lastName
          gender
        }
      }
    `;

    const variables = {
      getPatientByIdId: patientId,
    };

    fetchGraphQL(query, variables)
      .then((responseData) => {
        setData(responseData);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [patientId]);

  if (loading || error) {
    return <div>Loading...</div>;
  }

  return (
    <div className="dashboard-container">
      <Sidebar active="My Care" />
      <div className="main-content">
        <NavBar
          userImageLink="/path-to-user-image.jpg"
          onProfileClick={() => console.log("Profile clicked")}
        />
        <div className="grid-container">
          <Link to="/appointment-manager">
            <div className="grid-item">
              <FaClipboard className="grid-icon" />
              <span>Appointment Manager</span>
            </div>
          </Link>

          <Link to="/prescriptions">
            <div className="grid-item">
              <FaPills className="grid-icon" />
              <span>Prescriptions</span>
            </div>
          </Link>

          <Link to="/ask-a-doctor">
            <div className="grid-item">
              <FaQuestionCircle className="grid-icon" />
              <span>Ask a Doctor</span>
            </div>
          </Link>

          <Link to="/messages">
            <div className="grid-item">
              <FaEnvelope className="grid-icon" />
              <span>Messages</span>
            </div>
          </Link>

          <Link to="/find-doctor">
            <div className="grid-item">
              <FaSearch className="grid-icon" />
              <span>Find a Doctor</span>
            </div>
          </Link>

          <Link to="/lab-results">
            <div className="grid-item">
              <FaVial className="grid-icon" />
              <span>Lab Results</span>
            </div>
          </Link>
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
