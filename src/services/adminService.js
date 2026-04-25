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

export const getDashboardStats = async () => {
  // const res = await API.get(`/api/admin/dashboard-stats`);
  const res = await API.get(`/admin/dashboard-stats`);
  return res.data;
};

export const getUsersSummary = async () => {
  // const res = await API.get(`/api/admin/users-summary`);
  const res = await API.get(`/admin/users-summary`);
  return res.data;
};

export const getWithdrawals = async () => {
  // const res = await API.get(`/api/admin/withdrawals`);
  const res = await API.get(`/admin/withdrawals`);
  return res.data;
};

export const markWithdrawalPaid = async (id) => {
  // const res = await API.put(`/api/admin/withdrawals/${id}/paid`);
  const res = await API.put(`/admin/withdrawals/${id}/paid`);
  return res.data;
};

export const rejectWithdrawal = async (id) => {
  // const res = await API.put(`/api/admin/withdrawals/${id}/reject`);
  const res = await API.put(`/admin/withdrawals/${id}/reject`);
  return res.data;
};
