import PropTypes from "prop-types";
import "./Button.css";

const Button = ({ className = "" }) => {
  return (
    <button className={`button4 ${className}`}>
      <div className="button5">Book an Appointment</div>
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
};

export default Button;
