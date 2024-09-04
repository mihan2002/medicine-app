import PropTypes from "prop-types";
import "./Content.css";

const Content = ({ className = "" }) => {
  return (
    <section className={`content20 ${className}`}>
      <div className="appointment">
        <img className="appointment-child" alt="" src="/rectangle-1082.svg" />
        <div className="content-icons">
          <img
            className="phosphornormalclipboardtext-icon2"
            loading="lazy"
            alt=""
            src="/phosphornormalclipboardtext-1.svg"
          />
        </div>
        <div className="appointment-manager">Appointment Manager</div>
      </div>
      <div className="prescriptions">
        <div className="material-symbolsprescriptions" />
        <img className="appointment-child" alt="" src="/rectangle-1082.svg" />
        <div className="phosphornormalpill-wrapper">
          <img
            className="phosphornormalpill-icon"
            loading="lazy"
            alt=""
            src="/phosphornormalpill.svg"
          />
        </div>
        <div className="prescriptions1">Prescriptions</div>
      </div>
      <div className="ask-a-doctor">
        <img className="appointment-child" alt="" src="/rectangle-1082.svg" />
        <div className="phosphornormalpill-wrapper">
          <img
            className="phosphornormalquestion-icon"
            loading="lazy"
            alt=""
            src="/phosphornormalquestion.svg"
          />
        </div>
        <div className="ask-a-doctor1">Ask a Doctor</div>
      </div>
      <div className="messages2">
        <img className="appointment-child" alt="" src="/rectangle-1082.svg" />
        <div className="phosphornormalpill-wrapper">
          <img
            className="message-square-icon"
            loading="lazy"
            alt=""
            src="/message-square.svg"
          />
        </div>
        <div className="ask-a-doctor1">Messages</div>
      </div>
      <div className="find-a-doc">
        <img className="appointment-child" alt="" src="/rectangle-1082.svg" />
        <div className="phosphornormalpill-wrapper">
          <img
            className="phosphornormalquestion-icon"
            loading="lazy"
            alt=""
            src="/phosphornormalmagnifyingglass.svg"
          />
        </div>
        <div className="ask-a-doctor1">Find a Doctor</div>
      </div>
      <div className="lab-results">
        <img className="appointment-child" alt="" src="/rectangle-1082.svg" />
        <div className="phosphornormalpill-wrapper">
          <img
            className="phosphornormalquestion-icon"
            loading="lazy"
            alt=""
            src="/phosphornormalmagnifyingglass.svg"
          />
        </div>
        <div className="ask-a-doctor1">Lab Results</div>
      </div>
    </section>
  );
};

Content.propTypes = {
  className: PropTypes.string,
};

export default Content;
