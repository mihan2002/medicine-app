import PropTypes from "prop-types";

const Select = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch rounded-md bg-aliceblue-200 flex flex-row items-end justify-between pt-[0.75rem] px-[1rem] pb-[1.125rem] gap-[1.25rem] text-left text-[0.938rem] text-slategray-100 font-headings-h6 ${className}`}
    >
      <div className="relative leading-[0.938rem] font-medium inline-block min-w-[3.688rem]">
        Select...
      </div>
      <img
        className="h-[1rem] w-[1rem] relative min-h-[1rem]"
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
