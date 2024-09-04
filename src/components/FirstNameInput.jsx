import { useMemo } from "react";
import PropTypes from "prop-types";
import "./FirstNameInput.css";

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
      className={`first-name-input ${className}`}
      style={firstNameInputStyle}
    >
      <div className="form-title2">{formTitle}</div>
      <div className="input2">
        <div className="container4">
          <img className="icon23" alt="" src="/icon1.svg" />
          <div className="first-name-hint" style={firstNameHintStyle}>
            {firstNameHint}
          </div>
        </div>
        <img className="select-arrow-icon" alt="" src="/select-arrow.svg" />
        <img className="icon-right18" alt="" src="/icon-right@2x.png" />
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
