import AiesecValues from "../Membership/Components/AiesecValues";
import Questions from "../Membership/Components/Questions";
import GetToKnow from "./Components/GetToKnow";
import History from "./Components/History";
import "../../Assets/Scss/AboutUs/AboutUs.scss";
import { useEffect } from "react";
import AboutNumbers from "./Components/AboutNumbers";

function AboutUs(props) {
  useEffect(() => {
    props.callBack();
  });
  return (
    <div className="AboutUs">
      <div className="bgImage">
        <GetToKnow />
        <AboutNumbers />
      </div>
      <History />
      <AiesecValues />
      <div className="tunisiaMap" />
      <Questions />
    </div>
  );
}
export default AboutUs;
