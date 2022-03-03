import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../api";


const Register = ({ token, setToken }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const [newToken, message] = await register(username, password);
    console.log(token);
    setToken(newToken);
    setMessage(message);
    navigate("/");
  };
  return (
    <form className="register-form" onSubmit={handleSubmit}>
      <h2>Register</h2>
      <input
        value={username}
        placeholder="username"
        onChange={(event) => {
          setUsername(event.target.value);
        }}
      ></input>
      <input
        type="password"
        value={password}
        placeholder="password"
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      ></input>
      <button>Submit</button>
      <div>
        <Link to="/login">Already have an account? Login Here!</Link>
        {message}
        </div>
    </form>
  );
};

export default Register;
