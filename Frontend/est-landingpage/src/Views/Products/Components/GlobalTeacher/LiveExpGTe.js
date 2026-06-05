import "../../../../Assets/Scss/GlobalTeacher/LiveExpGTe.scss";

function LiveExpGTe() {
  return (
    <div className="LiveExpGTe">
      <div className="text">
        <p className="title">Live the experience</p>
        <p className="content">
          See the experience of a Global Teacher participant and know what it
          means to go on this type of internship abroad with AIESEC!
        </p>
      </div>
      <div className="video embed-responsive embed-responsive-16by9">
        <iframe
          className="embed-responsive-item"
          src="https://www.youtube.com/embed/s8UBQh5yeB0?si=FRd62JQ013mYWd_Q"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          width="80%"
          height="100%"
        ></iframe>
      </div>
    </div>
  );
}
export default LiveExpGTe;
