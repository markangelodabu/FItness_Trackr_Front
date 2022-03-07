const RoutineForm = ({ routine, setRoutine, handleSubmit }) => {
    return (
            <form onSubmit={handleSubmit}>
            <input
                value={routine.name}
                placeholder="Name"
                onChange={(event) => {
                    setRoutine({...routine, name: event.target.value});
                }}
            />
            <input
                value={routine.goal}
                placeholder="Goal"
                onChange={(event) => {
                    setRoutine({...routine, goal: event.target.value})
                }}
            />
            <div>
                <label>Public Routine?</label>
                <input
                    type="checkbox"
                    value={routine.isPublic}
                    onChange={(event) => {
                        setRoutine({...routine, isPublic: event.target.checked});
                    }}
                />
            </div>
            <button>Submit</button>
        </form>
    );
};

export default RoutineForm;