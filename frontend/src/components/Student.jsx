import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../Styles/studentComponent.scss";

function Student() {
  const [students, setStudents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/student`)
      .then((res) => setStudents(res.data))
      .catch((err) => console.error(err));
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/student/${id}`);
      setStudents(students.filter((student) => student.id !== id));
    } catch (err) {
      console.error(err);
      console.info(`${parseInt(id, 10)}`);
    }
  };

  const handleUpdate = (id) => {
    navigate(`/update/${id}`);
  };

  return (
    <div className="student-cnt">
      <div className="student-info">
        <div className="student-info-header">
          <button
            className="add-btn"
            type="button"
            onClick={() => navigate("/create")}
          >
            Add student
          </button>
          <h2>Student register</h2>
        </div>
        <div className="student-list-header">
          <h3 className="name">Name</h3>
          <h3 className="email">Email</h3>
          <h3 className="action">Action</h3>
        </div>
        <div className="student-list">
          {students.map((student) => (
            <div className="student-item" key={student.id}>
              <div className="name-ctn">{student.Name}</div>
              <div className="email-ctn">{student.Email}</div>
              <div className="action-ctn">
                <button
                  className="primary-btn"
                  type="button"
                  onClick={() => handleUpdate(student.id)}
                >
                  Update
                </button>
                <button
                  className="primary-btn"
                  type="button"
                  onClick={() => handleDelete(student.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Student;
