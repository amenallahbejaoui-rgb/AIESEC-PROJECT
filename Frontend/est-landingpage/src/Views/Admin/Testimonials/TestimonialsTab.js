import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectToken } from "../../../Store/Slices/AuthSlice";
import api from "../../../Assets/APIEndpoint.json";
import { Button, Form } from "react-bootstrap";
import Popup from "reactjs-popup";
import { PencilSquare, TrashFill } from "react-bootstrap-icons";
import "../../../Assets/Scss/Admin/TestimonialsAdmin.scss";

function TestimonialsTab() {
  const token = useSelector(selectToken);
  const [updateId, setUpdateId] = useState("");
  const [imageImports, setImageImports] = useState();
  const [refresh, setRefresh] = useState(true);
  const [testimonials, setTestimonials] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    program: "",
    paragraph: "",
    image: "",
  });

  const [formDataUpd, setFormDataUpd] = useState({
    name: "",
    program: "",
    paragraph: "",
    image: "",
  });

  //Handle of Submit Form inputs
  const handleNameChange = (event) => {
    setFormData({ ...formData, name: event.target.value });
  };

  const handleProgramChange = (event) => {
    setFormData({ ...formData, program: event.target.value });
  };

  const handleParagraphChange = (event) => {
    setFormData({ ...formData, paragraph: event.target.value });
  };

  const handleImageChange = (event) => {
    const selectedFile = event.target.files[0];

    setFormData({ ...formData, image: selectedFile });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formBody = new FormData();
    formBody.append("image", formData.image);
    formBody.append("name", formData.name);
    formBody.append("program", formData.program);
    formBody.append("paragraph", formData.paragraph);
    try {
      const response = await fetch(api.api + "api/testimonials", {
        method: "POST",
        headers: {
          Authorization: token,
        },
        body: formBody,
      });
      setRefresh(!refresh);
      setFormData({ name: "", program: "", paragraph: "", image: "" });
      console.log("Response:", response);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  //Handle of Update Submit Form inputs
  const handleNameChangeUpd = (event) => {
    setFormDataUpd({ ...formDataUpd, name: event.target.value });
  };

  const handleProgramChangeUpd = (event) => {
    setFormDataUpd({ ...formDataUpd, program: event.target.value });
  };

  const handleParagraphChangeUpd = (event) => {
    setFormDataUpd({ ...formDataUpd, paragraph: event.target.value });
  };

  const handleImageChangeUpd = (event) => {
    const selectedFile = event.target.files[0];

    setFormDataUpd({ ...formDataUpd, image: selectedFile });
  };

  const handleSubmitUpd = async (event) => {
    event.preventDefault();
    const formBody = new FormData();
    formBody.append("image", formDataUpd.image);
    formBody.append("name", formDataUpd.name);
    formBody.append("program", formDataUpd.program);
    formBody.append("paragraph", formDataUpd.paragraph);
    try {
      const response = await fetch(api.api + "api/testimonials/" + updateId, {
        method: "PUT",
        headers: {
          Authorization: token,
        },
        body: formBody,
      });
      setRefresh(!refresh);
      setFormData({ name: "", program: "", paragraph: "", image: "" });
      console.log("Response:", response);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const deleteTestimonial = (id) => {
    fetch(api.api + "api/testimonials/" + id, {
      method: "DELETE",
      headers: { "Content-Type": "application/json", Authorization: token },
    })
      .then((response) => {
        if (!response.ok) throw new Error(response.status);
        else return response.json();
      })
      .then((response) => {
        setRefresh(!refresh);
      });
  };

  const fetchTestimonials = () => {
    fetch(api.api + "api/testimonials")
      .then((response) => response.json())
      .then((response) => {
        let temp = [];
        const imports = {};
        console.log(response);
        response.map(async (res) => {
          temp.push({
            id: res._id,
            name: res.name,
            paragraph: res.paragraph,
            program: res.program,
            title: res.title,
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
        setTestimonials(temp);
        setImageImports(imports);
      });
  };

  useEffect(() => {
    fetchTestimonials();
  }, [refresh]);
  return (
    <div>
      <div className="testimonialForm">
        <h1 className="title">Add Testimonial</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formName" className="mb-3">
            <Form.Label>Volunteer name</Form.Label>
            <Form.Control
              type="text"
              onChange={handleNameChange}
              value={formData.name}
            />
          </Form.Group>
          <Form.Group controlId="formParagraph" className="mb-3">
            <Form.Label>Testimonial Content</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              onChange={handleParagraphChange}
              value={formData.paragraph}
            />
          </Form.Group>
          <Form.Group controlId="program">
            <Form.Label>Program</Form.Label>
            <Form.Control
              as="select"
              onChange={handleProgramChange}
              value={formData.program}
            >
              <option value="">Select a category</option>
              <option value="Global Volunteer">Global Volunteer</option>
              <option value="Global Talent">Global Talent</option>
              <option value="Global Teacher">Global Teacher</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Volunteer picture</Form.Label>
            <Form.Control type="file" onChange={handleImageChange} />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
      <div className="viewTestimonials">
        <table className="testimonialTable">
          <thead>
            <tr>
              <th>Name</th>
              <th>Paragraph</th>
              <th>Program</th>
              <th>Picture</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {testimonials.map((data) => (
              <tr key={data.id}>
                <td>{data.name}</td>
                <td>{data.paragraph}</td>
                <td>{data.program}</td>
                <td>
                  <img
                    className="testimonialImage"
                    src={imageImports[data.image]}
                    alt={data.id}
                  />
                </td>
                <td>
                  <div className="actions">
                    <Popup
                      trigger={
                        <Button>
                          <TrashFill />
                        </Button>
                      }
                      modal
                      nested
                    >
                      {(close) => (
                        <div className="popup">
                          <div className="popuptitle">
                            Are you sure you want to delete this Testimonial?
                          </div>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-around",
                              marginTop: "20px",
                            }}
                          >
                            <Button
                              onClick={() => {
                                deleteTestimonial(data.id);
                                close();
                              }}
                              variant="danger"
                              className="button"
                            >
                              Yes
                            </Button>
                            <Button
                              variant="success"
                              className="button"
                              onClick={() => close()}
                            >
                              No
                            </Button>
                          </div>
                        </div>
                      )}
                    </Popup>
                    <Popup
                      trigger={
                        <Button
                          onPointerOver={() => {
                            setFormDataUpd(data);
                          }}
                        >
                          <PencilSquare />
                        </Button>
                      }
                      modal
                      nested
                    >
                      {(close) => (
                        <div className="popupUpdate">
                          <h1 className="title">Update Blog</h1>
                          <Form onSubmit={handleSubmitUpd}>
                            <Form.Group controlId="formName" className="mb-3">
                              <Form.Label>Volunteer name</Form.Label>
                              <Form.Control
                                type="text"
                                onChange={handleNameChangeUpd}
                                value={formDataUpd.name}
                              />
                            </Form.Group>
                            <Form.Group
                              controlId="formParagraph"
                              className="mb-3"
                            >
                              <Form.Label>Testimonial Content</Form.Label>
                              <Form.Control
                                as="textarea"
                                rows={3}
                                onChange={handleParagraphChangeUpd}
                                value={formDataUpd.paragraph}
                              />
                            </Form.Group>
                            <Form.Group controlId="program">
                              <Form.Label>Program</Form.Label>
                              <Form.Control
                                as="select"
                                onChange={handleProgramChangeUpd}
                                value={formDataUpd.program}
                              >
                                <option value="">Select a category</option>
                                <option value="Global Volunteer">
                                  Global Volunteer
                                </option>
                                <option value="Global Talent">
                                  Global Talent
                                </option>
                                <option value="Global Teacher">
                                  Global Teacher
                                </option>
                              </Form.Control>
                            </Form.Group>
                            <Form.Group controlId="formFile" className="mb-3">
                              <Form.Label>Volunteer picture</Form.Label>
                              <Form.Control
                                type="file"
                                onChange={handleImageChangeUpd}
                              />
                            </Form.Group>
                            <Button
                              variant="primary"
                              type="submit"
                              onClick={() => {
                                setUpdateId(data.id);
                              }}
                            >
                              Submit
                            </Button>
                          </Form>
                        </div>
                      )}
                    </Popup>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default TestimonialsTab;
