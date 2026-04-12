// // import axios from "axios";

// // const API_URL = import.meta.env.VITE_API_URL;

// // export const getDailyCheckinRewards = async () => {
// //   const token = localStorage.getItem("token");

// //   const response = await axios.get(`${API_URL}/daily-checkin`, {
// //     headers: {
// //       Authorization: `Bearer ${token}`,
// //     },
// //   });

// //   return response.data;
// // };

// // export const claimDailyCheckinReward = async () => {
// //   const token = localStorage.getItem("token");

// //   const response = await axios.post(
// //     `${API_URL}/daily-checkin/claim`,
// //     {},
// //     {
// //       headers: {
// //         Authorization: `Bearer ${token}`,
// //       },
// //     },
// //   );

// //   return response.data;
// // };

// import axios from "axios";

// const API_URL = import.meta.env.VITE_API_URL;

// export const getDailyCheckinRewards = async () => {
//   const token = localStorage.getItem("token");

//   const response = await axios.get(`${API_URL}/api/daily-checkin`, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });

//   return response.data;
// };

// export const claimDailyCheckinReward = async () => {
//   const token = localStorage.getItem("token");

//   const response = await axios.post(
//     `${API_URL}/api/daily-checkin/claim`,
//     {},
//     {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     },
//   );

//   return response.data;
// };

import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

const getToken = () => {
  const rawToken = localStorage.getItem("token");

  if (!rawToken) return null;

  return rawToken.replace(/^"|"$/g, "");
};

export const getDailyCheckinRewards = async () => {
  const token = getToken();

  const response = await axios.get(`${API_URL}/api/daily-checkin`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

export const claimDailyCheckinReward = async () => {
  const token = getToken();

  const response = await axios.post(
    `${API_URL}/api/daily-checkin/claim`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  return response.data;
};
