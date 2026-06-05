import { Button } from "react-bootstrap";
import "../../../../Assets/Scss/GlobalTeacher/ProductGTe.scss";
import GlobalTeacher from "../../../../Assets/Images/GlobalTeacher.png";

function AboutGte() {
  const textStyle = {
    fontWeight: "bold", // Makes text bold
    fontStyle: "italic", // Makes text italic
  };
  return (
    <>
      <div className="IntroGTe">
        <div className="centered-container">
          <img
            className="gtelogo"
            src={GlobalTeacher}
            alt="Logo Global Teacher"
          />
          <div className="text">
            <p className="title">Teaching internships abroad</p>
            <p style={textStyle}>
              Develop yourself further by passing on your knowledge in an
              intercultural environment.
            </p>
            <p>
              Global Teacher is an internship program for young teachers and student
               teachers who want to grow professionally in a global environment.
                We will support you with all the preparations and be there on-site to
                ensure you have an unforgettable experience.
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
    </>
  );
}

export default AboutGte;
