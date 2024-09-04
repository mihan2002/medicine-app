import SidebarCollapsed from "../components/SidebarCollapsed";
import Header from "../components/Header";
import Button from "../components/Button";
import Review from "../components/Review";

const UserDoctorProfile = () => {
  return (
    <div className="w-full relative bg-aliceblue-100 overflow-hidden flex flex-row items-start justify-start pt-[0.062rem] px-[0rem] pb-[0rem] box-border leading-[normal] tracking-[normal] text-left text-[1.563rem] text-black font-headings-h6">
      <div className="h-[73.438rem] w-[15.625rem] relative bg-gray-white overflow-hidden shrink-0 hidden">
        <div className="absolute top-[1.75rem] left-[5.313rem] leading-[2.875rem] font-semibold inline-block w-[7.5rem] h-[2.875rem] mq450:text-[1.25rem] mq450:leading-[1.125rem]">
          MedAi Connect
        </div>
        <div className="absolute top-[0rem] left-[2.75rem] w-[12.875rem] h-[74rem] text-[1.125rem] text-darkgray-100">
          <div className="absolute top-[8.188rem] left-[0rem] w-[10.813rem] h-[13.5rem]">
            <img
              className="absolute top-[24rem] left-[-0.062rem] w-[1.563rem] h-[1.563rem] overflow-hidden hidden"
              alt=""
              src="/service-1.svg"
            />
            <img
              className="absolute top-[32rem] left-[-0.187rem] w-[1.563rem] h-[1.563rem] overflow-hidden hidden"
              alt=""
              src="/settings-solid-1.svg"
            />
            <img
              className="absolute top-[16rem] left-[-0.062rem] w-[1.625rem] h-[1.625rem] overflow-hidden hidden"
              alt=""
              src="/creditcard-1.svg"
            />
            <img
              className="absolute top-[20.063rem] left-[-0.062rem] w-[1.563rem] h-[1.563rem] overflow-hidden hidden"
              alt=""
              src="/loan-1.svg"
            />
            <div className="absolute top-[4.125rem] left-[3.188rem] font-medium">
              Appointments
            </div>
            <div className="absolute top-[8.125rem] left-[3.188rem] font-medium">
              Notifications
            </div>
            <div className="absolute top-[12.125rem] left-[3.188rem] font-medium text-mediumslateblue-200">
              Find a Doctor
            </div>
            <div className="absolute top-[16.125rem] left-[3.188rem] font-medium hidden">
              Credit Cards
            </div>
            <div className="absolute top-[20.125rem] left-[3.188rem] font-medium hidden">
              Loans
            </div>
            <div className="absolute top-[24.125rem] left-[3.188rem] font-medium hidden">
              Services
            </div>
            <div className="absolute top-[28.125rem] left-[3.188rem] font-medium hidden">
              My Privileges
            </div>
            <div className="absolute top-[32.125rem] left-[3.188rem] font-medium hidden">
              Setting
            </div>
            <img
              className="absolute top-[28rem] left-[-0.062rem] w-[1.563rem] h-[1.563rem] overflow-hidden hidden"
              alt=""
              src="/econometrics-1.svg"
            />
            <div className="absolute top-[0rem] left-[0rem] w-[7.688rem] h-[1.563rem]">
              <img
                className="absolute top-[0rem] left-[0rem] w-[1.563rem] h-[1.563rem] overflow-hidden"
                alt=""
                src="/home-21.svg"
              />
              <div className="absolute top-[0.125rem] left-[3.188rem] font-medium">
                My Care
              </div>
            </div>
          </div>
          <div className="absolute top-[0rem] left-[12.813rem] bg-aliceblue-300 w-[0.063rem] h-[74rem]" />
        </div>
        <img
          className="absolute top-[1.938rem] left-[2.375rem] w-[2.25rem] h-[2.25rem] object-cover"
          alt=""
          src="/logo@2x.png"
        />
        <img
          className="absolute top-[12.313rem] left-[2.75rem] w-[1.631rem] h-[1.563rem]"
          alt=""
          src="/phosphornormalclipboardtext.svg"
        />
        <img
          className="absolute top-[16.313rem] left-[2.75rem] w-[1.563rem] h-[1.563rem] overflow-hidden"
          alt=""
          src="/notifications.svg"
        />
        <img
          className="absolute top-[20.25rem] left-[2.75rem] w-[1.563rem] h-[1.563rem] overflow-hidden"
          alt=""
          src="/search1.svg"
        />
      </div>
      <SidebarCollapsed />
      <main className="flex-1 flex flex-col items-start justify-start gap-[2.687rem] max-w-[calc(100%_-_96px)] mq750:gap-[1.313rem]">
        <Header
          rectangleDivPosition="sticky"
          rectangleDivTop="0"
          rectangleDivLeft="unset"
          rectangleDivPadding="1.562rem 1.875rem 1.562rem 1.125rem"
          rectangleDivGap="1.25rem"
          rectangleDivAlignSelf="stretch"
          medAiConnectMarginLeft="unset"
          userAvatarMargin="0"
          group3="/group-3.svg"
        />
        <section className="self-stretch flex flex-row items-start justify-start py-[0rem] pl-[4.875rem] pr-[4.937rem] box-border max-w-full text-left text-[1.125rem] text-black font-headings-h6 lg:pl-[2.438rem] lg:pr-[2.438rem] lg:box-border">
          <div className="flex-1 flex flex-row items-start justify-start relative max-w-full">
            <div className="h-[67.688rem] w-[74.375rem] absolute !m-[0] top-[-2.687rem] right-[-4.937rem] bg-whitesmoke-200" />
            <div className="flex-1 rounded-6xl bg-gray-white overflow-hidden flex flex-col items-start justify-start pt-[3.812rem] pb-[2.187rem] pl-[3.812rem] pr-[3.312rem] box-border gap-[3.75rem] max-w-full z-[1] lg:gap-[1.875rem] lg:pl-[1.875rem] lg:pr-[1.625rem] lg:box-border mq1050:pt-[2.5rem] mq1050:pb-[1.438rem] mq1050:box-border mq750:gap-[0.938rem] mq750:pt-[1.625rem] mq750:pb-[1.25rem] mq750:box-border">
              <div className="self-stretch flex flex-col items-start justify-start gap-[1.562rem] max-w-full">
                <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pl-[0.5rem] pr-[0rem] box-border max-w-full">
                  <div className="w-[66.5rem] flex flex-col items-start justify-start gap-[1.062rem] max-w-full">
                    <div className="w-[64.563rem] flex flex-row items-start justify-between max-w-full gap-[1.25rem] mq1050:flex-wrap">
                      <div className="w-[43rem] flex flex-row items-start justify-start gap-[5.5rem] max-w-full mq450:gap-[1.375rem] mq750:gap-[2.75rem] mq750:flex-wrap">
                        <img
                          className="h-[10.563rem] w-[10.563rem] relative rounded-[50%] object-cover mq750:flex-1"
                          loading="lazy"
                          alt=""
                          src="/ellipse-90@2x.png"
                        />
                        <div className="flex-1 flex flex-col items-start justify-start pt-[0.5rem] px-[0rem] pb-[0rem] box-border min-w-[17.5rem] max-w-full">
                          <div className="self-stretch flex flex-col items-start justify-start gap-[0.781rem]">
                            <h1 className="m-0 self-stretch relative text-[2.5rem] font-semibold font-[inherit] mq1050:text-[2rem] mq450:text-[1.5rem]">
                              Dr. John Doe
                            </h1>
                            <div className="self-stretch relative">
                              <p className="[margin-block-start:0] [margin-block-end:6px]">
                                Specialty : Cardiology
                              </p>
                              <p className="m-0">Experience : 15 years</p>
                            </div>
                            <div className="w-[9.063rem] flex flex-row items-start justify-start gap-[0.562rem] text-lightgray">
                              <div className="flex-1 flex flex-col items-start justify-start pt-[0.062rem] px-[0rem] pb-[0rem]">
                                <img
                                  className="self-stretch h-[1.125rem] relative max-w-full overflow-hidden shrink-0"
                                  loading="lazy"
                                  alt=""
                                  src="/stars15google-starsgoogle-stars-31.svg"
                                />
                              </div>
                              <div className="w-[2.25rem] relative flex items-center shrink-0">
                                3.8
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start pt-[1.937rem] px-[0rem] pb-[0rem]">
                        <Button />
                      </div>
                    </div>
                    <div className="self-stretch h-[0.125rem] relative border-lightgray border-t-[2px] border-solid box-border" />
                  </div>
                </div>
                <div className="self-stretch relative text-[1.25rem]">
                  <p className="[margin-block-start:0] [margin-block-end:16px] font-medium">{`About the doctor `}</p>
                  <p className="m-0 text-[1.125rem] text-darkslategray-300">
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
              <div className="self-stretch flex flex-col items-start justify-start gap-[0.562rem] max-w-full text-[1.25rem]">
                <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pl-[0rem] pr-[2rem] box-border max-w-full">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[3.625rem] max-w-[104%] shrink-0 mq750:gap-[1.813rem]">
                    <div className="w-[36.375rem] flex flex-col items-start justify-start gap-[2rem] max-w-full mq750:gap-[1rem]">
                      <div className="w-[33.313rem] relative inline-block max-w-full">
                        <p className="[margin-block-start:0] [margin-block-end:16px] font-medium">
                          Qualifications
                        </p>
                        <ul className="m-0 text-[1rem] pl-[1.5rem] text-darkslategray-300">
                          <li className="mb-[0rem]">
                            <span>MD from Harvard Medical School</span>
                          </li>
                          <li className="mb-[0rem]">
                            <span>Fellowship in Cardiology in Mayo Clinic</span>
                          </li>
                          <li>
                            <span>Board certified in Cardiology</span>
                          </li>
                        </ul>
                      </div>
                      <div className="self-stretch relative">
                        <p className="[margin-block-start:0] [margin-block-end:16px] font-medium">
                          Professional Background
                        </p>
                        <ul className="m-0 text-[1rem] pl-[1.5rem] text-darkslategray-300">
                          <li className="mb-[0rem]">
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
                    <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pl-[0.562rem] pr-[0rem] box-border max-w-full">
                      <div className="h-[1.875rem] flex-1 relative font-medium inline-block max-w-full mq450:text-[1rem]">
                        <p className="[margin-block-start:0] [margin-block-end:16px]">
                          Reviews
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-[24.188rem] flex flex-col items-start justify-start pt-[1.75rem] px-[0rem] pb-[0rem] box-border max-w-full ml-[-26.188rem]">
                    <div className="self-stretch shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-6xl bg-whitesmoke-100 overflow-hidden flex flex-col items-start justify-start pt-[1.5rem] px-[1.312rem] pb-[1.562rem] box-border max-w-full">
                      <div className="w-[19.938rem] h-[1.938rem] relative font-medium inline-block shrink-0 mq450:text-[1rem]">
                        Contact Information
                      </div>
                      <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pl-[0.625rem] pr-[0.562rem] box-border max-w-full mt-[-0.438rem] text-[1.125rem]">
                        <div className="flex-1 relative inline-block max-w-full">
                          <p className="[margin-block-start:0] [margin-block-end:14px]">
                            Email : johndoe@gmail.com
                          </p>
                          <p className="[margin-block-start:0] [margin-block-end:14px]">
                            Phone : (+94) 123 4567
                          </p>
                          <p className="m-0">&nbsp;</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pl-[0.375rem] pr-[0.875rem] box-border max-w-full">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[1.062rem] max-w-full">
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
