import AddRoutine from "./AddRoutine";

const MyRoutines = ({ token, setRoutines, routines}) => {
    return (
        <>
            <AddRoutine token={token} routine={routines} setRoutines={setRoutines} />
        </>
    );
};

export default MyRoutines;

  // const handleDelete = async (id) => {
  //   try {
  //     await deleteRoutine(token, id);
  //     const newRoutines = routines.filter((element) => {
  //       return element.id !== id;
  //     });
  //     setRoutines(newRoutines);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  