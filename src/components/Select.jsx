import PropTypes from "prop-types";
import "./Select.css";

const Select = ({ className = "" }) => {
  return (
    <div className={`select ${className}`}>
      <div className="normal">Select...</div>
      <img
        className="phosphornormalcaretdown-icon"
        alt=""
        src="/phosphornormalcaretdown.svg"
      />
    </div>
  );
};

Select.propTypes = {
  className: PropTypes.string,
};

export default Select;
