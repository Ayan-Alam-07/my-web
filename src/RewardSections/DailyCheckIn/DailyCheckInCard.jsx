import styles from "./DailyCheckInCard.module.css";
import { Flame, Gift, CalendarDays, Coins, Crown } from "lucide-react";

const rewards = [
  { day: "Day 1", reward: "5 Coins", icon: <Coins size={18} /> },
  { day: "Day 2", reward: "10 Coins", icon: <Coins size={18} /> },
  { day: "Day 3", reward: "15 Coins", icon: <Coins size={18} /> },
  { day: "Day 4", reward: "20 Coins", icon: <Coins size={18} /> },
  { day: "Day 5", reward: "25 Coins", icon: <Coins size={18} /> },
  { day: "Day 6", reward: "₹2 Gift Card", icon: <Gift size={18} /> },
  { day: "Day 7", reward: "Mystery Box", icon: <Crown size={18} /> },
];

const DailyCheckInCard = () => {
  const currentDay = 4;

  return (
    <div className={styles.card}>
      <div className={styles.topGlow}></div>

      <div className={styles.header}>
        <div className={styles.iconBox}>
          <Flame size={28} />
        </div>

        <div>
          <h2>Daily Check-In</h2>
          <p>Maintain your streak & earn rewards</p>
        </div>
      </div>

      <div className={styles.streakInfo}>
        <div className={styles.streakLeft}>
          <CalendarDays size={18} />
          <span>Current Streak</span>
        </div>

        <div className={styles.streakCount}>{currentDay} Days</div>
      </div>

      <div className={styles.daysContainer}>
        {rewards.map((item, index) => (
          <div
            key={index}
            className={`${styles.dayCard} ${
              index + 1 <= currentDay ? styles.activeDay : ""
            } ${index + 1 === 7 ? styles.specialDay : ""}`}
          >
            <div className={styles.dayIcon}>{item.icon}</div>
            <span className={styles.dayText}>{item.day}</span>
            <small>{item.reward}</small>
          </div>
        ))}
      </div>

      <button className={styles.claimBtn}>Claim Today's Reward</button>
    </div>
  );
};

export default DailyCheckInCard;
