// PreviewLevelXP.jsx

import styles from "./PreviewLevelXP.module.css";
import { TrendingUp, Zap, Star } from "lucide-react";
import RewardsBase from "../RewardsBase/RewardsBase";

const PreviewLevelXP = () => {
  const badge = <TrendingUp size={14} style={{ marginLeft: "3px" }} />;
  return (
    <RewardsBase
      title={"level"}
      badge={badge}
      btnText={"View Progress"}
      cardClass={"levelXPCard"}
      glowClass={"levelXPGlow"}
      badgeClass={"levelXPBadge"}
      btnClass={"levelXPBtn"}
      isLocked={false}
      navigation={"Lvl-Dashboard"}
    >
      <div className={styles.middleSection}>
        <div className={styles.progressWrapper}>
          <div className={styles.progressInfo}>
            <span>2,450 XP</span>
            <strong>3,000 XP</strong>
          </div>

          <div className={styles.progressBar}>
            <div className={styles.progressFill}></div>
          </div>
        </div>
      </div>
      <div className={styles.rewardCards}>
        <div className={styles.rewardCard}>
          <div className={styles.rewardIcon}>
            <Zap size={18} />
          </div>

          <div>
            <span>Next Reward</span>
            <strong>+100 VEs</strong>
          </div>
        </div>

        <div className={styles.rewardCard}>
          <div className={`${styles.rewardIcon} ${styles.starIcon}`}>
            <Star size={18} />
          </div>

          <div>
            <span>Unlock At</span>
            <strong>Level 13</strong>
          </div>
        </div>
      </div>
    </RewardsBase>
  );
};

export default PreviewLevelXP;
