import { useMemo } from "react";
import PropTypes from "prop-types";
import "./FrameComponent.css";

const FrameComponent = ({
  className = "",
  propAlignSelf,
  propFlex,
  propMinWidth,
  propFlex1,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  const frameDiv1Style = useMemo(() => {
    return {
      flex: propFlex,
      minWidth: propMinWidth,
    };
  }, [propFlex, propMinWidth]);

  const frameDiv2Style = useMemo(() => {
    return {
      flex: propFlex1,
    };
  }, [propFlex1]);

  return (
    <div className={`frame-parent ${className}`} style={frameDivStyle}>
      <div className="line-wrapper">
        <div className="frame-child" />
      </div>
      <div className="frame-group" style={frameDiv1Style}>
        <div
          className="or-do-it-via-other-accounts-parent"
          style={frameDiv2Style}
        >
          <div className="or-do-it1">or do it via other accounts</div>
          <div className="frame-wrapper">
            <img
              className="frame-item"
              loading="lazy"
              alt=""
              src="/frame-1018.svg"
            />
          </div>
        </div>
        <div className="line-wrapper">
          <div className="frame-child" />
        </div>
      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propAlignSelf: PropTypes.any,
  propFlex: PropTypes.any,
  propMinWidth: PropTypes.any,
  propFlex1: PropTypes.any,
};

export default FrameComponent;
