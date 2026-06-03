import { FaCoins } from "react-icons/fa6";
import { FaRankingStar } from "react-icons/fa6";
import { FaTrophy } from "react-icons/fa";
import { FaWallet } from "react-icons/fa";

import { useList } from "../../../Context/ContextStore";

import styles from "./StatsSection.module.css";
import css from "../UserProfile.module.css";

const StatsSection = () => {
  const { user, level, data, withdrawals, rank } = useList();

  const stats = [
    {
      id: 1,
      title: "Available VEs",
      value: user?.coins ?? 0,
      icon: <FaCoins />,
      color: "#FFD700",
    },
    {
      id: 2,
      title: "Current XP",
      value: data?.xp ?? 0,
      icon: <FaRankingStar />,
      color: "#5F6FFF",
    },
    {
      id: 3,
      title: "Rank",
      value: rank ?? 0,
      icon: <FaTrophy />,
      color: "#00C853",
    },
    {
      id: 4,
      title: "Withdrawals",
      value: withdrawals?.length ?? 0,
      icon: <FaWallet />,
      color: "#FF6B6B",
    },
  ];

  return (
    <div className="row g-3 mb-4">
      {stats.map((stat) => (
        <div key={stat.id} className="col-6 col-lg-3">
          <div className={css.card}>
            <div
              className={styles.icon}
              style={{
                color: stat.color,
              }}
            >
              {stat.icon}
            </div>

            <h4 className={styles.value}>
              {stat.id === 3 && <span className="me-1">#</span>}
              {stat.value}
            </h4>

            <p className={styles.title}>{stat.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsSection;
