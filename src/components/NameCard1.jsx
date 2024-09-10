import PropTypes from "prop-types";
import "./NameCard1.css";

const NameCard1 = ({ className = "" }) => {
  return (
    <div className={`name-card ${className}`}>
      <div className="frame-container">
        <div className="ellipse-wrapper">
          <img
            className="ellipse-icon"
            loading="lazy"
            alt=""
            src="/ellipse-87@2x.png"
          />
        </div>
        <div className="frame-div">
          <div className="dr-jane-doe-wrapper">
            <div className="dr-jane-doe">Dr. Jane Doe</div>
          </div>
          <div className="specialist-cardiology-wrapper">
            <div className="specialist-cardiology">Specialist - Cardiology</div>
          </div>
          <div className="frame-parent1">
            <div className="stars1-5google-starsgoogle-s-wrapper">
              <img
                className="stars1-5google-starsgoogle-s-icon1"
                loading="lazy"
                alt=""
                src="/stars15google-starsgoogle-stars-3.svg"
              />
            </div>
            <div className="reviews2">3.8 224 reviews</div>
          </div>
        </div>
        <div className="frame-wrapper1">
          <button className="view-wrapper">
            <div className="view">View</div>
          </button>
        </div>
      </div>
    </div>
  );
};

NameCard1.propTypes = {
  className: PropTypes.string,
};

export default NameCard1;
