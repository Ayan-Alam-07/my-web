import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

const getToken = () => {
  const rawToken = localStorage.getItem("token");

  if (!rawToken) return null;

  return rawToken.replace(/^"|"$/g, "");
};

export const getDailyCheckinRewards = async () => {
  const token = getToken();

  try {
    // const response = await axios.get(`${API_URL}/api/daily-checkin`, {
    const response = await axios.get(`${API_URL}/daily-checkin`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    if (error.response?.status === 401) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");

      window.location.href = "/login";
    }

    throw error;
  }
};

export const claimDailyCheckinReward = async () => {
  const token = getToken();

  const response = await axios.post(
    // `${API_URL}/api/daily-checkin/claim`,
    `${API_URL}/daily-checkin/claim`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  return response.data;
};
