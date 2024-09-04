import { useMemo } from "react";
import PropTypes from "prop-types";
import "./Review.css";

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
    <div className={`review-1 ${className}`}>
      <div className="review-content">
        <div className="review-details">
          <div className="reviewer-info">
            <img
              className="reviewer-image-icon"
              loading="lazy"
              alt=""
              src={reviewerImage}
            />
            <div className="reviewer-name-and-date">
              <div className="peter-briers">{peterBriers}</div>
              <div className="days-ago" style={daysAgoStyle}>
                {daysAgo}
              </div>
            </div>
          </div>
          <div className="dr-john-doe-provided-excellen-wrapper">
            <div className="dr-john-doe2" style={drJohnDoeStyle}>
              {drJohnDoeProvidedExcellent}
            </div>
          </div>
        </div>
      </div>
      <div className="review-divider" />
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
