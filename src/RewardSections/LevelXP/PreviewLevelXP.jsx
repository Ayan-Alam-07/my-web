// PreviewLevelXP.jsx

import styles from "./PreviewLevelXP.module.css";
import { TrendingUp, Zap, Star } from "lucide-react";
import RewardsBase from "../RewardsBase/RewardsBase";
import LvlProgressBar from "./Components/LvlProgressBar";

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
      <LvlProgressBar status={false} />

      <div className={styles.rewardCards}>
        <div className={styles.rewardCard}>
          <div className={styles.rewardIcon}>
            <Zap size={18} />
          </div>

          <div>
            <span>Next Reward</span>
            <strong className={`d-flex align-items-center ${styles.lvlGift}`}>
              <p className="m-0 d-inline-block" style={{ color: "#e2e60a" }}>
                ₹ 25
              </p>{" "}
              <p className="m-0 ms-1">Gift Card</p>
            </strong>
          </div>
        </div>

        <div className={styles.rewardCard}>
          <div className={`${styles.rewardIcon} ${styles.starIcon}`}>
            <Star size={18} />
          </div>

          <div>
            <span>Unlock At</span>
            <strong>Level 7</strong>
          </div>
        </div>
      </div>
    </RewardsBase>
  );
};

export default PreviewLevelXP;
