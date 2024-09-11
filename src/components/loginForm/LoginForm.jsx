import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import "./LoginForm.css";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const loginData = {
      email,
      password,
    };
    console.log(JSON.stringify(loginData));

    try {
      const response = await fetch(import.meta.env.VITE_API_LOGIN_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });
      console.log(response);

      if (response.ok) {
        const data = await response.json();
        // Save token (or any other data) to cookies
        Cookies.set("authToken", data.token, { expires: 7 }); 

        // Navigate to another page
        navigate("/my-care");

        console.log("Login successful!", data);
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.message || "Login failed");
      }
    } catch (error) {
      console.error("Error during login:", error);
      setErrorMessage("An error occurred. Please try again.");
    }
  };

  return (
    <div className="form-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Enter your username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <p>Forgot Password?</p>
        <button className="login-button" type="submit">
          Login
        </button>
        <p>Or do it via other accounts</p>
        <img src="src/assets/googlelogo.png" alt="google-logo" />
        <p>
          Don't have an account? <b>Sign Up</b>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
