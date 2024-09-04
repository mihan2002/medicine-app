import { useMemo } from "react";
import PropTypes from "prop-types";
import "./Sidebar.css";

const Sidebar = ({
  className = "",
  creditCard1IconPosition,
  creditCard1IconTop,
  creditCard1IconLeft,
  myPrivilegesColor,
  propColor,
}) => {
  const sidebarStyle = useMemo(() => {
    return {
      position: creditCard1IconPosition,
      top: creditCard1IconTop,
      left: creditCard1IconLeft,
    };
  }, [creditCard1IconPosition, creditCard1IconTop, creditCard1IconLeft]);

  const myCareStyle = useMemo(() => {
    return {
      color: myPrivilegesColor,
    };
  }, [myPrivilegesColor]);

  const findADoctorStyle = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  return (
    <div className={`sidebar1 ${className}`} style={sidebarStyle}>
      <div className="search-bar1">
        <div className="medai-connect2">MedAi Connect</div>
        <div className="sidebar-menu1">
          <div className="menu4">
            <div className="service-1-group">
              <img className="service-1-icon1" alt="" src="/service-1.svg" />
              <img
                className="service-1-icon1"
                alt=""
                src="/settings-solid-1.svg"
              />
              <img
                className="credit-card-1-icon1"
                alt=""
                src="/creditcard-1.svg"
              />
              <img className="service-1-icon1" alt="" src="/loan-1.svg" />
              <div className="home-2-group">
                <img
                  className="home-2-icon1"
                  loading="lazy"
                  alt=""
                  src="/home-2.svg"
                />
                <div className="my-care-label">
                  <a className="my-care1" style={myCareStyle}>
                    My Care
                  </a>
                </div>
              </div>
              <div className="menu-item-labels">
                <div className="appointments1">Appointments</div>
              </div>
              <div className="menu-item-labels1">
                <div className="notifications3">Notifications</div>
              </div>
              <div className="credit-cards1">Credit Cards</div>
              <div className="loans1">Loans</div>
              <div className="services1">Services</div>
              <div className="my-privileges1">My Privileges</div>
              <div className="setting1">Setting</div>
              <img
                className="service-1-icon1"
                alt=""
                src="/econometrics-1.svg"
              />
              <div className="menu-item-labels2">
                <div className="find-a-doctor1" style={findADoctorStyle}>
                  Find a Doctor
                </div>
              </div>
            </div>
          </div>
          <div className="menu-divider" />
        </div>
        <img className="logo-icon1" loading="lazy" alt="" src="/logo@2x.png" />
        <img
          className="phosphornormalclipboardtext-icon1"
          loading="lazy"
          alt=""
          src="/phosphornormalclipboardtext.svg"
        />
        <img
          className="notifications-icon1"
          loading="lazy"
          alt=""
          src="/notifications.svg"
        />
        <img className="search-icon1" loading="lazy" alt="" src="/search.svg" />
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  className: PropTypes.string,

  /** Style props */
  creditCard1IconPosition: PropTypes.any,
  creditCard1IconTop: PropTypes.any,
  creditCard1IconLeft: PropTypes.any,
  myPrivilegesColor: PropTypes.any,
  propColor: PropTypes.any,
};

export default Sidebar;
