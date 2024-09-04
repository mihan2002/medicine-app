import FirstNameInput from "./FirstNameInput";
import InputField from "./InputField";
import Select from "./Select";
import FrameComponent from "./FrameComponent";
import PropTypes from "prop-types";

const FormContainer = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-[2.062rem] max-w-full text-left text-[1.75rem] text-gray-200 font-headings-h6 mq450:gap-[1rem] ${className}`}
    >
      <div className="w-[26.5rem] flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.625rem] box-border gap-[0.75rem] max-w-full">
        <h1 className="m-0 self-stretch relative text-inherit leading-[136.02%] font-semibold font-[inherit] mq450:text-[1.375rem] mq450:leading-[1.875rem]">
          Create your account
        </h1>
        <div className="self-stretch relative text-[1rem] leading-[1.625rem]">
          It’s free and easy
        </div>
      </div>
      <form className="m-0 self-stretch flex flex-col items-start justify-start gap-[1.437rem] max-w-full">
        <div className="self-stretch flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.25rem] box-border gap-[0.5rem] max-w-full">
          <div className="self-stretch flex flex-row items-start justify-start max-w-full">
            <div className="flex-1 flex flex-col items-start justify-start gap-[1.687rem] max-w-full">
              <FirstNameInput
                formTitle="Full name"
                firstNameHint="Enter your full name"
              />
              <div className="self-stretch relative text-[0.875rem] font-medium font-headings-h6 text-darkslategray-100 text-left">
                E-mail
              </div>
            </div>
            <FirstNameInput
              propAlignSelf="unset"
              propWidth="13.625rem"
              propMarginLeft="-13.063rem"
              formTitle="Last name"
              firstNameHint="Enter your last name"
              propWidth1="10.875rem"
            />
          </div>
          <input
            className="w-[26.5rem] [border:none] [outline:none] bg-aliceblue-200 h-[2.875rem] rounded-md flex flex-row items-start justify-start pt-[0.906rem] px-[0.937rem] pb-[1.031rem] box-border font-headings-h6 font-medium text-[0.938rem] text-slategray-100 max-w-full"
            placeholder="Enter your e-mail"
            type="text"
          />
        </div>
        <div className="w-[26.5rem] flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.25rem] box-border gap-[0.5rem] max-w-full">
          <div className="self-stretch relative text-[0.875rem] font-medium font-headings-h6 text-darkslategray-100 text-left">
            Phone number
          </div>
          <input
            className="w-full [border:none] [outline:none] bg-aliceblue-200 self-stretch h-[2.875rem] rounded-md flex flex-row items-start justify-start pt-[0.906rem] px-[1rem] pb-[1.031rem] box-border font-headings-h6 font-medium text-[0.938rem] text-slategray-100 min-w-[15.625rem]"
            placeholder="Enter your phone number"
            type="text"
          />
        </div>
        <div className="w-[26.5rem] flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.25rem] box-border gap-[0.5rem] max-w-full">
          <div className="self-stretch relative text-[0.875rem] font-medium font-headings-h6 text-darkslategray-100 text-left">
            Password
          </div>
          <input
            className="w-full [border:none] [outline:none] bg-aliceblue-200 self-stretch h-[2.875rem] rounded-md flex flex-row items-start justify-start pt-[0.906rem] px-[1rem] pb-[1.031rem] box-border font-headings-h6 font-medium text-[0.938rem] text-slategray-100 min-w-[15.625rem]"
            placeholder="Enter your password"
            type="text"
          />
          <div className="self-stretch relative text-[0.688rem] leading-[0.75rem] font-headings-h6 text-slategray-300 text-left">
            Must be 8 characters at least
          </div>
        </div>
        <div className="w-[26.5rem] flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.25rem] box-border gap-[0.375rem] max-w-full">
          <div className="relative text-[0.875rem] font-medium font-headings-h6 text-darkslategray-100 text-left inline-block min-w-[5.313rem]">
            Date of Birth
          </div>
          <InputField />
        </div>
        <div className="w-[26.5rem] flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.25rem] box-border gap-[0.375rem] max-w-full">
          <div className="relative text-[0.875rem] font-medium font-headings-h6 text-darkslategray-100 text-left inline-block min-w-[3.125rem]">
            Gender
          </div>
          <Select />
        </div>
        <div className="w-[26.5rem] flex flex-row items-start justify-start gap-[0.625rem] max-w-full mq450:flex-wrap">
          <input
            className="m-0 h-[1.25rem] w-[1.25rem] relative"
            type="checkbox"
          />
          <div className="flex-1 relative text-[0.75rem] leading-[1.25rem] text-darkslategray-100 text-left inline-block min-w-[16rem] max-w-full">
            <span className="font-headings-h6">{`By creating an account means you agree to the `}</span>
            <b className="font-headings-h6">Terms</b>
            <span className="font-headings-h6">{` `}</span>
            <b className="font-headings-h6">and</b>
            <span className="font-headings-h6">{` `}</span>
            <b className="font-headings-h6">Conditions</b>
            <span className="font-headings-h6">{`, and our `}</span>
            <b className="font-headings-h6">Privacy Policy</b>
          </div>
        </div>
        <button className="cursor-pointer [border:none] py-[1rem] px-[1.25rem] bg-gray-400 w-[26.5rem] rounded-71xl flex flex-row items-start justify-center box-border whitespace-nowrap max-w-full hover:bg-darkslategray-200">
          <b className="relative text-[1rem] leading-[1rem] inline-block font-headline-3 text-gray-100 text-center min-w-[3.688rem]">
            Sign Up
          </b>
        </button>
        <FrameComponent
          propAlignSelf="unset"
          propFlex="unset"
          propMinWidth="unset"
          propFlex1="unset"
        />
      </form>
      <div className="w-[26.406rem] flex flex-row items-start justify-center py-[0rem] px-[1.25rem] box-border max-w-full text-right text-[0.875rem] text-slategray-300">
        <div className="relative leading-[1.5rem] font-semibold">
          <span>Aldready have an account?</span>
          <span className="text-darkslategray-100">{` `}</span>
          <span className="text-gray-400">Sign In</span>
        </div>
      </div>
    </div>
  );
};

FormContainer.propTypes = {
  className: PropTypes.string,
};

export default FormContainer;
