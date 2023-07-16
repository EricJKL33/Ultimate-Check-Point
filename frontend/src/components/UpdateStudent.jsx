import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "../Styles/updateStudComp.scss";

export default function UpdateStudent() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    // Récupère les données de l'étudiant à mettre à jour
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/student/${id}`)
      .then((res) => {
        const { Name: studentName, Email: studentEmail } = res.data; // Renomme 'email' en 'studentEmail'
        setName(studentName);
        setEmail(studentEmail);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`${import.meta.env.VITE_BACKEND_URL}/student/${id}`, { name, email })
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
            Update
          </button>
        </form>
      </div>
    </div>
  );
}
