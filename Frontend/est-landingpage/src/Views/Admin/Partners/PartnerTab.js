import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { selectToken } from "../../../Store/Slices/AuthSlice";
import api from "../../../Assets/APIEndpoint.json";
import "../../../Assets/Scss/Admin/PartnerImages.scss";
import Popup from "reactjs-popup";
import { TrashFill } from "react-bootstrap-icons";

const PartnerTab = () => {
  const [file, setFile] = useState(null);
  const [partnerName, setPartnerName] = useState("");
  const token = useSelector(selectToken);
  const [partners, setPartners] = useState([]);
  const [imageImports, setImageImports] = useState();
  const [refresh, setRefresh] = useState(true);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleNameChange = (event) => {
    setPartnerName(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("image", file);
    formData.append("description", partnerName);
    try {
      const response = await fetch(api.api + "api/images", {
        method: "POST",
        headers: {
          Authorization: token,
        },
        body: formData,
      });
      setRefresh(!refresh);
      setPartnerName("");
      console.log("Response:", response);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const deletePartner = (id) => {
    fetch(api.api + "api/images/" + id, {
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

  const fetchPartners = () => {
    fetch(api.api + "api/images")
      .then((response) => response.json())
      .then((response) => {
        let temp = [];
        const imports = {};
        response.map(async (res) => {
          temp.push({
            id: res._id,
            description: res.description,
            image: res.filename,
          });
          imports[res.filename] = await import(
            `../../../../public/images/${res.filename}`
          )
            .then((module) => module.default)
            .catch((error) => {
              console.error(`Error loading image: ${res.filename}`, error);
              return ""; // Provide a default image or handle the error as needed
            });
        });
        setPartners(temp);
        setImageImports(imports);
      });
  };

  useEffect(() => {
    fetchPartners();
  }, [refresh]);
  return (
    <div>
      <div className="partnerForm">
        <h1 className="title">Add Partner</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Choose a file</Form.Label>
            <Form.Control type="file" onChange={handleFileChange} />
          </Form.Group>
          <Form.Group controlId="formName" className="mb-3">
            <Form.Label>Partner name</Form.Label>
            <Form.Control
              type="text"
              onChange={handleNameChange}
              value={partnerName}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
      <div className="viewPartners">
        <table className="partnerTable">
          <thead>
            <tr>
              <th>Partner Name</th>
              <th>Partner Image</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {partners.map((data) => (
              <tr key={data.id}>
                <td>{data.description}</td>
                <td>
                  <img
                    className="partnerImage"
                    src={imageImports[data.image]}
                    alt={data.id}
                  />
                </td>
                <td>
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
                          Are you sure you want to delete this Partner?
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
                              deletePartner(data.id);
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
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PartnerTab;
