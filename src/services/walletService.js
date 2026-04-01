import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

// API.interceptors.request.use((config) => {
//   const token = localStorage.getItem("token");
//   const storedUser = localStorage.getItem("user");
//   const user = JSON.parse(storedUser);

//   if (token) {
//     config.headers.Authorization = `Bearer ${user.token}`;
//   }

//   return config;
// });
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

export const getVoucherOptions = async (payoutType) => {
  const res = await API.get(`/api/vouchers/${payoutType}`);
  return res.data;
};

export const createWithdrawal = async (payload) => {
  const res = await API.post(`/api/withdrawals/create`, payload);
  return res.data;
};

export const getMyWithdrawals = async () => {
  const res = await API.get(`/api/withdrawals/my-history`);
  return res.data;
};
