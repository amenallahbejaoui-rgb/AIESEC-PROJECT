import "../../../../Assets/Scss/Globalvolunteer/LiveExpGV.scss";
function LiveExpGV() {
  return (
    <div className="liveExpGV">
      <div className="text">
        <p className="title">Live the experience</p>
        <p className="content">
          Watch this video to better understand what global volunteer is and get
          a glimpse of the journey you can embark on!
        </p>
      </div>
      <div className="video embed-responsive embed-responsive-16by9">
        <iframe
          className="embed-responsive-item"
          src="https://www.youtube.com/embed/FrVDzZYPQAc?si=SqLPSf9fttYYmTAj"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          width="80%"
          height="100%"
        ></iframe>
      </div>
    </div>
  );
}
export default LiveExpGV;
