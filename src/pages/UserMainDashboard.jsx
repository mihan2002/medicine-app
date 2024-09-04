import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Content from "../components/Content";

const UserMainDashboard = () => {
  return (
    <div className="w-full h-[73.438rem] relative bg-aliceblue-100 overflow-hidden leading-[normal] tracking-[normal]">
      <Header group3="/group-3.svg" />
      <Sidebar />
      <Content />
    </div>
  );
};

export default UserMainDashboard;
