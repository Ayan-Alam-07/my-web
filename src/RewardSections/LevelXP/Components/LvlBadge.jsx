import styles from "./LvlBadge.module.css";
import {
  FaShieldAlt,
  FaMedal,
  FaCrown,
  FaGem,
  FaTrophy,
  FaStar,
  FaChessKing,
} from "react-icons/fa";
import { FiPlus } from "react-icons/fi";

const badgeMap = {
  Bronze: {
    Icon: FaShieldAlt,
    label: "Bronze",
    subtext: "Early momentum unlocked",
    className: styles.bronze,
  },
  "Bronze+": {
    Icon: FiPlus,
    label: "Bronze Plus",
    subtext: "First upgrade milestone reached",
    className: styles.bronzePlus,
  },
  Silver: {
    Icon: FaMedal,
    label: "Silver",
    subtext: "Consistent earner status",
    className: styles.silver,
  },
  Gold: {
    Icon: FaCrown,
    label: "Gold",
    subtext: "Premium rewards unlocked",
    className: styles.gold,
  },
  Platinum: {
    Icon: FaGem,
    label: "Platinum",
    subtext: "Elite member visibility",
    className: styles.platinum,
  },
  Diamond: {
    Icon: FaTrophy,
    label: "Diamond",
    subtext: "Top-level prestige badge",
    className: styles.diamond,
  },
  Elite: {
    Icon: FaStar,
    label: "Elite",
    subtext: "Priority rewards prestige",
    className: styles.elite,
  },
  Crown: {
    Icon: FaChessKing,
    label: "Crown",
    subtext: "Highest rewards authority",
    className: styles.crown,
  },
};

const LvlBadge = ({ badge = "Bronze" }) => {
  const current = badgeMap[badge] || badgeMap.Bronze;
  const Icon = current.Icon;

  return (
    <section className={`${styles.badgeCard} ${current.className}`}>
      <div className={styles.aura}></div>
      <div className={styles.sparkOne}></div>
      <div className={styles.sparkTwo}></div>

      <div className={styles.header}>
        <span className={styles.eyebrow}>Reward badge</span>
        <span className={styles.statusPill}>Verified tier</span>
      </div>

      <div className={styles.badgeShell}>
        <div className={styles.outerRing}>
          <div className={styles.middleRing}>
            {badge !== "Bronze+" ? (
              <div className={styles.innerCore}>
                <Icon className={styles.icon} />
              </div>
            ) : (
              <div className={styles.innerCoreBrnzP}>
                <FaShieldAlt className={styles.icon} />
                <span className={styles.plusBadge}>
                  <FiPlus className={styles.plusIcon} />
                </span>
              </div>
            )}
          </div>
        </div>

        {/* <div className={styles.ribbonLeft}></div>
        <div className={styles.ribbonRight}></div> */}
      </div>

      <div className={styles.content}>
        <h3>{current.label}</h3>
        <p>{current.subtext}</p>

        <div className={styles.meta}>
          <div className={styles.metaItem}>
            <span>Tier</span>
            <strong>{badge}</strong>
          </div>
          <div className={styles.metaItem}>
            <span>Access</span>
            <strong>Rewards enabled</strong>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LvlBadge;
