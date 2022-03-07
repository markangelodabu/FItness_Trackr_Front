import axios from "axios";

const BASE_URL = "https://shrouded-forest-35352.herokuapp.com/api";

export const register = async (username, password) => {
  try {
    const {data} = await axios.post(`${BASE_URL}/users/register`, {
      username,
      password,
    });
    console.log(data); 
    const {token, message} = data;
      return [token, message];
     
  } catch (error) {
    console.dir(error);
    throw error;
  }
};

export const login = async (username, password) => {
  try {
    const {data} = await axios.post(`${BASE_URL}/users/login`, {
      username,
      password,
    });
    console.log(data);
    const {token, message} = data;
      return [token, message];
  } catch (error) {
    console.dir(error);
    throw error;
  }
};

export const getUser = async (token) => {
  try {
    const {data} = await axios.get(`${BASE_URL}/users/me`, {
      headers: {
        Authorization:`Bearer ${token}`
      }
    });
    console.log(data);
    const result = data;
    return result;
  } catch (error) {
    console.error('error at getUser', error);
  }
};

export const publicRoutinesByUser = async () => {
  try {
    const {data} = await axios.get(`${BASE_URL}/users/:username/routines`);
    const routines = data;
    return routines;
  } catch (error) {
    console.error("Error at publicRoutineByUser", error);
  }
};

export const fetchActivities = async () => {
  try {
    const {data} = await axios.get(`${BASE_URL}/activities`);
    const activities = data
    return activities;
  } catch (error) {
    console.error("Error at fetchActivities", error);
  }
};

export const addActivity = async (activityToAdd, token) => {
  try {
    const {data} = await axios.post(`${BASE_URL}/activities`, activityToAdd, {
      headers: {
        Authorization:`Bearer ${token}`
      }
    });
    return data;
  } catch ({response}) {
    console.error("Error at addActivity", response);
  }
};

export const updateActivity = async (name, description) => {
  try {
    const {data} = await axios.patch(`${BASE_URL}/activities/:activityId`, {
      name,
      description,
    });
    const activity = data
    return activity;
  } catch (error) {
    console.error("Error at updateActivity", error);
  }
};

export const publicRoutinesByActivity = async () => {
  try {
    const {data} = await axios.get(
      `${BASE_URL}/activities/:activityId/routines`
    );
    const routines = data
    return routines;
  } catch (error) {
    console.error("Error at publicRoutinesByActivity", error);
  }
};

export const fetchRoutines = async () => {
  try {
    const {data} = await axios.get(`${BASE_URL}/routines`);
    const routines = data
    return routines;
  } catch (error) {
    console.error("Error at fetchRoutines", error);
  }
};

export const addRoutine = async (routineToAdd, token) => {
  try {
    const {data} = await axios.post(`${BASE_URL}/routines`, routineToAdd, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return data;
  } catch ({response}) {
    console.error("Error at addRoutine", response);
  }
};

export const updateRoutine = async (name, goal, isPublic) => {
  try {
    const {data} = await axios.patch(`${BASE_URL}/routines/:routineId`, {
      name,
      goal,
      isPublic,
    });
    const routine = data;
    return routine;
  } catch (error) {
    console.error("Error at updateRoutine", error);
  }
};

export const deleteRoutine = async () => {
  try {
    const {data} = await axios.delete(`${BASE_URL}/routines/:routineId`);
    const routine = data
    return routine;
  } catch (error) {
    console.error("Error at updataRoutine", error);
  }
};

export const addActivityToRoutine = async (activityId, count, duration) => {
  try {
    const {data} = await axios.post(
      `${BASE_URL}/routines/:routineId/activities`,
      {
        activityId,
        count,
        duration,
      }
    );
    const routine_activity = data
    return routine_activity;
  } catch (error) {
    console.error("Error at addActivityToRoutine", error);
  }
};

export const updateRoutineActivity = async (count, duration) => {
  try {
    const {data} = await axios.patch(
      `${BASE_URL}/routine_activities/:routineActivityId`,
      {
        count,
        duration,
      }
    );
    const routine_activity = data
    return routine_activity;
  } catch (error) {
    console.error("Error at updateRoutineActivity", error);
  }
};

export const deleteRoutineActivity = async () => {
  try {
    const {data} = await axios.delete(
      `${BASE_URL}/routine_activities/:routineActivityId`
    );
    const routine_activity = data 
    return routine_activity;
  } catch (error) {
    console.error("Error at deleteRoutineActivity", error);
  }
};