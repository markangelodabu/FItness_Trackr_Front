import "./Login.css";
import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../api";

const Login = ({ token, setToken }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    try {    
      event.preventDefault();
      const [newToken, message] = await login(username, password);
      console.log(token);
      localStorage.setItem("token", newToken);
      setToken(newToken);
      setMessage(message);
      navigate("/");
    }catch (error) {
      console.log(error.response.data);
      setMessage("")
      setPassword("")
      console.dir("error at submit login", error);
    }

  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <h2>Login</h2>
      {message && <h3>{message}</h3>}
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
        <Link to="/register">Don't have an account? Register Here!</Link>
      </div>
    </form>
  );
};
export default Login;
