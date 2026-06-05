import { Button, Col, Row } from "react-bootstrap";
import "../../../Assets/Scss/Homepage/Applynow.scss";

function ApplyNow() {
  return (
    <div className="applynow">
      <Row>
        <Col className="youthtxt" md={12}>
          <p className="toptext">
            Where Impact <br /> Meets Adventure
          </p>

          <p className="bottomtext">
            Going abroad made easy. Start an internship or <br />
            volunteer project abroad with AIESEC.
          </p>
        </Col>
      </Row>
      <div className="d-flex justify-content-center align-items-center">
        <Button
          className="applybuttonHome rounded-pill"
          href="https://https://auth.aiesec.org/users/sign_in?country=Tunisia/"
        >
          Apply now
        </Button>
      </div>
    </div>
  );
}

export default ApplyNow;
