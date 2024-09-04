import FrameComponent from "./FrameComponent";
import PropTypes from "prop-types";

const ContentContainer = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-[3.375rem] text-left text-[1.75rem] text-gray-200 font-headings-h6 mq450:gap-[1.688rem] ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-center py-[0rem] px-[1.25rem]">
        <div className="w-[12.938rem] flex flex-col items-start justify-start gap-[0.75rem]">
          <h1 className="m-0 relative text-inherit tracking-[-0.1px] leading-[136.02%] font-semibold font-[inherit] mq450:text-[1.375rem] mq450:leading-[1.875rem]">
            Welcome back!
          </h1>
          <div className="self-stretch relative text-[1rem] leading-[1.625rem] text-center">
            Please enter your details
          </div>
        </div>
      </div>
      <form className="m-0 self-stretch flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.375rem] gap-[1.875rem]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[0.5rem]">
          <div className="self-stretch relative text-[0.875rem] font-medium font-headings-h6 text-darkslategray-100 text-left">{`E-mail `}</div>
          <input
            className="w-full [border:none] [outline:none] bg-aliceblue-200 self-stretch h-[2.875rem] rounded-md flex flex-row items-start justify-start pt-[0.906rem] px-[1rem] pb-[1.031rem] box-border font-headings-h6 font-medium text-[0.938rem] text-slategray-100 min-w-[15.625rem]"
            placeholder="Type your e-mail"
            type="text"
          />
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[0.5rem]">
          <div className="self-stretch relative text-[0.875rem] font-medium font-headings-h6 text-darkslategray-100 text-left">
            Password
          </div>
          <input
            className="w-full [border:none] [outline:none] bg-aliceblue-200 self-stretch h-[2.875rem] rounded-md flex flex-row items-start justify-start pt-[0.906rem] px-[1rem] pb-[1.031rem] box-border font-headings-h6 font-medium text-[0.938rem] text-slategray-100 min-w-[15.625rem]"
            placeholder="Type your password"
            type="text"
          />
          <div className="self-stretch relative text-[0.688rem] leading-[0.75rem] font-headings-h6 text-slategray-200 text-right">
            Forgot Password?
          </div>
        </div>
        <button className="cursor-pointer [border:none] py-[1rem] px-[1.25rem] bg-gray-400 self-stretch rounded-71xl flex flex-row items-start justify-center whitespace-nowrap hover:bg-darkslategray-200">
          <b className="relative text-[1rem] leading-[1rem] inline-block font-headline-3 text-gray-100 text-center min-w-[3.25rem]">
            Sign In
          </b>
        </button>
        <FrameComponent />
      </form>
      <div className="self-stretch flex flex-row items-start justify-center py-[0rem] pl-[1.25rem] pr-[1.312rem] text-right text-[0.875rem] text-slategray-300">
        <div className="relative leading-[1.5rem] font-semibold">
          <span>Don’t have an account?</span>
          <span className="text-darkslategray-100">{` `}</span>
          <span className="text-gray-400">Sign Up</span>
        </div>
      </div>
    </div>
  );
};

ContentContainer.propTypes = {
  className: PropTypes.string,
};

export default ContentContainer;
