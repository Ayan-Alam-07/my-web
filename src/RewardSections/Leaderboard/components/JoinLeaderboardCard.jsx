import { FaArrowRight, FaBolt, FaCoins, FaShieldAlt } from "react-icons/fa";
import styles from "./JoinLeaderboardCard.module.css";
import RewardArrow from "../../../Components/CommonComponents/RewardArrow";

const JoinLeaderboardCard = ({ joining, onJoin }) => {
  return (
    <section id="joinLeaderboard" className={styles.joinCard}>
      <div className={styles.headRow}>
        <span>Participate now</span>
        <div className={styles.iconBox}>
          <FaShieldAlt />
        </div>
      </div>

      <h3>Join this week’s premium rewards race</h3>
      <p>
        <span className="d-none d-lg-inline-block">
          Enter once for the week, compete by earning VEs, and use XP as the
          Tie-Breaker when weekly VEs match.
        </span>

        <span className="d-block">
          We charge a small joining fee to ensure a fair and genuine
          competition. This helps prevent bots and fake entries, keeping the
          leaderboard authentic and competitive. By maintaining real
          participation, we make sure that rewards go to true winners who earn
          their place through honest effort.
        </span>
      </p>

      <div className="d-flex flex-column gap-3 mt-4">
        <div className={styles.feeRow}>
          <span>
            <FaCoins style={{ color: "#ffdd00" }} /> Participation fee
          </span>
          <strong>250 VEs</strong>
        </div>
        <div className={styles.feeRow}>
          <span>
            <FaBolt style={{ color: "#60a5fa" }} /> XP required
          </span>
          <strong>70 XP</strong>
        </div>
      </div>

      <button
        type="button"
        className={styles.joinBtn}
        onClick={onJoin}
        disabled={joining}
      >
        {joining ? "Joining..." : "Join Leaderboard"}
        <RewardArrow />
      </button>
    </section>
  );
};

export default JoinLeaderboardCard;
