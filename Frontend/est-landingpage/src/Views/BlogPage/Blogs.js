import { Button, Card, Col, Row } from "react-bootstrap";
import userImage from "../../Assets/Images/user.png";
import { useEffect, useState } from "react";
import "../../Assets/Scss/Blogs/Blogs.scss";
import api from "../../Assets/APIEndpoint.json";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";
import { MutatingDots } from "react-loader-spinner";

function Blogs(props) {
  const [blogdata, setBlogdata] = useState([]);
  const [imageImports, setImageImports] = useState({});
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const handleClick = (data) => {
    navigate("/blogs/" + data.id);
  };
  //TODO: TAKE INTO ACCOUNT DAYS AND MONTHS IN READ TIME
  useEffect(() => {
    props.callBack();
    fetch(api.api + "api/blogs")
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
            read_time: res.read_time,
            date: res.date,
          });
          imports[res.image] = await import(
            `../../../public/images/${res.image}`
          )
            .then((module) => module.default)
            .catch((error) => {
              console.error(`Error loading image: ${res.image}`, error);
              return ""; // Provide a default image or handle the error as needed
            });
        });
        setImageImports(imports);
        setBlogdata(temp);
        setLoading(false);
      });
  }, []);

  return (
    <div className="blogs">
      <div className="introtext">
        <p className="title">Our Blogs</p>
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
      <div className="centerPage">
        <Row className="blog-blocs">
          {blogdata.map((item) => (
            <Col key={item.id} className="blog-item" md={4}>
              <Card className="card">
                <Card.Img
                  variant="top"
                  className="blog-image"
                  src={imageImports[item.image]}
                />
                <Card.Body>
                  <Card.Title className="category"> {item.category}</Card.Title>
                  <Card.Title className="blog-title">{item.title}</Card.Title>
                  <Card.Text className="blog-content">
                    {item.description}
                  </Card.Text>
                  <Row className="profile-info">
                    <Col md={1}>
                      <img className="profile-pic" src={userImage} alt="" />
                    </Col>
                    <Col md={{ offset: 1, size: 1 }}>
                      <p className="name">{item.owner}</p>
                      <p>
                        {dayjs(item.date).format("MM/DD/YYYY")}•
                        {dayjs(new Date() - item.read_time).format("H")}{" "}
                        {dayjs(new Date() - item.read_time).format("H") > 1
                          ? "Hours"
                          : "Hour"}{" "}
                        Ago
                      </p>
                    </Col>
                    <Col md={4}>
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

export default Blogs;
