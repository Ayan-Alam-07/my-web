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
import ContributionGuide from "../components/ContributionGuide";
import QuickActions from "../components/QuickActions";

import { FaCrown, FaGem, FaMedal, FaShieldHalved } from "react-icons/fa6";

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
      { day: 7, reward: "50 VEs", tier: "Silver" },
      { day: 15, reward: "100 VEs", tier: "Gold" },
      { day: 21, reward: "150 VEs", tier: "Platinum" },
      { day: 30, reward: "₹10", tier: "Legend" },
    ],
    [],
  );

  const tiers = [
    {
      name: "Bronze",
      min: 0,
      max: 19,
      reward: "+1000 SVEs",
      icon: <FaShieldHalved />,
      color: "bronze",
    },
    {
      name: "Silver",
      min: 20,
      max: 39,
      reward: "+1000 SVEs",
      icon: <FaMedal />,
      color: "silver",
    },
    {
      name: "Gold",
      min: 40,
      max: 59,
      reward: "+1000 SVEs",
      icon: <FaGem />,
      color: "gold",
    },
    {
      name: "Platinum",
      min: 60,
      max: 79,
      reward: "+1000 SVEs",
      icon: <FaGem />,
      color: "platinum",
    },
    {
      name: "Diamond",
      min: 80,
      max: 99,
      reward: "+1000 SVEs",
      icon: <FaCrown />,
      color: "diamond",
    },
    {
      name: "Legend",
      min: 100,
      max: 100,
      reward: "₹10 Reward",
      icon: <FaCrown />,
      color: "legend",
    },
  ];

  const completion = 55;

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

              <ContributionGuide display={true} />
            </div>
            <AnalyticsGrid
              streak={currentStreak}
              balance={vesBalance}
              completion={Math.round(progress * 100)}
              reward="₹10"
            />
            <div className="mt-4">
              <TierRoadmap completion={completion} tiers={tiers} />
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

            <RewardJourney
              currentDay={contributedDays}
              milestones={milestones}
              tiers={tiers}
              completion={completion}
            />
          </div>

          <div className="mb-5">
            <QuickActions />
          </div>

          <div className={`mb-5  pb-4 ${styles.mobDisplay}`}>
            <ContributionGuide />
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
