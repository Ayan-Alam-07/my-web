import { createContext, useContext, useState, useEffect } from "react";
import { showError, showSuccess, showWarning } from "../utils/Toast";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { getMyWithdrawals } from "../services/walletService";

import { getDailyCheckinRewards } from "../services/dailyCheckinService";
import { getLevel, getLeaderboard } from "../services/levelService";

const ListContext = createContext();

export const ListProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const stored = localStorage.getItem("user");
    return stored ? JSON.parse(stored) : null;
  });

  const [list] = useState([
    { id: 1, name: "Wallet" },
    { id: 2, name: "Payout" },
    { id: 3, name: "Giveaway Code" },
    { id: 4, name: "Captcha Entry	" },
    { id: 5, name: "taskOptionChecker" },
    { id: 6, name: "Exchange Center" },
    { id: 7, name: "Watch-Ad Bonus" },
    { id: 8, name: "Login" },
    { id: 9, name: "Register" },
    { id: 10, name: "Forget Password" },
    { id: 11, name: "Reffer & Earn" },
    { id: 12, name: "Referral History" },
    { id: 13, name: "Watch Ads" },
    { id: 14, name: "Daily Bonus" },
    { id: 15, name: "Tap Token" },
    { id: 16, name: "Redeem History" },
    { id: 17, name: "Daily Streak" },
    { id: 18, name: "Spin The Wheel" },
    { id: 19, name: "Level-Up" },
    { id: 20, name: "Leaderboard" },
  ]);

  const [withdrawals, setWithdrawals] = useState([]);
  const [currentList, setCurrentList] = useState(list[0]);
  const [arrowState, setArrowState] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isInviteToHistory, setIsInviteToHistory] = useState(false);
  const [isRedeemHistory, setIsRedeemHistory] = useState(true);
  const [isWalletToHistory, setIsWalletToHistory] = useState(false);

  const [rewards, setRewards] = useState([]);
  const [currentDay, setCurrentDay] = useState(1);
  const [claimedDays, setClaimedDays] = useState([]);
  const [nextClaimAt, setNextClaimAt] = useState(null);

  const [data, setData] = useState(null);
  const [dataLoading, setDataLoading] = useState(true);
  const [leaderboard, setLeaderboard] = useState([]);

  const navigate = useNavigate();
  // const token = localStorage.getItem("token");

  // =========================
  // 🔐 fetching Withdrawals
  // =========================

  const fetchWithdrawals = async () => {
    try {
      const response = await getMyWithdrawals();

      setWithdrawals(
        Array.isArray(response)
          ? response
          : Array.isArray(response?.withdrawals)
            ? response.withdrawals
            : [],
      );
    } catch (error) {
      console.error("Fetch Withdrawals Error:", error);
    }
  };

  useEffect(() => {
    fetchWithdrawals();
  }, []);

  // =========================
  // 🔐 Level & leaderboard
  // =========================

  const fetchData = async () => {
    if (!user?.token) return;

    try {
      setDataLoading(true);

      const res = await getLevel(user.token);
      const lb = await getLeaderboard();

      setData(res?.data ?? { xp: 0, nextXP: 0, progress: 0 });
      setLeaderboard(Array.isArray(lb?.data) ? lb.data : []);
    } catch (error) {
      console.error("fetchData error:", error);
      setData({ xp: 0, nextXP: 0, progress: 0 });
      setLeaderboard([]);
    } finally {
      setDataLoading(false);
    }
  };

  useEffect(() => {
    if (!user?.token) {
      setDataLoading(false);
      return;
    }
    fetchData();
  }, [user?.token]);

  // =========================
  // 🔐 Daily check-in
  // =========================

  const fetchRewards = async () => {
    setIsLoading(true);

    try {
      const data = await getDailyCheckinRewards();

      setRewards(data.rewards || []);
      setCurrentDay(data.currentDay || 1);
      setClaimedDays(data.claimedDays || []);
      setNextClaimAt(data.nextClaimAt || null);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  // =========================
  // 🔐 AUTH STATE
  // =========================

  const fetchCoins = async (manual = false) => {
    if (!user?.token) return;

    try {
      if (manual) setIsLoading(true);

      const res = await axios.get(
        // `${import.meta.env.VITE_API_URL}/api/auth/user-coins`,
        `${import.meta.env.VITE_API_URL}/auth/user-coins`,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        },
      );

      const updatedCoins = res.data.coins;

      setUser((prev) => ({
        ...prev,
        coins: updatedCoins,
      }));

      const storedUser = JSON.parse(localStorage.getItem("user"));

      if (storedUser) {
        storedUser.coins = updatedCoins;
        localStorage.setItem("user", JSON.stringify(storedUser));
      }

      if (manual) {
        showSuccess("Wallet Refreshed VEs Updated");
      }
    } catch (error) {
      if (manual) {
        showError("Failed to refresh wallet");
      } else {
        showError(
          "Server:: Something went wrong! check your Internet connection",
        );
      }
    } finally {
      if (manual) setIsLoading(false);
    }
  };
  useEffect(() => {
    if (user?.token) {
      fetchCoins();
    }
  }, [user?.token]);

  useEffect(() => {
    if (!user?.token) return;

    const interval = setInterval(() => {
      fetchCoins(false); // silent refresh
    }, 720000); // 12 [720000]ms min auto server call to fetch the coins

    return () => clearInterval(interval);
  }, [user?.token]);

  const login = (data) => {
    localStorage.removeItem("referralCode");
    localStorage.setItem("user", JSON.stringify(data));
    // localStorage.setItem("token", JSON.stringify(data.token));
    localStorage.setItem("token", data.token);
    setUser(data);
  };

  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null);
    navigate("/login");
    showWarning("Logged out contact customer service if you facing any issue");
  };

  const isAuthenticated = user !== null;

  // =========================
  // 🔐 fetching All the data of application
  // =========================

  useEffect(() => {
    fetchRewards();
  }, []);

  // ======================================================== location =================================================

  const [locationData, setLocationData] = useState({
    loading: true,
    country: "",
    country_code: "",
    error: false,
  });

  useEffect(() => {
    const getLocation = async () => {
      try {
        const [response] = await Promise.all([
          fetch("https://ipinfo.io/json?token=8ba1d0c5238794"),
          new Promise((resolve) => setTimeout(resolve, 1500)), // 1.5-second minimum loader
        ]);
        const data = await response.json();

        setLocationData({
          loading: false,
          country: data.country || "Unknown",
          country_code: data.country || "",
          error: false,
        });
      } catch (err) {
        console.error("Location fetch failed:", err);
        setLocationData({
          loading: false,
          country: "Unknown",
          country_code: "",
          error: true,
        });
      }
    };

    getLocation();
  }, []);

  return (
    <ListContext.Provider
      value={{
        list,
        currentList,
        setCurrentList,
        locationData,
        arrowState,
        setArrowState,
        isLoading,
        setIsLoading,
        isInviteToHistory,
        setIsInviteToHistory,
        isRedeemHistory,
        setIsRedeemHistory,
        isWalletToHistory,
        setIsWalletToHistory,
        currentDay,
        setCurrentDay,
        rewards,
        setRewards,
        claimedDays,
        setClaimedDays,
        nextClaimAt,
        setNextClaimAt,

        fetchRewards,

        data,
        setData,
        leaderboard,
        setLeaderboard,
        dataLoading,
        setDataLoading,

        fetchData,

        withdrawals,
        fetchWithdrawals,

        // 🔐 Auth values
        user,
        login,
        logout,
        isAuthenticated,
        fetchCoins,
        setUser,
      }}
    >
      {children}
    </ListContext.Provider>
  );
};

export const useList = () => useContext(ListContext);
