import { Routes, Route, Navigate } from "react-router-dom";
import FindDoctorPage from "./pages/findDoctorPage/FindDoctorPage";
import MyCarePage from "./pages/myCarePage/myCarePage";
import AppointmentsPage from "./pages/appointmentsPage/AppointmentsPage";
import NotificationsPage from "./pages/notificationsPage/NotificationsPage";
import "./App.css";
import DoctorProfile from "./pages/doctorProfilePage/DoctorProfile";
import UserLogin from "./pages/userLoginPage/userLogin";

import useTokenRefresh from "./auth/useTokenRefresh";
import UserProfile from "./pages/userProfilePage/UserProfile";
import AuthGuard from "./auth/authGuard"; // Import the AuthGuard
import UserSignUpPage from "./pages/userSignUpPage/UserSignUpPage";

function App() {
  useTokenRefresh();

  return (
    <div className="app-container">
      <div className="main-content">
        <Routes>
          {/* Public route for login */}
          <Route path="/login" element={<UserLogin />} />
          <Route path="/signup" element={<UserSignUpPage />} />
          <Route path="/test" element={<UserProfile />} />
          <Route path="/test2" element={<DoctorProfile />} />

          {/* Protected routes wrapped in AuthGuard */}
          <Route
            path="*"
            element={
              <AuthGuard>
                <Navigate to="/my-care" />
              </AuthGuard>
            }
          />
          <Route
            path="/my-care"
            element={
              <AuthGuard>
                <MyCarePage />
              </AuthGuard>
            }
          />
          <Route
            path="/appointments"
            element={
              <AuthGuard>
                <AppointmentsPage />
              </AuthGuard>
            }
          />
          <Route
            path="/notifications"
            element={
              <AuthGuard>
                <NotificationsPage />
              </AuthGuard>
            }
          />
          <Route
            path="/find-doctor"
            element={
              <AuthGuard>
                <FindDoctorPage />
              </AuthGuard>
            }
          />
          {/* Unprotected route example */}
          <Route path="/test" element={<DoctorProfile />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
