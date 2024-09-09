import { Routes, Route } from "react-router-dom"; // Import Routes and Route
import Home from "./Home"; // Example page component
import FindDoctorPage from "./pages/findDoctorPage/FindDoctorPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} /> {/* Route for Home page */}
      <Route path="/find-doctor" element={<FindDoctorPage />} />{" "}
      {/* Route for Home page */}
    </Routes>
  );
}

export default App;
