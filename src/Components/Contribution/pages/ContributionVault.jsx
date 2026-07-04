// ContributionVault.jsx
import { useState, useMemo } from "react";
import styles from "./ContributionVault.module.css";

import HeroCard from "../components/HeroCard";
import AnalyticsGrid from "../components/AnalyticsGrid";
import ProgressRing from "../components/ProgressRing";
import RewardJourney from "../components/RewardJourney";
import RecoveryCard from "../components/RecoveryCard";
import CelebrationModal from "../components/CelebrationModal";
import ConfettiCanvas from "../components/ConfettiCanvas";

import CommonNavArr from "../../CommonComponents/CommonNavArr";

import { showSuccess, showError } from "../../../utils/Toast";
import TierRoadmap from "../components/TierRoadmap";

export default function ContributionVault() {
  const TOTAL_DAYS = 30;

  const [contributedDays, setContributedDays] = useState(12);
  const [currentStreak, setCurrentStreak] = useState(5);
  const [vesBalance, setVesBalance] = useState(500);
  const [missedDays, setMissedDays] = useState(1);

  const [hasContributedToday, setHasContributedToday] = useState(false);
  const [rewardClaimed, setRewardClaimed] = useState(false);
  const [showCelebration, setShowCelebration] = useState(false);

  const progress = contributedDays / TOTAL_DAYS;

  const remainingDays = TOTAL_DAYS - contributedDays;

  const milestones = useMemo(
    () => [
      { day: 7, reward: "25 VEs" },
      { day: 15, reward: "50 VEs" },
      { day: 21, reward: "75 VEs" },
      { day: 30, reward: "₹10" },
    ],
    [],
  );

  const contributeToday = () => {
    if (hasContributedToday) return;

    const next = contributedDays + 1;

    setContributedDays(next);
    setCurrentStreak((prev) => prev + 1);
    setHasContributedToday(true);

    if (next >= TOTAL_DAYS) {
      setTimeout(() => {
        setShowCelebration(true);
      }, 500);
    }

    showSuccess("Contribution Added");
  };

  const recoverDay = () => {
    if (vesBalance < 89) {
      showError("Insufficient VEs");
      return;
    }

    setVesBalance((prev) => prev - 89);
    setMissedDays((prev) => Math.max(prev - 1, 0));
    setContributedDays((prev) => prev + 1);

    showSuccess("Streak Restored");
  };

  const claimReward = () => {
    setRewardClaimed(true);
    setShowCelebration(false);

    showSuccess("₹10 Reward Claimed");
  };

  return (
    <div className={`container-fluid px-0 ${styles.pageColor}`}>
      <CommonNavArr id={24} navigation={"/Home"} />
      <div className="container">
        <ConfettiCanvas active={showCelebration} />

        <div className={`mt-4 ${styles.page}`}>
          <div className={styles.container}>
            <div className="mb-4">
              <HeroCard
                contributedDays={contributedDays}
                totalDays={TOTAL_DAYS}
                remainingDays={remainingDays}
                hasContributedToday={hasContributedToday}
                rewardClaimed={rewardClaimed}
                onContribute={contributeToday}
              />
            </div>

            <div className={`mb-4 ${styles.dashboardGrid}`}>
              <ProgressRing
                currentDay={contributedDays}
                totalDays={TOTAL_DAYS}
                progress={progress}
              />
            </div>
            <AnalyticsGrid
              streak={currentStreak}
              balance={vesBalance}
              completion={Math.round(progress * 100)}
              reward="₹10"
            />
            <div className="mt-4">
              <TierRoadmap completion={40} />
            </div>

            {missedDays > 0 && (
              <div className="mt-4">
                <RecoveryCard
                  cost={89}
                  balance={vesBalance}
                  missedDays={missedDays}
                  onRecover={recoverDay}
                />
              </div>
            )}

            <div className="mb-4">
              <RewardJourney
                currentDay={contributedDays}
                milestones={milestones}
              />
            </div>
          </div>
        </div>

        <CelebrationModal
          open={showCelebration}
          reward="₹10"
          onClaim={claimReward}
        />
      </div>
    </div>
  );
}
