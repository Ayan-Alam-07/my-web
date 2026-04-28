import { useNavigate } from "react-router-dom";
import {
  FaTrophy,
  FaMedal,
  FaChartLine,
  FaArrowRight,
  FaBolt,
  FaCoins,
  FaCrown,
} from "react-icons/fa";
import styles from "./LeaderboardBanner.module.css";

const LeaderboardBanner = () => {
  const navigate = useNavigate();

  return (
    <button
      type="button"
      className={`row ${styles.banner}`}
      onClick={() => navigate("/leaderboard")}
      aria-label="Open weekly leaderboard"
    >
      <div className={styles.grid}></div>
      <div className={styles.orbGold}></div>
      <div className={styles.orbBlue}></div>
      <div className={styles.orbPurple}></div>

      <div className={`col-5 ${styles.iconCluster}`} aria-hidden="true">
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
      </div>

      <div className="col-7">
        <div className={` ${styles.content}`}>
          <span className={styles.eyebrow}>Weekly coins leaderboard</span>
          <h3>Earn the most coins this week and unlock rewards</h3>
          <p>
            This board ranks users by coins earned in the current week. The top
            earner gets a bonus reward, and every participant earns recognition
            when they stay active and climb higher.
          </p>

          <div className={styles.badges}>
            <span>Top earner gets rewarded</span>
            <span>Weekly reset</span>
            <span>Everyone earns something</span>
          </div>
        </div>

        <div className={styles.cta}>
          <span>View board</span>
          <FaArrowRight />
        </div>
      </div>
    </button>
  );
};

export default LeaderboardBanner;
