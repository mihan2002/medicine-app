import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";
import { refreshToken } from "../auth/authService";

const AuthGuard = ({ children }) => {
  const [loading, setLoading] = useState(true); // State to manage loading
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      const access_token = Cookies.get("access_token");
      const refresh_token = Cookies.get("refresh_token");
      console.log(access_token);
      console.log(refresh_token);

      if (!access_token && refresh_token) {
        try {
          await refreshToken();
        } catch (error) {
          console.error("Failed to refresh token", error);
        }
      }

      if (Cookies.get("access_token")) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }

      setLoading(false);
    };

    checkAuth();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // You can replace this with a loading spinner
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default AuthGuard;
