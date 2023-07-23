import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "../Styles/loginComp.scss";

export default function Login() {
  const navigate = useNavigate();

  const [emailLogin, setEmailLogin] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = {
      email: emailLogin,
      password: passwordLogin,
    };

    console.info(body);

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/login`,
        body
      );
      console.info(response);
      const { token } = response.data;
      localStorage.setItem("token", token);
      navigate("/");
    } catch (err) {
      console.error(err);
      navigate("/page-500");
    }
  };

  return (
    <div className="login-container-page">
      <div className="login-info-ctn">
        <h2>Admin Access</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email*"
            value={emailLogin}
            onChange={(e) => setEmailLogin(e.target.value)}
          />
          <input
            type="password"
            placeholder="Mot de passe*"
            value={passwordLogin}
            onChange={(e) => setPasswordLogin(e.target.value)}
          />

          <div className="buttons-container-login-page">
            <button className="primary-button" type="submit">
              Connection
            </button>
          </div>
        </form>
        <Link to="/forgotten-password-form">
          <p>Password forgotten?</p>
        </Link>
      </div>
    </div>
  );
}
