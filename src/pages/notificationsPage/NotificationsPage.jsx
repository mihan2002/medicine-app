
import NavBar from "../../components/navBar/NavBar";
import Sidebar from "../../components/sidebar/Sidebar";
import NotificationCard from "../../components/notificationCard/NotificationCard"; // Import NotificationCard
import "./NotificationsPage.css"; // Custom CSS for this page

const NotificationsPage = () => {
  const userImageLink = "https://via.placeholder.com/40"; // Replace with actual image URL

  const handleProfileClick = () => {
    console.log("Profile clicked");
  };

  return (
    <div className="notifications-container">
      <Sidebar active="Notifications"/>
      <div className="main-content">
        <NavBar userImageLink={userImageLink} onProfileClick={handleProfileClick} />
        <div className="notification-container">
          <div className="notifications-content">
            <h3 className="notifications-title">Notifications</h3>

            <NotificationCard
              title="Change the password"
              description="Please change the current password to a new password."
            />

            <NotificationCard
              title="Complete your account personal data"
              description="Please complete your profile."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationsPage;
