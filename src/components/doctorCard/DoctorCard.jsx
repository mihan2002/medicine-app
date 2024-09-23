import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
import "./DoctorCard.css"; // Assuming you will create a CSS file for styling

const DoctorCard = ({ doctor }) => {
  const navigate = useNavigate(); // Initialize the navigate hook

  // Function to render stars based on rating
  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(doctor.rating);
    const hasHalfStar = doctor.rating % 1 !== 0;
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

  // Function to handle navigation to doctor profile
  const handleViewProfile = () => {
    navigate(`/doctorProfile/${doctor.id}`); // Navigate to doctorProfile and pass the doctor ID
  };

  return (
    <div className="doctor-card">
      <img src={doctor.image} alt={doctor.firstName} className="doctor-image" />
      <h3 className="doctor-name">{doctor.firstName} {doctor.lastName}</h3>
      <p className="doctor-specialty">{doctor.specialty}</p>
      <div className="doctor-rating">
        {renderStars()}
        <span className="rating-value">{doctor.rating}</span>
        <span className="review-count">{doctor.reviews} reviews</span>
      </div>
      <button className="view-button" onClick={handleViewProfile}>View</button> {/* Call handleViewProfile on button click */}
    </div>
  );
};

export default DoctorCard;
