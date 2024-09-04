import React from "react";
import "./App.css";
import "./output.css";

import UserCreateAccount from "./pages/UserCreateAccount";
import UserDoctorProfile from "./pages/UserDoctorProfile";
import UserDoctosList from "./pages/UserDoctosList";
import UserLogin from "./pages/UserLogin";
import UserMainDashboard from "./pages/UserMainDashboard";

function App() {
  return (
    <div className="App">
      <UserCreateAccount />
    </div>
  );
}

export default App;
