import { useMemo } from "react";
import PropTypes from "prop-types";
import "./Header.css";

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
    <header className={`header ${className}`} style={headerStyle}>
      <div className="header-child" />
      <div className="connect-header" style={connectHeaderStyle}>
        <div className="medai-connect1" style={medAiConnectStyle}>
          MedAi Connect
        </div>
      </div>
      <div className="user-avatar">
        <img className="user-avatar-child" loading="lazy" alt="" src={group3} />
        <img
          className="avatar-icon"
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
