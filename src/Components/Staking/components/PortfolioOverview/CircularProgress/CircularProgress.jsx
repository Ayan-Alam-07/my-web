import styles from "./CircularProgress.module.css";

const CircularProgress = ({ portfolio }) => {
  const size = 280;
  const stroke = 18;

  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;

  const progress = portfolio.progress;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div className={styles.wrapper}>
      <svg
        className={styles.svg}
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
      >
        <defs>
          <linearGradient
            id="portfolioGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#4FA6FF" />
            <stop offset="100%" stopColor="#227DFF" />
          </linearGradient>

          <filter id="glow">
            <feGaussianBlur stdDeviation="5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <circle
          className={styles.track}
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={stroke}
        />

        <circle
          className={styles.progress}
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={stroke}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          filter="url(#glow)"
        />
      </svg>

      <div className={styles.content}>
        <span className={styles.label}>Progress</span>

        <h2>{progress}%</h2>

        <span className={styles.days}>{portfolio.daysLeft} Days Left</span>
      </div>
    </div>
  );
};

export default CircularProgress;
