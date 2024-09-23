import NotificationCard from "../../components/notificationCard/NotificationCard"; // Import NotificationCard
import "./NotificationsPage.css"; // Custom CSS for this page
import Sidebar from "../../components/sidebar/Sidebar";
import NavBar from "../../components/navBar/NavBar";

const NotificationsPage = () => {
  

  return (
    <div className="notifications-container">
      <Sidebar active="Notifications"  />
      <div className="main-content">
        <NavBar
          userImageLink="/path-to-user-image.jpg"
          onProfileClick={() => console.log("Profile clicked")}
          
        />
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
