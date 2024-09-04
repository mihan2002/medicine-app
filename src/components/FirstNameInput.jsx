import { useMemo } from "react";
import PropTypes from "prop-types";

const FirstNameInput = ({
  className = "",
  propAlignSelf,
  propWidth,
  propMarginLeft,
  formTitle,
  firstNameHint,
  propWidth1,
}) => {
  const firstNameInputStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      width: propWidth,
      marginLeft: propMarginLeft,
    };
  }, [propAlignSelf, propWidth, propMarginLeft]);

  const firstNameHintStyle = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-[0.5rem] text-left text-[0.875rem] text-darkslategray-100 font-headings-h6 ${className}`}
      style={firstNameInputStyle}
    >
      <div className="self-stretch relative font-medium">{formTitle}</div>
      <div className="w-[12.938rem] rounded-md bg-aliceblue-200 flex flex-row items-start justify-start pt-[0.875rem] px-[1rem] pb-[1rem] box-border text-[0.938rem] text-slategray-100">
        <div className="w-[8.813rem] overflow-hidden shrink-0 flex flex-row items-start justify-start py-[0.031rem] px-[0rem] box-border">
          <img
            className="h-[1rem] w-[1rem] relative hidden"
            alt=""
            src="/icon11.svg"
          />
          <div
            className="w-[10.438rem] relative leading-[0.938rem] font-medium flex items-center shrink-0"
            style={firstNameHintStyle}
          >
            {firstNameHint}
          </div>
        </div>
        <img
          className="h-[0.688rem] w-[0.688rem] relative hidden"
          alt=""
          src="/select-arrow.svg"
        />
        <img
          className="h-[1rem] w-[1.063rem] relative object-cover hidden min-h-[1rem]"
          alt=""
          src="/icon-right@2x.png"
        />
      </div>
    </div>
  );
};

FirstNameInput.propTypes = {
  className: PropTypes.string,
  formTitle: PropTypes.string,
  firstNameHint: PropTypes.string,

  /** Style props */
  propAlignSelf: PropTypes.any,
  propWidth: PropTypes.any,
  propMarginLeft: PropTypes.any,
  propWidth1: PropTypes.any,
};

export default FirstNameInput;
