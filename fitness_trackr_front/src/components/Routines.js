import "./Routines.css";
import React, { useEffect, useState } from "react";
import {
  fetchRoutines,
} from "../api";

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

  // const handleDelete = async (id) => {
  //   try {
  //     await deleteRoutine(token, id);
  //     const newRoutines = routines.filter((element) => {
  //       return element.id !== id;
  //     });
  //     setRoutines(newRoutines);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  useEffect(() => {
    handleRoutines();
  }, []);

  return (
    <div>
      <h2>Public Routines</h2>
      {routines.map((routine) => {
        return (
          <>
            <div>Name : {routine.name}</div>
            <div>Goal: {routine.goal}</div>
            <div>Creator: {routine.creatorName} </div>
            <hr/>
          </>
        );
      })}
    </div>
  );
};

export default Routines;
