import { useEffect, useRef } from "react";
import styles from "./RewardSections.module.css";

import PreviewDailyCheckIn from "./DailyCheckIn/PreviewDailyCheckIn";
import PreviewSpinWheel from "./SpinWheel/PreviewSpinWheel";
import PreviewDailyMissions from "./DailyMissions/PreviewDailyMissions";
import PreviewAchievementBadges from "./Achievements/PreviewAchievementBadges";
import PreviewLevelXP from "./LevelXP/PreviewLevelXP";

const RewardSections = () => {
  const scrollRef = useRef(null);

  // useEffect(() => {
  //   const container = scrollRef.current;

  //   const interval = setInterval(() => {
  //     if (!container) return;

  //     const card = container.querySelector(`.${styles.cardWrapper}`);
  //     const cardWidth = card?.offsetWidth + -40;

  //     if (
  //       container.scrollLeft + container.offsetWidth >=
  //       container.scrollWidth - 10
  //     ) {
  //       container.scrollTo({
  //         left: 0,
  //         behavior: "smooth",
  //       });
  //     } else {
  //       container.scrollBy({
  //         left: cardWidth,
  //         behavior: "smooth",
  //       });
  //     }
  //   }, 3500);

  //   return () => clearInterval(interval);
  // }, []);

  useEffect(() => {
    const container = scrollRef.current;

    const getScrollAmount = () => {
      const card = container?.querySelector(`.${styles.cardWrapper}`);
      if (!card) return 0;

      const screenWidth = window.innerWidth;
      const gap = screenWidth < 768 ? 12 : screenWidth < 1024 ? 20 : 18;

      return card.offsetWidth + gap;
    };

    const interval = setInterval(() => {
      if (!container) return;

      const scrollAmount = getScrollAmount();

      if (
        container.scrollLeft + container.offsetWidth >=
        container.scrollWidth - 10
      ) {
        container.scrollTo({
          left: 0,
          behavior: "smooth",
        });
      } else {
        container.scrollBy({
          left: scrollAmount,
          behavior: "smooth",
        });
      }
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.scrollContainer} ref={scrollRef}>
        <div className={styles.cardWrapper}>
          <PreviewDailyCheckIn />
        </div>
        <div className={styles.cardWrapper}>
          <PreviewSpinWheel />
        </div>
        <div className={styles.cardWrapper}>
          <PreviewDailyMissions />
        </div>
        <div className={styles.cardWrapper}>
          <PreviewAchievementBadges />
        </div>
        <div className={styles.cardWrapper}>
          <PreviewLevelXP />
        </div>
      </div>
    </div>
  );
};

export default RewardSections;
