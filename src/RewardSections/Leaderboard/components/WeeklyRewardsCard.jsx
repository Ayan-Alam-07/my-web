import { FaCoins, FaCrown, FaGift, FaMedal } from "react-icons/fa";
import styles from "./WeeklyRewardsCard.module.css";

const rewards = [
  { label: "1st Winner", value: "1000 Coins", icon: <FaCrown /> },
  { label: "2nd Winner", value: "500 Coins", icon: <FaMedal /> },
  { label: "3rd Winner", value: "250 Coins", icon: <FaGift /> },
  { label: "4 - 50", value: "100 Coins", icon: <FaCoins /> },
  { label: "51 - 100", value: "50 Coins", icon: <FaCoins /> },
  { label: "101+", value: "25 Coins", icon: <FaCoins /> },
];

const WeeklyRewardsCard = () => {
  return (
    <section className={styles.rewardsCard}>
      <span className={styles.kicker}>Reward ladder</span>
      <h3>Weekly payout structure</h3>

      <div className="d-flex flex-column gap-3 mt-4">
        {rewards.map((item) => (
          <div key={item.label} className={styles.rewardRow}>
            <div className={styles.left}>
              <div className={styles.rewardIcon}>{item.icon}</div>
              <div>
                <strong>{item.label}</strong>
                <span>Reward tier</span>
              </div>
            </div>
            <div className={styles.right}>
              <strong>{item.value}</strong>
              <span>Backend controlled</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WeeklyRewardsCard;
