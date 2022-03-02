import axios from "axios";

const BASE_URL = "https://shrouded-forest-35352.herokuapp.com/api";

export const fetchRoutines = async () => {
  try {
    const { data } = await axios.get(`${BASE_URL}/routines`);
    return data;
  } catch (error) {
    console.error(error);
  }
};
