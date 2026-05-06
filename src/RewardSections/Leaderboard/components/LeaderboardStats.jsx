import { FaCoins, FaTrophy, FaUsers } from "react-icons/fa";
import styles from "./LeaderboardStats.module.css";
import inStyle from "./LeaderboardHero.module.css";
import RewardArrow from "../../../Components/CommonComponents/RewardArrow";
import { BiCoinStack } from "react-icons/bi";

const LeaderboardStats = ({
  totalParticipants,
  totalWeeklyCoins,
  currentUserRank,
  participated,
}) => {
  const stats = [
    {
      label: "VEs on Board",
      value: totalWeeklyCoins,
      icon: <FaCoins />,
      tone: styles.gold,
    },
    {
      label: "Participants",
      value: totalParticipants,
      icon: <FaUsers />,
      tone: styles.blue,
    },
    {
      label: `Weekly VEs`,
      value: currentUserRank?.weeklyCoinsEarned
        ? currentUserRank?.weeklyCoinsEarned
        : "--",
      icon: <BiCoinStack />,
      tone: styles.yellow,
    },
    {
      label: "Your rank",
      value: !participated
        ? "Join"
        : currentUserRank?.rank
          ? `#${currentUserRank?.rank}`
          : "--",
      icon: <FaTrophy />,
      tone: styles.green,
    },
  ];

  return (
    <section className="row g-3">
      {stats.map((stat, idx) => (
        <div key={stat.label} className="col-12 col-md-4 col-xl-3">
          <div className={styles.statCard}>
            <div className={styles.topRow}>
              <span>{stat.label}</span>
              <div className={`${styles.iconBox} ${stat.tone}`}>
                {stat.icon}
              </div>
            </div>
            <h3>
              {!participated && idx === stats.length - 1 ? (
                <a
                  href={"#joinLeaderboard"}
                  className={
                    !participated && idx === stats.length - 1 && inStyle.joinNow
                  }
                >
                  {stat.value}
                  <span className={`${styles.rightArr}`}>
                    <RewardArrow />
                  </span>
                </a>
              ) : (
                stat.value
              )}
            </h3>
          </div>
        </div>
      ))}
    </section>
  );
};

export default LeaderboardStats;
