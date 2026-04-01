// AdminSidebar.jsx

import style from "./AdminSidebar.module.css";
import { FaChartPie, FaUsers, FaWallet, FaShieldAlt } from "react-icons/fa";

const AdminSidebar = ({ activeTab, setActiveTab }) => {
  return (
    <div className={style.sidebar}>
      <div className={style.logoSection}>
        <div className={style.logoIcon}>
          <FaShieldAlt />
        </div>

        <div>
          <h2 className={style.logoTitle}>VELOOP</h2>
          <p className={style.logoSubtitle}>Admin Panel</p>
        </div>
      </div>

      <div className={style.menuSection}>
        <button
          className={`${style.menuItem} ${
            activeTab === "dashboard" ? style.activeMenu : ""
          }`}
          onClick={() => setActiveTab("dashboard")}
        >
          <FaChartPie />
          Dashboard
        </button>

        <button
          className={`${style.menuItem} ${
            activeTab === "users" ? style.activeMenu : ""
          }`}
          onClick={() => setActiveTab("users")}
        >
          <FaUsers />
          User Summary
        </button>

        <button
          className={`${style.menuItem} ${
            activeTab === "withdrawals" ? style.activeMenu : ""
          }`}
          onClick={() => setActiveTab("withdrawals")}
        >
          <FaWallet />
          Withdrawals
        </button>
      </div>
    </div>
  );
};

export default AdminSidebar;
