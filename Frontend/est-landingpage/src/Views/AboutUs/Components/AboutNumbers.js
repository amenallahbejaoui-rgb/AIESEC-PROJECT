import { Col, Row } from "react-bootstrap";
import earth from "../../../Assets/Images/earth.png";
import partner from "../../../Assets/Images/partner.png";
import success from "../../../Assets/Images/success.png";
import "../../../Assets/Scss/AboutUs/AboutNumbers.scss";

function AboutNumbers() {
  return (
    <div className="aboutNumbers">
      <Row>
        <Col md={4} sm={6}>
          <img className="aboutImage" src={earth} alt="earth" />
          <p className="bigNumber">109+</p>
          <p className="numberTitle">Countries and territories</p>
        </Col>
        <Col md={4} sm={6}>
          <img className="aboutImage" src={partner} alt="earth" />
          <p className="bigNumber">5000+</p>
          <p className="numberTitle">Partner organizations</p>
        </Col>
        <Col md={4} sm={6}>
          <img className="aboutImage" src={success} alt="earth" />
          <p className="bigNumber">30,000+</p>
          <p className="numberTitle">Experiences every year</p>
        </Col>
      </Row>
    </div>
  );
}
export default AboutNumbers;
