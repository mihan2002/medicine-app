import PropTypes from "prop-types";
import "./NameCard.css";

const NameCard = ({ className = "" }) => {
  return (
    <div className={`name-card1 ${className}`}>
      <div className="frame-parent2">
        <div className="ellipse-container">
          <img
            className="frame-child1"
            loading="lazy"
            alt=""
            src="/ellipse-87@2x.png"
          />
        </div>
        <div className="frame-parent3">
          <div className="dr-jane-doe-container">
            <div className="dr-jane-doe1">Dr. Jane Doe</div>
          </div>
          <div className="specialist-cardiology-container">
            <div className="specialist-cardiology1">
              Specialist - Cardiology
            </div>
          </div>
          <div className="frame-parent4">
            <div className="stars1-5google-starsgoogle-s-container">
              <img
                className="stars1-5google-starsgoogle-s-icon2"
                loading="lazy"
                alt=""
                src="/stars15google-starsgoogle-stars-3.svg"
              />
            </div>
            <div className="reviews3">3.8 224 reviews</div>
          </div>
        </div>
        <div className="frame-wrapper2">
          <div className="view-container">
            <div className="specialist-cardiology1">View</div>
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
