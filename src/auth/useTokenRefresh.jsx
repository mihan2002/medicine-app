import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { refreshToken } from "./authService";

const useTokenRefresh = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkToken = async () => {
      const accessToken = Cookies.get("access_token");
      
      
      if (!accessToken) {
      
        const newAccessToken = await refreshToken();

        if (!newAccessToken) {
          setIsAuthenticated(false);
          setLoading(false);
        } else {
          setIsAuthenticated(true);
          setLoading(false);
        }
      } else {
        setIsAuthenticated(true);
        setLoading(false);
      }
    };

    checkToken();
  }, []);

  return { isAuthenticated, loading ,setIsAuthenticated};
};

export default useTokenRefresh;
