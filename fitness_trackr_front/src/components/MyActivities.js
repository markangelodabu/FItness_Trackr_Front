import AddActivity from "./AddActivity";

const MyActivities = ({ token, setActivities, activities}) => {
    return (
        <>
            <AddActivity token={token} activities={activities} setActivities={setActivities} />
        </>
    );
};

export default MyActivities;