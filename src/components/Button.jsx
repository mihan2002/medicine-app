import PropTypes from "prop-types";

const Button = ({ className = "" }) => {
  return (
    <button
      className={`cursor-pointer [border:none] py-[0.406rem] px-[1.562rem] bg-primary-600 rounded-141xl flex flex-row items-start justify-start whitespace-nowrap hover:bg-dodgerblue ${className}`}
    >
      <div className="relative text-[1rem] leading-[2.5rem] font-semibold font-body-regular-400 text-gray-white text-left">
        Book an Appointment
      </div>
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
};

export default Button;
