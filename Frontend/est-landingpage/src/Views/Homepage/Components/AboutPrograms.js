import { Button, Col, Row } from "react-bootstrap";
import "../../../Assets/Scss/Homepage/AboutPrograms.scss";
import logoGV from "../../../Assets/Images/LogoGV.png";
import logoGTa from "../../../Assets/Images/LogoGTa.png";
import logoGTe from "../../../Assets/Images/LogoGTe.png";

function AboutPrograms() {
  return (
    <div className="aboutprograms">
      <div className="d-none d-sm-block">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 174 408"
          fill="none"
          className="line3"
        >
          <path
            d="M409 406C409 406 81.5 378.5 64.5 223.5C47.5 68.5 2 -15 2 -15"
            stroke="#037EF3"
            strokeWidth="4"
            strokeLinejoin="round"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 133 396"
          fill="none"
          className="line4"
        >
          <path
            d="M409 394C409 394 81.5 366.5 64.5 211.5C47.5 56.5 2 -27 2 -27"
            stroke="#037EF3"
            strokeWidth="4"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className="introtxt">
        <p>Our Exchange Programs</p>
        <p>
          In line with a single vision, we are here for world peace and the
          discovery of people's potential!
        </p>
      </div>
      <Row className="programs">
        <Col md={3} sm={12} className="product-container">
          <div className="container-GV">
            <div className="circle-background">
              <img src={logoGV} alt="logogv" className="image-GV" />okay
            </div>
          </div>
          <p className="programtitle">Global Volunteer</p>
          <div className="programcontent">
            <p>Join our overseas projects for Sustainable Development Goals!</p>
          </div>
          <br />
          <Col md={1}>
            <Button className="rounded-pill discover">
              <a className="discover-text " href="/gv">
                Discover
              </a>
            </Button>
          </Col>
        </Col>
        <Col md={3} sm={12} className="product-container">
          <div className="container-GTa">
            <div className="circle-background">
              <img src={logoGTa} alt="logogv" className="image-GV" />
            </div>
          </div>
          <p className="programtitle">Global Talent</p>
          <div className="programcontent">
            <p>
              Get out of your comfort zone and improve yourself with an
              international internship experience!
            </p>
          </div>
          <br />
          <Col md={1}>
            <Button className="rounded-pill discover">
              <a className="discover-text " href="/gta">
                Discover
              </a>
            </Button>
          </Col>
        </Col>
        <Col md={3} sm={12} className="product-container">
          <div className="container-GTe">
            <div className="circle-background">
              <img src={logoGTe} alt="logogv" className="image-GV" />
            </div>
          </div>
          <p className="programtitle">Global Teacher</p>
          <div className="programcontent">
            <p>
              Impress people from different cultures by taking your teaching
              experience abroad!
            </p>
          </div>
          <br />
          <Col md={1}>
            <Button className="rounded-pill discover">
              <a className="discover-text " href="/gte">
                Discover
              </a>
            </Button>
          </Col>
        </Col>
      </Row>
      <div className="d-none d-sm-block">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="69"
          height="266"
          viewBox="0 0 69 266"
          fill="none"
          className="line1"
        >
          <path
            d="M-159 2.06995C-159 2.06995 -17.9647 13.9618 27.6521 122.69C73.269 231.418 66.0678 283.47 66.0678 283.47"
            stroke="#037EF3"
            strokeWidth="4"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="99"
          height="283"
          viewBox="0 0 99 283"
          fill="none"
          className="line2"
        >
          <path
            d="M-128.995 2.64746C-128.995 2.64746 12.0403 14.5393 57.6571 123.268C103.274 231.996 96.0728 284.048 96.0728 284.048"
            stroke="#037EF3"
            strokeWidth="4"
          />
        </svg>
      </div>
    </div>
  );
}

export default AboutPrograms;
