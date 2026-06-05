import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import CountUp from "react-countup";
import "../../../Assets/Scss/Homepage/Numbers.scss";
import "animate.css";

function Numbers() {
  const [numbers, setNumbers] = useState([
    { key: 1, title: "National Partners", number: 0, numbermax: 73 },
    { key: 2, title: "Experiences", number: 0, numbermax: 1000 },
    { key: 3, title: "Countries", number: 0, numbermax: 111 },
  ]);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 300) {
        startCounting();
        setAnimate(true);
        window.removeEventListener("scroll", handleScroll); // Remove the event listener after triggering once
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll); // Cleanup the event listener when the component unmounts
    };
  }, []);

  const startCounting = () => {
    const updatedNumbers = numbers.map((ele) => ({
      ...ele,
      number: ele.numbermax,
    }));

    setNumbers(updatedNumbers);
  };

  return (
    <div className="numbers">
      <Row>
        {numbers.map((ele, index) => {
          return (
            <Col
              key={index}
              md={4}
              xs={12}
              className={
                animate ? "animate__animated animate__fadeInUp" : "visAnimation"
              }
            >
              <h1 className="number">
                <CountUp end={ele.number} duration={3} start={0} delay={0.5} />
                {ele.title === "Experiences" ? "+" : ""}
              </h1>
              <p className="title">{ele.title}</p>
            </Col>
          );
        })}
        {/* <Col
          className={
            animate ? "animate__animated animate__fadeInUp" : "visAnimation"
          }
        >
          <h1 className="number">
            <CountUp end={73} duration={3} start={0} delay={0.5} />
          </h1>
          <p className="title">National Partners</p>
        </Col> */}
        {/* <Col
          className={
            animate ? "animate__animated animate__fadeInUp" : "visAnimation"
          }
        >
          <h1 className="number">
            <CountUp end={1000} duration={3} start={0} delay={0.5} />+
          </h1>
          <p className="title">Experiences</p>
        </Col>
        <Col
          className={
            animate ? "animate__animated animate__fadeInUp" : "visAnimation"
          }
        >
          <h1 className="number">
            <CountUp end={111} duration={3} start={0} delay={0.5} />+
          </h1>
          <p className="title">Countries</p>
        </Col> */}
      </Row>
    </div>
  );
}
export default Numbers;
