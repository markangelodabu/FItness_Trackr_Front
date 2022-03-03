import "./Routines.css";
import React, { useEffect, useState } from "react";
import { fetchRoutines } from "../api";

const Routines = () => {
  const [routines, setRoutines] = useState([]);

  const handleRoutines = async () => {
    try {
      const fetchedRoutines = await fetchRoutines();
      setRoutines(fetchedRoutines);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleRoutines();
  }, []);

  return (
    <div>
      <h2>Hello welcome to routines</h2>
      {routines.map((routine) => {
        return (
          <>
            <div>Name : {routine.name}</div>
            <div>Goal: {routine.goal}</div>
            <div>Creator: {routine.creatorName} </div>
          </>
        );
      })}
    </div>
  );
};

export default Routines;
