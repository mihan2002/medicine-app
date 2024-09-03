import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Content from "../components/Content";
import "./UserMainDashboard.css";

const UserMainDashboard = () => {
  return (
    <div className="user-main-dashboard">
      <Header group3="/group-3.svg" />
      <Sidebar />
      <Content />
    </div>
  );
};

export default UserMainDashboard;
