import React from "react";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import { Button } from "react-bootstrap";
import Search from "../../../Assets/Images/SEARCH.png";
import Go from "../../../Assets/Images/GO.png";
import Apply from "../../../Assets/Images/APPLY.png";
import Interview from "../../../Assets/Images/INTERVIEW.png";
import Match from "../../../Assets/Images/MATCH.png";
import "../../../Assets/Scss/Homepage/TheProcess.scss";

function TheProcess() {
  const items = [
    {
      id: 1,
      src: Search,
      alt: "Slide 1",
      title: "Search",
      text: "Check out the projects on our platform.",
    },
    {
      id: 2,
      src: Apply,
      alt: "Slide 2",
      title: "Apply",
      text:
        "Register without obligation using the button on our site, fill out " +
        "your profile completely and start applying for projects.",
    },
    {
      id: 3,
      src: Interview,
      alt: "Slide 3",
      title: "Interview",
      text:
        "You will be contacted by the project contact person to " +
        "clarify all the details.",
    },
    {
      id: 4,
      src: Match,
      alt: "Slide 4",
      title: "Match",
      text: "If both you and the organizers are happy, then a match ensues!",
    },
    {
      id: 5,
      src: Go,
      alt: "Slide 5",
      title: "Go",
      text: "AIESEC supports you with the logistical preparations.",
    },
  ];

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 800 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 800, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="lines-container">
      <div className="theProcess">
        <p className="title">The Process</p>
        <Carousel
          responsive={responsive}
          draggable={true}
          ssr={true}
          centerMode={false}
          infinite={true}
          autoPlay={true}
          keyBoardControl={true}
          customTransition="transform 500ms ease-in-out"
          transitionDuration={200}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          itemClass="carousel-item-padding-40-px"
        >
          {items.map((item, index) => (
            <div key={item.id} className="custom-carousel-item">
              <img
                draggable="false"
                className="processImg"
                src={item.src}
                alt={item.alt}
              />
              <p className="processTitle">{index + 1 + "." + item.title}</p>
              <p className="processText">{item.text}</p>
            </div>
          ))}
        </Carousel>
        <Button className="rounded-pill sign-up">Sign up now</Button>
      </div>
      <div className="d-none d-sm-block">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="459"
          height="87"
          viewBox="0 0 459 87"
          fill="none"
          className="line1"
        >
          <path
            d="M-124.102 115.821C-124.102 115.821 145.537 -72.0814 257.571 36.3728C369.606 144.827 457.933 180.052 457.933 180.052"
            stroke="#037EF3"
            strokeWidth="4"
            strokeLinejoin="round"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="435"
          height="51"
          viewBox="0 0 435 51"
          fill="none"
          className="line2"
        >
          <path
            d="M-148 115.231C-148 115.231 121.639 -72.6711 233.673 35.783C345.708 144.237 434.035 179.462 434.035 179.462"
            stroke="#037EF3"
            strokeWidth="4"
            strokeLinejoin="round"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="227"
          height="273"
          viewBox="0 0 227 273"
          fill="none"
          className="line3"
        >
          <path
            d="M1 282.075C1 282.075 142.035 270.183 187.652 161.455C233.269 52.7264 226.068 0.674626 226.068 0.674626"
            stroke="#037EF3"
            strokeWidth="4"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="197"
          height="257"
          viewBox="0 0 197 257"
          fill="none"
          className="line4"
        >
          <path
            d="M1.005 282.497C1.005 282.497 142.04 270.605 187.657 161.877C233.274 53.1489 226.073 1.09711 226.073 1.09711"
            stroke="#037EF3"
            strokeWidth="4"
          />
        </svg>
      </div>
    </div>
  );
}

export default TheProcess;
