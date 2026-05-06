import { FaAward, FaCrown, FaMedal } from "react-icons/fa";
import styles from "./TopWinners.module.css";
import { useList } from "../../../Context/ContextStore";

const winnerStyles = [
  {
    title: "1st Place",
    icon: <FaCrown />,
    accent: styles.first,
  },
  {
    title: "2nd Place",
    icon: <FaMedal />,
    accent: styles.second,
  },
  {
    title: "3rd Place",
    icon: <FaAward />,
    accent: styles.third,
  },
];

const TopWinners = ({ winners }) => {
  const { isLoading } = useList();

  return (
    <section className={styles.wrap}>
      <div className={styles.head}>
        <div>
          <span>Top contenders</span>
          <h2>This week’s leading positions</h2>
        </div>
      </div>

      <div className="row g-3 mt-1">
        {(isLoading ? [1, 2, 3] : winnerStyles).map((item, index) => {
          const winner = winners[index];

          if (isLoading) {
            return (
              <div key={index} className="col-12 col-lg-4">
                <div className={styles.skeleton} />
              </div>
            );
          }

          return (
            <div key={winner?.userId || index} className="col-12 col-lg-4">
              <div className={`${styles.winnerCard} ${item.accent}`}>
                <div className={styles.topBar}>
                  <span>{item.title}</span>
                  <div className={styles.iconWrap}>{item.icon}</div>
                </div>

                <h3>{winner?.userId || "--"}</h3>
                <p>Premium weekly performer</p>

                <div className="row g-3 mt-1">
                  <div className="col-6">
                    <div className={styles.dataBox}>
                      <small>Weekly Coins</small>
                      <strong>{winner?.weeklyCoinsEarned ?? 0}</strong>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className={styles.dataBox}>
                      <small>XP</small>
                      <strong>{winner?.xp ?? 0}</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TopWinners;
