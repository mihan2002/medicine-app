import PropTypes from "prop-types";
import "./InputField.css";

const InputField = ({ className = "" }) => {
  return (
    <div className={`input-field ${className}`}>
      <div className="calendar-container">
        <img
          className="phosphornormalcalendarblank-icon"
          alt=""
          src="/phosphornormalcalendarblank.svg"
        />
      </div>
      <input className="dd-mm" placeholder="DD / MM / YY" type="text" />
    </div>
  );
};

InputField.propTypes = {
  className: PropTypes.string,
};

export default InputField;
