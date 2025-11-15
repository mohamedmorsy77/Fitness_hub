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
  image: "/image",
};

// Helper function QueryOptions

export const buildQueryOptions = (
  endpoint,
  basekey,
  key = {},
  options = {},
  params = {}
) => {
  return queryOptions({
    queryKey: [basekey, key],
    queryFn: () => fetchData(endpoint, params),
    staleTime: Infinity,
    gcTime: Infinity,
    fetchOnWindowFocus: false,
    refetchOnMount: false,

    ...options,
  });
};

const fetchData = async (url, params) => {
  let response = await appClient.get(url, {
    params: { ...params },
  });

  return response.data;
};

// Images

export const buildQueryImageOptions = (
  endpoint,
  basekey,
  key = {},
  options = {},
  params = {}
) => {
  return queryOptions({
    queryKey: [basekey, key],
    queryFn: () => fetchImageData(endpoint, params),
    staleTime: Infinity,
    gcTime: Infinity,
    fetchOnWindowFocus: false,
    refetchOnMount: false,

    ...options,
  });
};

export const fetchImageData = async (url, params) => {
  const response = await appClient.get(url, {
    params,
    responseType: "blob",
  });
  const imageUrl = URL.createObjectURL(response.data);

  return imageUrl;
};
