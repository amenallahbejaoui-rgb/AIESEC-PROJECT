import { Button } from "react-bootstrap";
import "../../../../Assets/Scss/GlobalTalent/ProductGTa.scss";
import GlobalTalent from "../../../../Assets/Images/GlobalTalent.png";

function AboutGta() {
  const textStyle = {
    fontWeight: "bold", // Makes text bold
    fontStyle: "italic", // Makes text italic
  };

  return (
    <div className="IntroGTa">
      <div className="centered-container">
        <img className="gtalogo" src={GlobalTalent} alt="Logo Global Talent" />
        <div className="text">
          <p className="title">Internships abroad</p>
          <p style={textStyle}>
            Stand out from the crowd with an international internship.
          </p>
          <p>
            For over 60 years, AIESEC has enabled young people to network
            through internships around the world. Global Talent is an internship
            experience for young people who want to develop professionally in a
            global environment.
          </p>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <Button
            href="https://auth.aiesec.org/users/sign_in?country=Tunisia/"
            className="applybutton btn-light rounded-pill"
          >
            Apply now
          </Button>
        </div>
      </div>
    </div>
  );
}

export default AboutGta;
