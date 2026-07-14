import styles from "./DailyEarningCard.module.css";

import { FaArrowTrendUp, FaClock } from "react-icons/fa6";
import { SiBoosty } from "react-icons/si";
import { IoDiamond } from "react-icons/io5";
import { MdOutlineFlashOn } from "react-icons/md";

import AnimatedCounter from "../../../../CommonComponents/AnimatedCounter";

export default function DailyEarningCard({ todayProfit, history }) {
  return (
    <section className={styles.card}>
      <div className={styles.left}>
        {/* Header */}
        <div className={styles.topRow}>
          <div className={styles.titleGroup}>
            <span className={styles.label}>Today's Earnings</span>

            <div className={styles.live}>
              <span className={styles.dot}></span>
              LIVE
            </div>
          </div>

          <div className={styles.rewardBadge}>
            <IoDiamond /> Rewarding
          </div>
        </div>

        {/* Amount */}

        <h2 className={styles.earning}>
          +
          <AnimatedCounter
            value={todayProfit}
            formatter={(v) => v.toFixed(4)}
          />
          <small> VEs</small>
        </h2>

        <span className={styles.subText}>
          Earned from your active staking portfolio today
        </span>

        {/* Boost Box */}

        <div className={styles.boostCard}>
          <div className={styles.boostInfo}>
            <span className={styles.boostTitle}>
              <MdOutlineFlashOn /> Boost Active Earnings
            </span>

            <small>
              Watch ads to temporarily increase your staking returns.
            </small>
          </div>

          <button className={styles.boostBtn}>
            <SiBoosty /> Boost your Stake
          </button>

          <span className={styles.boostHint}>
            <span>Watch ads</span> • <span>Earn more</span> •{" "}
            <span>2 Hour Boost</span>
          </span>
        </div>
      </div>

      <div className={styles.right}>
        <div className={styles.rightHeader}>
          <FaClock />
          Hourly Earnings
        </div>

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
