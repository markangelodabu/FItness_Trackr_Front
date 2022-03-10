import AddRoutine from "./AddRoutine";
import { deleteRoutine } from "../api";
import { useNavigate } from "react-router-dom";

const MyRoutines = ({ user, token, setRoutines, routines}) => {
    const navigate = useNavigate();

    const handleDelete = async (id) => {
        try {
          await deleteRoutine(token, id);
          const newRoutines = routines.filter((routine) => {
            return routine.id !== id;
          });
          setRoutines(newRoutines);
        } catch (error) {
          console.error(error);
        }
      };

    return (
        <>
            {token && < AddRoutine token={token} routine={routines} setRoutines={setRoutines} />}
            <h2>Routines</h2>
            {routines.map((routine) => {
                return (
                    <div key={routine.id}>
                        <div>Name : {routine.name}</div>
                        <div>Goal: {routine.goal}</div>
                        <div>Creator: {routine.creatorName} </div>
                        {(user?.id === routine.creatorId) && <button onClick={() => navigate(`/routines/${routine.id}`)}> Edit </button>}
                        {(user?.id === routine.creatorId) && <button onClick={() => handleDelete(routine.id)}> Delete </button>}
                        <h2>Activities</h2>
                        {routine.activities.map((activity) => {
                            return (
                            <div key={activity.id}>
                                <div>Name: {activity.name}</div>
                                <div>Description: {activity.description}</div>
                                <div>Duration: {activity.duration}</div>
                                <div>Count: {activity.count}</div>
                                <br></br>
                            </div>
                            )
                        })}
                        <hr/>
                    </div>
                );
            })}
        </>
    );
};

export default MyRoutines;

  