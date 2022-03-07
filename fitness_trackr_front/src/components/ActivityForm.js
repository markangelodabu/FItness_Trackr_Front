import React from "react";

const ActivityForm = ({ activity, setActivity, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        value={activity.name}
        placeholder="Name"
        onChange={(event) => {
          setActivity({ ...activity, name: event.target.value });
        }}
      />
      <input
        value={activity.description}
        placeholder="Description"
        onChange={(event) => {
          setActivity({ ...activity, description: event.target.value });
        }}
      />
      <button>Submit</button>
    </form>
  );
};

export default ActivityForm;
