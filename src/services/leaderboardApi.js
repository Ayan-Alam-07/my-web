import axios from "axios";

const API_BASE_URL =
  import.meta.env.VITE_API_URL || "https://veloop-backend.onrender.com/api";
// "localhost:5000/api";

const api = axios.create({
  baseURL: API_BASE_URL,
});

api.interceptors.request.use(
  (config) => {
    const token =
      localStorage.getItem("token") ||
      localStorage.getItem("accessToken") ||
      sessionStorage.getItem("token") ||
      sessionStorage.getItem("accessToken");

    // console.log(token);

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error),
);

export const getWeeklyLeaderboard = async (page = 1, limit = 20) => {
  const response = await api.get(`/leaderboard?page=${page}&limit=${limit}`);
  return response.data;
};

export const joinWeeklyLeaderboard = async () => {
  const response = await api.post("/leaderboard/join");
  return response.data;
};

export default api;
