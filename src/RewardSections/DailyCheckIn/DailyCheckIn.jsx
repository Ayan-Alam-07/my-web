import { useEffect, useMemo, useState } from "react";
import styles from "./DailyCheckIn.module.css";
import {
  FaFire,
  FaCheckCircle,
  FaLock,
  FaCrown,
  FaGift,
  FaCoins,
  FaGem,
  FaBolt,
  FaStar,
  FaChevronRight,
  FaClock,
} from "react-icons/fa";
import { claimDailyCheckinReward } from "../../services/dailyCheckinService";
import { useList } from "../../Context/ContextStore";
import CommonNavArr from "../../Components/CommonComponents/CommonNavArr";
import CirLoader from "../../Components/CommonComponents/CirLoader";

export default function DailyCheckIn() {
  const [countdown, setCountdown] = useState("");
  const [isClaiming, setIsClaiming] = useState(false);

  const {
    isLoading,
    setIsLoading,
    currentDay,
    setCurrentDay,
    rewards,
    setRewards,
    claimedDays,
    setClaimedDays,
    nextClaimAt,
    setNextClaimAt,
    fetchRewards,
  } = useList();

  useEffect(() => {
    fetchRewards();
  }, []);

  useEffect(() => {
    if (!nextClaimAt) return;

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const nextTime = new Date(nextClaimAt).getTime();
      const diff = nextTime - now;

      if (diff <= 0) {
        setCountdown("");
        clearInterval(interval);
        fetchRewards();
        return;
      }

      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setCountdown(
        `${hours.toString().padStart(2, "0")}h ${minutes
          .toString()
          .padStart(2, "0")}m ${seconds.toString().padStart(2, "0")}s`,
      );
    }, 1000);

    return () => clearInterval(interval);
  }, [nextClaimAt]);

  const handleClaim = async () => {
    if (isClaiming) return;

    setIsClaiming(true);

    try {
      const data = await claimDailyCheckinReward();

      setClaimedDays(data.claimedDays || []);
      setCurrentDay(data.currentDay || 1);
      setNextClaimAt(data.nextClaimAt || null);

      setRewards((prev) =>
        prev.map((reward) => {
          if (reward.day === data.streakDay) {
            return {
              ...reward,
              isClaimed: true,
              isCurrent: false,
            };
          }

          if (reward.day === data.currentDay) {
            return {
              ...reward,
              isCurrent: true,
              isLocked: false,
            };
          }

          return reward;
        }),
      );
    } catch (error) {
      console.log(error.response?.data?.message);
    } finally {
      setIsClaiming(false);
    }
  };

  const getRewardIcon = (type, day) => {
    if (day === 7) return <FaCrown />;
    if (type === "coin") return <FaCoins />;
    if (type === "giftcard") return <FaGift />;
    if (type === "gem") return <FaGem />;
    if (type === "bonus") return <FaBolt />;

    return <FaStar />;
  };

  const nextReward = useMemo(() => {
    return rewards.find((item) => item.day === currentDay);
  }, [rewards, currentDay]);

  const canClaimNow =
    !nextClaimAt || new Date(nextClaimAt).getTime() <= new Date().getTime();

  if (isLoading) {
    return <CirLoader id={2} para={"Loading your streak rewards"} />;
  }

  return (
    <div className="container-fluid px-0">
      <CommonNavArr id={17} navigation={"/Home"} />

      <div className={styles.pageWrapper}>
        <div className="container mt-4 px-md-1 px-lg-2">
          <div className={styles.heroSection}>
            <div className={styles.heroLeft}>
              <div className={styles.topBadge}>
                <FaFire />
                <span>{claimedDays.length} Day Active Streak</span>
              </div>

              <h1 className={styles.mainTitle}>Daily Check-In Rewards</h1>

              <p className={styles.subtitle}>
                Login daily, maintain your streak, and unlock bigger rewards
                every day.
              </p>

              <div className={styles.heroStats}>
                <div className={styles.statCard}>
                  <span>Total Rewards</span>
                  <h3>{rewards.length}</h3>
                </div>

                <div className={styles.statCard}>
                  <span>Claimed Days</span>
                  <h3>{claimedDays.length}</h3>
                </div>

                <div className={styles.statCard}>
                  <span>Next Reward</span>
                  <h3>{nextReward?.value || "Locked"}</h3>
                </div>
              </div>
            </div>

            <div className={styles.heroRight}>
              <div className={styles.bigRewardCard}>
                <div className={styles.bigRewardIcon}>
                  <FaCrown />
                </div>

                <p className={styles.bigRewardLabel}>Ultimate Reward</p>

                <h2 className={styles.bigRewardTitle}>
                  {rewards[rewards.length - 1]?.value || "VIP Reward"}
                </h2>

                <span className={styles.bigRewardDay}>
                  Unlock on Day {rewards[rewards.length - 1]?.day || 7}
                </span>

                {nextClaimAt && !canClaimNow && (
                  <div className={styles.timerBox}>
                    <FaClock className="me-2" />
                    <span>{countdown}</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className={styles.progressSection}>
            <div className={styles.progressTop}>
              <span>Streak Progress</span>
              <span>
                {claimedDays.length}/{rewards.length || 7} Days
              </span>
            </div>

            <div className={styles.progressBar}>
              <div
                className={styles.progressFill}
                style={{
                  width: `${
                    rewards.length
                      ? (claimedDays.length / rewards.length) * 100
                      : 0
                  }%`,
                }}
              ></div>
            </div>
          </div>

          <div className={styles.rewardGrid}>
            {rewards.map((item) => {
              const isCompleted = item.isClaimed;
              const isCurrent = item.isCurrent;
              const isLocked = item.isLocked;

              return (
                <div
                  key={item.day}
                  className={`${styles.rewardCard}
                  ${isCompleted ? styles.completed : ""}
                  ${isCurrent ? styles.active : ""}
                  ${isLocked ? styles.lockedCard : ""}`}
                >
                  <div className={styles.cardTop}>
                    <div className={styles.dayBadge}>Day {item.day}</div>

                    <div className={styles.rewardBadge}>
                      {item.day === 7
                        ? "VIP"
                        : item.type === "giftcard"
                          ? "Gift card"
                          : item.type}
                    </div>
                  </div>

                  <div className={styles.rewardIcon}>
                    {getRewardIcon(item.type, item.day)}
                  </div>

                  <h3 className={styles.rewardTitle}>
                    {item.day === 7 ? "Ultimate Reward" : "Daily Reward"}
                  </h3>

                  <p className={styles.rewardValue}>{item.value}</p>

                  <p className={styles.rewardDescription}>{item.reward}</p>

                  <div className={styles.rewardBottom}>
                    {isCompleted && (
                      <div className={styles.claimedTag}>
                        <FaCheckCircle />
                        Claimed
                      </div>
                    )}

                    {isCurrent &&
                      (canClaimNow ? (
                        <button
                          className={styles.claimButton}
                          onClick={handleClaim}
                          disabled={isClaiming}
                        >
                          {isClaiming ? "Claiming..." : "Claim Reward"}
                          <FaChevronRight />
                        </button>
                      ) : (
                        <div className={styles.lockedTag}>
                          <FaClock />
                          {countdown}
                        </div>
                      ))}

                    {isLocked && (
                      <div className={styles.lockedTag}>
                        <FaLock />
                        Locked
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
