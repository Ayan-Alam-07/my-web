// import axios from "axios";

// const API = axios.create({
//   baseURL: import.meta.env.VITE_API_URL,
// });

// API.interceptors.request.use((config) => {
//   const storedUser = localStorage.getItem("user");

//   if (storedUser) {
//     const user = JSON.parse(storedUser);

//     if (user?.token) {
//       config.headers.Authorization = `Bearer ${user.token}`;
//     }
//   }

//   return config;
// });

// export const getVoucherOptions = async (payoutType) => {
//   const res = await API.get(`/api/vouchers/${payoutType}`);
//   return res.data;
// };

// export const createWithdrawal = async (payload) => {
//   const res = await API.post(`/api/withdrawals/create`, payload);
//   return res.data;
// };

// export const getMyWithdrawals = async () => {
//   const res = await API.get(`/api/withdrawals/my-history`);
//   return res.data;
// };

//
//
//
//
// src/services/walletService.js
//
//
//
//
import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

API.interceptors.request.use(
  (config) => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      const user = JSON.parse(storedUser);

      if (user?.token) {
        config.headers.Authorization = `Bearer ${user.token}`;
      }
    }

    config.headers["Content-Type"] = "application/json";

    return config;
  },
  (error) => Promise.reject(error),
);

export const getWalletDetails = async () => {
  try {
    const res = await API.get("/api/wallet/details");
    return res.data;
  } catch (error) {
    console.error("Get Wallet Details Error:", error);
    throw error;
  }
};

export const getVoucherOptions = async (payoutType) => {
  try {
    const res = await API.get(`/api/vouchers/${payoutType}`);
    return res.data;
  } catch (error) {
    console.error("Get Voucher Options Error:", error);
    throw error;
  }
};

export const getAllVouchers = async () => {
  try {
    const res = await API.get("/api/vouchers");
    return res.data;
  } catch (error) {
    console.error("Get All Vouchers Error:", error);
    throw error;
  }
};

export const createWithdrawal = async (payload) => {
  try {
    const res = await API.post("/api/withdrawals/create", payload);
    return res.data;
  } catch (error) {
    console.error("Create Withdrawal Error:", error);
    throw error;
  }
};

export const getMyWithdrawals = async () => {
  try {
    const res = await API.get("/api/withdrawals/my-history");
    return res.data;
  } catch (error) {
    console.error("Get My Withdrawals Error:", error);
    throw error;
  }
};

export default API;
