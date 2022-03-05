import { useState } from "react";
import RoutineForm from "./RoutineForm";
import { addRoutine } from "../api";

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
            const newRoutine = await addRoutine(token, routine);
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

export default AddRoutine;