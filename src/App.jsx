import { Routes, Route } from "react-router-dom"; // Import Routes and Route
import FindDoctorPage from "./pages/findDoctorPage/FindDoctorPage";
import MyCarePage from "./pages/myCarePage/myCarePage";
import AppointmentsPage from "./pages/appointmentsPage/AppointmentsPage";
import NotificationsPage from "./pages/notificationsPage/NotificationsPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MyCarePage />} /> 
      <Route path="/find-doctor" element={<FindDoctorPage />} />
      <Route path="/my-care" element={<MyCarePage />} />
      <Route path="/appointments" element={<AppointmentsPage />} />
      <Route path="/notifications" element={<NotificationsPage />} />
    </Routes>
  );
}

export default App;
