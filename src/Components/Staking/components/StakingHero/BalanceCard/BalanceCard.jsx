import styles from "./BalanceCard.module.css";

import AnimatedBalance from "./AnimatedBalance";

import { FaArrowTrendUp, FaCircle, FaBolt } from "react-icons/fa6";

export default function BalanceCard({
  balance,
  growth,
  todayProfit,
  secondRate,
}) {
  return (
    <section className={styles.card}>
      {/* Premium Gradient Border */}
      <div className={styles.inner}>
        {/* Floating Glow */}
        <div className={styles.glow}></div>

        {/* Header */}

        <div className={styles.header}>
          <div className={styles.live}>
            <FaCircle />

            <span>LIVE</span>
          </div>

          <div className={styles.liveRate}>
            <FaBolt />

            <span>
              +{secondRate.toFixed(6)}
              <small>/sec</small>
            </span>
          </div>
        </div>

        <div className="text-center mb-5 mb-sm-5 mb-lg-4 ">
          {/* Label */}

          <span className={styles.label}>Current Stake Balance</span>

          {/* Animated Balance */}

          <AnimatedBalance balance={balance} secondRate={secondRate} />
        </div>

        {/* Stats */}

        <div className={styles.stats}>
          <div className={styles.statCard}>
            <span className={styles.statLabel}>Today's Growth</span>

            <strong className={styles.statValue}>
              <FaArrowTrendUp />+{growth}%
            </strong>
          </div>

          <div className={styles.statCard}>
            <span className={styles.statLabel}>Today's Earnings</span>

            <strong className={styles.earningValue}>
              +{todayProfit.toFixed(4)} VEs
            </strong>
          </div>
        </div>

        {/* Bottom Ticker */}

        <div className={styles.bottomTicker}>
          <div className={styles.tickerDot}></div>

          <span>
            Balance updates every second while your staking remains active.
          </span>
        </div>
      </div>
    </section>
  );
}
