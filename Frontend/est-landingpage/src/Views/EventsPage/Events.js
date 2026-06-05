import { Button, Card, Col, Row } from "react-bootstrap";
import userImage from "../../Assets/Images/user.png";
import { useEffect, useState } from "react";
import "../../Assets/Scss/Events/Events.scss";
import api from "../../Assets/APIEndpoint.json";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";
import { MutatingDots } from "react-loader-spinner";
import { PeopleFill } from "react-bootstrap-icons";

function Events(props) {
  const [blogdata, setBlogdata] = useState([]);
  const [imageImports, setImageImports] = useState({});
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const handleClick = (data) => {
    navigate("/events/" + data.id);
  };
  //TODO: TAKE INTO ACCOUNT DAYS AND MONTHS IN READ TIME
  useEffect(() => {
    props.callBack();
    fetch(api.api + "api/events")
      .then((response) => response.json())
      .then((response) => {
        let temp = [];
        const imports = {};
        response.map(async (res) => {
          temp.push({
            id: res._id,
            image: res.image,
            owner: res.owner,
            category: res.category,
            content: res.content,
            description: res.description,
            title: res.title,
            startdate: res.startdate,
            read_time: res.read_time,
            date: res.date,
          });
          imports[res.image] = require(`../../../public/images/${res.image}`);
        });
        setImageImports(imports);
        setBlogdata(temp);
        setLoading(false);
      });
  }, []);

  return (
    <div className="events">
      <div className="introtext">
        <Row>
          <Col md={{ offset: 3, span: 5 }}>
            <p className="title">Our Events</p>
          </Col>
          <Col>
            <Button href="/beourpartner" className="rounded-pill partners">
              <PeopleFill /> Be our partner
            </Button>
          </Col>
        </Row>
      </div>
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
      <div className="center-cont">
        <Row className="event-blocs">
          {blogdata.map((item) => (
            <Col key={item.id} className="event-item" md={12}>
              <Card>
                <Card.Img
                  variant="top"
                  className="event-image"
                  src={imageImports[item.image]}
                />
                <Card.Body>
                  <Card.Title className="category"> {item.category}</Card.Title>
                  <Card.Title className="event-title">{item.title}</Card.Title>
                  <Card.Title className="startdate">
                    Event Date: {dayjs(item.startdate).format("MM/DD/YYYY")}
                  </Card.Title>
                  <Card.Text className="event-content">
                    {item.description}
                  </Card.Text>
                  <Row>
                    <Col md={1}>
                      <img className="profile-pic" src={userImage} alt="" />
                    </Col>
                    <Col md={6}>
                      <p className="name">{item.owner}</p>
                      <p>
                        {dayjs(item.date).format("MM/DD/YYYY")} •{" Posted "}
                        {dayjs(new Date() - item.read_time).format("H")}{" "}
                        {dayjs(new Date() - item.read_time).format("H") > 1
                          ? "Hours"
                          : "Hour"}{" "}
                        Ago
                      </p>
                    </Col>
                    <Col md={{ offset: 3, size: 4 }}>
                      <Button
                        onClick={() => handleClick(item)}
                        className="read rounded-pill"
                      >
                        Read More
                      </Button>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}

export default Events;
