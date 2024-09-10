import { Routes, Route } from "react-router-dom"; // Import Routes and Route
import FindDoctorPage from "./pages/findDoctorPage/FindDoctorPage";
import MyCarePage from "./pages/myCarePage/myCarePage";
import AppointmentsPage from "./pages/appointmentsPage/AppointmentsPage";
import NotificationsPage from "./pages/notificationsPage/NotificationsPage";
import Sidebar from "./components/sidebar/Sidebar";
import NavBar from "./components/navBar/NavBar";
import { GlobalContext } from "./GlobalContext";
import { useContext } from "react";
import "./App.css";
import DoctorProfile from "./pages/doctorProfilePage/DoctorProfile";


function App() {
  const { globalVariable } = useContext(GlobalContext);
  
      
  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        <NavBar isSidebarCollapsed={globalVariable}/>
        <Routes>
        <Route path="/test" element={<DoctorProfile />} />
          <Route path="/my-care" element={<MyCarePage />} />
          <Route path="/appointments" element={<AppointmentsPage />} />
          <Route path="/notifications" element={<NotificationsPage />} />
          <Route path="/find-doctor" element={<FindDoctorPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
