import React, { useEffect, useState } from "react";
import { fetchRoutines } from "../api";

const Routines = () => {
    const [routines, setRoutines] = useState([]);

    const handleRoutines = async () => {
        const fetchedRoutines = await fetchRoutines();
        setRoutines(fetchedRoutines);
    }

    useEffect(() => {
        handleRoutines(); 
    }, [])

    return (
        <div>
            <h2>Hello welcome to routines</h2>
            {routines.map((routine) => {
                return (
                    <>
                        <div>
                            {routine.name}
                        </div>
                        <div>
                            {routine.goal}
                        </div>
                    </>
                )
            })}
        </div>
    )
}

export default Routines;