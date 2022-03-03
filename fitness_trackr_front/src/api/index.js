import axios from "axios";

const BASE_URL = "https://shrouded-forest-35352.herokuapp.com/api";

export const fetchRoutines = async () => {
  try {
    const { data: routines } = await axios.get(`${BASE_URL}/routines`);
    return routines;
  } catch (error) {
    console.error("Error at fetchRoutines", error);
  }
};

export const fetchActivities = async () => {
  try {
    const { data: activities } = await axios.get(`${BASE_URL}/activities`);
    return activities;
  } catch (error) {
    console.error("Error at fetchActivities", error);
  }
};

export const register = async (username, password) => {
  try {
    const response = await axios.get(`${BASE_URL}/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username,
          password,
        },
      }),
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
    const response = await axios.get(`${BASE_URL}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username,
          password,
        },
      }),
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
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
    });
    const { data: userObject } = await response.json();
    return userObject;
  } catch (error) {
    console.error(error);
  }
};
// fixing /api/index.js