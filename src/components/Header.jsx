import { useMemo } from "react";
import PropTypes from "prop-types";

const Header = ({
  className = "",
  rectangleDivPosition,
  rectangleDivTop,
  rectangleDivLeft,
  rectangleDivPadding,
  rectangleDivGap,
  rectangleDivAlignSelf,
  medAiConnectMarginLeft,
  userAvatarMargin,
  group3,
}) => {
  const headerStyle = useMemo(() => {
    return {
      position: rectangleDivPosition,
      top: rectangleDivTop,
      left: rectangleDivLeft,
      padding: rectangleDivPadding,
      gap: rectangleDivGap,
      alignSelf: rectangleDivAlignSelf,
    };
  }, [
    rectangleDivPosition,
    rectangleDivTop,
    rectangleDivLeft,
    rectangleDivPadding,
    rectangleDivGap,
    rectangleDivAlignSelf,
  ]);

  const connectHeaderStyle = useMemo(() => {
    return {
      marginLeft: medAiConnectMarginLeft,
    };
  }, [medAiConnectMarginLeft]);

  const medAiConnectStyle = useMemo(() => {
    return {
      margin: userAvatarMargin,
    };
  }, [userAvatarMargin]);

  return (
    <header
      className={`absolute top-[0rem] left-[-0.25rem] w-full flex flex-row items-start justify-between py-[1.562rem] pl-[7.125rem] pr-[1.875rem] box-border gap-[1.25rem] max-w-full text-left text-[1.563rem] text-black font-headings-h6 mq450:pl-[1.25rem] mq450:box-border mq725:pl-[3.563rem] mq725:box-border ${className}`}
      style={headerStyle}
    >
      <div className="h-full w-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] bg-gray-white" />
      <div
        className="w-[7.5rem] flex flex-col items-start justify-start pt-[0.187rem] px-[0rem] pb-[0rem] box-border"
        style={connectHeaderStyle}
      >
        <div
          className="self-stretch relative leading-[92%] font-semibold z-[1]"
          style={medAiConnectStyle}
        >
          MedAi Connect
        </div>
      </div>
      <div className="flex flex-row items-start justify-start gap-[1.562rem]">
        <img
          className="self-stretch w-[2.563rem] relative max-h-full min-h-[3.125rem] z-[1]"
          loading="lazy"
          alt=""
          src={group3}
        />
        <img
          className="h-[3.125rem] w-[3.125rem] relative rounded-[50%] object-cover min-h-[3.125rem] z-[1]"
          loading="lazy"
          alt=""
          src="/ellipse-89@2x.png"
        />
      </div>
    </header>
  );
};

Header.propTypes = {
  className: PropTypes.string,
  group3: PropTypes.string,

  /** Style props */
  rectangleDivPosition: PropTypes.any,
  rectangleDivTop: PropTypes.any,
  rectangleDivLeft: PropTypes.any,
  rectangleDivPadding: PropTypes.any,
  rectangleDivGap: PropTypes.any,
  rectangleDivAlignSelf: PropTypes.any,
  medAiConnectMarginLeft: PropTypes.any,
  userAvatarMargin: PropTypes.any,
};

export default Header;
