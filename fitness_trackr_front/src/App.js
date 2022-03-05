import "./App.css";
import React, { useEffect, useState } from "react";
import { Home, Register, Login, Routines, Activities } from "./components";
import { Routes, Route, Link } from "react-router-dom";
import { getUser } from "./api";

function App() {
  const [token, setToken] = useState("");
  const [user, setUser] = useState({});

  const handleUser = async (token) => {
    if (token) {
      const userObject = await getUser(token);
      setUser(userObject);
    } else {
      setUser({});
    }
  };
  
  useEffect(() => {
    handleUser();
  }, [token]);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"));
    }
  }, []);

  return (
    <div className="App">
      <nav className="App-link">
        {<Link to="/">Home</Link>}
        {<Link to="/routines">Routines</Link>}
        {<Link to="/account/routines">My Routines</Link>}
        {<Link to="/activities">Activities</Link>}
        {!token && <Link to="/login">Login</Link>}
        {!token && <Link to="/register">Register</Link>}
        {token && <h2>Welcome, {user.username}</h2>}
        {token && <button onClick={()=>{
          setToken("");
        }}>Logout</button>}
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setToken={setToken} />} />
        <Route
          path="/register"
          element={<Register token={token} setToken={setToken} />}
        />
        <Route path="/routines" element={<Routines />} />
        <Route path="/activities" element={<Activities />} />
      </Routes>
    </div>
  );
}

export default App;
