import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectToken } from "../../../Store/Slices/AuthSlice";
import "../../../Assets/Scss/Admin/ViewBlogs.scss";
import "../../../Assets/Scss/Admin/AdminTabs.scss";
import "../../../Assets/Scss/Admin/BlogAdmin.scss";
import api from "../../../Assets/APIEndpoint.json";
import { Button, Form } from "react-bootstrap";
import { PencilSquare, TrashFill } from "react-bootstrap-icons";
import Popup from "reactjs-popup";
import "../Components/modal.scss";
import dayjs from "dayjs";

function BlogTabs() {
  const token = useSelector(selectToken);
  const [imageImports, setImageImports] = useState({});
  const [refresh, setRefresh] = useState(false);
  const [updateId, setUpdateId] = useState("");
  const [formData, setFormData] = useState({
    owner: "",
    description: "",
    category: "",
    image: null,
    title: "",
    content: "",
    /*  content: { type: "", content: "" }, */
  });

  const [formDataUpd, setFormDataUpd] = useState({
    owner: "",
    description: "",
    category: "",
    image: null,
    title: "",
    content: "",
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

  const handleAuthorChange = (event) => {
    setFormData({ ...formData, owner: event.target.value });
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

  const handleContentAddTitle = (event) => {
    setFormData({ ...formData, content: formData.content + "\\title{ }" });
  };

  const handleImageChangeUpd = (event) => {
    const selectedFile = event.target.files[0];
    setFormDataUpd({ ...formDataUpd, image: selectedFile });
  };

  const handleTitleChangeUpd = (event) => {
    setFormDataUpd({ ...formDataUpd, title: event.target.value });
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
    formBody.append("content", formData.content);
    formBody.append("owner", formData.owner);
    formBody.append("description", formData.description);
    fetch(api.api + "api/blogs", {
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
    fetchBlogs();
    setRefresh(!refresh);
  };

  const handleSubmitContent = (event) => {
    const formBody = new FormData();
    formBody.append("content", formDataUpd.content);
    fetch(api.api + "api/blogs/" + updateId, {
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
    fetchBlogs();
    setRefresh(!refresh);
  };

  const handleSubmitUpd = (event) => {
    const formBody = new FormData();

    formBody.append("image", formDataUpd.image);
    formBody.append("category", formDataUpd.category);
    formBody.append("title", formDataUpd.title);
    formBody.append("content", formDataUpd.content);
    formBody.append("description", formDataUpd.description);
    formBody.append("owner", formDataUpd.owner);
    console.log(formDataUpd.image);
    console.log(formBody);
    fetch(api.api + "api/blogs/" + updateId, {
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
    fetchBlogs();
    setRefresh(!refresh);
  };

  const [blogdata, setBlogdata] = useState([]);
  const fetchBlogs = () => {
    fetch(api.api + "api/blogs")
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
            date: res.date,
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
        setBlogdata(temp);
        setImageImports(imports);
      });
  };
  useEffect(() => {
    console.log("load");
    fetchBlogs();
  }, [refresh]);

  const DeleteBlog = (id) => {
    fetch(api.api + "api/blogs/" + id, {
      method: "DELETE",
      headers: { "Content-Type": "application/json", Authorization: token },
    })
      .then((response) => {
        if (!response.ok) throw new Error(response.status);
        else return response.json();
      })
      .then((response) => {
        setBlogdata(blogdata.filter((blog) => blog.id !== id));
      });
  };

  return (
    <div>
      <div className="blogTab">
        <h1 className="title">Add Blog</h1>
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
              <option value="AIESEC Products">AIESEC Products</option>
              <option value="AIESEC Membership">AIESEC Membership</option>
              <option value="AIESEC News">AIESEC News</option>
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
          <Form.Group controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              onChange={handleDescriptionChange}
              value={formData.description}
            />
          </Form.Group>
          <Form.Group controlId="content">
            <Form.Label>Content</Form.Label>
            <Button onClick={handleContentAddTitle}>Add title</Button>
            <Form.Control
              as="textarea"
              rows={8}
              onChange={handleContentChange}
              value={formData.content}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
      <div className="viewBlogs">
        <h1 className="title">All Blogs</h1>
        <table className="blogTable">
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
            {blogdata.map((data) => (
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
                        <h1 className="title">Update Blog</h1>
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
                    className="blogImage"
                    src={imageImports[data.image]}
                    alt="blogImage"
                  />
                </td>
                <td>
                  {dayjs(new Date() - data.read_time).format("H")}{" "}
                  {dayjs(new Date() - data.read_time).format("H") > 1
                    ? "Hours"
                    : "Hour"}{" "}
                  Ago
                </td>
                <td>{dayjs(data.date).format("MM/DD/YYYY")}</td>
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
                            Are you sure you want to delete this blog?
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
                                DeleteBlog(data.id);
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
                            <Form.Group controlId="description">
                              <Form.Label>Description</Form.Label>
                              <Form.Control
                                type="text"
                                onChange={handleDescriptionChangeUpd}
                                value={formDataUpd.description}
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
export default BlogTabs;
