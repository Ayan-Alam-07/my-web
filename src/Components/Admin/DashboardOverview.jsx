// DashboardOverview.jsx

import { useMemo } from "react";
import style from "./DashboardOverview.module.css";
import {
  FaUsers,
  FaWallet,
  FaCoins,
  FaCheckCircle,
  FaTimesCircle,
  FaClock,
} from "react-icons/fa";

const DashboardOverview = ({ stats, withdrawals }) => {
  const pendingAmount = useMemo(() => {
    return withdrawals
      .filter((item) => item.status === "pending")
      .reduce((total, item) => total + (item.payoutAmount || 0), 0);
  }, [withdrawals]);

  return (
    <div>
      <div className={style.header}>
        <h2 className={style.title}>Dashboard Overview</h2>
        <p className={style.subtitle}>
          Monitor the complete performance of the platform.
        </p>
      </div>

      <div className={style.cardGrid}>
        <div className={style.card}>
          <div className={style.iconBox}>
            <FaUsers />
          </div>
          <h4>Total Users</h4>
          <p>{stats.totalUsers}</p>
        </div>

        <div className={style.card}>
          <div className={style.iconBox}>
            <FaWallet />
          </div>
          <h4>Total Withdrawals</h4>
          <p>{stats.totalWithdrawals}</p>
        </div>

        <div className={style.card}>
          <div className={style.iconBox}>
            <FaClock />
          </div>
          <h4>Pending Withdrawals</h4>
          <p>{stats.pendingWithdrawals}</p>
        </div>

        <div className={style.card}>
          <div className={style.iconBox}>
            <FaCheckCircle />
          </div>
          <h4>Paid Withdrawals</h4>
          <p>{stats.paidWithdrawals}</p>
        </div>

        <div className={style.card}>
          <div className={style.iconBox}>
            <FaTimesCircle />
          </div>
          <h4>Rejected Withdrawals</h4>
          <p>{stats.rejectedWithdrawals}</p>
        </div>

        <div className={style.card}>
          <div className={style.iconBox}>
            <FaCoins />
          </div>
          <h4>Total Coins In System</h4>
          <p>{stats.totalCoinsInSystem}</p>
        </div>

        <div className={style.card}>
          <div className={style.iconBox}>
            <FaWallet />
          </div>
          <h4>Pending Amount</h4>
          <p>₹{pendingAmount}</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;
