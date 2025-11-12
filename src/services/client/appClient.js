import { queryOptions } from "@tanstack/react-query";
import axios from "axios";
console.log("API Key:", import.meta.env.VITE_RAPID_API_KEY);
const appClient = axios.create({
  baseURL: "https://exercisedb.p.rapidapi.com",
  headers: {
    "x-rapidapi-key": import.meta.env.VITE_RAPID_API_KEY,
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

// Helper function QueryOptions

export const buildQueryOptions = (endpoint, basekey, key = {}) => {
  return queryOptions({
    queryKey: [basekey, key],
    queryFn: () => fetchData(endpoint),
    staleTime: 1000 * 60 * 60 * 24 * 30,
    fetchOnWindowFocus: false,
    refetchOnMount: false,
  });
};

const fetchData = async (url) => {
  let response = await appClient.get(url);

  console.log("API Response:", response);

  return response.data;
};
