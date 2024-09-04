import { useMemo } from "react";
import PropTypes from "prop-types";

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
    <div
      className={`absolute top-[0rem] left-[0rem] bg-gray-white w-[15.625rem] h-[73.438rem] overflow-hidden flex flex-col items-end justify-start z-[2] text-left text-[1.563rem] text-black font-headings-h6 ${className}`}
      style={sidebarStyle}
    >
      <div className="w-[14.125rem] flex-1 flex flex-row items-start justify-start py-[0rem] pl-[1.25rem] pr-[0rem] box-border relative">
        <div className="w-[7.5rem] absolute !m-[0] top-[1.75rem] left-[3.813rem] leading-[92%] font-semibold inline-block mq450:text-[1.25rem] mq450:leading-[1.125rem]">
          MedAi Connect
        </div>
        <div className="self-stretch flex-1 flex flex-row items-start justify-start gap-[2rem] shrink-0 z-[1] text-[1.125rem] text-darkgray-100">
          <div className="flex-1 flex flex-col items-start justify-start pt-[8.187rem] px-[0rem] pb-[0rem]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[2.606rem]">
              <img
                className="w-[1.563rem] h-[1.563rem] relative overflow-hidden shrink-0 hidden"
                alt=""
                src="/service-1.svg"
              />
              <img
                className="w-[1.563rem] h-[1.563rem] relative overflow-hidden shrink-0 hidden"
                alt=""
                src="/settings-solid-1.svg"
              />
              <img
                className="w-[1.625rem] h-[1.625rem] relative overflow-hidden shrink-0 hidden"
                alt=""
                src="/creditcard-1.svg"
              />
              <img
                className="w-[1.563rem] h-[1.563rem] relative overflow-hidden shrink-0 hidden"
                alt=""
                src="/loan-1.svg"
              />
              <div className="flex flex-row items-start justify-start py-[0rem] pl-[0rem] pr-[1.25rem] gap-[1.625rem] text-mediumslateblue-200">
                <img
                  className="h-[1.563rem] w-[1.563rem] relative overflow-hidden shrink-0 min-h-[1.563rem]"
                  loading="lazy"
                  alt=""
                  src="/home-2.svg"
                />
                <div className="flex flex-col items-start justify-start pt-[0.125rem] px-[0rem] pb-[0rem]">
                  <a
                    className="[text-decoration:none] relative font-medium text-[inherit] inline-block min-w-[4.563rem] shrink-0"
                    style={myCareStyle}
                  >
                    My Care
                  </a>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-end">
                <div className="relative font-medium inline-block min-w-[7.625rem]">
                  Appointments
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-end py-[0rem] px-[0.75rem]">
                <div className="relative font-medium inline-block min-w-[6.875rem]">
                  Notifications
                </div>
              </div>
              <div className="w-[6.813rem] h-[0rem] relative font-medium hidden">
                Credit Cards
              </div>
              <div className="w-[3.25rem] h-[0rem] relative font-medium hidden">
                Loans
              </div>
              <div className="w-[4.688rem] h-[0rem] relative font-medium hidden">
                Services
              </div>
              <div className="w-[7.25rem] h-[0rem] relative font-medium hidden">
                My Privileges
              </div>
              <div className="w-[3.875rem] relative font-medium hidden">
                Setting
              </div>
              <img
                className="w-[1.563rem] h-[1.563rem] relative overflow-hidden shrink-0 hidden"
                alt=""
                src="/econometrics-1.svg"
              />
              <div className="self-stretch flex flex-row items-start justify-end py-[0rem] px-[0.375rem]">
                <div
                  className="relative font-medium inline-block min-w-[7.25rem]"
                  style={findADoctorStyle}
                >
                  Find a Doctor
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch w-[0.063rem] relative bg-aliceblue-300" />
        </div>
        <img
          className="h-[2.25rem] w-[2.25rem] absolute !m-[0] top-[1.938rem] left-[0.875rem] object-cover z-[2]"
          loading="lazy"
          alt=""
          src="/logo@2x.png"
        />
        <img
          className="h-[1.563rem] w-[1.631rem] absolute !m-[0] top-[12.313rem] left-[1.25rem] z-[2]"
          loading="lazy"
          alt=""
          src="/phosphornormalclipboardtext.svg"
        />
        <img
          className="h-[1.563rem] w-[1.563rem] absolute !m-[0] top-[16.313rem] left-[1.25rem] overflow-hidden shrink-0 z-[2]"
          loading="lazy"
          alt=""
          src="/notifications.svg"
        />
        <img
          className="h-[1.563rem] w-[1.563rem] absolute !m-[0] top-[20.25rem] left-[1.25rem] overflow-hidden shrink-0 z-[2]"
          loading="lazy"
          alt=""
          src="/search.svg"
        />
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
