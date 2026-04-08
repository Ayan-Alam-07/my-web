import { ChevronRight, Crown } from "lucide-react";
import styles from "./RewardsBase.module.css";

const RewardsBase = ({
  icon,
  title,
  badge,
  btnText,
  children,
  cardClass,
  glowClass,
  iconBoxClass,
  badgeClass,
  btnClass,
}) => {
  return (
    <div className={`${styles.card} ${styles[cardClass]}`}>
      <div className={`${styles.bgGlow} ${styles[glowClass]}`}></div>

      <div className={styles.header}>
        {title !== "level" ? (
          <div className={styles.left}>
            <div className={`${styles.iconBox} ${styles[iconBoxClass]}`}>
              {icon} {/*icons*/}
            </div>

            <div className={styles.headingContent}>
              <h3>{title}</h3> {/* title */}
            </div>
          </div>
        ) : (
          <div className={styles.topSection}>
            <div className={styles.levelBadge}>
              <Crown size={22} />
              <span>Level 12</span>
            </div>

            <div className={styles.headingContent}>
              <h3 className="ms-2 ps-1">XP Rewards</h3> {/* title */}
            </div>
          </div>
        )}
        <span className={`${styles.badge} ${styles[badgeClass]}`}>
          {title === "level" && "Grow"} {badge}
        </span>
      </div>

      {children}

      <button className={`${styles.actionBtn} ${styles[btnClass]}`}>
        {btnText} {/* btnText */}
        <ChevronRight size={18} />
      </button>
    </div>
  );
};
export default RewardsBase;
