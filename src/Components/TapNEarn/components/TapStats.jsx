import { motion } from "framer-motion";
import { FaBolt, FaSyncAlt, FaCoins, FaShieldAlt } from "react-icons/fa";
import styles from "./TapStats.module.css";
import { GiGems } from "react-icons/gi";

export default function TapStats({ taps, spins, tokens, locked }) {
  console.log(tokens);
  const cards = [
    {
      icon: <FaBolt />,
      label: "Total Taps",
      value: taps.toLocaleString(),
      badge: "LIVE",
    },
    { icon: <FaSyncAlt />, label: "Spins", value: spins, badge: "+2" },
    {
      icon: <FaCoins />,
      label: "Tokens",
      value: tokens.toFixed(2),
      badge: "+Tokens",
    },
    {
      icon: <FaCoins />,
      label: "VEs",
      value: tokens.toFixed(2),
      badge: "+VES",
    },
    {
      icon: <GiGems />,
      label: "Gems",
      value: tokens.toFixed(2),
      badge: "+Gems",
    },
    {
      icon: <FaShieldAlt />,
      label: "Reward Status",
      value: locked ? "LOCKED" : "ACTIVE",
      badge: locked ? "PAUSED" : "ONLINE",
      red: locked,
    },
  ];

  const length = cards.length - 1;

  return (
    <div className={styles.statsGrid}>
      {cards.map((c, i) => (
        <motion.div
          key={c.label}
          className={styles.statCard}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.08, duration: 0.5, ease: "easeOut" }}
        >
          <div className={styles.statTop}>
            <div className={styles.statIcon}>{c.icon}</div>
            <span
              className={`${styles.statBadge} ${c.red ? styles.statBadgeRed : ""}`}
            >
              {c.badge}
            </span>
          </div>
          <div className={styles.statValue}>
            <span>{c.value}</span>
            {i === 0 || i === length ? (
              ""
            ) : (
              <div>
                <button className={styles.transferBtn}>Transfer</button>
              </div>
            )}
          </div>
          <div className={styles.statLabel}>{c.label}</div>
        </motion.div>
      ))}
    </div>
  );
}
