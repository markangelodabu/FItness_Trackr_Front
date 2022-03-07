import AddActivity from "./AddActivity";

const MyActivities = ({ user, token, setActivities, activities}) => {
    return (
        <>
            <AddActivity user={user} token={token} activities={activities} setActivities={setActivities} />
        </>
    );
};

export default MyActivities;