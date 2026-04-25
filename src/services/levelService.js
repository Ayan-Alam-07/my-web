import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  // baseURL: "https://veloop-backend.onrender.com/api",
});

const cleanToken = (raw) => {
  if (!raw) return null;

  if (raw.startsWith('"') && raw.endsWith('"')) {
    try {
      return JSON.parse(raw);
    } catch {
      return raw.replace(/^"|"$/g, "");
    }
  }

  return raw;
};

export const getLevel = () => {
  const raw = localStorage.getItem("token");
  const token = cleanToken(raw);

  console.log("RAW TOKEN:", raw);
  console.log("CLEAN TOKEN:", token);

  return API.get("/level/me", {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const getLeaderboard = () => API.get("/leaderboard");

export const performAction = (action) => {
  const raw = localStorage.getItem("token");
  const token = cleanToken(raw);

  return API.post(
    "/xp/add",
    { action },
    { headers: { Authorization: `Bearer ${token}` } },
  );
};
