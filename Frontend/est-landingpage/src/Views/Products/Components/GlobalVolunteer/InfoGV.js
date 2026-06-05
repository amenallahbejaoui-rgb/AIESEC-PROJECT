import { Col, Row } from "react-bootstrap";
import "../../../../Assets/Scss/Globalvolunteer/InfoGV.scss";
import GVDiscover from "../../../../Assets/Images/GVDiscover.png";
import GVCultures from "../../../../Assets/Images/GVCultures.png";
import GVChallenge from "../../../../Assets/Images/GVChallenge.png";

function InfoGV() {
  return (
    <div className="InfoGV">
      <Row>
        <Col className="infoBlock discover" md={4} sm={12}>
          <img src={GVDiscover} alt="Global volunteer discover" />
          <p className="title">DISCOVER FOREIGN COUNTRIES</p>
          <p className="content">
            Our 10 partner countries are spread across the globe and have some
            of the most attractive cities in the world, making Global Volunteer
            a fantastic way to experience the world in a meaningful way.
          </p>
        </Col>
        <Col className="infoBlock" md={4} sm={12}>
          <img src={GVCultures} alt="Global volunteer discover" />
          <p className="title">DISCOVER NEW CULTURES</p>
          <p className="content">
            As a Global Volunteer, you will work with both local residents and
            volunteers from other countries to overcome stereotypes while making
            a positive impact.
          </p>
        </Col>
        <Col className="infoBlock challenge" md={4} sm={12}>
          <img src={GVChallenge} alt="Global volunteer discover" />
          <p className="title">CHALLENGE YOURSELF</p>
          <p className="content">
            A global volunteer experience can not only help you improve language
            skills and hard skills, but also teach you something about yourself.
          </p>
        </Col>
      </Row>
    </div>
  );
}

export default InfoGV;
