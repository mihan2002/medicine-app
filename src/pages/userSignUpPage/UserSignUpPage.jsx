import "./UserSignUpPage.css";
import SignUpForm from "../../components/signUpForm/SignUpForm";

const UserSignUpPage = () => {
  return (
    <div className="container">
      <div className="aside">
        <img src="src\assets\sidenav-bg.png" alt="" />
        <div className="logo">logo</div>
        <div className="text-overlay">
          <h2>
            Welcome to MedAI <br></br>Connect
          </h2>
          <p>Breaking Barriers in Healthcare</p>
        </div>
      </div>
      <div className="form-container">
        <div className="welcome-title">
          <h2>Welcome Back!</h2>
          <p>Please enter your details</p>
        </div>
        <div className="form">
          <SignUpForm></SignUpForm>
        </div>
      </div>
    </div>
  );
};

export default UserSignUpPage;
