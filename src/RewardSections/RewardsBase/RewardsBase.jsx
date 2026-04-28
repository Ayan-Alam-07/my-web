import { ChevronRight, Crown } from "lucide-react";
import styles from "./RewardsBase.module.css";
import Badge from "./Badge";
import { useNavigate } from "react-router-dom";
import { showInfo, showWarning } from "../../utils/Toast";
import { useList } from "../../Context/ContextStore";

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
  navigation,
  isLocked,
  unlockLevel,
}) => {
  const navigate = useNavigate();

  const { data } = useList();

  return (
    <div
      className={`${styles.card} ${styles[cardClass]} ${isLocked && styles.active} ${badge === "Daily Challenges" && isLocked ? styles.missionActive : badge === "Achievements" && isLocked ? styles.achievementsActive : ""}`}
      onClick={() => {
        if (!isLocked) {
          navigate(`/${navigation}`);
        } else {
          showWarning(`LevelUp to unlock ${badge}`);
          // showInfo(`LevelUp to unlock ${badge}`);
        }
      }}
    >
      {/* overlay */}
      {isLocked && (
        <div className={styles.lockedOverlay}>
          <div className={styles.lockedContent}>
            <span className={styles.lockedIcon}>🔒</span>
            <span className={styles.lockedText}>
              UnLock at Level {unlockLevel}
            </span>
          </div>
        </div>
      )}

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
              {/* <span>Level 12</span> */}
              <span>Level {data.level}</span>
            </div>

            <div className={styles.headingContent}>
              <h3 className="ms-2 ps-1">XP Rewards</h3> {/* title */}
            </div>
          </div>
        )}

        <Badge title={title} badgeClass={badgeClass} badge={badge} />
      </div>

      <span className={styles.childrens}>{children}</span>

      <button className={`${styles.actionBtn} ${styles[btnClass]}`}>
        {btnText} {/* btnText */}
        <ChevronRight size={18} />
      </button>
    </div>
  );
};
export default RewardsBase;
