import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

API.interceptors.request.use((config) => {
  let token = localStorage.getItem("token");

  if (token) {
    token = token.replace(/^"|"$/g, "");
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export const getSpinDetails = async () => {
  // const { data } = await API.get("/api/spin/details");
  const { data } = await API.get("/spin/details");
  return data;
};

export const playSpin = async () => {
  // const { data } = await API.post("/api/spin/play");
  const { data } = await API.post("/spin/play");
  return data;
};

export const claimSpinReward = async () => {
  // const { data } = await API.post("/api/spin/claim");
  const { data } = await API.post("/spin/claim");
  return data;
};

export const discardSpinReward = async () => {
  // const { data } = await API.post("/api/spin/discard");
  const { data } = await API.post("/spin/discard");
  return data;
};

export const watchSpinAd = async () => {
  // const { data } = await API.post("/api/spin/watch-ad");
  const { data } = await API.post("/spin/watch-ad");
  return data;
};
