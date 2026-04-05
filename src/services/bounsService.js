// src/services/bonusService.js

import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

API.interceptors.request.use((config) => {
  const storedUser = localStorage.getItem("user");

  if (storedUser) {
    const user = JSON.parse(storedUser);

    if (user?.token) {
      config.headers.Authorization = `Bearer ${user.token}`;
    }
  }

  return config;
});

export const getBonusRewards = async () => {
  const res = await API.get("/api/bonus");
  return res.data;
};

export const claimBonusReward = async (rewardId) => {
  const res = await API.post("/api/bonus/claim", {
    rewardId,
  });

  return res.data;
};
