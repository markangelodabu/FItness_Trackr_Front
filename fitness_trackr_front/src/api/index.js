import axios from "axios";

const BASE_URL = "https://shrouded-forest-35352.herokuapp.com/api";

export const register = async (username, password) => {
  try {
    const {data} = await axios.post(`${BASE_URL}/users/register`, {
      username,
      password,
    });
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
    return data;
  } catch (error) {
    console.error('error at getUser', error);
  }
};

export const publicRoutinesByUser = async (username) => {
  try {
    const {data} = await axios.get(`${BASE_URL}/users/${username}/routines`);
    return data;
  } catch (error) {
    console.error("Error at publicRoutineByUser", error);
  }
};

export const fetchActivities = async () => {
  try {
    const {data} = await axios.get(`${BASE_URL}/activities`);
    return data;
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

export const updateActivity = async (name, description, activityId) => {
  try {
    const {data} = await axios.patch(`${BASE_URL}/activities/${activityId}`, {
      name,
      description,
    });
    return data;
  } catch (error) {
    console.error("Error at updateActivity", error);
  }
};

export const publicRoutinesByActivity = async () => {
  try {
    const {data} = await axios.get(
      `${BASE_URL}/activities/:activityId/routines`
    );
    return data;
  } catch (error) {
    console.error("Error at publicRoutinesByActivity", error);
  }
};

export const fetchRoutines = async () => {
  try {
    const {data} = await axios.get(`${BASE_URL}/routines`);
    return data;
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

export const updateRoutine = async (name, goal, isPublic, routineId) => {
  try {
    const {data} = await axios.patch(`${BASE_URL}/routines/${routineId}`, {
      name,
      goal,
      isPublic,
    });
    return data;
  } catch (error) {
    console.error("Error at updateRoutine", error);
  }
};

export const deleteRoutine = async (token, routineId) => {
  try {
    const {data} = await axios.delete(`${BASE_URL}/routines/${routineId}`, {
      headers: {
        Authorization:`Bearer ${token}`
      }
    });
    return data;
  } catch (error) {
    console.error("Error at deleteRoutine", error);
  }
};

export const addActivityToRoutine = async (routineId, activityId, count, duration, token) => {
  try {
    const {data} = await axios.post(
      `${BASE_URL}/routines/${routineId}/activities`, 
      {
        activityId,
        count,
        duration,
      }, {
      headers: {
        Authorization:`Bearer ${token}`
      }
    });
    return data;
  } catch (error) {
    console.error("Error at addActivityToRoutine", error);
  }
};

export const updateRoutineActivity = async (count, duration,routineActivityId) => {
  try {
    const {data} = await axios.patch(
      `${BASE_URL}/routine_activities/${routineActivityId}`,
      {
        count,
        duration,
      }
    );
    return data;
  } catch (error) {
    console.error("Error at updateRoutineActivity", error);
  }
};

export const deleteRoutineActivity = async (token, routineActivityId) => {
  try {
    const {data} = await axios.delete(
      `${BASE_URL}/routine_activities/${routineActivityId}`, {
        headers: {
          Authorization:`Bearer ${token}`
        }
      });
    return data;
  } catch (error) {
    console.error("Error at deleteRoutineActivity", error);
  }
};