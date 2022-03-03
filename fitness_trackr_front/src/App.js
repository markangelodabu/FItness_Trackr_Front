import "./App.css";
import React, { useEffect, useState } from "react";
import { Home, Register, Login, Routines, Activities } from "./components";
import { Routes, Route, Link } from "react-router-dom";
import { getUser } from "./api";

function App() {
  const [token, setToken] = useState("");
  const [user, setUser] = useState({});

  const handleUser = async () => {
    console.log(token);
    if (token) {
      const userObject = await getUser(token);
      setUser(userObject);
    } else {
      setUser({});
    }
  };
  console.log("user", user);

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
        {token && <h2>Welcome, {user.username}</h2>}
        {<Link to="/">Home</Link>}
        {!token && <Link to="/login">Login</Link>}
        {!token && <Link to="/register">Register</Link>}
        {token && (
          <button
            onClick={() => {
              setToken("");
              localStorage.removeItem("token");
            }}
          >
            Logout
          </button>
        )}
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
