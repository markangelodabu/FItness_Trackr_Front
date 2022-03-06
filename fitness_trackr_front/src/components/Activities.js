import "./Activities.css";
import React from "react";
import { useEffect, useState } from "react";
import { fetchActivities } from "../api";


const Activities = () => {
  const [activities, setActivities] = useState([]);

  const handleActivities = async () => {
    const fetchedActivities = await fetchActivities();
    setActivities(fetchedActivities);
  };

  useEffect(() => {
    handleActivities();
  }, []);

  return (
    <div>
      <h2>Hello welcome to activities</h2>
      {activities.map((activity) => {
        return (
            <div key={activity.id}>
              <div>{activity.name}</div>
              <div>{activity.description}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Activities;
