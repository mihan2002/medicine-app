import PropTypes from "prop-types";

const NameCard = ({ className = "" }) => {
  return (
    <div
      className={`flex-1 shadow-[0px_4px_13.6px_-4px_rgba(0,_0,_0,_0.25)] rounded-3xs bg-gray-white overflow-hidden flex flex-row items-start justify-start pt-[0.687rem] px-[0.625rem] pb-[0.75rem] text-center text-[0.875rem] text-dimgray font-body-regular-400 ${className}`}
    >
      <div className="flex-1 overflow-hidden flex flex-col items-start justify-start pt-[0.812rem] px-[1.437rem] pb-[0.562rem] gap-[0.843rem]">
        <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pl-[3.312rem] pr-[3.375rem]">
          <img
            className="h-[5.438rem] w-[5.438rem] relative rounded-[50%] object-cover"
            loading="lazy"
            alt=""
            src="/ellipse-87@2x.png"
          />
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[0.25rem]">
          <div className="self-stretch flex flex-row items-start justify-start py-[0rem] px-[0.312rem] text-[1.125rem] text-black font-headings-h6">
            <div className="flex-1 relative font-semibold">Dr. Jane Doe</div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-[0rem] px-[0.312rem]">
            <div className="flex-1 relative leading-[1.25rem]">
              Specialist - Cardiology
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-center gap-[0.375rem] mq450:flex-wrap">
            <div className="w-[4.625rem] flex flex-col items-start justify-start pt-[0.125rem] px-[0rem] pb-[0rem] box-border">
              <img
                className="self-stretch h-[0.813rem] relative max-w-full overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/stars15google-starsgoogle-stars-3.svg"
              />
            </div>
            <div className="flex-1 relative leading-[1.25rem] whitespace-pre-wrap inline-block min-w-[4.625rem]">
              3.8 224 reviews
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-[0rem] px-[1.687rem] text-blue">
          <div className="flex-1 rounded-3xs bg-lavender-200 overflow-hidden flex flex-row items-start justify-start pt-[0.562rem] pb-[0.437rem] pl-[2.625rem] pr-[2.562rem]">
            <div className="flex-1 relative leading-[1.25rem]">View</div>
          </div>
        </div>
      </div>
    </div>
  );
};

NameCard.propTypes = {
  className: PropTypes.string,
};

export default NameCard;
