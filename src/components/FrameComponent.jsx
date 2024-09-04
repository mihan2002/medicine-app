import { useMemo } from "react";
import PropTypes from "prop-types";

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
    <div
      className={`self-stretch flex flex-row items-start justify-center gap-[1.5rem] text-center text-[0.75rem] text-slategray-300 font-headings-h6 mq450:flex-wrap ${className}`}
      style={frameDivStyle}
    >
      <div className="w-[7.125rem] flex flex-col items-start justify-start pt-[0.562rem] px-[0rem] pb-[0rem] box-border">
        <div className="self-stretch h-[0.063rem] relative border-aliceblue-200 border-t-[1px] border-solid box-border" />
      </div>
      <div
        className="flex-1 flex flex-row items-start justify-start gap-[1.5rem] min-w-[11.625rem]"
        style={frameDiv1Style}
      >
        <div
          className="flex-1 flex flex-col items-start justify-start gap-[1.5rem]"
          style={frameDiv2Style}
        >
          <div className="relative tracking-[-0.08px] leading-[1.125rem] font-medium">
            or do it via other accounts
          </div>
          <div className="flex flex-row items-start justify-start py-[0rem] px-[3rem]">
            <img
              className="h-[3.25rem] w-[3.25rem] relative"
              loading="lazy"
              alt=""
              src="/frame-1018.svg"
            />
          </div>
        </div>
        <div className="w-[7.125rem] flex flex-col items-start justify-start pt-[0.562rem] px-[0rem] pb-[0rem] box-border">
          <div className="self-stretch h-[0.063rem] relative border-aliceblue-200 border-t-[1px] border-solid box-border" />
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
