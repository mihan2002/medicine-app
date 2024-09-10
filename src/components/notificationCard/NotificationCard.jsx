
import "./NotificationCard.css"; // Separate CSS file for styling

const NotificationCard = ({ title, description }) => {
  return (
    <div className="notification-card">
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
};

export default NotificationCard;
