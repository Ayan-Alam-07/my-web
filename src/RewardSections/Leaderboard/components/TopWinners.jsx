import { FaCrown, FaMedal, FaAward, FaCoins, FaBolt } from "react-icons/fa";
import { motion } from "framer-motion";
import styles from "./TopWinners.module.css";
import { useList } from "../../../Context/ContextStore";

const winnerStyles = [
  {
    title: "Champion",
    icon: <FaCrown />,
    accent: styles.first,
    glow: styles.goldGlow,
    podium: styles.firstPodium,
  },
  {
    title: "Runner Up",
    icon: <FaMedal />,
    accent: styles.second,
    glow: styles.silverGlow,
    podium: styles.secondPodium,
  },
  {
    title: "Third Place",
    icon: <FaAward />,
    accent: styles.third,
    glow: styles.bronzeGlow,
    podium: styles.thirdPodium,
  },
];

const TopWinners = ({ winners }) => {
  const { isLoading } = useList();

  return (
    <section className={styles.wrapper}>
      <div className={styles.header}>
        <div>
          <span className={styles.badge}>Weekly Competition</span>

          <h2>Top Reward Earners</h2>

          <p>
            Top performers dominating this week’s premium reward leaderboard.
          </p>
        </div>
      </div>

      <div className={styles.podiumGrid}>
        {[1, 0, 2].map((winnerIndex, i) => {
          const style = winnerStyles[winnerIndex];
          const winner = winners[winnerIndex];

          if (isLoading) {
            return (
              <div key={i} className={styles.skeletonCard}>
                <div className={styles.skeletonInner} />
              </div>
            );
          }

          return (
            <motion.div
              key={i}
              // key={winner?.userId}
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className={`${styles.card} ${style.accent}`}
            >
              <div className={styles.spark}></div>

              <div className={styles.rankBadge}>{style.icon}</div>

              <div className={`${styles.avatarWrap} ${style.glow}`}>
                <img
                  src={`https://api.dicebear.com/7.x/initials/svg?seed=${winner?.userId}`}
                  alt=""
                />
              </div>

              <div className={styles.userMeta}>
                <h3>{winner?.userId}</h3>
                <span>{style.title}</span>
              </div>

              {/* <div className={styles.statsGrid}>
                <div className={styles.statCard}>
                  <FaCoins />
                  <div>
                    <small>Weekly Coins</small>
                    <strong>
                      {winner?.weeklyCoinsEarned?.toLocaleString()}
                    </strong>
                  </div>
                </div>
              </div> */}

              <div className={`${styles.podium} ${style.podium}`}>
                <span>{winner?.rank}</span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default TopWinners;
