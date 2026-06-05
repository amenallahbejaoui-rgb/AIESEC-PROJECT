import { useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import api from "../../../Assets/APIEndpoint.json";
import { useParams } from "react-router-dom";
import "../../../Assets/Scss/Events/EventsDetails.scss";
import { MutatingDots } from "react-loader-spinner";
import dayjs from "dayjs";

function EventsDetails(props) {
  const [loading, setLoading] = useState(true);
  const [image, setImage] = useState("");
  const { eventId } = useParams();
  const [data, setData] = useState({});

  const parseBlogContent = (inputString) => {
    // Define the regular expression pattern
    let titlePattern = /\\title\{([^}]+)\}/g;
    // Split the input string using the pattern and create an array of text and div elements
    let parts = inputString.split(titlePattern).map((part, index) => {
      if (index % 2 === 0) {
        // Even index means it's plain text
        return <span key={index}>{part}</span>;
      } else {
        // Odd index means it's a matched title, wrap it in a <div>
        return (
          <div className="eventTitle" key={index}>
            {part}
          </div>
        );
      }
    });

    return <>{parts}</>; // Use React.Fragment to return multiple elements
  };

  useEffect(() => {
    window.scroll(0, 0);
    props.callBack();
    fetch(api.api + "api/events/" + eventId)
      .then((response) => response.json())
      .then(async (response) => {
        setImage(
          await import(`../../../../public/images/${response.image}`)
            .then((module) => module.default)
            .catch((error) => {
              console.error(`Error loading image: ${response.image}`, error);
              return ""; // Provide a default image or handle the error as needed
            })
        );
        let temp = parseBlogContent(response.content);
        response.content = temp;
        setData(response);
      });
    setLoading(false);
  }, []);

  return (
    <div className="eventDetailsLoad">
      {loading ? (
        <MutatingDots
          height="100"
          width="100"
          color="#037ef3"
          secondaryColor="#037ef3"
          radius="12.5"
          ariaLabel="mutating-dots-loading"
          wrapperClass="loader"
          visible={loading}
        />
      ) : (
        <div className="centerPage">
          <div className="eventDetails">
            <div className="eventTop">
              <Row>
                <Col md={6}>
                  <p>
                    Event{" "}
                    <span className="eventCategory">&gt; {data.category}</span>
                  </p>
                  <p className="title">{data.title}</p>
                  <div className="details">
                    <p>
                      By{" "}
                      <span style={{ fontWeight: "bold" }}>{data.owner}</span>
                    </p>
                    <p>
                      Event date: {dayjs(data.startdate).format("D MMMM YYYY")}
                    </p>
                  </div>
                </Col>
                <Col>
                  <img className="eventImage" alt={data.title} src={image} />
                </Col>
              </Row>
            </div>
            <div className="eventContent">
              {data.content}
              <h1 className="regTitle">
                <Button variant="outline-primary" size="lg" href={data.link}>
                  Registration link
                </Button>
              </h1>
              <div className="register"></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default EventsDetails;
