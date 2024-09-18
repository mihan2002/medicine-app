import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import "./SignUpForm.css";

const SignUpForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const signUpData = {
      firstName,
      lastName,
      email,
      phoneNumber,
      password,
      dob,
      gender,
    };

    try {
      const response = await fetch(import.meta.env.VITE_API_SIGNUP_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(signUpData),
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

        console.log("Sign-up successful!", data);
      } else {
        const errorData = await response.json();
        setErrorMessage(
          errorData.message || "Sign-up failed. Please check your details."
        );
      }
    } catch (error) {
      console.error("Error during sign-up:", error);
      setErrorMessage("An error occurred. Please try again.");
    }
  };

  return (
    <div className="form-container">
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder="Enter your first name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Enter your last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
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
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            placeholder="Enter your phone number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
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
        <div className="form-group">
          <label htmlFor="dob">Date of Birth:</label>
          <input
            type="date"
            id="dob"
            name="dob"
            placeholder="DD / MM / YY"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="gender">Gender:</label>
          <select
            id="gender"
            name="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            required
          >
            <option value="" disabled>
              Select...
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <button className="sign-up-button" type="submit">
          Sign Up
        </button>
        <p>Or do it via other accounts</p>
        <a href="google-authlink" className="google-button">
          <img src="src/assets/googlelogo.png" alt="google-logo" />
        </a>

        <p>
          Already have an account?
          <a href="/login" className="custom-link">
            <b>Sign In</b>
          </a>
        </p>
      </form>
    </div>
  );
};

export default SignUpForm;
