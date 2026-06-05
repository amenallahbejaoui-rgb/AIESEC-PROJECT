import "../../Assets/Scss/ContactUs.scss";
import React, { useEffect, useState } from "react";
import {
  Form,
  Button,
  Container,
  Row,
  Col,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";
import universities from "./Universities";
import api from "../../Assets/APIEndpoint.json";
function ContactUs(props) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    universityName: "",
    fieldOfStudies: "",
    yearOfStudies: "",
    questions: "",
    acceptTerms: false,
  });
  const [region, setRegion] = useState("Select region");
  const [selectedOption, setSelectedOption] = useState("Select University"); // Initial value for the dropdown

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    const formBody = new FormData();

    formBody.append("fullName", formData.fullName);
    formBody.append("email", formData.email);
    formBody.append("phoneNumber", formData.phoneNumber);
    formBody.append("selectBox", formData.universityName);
    formBody.append("optionalField", formData.yearOfStudies);
    formBody.append("fieldOf", formData.fieldOfStudies);
    formBody.append("questions", formData.questions);
    formBody.append("type", "contact");

    fetch(api.api + "api/formresponse", {
      body: formBody,
      method: "POST",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  };

  useEffect(() => {
    console.log(Object.keys(universities));
    props.callBack();
  }, []);

  const blueBorderStyle = {
    border: "2px solid #037EF3",
  };

  const handleDropdownChange = (selectedValue) => {
    setSelectedOption(selectedValue);
    setFormData((prevData) => ({
      ...prevData,
      universityName: selectedValue,
    }));
  };
  return (
    <div className="contactPage">
      <div className="lines">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="338"
          height="360"
          viewBox="0 0 338 360"
          fill="none"
          className="line1"
        >
          <path
            d="M409 358C409 358 81.5 330.5 64.5 175.5C47.5 20.5 2 -63 2 -63"
            stroke="#037EF3"
            strokeWidth="4"
            strokeLinejoin="round"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="297"
          height="348"
          viewBox="0 0 297 348"
          fill="none"
          className="line2"
        >
          <path
            d="M409 346C409 346 81.5 318.5 64.5 163.5C47.5 8.5 2 -75 2 -75"
            stroke="#037EF3"
            strokeWidth="4"
            strokeLinejoin="round"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="101"
          height="566"
          viewBox="0 0 101 566"
          fill="none"
          className="line3"
        >
          <path
            d="M-35.3169 2.39594C-35.3169 2.39594 132.886 145.523 92.0768 324.93C51.2675 504.337 -5.12549 563.862 -5.12549 563.862"
            stroke="#037EF3"
            strokeWidth="4"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="565"
          viewBox="0 0 48 565"
          fill="none"
          className="line4"
        >
          <path
            d="M-88.3071 2C-88.3071 2 79.8959 145.127 39.0865 324.534C-1.72278 503.941 -58.1157 563.466 -58.1157 563.466"
            stroke="#037EF3"
            strokeWidth="4"
          />
        </svg>
      </div>
      <div className="introtext">
        <p className="title">Contact us</p>
        <p>If you have any questions, fill out the information below and ask!</p>
      </div>
      <Container className="form">
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col md={12} className="forminput">
              <Form.Group controlId="fullName">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  style={blueBorderStyle}
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
            <Col md={12} className="forminput">
              <Form.Group controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  style={blueBorderStyle}
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
            <Col md={12} className="forminput">
              <Form.Group controlId="phoneNumber">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  style={blueBorderStyle}
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
            <Col md={12} className="forminput">
              <Form.Group controlId="universityName">
                <Form.Label>Region name</Form.Label>
                <DropdownButton title={region} id="dropdown-basic-button">
                  {Object.keys(universities).map((reg, index) => (
                    <Dropdown.Item key={index} onClick={() => setRegion(reg)}>
                      {reg}
                    </Dropdown.Item>
                  ))}
                </DropdownButton>
              </Form.Group>
            </Col>
            <Col md={12} className="forminput">
              <Form.Group controlId="universityName">
                <Form.Label>University Name</Form.Label>
                <DropdownButton
                  title={selectedOption}
                  id="dropdown-basic-button"
                >
                  {region !== "Select region"
                    ? universities[region].map((uni, index) => (
                        <Dropdown.Item
                          key={index}
                          onClick={() => handleDropdownChange(uni)}
                        >
                          {uni}
                        </Dropdown.Item>
                      ))
                    : ""}
                </DropdownButton>
              </Form.Group>
            </Col>
            <Col md={12} className="forminput">
              <Form.Group controlId="fieldOfStudies">
                <Form.Label>Field of Studies</Form.Label>
                <Form.Control
                  style={blueBorderStyle}
                  type="text"
                  name="fieldOfStudies"
                  value={formData.fieldOfStudies}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
            <Col md={12} className="forminput">
              <Form.Group controlId="yearOfStudies">
                <Form.Label>Year of Studies</Form.Label>
                <Form.Control
                  style={blueBorderStyle}
                  type="text"
                  name="yearOfStudies"
                  value={formData.yearOfStudies}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
            <Col md={12} className="forminput-area">
              <Form.Group controlId="questions">
                <Form.Label>Have any questions? Type them below</Form.Label>
                <Form.Control
                  style={blueBorderStyle}
                  as="textarea"
                  name="questions"
                  value={formData.questions}
                  onChange={handleChange}
                  rows={6}
                />
              </Form.Group>
            </Col>
            <Col md={12} className="forminput d-flex justify-content-center">
              <Form.Group controlId="acceptTerms" className="mb-3">
                <div className="d-flex align-items-center">
                  <Form.Check
                    type="checkbox"
                    name="acceptTerms"
                    checked={formData.acceptTerms}
                    onChange={handleChange}
                    required
                    className="mr-2"
                  />
                  <Form.Check.Label>
                    I Accept the <a href="/terms">Terms</a>
                  </Form.Check.Label>
                </div>
              </Form.Group>
            </Col>
            <Col md={12} className="d-flex justify-content-center">
              <Button
                className="rounded-pill submit"
                variant="primary"
                type="submit"
              >
                Submit
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
      {/* <Row className="regions">
        <Col>
          <p className="title">Tunis</p>
          <p className="sub-title">Address</p>
          <p className="text">hello@relume.io</p>
          <p className="sub-title">Phone number</p>
          <p className="text">+216 00 000 000</p>
        </Col>
        <Col>
          <p className="title">Sousse</p>
        </Col>
        <Col>
          <p className="title">Monastir</p>
        </Col>
        <Col>
          <p className="title">Nabeul</p>
        </Col>
        <Col>
          <p className="title">Benzart</p>
        </Col>
        <Col>
          <p className="title">Sfax</p>
        </Col>
        <Col>
          <p className="title">Gabes</p>
        </Col>
      </Row> */}
    </div>
  );
}
export default ContactUs;
