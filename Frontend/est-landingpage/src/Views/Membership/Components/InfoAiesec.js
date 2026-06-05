import { Col, Row } from "react-bootstrap";
import Develop from "../../../Assets/Images/develop.png";
import Network from "../../../Assets/Images/network.png";
import Understand from "../../../Assets/Images/understanding.png";
import "../../../Assets/Scss/Membership/InfoAiesec.scss";
function InfoAiesec() {
  return (
    <div className="InfoAiesec">
      <Row className="inner">
        <Col className="infoBlock discover" md={4}>
          <img src={Develop} alt="Global volunteer discover" />
          <p className="title">
            DEVELOP YOURSELF PERSONALLY AND PROFESSIONALLY
          </p>
          <p className="content">
            Step out of your comfort zone and take responsibility. Further
            develop essential soft and hard skills.
          </p>
        </Col>
        <Col className="infoBlock" md={4}>
          <img src={Network} alt="Global volunteer discover" />
          <p className="title">BECOME PART OF AN INTERNATIONAL NETWORK</p>
          <p className="content">
            Become part of a diverse network in Tunisia and make contacts with
            people all over the world who share common values.
          </p>
        </Col>
        <Col className="infoBlock challenge" md={4}>
          <img src={Understand} alt="Global volunteer discover" />
          <p className="title">CONTRIBUTE TO INTERCULTURAL UNDERSTANDING</p>
          <p className="content">
            Help other students find suitable exchange projects or get in touch
            with companies to enable more exchange opportunities in Tunisia.
          </p>
        </Col>
      </Row>
    </div>
  );
}
export default InfoAiesec;
