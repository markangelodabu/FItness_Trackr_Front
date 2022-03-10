import "./Routines.css";

const Routines = ({user, routines, setRoutines}) => {

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
