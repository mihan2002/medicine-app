import ContentContainer from "../components/ContentContainer";

const UserLogin = () => {
  return (
    <div className="w-full relative bg-aliceblue-100 overflow-hidden flex flex-row items-start justify-center pt-[3.562rem] px-[1.25rem] pb-[3.625rem] box-border leading-[normal] tracking-[normal]">
      <main className="w-[79.5rem] rounded-mini bg-gray-white overflow-hidden shrink-0 flex flex-row items-end justify-start gap-[7.112rem] max-w-full text-left text-[0.875rem] text-gray-white font-headings-h6 lg:gap-[3.563rem] lg:flex-wrap mq750:gap-[1.75rem]">
        <div className="w-[39.638rem] flex flex-col items-center justify-start pt-[5.312rem] pb-[19.125rem] pl-[1.312rem] pr-[1.25rem] box-border relative gap-[15rem] min-w-[39.638rem] max-w-full lg:flex-1 mq750:gap-[7.5rem] mq750:min-w-full mq450:gap-[3.75rem] mq450:pt-[2.25rem] mq450:pb-[8.063rem] mq450:box-border mq1050:pt-[3.438rem] mq1050:pb-[12.438rem] mq1050:box-border">
          <img
            className="w-full h-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] max-w-full overflow-hidden max-h-full object-cover"
            loading="lazy"
            alt=""
            src="/sidenavbg@2x.png"
          />
          <img
            className="w-[0.063rem] h-[52.188rem] relative hidden z-[1]"
            alt=""
            src="/dividervertical.svg"
          />
          <div className="w-[13.125rem] hidden flex-col items-start justify-start z-[2]">
            <div className="self-stretch flex flex-row items-center justify-start">
              <div className="h-[1.5rem] w-[0.125rem] relative bg-mediumslateblue-100 hidden" />
              <div className="h-[3.063rem] flex-1 flex flex-row items-center justify-start py-[1rem] px-[1.5rem] box-border gap-[0.625rem]">
                <div className="self-stretch flex-1 flex flex-row items-center justify-start gap-[1.25rem]">
                  <img
                    className="h-[1rem] w-[1rem] relative object-cover"
                    alt=""
                    src="/icon@2x.png"
                  />
                  <div className="self-stretch flex-1 relative font-semibold opacity-[0.8]">
                    Account
                  </div>
                </div>
                <div className="h-[1.188rem] hidden flex-col items-start justify-start text-[0.75rem] text-mediumslateblue-100">
                  <div className="w-[1.75rem] flex-1 rounded-81xl bg-lavender-100 flex flex-col items-center justify-start py-[0.125rem] px-[0.625rem] box-border">
                    <div className="self-stretch flex-1 flex flex-row items-center justify-start gap-[0.375rem]">
                      <img
                        className="h-[0.75rem] w-[0.75rem] relative hidden"
                        alt=""
                        src="/iconleft.svg"
                      />
                      <b className="self-stretch flex-1 relative">6</b>
                      <img
                        className="h-[1rem] w-[1rem] relative hidden"
                        alt=""
                        src="/iconright.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-start">
              <div className="h-[1.5rem] w-[0.125rem] relative bg-mediumslateblue-100 hidden" />
              <div className="h-[3.063rem] flex-1 flex flex-row items-center justify-start py-[1rem] px-[1.5rem] box-border gap-[0.625rem]">
                <div className="self-stretch flex-1 flex flex-row items-center justify-start gap-[1.25rem]">
                  <img
                    className="h-[1rem] w-[1rem] relative"
                    alt=""
                    src="/icon-1.svg"
                  />
                  <div className="self-stretch flex-1 relative font-semibold opacity-[0.8]">
                    Logout
                  </div>
                </div>
                <div className="h-[1.188rem] hidden flex-col items-start justify-start text-[0.75rem] text-mediumslateblue-100">
                  <div className="w-[1.75rem] flex-1 rounded-81xl bg-lavender-100 flex flex-col items-center justify-start py-[0.125rem] px-[0.625rem] box-border">
                    <div className="self-stretch flex-1 flex flex-row items-center justify-start gap-[0.375rem]">
                      <img
                        className="h-[0.75rem] w-[0.75rem] relative hidden"
                        alt=""
                        src="/iconleft.svg"
                      />
                      <b className="self-stretch flex-1 relative">6</b>
                      <img
                        className="h-[1rem] w-[1rem] relative hidden"
                        alt=""
                        src="/iconright.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[10.125rem] hidden flex-row items-center justify-between gap-[1.25rem] z-[3] text-center text-[1.125rem]">
            <img
              className="h-[1rem] w-[1rem] relative object-cover"
              alt=""
              src="/icon-2@2x.png"
            />
            <div className="flex flex-row items-center justify-start">
              <div className="h-[2.875rem] w-[2.875rem] relative">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-81xl bg-mediumslateblue-100">
                  <img
                    className="absolute h-full w-full top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded-81xl max-w-full overflow-hidden max-h-full object-cover"
                    alt=""
                    src="/image@2x.png"
                  />
                  <div className="absolute h-[31.52%] w-[31.52%] top-[-1.96%] right-[-1.96%] bottom-[70.43%] left-[70.43%] rounded-[50%] bg-mediumaquamarine border-gray-white border-[0px] border-solid box-border" />
                  <b className="absolute w-[72.39%] top-[32.39%] left-[13.91%] hidden items-center justify-center">
                    MJ
                  </b>
                </div>
              </div>
            </div>
            <img
              className="h-[1rem] w-[1rem] relative"
              alt=""
              src="/icon-3.svg"
            />
          </div>
          <div className="hidden flex-col items-start justify-start z-[4]">
            <div className="w-[13.125rem] flex flex-row items-center justify-start">
              <div className="h-[1.5rem] w-[0.125rem] relative bg-mediumslateblue-100 hidden" />
              <div className="h-[3.063rem] flex-1 flex flex-row items-center justify-start py-[1rem] px-[1.5rem] box-border gap-[0.625rem]">
                <div className="self-stretch flex-1 flex flex-row items-center justify-start gap-[1.25rem]">
                  <img
                    className="h-[1rem] w-[1rem] relative"
                    alt=""
                    src="/icon-4.svg"
                  />
                  <div className="self-stretch flex-1 relative font-semibold opacity-[0.8]">
                    Settings
                  </div>
                </div>
                <div className="h-[1.188rem] hidden flex-col items-start justify-start text-[0.75rem] text-mediumslateblue-100">
                  <div className="w-[1.75rem] flex-1 rounded-81xl bg-lavender-100 flex flex-col items-center justify-start py-[0.125rem] px-[0.625rem] box-border">
                    <div className="self-stretch flex-1 flex flex-row items-center justify-start gap-[0.375rem]">
                      <img
                        className="h-[0.75rem] w-[0.75rem] relative hidden"
                        alt=""
                        src="/iconleft.svg"
                      />
                      <b className="self-stretch flex-1 relative">6</b>
                      <img
                        className="h-[1rem] w-[1rem] relative hidden"
                        alt=""
                        src="/iconright.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[16rem] flex flex-row items-center justify-start">
              <div className="h-[1.5rem] w-[0.125rem] relative bg-mediumslateblue-100 hidden" />
              <div className="h-[3.188rem] flex-1 flex flex-row items-center justify-start py-[1rem] px-[1.5rem] box-border gap-[0.625rem]">
                <div className="h-[1.063rem] flex-1 flex flex-row items-center justify-start gap-[1.25rem]">
                  <img
                    className="h-[1rem] w-[1rem] relative"
                    alt=""
                    src="/icon-5.svg"
                  />
                  <div className="self-stretch flex-1 relative font-semibold opacity-[0.8]">
                    Notifications
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start text-[0.75rem] text-salmon">
                  <div className="w-[2.25rem] flex-1 rounded-81xl bg-mistyrose flex flex-col items-center justify-start py-[0.125rem] px-[0.625rem] box-border">
                    <div className="self-stretch flex-1 flex flex-row items-center justify-start gap-[0.375rem]">
                      <img
                        className="h-[0.75rem] w-[0.75rem] relative hidden"
                        alt=""
                        src="/iconleft.svg"
                      />
                      <b className="self-stretch flex-1 relative">23</b>
                      <img
                        className="h-[1rem] w-[1rem] relative hidden"
                        alt=""
                        src="/iconright.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            className="w-[13.125rem] h-[0rem] relative hidden z-[5]"
            alt=""
            src="/dividerhorizontal.svg"
          />
          <div className="w-[15.625rem] hidden flex-col items-start justify-start py-[0rem] pl-[0rem] pr-[0.125rem] box-border z-[6]">
            <div className="w-[13.125rem] flex flex-row items-center justify-start">
              <div className="h-[1.5rem] w-[0.125rem] relative bg-mediumslateblue-100 hidden" />
              <div className="h-[3.063rem] flex-1 flex flex-row items-center justify-start py-[1rem] px-[1.5rem] box-border gap-[0.625rem]">
                <div className="self-stretch flex-1 flex flex-row items-center justify-start gap-[1.25rem]">
                  <img
                    className="h-[1rem] w-[1rem] relative"
                    alt=""
                    src="/icon-6.svg"
                  />
                  <div className="self-stretch flex-1 relative font-semibold opacity-[0.8]">
                    Dashboard
                  </div>
                </div>
                <div className="h-[1.188rem] hidden flex-col items-start justify-start text-[0.75rem] text-mediumslateblue-100">
                  <div className="w-[1.75rem] flex-1 rounded-81xl bg-lavender-100 flex flex-col items-center justify-start py-[0.125rem] px-[0.625rem] box-border">
                    <div className="self-stretch flex-1 flex flex-row items-center justify-start gap-[0.375rem]">
                      <img
                        className="h-[0.75rem] w-[0.75rem] relative hidden"
                        alt=""
                        src="/iconleft.svg"
                      />
                      <b className="self-stretch flex-1 relative">6</b>
                      <img
                        className="h-[1rem] w-[1rem] relative hidden"
                        alt=""
                        src="/iconright.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[13.125rem] flex flex-row items-center justify-start">
              <div className="h-[1.5rem] w-[0.125rem] relative bg-mediumslateblue-100 hidden" />
              <div className="h-[3.063rem] flex-1 flex flex-row items-center justify-start py-[1rem] px-[1.5rem] box-border gap-[0.625rem]">
                <div className="self-stretch flex-1 flex flex-row items-center justify-start gap-[1.25rem]">
                  <img
                    className="h-[1rem] w-[1rem] relative"
                    alt=""
                    src="/icon-7.svg"
                  />
                  <div className="self-stretch flex-1 relative font-semibold opacity-[0.8]">
                    Analytics
                  </div>
                </div>
                <div className="h-[1.188rem] hidden flex-col items-start justify-start text-[0.75rem] text-mediumslateblue-100">
                  <div className="w-[1.75rem] flex-1 rounded-81xl bg-lavender-100 flex flex-col items-center justify-start py-[0.125rem] px-[0.625rem] box-border">
                    <div className="self-stretch flex-1 flex flex-row items-center justify-start gap-[0.375rem]">
                      <img
                        className="h-[0.75rem] w-[0.75rem] relative hidden"
                        alt=""
                        src="/iconleft.svg"
                      />
                      <b className="self-stretch flex-1 relative">6</b>
                      <img
                        className="h-[1rem] w-[1rem] relative hidden"
                        alt=""
                        src="/iconright.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-start">
              <div className="h-[3.188rem] flex-1 flex flex-row items-center justify-start">
                <div className="h-[1.5rem] w-[0.125rem] relative bg-gray-white" />
                <div className="self-stretch flex-1 flex flex-row items-center justify-start py-[1rem] px-[1.375rem] gap-[0.625rem]">
                  <div className="h-[1.063rem] flex-1 flex flex-row items-center justify-start gap-[1.25rem]">
                    <img
                      className="h-[1rem] w-[1rem] relative"
                      alt=""
                      src="/icon-8.svg"
                    />
                    <div className="self-stretch flex-1 relative font-semibold">
                      Messages
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start text-[0.75rem]">
                    <div className="w-[1.75rem] flex-1 rounded-81xl bg-lavender-100 flex flex-col items-center justify-start py-[0.125rem] px-[0.625rem] box-border">
                      <div className="self-stretch flex-1 flex flex-row items-center justify-start gap-[0.375rem]">
                        <img
                          className="h-[0.75rem] w-[0.75rem] relative hidden"
                          alt=""
                          src="/iconleft.svg"
                        />
                        <b className="self-stretch flex-1 relative">6</b>
                        <img
                          className="h-[1rem] w-[1rem] relative hidden"
                          alt=""
                          src="/iconright.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-start">
              <div className="h-[1.5rem] w-[0.125rem] relative bg-mediumslateblue-100 hidden" />
              <div className="h-[3.188rem] flex-1 flex flex-row items-center justify-start py-[1rem] px-[1.5rem] box-border gap-[0.625rem]">
                <div className="h-[1.063rem] flex-1 flex flex-row items-center justify-start gap-[1.25rem]">
                  <img
                    className="h-[1rem] w-[1rem] relative object-cover"
                    alt=""
                    src="/icon-9@2x.png"
                  />
                  <div className="self-stretch flex-1 relative font-semibold opacity-[0.8]">
                    Collections
                  </div>
                </div>
                <div className="self-stretch w-[1.75rem] flex flex-col items-start justify-start text-[0.75rem] text-mediumslateblue-100">
                  <div className="w-[3.625rem] rounded-81xl bg-lavender-100 hidden flex-col items-center justify-start py-[0.125rem] px-[0.625rem] box-border">
                    <div className="self-stretch flex flex-row items-center justify-start py-[0rem] px-[0.937rem] gap-[0.375rem]">
                      <img
                        className="h-[0.75rem] w-[0.75rem] relative hidden"
                        alt=""
                        src="/iconleft.svg"
                      />
                      <b className="flex-1 relative">6</b>
                      <img
                        className="h-[1rem] w-[1rem] relative hidden"
                        alt=""
                        src="/iconright.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[13.125rem] flex flex-row items-center justify-start">
              <div className="h-[1.5rem] w-[0.125rem] relative bg-mediumslateblue-100 hidden" />
              <div className="h-[3.063rem] flex-1 flex flex-row items-center justify-start py-[1rem] px-[1.5rem] box-border gap-[0.625rem]">
                <div className="self-stretch flex-1 flex flex-row items-center justify-start gap-[1.25rem]">
                  <img
                    className="h-[1rem] w-[1rem] relative"
                    alt=""
                    src="/icon-10.svg"
                  />
                  <div className="self-stretch flex-1 relative font-semibold opacity-[0.8]">
                    Users
                  </div>
                </div>
                <div className="h-[1.188rem] hidden flex-col items-start justify-start text-[0.75rem] text-mediumslateblue-100">
                  <div className="w-[1.75rem] flex-1 rounded-81xl bg-lavender-100 flex flex-col items-center justify-start py-[0.125rem] px-[0.625rem] box-border">
                    <div className="self-stretch flex-1 flex flex-row items-center justify-start gap-[0.375rem]">
                      <img
                        className="h-[0.75rem] w-[0.75rem] relative hidden"
                        alt=""
                        src="/iconleft.svg"
                      />
                      <b className="self-stretch flex-1 relative">6</b>
                      <img
                        className="h-[1rem] w-[1rem] relative hidden"
                        alt=""
                        src="/iconright.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[29.575rem] flex flex-row items-start justify-center py-[0rem] pl-[0rem] pr-[0.062rem] box-border max-w-full text-[1rem] text-gray-300 font-headline-3">
            <div className="rounded-71xl bg-gray-100 flex flex-row items-start justify-start py-[1.562rem] px-[4.125rem] z-[1]">
              <b className="relative leading-[1rem] inline-block min-w-[2.875rem]">
                LOGO
              </b>
            </div>
          </div>
          <div className="w-[29.563rem] flex flex-col items-start justify-start gap-[3.437rem] max-w-full text-center text-[2.5rem] font-headline-3 mq750:gap-[1.688rem]">
            <h1 className="m-0 self-stretch h-[3.313rem] relative text-inherit tracking-[-0.01em] leading-[3rem] font-bold font-[inherit] inline-block shrink-0 z-[1] mq450:text-[1.5rem] mq450:leading-[1.813rem] mq1050:text-[2rem] mq1050:leading-[2.375rem]">
              Welcome to MedAI Connect
            </h1>
            <div className="self-stretch flex flex-row items-start justify-center py-[0rem] px-[1.25rem] text-left text-[1.125rem] font-headings-h6">
              <div className="relative leading-[1.875rem] z-[1]">
                Breaking Barriers in Healthcare
              </div>
            </div>
          </div>
          <img
            className="w-[14rem] h-[14rem] relative overflow-hidden shrink-0 hidden z-[9]"
            alt=""
            src="/antdesignpicturefilled.svg"
          />
        </div>
        <div className="h-[0.75rem] w-[28.619rem] relative hidden max-w-full text-[0.688rem] text-slategray-300">
          <div className="absolute w-full top-[0%] left-[0%] leading-[0.75rem] flex items-center h-full">
            This is a helper text
          </div>
        </div>
        <div className="w-[26.5rem] flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[5.937rem] box-border min-w-[26.5rem] min-h-[43.938rem] max-w-full lg:flex-1 mq750:pb-[3.875rem] mq750:box-border mq750:min-w-full">
          <ContentContainer />
        </div>
      </main>
    </div>
  );
};

export default UserLogin;
