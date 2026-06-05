import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import api from "../../../Assets/APIEndpoint.json";
import { useParams } from "react-router-dom";
import "../../../Assets/Scss/Blogs/BlogDetails.scss";
import { MutatingDots } from "react-loader-spinner";
import dayjs from "dayjs";

function BlogDetails(props) {
  const [loading, setLoading] = useState(true);
  const [image, setImage] = useState("");
  const { blogId } = useParams();
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
          <div className="blogTitle" key={index}>
            {part}
          </div>
        );
      }
    });

    return <>{parts}</>; // Use React.Fragment to return multiple elements
  };

  useEffect(() => {
    props.callBack();
    fetch(api.api + "api/blogs/" + blogId)
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
    <div className="blogDetailsLoad">
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
          <div className="blogDetails">
            <div className="blogTop">
              <Row>
                <Col md={6}>
                  <p>
                    Blog{" "}
                    <span className="blogCategory">&gt; {data.category}</span>
                  </p>
                  <p className="title">{data.title}</p>
                  <div className="details">
                    <p>
                      By{" "}
                      <span style={{ fontWeight: "bold" }}>{data.owner}</span>
                    </p>
                    <p>{dayjs(data.date).format("D MMMM YYYY")}</p>
                  </div>
                </Col>
                <Col>
                  <img className="blogImage" alt={data.title} src={image} />
                </Col>
              </Row>
            </div>
            <div className="blogContent">{data.content}</div>
          </div>
        </div>
      )}
    </div>
  );
}
export default BlogDetails;
