import axios from "axios";
import { refreshToken } from "../auth/authService";

export const fetchGraphQL = async (query, variables) => {
  try {
    const response = await axios({
      url: "http://localhost:4000/graphql",
      method: "POST",
      withCredentials: true, // Ensures cookies are sent with the request
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify({
        query,
        variables,
      }),
    });

    return response.data; // Return the API response data
  } catch (error) {
    console.error("GraphQL API Error:", error);
    refreshToken();
    window.location.reload();
    throw error; // Throw error for the caller to handle
  }
};
