import { useEffect, useState, useContext } from "react";
import "./myCarePage.css";
import {
  FaClipboard,
  FaPills,
  FaQuestionCircle,
  FaEnvelope,
  FaSearch,
  FaVial,
} from "react-icons/fa";
import { GlobalContext } from "../../GlobalContext";
import axios from "axios";

const MyCarePage = () => {
  const { setIsLogInPage } = useContext(GlobalContext);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);



  useEffect(() => {
    setIsLogInPage(false);

    // Define the GraphQL query
    const query = `
      query Query() {
        getPatientByID() {
          firstName
          lastName
        }
      }
    `;

    // Make the API call with cookies
    axios({
      url: "http://localhost:4000/graphql",
      method: "POST",
      withCredentials: true, // Ensures cookies are sent with the request
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify({
        query 
      }),
    })
      .then((response) => {
        console.log("API Response:", response.data); 
        console.log( response);
        
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [setIsLogInPage]);

  // Handle loading, error, and data states
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="dashboard-container">
      <div className="main-content">
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
        {/* Example of displaying the returned data */}
        {data && data.data && data.data.getPatientByID && (
          <div>
            <h3>Patient Data</h3>
            <p>First Name: {data.data.getPatientByID.firstName}</p>
            <p>Last Name: {data.data.getPatientByID.lastName}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyCarePage;
