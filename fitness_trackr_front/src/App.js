import "./App.css";
import React, { useEffect, useState } from "react";
import { Home, Register, Login, Routines, Activities, MyRoutines } from "./components";
import { Routes, Route, Link } from "react-router-dom";
import { getUser, fetchRoutines, fetchActivities } from "./api";

function App() {
  const [token, setToken] = useState("");
  const [user, setUser] = useState({});
  const [routines, setRoutines] = useState([]);
  const [activities, setActivities] = useState([]);

  const handleUser = async (token) => {
    if (token) {
      const userObject = await getUser(token);
      setUser(userObject);
    } else {
      setUser({});
    }
  };

  const handleRoutines = async () => {
    try {
      const fetchedRoutines = await fetchRoutines();
      setRoutines(fetchedRoutines);
    } catch (error) {
      console.log(error);
    }
  };

  const handleActivities = async () => {
    try {
      const fetchedActivities = await fetchActivities();
      setActivities(fetchedActivities);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleRoutines();
    handleActivities();
  }, []);
  
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
        <Route path="/routines" element={<Routines token = {token} user={user} routines={routines} setRoutines={setRoutines}/>} />
        <Route path="/activities" element={<Activities activities={activities} setActivities={setActivities}/>} />
        <Route path="/account/routines" element={<MyRoutines token={token} routines={routines} setRoutines={setRoutines}/>} />
      </Routes>
    </div>
  );
}

export default App;
