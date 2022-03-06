import "./Routines.css";
import { useNavigate } from "react-router-dom";

const Routines = ({user, routines}) => {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Public Routines</h2>
      <hr/>
      {routines.map((routine) => {
        return (
          <div key={routine.id}>
            <div>Name : {routine.name}</div>
            <div>Goal: {routine.goal}</div>
            <div>Creator: {routine.creatorName} </div>
            {(user?.id === routine.creatorId) && <button onClick={() => navigate(`/routines/${routine.id}`)}> Edit </button>}
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
    </div>
  );
};

export default Routines;
