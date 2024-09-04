import PropTypes from "prop-types";

const InputField = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch rounded-md bg-aliceblue-200 flex flex-row items-end justify-start pt-[0.625rem] px-[1rem] pb-[0.937rem] gap-[0.75rem] ${className}`}
    >
      <div className="flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.062rem]">
        <img
          className="w-[1.25rem] h-[1.25rem] relative"
          alt=""
          src="/phosphornormalcalendarblank.svg"
        />
      </div>
      <input
        className="w-[6.125rem] [border:none] [outline:none] font-medium font-headings-h6 text-[0.938rem] bg-[transparent] h-[0.938rem] relative leading-[0.938rem] text-slategray-100 text-left flex items-center p-0"
        placeholder="DD / MM / YY"
        type="text"
      />
    </div>
  );
};

InputField.propTypes = {
  className: PropTypes.string,
};

export default InputField;
