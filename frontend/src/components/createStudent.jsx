import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../Styles/createStudComp.scss";

export default function CreateStudent() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/student`, {
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
    <div className="create-stud-ctn">
      <div className="create-stud-info">
        <form onSubmit={handleSubmit}>
          <h2>Add Student</h2>
          <div className="firstname-input-ctn">
            <label htmlFor="name">Firstname</label>
            <input
              type="text"
              id="name"
              placeholder="Enter Name"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
            />
          </div>
          <div className="lastname-input-ctn">
            <label htmlFor="name">Lastame</label>
            <input
              type="text"
              id="name"
              placeholder="Enter Name"
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
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
