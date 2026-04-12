import { useEffect, useState } from "react";
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
} from "react-icons/fa";
import {
  getDailyCheckinRewards,
  claimDailyCheckinReward,
} from "../../services/dailyCheckinService";
import { useList } from "../../Context/ContextStore";
import CommonNavArr from "../../Components/CommonComponents/CommonNavArr";

export default function DailyCheckIn() {
  const [rewards, setRewards] = useState([]);
  const [currentDay, setCurrentDay] = useState(1);
  const { isLoading, setIsLoading } = useList();

  useEffect(() => {
    fetchRewards();
  }, []);

  const fetchRewards = async () => {
    setIsLoading(true);

    try {
      const data = await getDailyCheckinRewards();

      setRewards(data.rewards || []);
      setCurrentDay(data.currentDay || data.streakDay || 1);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClaim = async () => {
    try {
      const data = await claimDailyCheckinReward();

      setCurrentDay(data.streakDay || currentDay + 1);

      fetchRewards();
    } catch (error) {
      console.log(error.response?.data?.message);
    }
  };

  const getRewardIcon = (type, day) => {
    if (type === "coin") return <FaCoins />;
    if (type === "gift") return <FaGift />;
    if (type === "gem") return <FaGem />;
    if (type === "bonus") return <FaBolt />;
    if (day === 7) return <FaCrown />;

    return <FaStar />;
  };

  const getRewardBadge = (type, day) => {
    if (day === 7) return "VIP";
    if (type === "coin") return "Coins";
    if (type === "gift") return "Mystery";
    if (type === "gem") return "Rare";
    if (type === "bonus") return "Bonus";

    return "Reward";
  };

  const getRewardTitle = (item) => {
    if (item.day === 7) return "Ultimate Reward";
    if (item.type === "coin") return "Coin Reward";
    if (item.type === "gift") return "Gift Reward";
    if (item.type === "gem") return "Gem Reward";
    if (item.type === "bonus") return "Bonus Reward";

    return "Daily Reward";
  };

  const nextReward = rewards.find((item) => item.day === currentDay);

  if (isLoading) {
    return (
      <div className={styles.loadingWrapper}>
        <div className={styles.loader}></div>
        <p>Loading your streak rewards...</p>
      </div>
    );
  }

  return (
    <div className="container-fluid px-0 ">
      <CommonNavArr id={17} navigation={"/Home"} />

      <div className={styles.pageWrapper}>
        <div className="container mt-4">
          <div className={styles.heroSection}>
            <div className={styles.heroLeft}>
              <div className={styles.topBadge}>
                <FaFire />
                <span>{currentDay} Day Active Streak</span>
              </div>

              <h1 className={styles.mainTitle}>Daily Check-In Rewards</h1>

              <p className={styles.subtitle}>
                Keep your streak alive and unlock premium rewards every day. The
                longer your streak, the bigger your rewards become.
              </p>

              <div className={styles.heroStats}>
                <div className={styles.statCard}>
                  <span>Total Rewards</span>
                  <h3>{rewards.length}</h3>
                </div>

                <div className={styles.statCard}>
                  <span>Current Streak</span>
                  <h3>{currentDay} Days</h3>
                </div>

                <div className={styles.statCard}>
                  <span>Next Reward</span>
                  <h3>{nextReward?.value || "Locked"}</h3>
                </div>
              </div>
            </div>

            <div className={styles.heroRight}>
              <div className={styles.bigRewardCard}>
                <div className={styles.bigRewardGlow}></div>

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
              </div>
            </div>
          </div>

          <div className={styles.progressSection}>
            <div className={styles.progressTop}>
              <span>Streak Progress</span>
              <span>
                {currentDay}/{rewards.length || 7} Days
              </span>
            </div>

            <div className={styles.progressBar}>
              <div
                className={styles.progressFill}
                style={{
                  width: `${
                    rewards.length ? (currentDay / rewards.length) * 100 : 0
                  }%`,
                }}
              ></div>
            </div>
          </div>

          <div className={styles.rewardGrid}>
            {rewards.map((item) => {
              const isCompleted = item.day < currentDay;
              const isCurrent = item.day === currentDay;
              const isLocked = item.day > currentDay;

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
                      {getRewardBadge(item.type, item.day)}
                    </div>
                  </div>

                  <div className={styles.rewardIcon}>
                    {getRewardIcon(item.type, item.day)}
                  </div>

                  <h3 className={styles.rewardTitle}>{getRewardTitle(item)}</h3>

                  <p className={styles.rewardValue}>{item.value}</p>

                  <p className={styles.rewardDescription}>{item.reward}</p>

                  <div className={styles.rewardBottom}>
                    {isCompleted && (
                      <div className={styles.claimedTag}>
                        <FaCheckCircle />
                        Claimed
                      </div>
                    )}

                    {isCurrent && (
                      <button
                        className={styles.claimButton}
                        onClick={handleClaim}
                      >
                        Claim Reward
                        <FaChevronRight />
                      </button>
                    )}

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
