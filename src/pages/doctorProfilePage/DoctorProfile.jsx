import "./DoctorProfile.css";
import Comment from "../../components/commentCard/CommentCard";
import DoctorInfo from "../../components/doctorInfoCard/DoctorInfo";
import { useState } from "react";
import AppointmentBooking from "../../components/appointmentBooking/AppointmentBooking";

const DoctorProfile = () => {
  const [renderBooking, setRenderBooking] = useState(false);

  const bookAppointment = () => {
    setRenderBooking(true);
  };

  return (
    <div className="doctor-profile-container">
      <div className="doctor-info-card">
        <div className="doctor-header">
          <img
            src="https://via.placeholder.com/100" // Placeholder for doctor's image
            alt="Dr. John Doe"
            className="doctor-img"
          />
          <div className="doctor-details">
            <h2>Dr. John Doe</h2>
            <p className="specialty">Specialty: Cardiology</p>
            <p className="experience">Experience: 15 years</p>
            <div className="doctor-rating">
              <span>⭐⭐⭐⭐☆</span> <span>3.8</span>
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
            <DoctorInfo />{" "}
            <div className="reviews-section">
              <h3>Reviews</h3>
              <Comment
                reviewerImage="https://via.placeholder.com/40"
                reviewerName="Peter Briers"
                reviewDate="3 days ago"
                reviewText="Dr. John Doe provided excellent care during my recent consultation. He was attentive, thorough, and answered all my questions with patience. I highly recommend!"
              />
              <Comment
                reviewerImage="https://via.placeholder.com/40"
                reviewerName="Anne Johnson"
                reviewDate="10 days ago"
                reviewText="Dr. John Doe was fantastic during our recent video consultation. He was prompt, professional, and made me feel at ease. I'm very satisfied with his service!"
              />
            </div>
          </>
        )}
        {renderBooking && <AppointmentBooking />}
      </div>
    </div>
  );
};

export default DoctorProfile;
