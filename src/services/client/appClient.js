import axios from "axios";

export default appClient = axios.create({
  baseURL: "https://exercisedb.p.rapidapi.com",
  headers: {
    "x-rapidapi-key": process.env.REACT_APP_RAPID_API_KEY,
    "x-rapidapi-host": "exercisedb.p.rapidapi.com",
  },
});

export const ENDPOINTS = {
  targetList: "/exercises/targetList",
  target: "/exercises/target",
  name: "/exercises/name",
  exercises: "/exercises",
  exercise: "/exercises/exercise",
  equipmentList: "/exercises/equipmentList",
  equipment: "/exercises/equipment",
  bodyPartList: "/exercises/bodyPartList",
  bodyPart: "/exercises/bodyPart",
};

export const fetchData = async (url) => {
  let response = await appClient.get(url);

  return response.data;
};
