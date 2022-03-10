import "./App.css";
import React, { useEffect, useState } from "react";
import {
  Home,
  Register,
  Login,
  // RoutineView,
  Activities,
  Routines,
  MyActivities,
  MyRoutines,
  RoutineView,
} from "./components";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { fetchActivities, fetchRoutines, getUser } from "./api";

function App() {
  const [token, setToken] = useState("");
  const [user, setUser] = useState({});
  const [activities, setActivities] = useState([]);
  const [routines, setRoutines] = useState([]);
  const navigate = useNavigate();


  const handleUser = async (token) => {
    try {
      const fetchedUsers = await getUser(token);
      setUser(fetchedUsers);
    } catch (error) {
      console.error(error);
    }
  };
  const handleRoutines = async () => {
    const fetchedRoutines = await fetchRoutines();
    setRoutines(fetchedRoutines);
  };
  const handleActivities = async () => {
    const fetchedActivities = await fetchActivities();
    setActivities(fetchedActivities);
  };

  useEffect(() => {
    handleRoutines();
    handleActivities();
  }, []);

  useEffect(() => {
    if (token) {
      handleUser(token);
    }
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
        {token && <Link to="/myroutines">My Routines</Link>}
        {<Link to="/activities">Activities</Link>}
        {token && <Link to="/myactivities">My Activities</Link>}
        {!token && <Link to="/login">Login</Link>}
        {!token && <Link to="/register">Register</Link>}
        {token && <h2>Welcome, {user.username}</h2>}
        {token && (
          <button
            onClick={() => {
              navigate("/");
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
        <Route
          path="/login"
          element={<Login token={token} setToken={setToken} />}
        />
        <Route
          path="/register"
          element={<Register token={token} setToken={setToken} />}
        />
        <Route
          path="/routines"
          element={
            <Routines
              token={token}
              user={user}
              routines={routines}
              setRoutines={setRoutines}
            />
          }
        />
        <Route
          path="/activities"
          element={
            <Activities activities={activities} setActivities={setActivities} />
          }
        />
        <Route
          path="/myroutines"
          element={
            <MyRoutines
              user={user}
              token={token}
              routines={routines}
              setRoutines={setRoutines}
            />
          }
        />
        <Route
          path="/myactivities"
          element={
            <MyActivities
              user={user}
              token={token}
              activities={activities}
              setActivities={setActivities}
            />
          }
        />
        <Route path="/routines/:routineId" element = {<RoutineView routines={routines} activities={activities} token={token} handleRoutines={handleRoutines} />}/>
      </Routes>
    </div>
  );
}

export default App;
