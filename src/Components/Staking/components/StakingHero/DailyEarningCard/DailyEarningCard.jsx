import styles from "./DailyEarningCard.module.css";

import { FaArrowTrendUp, FaClock } from "react-icons/fa6";

import AnimatedCounter from "../../../../CommonComponents/AnimatedCounter";

export default function DailyEarningCard({ todayProfit, history }) {
  return (
    <section className={styles.card}>
      <div className={styles.left}>
        <span className={styles.label}>Today's Earnings</span>

        <h2 className={styles.earning}>
          +
          <AnimatedCounter
            value={todayProfit}
            formatter={(v) => v.toFixed(4)}
          />
          <small> VEs</small>
        </h2>

        <div className={styles.live}>
          <span className={styles.dot}></span>
          LIVE
        </div>
      </div>

      <div className={styles.right}>
        <div className={styles.rightHeader}>
          <FaClock />
          Hourly Earnings
        </div>

        {/* {history.map((item) => (
          <div key={item.from} className={styles.historyItem}>
            <span>
              {item.from} - {item.to}
            </span>

            <strong>+{item.earned.toFixed(2)}</strong>
          </div>
        ))} */}
        {history.map((item) => (
          <div key={item.from} className={styles.historyItem}>
            <span>
              {item.from} - {item.to}
            </span>

            <div className={styles.progressTrack}>
              <div
                className={styles.progressFill}
                style={{
                  width: `${(item.earned / 7) * 100}%`,
                }}
              />
            </div>

            <strong>+{item.earned.toFixed(2)}</strong>
          </div>
        ))}
      </div>
    </section>
  );
}
