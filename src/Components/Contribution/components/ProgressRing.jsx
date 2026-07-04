import { useMemo } from "react";
import { FaBolt, FaAward } from "react-icons/fa6";
import styles from "./ProgressRing.module.css";

export default function ProgressRing({ currentDay, totalDays, progress }) {
  const radius = 92;

  const circumference = 2 * Math.PI * radius;

  const strokeOffset = circumference - progress * circumference;

  const percentage = Math.round(progress * 100);

  const ringColor = useMemo(() => {
    if (percentage >= 100) return "#22C55E";

    if (percentage >= 70) return "#FFD54A";

    if (percentage >= 40) return "#38BDF8";

    return "#8B5CF6";
  }, [percentage]);

  return (
    <section className={styles.progressCard}>
      <div className={styles.cardGlow}></div>
      <div className={styles.cardGlow2}></div>
      <div className={styles.noise}></div>

      <div
        className="d-flex flex-column justify-content-around"
        style={{ height: "100%" }}
      >
        <div className={styles.cardHeader}>
          <div>
            <span className={styles.badge}>
              <FaAward />
              VAULT STATUS
            </span>

            <h3>Reward Progress</h3>

            <p className="mb-1">Your sync journey is growing every day.</p>
          </div>

          <div className={styles.percentChip} style={{ color: ringColor }}>
            {percentage}%
          </div>
        </div>

        <div className={styles.progressRingWrapper}>
          <div className={styles.ringGlow}></div>

          <div className={styles.ringOrbit}></div>

          <div className={styles.ringOrbit2}></div>

          <svg viewBox="0 0 240 240" className={styles.progressSvg}>
            <defs>
              <linearGradient
                id="progressGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#FFE37D" />

                <stop offset="50%" stopColor="#FFD54A" />

                <stop offset="100%" stopColor="#FFB300" />
              </linearGradient>
            </defs>

            <circle
              cx="120"
              cy="120"
              r={radius}
              className={styles.progressTrack}
            />

            <circle
              cx="120"
              cy="120"
              r={radius}
              className={styles.progressCircle}
              strokeDasharray={circumference}
              strokeDashoffset={strokeOffset}
            />
          </svg>

          <div className={styles.progressCenter}>
            <div className={styles.dayCircle}>
              <span className={styles.progressDay}>{currentDay}</span>

              <span className={styles.progressTotal}>/ {totalDays}</span>
            </div>

            <p>Sync Days</p>

            <div
              className={styles.progressPercentage}
              style={{ color: ringColor }}
            >
              <FaBolt />
              {percentage}%
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
