import { Col, Row } from "react-bootstrap";
import aieseclogo from "../Assets/Images/aiesec.png";
import "../Assets/Scss/Footer.scss";

function Navbar() {
  return (
    <div className="footerbg">
      <Row className="footer">
        <Col>
          <p className="title">AIESEC in Tunisia</p>
          <p>AIESEC is a non-profit, registered association</p>
          <img src={aieseclogo} className="aieseclogo" alt="AIESEC Logo" />
        </Col>
        <Col>
          <p className="title">AIESEC</p>
          <p>
            <a href="/aboutus">About us</a>
          </p>
          <p>
            <a href="/membership">Membership</a>
          </p>
          {/* <p>Become a host family</p>
          <p>For companies</p> */}
          <p>
            <a href="/beourpartner">For partners</a>
          </p>
        </Col>
        <Col>
          <p className="title">Go abroad with AIESEC</p>
          <p>
            <a href="/gv">Volunteer projects</a>
          </p>
          <p>
            <a href="/gta">Professional internships</a>
          </p>
          <p>
            <a href="/gte">Teaching internships</a>
          </p>
        </Col>
        <Col>
          <p className="title">Answer questions</p>
          <p>
            <a href="/contact">Help</a>
          </p>
          <p>Data protection</p>
          <p>Terms & conditions</p>
        </Col>
        <Col>
          <p className="title">Community</p>
          <a href="https://www.instagram.com/aiesecintunisia/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="19"
              viewBox="0 0 19 19"
              fill="none"
            >
              <path
                d="M5.31331 0.125C2.43727 0.125 0.10498 2.45729 0.10498 5.33333V13.6667C0.10498 16.5427 2.43727 18.875 5.31331 18.875H13.6466C16.5226 18.875 18.855 16.5427 18.855 13.6667V5.33333C18.855 2.45729 16.5226 0.125 13.6466 0.125H5.31331ZM15.73 2.20833C16.305 2.20833 16.7716 2.675 16.7716 3.25C16.7716 3.825 16.305 4.29167 15.73 4.29167C15.155 4.29167 14.6883 3.825 14.6883 3.25C14.6883 2.675 15.155 2.20833 15.73 2.20833ZM9.47998 4.29167C12.356 4.29167 14.6883 6.624 14.6883 9.5C14.6883 12.376 12.356 14.7083 9.47998 14.7083C6.60398 14.7083 4.27165 12.376 4.27165 9.5C4.27165 6.624 6.60398 4.29167 9.47998 4.29167ZM9.47998 6.375C8.65115 6.375 7.85631 6.70425 7.27023 7.29025C6.68423 7.87633 6.35498 8.67117 6.35498 9.5C6.35498 10.3288 6.68423 11.1237 7.27023 11.7097C7.85631 12.2957 8.65115 12.625 9.47998 12.625C10.3088 12.625 11.1036 12.2957 11.6897 11.7097C12.2757 11.1237 12.605 10.3288 12.605 9.5C12.605 8.67117 12.2757 7.87633 11.6897 7.29025C11.1036 6.70425 10.3088 6.375 9.47998 6.375Z"
                fill="#fff"
              />
            </svg>
          </a>
          <a href="https://www.facebook.com/AIESEC.Tunisia">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="19"
              viewBox="0 0 19 19"
              fill="none"
            >
              <path
                d="M14.6883 0.125H4.27165C1.97061 0.125 0.10498 1.99062 0.10498 4.29167V14.7083C0.10498 17.0094 1.97061 18.875 4.27165 18.875H10.1269V11.6239H7.68623V8.78542H10.1269V6.69692C10.1269 4.27604 11.6071 2.95625 13.7675 2.95625C14.4956 2.95417 15.2227 2.99167 15.9466 3.06562V5.59692H14.4591C13.2821 5.59692 13.0529 6.15308 13.0529 6.97392V8.78125H15.8654L15.4997 11.6197H13.0362V18.875H14.6883C16.9894 18.875 18.855 17.0094 18.855 14.7083V4.29167C18.855 1.99062 16.9894 0.125 14.6883 0.125Z"
                fill="#fff"
              />
            </svg>
          </a>
        </Col>
      </Row>
    </div>
  );
}
export default Navbar;
