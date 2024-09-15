import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const AuthGuard = ({ children }) => {
  const isAuthenticated = Cookies.get("refresh_token"); // Replace with your actual authentication logic

  if (!isAuthenticated) {
    return <Navigate to="/login" />; // Redirect to login if not authenticated
  }

  return children;
};

export default AuthGuard;
