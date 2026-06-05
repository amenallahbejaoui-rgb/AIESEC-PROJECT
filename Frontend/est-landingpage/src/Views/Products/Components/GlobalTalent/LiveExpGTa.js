import "../../../../Assets/Scss/GlobalTalent/LiveExpGTa.scss";

function LiveExpGTa() {
  return (
    <div className="LiveExpGTa">
      <div className="text">
        <p className="title">Live the experience</p>
        <p className="content">
          Discover what it means to be a Global Talent intern and see the
          experience of some of our past participants in this video!
        </p>
      </div>
      <iframe
        width="1060"
        height="600"
        src="https://www.youtube.com/embed/Sb4NrSkurw0?si=wZnALT2rCNlcMhEQ"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
}
export default LiveExpGTa;
