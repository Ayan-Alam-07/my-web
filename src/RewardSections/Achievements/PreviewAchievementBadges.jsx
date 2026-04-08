// PreviewAchievementBadges.jsx

import RewardsBase from "../RewardsBase/RewardsBase";
import styles from "./PreviewAchievementBadges.module.css";
import { Award, Star, ShieldCheck, Trophy } from "lucide-react";

const PreviewAchievementBadges = () => {
  const badges = [
    { id: 1, icon: <Star size={16} />, title: "Starter" },
    { id: 2, icon: <ShieldCheck size={16} />, title: "Verified" },
    { id: 3, icon: <Trophy size={16} />, title: "Top Earner" },
    {
      id: 4,
      icon: <div className={styles.lockCircle}>?</div>,
      title: "More..",
    },
  ];

  const icon = <Award size={24} />;

  return (
    <RewardsBase
      icon={icon}
      title={"Collect Badge & Earn"}
      badge={"Achievements"}
      btnText={"Unlock Badges Claim Rewards"}
      cardClass={"achievementCard"}
      glowClass={"achievementGlow"}
      iconBoxClass={"achievementIconBox"}
      badgeClass={"achievementBadge"}
      btnClass={"achievementBtn"}
    >
      <div className={styles.badgesGrid}>
        {badges.map((badge) => (
          <div
            key={badge.id}
            className={`${styles.badgeCard} ${styles.unlocked}`}
          >
            <div className={styles.badgeIcon}>{badge.icon}</div>
            <span className={badge.id === 4 ? styles.more : ""}>
              {badge.title}
            </span>
          </div>
        ))}
      </div>
    </RewardsBase>
  );
};

export default PreviewAchievementBadges;
