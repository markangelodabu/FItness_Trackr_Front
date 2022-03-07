import { useState } from "react";
import ActivityForm from "./ActivityForm";
import { addActivity } from "../api";

const AddActivity = ({ token, setActivities, activities}) => {
    const blankActivity = {
        name: "",
        description: "",
    };
    const [activity, setActivity] = useState(blankActivity);

    const handleAdd = async (event) => {
        try {
            event.preventDefault();
            const newActivity = await addActivity(token, activity);
            setActivities([...activities, newActivity])
            setActivity(blankActivity);
        }   catch (error) {
            console.error(error);
        }
    };
    return (
        <>
            <h2>Add Activity</h2>
            {token && <ActivityForm handleSubmit={handleAdd} activity={activity} setActivity={setActivity} />}
        </>
    );
};

export default AddActivity;