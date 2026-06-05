import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { selectToken } from "../../../Store/Slices/AuthSlice";
import api from "../../../Assets/APIEndpoint.json";
import "../../../Assets/Scss/Admin/PartnerImages.scss";
import Popup from "reactjs-popup";
import { TrashFill, CheckLg } from "react-bootstrap-icons";

const FormResponses = () => {
  const token = useSelector(selectToken);
  const [questions, setQuestions] = useState([]);
  const [partners, setPartners] = useState([]);
  const [refresh, setRefresh] = useState(true);

  const deleteResponse = (id) => {
    fetch(api.api + "api/formresponse/" + id, {
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

  const resolveResponse = (id, reso) => {
    const body = new FormData();
    body.append("resolution", !reso);
    fetch(api.api + "api/formresponse/" + id, {
      method: "PUT",
      body: body,
      headers: { Authorization: token },
    })
      .then((response) => {
        if (!response.ok) throw new Error(response.status);
        else return response.json();
      })
      .then((response) => {
        setRefresh(!refresh);
      });
  };

  const fetchFormResponses = () => {
    fetch(api.api + "api/formresponse")
      .then((response) => response.json())
      .then((response) => {
        let temp1 = [];
        let temp2 = [];
        response.map(async (res) => {
          if (res.respType === "contact")
            temp1.push({
              id: res._id,
              fullName: res.fullName,
              email: res.email,
              phoneNumber: res.phoneNumber,
              selectBox: res.selectBox,
              optionalField: res.optionalField,
              fieldOf: res.fieldOf,
              questions: res.questions,
              resolution: res.resolved === "true",
            });
          else
            temp2.push({
              fullName: res.fullName,
              email: res.email,
              phoneNumber: res.phoneNumber,
              selectBox: res.selectBox,
              optionalField: res.optionalField,
              fieldOf: res.fieldOf,
              questions: res.questions,
              resolution: res.resolved === "true",
            });
        });
        console.log(temp1);
        setQuestions(temp1);
        setPartners(temp2);
      });
  };

  useEffect(() => {
    fetchFormResponses();
  }, [refresh]);
  return (
    <div>
      <div className="viewPartners">
        <h1 className="title">Contact Questions</h1>
        <table className="partnerTable">
          <thead>
            <tr>
              <th>Full Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Company Name</th>
              <th>Field of Study</th>
              <th>Year of study</th>
              <th>Questions</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {questions.map((data) => (
              <tr key={data.id}>
                <td>{data.fullName}</td>
                <td>{data.email}</td>
                <td>{data.phoneNumber}</td>
                <td>{data.selectBox}</td>
                <td>{data.optionalField}</td>
                <td>{data.fieldOf}</td>
                <td>{data.questions}</td>
                <td>{data.resolution ? "Answered" : "Not Answered"}</td>
                <td>
                  <Popup
                    trigger={
                      <Button>
                        <CheckLg />
                      </Button>
                    }
                    modal
                    nested
                  >
                    {(close) => (
                      <div className="popup">
                        <div className="popuptitle">
                          Mark this question as answered?
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
                              resolveResponse(data.id, data.resolution);
                              close();
                            }}
                            variant="success"
                            className="button"
                          >
                            Yes
                          </Button>
                          <Button
                            variant="danger"
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
                          Are you sure you want to delete this Question?
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
                              deleteResponse(data.id);
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
        <h1 className="title">Event Partnerships</h1>
        <table className="partnerTable">
          <thead>
            <tr>
              <th>Full Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Company Name</th>
              <th>Field of Activity</th>
              <th>Event interested in</th>
              <th>Questions</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {partners.map((data) => (
              <tr key={data.id}>
                <td>{data.fullName}</td>
                <td>{data.email}</td>
                <td>{data.phoneNumber}</td>
                <td>{data.selectBox}</td>
                <td>{data.optionalField}</td>
                <td>{data.fieldOf}</td>
                <td>{data.questions}</td>
                <td>{data.resolution ? "Answered" : "Not Answered"}</td>
                <td>
                  <Popup
                    trigger={
                      <Button>
                        <CheckLg />
                      </Button>
                    }
                    modal
                    nested
                  >
                    {(close) => (
                      <div className="popup">
                        <div className="popuptitle">
                          Mark this partner as contacted?
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
                              resolveResponse(data.id, data.resolution);
                              close();
                            }}
                            variant="success"
                            className="button"
                          >
                            Yes
                          </Button>
                          <Button
                            variant="danger"
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
                          Are you sure you want to delete this Question?
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
                              deleteResponse(data.id);
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

export default FormResponses;
