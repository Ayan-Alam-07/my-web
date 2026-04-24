// PreviewDailyMissions.jsx

import RewardsBase from "../RewardsBase/RewardsBase";
import styles from "./PreviewDailyMissions.module.css";
import { Target, CheckCircle2, Zap } from "lucide-react";

const PreviewDailyMissions = () => {
  const milestone = [
    {
      id: 1,
      icons: <CheckCircle2 size={17} />,
      text: "Watch Ads",
      reward: "+1000 VEs",
      tag: "completed",
    },
    {
      id: 2,
      icons: <Zap size={17} />,
      text: "Complete 2 Offers & More...",
      mobText: "Do Task & More...",
      reward: "+500 VEs ",
      tag: "active",
    },
  ];

  const icon = <Target size={24} />;

  return (
    <RewardsBase
      icon={icon}
      title={"Complete Missions"}
      badge={"Daily Challenges"}
      btnText={"Do Missions & Get rewarded"}
      cardClass={"dailyMissionCard"}
      glowClass={"dailyMissionGlow"}
      iconBoxClass={"dailyMissionIconBox"}
      badgeClass={"dailyMissionBadge"}
      btnClass={"dailyMissionBtn"}
      isLocked={true}
      unlockLevel={2}
    >
      <div className={styles.missionList}>
        {milestone.map((item) => (
          <div
            key={item.id}
            className={`${styles.missionItem} ${styles[item.tag]}`}
          >
            <div className={styles.left}>
              <span>{item.icons}</span>
              <span>
                {item.id === 2 ? (
                  <span>
                    <span className={styles.nonMobTxt}>{item.text}</span>
                    <span className={styles.mobTxt}>{item.mobText}</span>
                  </span>
                ) : (
                  item.text
                )}
              </span>
            </div>
            <div className={styles.reward}>{item.reward}</div>
          </div>
        ))}
      </div>
    </RewardsBase>
  );
};

export default PreviewDailyMissions;
