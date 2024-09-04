import PropTypes from "prop-types";

const Content = ({ className = "" }) => {
  return (
    <section
      className={`absolute top-[10.625rem] left-[19.456rem] w-[67.063rem] h-[43rem] flex flex-row items-center justify-start flex-wrap content-center py-[0rem] px-[0.562rem] box-border gap-x-[2.625rem] gap-y-[2.562rem] max-w-full text-center text-[1.25rem] text-black font-headings-h6 ${className}`}
    >
      <div className="!m-[0] absolute top-[0rem] left-[0.563rem] shadow-[0px_4px_13.6px_rgba(0,_0,_0,_0.25)] rounded-6xl bg-gray-white flex flex-col items-start justify-start pt-[3.262rem] px-[1.062rem] pb-[3.393rem] box-border gap-[1.293rem] max-w-full">
        <img
          className="w-[20.188rem] h-[20.188rem] relative rounded-6xl hidden max-w-full"
          alt=""
          src="/rectangle-1082.svg"
        />
        <div className="flex flex-row items-start justify-start py-[0rem] pl-[3.562rem] pr-[4.062rem]">
          <img
            className="h-[10.4rem] w-[10.4rem] relative z-[1]"
            loading="lazy"
            alt=""
            src="/phosphornormalclipboardtext-1.svg"
          />
        </div>
        <div className="w-[17.606rem] relative font-semibold inline-block z-[1] mq450:text-[1rem]">
          Appointment Manager
        </div>
      </div>
      <div className="w-[20.188rem] !m-[0] absolute top-[0rem] left-[23.438rem] shadow-[0px_4px_13.6px_rgba(0,_0,_0,_0.25)] rounded-6xl bg-gray-white flex flex-col items-end justify-start pt-[3.5rem] px-[1.25rem] pb-[3.393rem] box-border gap-[1.081rem] max-w-full z-[1]">
        <div className="w-[1.5rem] h-[1.5rem] relative overflow-hidden shrink-0 hidden" />
        <img
          className="w-[20.188rem] h-[20.188rem] relative rounded-6xl hidden max-w-full"
          alt=""
          src="/rectangle-1082.svg"
        />
        <div className="flex flex-row items-start justify-end py-[0rem] pl-[3.687rem] pr-[3.562rem]">
          <img
            className="h-[10.375rem] w-[10.375rem] relative z-[2]"
            loading="lazy"
            alt=""
            src="/phosphornormalpill.svg"
          />
        </div>
        <div className="self-stretch h-[1.838rem] relative font-semibold inline-block shrink-0 z-[2] mq450:text-[1rem]">
          Prescriptions
        </div>
      </div>
      <div className="w-[20.188rem] !m-[0] absolute top-[0rem] left-[46.313rem] shadow-[0px_4px_13.6px_rgba(0,_0,_0,_0.25)] rounded-6xl bg-gray-white flex flex-col items-end justify-start pt-[3.5rem] px-[1.25rem] pb-[3.393rem] box-border gap-[1.081rem] max-w-full">
        <img
          className="w-[20.188rem] h-[20.188rem] relative rounded-6xl hidden max-w-full"
          alt=""
          src="/rectangle-1082.svg"
        />
        <div className="flex flex-row items-start justify-end py-[0rem] pl-[3.687rem] pr-[3.562rem]">
          <img
            className="h-[10.375rem] w-[10.375rem] relative z-[1]"
            loading="lazy"
            alt=""
            src="/phosphornormalquestion.svg"
          />
        </div>
        <div className="self-stretch h-[1.838rem] relative font-semibold inline-block shrink-0 z-[1] mq450:text-[1rem]">
          Ask a Doctor
        </div>
      </div>
      <div className="w-[20.188rem] !m-[0] absolute top-[22.813rem] left-[0.563rem] shadow-[0px_4px_13.6px_rgba(0,_0,_0,_0.25)] rounded-6xl bg-gray-white flex flex-col items-end justify-start pt-[3.5rem] px-[1.25rem] pb-[3.393rem] box-border gap-[1.081rem] max-w-full">
        <img
          className="w-[20.188rem] h-[20.188rem] relative rounded-6xl hidden max-w-full"
          alt=""
          src="/rectangle-1082.svg"
        />
        <div className="flex flex-row items-start justify-end py-[0rem] pl-[3.687rem] pr-[3.562rem]">
          <img
            className="h-[10.375rem] w-[10.375rem] relative overflow-hidden shrink-0 z-[1]"
            loading="lazy"
            alt=""
            src="/message-square.svg"
          />
        </div>
        <div className="self-stretch h-[1.838rem] relative font-semibold inline-block shrink-0 z-[1] mq450:text-[1rem]">
          Messages
        </div>
      </div>
      <div className="w-[20.188rem] !m-[0] absolute top-[22.813rem] left-[23.438rem] shadow-[0px_4px_13.6px_rgba(0,_0,_0,_0.25)] rounded-6xl bg-gray-white flex flex-col items-end justify-start pt-[3.5rem] px-[1.25rem] pb-[3.393rem] box-border gap-[1.081rem] max-w-full">
        <img
          className="w-[20.188rem] h-[20.188rem] relative rounded-6xl hidden max-w-full"
          alt=""
          src="/rectangle-1082.svg"
        />
        <div className="flex flex-row items-start justify-end py-[0rem] pl-[3.687rem] pr-[3.562rem]">
          <img
            className="h-[10.375rem] w-[10.375rem] relative z-[1]"
            loading="lazy"
            alt=""
            src="/phosphornormalmagnifyingglass.svg"
          />
        </div>
        <div className="self-stretch h-[1.838rem] relative font-semibold inline-block shrink-0 z-[1] mq450:text-[1rem]">
          Find a Doctor
        </div>
      </div>
      <div className="w-[20.188rem] !m-[0] absolute top-[22.813rem] left-[46.313rem] shadow-[0px_4px_13.6px_rgba(0,_0,_0,_0.25)] rounded-6xl bg-gray-white flex flex-col items-end justify-start pt-[3.5rem] px-[1.25rem] pb-[3.393rem] box-border gap-[1.081rem] max-w-full">
        <img
          className="w-[20.188rem] h-[20.188rem] relative rounded-6xl hidden max-w-full"
          alt=""
          src="/rectangle-1082.svg"
        />
        <div className="flex flex-row items-start justify-end py-[0rem] pl-[3.687rem] pr-[3.562rem]">
          <img
            className="h-[10.375rem] w-[10.375rem] relative z-[1]"
            loading="lazy"
            alt=""
            src="/phosphornormalmagnifyingglass.svg"
          />
        </div>
        <div className="self-stretch h-[1.838rem] relative font-semibold inline-block shrink-0 z-[1] mq450:text-[1rem]">
          Lab Results
        </div>
      </div>
    </section>
  );
};

Content.propTypes = {
  className: PropTypes.string,
};

export default Content;
