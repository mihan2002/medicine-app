import { Routes, Route } from "react-router-dom"; // Import Routes and Route
import Home from "./Home"; // Example page component
import FindDoctorPage from "./pages/findDoctorPage/FindDoctorPage";
import MyCarePage from "./pages/myCarePage/myCarePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} /> 
      <Route path="/find-doctor" element={<FindDoctorPage />} />
      <Route path="/my-care" element={<MyCarePage />} />
      <Route path="/appointments" element={<MyCarePage />} />
      <Route path="/notifications" element={<MyCarePage />} />
    </Routes>
  );
}

export default App;
