import ApplyNow from "./Components/Applynow";
import AboutPrograms from "./Components/AboutPrograms";
import TheProcess from "./Components/TheProcess";
import AboutAIESEC from "./Components/AboutAIESEC";
import OurPartners from "./Components/OurPartners";
import "../../Assets/Scss/Homepage/Homepage.scss";
import Testimonials from "./Components/Testimonials";
import Numbers from "./Components/Numbers";
import video from "../../Assets/Images/Landing Page Video.mp4";

function Homepage() {
  return (
    <div>
      <div className="video-wrapper">
        <video playsInline autoPlay muted loop>
          <source src={video} type="video/webm" />
          Your browser does not support the video tag.
        </video>
        <ApplyNow className="header" />
      </div>
      <Numbers />
      <AboutPrograms />
      <TheProcess />
      <AboutAIESEC />
      <OurPartners />
      <Testimonials />
    </div>
  );
}

export default Homepage;
