import Carousel from "react-multi-carousel";
import "../../../Assets/Scss/Homepage/Testimonials.scss";
import { useEffect, useState } from "react";
import api from "../../../Assets/APIEndpoint.json";
import { Row } from "react-bootstrap";

function Testimonials() {
  const [partners, setPartners] = useState([]);
  const [imageImports, setImageImports] = useState();
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  useEffect(() => {
    fetch(api.api + "api/testimonials")
      .then((response) => response.json())
      .then((response) => {
        let temp = [];
        const imports = {};
        response.map(async (res) => {
          temp.push({
            id: res._id,
            name: res.name,
            paragraph: res.paragraph,
            program: res.program,
            image: res.picture,
          });
          imports[res.picture] = await import(
            `../../../../public/images/${res.picture}`
          )
            .then((module) => module.default)
            .catch((error) => {
              console.error(`Error loading image: ${res.image}`, error);
              return ""; // Provide a default image or handle the error as needed
            });
        });
        setPartners(temp);
        setImageImports(imports);
      });
  }, []);

  return (
    <div className="Testimonials d-none d-sm-block">
      <h1 className="title">Testimonials</h1>
      <div className="carousel-container">
        <Carousel
          responsive={responsive}
          swipeable={false}
          draggable={true}
          centerMode={false}
          infinite={true}
          keyBoardControl={false}
          customTransition="transform 500ms ease-in-out"
          transitionDuration={500}
          itemClass="carousel-item-padding-40-px"
          className="carousel"
          showDots={false}
        >
          {partners.map((item) => (
            <div key={item.id} className="custom-carousel-item">
              <div className="outer">
                <p className="citation-mark">“</p>
                <p className="content">{item.paragraph}</p>
                <div className="profile-info">
                  <img
                    alt="volunteer"
                    className="profilepic"
                    src={imageImports[item.image]}
                  />
                  <div>
                    <p>{item.name}</p>
                    <p>{item.program} Exchange Participant</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
        {/* <Carousel
          responsive={responsive}
          swipeable={false}
          draggable={true}
          centerMode={false}
          infinite={true}
          keyBoardControl={false}
          customTransition="transform 500ms ease-in-out"
          transitionDuration={500}
          itemClass="carousel-item-padding-40-px"
          className="carousel-mobile"
          showDots={false}
        >
          {partners.map((item) => (
            <div key={item.id} className="custom-carousel-item-mobile">
              <div className="outer">
                <Row>
                  <p className="content">{item.paragraph}</p>
                  <div className="profile-info">
                    <img
                      alt="volunteer"
                      className="profilepic"
                      src={imageImports[item.image]}
                    />
                    <p>{item.name}</p>
                    <p>{item.program} Exchange Participant</p>
                  </div>
                </Row>
              </div>
            </div>
          ))}
        </Carousel> */}
      </div>
    </div>
  );
}

export default Testimonials;
