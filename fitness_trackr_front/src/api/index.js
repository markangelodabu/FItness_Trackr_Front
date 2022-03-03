import axios from "axios";

const BASE_URL = "https://shrouded-forest-35352.herokuapp.com/api";

export const register = async (username, password) => {
  try {
    const response = await axios.post(`${BASE_URL}/users/register`, {
      username,
      password,
    });
    const result = await response.json();
    console.log(result);
    if (result.success) {
      const {
        data: { token, message },
      } = result;
      return [token, message];
    } else {
      const {
        error: { token, message },
      } = result;
      return [token, message];
    }
  } catch (error) {
    console.error(error);
  }
};

export const login = async (username, password) => {
  try {
    const response = await axios.post(`${BASE_URL}/users/login`, {
      username,
      password,
    });
    const result = await response.json();
    console.log(result);
    if (result.success) {
      const {
        data: { token, message },
      } = result;
      return [token, message];
    } else {
      const {
        error: { token, message },
      } = result;
      return [token, message];
    }
  } catch (error) {
    console.error(error);
  }
};

export const getUser = async (token) => {
  try {
    const response = await axios.get(`${BASE_URL}/users/me`, {
      token
    });
    const { data: user } = await response.json();
    return user;
  } catch (error) {
    console.error(error);
  }
};

export const publicRoutinesByUser = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/users/:username/routines`);
    const { data: routines } = response.json();
    return routines;
  } catch (error) {
    console.error("Error at publicRoutineByUser", error);
  }
};

export const fetchActivities = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/activities`);
    const { data: activities } = response.json();
    return activities;
  } catch (error) {
    console.error("Error at fetchActivities", error);
  }
};

export const addActivity = async (name, description) => {
  try {
    const response = await axios.post(`${BASE_URL}/activities`, {
      name,
      description,
    })
    const {data: activity} = await response.json()
    return activity;
  } catch (error) {
    console.error("Error at addActivity", error);
  }
}

export const updateActivity = async (name, description) => {
  try {
    const response = await axios.patch(`${BASE_URL}/activities/:activityId`, {
      name,
      description,
    })
    const {data: activity} = await response.json()
    return activity;
  } catch (error) {
    console.error("Error at updateActivity", error);
  }
}

export const publicRoutinesByActivity = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/activities/:activityId/routines`); 
    const { data: routines } = response.json();
    return routines;
  } catch (error) {
    console.error("Error at publicRoutinesByActivity", error);
  }
}

export const fetchRoutines = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/routines`);
    const { data: routines } = response.json();
    return routines;
  } catch (error) {
    console.error("Error at fetchRoutines", error);
  }
};

export const addRoutine = async (name, goal, isPublic) => {
  try {
    const response = await axios.post(`${BASE_URL}/routines`, {
      name,
      goal,
      isPublic,
    })
    const {data: routine} = await response.json();
    return routine;
  } catch (error) {
    console.error("Error at addRoutine", error)
  }
} 

export const updateRoutine = async (name, goal, isPublic) => {
  try {
    const response = await axios.patch(`${BASE_URL}/routines/:routineId`, {
      name,
      goal,
      isPublic,
    })
    const {data: routine} = await response.json();
    return routine;
  } catch (error) {
    console.error("Error at updateRoutine", error);
  }
}

export const deleteRoutine = async () => {
  try {
    const response = await axios.delete(`${BASE_URL}/routines/:routineId`)
    const {data: routine} = await response.json();
    return routine;
  } catch (error) {
    console.error("Error at updataRoutine", error);
  }
}

export const addActivityToRoutine = async (activityId, count, duration) => {
  try {
    const response = await axios.post(`${BASE_URL}/routines/:routineId/activities`, {
      activityId,
      count,
      duration,
    })
    const {data: routine_activity} = await response.json();
    return routine_activity;
  } catch (error) {
    console.error("Error at addActivityToRoutine", error);
  }
}

export const updateRoutineActivity = async (count, duration) => {
  try {
    const response = await axios.patch(`${BASE_URL}/routine_activities/:routineActivityId`, {
      count,
      duration,
    })
    const {data: routine_activity} = await response.json();
    return routine_activity;
  } catch (error) {
    console.error("Error at updateRoutineActivity", error);
  }
}

export const deleteRoutineActivity = async () => {
  try {
    const response = await axios.delete(`${BASE_URL}/routine_activities/:routineActivityId`)
    const {data: routine_activity} = await response.json();
    return routine_activity;
  } catch (error) {
    console.error("Error at deleteRoutineActivity", error);
  }
}

// fixing /api/index.js