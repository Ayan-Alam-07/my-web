import styles from "./DailyEarningCard.module.css";
import css from "../ActionButtons/ActionButtons.module.css";
import { FaArrowTrendUp, FaClock } from "react-icons/fa6";
import { SiBoosty } from "react-icons/si";
import { IoDiamond } from "react-icons/io5";
import { MdOutlineFlashOn } from "react-icons/md";
import { BiSolidCoinStack } from "react-icons/bi";

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

            <small>Boost to temporarily increase your staking returns.</small>
          </div>

          <button className={styles.boostBtn}>
            <SiBoosty size={22} /> Boost your Stake
          </button>

          <span className={styles.boostHint}>
            <span>Watch ads</span> • <span>Earn more</span> •{" "}
            <span>2 Hour Boost</span>
          </span>
        </div>
      </div>

      <div className={styles.right}>
        <h3 className={css.actionHds}>Rewards Activity:</h3>
        {history.map((item) => (
          <div key={item.from} className={styles.historyItem}>
            <div className={styles.iconWrapper}>
              <BiSolidCoinStack />
            </div>
            <div
              className="d-flex justify-content-between"
              style={{ width: "100%" }}
            >
              <div className={styles.hisLeft}>
                <span className={styles.defaultTitle}>
                  Staking Rewards Earned
                </span>
                <span className={styles.mobileTitle}>
                  <span className={styles.extraShort}>Reward</span> Earned
                </span>
                <strong>
                  {item.from} - {item.to}
                </strong>
              </div>

              <div className={styles.hisRight}>
                <span>
                  {item.totalThatTime} <span className={styles.unit}>VEs</span>
                </span>
                <strong>+{item.earned.toFixed(2)} VEs</strong>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
