import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../Styles/createStudComp.scss";

export default function CreateStudent() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/student`, { name, email })
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
          <div className="name-input-ctn">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Enter Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
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
