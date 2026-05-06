import { FaCrown } from "react-icons/fa";
import styles from "./LeaderboardRow.module.css";

const getRankClass = (rank) => {
  if (rank === 1) return styles.rankGold;
  if (rank === 2) return styles.rankSilver;
  if (rank === 3) return styles.rankBronze;
  return styles.rankDefault;
};

const LeaderboardRow = ({ user, isCurrentUser }) => {
  return (
    <tr className={isCurrentUser ? styles.currentUserRow : ""}>
      <td>
        <div className={styles.rankWrap}>
          <strong className={getRankClass(user.rank)}>#{user.rank}</strong>
          {user.rank <= 3 && <FaCrown className={getRankClass(user.rank)} />}
        </div>
      </td>
      <td className={styles.userId}>{user.userId}</td>
      <td className={styles.weeklyCoins}>{user.weeklyCoinsEarned}</td>
      <td className={styles.xp}>{user.xp}</td>
      <td className={styles.coins}>{user.coins}</td>
      <td>
        {isCurrentUser ? (
          <span className={styles.youBadge}>You</span>
        ) : (
          <span className={styles.activeBadge}>Active</span>
        )}
      </td>
    </tr>
  );
};

export default LeaderboardRow;
