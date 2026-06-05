import "../../../Assets/Scss/AboutUs/History.scss";
function History() {
  return (
    <>
      <div className="history-desktop">
        <h1 className="title">The History</h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="724"
          viewBox="0 0 10 724"
          fill="none"
          className="centerLine"
        >
          <path
            d="M5 5L5.00003 719"
            stroke="#037EF3"
            strokeWidth="10"
            strokeLinecap="round"
          />
        </svg>
        <div style={{ position: "relative" }}>
          <div className="rectangleLeft">
            <p className="rectTitle">1948</p>
            <p>AIESEC International</p>
          </div>
          <hr className="connectorDotsLeft" />
        </div>
        <div style={{ position: "relative" }}>
          <div className="rectangleRight">
            <p className="rectTitle">1962</p>
            <p>AIESEC In Tunisia</p>
          </div>
          <hr className="connectorDotsRight" />
        </div>
        <div style={{ position: "relative" }}>
          <div className="rectangleLeft">
            <p className="rectTitle">2019</p>
            <p>3500+ Experiences delivered</p>
          </div>
          <hr className="connectorDotsLeft" />
        </div>
        <div style={{ position: "relative" }}>
          <div className="rectangleRight">
            <p className="rectTitle">2023</p>
            <p>1000+ Experiences delivered post COVID</p>
          </div>
          <hr className="connectorDotsRight" />
        </div>
      </div>
      <div className="history-mobile">
        <h1 className="title">The History</h1>
        <div className="flex-container">
          <div className="rectangleWhite rectangles">
            <p className="rectTitle">1948</p>
            <p>AIESEC International</p>
          </div>
          <div className="lineBg">
            <svg
              width="8"
              height="8"
              viewBox="0 0 12 12"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="6" cy="6" r="6" fill="white" />
            </svg>
            <svg
              width="8"
              height="8"
              viewBox="0 0 12 12"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="6" cy="6" r="6" fill="white" />
            </svg>
            <svg
              width="8"
              height="8"
              viewBox="0 0 12 12"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="6" cy="6" r="6" fill="white" />
            </svg>
            <svg
              width="8"
              height="8"
              viewBox="0 0 12 12"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="6" cy="6" r="6" fill="white" />
            </svg>
          </div>
          <div className="rectangleBlue rectangles">
            <p className="rectTitle">1962</p>
            <p>AIESEC In Tunisia</p>
          </div>
          <div className="lineBg">
            <svg
              width="8"
              height="8"
              viewBox="0 0 12 12"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="6" cy="6" r="6" fill="white" />
            </svg>
            <svg
              width="8"
              height="8"
              viewBox="0 0 12 12"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="6" cy="6" r="6" fill="white" />
            </svg>
            <svg
              width="8"
              height="8"
              viewBox="0 0 12 12"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="6" cy="6" r="6" fill="white" />
            </svg>
            <svg
              width="8"
              height="8"
              viewBox="0 0 12 12"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="6" cy="6" r="6" fill="white" />
            </svg>
          </div>
          <div className="rectangleWhite rectangles">
            <p className="rectTitle">2019</p>
            <p>3500+ Experiences delivered</p>
          </div>
          <div className="lineBg">
            <svg
              width="8"
              height="8"
              viewBox="0 0 12 12"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="6" cy="6" r="6" fill="white" />
            </svg>
            <svg
              width="8"
              height="8"
              viewBox="0 0 12 12"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="6" cy="6" r="6" fill="white" />
            </svg>
            <svg
              width="8"
              height="8"
              viewBox="0 0 12 12"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="6" cy="6" r="6" fill="white" />
            </svg>
            <svg
              width="8"
              height="8"
              viewBox="0 0 12 12"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="6" cy="6" r="6" fill="white" />
            </svg>
          </div>
          <div className="rectangleBlue rectangles">
            <p className="rectTitle">2023</p>
            <p>1000+ Experiences delivered post COVID</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default History;
