
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import './DoctorCard.css'; // Assuming you will create a CSS file for styling

const DoctorCard = () => {
  // Dummy data; you can replace this with props or state
  const doctor = {
    name: 'Dr. Jane Doe',
    specialty: 'Specialist - Cardiology',
    rating: 3.8,
    reviews: 224,
    image: 'https://via.placeholder.com/80', // Replace with actual image URL
  };

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

  return (
    <div className="doctor-card">
      <img src={doctor.image} alt={doctor.name} className="doctor-image" />
      <h3 className="doctor-name">{doctor.name}</h3>
      <p className="doctor-specialty">{doctor.specialty}</p>
      <div className="doctor-rating">
        {renderStars()}
        <span className="rating-value">{doctor.rating}</span>
        <span className="review-count">{doctor.reviews} reviews</span>
      </div>
      <button className="view-button">View</button>
    </div>
  );
};

export default DoctorCard;
