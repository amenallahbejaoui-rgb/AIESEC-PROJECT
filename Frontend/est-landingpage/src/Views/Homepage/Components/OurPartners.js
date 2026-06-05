import Carousel from "react-multi-carousel";
import "../../../Assets/Scss/Homepage/OurPartners.scss";
import { useEffect, useState } from "react";
import api from "../../../Assets/APIEndpoint.json";

function OurPartners() {
  const [partners, setPartners] = useState([]);
  const [imageImports, setImageImports] = useState();
  useEffect(() => {
    fetch(api.api + "api/images")
      .then((response) => response.json())
      .then((response) => {
        let temp = [];
        const imports = {};
        response.map(async (res) => {
          temp.push({
            id: res._id,
            description: res.description,
            image: res.filename,
          });
          imports[res.filename] = await import(
            `../../../../public/images/${res.filename}`
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

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
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
  return (
    <div className="OurPartners">
      <p className="title">Our Partners</p>
      <div className="carousel-container">
        <Carousel
          responsive={responsive}
          swipeable={false}
          draggable={true}
          centerMode={false}
          infinite={true}
          autoPlay={true}
          arrows={false}
          keyBoardControl={false}
          customTransition="transform 500ms ease-in-out"
          transitionDuration={500}
          removeArrowOnDeviceType={["tablet", "mobile"]}
          className="carousel"
        >
          {partners.map((data) => (
            <div key={data.id} className="custom-carousel-item">
              <img
                className="carouselImages"
                draggable="false"
                src={imageImports[data.image]}
                alt={data.description}
              />
            </div>
          ))}
        </Carousel>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="65"
        height="305"
        viewBox="0 0 65 305"
        fill="none"
        className="line1"
      >
        <path
          d="M-25.1301 302.625C-25.1301 302.625 83.8611 212.329 59.2244 97.0218C34.5877 -18.2855 -1.04629 -56.9049 -1.04629 -56.9049"
          stroke="#037EF3"
          strokeWidth="4"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="31"
        height="308"
        viewBox="0 0 31 308"
        fill="none"
        className="line2"
      >
        <path
          d="M-59.14 306.276C-59.14 306.276 49.8512 215.981 25.2145 100.673C0.577859 -14.6341 -35.0562 -53.2535 -35.0562 -53.2535"
          stroke="#037EF3"
          strokeWidth="4"
        />
      </svg>
    </div>
  );
}

export default OurPartners;
