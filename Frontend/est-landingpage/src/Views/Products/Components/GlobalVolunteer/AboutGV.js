import { Button } from "react-bootstrap";
import "../../../../Assets/Scss/Globalvolunteer/ProductGv.scss";
import GlobalVolunteer from "../../../../Assets/Images/GlobalVolunteer.png";

function AboutGV() {
  return (
    <div className="IntroGV">
      <div className="centered-container">
        <img
          className="gvlogo"
          src={GlobalVolunteer}
          alt="Logo Global Volunteer"
        />
        <div className="textGv">
          <p className="titleGv">Volunteer project abroad</p>
          <p>
            With Global Volunteer, our program for volunteer and social projects
            abroad, you can live in a foreign country while supporting the local
            community. Our partner countries are spread across the globe and
            boast some of the world's most attractive cities, making Global
            Volunteer a fantastic way to experience the world in a meaningful
            way.
          </p>
        </div>
        <div>
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

export default AboutGV;
