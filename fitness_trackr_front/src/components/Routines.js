import "./Routines.css";
import React, { useEffect, useState } from "react";
import { fetchRoutines, publicRoutinesByUser, publicRoutinesByActivity, addRoutine, updateRoutine, deleteRoutine, addActivityToRoutine, updateRoutineActivity, deleteRoutineActivity } from "../api";
import { useNavigate } from "react-router-dom";

const Routines = ({token}) => {
  const navigate = useNavigate();

  const [routines, setRoutines] = useState([]);

  const handleRoutines = async () => {
    try {
      const fetchedRoutines = await fetchRoutines();
      setRoutines(fetchedRoutines);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteRoutine(token, id);
      const newRoutines = routines.filter((element) => {
        return element.id !== id
      })
      setRoutines(newRoutines);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchRoutines(token)
    .then((routines) => {
      setRoutines(routines)
    })
    .catch((error) => {
      console.error(error)
    })
    handleRoutines();
  }, [token]);

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
