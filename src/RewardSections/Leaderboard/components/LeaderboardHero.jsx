import {
  FaBolt,
  FaCoins,
  FaTrophy,
  FaCrown,
  FaShieldAlt,
} from "react-icons/fa";
import { SiThunderstore } from "react-icons/si";

import styles from "./LeaderboardHero.module.css";
import { style } from "framer-motion/client";
import { useList } from "../../../Context/ContextStore";
import { showSuccess, showWarning } from "../../../utils/Toast";

const LeaderboardHero = ({ currentUserRank, participated }) => {
  const { data } = useList();
  const rank = currentUserRank?.rank || 0;

  // console.log(currentUserRank);

  const rankStats = [
    {
      title: "Rank",
      icon: <FaTrophy />,
      class: "statRank",
      value: !participated
        ? "Join Now"
        : currentUserRank?.rank
          ? `#${rank}`
          : "--",
    },
    {
      title: "XP",
      icon: <FaBolt />,
      class: "statXP",
      value: data?.xp || currentUserRank?.xp || 0,
    },
    {
      title: "Weekly VE",
      icon: <FaCoins />,
      class: "statVEs",
      value: currentUserRank?.weeklyCoinsEarned ?? 0,
    },
  ];

  return (
    <section className={styles.heroCard}>
      <div className="row g-4 align-items-center">
        <div className="col-12 col-lg-7">
          <div className="mx-lg-3">
            <div className={styles.badgePill}>
              <FaShieldAlt />
              <span>Weekly rewards leaderboard</span>
            </div>

            <h1 className={styles.heading}>
              <span className="d-md-none">
                Earn coins, climb ranks, and unlock rewards
              </span>

              <span className="d-none d-md-block d-lg-none">
                Earn more coins, rank higher, and win premium rewards
              </span>

              <span className="d-none d-lg-block">
                Earn more this week, rank higher, and unlock premium leaderboard
                rewards
              </span>
            </h1>

            <p className={styles.subtext}>
              Ranking is based on highest weekly VEs earned. If two users have
              the same weekly VEs, the user with higher XP is shown above.
            </p>

            <div className="row justify-content-evenly justify-content-lg-start flex-wrap py-2 py-lg-0 mt-3 mt-md-4">
              <div className="col-12 col-md-6 col-lg-5">
                <div className={styles.infoChip}>
                  <FaCoins className={styles.yellowIcon} />
                  <div>
                    <span>Entry fee</span>
                    <strong>250 VEs + 70 XP</strong>
                  </div>
                  <a
                    href={!participated ? "#joinLeaderboard" : "#"}
                    onClick={() => {
                      if (participated)
                        return showSuccess(
                          "You already participated leaderboard!",
                        );
                      showWarning("participate leaderboard First!!");
                    }}
                    className={`${styles.statusLght} ${!participated ? styles.statusDotRed : styles.statusDotGreen}`}
                  ></a>
                </div>
              </div>

              <div className="col-12 col-md-6 mt-3 mt-md-0 col-lg-5">
                <div className={styles.infoChip}>
                  <SiThunderstore className={styles.blueIcon} />
                  <div>
                    <span>Weekly reset</span>
                    <strong>Sunday 11:59 PM</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 col-lg-5">
          <div className={styles.rankCard}>
            <div className={styles.rankTop}>
              <div>
                <p>Your weekly standing</p>
                <h3>Live Rank Snapshot</h3>
              </div>
              <div className={styles.rankIcon}>
                <FaCrown />
              </div>
            </div>

            <div className="row g-3 g-md-4 g-lg-3 mt-2 mt-md-3">
              {rankStats.map((stats, idx) => (
                <div
                  key={idx}
                  className={idx === rankStats.length - 1 ? "col-12" : "col-6"}
                >
                  <div className={styles.rankStat}>
                    <span className="d-inline-flex">
                      {stats.title}
                      {idx === rankStats.length - 1 && (
                        <span style={{ textTransform: "lowercase" }}>s</span>
                      )}
                    </span>
                    <strong>
                      <div
                        className={`${styles.rankStatIcon} ${styles[stats.class]}`}
                      >
                        {stats.icon}
                      </div>
                      {!participated && idx === 0 ? (
                        <a href="#joinLeaderboard" className={styles.joinNow}>
                          {stats.value}
                        </a>
                      ) : (
                        <>{stats.value}</>
                      )}
                    </strong>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeaderboardHero;
