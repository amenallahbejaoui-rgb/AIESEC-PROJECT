import { Col, Row } from "react-bootstrap";
import "../../../../Assets/Scss/GlobalTalent/InfoGTa.scss";
import GTaGlobe from "../../../../Assets/Images/globeGta.png";
import GTaNetwork from "../../../../Assets/Images/networking.png";
import GTaAdvantage from "../../../../Assets/Images/gtaadvantage.png";

function InfoGTa() {
  return (
    <div className="InfoGTa">
      <Row>
        <Col className="infoBlock discover" md={4} sm={12}>
          <img src={GTaGlobe} alt="Global volunteer discover" />
          <p className="title">GET INTERNATIONAL EXPERIENCE</p>
          <p className="content">
            You gain experience in new working environments, learn the skills
            needed in international environments and bring a new perspective to
            the company.
          </p>
        </Col>
        <Col className="infoBlock" md={4} sm={12}>
          <img src={GTaNetwork} alt="Global volunteer discover" />
          <p className="title">BUILD A LIFELONG NETWORK</p>
          <p className="content">
            Connect with people from all over the world and continue to expand
            your professional network for your future.
          </p>
        </Col>
        <Col className="infoBlock challenge" md={4} sm={12}>
          <img src={GTaAdvantage} alt="Global volunteer discover" />
          <p className="title">GAIN A PROFESSIONAL ADVANTAGE</p>
          <p className="content">
            Our partners are committed to providing you with a valuable
            experience that differentiates you from others.
          </p>
        </Col>
      </Row>
    </div>
  );
}

export default InfoGTa;
