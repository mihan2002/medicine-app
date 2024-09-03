import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import NameCard1 from "../components/NameCard1";
import NameCard from "../components/NameCard";
import "./UserDoctosList.css";

const UserDoctosList = () => {
  return (
    <div className="user-doctos-list">
      <Sidebar
        creditCard1IconPosition="unset"
        creditCard1IconTop="unset"
        creditCard1IconLeft="unset"
        myPrivilegesColor="#b1b1b1"
        propColor="#2d60ff"
      />
      <main className="content9">
        <section className="page">
          <Header
            rectangleDivPosition="sticky"
            rectangleDivTop="0"
            rectangleDivLeft="unset"
            rectangleDivPadding="var(--padding-6xl) var(--padding-11xl) var(--padding-6xl) 65.25rem"
            rectangleDivGap="66.25rem"
            rectangleDivAlignSelf="stretch"
            medAiConnectMarginLeft="-73.75rem"
            userAvatarMargin="0"
            group3="/group-3.svg"
          />
          <div className="hero">
            <div className="hero-content">
              <div className="hero-message">
                <h2 className="connect-with-our">
                  Connect with our top-rated doctors for personalized medical
                  care.
                </h2>
              </div>
              <div className="container1">
                <div className="search-filters">
                  <div className="search-bar">
                    <div className="search">
                      <div className="search-child" />
                      <img
                        className="magnifying-glass-1-icon"
                        alt=""
                        src="/magnifyingglass-1.svg"
                      />
                      <div className="search-label">
                        <a className="search1">{`Search `}</a>
                      </div>
                    </div>
                    <img className="filter-icon" alt="" src="/filter.svg" />
                  </div>
                </div>
                <div className="doctors">
                  <div className="doctors1">
                    <NameCard1 />
                    <NameCard1 />
                    <NameCard1 />
                    <NameCard1 />
                    <NameCard1 />
                    <NameCard1 />
                  </div>
                  <div className="more-doctors">
                    <div className="additional-doctors">
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
