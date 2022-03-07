import { useState } from "react";
import RoutineForm from "./RoutineForm";
import { addRoutine, fetchRoutines } from "../api";

const AddRoutine = ({ token, setRoutines, routines}) => {
    const blankRoutine = {
        name: "",
        goal: "",
        isPublic: false,
    };
    const [routine, setRoutine] = useState(blankRoutine);

    const handleAdd = async (event) => {
        try {
            event.preventDefault();
            await addRoutine(routine, token);
            const updatedRoutines = await fetchRoutines();
            setRoutines(updatedRoutines);
            setRoutine(blankRoutine);
        }   catch (error) {
            console.error(error);
        }
    };
    return (
        <>
            <h2>Add Routine</h2>
            {token && <RoutineForm handleSubmit={handleAdd} routine={routine} setRoutine={setRoutine} />}
        </>
    );
};

export default AddRoutine;