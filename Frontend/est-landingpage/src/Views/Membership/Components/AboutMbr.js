import { Button, Col, Row } from "react-bootstrap";
import AiesecMBR from "../../../Assets/Images/Aiesec Member.png";
import "../../../Assets/Scss/Membership/AboutMbr.scss";

function AboutMbr() {
  return (
    <Row className="IntroMembership">
      <div className="centered-container">
        <img className="mbrlogo" src={AiesecMBR} alt="Logo Aiesec member" />
        <Col className="textMbr">
          <p className="title">Become an AIESEC Member</p>
          <p>
            Unleash Your Potential with AIESEC Membership, where Global
            Connections, Personal Growth, and Impactful Experiences Converge for
            a Life-Changing Journey.
          </p>
        </Col>
        <div className="d-flex justify-content-center align-items-center">
          <Button
            href="https://auth.aiesec.org/users/sign_in?country=Tunisia/"
            className="applybutton btn-light rounded-pill"
          >
            Become a Member
          </Button>
        </div>
      </div>
    </Row>
  );
}
export default AboutMbr;
