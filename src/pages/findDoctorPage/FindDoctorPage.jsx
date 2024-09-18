import DoctorCard from "../../components/doctorCard/DoctorCard";
import { FaFilter } from "react-icons/fa";
import Sidebar from "../../components/sidebar/Sidebar";
import NavBar from "../../components/navBar/NavBar";
import { fetchGraphQL } from "../../api/GraphQl";
import "./FindDoctorPage.css";
import { useEffect, useState } from "react";

const FindDoctorPage = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const query = `query GetAllDoctors {
  getAllDoctors {
    id
    firstName
    lastName
    specialization
    rating
    reviews {
      id
    }
    imageUrl
  }
}`;

    fetchGraphQL(query)
      .then((responseData) => {
        if (responseData.data) {
          setData(responseData.data.getAllDoctors);
        } else {
          throw new Error("No data returned from API");
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error during API call:", error);
        setError(error);
        setLoading(false);
      });
  }, []);

  // If data is not available yet, do not try to loop over it
  if (loading) {
    return <div>Loading...</div>; // Render a loading message while the data is being fetched
  }

  if (error) {
    return <div>Error: {error.message}</div>; // Render the error message if there is an error
  }

  if (!data || data.length === 0) {
    return <div>No doctors found</div>; // Handle case when no data is found
  }

  return (
    <div className="find-doctor-page">
      <Sidebar active="Find a Doctor" />
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
            {data.map((doctor, index) => (
              <DoctorCard
                key={index} // Always provide a unique key
                doctor={{
                  id:doctor.id,
                  firstName: `${doctor.firstName}`,
                  lastName: `${doctor.lastName}`,
                  specialty: doctor.specialization,
                  rating: doctor.rating,
                  reviews: doctor.reviews.length, // Assuming reviews is an array
                  image: doctor.imageUrl, // Use actual image URL
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindDoctorPage;
