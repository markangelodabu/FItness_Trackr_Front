import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import AddActivityToRoutineForm from "./components";

const RoutineView = ({ routines, activities, token, handleRoutines }) => {
  const { routineId } = useParams();
  const [routine, setRoutine] = useState(null);

  useEffect((routineId) => {
    const routineToDisplay = routines.find((element) => {
      return element.id === routineId * 1;
    });
    setRoutine(routineToDisplay);
  }, [routines]);

  if (!routine) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <AddActivityToRoutineForm
        routineId={routineId}
        activities={activities}
        token={token}
        handleRoutines={handleRoutines}
      />
    </>
  );
};

export default RoutineView;
