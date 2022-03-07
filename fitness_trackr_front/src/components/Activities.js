import "./Activities.css";


const Activities = ({activities}) => {

  return (
    <div>
      <h2>Hello welcome to activities</h2>
      <hr/>
      {activities.map((activity) => {
        return (
          <div key={activity.id}>
            <div> Name: {activity.name}</div>
            <div> Description: {activity.description}</div>
            <br></br>
          </div>
        );
      })}
    </div>
  );
};

export default Activities;
