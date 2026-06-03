import {
  FaWallet,
  FaTrophy,
  FaGift,
  FaFire,
  FaCoins,
  FaChartLine,
} from "react-icons/fa";

import { useNavigate } from "react-router-dom";

import styles from "./QuickActions.module.css";
import css from "../UserProfile.module.css";

const QuickActions = () => {
  const navigate = useNavigate();

  const actions = [
    {
      id: 1,
      title: "Wallet",
      icon: <FaWallet />,
      route: "/wallet",
    },
    {
      id: 2,
      title: "Leaderboard",
      icon: <FaTrophy />,
      route: "/leaderboard",
    },
    {
      id: 3,
      title: "Referral",
      icon: <FaGift />,
      route: "/referral",
    },
    {
      id: 4,
      title: "Daily Streak",
      icon: <FaFire />,
      route: "/daily-streak",
    },
    {
      id: 5,
      title: "Spin Wheel",
      icon: <FaCoins />,
      route: "/spin-wheel",
    },
    {
      id: 6,
      title: "Level Dashboard",
      icon: <FaChartLine />,
      route: "/Lvl-Dashboard",
    },
  ];

  const handleNavigate = (route) => {
    console.log(`[Quick Action] Navigate -> ${route}`);

    navigate(route);
  };

  return (
    <div className={styles.wrapper}>
      <div className={css.header}>
        <div>
          <h3>Quick Actions</h3>
          <p>Access important sections instantly</p>
        </div>
      </div>

      <div className="row g-3">
        {actions.map((action) => (
          <div key={action.id} className="col-6 col-md-4 col-lg-2">
            <div
              className={styles.actionCard}
              onClick={() => handleNavigate(action.route)}
            >
              <div className={styles.icon}>{action.icon}</div>

              <span>{action.title}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;
