import "./PastAppoinmentCard.css";

const PastAppointmentCard = ({
  doctorName,
  appointmentDate,
  appointmentTime,
  status,
}) => {
  const statusClass =
    status === "Completed" ? "status-completed" : "status-cancelled";
  return (
    <div className="past-appointment-card">
      <div className="appointment-details">
        <p className="doctor-name">
          <strong>{doctorName}</strong>
        </p>
        <p className="appointment-date">
          <span className="icon">📅</span> Date: {appointmentDate}
        </p>
        <p className="appointment-time">
          <span className="icon">⏰</span> {appointmentTime}
        </p>
      </div>
      <div className={`appointment-status ${statusClass}`}>{status}</div>
    </div>
  );
};

export default PastAppointmentCard;
