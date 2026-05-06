import { useNavigate } from "react-router-dom";
import {
  FaTrophy,
  FaMedal,
  FaChartLine,
  FaArrowRight,
  FaBolt,
  FaCoins,
  FaCrown,
  FaRupeeSign,
} from "react-icons/fa";

import { FaIndianRupeeSign } from "react-icons/fa6";

import styles from "./LeaderboardBanner.module.css";
import RewardArrow from "../../Components/CommonComponents/RewardArrow";

const LeaderboardBanner = () => {
  const navigate = useNavigate();

  const leadBadges = [
    "Top earner gets rewarded",
    `Earn Upto`,
    "Weekly Reset",
    "Everyone earns something",
    "Previous #1 Winner: ",
  ];

  const len = leadBadges.length - 1;

  return (
    <div
      className={` ${styles.banner}`}
      onClick={() => navigate("/leaderboard")}
      aria-label="Open weekly leaderboard"
    >
      <div className={styles.grid}></div>
      <div className={styles.orbGold}></div>
      <div className={styles.orbBlue}></div>
      <div className={styles.orbPurple}></div>

      <div className="row justify-content-around flex-lg-row flex-column align-items-center">
        <div
          className={`col-10 col-md-7 col-lg-3 mb-lg-0 ${styles.iconCluster}`}
          aria-hidden="true"
        >
          <div className={`${styles.heroIconCard} ${styles.hero}`}>
            <FaTrophy className={styles.heroIcon} />
          </div>

          <div className={`${styles.floatingIcon} ${styles.medal}`}>
            <FaMedal />
          </div>

          <div className={`${styles.floatingIcon} ${styles.chart}`}>
            <FaChartLine />
          </div>

          <div className={`${styles.floatingIcon} ${styles.bolt}`}>
            <FaBolt />
          </div>

          <div className={`${styles.floatingIcon} ${styles.coins}`}>
            <FaCoins />
          </div>

          <div className={`${styles.floatingIcon} ${styles.crown}`}>
            <FaCrown />
          </div>
          <span className={styles.eyebrow}>
            Weekly VE
            <span style={{ textTransform: "lowercase", marginRight: "4.5px" }}>
              s
            </span>
            Leaderboard
          </span>
        </div>

        <div className="col-12 col-lg-7 px-1 px-md-3">
          <div className={` ${styles.content}`}>
            {/* <div className="d-none d-lg-inline-block"> */}
            <FaCoins className={styles.coinsWatermark} />
            <FaRupeeSign
              className={`${styles.coinsWatermark} ${styles.rupWatermark}`}
            />
            {/* </div> */}
            <h3>Earn the most VEs this week and Get Rewarded</h3>
            <p>
              This board ranks users by VEs earned in the current week. The top
              earner gets High rewards, and every participants will Earn.
            </p>

            <div className={styles.badges}>
              {leadBadges.map((badge, idx) => (
                <span
                  key={idx}
                  className={`${styles.leadBadges} ${idx === len - 1 ? styles.leadBdgHide : ""}`}
                >
                  {badge}{" "}
                  {idx === 1 ? (
                    <span>
                      <FaRupeeSign />
                      1000
                    </span>
                  ) : idx === len ? (
                    <span> #Uhd4527j</span>
                  ) : (
                    ""
                  )}
                </span>
              ))}
            </div>
          </div>
          <div className="d-flex ">
            <button className={styles.cta}>
              <span>View Leaderboard</span>
              <RewardArrow />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaderboardBanner;
