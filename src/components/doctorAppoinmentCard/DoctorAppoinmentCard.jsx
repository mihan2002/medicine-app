
import "./DoctorAppoinmentCard.css"; // Assuming you want to separate its styles

const DoctorAppointmentCard = ({ doctorName, appointmentDate, appointmentTime, onJoinMeeting }) => {
  return (
    <div className="appointment-card">
      <div className="appointment-details">
        <p>
          <strong>{doctorName}</strong>
        </p>
        <p>Date: {appointmentDate}</p>
        <p>Time: {appointmentTime}</p>
      </div>
      <button className="join-meeting-btn" onClick={onJoinMeeting}>
        Join Meeting
      </button>
    </div>
  );
};

export default DoctorAppointmentCard;
