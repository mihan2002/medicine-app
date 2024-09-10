import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import NameCard1 from "../components/NameCard1";
import NameCard from "../components/NameCard";

const UserDoctosList = () => {
  return (
    <div className="w-full relative bg-aliceblue-100 overflow-hidden flex flex-row items-start justify-start leading-[normal] tracking-[normal] mq1050:pl-[1.25rem] mq1050:pr-[1.25rem] mq1050:box-border">
      <Sidebar
        creditCard1IconPosition="unset"
        creditCard1IconTop="unset"
        creditCard1IconLeft="unset"
        myPrivilegesColor="#b1b1b1"
        propColor="#2d60ff"
      />
      <main className="flex-1 flex flex-col items-start justify-start pt-[0.062rem] px-[0rem] pb-[0rem] box-border max-w-[calc(100%_-_250px)] mq1050:max-w-full">
        <section className="self-stretch flex flex-col items-end justify-start gap-[2.312rem] max-w-full text-center text-[1.5rem] text-black font-body-regular-400 mq750:gap-[1.125rem]">
          <Header
            rectangleDivPosition="sticky"
            rectangleDivTop="0"
            rectangleDivLeft="unset"
            rectangleDivPadding="1.562rem 1.875rem 1.562rem 65.25rem"
            rectangleDivGap="66.25rem"
            rectangleDivAlignSelf="stretch"
            medAiConnectMarginLeft="-73.75rem"
            userAvatarMargin="0"
            group3="/group-3.svg"
          />
          <div className="self-stretch flex flex-row items-start justify-center py-[0rem] pl-[1.375rem] pr-[1.25rem] box-border max-w-full">
            <div className="w-[63rem] flex flex-col items-start justify-start gap-[3.937rem] max-w-full mq1050:gap-[1.938rem] mq750:gap-[1rem]">
              <div className="self-stretch flex flex-row items-start justify-start py-[0rem] px-[1.437rem] box-border max-w-full">
                <h2 className="m-0 flex-1 relative text-inherit leading-[2.5rem] capitalize font-semibold font-[inherit] inline-block max-w-full mq450:text-[1.188rem] mq450:leading-[2rem]">
                  Connect with our top-rated doctors for personalized medical
                  care.
                </h2>
              </div>
              <div className="self-stretch rounded-6xl bg-gray-white overflow-hidden flex flex-col items-start justify-start pt-[1.625rem] pb-[4.118rem] pl-[2.75rem] pr-[2.687rem] box-border gap-[1.875rem] max-w-full text-left text-[0.938rem] text-lightsteelblue-200 font-headings-h6 mq450:pb-[1.75rem] mq450:box-border mq1050:pt-[1.25rem] mq1050:pb-[2.688rem] mq1050:pl-[1.375rem] mq1050:pr-[1.313rem] mq1050:box-border mq750:gap-[0.938rem]">
                <div className="self-stretch flex flex-row items-start justify-center max-w-full">
                  <div className="w-[44.813rem] flex flex-row items-start justify-start flex-wrap content-start gap-[0.812rem] max-w-full">
                    <div className="flex-1 rounded-21xl bg-whitesmoke-200 flex flex-row items-start justify-start py-[0.937rem] px-[1.562rem] box-border gap-[0.937rem] min-w-[4.375rem] max-w-full">
                      <div className="h-[3.125rem] w-[40.875rem] relative rounded-21xl bg-whitesmoke-200 hidden max-w-full" />
                      <img
                        className="h-[1.25rem] w-[1.25rem] relative overflow-hidden shrink-0 min-h-[1.25rem] z-[1]"
                        alt=""
                        src="/magnifyingglass-1.svg"
                      />
                      <div className="flex flex-col items-start justify-start pt-[0.062rem] px-[0rem] pb-[0rem]">
                        <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[3.125rem] z-[1]">{`Search `}</a>
                      </div>
                    </div>
                    <img
                      className="h-[3.125rem] w-[3.125rem] relative min-h-[3.125rem]"
                      alt=""
                      src="/filter.svg"
                    />
                  </div>
                </div>
                <div className="self-stretch h-[45.569rem] rounded-6xl bg-gray-white flex flex-col items-start justify-start pt-[0rem] px-[2.5rem] pb-[10.943rem] box-border gap-[1.875rem] max-w-full mq450:h-auto mq1050:pb-[7.125rem] mq1050:box-border mq750:pb-[4.625rem] mq750:box-border">
                  <div className="self-stretch flex flex-row items-start justify-start flex-wrap content-start gap-x-[1.875rem] gap-y-[1.812rem] min-h-[34.625rem] shrink-0">
                    <NameCard1 />
                    <NameCard1 />
                    <NameCard1 />
                    <NameCard1 />
                    <NameCard1 />
                    <NameCard1 />
                  </div>
                  <div className="w-[43.438rem] flex flex-row items-start justify-end max-w-full shrink-0">
                    <div className="h-[15.25rem] w-[34.375rem] flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[0rem] box-border gap-[1.875rem] shrink-0 max-w-full mq450:h-auto">
                      <NameCard />
                      <NameCard />
                    </div>
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

export default UserDoctosList;
