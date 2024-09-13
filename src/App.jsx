import { Routes, Route, Navigate } from "react-router-dom";
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
import UserLogin from "./pages/userLoginPage/userLogin";
import useTokenRefresh from "./auth/useTokenRefresh";

function App() {
  const { isLogInPage } = useContext(GlobalContext);
  const { globalVariable } = useContext(GlobalContext);
  const { isAuthenticated, loading } = useTokenRefresh();
  console.log("isAuthenticated :" + isAuthenticated);
  console.log("loading :" + loading);
  if (loading) {
    // Optionally render a loading spinner or message
    return <div>Loading...</div>;
  }

  return (
    <div className="app-container">
      {!isLogInPage && <Sidebar />}
      <div className="main-content">
        {!isLogInPage && <NavBar isSidebarCollapsed={globalVariable} />}

        <Routes>
          {/* Redirect to login if not authenticated */}
          {!isAuthenticated && (
            <Route path="*" element={<Navigate to="/login" />} />
          )}
          {isAuthenticated && (
            <Route path="*" element={<Navigate to="/my-care" />} />
          )}

          {isAuthenticated && (
            <>
              <Route path="/my-care" element={<MyCarePage />} />
              <Route path="/appointments" element={<AppointmentsPage />} />
              <Route path="/notifications" element={<NotificationsPage />} />
              <Route path="/find-doctor" element={<FindDoctorPage />} />
            </>
          )}

          {/* Public Routes */}
          <Route path="/login" element={<UserLogin />} />
          <Route path="/test" element={<DoctorProfile />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
