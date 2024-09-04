import PropTypes from "prop-types";

const SidebarCollapsed = ({ className = "" }) => {
  return (
    <div
      className={`h-[78.625rem] w-[6rem] bg-gray-white overflow-hidden shrink-0 flex flex-row items-start justify-between pt-[0rem] pb-[5.187rem] pl-[2.062rem] pr-[0rem] box-border gap-[1.25rem] z-[2] text-left text-[1.563rem] text-black font-headings-h6 lg:pb-[3.375rem] lg:box-border mq750:pb-[2.188rem] mq750:box-border ${className}`}
    >
      <div className="h-[0rem] w-[7.5rem] relative leading-[92%] font-semibold hidden shrink-0 mq450:text-[1.25rem] mq450:leading-[1.125rem]">
        MedAi Connect
      </div>
      <img
        className="h-[2.25rem] w-[2.25rem] relative object-cover hidden"
        alt=""
        src="/logo@2x.png"
      />
      <div className="flex flex-col items-start justify-start pt-[2.375rem] px-[0rem] pb-[0rem]">
        <div className="flex flex-col items-end justify-start gap-[3.937rem]">
          <img
            className="w-[1.875rem] h-[1.875rem] relative"
            loading="lazy"
            alt=""
            src="/menu.svg"
          />
          <div className="w-[1.875rem] flex flex-row items-start justify-end py-[0rem] pl-[0.125rem] pr-[0.062rem] box-border">
            <div className="flex flex-col items-end justify-start gap-[2.456rem]">
              <img
                className="w-[1.563rem] h-[1.563rem] relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/home-21.svg"
              />
              <img
                className="w-[1.631rem] h-[1.563rem] relative"
                loading="lazy"
                alt=""
                src="/phosphornormalclipboardtext.svg"
              />
              <img
                className="w-[1.563rem] h-[1.563rem] relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/notifications.svg"
              />
              <img
                className="w-[1.563rem] h-[1.563rem] relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/search.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch w-[0.063rem] relative bg-aliceblue-300" />
    </div>
  );
};

SidebarCollapsed.propTypes = {
  className: PropTypes.string,
};

export default SidebarCollapsed;
