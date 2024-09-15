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

    const loginData = { email, password };

    try {
      const response = await fetch(import.meta.env.VITE_API_LOGIN_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);

        Cookies.set("access_token", data.accessToken, {
          secure: true, // Should be true in production
          sameSite: "Strict",
          expires: 1 / 48, // 30 minutes expiry
        });

        Cookies.set("refresh_token", data.refreshToken, {
          secure: true, // Should be true in production
          sameSite: "Strict",
          expires: 7, // 7 days expiry
        });
       
        navigate("/");

        console.log("Login successful!", data);
      } else {
        const errorData = await response.json();
        setErrorMessage(
          errorData.message || "Login failed. Please check your credentials."
        );
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
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
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
        <p><a href="" className="custom-link">Forgot Password?</a></p>
        <button className="login-button" type="submit">
          Login
        </button>
        <p>Or do it via other accounts</p>
        <a href="google-authlink" className="google-button">
        <img src="src/assets/googlelogo.png" alt="google-logo" />
        </a>
        
        <p>
          Don't have an account? <a href="#3" className="custom-link"><b>Sign Up</b></a>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
