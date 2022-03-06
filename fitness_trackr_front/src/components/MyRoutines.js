import { useState } from "react";
import RoutineForm from "./RoutineForm";
import { addRoutine } from "../api";

const MyRoutines = ({ token, setRoutines, routines}) => {
    const blankRoutine = {
        name: "",
        goal: "",
        isPublic: false,
    };
    const [routine, setRoutine] = useState(blankRoutine);

    const handleAdd = async (e) => {
        try {
            e.preventDefault();
            const newRoutine = await addRoutine(routine, token);
            setRoutines([...routines, newRoutine])
            setRoutine(blankRoutine);
        }   catch (error) {
            console.error(error);
        }
    };
    return (
        <>
            <h2>Add Routine</h2>
            <RoutineForm handleSubmit={handleAdd} routine={routine} setRoutine={setRoutine} />
        </>
    );
};

export default MyRoutines;

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

  