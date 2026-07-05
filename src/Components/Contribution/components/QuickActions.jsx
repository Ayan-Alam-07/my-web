import {
  FaArrowRight,
  FaBolt,
  FaCoins,
  FaGift,
  FaWallet,
} from "react-icons/fa6";
import { Link } from "react-router-dom";
import styles from "./QuickActions.module.css";
import RewardArrow from "../../CommonComponents/RewardArrow";

const QuickActions = () => {
  const actions = [
    {
      title: "Earn SVEs & VEs",
      desc: "Complete offers, tasks & earn",
      icon: FaCoins,
      link: "/tap-n-earn",
    },
    {
      title: "Claim Rewards",
      desc: "Redeem unlocked rewards",
      icon: FaGift,
      link: "/watchAd-bonus",
    },
    {
      title: "Boost Earnings",
      desc: "Increase daily rewards instantly",
      icon: FaBolt,
      link: "/watch-Ads",
    },
    {
      title: "Open Wallet",
      desc: "View balance & history",
      icon: FaWallet,
      link: "/wallet",
    },
  ];

  return (
    <div className={styles.right}>
      <h3>Quick Actions</h3>

      <div className={styles.actionGrid}>
        {actions.map((act, idx) => (
          <Link key={idx} to={act.link} className={styles.actionCard}>
            <act.icon />
            <div>
              <h4>{act.title}</h4>
              <p className="mb-0">{act.desc}</p>
            </div>
            <RewardArrow className={styles.arrow} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default QuickActions;
