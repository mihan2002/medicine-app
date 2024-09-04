import FrameComponent from "./FrameComponent";
import PropTypes from "prop-types";
import "./ContentContainer.css";

const ContentContainer = ({ className = "" }) => {
  return (
    <div className={`content-container ${className}`}>
      <div className="form-container">
        <div className="title-parent">
          <h1 className="title-">Welcome back!</h1>
          <div className="title-1">Please enter your details</div>
        </div>
      </div>
      <form className="form-fields">
        <div className="first-form-field">
          <div className="form-title">{`E-mail `}</div>
          <input className="input" placeholder="Type your e-mail" type="text" />
        </div>
        <div className="first-form-field">
          <div className="form-title">Password</div>
          <input
            className="input"
            placeholder="Type your password"
            type="text"
          />
          <div className="form-help-text10">Forgot Password?</div>
        </div>
        <button className="button2">
          <b className="label2">Sign In</b>
        </button>
        <FrameComponent />
      </form>
      <div className="label-wrapper">
        <div className="label3">
          <span>Don’t have an account?</span>
          <span className="span">{` `}</span>
          <span className="sign-up">Sign Up</span>
        </div>
      </div>
    </div>
  );
};

ContentContainer.propTypes = {
  className: PropTypes.string,
};

export default ContentContainer;
