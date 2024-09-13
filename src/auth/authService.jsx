import Cookies from "js-cookie";

export const refreshToken = async () => {
  try {
    // Fetch the refresh token from the cookie or any other storage
    const storedRefreshToken = Cookies.get("refresh_token");

    if (!storedRefreshToken) {
      throw new Error("No refresh token found.");
    }
    console.log(import.meta.env.VITE_API_REFRESH_TOKEN_URL);

    // Make the request to the backend refresh endpoint
    const response = await fetch(import.meta.env.VITE_API_REFRESH_TOKEN_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include", 
      body: JSON.stringify({ refreshToken: storedRefreshToken }), // Send refresh token in body
    });
    console.log(response);

    
    if (response.ok) {
      const data = await response.json();

      // Store the new access token in cookies
      Cookies.set("access_token", data.accessToken, {
        secure: true, // Use true only in production
        sameSite: "Strict", // 'None' if using cross-site cookies
        expires: 1 / 48, // 30 minutes expiry for access token
      });

      // Optionally, update the refresh token if provided
      if (data.refreshToken) {
        Cookies.set("refresh_token", data.refreshToken, {
          secure: true,
          sameSite: "Strict",
          expires: 7, // 7 days expiry for refresh token
        });
      }

      console.log("Access token refreshed successfully!");
      return data.accessToken; // Return the new access token for immediate use
    } else {
      const errorData = await response.json();
      console.error(
        "Failed to refresh token:",
        errorData.message || response.statusText
      );
      throw new Error(errorData.message || "Failed to refresh token");
    }
  } catch (error) {
    console.error("Error refreshing token:", error.message || error);
    return null; // Return null if the refresh fails
  }
};
