import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Home,
  Register,
  Login,
  RoutineView,
  Activities,
  Header,
} from "./components";
import { Routes, Route } from "react-router-dom";
import { fetchActivities, fetchRoutines } from "./api";
const BASE_URL = "https://shrouded-forest-35352.herokuapp.com/api";

function App() {
  const [token, setToken] = useState("");
  const [user, setUser] = useState({});
  const [activities, setActivities] = useState([]);
  const [routines, setRoutines] = useState([]);

  const handleUser = async () => {
    try {
      const { data: userObject } = await axios.get(`${BASE_URL}/users/me`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUser(userObject);
    } catch (error) {
      console.error(error);
    }
  };
   }

  const handleRoutines = async () => {
    const fetchedRoutines = await fetchRoutines();
    setRoutines(fetchedRoutines);
  };
  const handleActivities = async () => {
    const fetchedActivities = await fetchActivities();
    setActivities(fetchedActivities);
  };
  const handleLogout = () => {
    setUser({});
    setToken("");
    localStorage.removeItem("token");
  };
  useEffect(() => {
    handleRoutines();
    handleActivities();
  }, []);

  useEffect(() => {
    if (token) {
      handleUser();
    }
  }, [token]);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"));
    }
  }, []);

  return (
    <div className="App">
      <Header user={user} token={token} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setToken={setToken} />} />
        <Route
          path="/register"
          element={<Register token={token} setToken={setToken} />}
        />
        <Route path="/routines" element={<Routines token = {token} user={user} routines={routines} setRoutines={setRoutines}/>} />
        <Route path="/activities" element={<Activities activities={activities} setActivities={setActivities}/>} />
        <Route path="/account/routines" element={<MyRoutines token={token} routines={routines} setRoutines={setRoutines}/>} />
        <Route
          path="/activities"
          element={<Activities activities={activities} />}
        />
        <Route
          path="/routines/:routineId"
          element={
            <RoutineView
              routines={routines}
              activities={activities}
              token={token}
              handleRoutines={handleRoutines}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
