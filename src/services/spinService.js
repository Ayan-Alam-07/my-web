// // spinService.js

// import axios from "axios";

// const API = axios.create({
//   baseURL: import.meta.env.VITE_API_URL,
// });

// API.interceptors.request.use((config) => {
//   let token = localStorage.getItem("token");

//   if (token) {
//     token = token.replace(/^"|"$/g, "");
//     config.headers.Authorization = `Bearer ${token}`;
//   }

//   return config;
// });

// export const getSpinDetails = async () => {
//   const { data } = await API.get("/api/spin/details");
//   return data;
// };

// export const playSpin = async () => {
//   const { data } = await API.post("/api/spin/play");
//   return data;
// };

// export const watchSpinAd = async () => {
//   const { data } = await API.post("/api/spin/watch-ad");
//   return data;
// };

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
  const { data } = await API.get("/api/spin/details");
  return data;
};

export const playSpin = async () => {
  const { data } = await API.post("/api/spin/play");
  return data;
};

export const claimSpinReward = async () => {
  const { data } = await API.post("/api/spin/claim");
  return data;
};

export const discardSpinReward = async () => {
  const { data } = await API.post("/api/spin/discard");
  return data;
};

export const watchSpinAd = async () => {
  const { data } = await API.post("/api/spin/watch-ad");
  return data;
};
