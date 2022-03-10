import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Routine from "./Routine";
import AddActivityToRoutineForm from "./AddActivityToRoutineForm";

const RoutineView = ({routines, activities, token, handleRoutines}) => {
	const {routineId} = useParams();
	const [routine, setRoutine] = useState(null);

	useEffect(() => {
		const routineToDisplay = routines.find((elem) => {
			return elem.id === routineId * 1;
		})
		setRoutine(routineToDisplay);
	}, [routines]);

	if(!routine) {
		return <div>
			Loading...
		</div>
	}

	return(
		<>
			<Routine routine={routine} />
			<AddActivityToRoutineForm routineId={routineId} activities={activities} token={token} handleRoutines={handleRoutines}/>
		</>
	)
}

export default RoutineView;