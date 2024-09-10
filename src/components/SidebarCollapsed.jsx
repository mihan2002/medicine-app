import PropTypes from "prop-types";
import "./SidebarCollapsed.css";

const SidebarCollapsed = ({ className = "" }) => {
  return (
    <div className={`sidebar-collapsed ${className}`}>
      <div className="medai-connect3">MedAi Connect</div>
      <img className="logo-icon2" alt="" src="/logo@2x.png" />
      <div className="sidebar-content-wrapper">
        <div className="sidebar-content">
          <img className="menu-icon" loading="lazy" alt="" src="/menu.svg" />
          <div className="sidebar-content-inner">
            <div className="home-2-container">
              <img
                className="home-2-icon2"
                loading="lazy"
                alt=""
                src="/home-21.svg"
              />
              <img
                className="phosphornormalclipboardtext-icon3"
                loading="lazy"
                alt=""
                src="/phosphornormalclipboardtext.svg"
              />
              <img
                className="home-2-icon2"
                loading="lazy"
                alt=""
                src="/notifications.svg"
              />
              <img
                className="home-2-icon2"
                loading="lazy"
                alt=""
                src="/search.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="sidebar-background" />
    </div>
  );
};

SidebarCollapsed.propTypes = {
  className: PropTypes.string,
};

export default SidebarCollapsed;
