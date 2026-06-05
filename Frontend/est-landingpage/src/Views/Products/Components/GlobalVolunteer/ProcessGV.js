import { Col, Row } from "react-bootstrap";
import "../../../../Assets/Scss/Globalvolunteer/ProcessGV.scss";
import Interview from "../../../../Assets/Images/INTERVIEW.png";
import Match from "../../../../Assets/Images/MATCH.png";
import Go from "../../../../Assets/Images/GO.png";

function ProcessGV() {
  return (
    <div className="ProcessGV">
      <p className="title">The Process</p>
      <Row className="justify-content-center">
        <Col className="ProcessBlock" md={4}>
          <img src={Interview} alt="Global volunteer discover" />
          <p className="title">INTERVIEW</p>
          <p className="content">
            You will be contacted by the project contact person to clarify all
            the details.
          </p>
        </Col>
        <Col className="ProcessBlock" md={4}>
          <img src={Match} alt="Global volunteer discover" />
          <p className="title">MATCH</p>
          <p className="content">
            If both you and the organizers are happy, then a match ensues! Now,
            you just need to sign the contract and pay the fees.
          </p>
        </Col>
        <Col className="ProcessBlock" md={4}>
          <img src={Go} alt="Global volunteer discover" />
          <p className="title">GO</p>
          <p className="content">
            AIESEC supports you with the logistical preparations.
          </p>
        </Col>
      </Row>
    </div>
  );
}

export default ProcessGV;
