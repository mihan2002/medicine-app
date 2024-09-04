import { useMemo } from "react";
import PropTypes from "prop-types";

const Review = ({
  className = "",
  reviewerImage,
  peterBriers,
  daysAgo,
  propMinWidth,
  drJohnDoeProvidedExcellent,
  propMargin,
}) => {
  const daysAgoStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const drJohnDoeStyle = useMemo(() => {
    return {
      margin: propMargin,
    };
  }, [propMargin]);

  return (
    <div
      className={`self-stretch h-[7.813rem] bg-gray-white overflow-hidden shrink-0 flex flex-col items-start justify-start pt-[0.937rem] px-[0rem] pb-[1.562rem] box-border gap-[1.562rem] max-w-full text-left text-[1rem] text-black font-headings-h6 ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pl-[1.437rem] pr-[1.875rem] box-border max-w-full shrink-0">
        <div className="flex-1 flex flex-col items-start justify-start gap-[0.375rem] max-w-full">
          <div className="w-[19rem] flex flex-row items-start justify-start gap-[1.437rem]">
            <img
              className="h-[2.813rem] w-[2.813rem] relative rounded-[50%] object-cover"
              loading="lazy"
              alt=""
              src={reviewerImage}
            />
            <div className="flex-1 flex flex-col items-start justify-start gap-[0.25rem]">
              <div className="self-stretch relative font-medium">
                {peterBriers}
              </div>
              <div
                className="relative text-[0.75rem] font-medium text-darkgray-200 inline-block min-w-[3.938rem]"
                style={daysAgoStyle}
              >
                {daysAgo}
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pl-[0.5rem] pr-[0rem] box-border max-w-full text-[0.875rem]">
            <div
              className="flex-1 relative inline-block max-w-full"
              style={drJohnDoeStyle}
            >
              {drJohnDoeProvidedExcellent}
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch h-[0.063rem] relative border-lightgray border-t-[1px] border-solid box-border shrink-0" />
    </div>
  );
};

Review.propTypes = {
  className: PropTypes.string,
  reviewerImage: PropTypes.string,
  peterBriers: PropTypes.string,
  daysAgo: PropTypes.string,
  drJohnDoeProvidedExcellent: PropTypes.string,

  /** Style props */
  propMinWidth: PropTypes.any,
  propMargin: PropTypes.any,
};

export default Review;
