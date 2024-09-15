import { useEffect } from "react";
import Cookies from "js-cookie";
import { refreshToken } from "./authService";

const useTokenRefresh = () => {
  useEffect(() => {
    const checkToken = async () => {
      const accessToken = Cookies.get("access_token");

      if (!accessToken) {
        await refreshToken();
      }
    };

    checkToken();
  }, []);
};

export default useTokenRefresh;
