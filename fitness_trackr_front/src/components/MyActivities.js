import AddActivity from "./AddActivity";

const MyActivities = ({ user, token, setActivities, activities}) => {
    return (
        <>
        <h1>Activities</h1> 
            <AddActivity user={user} token={token} activities={activities} setActivities={setActivities} />
        </>
    );
};

export default MyActivities;