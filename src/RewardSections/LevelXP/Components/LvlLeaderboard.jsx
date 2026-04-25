import styles from "./LvlLeaderboard.module.css";

const LvlLeaderboard = ({ users }) => {
  return (
    <div className={styles.container}>
      <h2>🏆 Leaderboard</h2>

      {users.map((u, i) => (
        <div key={i} className={styles.row}>
          <span>{u.name}</span>
          <span>{u.xp} XP</span>
        </div>
      ))}
    </div>
  );
};

export default LvlLeaderboard;
