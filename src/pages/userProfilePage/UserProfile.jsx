import { useState, useEffect } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import NavBar from "../../components/navBar/NavBar";
import "./UserProfile.css";
import { fetchGraphQL } from "../../api/GraphQl";

const UserProfile = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const patientId = "123456";
  useEffect(() => {
    const query = `
      query Query {
        getPatientByID {
          firstName
          lastName
          dateOfBirth
          gender
          height
          weight
          email
          ethnicity
          languagesSpoken
        }
      }
    `;

    const variables = {
      getPatientByIdId: patientId,
    };

    fetchGraphQL(query, variables)
      .then((responseData) => {
        setUserData(responseData.data.getPatientByID);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [patientId]);

  console.log(userData);
  

  const initialProfile = {
    firstName: "John",
    lastName: "Doe",
    dateOfBirth: "1990-01-01",
    gender: "Male",
    height: "180 cm",
    weight: "75 kg",
    ethnicity: "Caucasian",
    languages: ["English", "Spanish"],
    email: "johndoe@example.com",
    password: "********",
  };

  // Set up state to handle edit mode and profile data
  const [userProfile, setUserProfile] = useState(initialProfile);
  const [isEditing, setIsEditing] = useState(false);

  // Handle input changes in the form
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserProfile({ ...userProfile, [name]: value });
  };

  // Toggle between edit and view mode
  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="user-profile-page">
      <Sidebar active="Find a Doctor" />
      <div className="main-content">
        <NavBar
          userImageLink="/path-to-user-image.jpg"
          onProfileClick={() => console.log("Profile clicked")}
        />
        <div className="inner-main-content">
          <div className="profile-container">
            <h2>Your Details</h2>

            {/* First Name and Last Name */}
            <div className="info-row">
              <div className="info-box">
                <label>First Name</label>
                {isEditing ? (
                  <input
                    type="text"
                    name="firstName"
                    value={userProfile.firstName}
                    onChange={handleChange}
                  />
                ) : (
                  <p>{userProfile.firstName}</p>
                )}
              </div>
              <div className="info-box">
                <label>Last Name</label>
                {isEditing ? (
                  <input
                    type="text"
                    name="lastName"
                    value={userProfile.lastName}
                    onChange={handleChange}
                  />
                ) : (
                  <p>{userProfile.lastName}</p>
                )}
              </div>
            </div>

            {/* Date of Birth and Gender */}
            <div className="info-row">
              <div className="info-box">
                <label>Date of Birth</label>
                {isEditing ? (
                  <input
                    type="date"
                    name="dateOfBirth"
                    value={userProfile.dateOfBirth}
                    onChange={handleChange}
                  />
                ) : (
                  <p>{userProfile.dateOfBirth}</p>
                )}
              </div>
              <div className="info-box">
                <label>Gender</label>
                {isEditing ? (
                  <select
                    name="gender"
                    value={userProfile.gender}
                    onChange={handleChange}
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                ) : (
                  <p>{userProfile.gender}</p>
                )}
              </div>
            </div>

            {/* Height and Weight */}
            <div className="info-row">
              <div className="info-box">
                <label>Height</label>
                {isEditing ? (
                  <input
                    type="text"
                    name="height"
                    value={userProfile.height}
                    onChange={handleChange}
                  />
                ) : (
                  <p>{userProfile.height}</p>
                )}
              </div>
              <div className="info-box">
                <label>Weight</label>
                {isEditing ? (
                  <input
                    type="text"
                    name="weight"
                    value={userProfile.weight}
                    onChange={handleChange}
                  />
                ) : (
                  <p>{userProfile.weight}</p>
                )}
              </div>
            </div>

            {/* Email and Password */}
            <div className="info-row">
              <div className="info-box">
                <label>Email</label>
                {isEditing ? (
                  <input
                    type="email"
                    name="email"
                    value={userProfile.email}
                    onChange={handleChange}
                  />
                ) : (
                  <p>{userProfile.email}</p>
                )}
              </div>
              <div className="info-box">
                <label>Password</label>
                {isEditing ? (
                  <input
                    type="password"
                    name="password"
                    value={userProfile.password}
                    onChange={handleChange}
                  />
                ) : (
                  <p>{userProfile.password}</p>
                )}
              </div>
            </div>

            {/* Ethnicity */}
            <div className="info-box full-width">
              <label>Ethnicity</label>
              {isEditing ? (
                <input
                  type="text"
                  name="ethnicity"
                  value={userProfile.ethnicity}
                  onChange={handleChange}
                />
              ) : (
                <p>{userProfile.ethnicity}</p>
              )}
            </div>

            {/* Languages Spoken */}
            <div className="info-box full-width">
              <label>Languages Spoken</label>
              {isEditing ? (
                <input
                  type="text"
                  name="languages"
                  value={userProfile.languages.join(", ")}
                  onChange={handleChange}
                />
              ) : (
                <p>{userProfile.languages.join(", ")}</p>
              )}
            </div>

            {/* Edit/Save Button */}
            <div className="info-box full-width">
              <button className="edit-btn" onClick={handleEditClick}>
                {isEditing ? "Save" : "Edit Info"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
