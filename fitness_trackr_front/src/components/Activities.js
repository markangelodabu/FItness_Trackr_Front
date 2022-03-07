import "./Activities.css";
import React from "react";

const Activities = ({ activities }) => {
  return (
    <div>
      <h2>Activities</h2>
      <hr />
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
