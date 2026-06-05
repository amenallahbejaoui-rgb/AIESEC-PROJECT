import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectToken } from "../../../Store/Slices/AuthSlice";
import "../../../Assets/Scss/Admin/ViewEvents.scss";
import "../../../Assets/Scss/Admin/AdminTabs.scss";
import "../../../Assets/Scss/Admin/EventAdmin.scss";
import api from "../../../Assets/APIEndpoint.json";
import { Button, Form } from "react-bootstrap";
import { PencilSquare, TrashFill } from "react-bootstrap-icons";
import Popup from "reactjs-popup";
import "../Components/modal.scss";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import dayjs from "dayjs";

function EventsTab() {
  const token = useSelector(selectToken);
  const [refresh, setRefresh] = useState(false);
  const [imageImports, setImageImports] = useState({});
  const [updateId, setUpdateId] = useState("");
  const [formData, setFormData] = useState({
    owner: "",
    description: "",
    category: "",
    image: null,
    title: "",
    content: "",
    link: "",
    startdate: new Date(),
  });

  const [formDataUpd, setFormDataUpd] = useState({
    owner: "",
    description: "",
    category: "",
    image: null,
    title: "",
    content: "",
    link: "",
    startdate: new Date(),
  });
  const handleCategoryChange = (event) => {
    setFormData({ ...formData, category: event.target.value });
  };

  const handleImageChange = (event) => {
    const selectedFile = event.target.files[0];

    setFormData({ ...formData, image: selectedFile });
  };

  const handleTitleChange = (event) => {
    setFormData({ ...formData, title: event.target.value });
  };

  const handleLinkChange = (event) => {
    setFormData({ ...formData, link: event.target.value });
  };

  const handleAuthorChange = (event) => {
    setFormData({ ...formData, owner: event.target.value });
  };

  const handleStartDateChange = (date) => {
    setFormData({ ...formData, startdate: date });
  };

  const handleDescriptionChange = (event) => {
    setFormData({ ...formData, description: event.target.value });
  };

  const handleDescriptionChangeUpd = (event) => {
    setFormDataUpd({ ...formDataUpd, description: event.target.value });
  };

  const handleContentChange = (event) => {
    setFormData({ ...formData, content: event.target.value });
  };

  const handleStartDateChangeUpd = (date) => {
    setFormDataUpd({ ...formDataUpd, startdate: date });
  };

  const handleImageChangeUpd = (event) => {
    const selectedFile = event.target.files[0];
    setFormDataUpd({ ...formDataUpd, image: selectedFile });
  };

  const handleTitleChangeUpd = (event) => {
    setFormDataUpd({ ...formDataUpd, title: event.target.value });
  };

  const handleLinkChangeUpd = (event) => {
    setFormDataUpd({ ...formDataUpd, link: event.target.value });
  };

  const handleAuthorChangeUpd = (event) => {
    setFormDataUpd({ ...formDataUpd, owner: event.target.value });
  };

  const handleCategoryChangeUpd = (event) => {
    setFormDataUpd({ ...formDataUpd, category: event.target.value });
  };

  const handleContentChangeUpd = (event) => {
    setFormDataUpd({ ...formDataUpd, content: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formBody = new FormData();
    formBody.append("image", formData.image);
    formBody.append("category", formData.category);
    formBody.append("title", formData.title);
    formBody.append("link", formData.link);
    formBody.append("content", formData.content);
    formBody.append("owner", formData.owner);
    formBody.append("description", formData.description);
    formBody.append("startdate", formData.startdate);
    fetch(api.api + "api/events", {
      body: formBody,
      method: "POST",
      headers: { Authorization: token },
    })
      .then((response) => {
        if (!response.ok) throw new Error(response.status);
        else return response.json();
      })
      .then((data) => {})
      .catch((error) => {
        console.log("error " + error);
      });
    fetchEvents();
    setRefresh(!refresh);
  };

  const handleSubmitContent = (event) => {
    event.preventDefault();
    const formBody = new FormData();
    formBody.append("content", formDataUpd.content);
    fetch(api.api + "api/events/" + updateId, {
      body: formBody,
      method: "PUT",
      headers: { Authorization: token },
    })
      .then((response) => {
        if (!response.ok) throw new Error(response.status);
        else return response.json();
      })
      .then((data) => {})
      .catch((error) => {
        console.log("error " + error);
      });
    fetchEvents();
    setRefresh(!refresh);
  };

  const handleContentAddTitle = (event) => {
    setFormData({ ...formData, content: formData.content + "\\title{ }" });
  };

  const handleSubmitUpd = (event) => {
    event.preventDefault();
    const formBody = new FormData();

    formBody.append("image", formDataUpd.image);
    formBody.append("category", formDataUpd.category);
    formBody.append("title", formDataUpd.title);
    formBody.append("link", formDataUpd.link);
    formBody.append("content", formDataUpd.content);
    formBody.append("description", formDataUpd.description);
    formBody.append("owner", formDataUpd.owner);
    formBody.append("startdate", formDataUpd.startdate);
    console.log(formDataUpd.image);
    console.log(formBody);
    fetch(api.api + "api/events/" + updateId, {
      body: formBody,
      method: "PUT",
      headers: { Authorization: token },
    })
      .then((response) => {
        if (!response.ok) throw new Error(response.status);
        else return response.json();
      })
      .then((data) => {})
      .catch((error) => {
        console.log("error " + error);
      });
    fetchEvents();
    setRefresh(!refresh);
  };

  const [eventdata, setEventdata] = useState([]);
  const fetchEvents = () => {
    fetch(api.api + "api/events")
      .then((response) => response.json())
      .then((response) => {
        let temp = [];
        const imports = {};
        response.map(async (res) => {
          temp.push({
            id: res._id,
            owner: res.owner,
            image: res.image,
            category: res.category,
            content: res.content,
            title: res.title,
            read_time: res.read_time,
            startdate: res.startdate,
            description: res.description,
          });
          imports[res.image] = await import(
            `../../../../public/images/${res.image}`
          )
            .then((module) => module.default)
            .catch((error) => {
              console.error(`Error loading image: ${res.image}`, error);
              return ""; // Provide a default image or handle the error as needed
            });
        });
        console.log(response);
        setEventdata(temp);
        setImageImports(imports);
      });
  };
  useEffect(() => {
    console.log("load");
    fetchEvents();
  }, [refresh]);

  const DeleteEvent = (id) => {
    fetch(api.api + "api/events/" + id, {
      method: "DELETE",
      headers: { "Content-Type": "application/json", Authorization: token },
    })
      .then((response) => {
        if (!response.ok) throw new Error(response.status);
        else return response.json();
      })
      .then((response) => {
        setEventdata(eventdata.filter((event) => event.id !== id));
      });
  };

  return (
    <div>
      <div className="eventTab">
        <h1 className="title">Add Event</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="author">
            <Form.Label>Author</Form.Label>
            <Form.Control
              type="text"
              onChange={handleAuthorChange}
              value={formData.owner}
            />
          </Form.Group>
          <Form.Group controlId="category">
            <Form.Label>Category</Form.Label>
            <Form.Control
              as="select"
              onChange={handleCategoryChange}
              value={formData.category}
            >
              <option value="">Select a category</option>
              <option value="Hackathon">Hackathon</option>
              <option value="Global Village">Global Village</option>
              <option value="Job fair">Job fair</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="image">
            <Form.Label>Image</Form.Label>
            <Form.Control
              type="file"
              onChange={handleImageChange}
              accept="image/*"
            />
          </Form.Group>

          <Form.Group controlId="title">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              onChange={handleTitleChange}
              value={formData.title}
            />
          </Form.Group>
          <Form.Group controlId="link">
            <Form.Label>Registration link</Form.Label>
            <Form.Control
              type="text"
              onChange={handleLinkChange}
              value={formData.link}
            />
          </Form.Group>
          <Form.Group controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              onChange={handleDescriptionChange}
              value={formData.description}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Event Start Date</Form.Label>
            <br />
            <DatePicker
              selected={formData.startdate}
              onChange={(date) => handleStartDateChange(date)}
            />
          </Form.Group>
          <Form.Group controlId="content">
            <Form.Label>Content</Form.Label>
            <Button onClick={handleContentAddTitle}>Add title</Button>
            <Form.Control
              as="textarea"
              rows={3}
              onChange={handleContentChange}
              value={formData.content}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
      <div className="viewEvents">
        <h1 className="title">All Events</h1>
        <table className="eventTable">
          <thead>
            <tr>
              <th>Owner</th>
              <th>Category</th>
              <th>Description</th>
              <th>Title</th>
              <th>Content</th>
              <th>Image</th>
              <th>Read Time</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {eventdata.map((data) => (
              <tr key={data.id}>
                <td>{data.owner}</td>
                <td>{data.category}</td>

                <td>{data.description}</td>

                <td>{data.title}</td>
                <td>
                  <Popup
                    trigger={
                      <Button>
                        <PencilSquare
                          onPointerOver={() => {
                            setFormDataUpd(data);
                          }}
                        />
                      </Button>
                    }
                    modal
                    nested
                  >
                    {(close) => (
                      <div className="popupUpdate">
                        <h1 className="title">Update Event</h1>
                        <Form onSubmit={handleSubmitContent}>
                          <Form.Group controlId="content">
                            <Form.Label>Content</Form.Label>
                            <Form.Control
                              as="textarea"
                              rows={10}
                              onChange={handleContentChangeUpd}
                              value={formDataUpd.content}
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
                </td>
                <td>
                  <img
                    className="eventImage"
                    src={imageImports[data.image]}
                    alt="eventImage"
                  />
                </td>
                <td>
                  {dayjs(new Date() - data.read_time).format("H")}{" "}
                  {dayjs(new Date() - data.read_time).format("H") > 1
                    ? "Hours"
                    : "Hour"}{" "}
                  Ago
                </td>
                <td>{dayjs(data.startdate).format("MM/DD/YYYY")}</td>
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
                            Are you sure you want to delete this event?
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
                                DeleteEvent(data.id);
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
                          <h1 className="title">Update Event</h1>
                          <Form onSubmit={handleSubmitUpd}>
                            <Form.Group controlId="author">
                              <Form.Label>Author</Form.Label>
                              <Form.Control
                                type="text"
                                onChange={handleAuthorChangeUpd}
                                value={formDataUpd.owner}
                              />
                            </Form.Group>
                            <Form.Group controlId="category">
                              <Form.Label>Category</Form.Label>
                              <Form.Control
                                as="select"
                                onChange={handleCategoryChangeUpd}
                                value={formDataUpd.category}
                              >
                                <option value="">Select a category</option>
                                <option value="Category 1">Category 1</option>
                                <option value="Category 2">Category 2</option>
                                <option value="Category 3">Category 3</option>
                              </Form.Control>
                            </Form.Group>
                            <Form.Group controlId="image">
                              <Form.Label>Image</Form.Label>
                              <Form.Control
                                type="file"
                                onChange={handleImageChangeUpd}
                                accept="image/*"
                              />
                            </Form.Group>
                            <Form.Group controlId="title">
                              <Form.Label>Title</Form.Label>
                              <Form.Control
                                type="text"
                                onChange={handleTitleChangeUpd}
                                value={formDataUpd.title}
                              />
                            </Form.Group>
                            <Form.Group controlId="link">
                              <Form.Label>Registration link</Form.Label>
                              <Form.Control
                                type="text"
                                onChange={handleLinkChangeUpd}
                                value={formDataUpd.link}
                              />
                            </Form.Group>
                            <Form.Group controlId="description">
                              <Form.Label>Description</Form.Label>
                              <Form.Control
                                type="text"
                                onChange={handleDescriptionChangeUpd}
                                value={formDataUpd.description}
                              />
                            </Form.Group>
                            <Form.Group>
                              <Form.Label>Event Start Date</Form.Label>
                              <br />
                              <DatePicker
                                selected={Date.parse(formDataUpd.startdate)}
                                onChange={(date) =>
                                  handleStartDateChangeUpd(date)
                                }
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
export default EventsTab;
