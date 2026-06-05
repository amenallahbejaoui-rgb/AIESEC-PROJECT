import { Col, Row } from "react-bootstrap";
import "../../../Assets/Scss/Membership/AiesecValues.scss";
import Values from "../../../Assets/Images/aiesecValues.png";
import Integrity from "../../../Assets/Images/integrity.png";
import Strive from "../../../Assets/Images/strive.png";
import Participate from "../../../Assets/Images/participate.png";
import Sustain from "../../../Assets/Images/sustain.png";
import Lead from "../../../Assets/Images/lead.png";
import Diverse from "../../../Assets/Images/diverse.png";
function AiesecValues() {
  return (
    <div className="aiesecValues">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="39"
        height="364"
        viewBox="0 0 39 364"
        fill="none"
        className="line1"
      >
        <path
          d="M-42.0444 362.286C-42.0444 362.286 61.9517 266.28 31.1717 152.458C0.391735 38.637 -37.2605 1.98249 -37.2605 1.98249"
          stroke="#037EF3"
          strokeWidth="4"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="73"
        height="364"
        viewBox="0 0 73 364"
        fill="none"
        className="line2"
      >
        <path
          d="M-8.2793 361.818C-8.2793 361.818 95.7168 265.812 64.9368 151.99C34.1569 38.1687 -3.49538 1.51423 -3.49538 1.51423"
          stroke="#037EF3"
          strokeWidth="4"
        />
      </svg>
      <Row className="valuesTop">
        <Col md={6}>
          <p className="title">We create value-driven leaders</p>
          <p className="content">
            AIESEC enables you to develop the values we believe leaders should
            embody.
          </p>
        </Col>
        <Col md={6}>
          <img className="valuesImage" src={Values} alt="aiesec values" />
        </Col>
      </Row>
      <Row className="valuesBottom">
        <Col md={4}>
          <p className="valueTitle">
            <img
              className="valuesmall"
              src={Integrity}
              alt="Demonstrating Integrity"
            />
            Demonstrating Integrity
          </p>
          <p className="valueContent">
            By doing what's right over what's easy, you develop leadership that
            demonstrates integrity.
          </p>
        </Col>
        <Col md={4}>
          <p className="valueTitle">
            <img
              className="valuesmall"
              src={Strive}
              alt="Striving for Excellence"
            />
            Striving for Excellence
          </p>
          <p className="valueContent">
            By taking up challenging opportunities with AIESEC, you get to
            continuously grow through creativity and innovation.
          </p>
        </Col>
        <Col md={4}>
          <p className="valueTitle">
            <img
              className="valuesmall"
              src={Participate}
              alt="Enjoying Participation"
            />
            Enjoying Participation
          </p>
          <p className="valueContent">
            At AIESEC, you get to celebrate and enjoy the way we are and put
            your youthful energy and enthusiasm in everything you do.
          </p>
        </Col>
        <Col md={4}>
          <p className="valueTitle">
            <img
              className="valuesmall"
              src={Sustain}
              alt="Acting Sustainably"
            />
            Acting Sustainably
          </p>
          <p className="valueContent">
            In various leadership roles at AIESEC, you get to make long-term
            decisions that build your mindset to also think of your future
            generations and live sustainably.
          </p>
        </Col>
        <Col md={4}>
          <p className="valueTitle">
            <img
              className="valuesmall"
              src={Lead}
              alt="Activating Leadership"
            />
            Activating Leadership
          </p>
          <p className="valueContent">
            At AIESEC, you get to lead by example and with empathy by taking
            responsibility of inspiring others to lead as well.
          </p>
        </Col>
        <Col md={4}>
          <p className="valueTitle">
            <img className="valuesmall" src={Diverse} alt="Living Diversity" />
            Living Diversity
          </p>
          <p className="valueContent">
            You get to work in inclusive spaces that allow you to truly be
            yourself and embrace each others' differences as a strength.
          </p>
        </Col>
      </Row>
    </div>
  );
}
export default AiesecValues;
