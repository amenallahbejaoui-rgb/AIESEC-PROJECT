import { Col, Row } from "react-bootstrap";
import "../../../../Assets/Scss/GlobalTeacher/InfoGTe.scss";
import GTeExperience from "../../../../Assets/Images/GTeExperience.png";
import GTeDevelop from "../../../../Assets/Images/GTeDevelop.png";
import GTeExpand from "../../../../Assets/Images/GTeExpand.png";

function InfoGTe() {
  return (
    <div className="InfoGTe">
      <Row>
        <Col className="infoBlock discover" md={4} sm={12}>
          <img
            src={GTeExperience}
            alt="Global teacher International experience"
          />
          <p className="title">GAIN VALUABLE EXPERIENCE ABROAD</p>
          <p className="content">
            Expand your horizons by immersing yourself in a new intercultural 
            environment and become a valuable asset to the school or teaching
             institution where you will work.
          </p>
        </Col>
        <Col className="infoBlock" md={4} sm={12}>
          <img src={GTeDevelop} alt="Global volunteer discover" />
          <p className="title">DEVELOP YOURSELF PERSONALLY</p>
          <p className="content">
            Our partners are committed to providing you with an enriching experience 
            that sets you apart from others and helps you grow.
          </p>
        </Col>
        <Col className="infoBlock challenge" md={4} sm={12}>
          <img src={GTeExpand} alt="Global volunteer discover" />
          <p className="title">EXPAND YOUR PROFESSIONAL SKILLS</p>
          <p className="content">
            Strengthen your teaching and personal abilities through hands-on, 
            practical experience.
          </p>
        </Col>
      </Row>
    </div>
  );
}

export default InfoGTe;
