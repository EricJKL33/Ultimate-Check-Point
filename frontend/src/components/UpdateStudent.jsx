import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "../Styles/updateStudComp.scss";

export default function UpdateStudent() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/student/${id}`)
      .then((res) => {
        const {
          firstname: studentName,
          lastname: studentLastName,
          email: studentEmail,
        } = res.data;
        setFirstname(studentName);
        setLastname(studentLastName);
        setEmail(studentEmail);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`${import.meta.env.VITE_BACKEND_URL}/student/${id}`, {
        firstname,
        lastname,
        email,
      })
      .then((res) => {
        console.info(res);
        navigate("/");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="update-stud-ctn">
      <div className="update-stud-info">
        <form onSubmit={handleSubmit}>
          <h2>Update Student</h2>
          <div className="firstname-input-ctn">
            <label htmlFor="firstname">Name</label>
            <input
              type="text"
              id="firstname"
              placeholder="Enter Name"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
            />
          </div>
          <div className="lastname-input-ctn">
            {" "}
            {/* Champ Lastname */}
            <label htmlFor="lastname">Lastname</label>
            <input
              type="text"
              id="lastname"
              placeholder="Enter Lastname"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
            />
          </div>
          <div className="email-input-ctn">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button className="success-btn" type="submit">
            Update
          </button>
        </form>
      </div>
    </div>
  );
}
