import "./DoctorProfile.css";
import Comment from "../../components/commentCard/CommentCard";
import DoctorInfo from "../../components/doctorInfoCard/DoctorInfo";
import { useEffect, useState } from "react";
import AppointmentBooking from "../../components/appointmentBooking/AppointmentBooking";
import Sidebar from "../../components/sidebar/Sidebar"; // Import Sidebar
import NavBar from "../../components/navBar/NavBar"; // Import NavBar
import { useParams } from "react-router-dom";
import { fetchGraphQL } from "../../api/GraphQl";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
const DoctorProfile = () => {
  const { id } = useParams();

  const [renderBooking, setRenderBooking] = useState(false);

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const query = `query GetDoctorById($getDoctorByIdId: ID!) {
  getDoctorById(id: $getDoctorByIdId) {
    firstName
    lastName
    imageUrl
    dateOfBirth
    gender
    email
    specialization
    contactNumber
    videoVisitHours
    about
    qualifications
    professionalBackground
    languagesSpoken
    professionStartedYear
    reviews {
      user {
        firstName
        lastName
      }
      comment
      createdAt
    }
  }
}`;
    const variables = {
      getDoctorByIdId: id, // Pass the patient ID
    };

    fetchGraphQL(query, variables)
      .then((responseData) => {
        console.log(responseData.data.getDoctorById);
        if (responseData.data) {
          setData(responseData.data.getDoctorById);
          console.log(data);
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
  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(data.rating);
    const hasHalfStar = data.rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`full-${i}`} color="#FFC107" />);
    }
    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key="half" color="#FFC107" />);
    }
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FaRegStar key={`empty-${i}`} color="#FFC107" />);
    }

    return stars;
  };
  const bookAppointment = () => {
    setRenderBooking(true);
  };

  return (
    <div className="doctor-profile-page">
      <Sidebar active="Find a Doctor" />
      <div className="main-content">
        <NavBar
          userImageLink="/path-to-user-image.jpg"
          onProfileClick={() => console.log("Profile clicked")}
        />
        <div className="doctor-profile-container">
          <div className="doctor-info-card">
            <div className="doctor-header">
              <img
                src="https://via.placeholder.com/100" // Placeholder for doctor's image
                alt="Dr. John Doe"
                className="doctor-img"
              />
              <div className="doctor-details">
                <h2>{data.firstName + " " + data.lastName}</h2>
                <p className="specialty">{data.specialization}</p>
                <p className="experience">{data.professionStartedYear}</p>
                <div className="doctor-rating">
                  <span>{renderStars()}</span>
                </div>
              </div>
              {!renderBooking && (
                <button className="appointment-btn" onClick={bookAppointment}>
                  Book an Appointment
                </button>
              )}
            </div>

            <hr className="divider" />

            {!renderBooking && (
              <>
                <DoctorInfo />
                <div className="reviews-section">
                  <h3>Reviews</h3>
                  {Array.isArray(data.reviews) && data.reviews.length > 0 ? (
                    data.reviews.map((review, index) => (
                      <Comment
                        key={index}
                        reviewerImage="https://via.placeholder.com/40"
                        reviewerName={`${review.user.firstName} ${review.user.lastName}`}
                        reviewDate={new Date(
                          parseInt(review.createdAt)
                        ).toLocaleDateString()}
                        reviewText={review.comment}
                      />
                    ))
                  ) : (
                    <p>No reviews yet.</p>
                  )}
                </div>
              </>
            )}
            {renderBooking && <AppointmentBooking />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;
