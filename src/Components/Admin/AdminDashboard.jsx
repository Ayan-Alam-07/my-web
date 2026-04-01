// AdminDashboard.jsx

import { useEffect, useState } from "react";
import style from "./AdminDashboard.module.css";

import {
  getDashboardStats,
  getUsersSummary,
  getWithdrawals,
} from "../../services/adminService";
import { useList } from "../../Context/ContextStore";
import AdminSidebar from "./AdminSidebar";
import DashboardOverview from "./DashboardOverview";
import UsersSummaryTable from "./UsersSummaryTable";
import WithdrawalsTable from "./WithdrawalsTable";

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalWithdrawals: 0,
    pendingWithdrawals: 0,
    paidWithdrawals: 0,
    rejectedWithdrawals: 0,
    totalCoinsInSystem: 0,
  });

  const [users, setUsers] = useState([]);
  const [withdrawals, setWithdrawals] = useState([]);
  const { isLoading, setIsLoading } = useList();
  const [error, setError] = useState("");
  const [activeTab, setActiveTab] = useState("dashboard");

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        setIsLoading(true);

        const [statsData, usersData, withdrawalsData] = await Promise.all([
          getDashboardStats(),
          getUsersSummary(),
          getWithdrawals(),
        ]);

        setStats(statsData || {});
        setUsers(Array.isArray(usersData) ? usersData : []);
        setWithdrawals(Array.isArray(withdrawalsData) ? withdrawalsData : []);
      } catch (err) {
        console.error(err);
        setError(err?.response?.data || "Failed to load admin dashboard data.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  if (isLoading) {
    return (
      <div className="container py-5 text-center">
        <h4>Loading admin dashboard...</h4>
      </div>
    );
  }

  return (
    <div className={style.layout}>
      <div className={style.sidebarSection}>
        <AdminSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>

      <div className={style.contentSection}>
        {error && <div className="alert alert-danger">{error}</div>}

        {activeTab === "dashboard" && (
          <DashboardOverview stats={stats} withdrawals={withdrawals} />
        )}

        {activeTab === "users" && <UsersSummaryTable users={users} />}

        {activeTab === "withdrawals" && (
          <WithdrawalsTable
            withdrawals={withdrawals}
            setWithdrawals={setWithdrawals}
          />
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
