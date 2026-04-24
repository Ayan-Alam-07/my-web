// PreviewDailyCheckIn.jsx

import { useList } from "../../Context/ContextStore";
import RewardsBase from "../RewardsBase/RewardsBase";
import styles from "./PreviewDailyCheckIn.module.css";
import { Flame, Coins, Gift } from "lucide-react";

const PreviewDailyCheckIn = () => {
  const icon = <Flame size={26} />;

  const { currentDay, rewards } = useList();

  return (
    <RewardsBase
      icon={icon}
      title={"Streak Rewards"}
      badge={"Daily Check-In"}
      btnText={"Complete Streak & Earn"}
      cardClass={"dailyCheckCard"}
      glowClass={"dailyCheckGlow"}
      iconBoxClass={"dailyCheckIconBox"}
      badgeClass={"dailyCheckBadge"}
      btnClass={"dailyCheckBtn"}
      navigation={"daily-streak"}
      isLocked={false}
    >
      <div className={styles.rewardSection}>
        <div className={styles.rewardCard}>
          <div className={styles.rewardTop}>
            <div className={styles.rewardIcon}>
              <Coins size={18} />
            </div>

            <div>
              <span>Today's Reward</span>
              <h4>{rewards.find((r) => r.day === currentDay)?.reward}</h4>
            </div>
          </div>
        </div>

        <div className={styles.rewardCard}>
          <div className={styles.rewardTop}>
            <div className={`${styles.rewardIcon} ${styles.specialIcon}`}>
              <Gift size={18} />
            </div>

            <div>
              <span>Final Reward</span>
              <h4>Mystery Box</h4>
            </div>
          </div>
        </div>
      </div>
    </RewardsBase>
  );
};

export default PreviewDailyCheckIn;
