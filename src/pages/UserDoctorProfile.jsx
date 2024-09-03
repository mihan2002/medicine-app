import SidebarCollapsed from "../components/SidebarCollapsed";
import Header from "../components/Header";
import Button from "../components/Button";
import Review from "../components/Review";
import "./UserDoctorProfile.css";

const UserDoctorProfile = () => {
  return (
    <div className="user-doctor-profile">
      <div className="sidebar">
        <div className="medai-connect">MedAi Connect</div>
        <div className="sidebar-menu">
          <div className="service-1-parent">
            <img className="service-1-icon" alt="" src="/service-1.svg" />
            <img
              className="settings-solid-1"
              alt=""
              src="/settings-solid-1.svg"
            />
            <img
              className="credit-card-1-icon"
              alt=""
              src="/creditcard-1.svg"
            />
            <img className="loan-1-icon" alt="" src="/loan-1.svg" />
            <div className="appointments">Appointments</div>
            <div className="notifications2">Notifications</div>
            <div className="find-a-doctor">Find a Doctor</div>
            <div className="credit-cards">Credit Cards</div>
            <div className="loans">Loans</div>
            <div className="services">Services</div>
            <div className="my-privileges">My Privileges</div>
            <div className="setting">Setting</div>
            <img
              className="econometrics-1-icon"
              alt=""
              src="/econometrics-1.svg"
            />
            <div className="home-2-parent">
              <img className="home-2-icon" alt="" src="/home-21.svg" />
              <div className="my-care">My Care</div>
            </div>
          </div>
          <div className="sidebar-menu-child" />
        </div>
        <img className="logo-icon" alt="" src="/logo@2x.png" />
        <img
          className="phosphornormalclipboardtext-icon"
          alt=""
          src="/phosphornormalclipboardtext.svg"
        />
        <img className="notifications-icon" alt="" src="/notifications.svg" />
        <img className="search-icon" alt="" src="/search1.svg" />
      </div>
      <SidebarCollapsed />
      <main className="header-parent">
        <Header
          rectangleDivPosition="sticky"
          rectangleDivTop="0"
          rectangleDivLeft="unset"
          rectangleDivPadding="25px 30px 25px 18px"
          rectangleDivGap="20px"
          rectangleDivAlignSelf="stretch"
          medAiConnectMarginLeft="unset"
          userAvatarMargin="0"
          group3="/group-3.svg"
        />
        <section className="page-body">
          <div className="body-content">
            <div className="bg" />
            <div className="container3">
              <div className="profile-content-parent">
                <div className="profile-content">
                  <div className="profile-details">
                    <div className="doctor-info">
                      <div className="doctor-image-parent">
                        <img
                          className="doctor-image-icon"
                          loading="lazy"
                          alt=""
                          src="/ellipse-90@2x.png"
                        />
                        <div className="name-and-specialty">
                          <div className="dr-john-doe-parent">
                            <h1 className="dr-john-doe">Dr. John Doe</h1>
                            <div className="specialty-cardiology-container">
                              <p className="specialty-cardiology">
                                Specialty : Cardiology
                              </p>
                              <p className="blank-line">
                                Experience : 15 years
                              </p>
                            </div>
                            <div className="stars-container-parent">
                              <div className="stars-container">
                                <img
                                  className="stars1-5google-starsgoogle-s-icon"
                                  loading="lazy"
                                  alt=""
                                  src="/stars15google-starsgoogle-stars-31.svg"
                                />
                              </div>
                              <div className="rating-count">3.8</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="button-container">
                        <Button />
                      </div>
                    </div>
                    <div className="profile-details-child" />
                  </div>
                </div>
                <div className="about-the-doctor-container">
                  <p className="about-the-doctor">{`About the doctor `}</p>
                  <p className="dr-john-doe1">
                    Dr. John Doe is a compassionate and dedicated cardiologist
                    with over 15 years of experience. He specializes in treating
                    a wide range of heart conditions and is committed to
                    providing personalized care to his patients. Dr. Doe
                    believes in a holistic approach to health and emphasizes the
                    importance of lifestyle changes in conjunction with medical
                    treatment.
                  </p>
                </div>
              </div>
              <div className="qualifications-content-parent">
                <div className="qualifications-content">
                  <div className="qualifications-details">
                    <div className="qualifications-md-from-harvard-parent">
                      <div className="qualifications-md-from-container">
                        <p className="about-the-doctor">Qualifications</p>
                        <ul className="md-from-harvard-medical-school">
                          <li className="fellowship-in-cardiology-in-ma">
                            <span>MD from Harvard Medical School</span>
                          </li>
                          <li className="fellowship-in-cardiology-in-ma">
                            <span>Fellowship in Cardiology in Mayo Clinic</span>
                          </li>
                          <li>
                            <span>Board certified in Cardiology</span>
                          </li>
                        </ul>
                      </div>
                      <div className="specialty-cardiology-container">
                        <p className="about-the-doctor">
                          Professional Background
                        </p>
                        <ul className="md-from-harvard-medical-school">
                          <li className="fellowship-in-cardiology-in-ma">
                            <span>Senior Cardiologist at City Hospital</span>
                          </li>
                          <li>
                            <span>
                              Assistant Professor of Cardiology at State Medical
                              School
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="reviews-wrapper">
                      <div className="reviews">
                        <p className="reviews1">Reviews</p>
                      </div>
                    </div>
                  </div>
                  <div className="contact-details-wrapper">
                    <div className="contact-details">
                      <div className="contact-information">
                        Contact Information
                      </div>
                      <div className="contact-info">
                        <div className="email-johndoegmailcom-container">
                          <p className="email-johndoegmailcom">
                            Email : johndoe@gmail.com
                          </p>
                          <p className="email-johndoegmailcom">
                            Phone : (+94) 123 4567
                          </p>
                          <p className="blank-line">&nbsp;</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="reviews-container">
                  <div className="review-list">
                    <Review
                      reviewerImage="/ellipse-91@2x.png"
                      peterBriers="Peter Briers"
                      daysAgo="3 days ago"
                      drJohnDoeProvidedExcellent="Dr. John Doe provided excellent care during my recent consultation. He was attentive, thorough, and answered all my questions with patience. I felt genuinely cared for and confident in his expertise. Highly recommend!"
                    />
                    <Review
                      reviewerImage="/ellipse-91-1@2x.png"
                      peterBriers="Anne Johnson"
                      daysAgo="10 days ago"
                      propMinWidth="4.313rem"
                      drJohnDoeProvidedExcellent={`"Dr. John Doe was fantastic during our recent video consultation. He was prompt, professional, and made me feel at ease. He listened carefully to my concerns and provided clear and effective advice. I'm very satisfied with his service!"`}
                      propMargin="0"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default UserDoctorProfile;
