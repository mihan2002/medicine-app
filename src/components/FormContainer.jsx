import FirstNameInput from "./FirstNameInput";
import InputField from "./InputField";
import Select from "./Select";
import FrameComponent from "./FrameComponent";
import PropTypes from "prop-types";
import "./FormContainer.css";

const FormContainer = ({ className = "" }) => {
  return (
    <div className={`form-container1 ${className}`}>
      <div className="form-header">
        <h1 className="title-2">Create your account</h1>
        <div className="title-3">It’s free and easy</div>
      </div>
      <form className="d-o-b-field">
        <div className="input-fields">
          <div className="name-fields">
            <div className="first-name-field">
              <FirstNameInput
                formTitle="Full name"
                firstNameHint="Enter your full name"
              />
              <div className="form-title3">E-mail</div>
            </div>
            <FirstNameInput
              propAlignSelf="unset"
              propWidth="13.625rem"
              propMarginLeft="-13.063rem"
              formTitle="Last name"
              firstNameHint="Enter your last name"
              propWidth1="10.875rem"
            />
          </div>
          <input
            className="input3"
            placeholder="Enter your e-mail"
            type="text"
          />
        </div>
        <div className="confirm-password-field">
          <div className="form-title3">Phone number</div>
          <input
            className="input4"
            placeholder="Enter your phone number"
            type="text"
          />
        </div>
        <div className="confirm-password-field">
          <div className="form-title3">Password</div>
          <input
            className="input4"
            placeholder="Enter your password"
            type="text"
          />
          <div className="terms-help">Must be 8 characters at least</div>
        </div>
        <div className="d-o-b-input">
          <div className="date-of-birth">Date of Birth</div>
          <InputField />
        </div>
        <div className="d-o-b-input">
          <div className="gender">Gender</div>
          <Select />
        </div>
        <div className="agreement">
          <input className="checkboxsingledefault" type="checkbox" />
          <div className="text-">
            <span className="by-creating-an">{`By creating an account means you agree to the `}</span>
            <b className="by-creating-an">Terms</b>
            <span className="by-creating-an">{` `}</span>
            <b className="by-creating-an">and</b>
            <span className="by-creating-an">{` `}</span>
            <b className="by-creating-an">Conditions</b>
            <span className="by-creating-an">{`, and our `}</span>
            <b className="by-creating-an">Privacy Policy</b>
          </div>
        </div>
        <button className="button3">
          <b className="label4">Sign Up</b>
        </button>
        <FrameComponent
          propAlignSelf="unset"
          propFlex="unset"
          propMinWidth="unset"
          propFlex1="unset"
        />
      </form>
      <div className="copyright">
        <div className="label5">
          <span>Aldready have an account?</span>
          <span className="span3">{` `}</span>
          <span className="sign-in">Sign In</span>
        </div>
      </div>
    </div>
  );
};

FormContainer.propTypes = {
  className: PropTypes.string,
};

export default FormContainer;
