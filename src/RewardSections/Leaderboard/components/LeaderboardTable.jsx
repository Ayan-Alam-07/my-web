import { motion } from "framer-motion";
import { FaCoins, FaBolt, FaCheckCircle } from "react-icons/fa";
import { PiCoinsFill } from "react-icons/pi";
import styles from "./LeaderboardTable.module.css";
import { useList } from "../../../Context/ContextStore";
import CirLoader from "../../../Components/CommonComponents/CirLoader";

const LeaderboardTable = ({
  rows,
  page,
  totalPages,
  onPageChange,
  currentUserRank,
}) => {
  const { isLoading } = useList();

  return (
    <section className={styles.wrapper}>
      <div className={styles.header}>
        <div>
          <span>Leaderboard Rankings</span>
          <h2>Weekly Reward Standings</h2>
        </div>

        <div className={styles.ruleBox}>
          <small>Tie Break Priority</small>
          <strong>Weekly Coins → XP</strong>
        </div>
      </div>

      <div className={styles.tableContainer}>
        <div className={styles.tableHead}>
          <div>Rank</div>
          <div>User</div>
          <div>Weekly Coins</div>
          <div>XP</div>
          <div>Total Coins</div>
          <div>Status</div>
        </div>

        {isLoading ? (
          <CirLoader para={"Loading premium rankings"} />
        ) : rows.length ? (
          rows.map((user, index) => {
            const isCurrent = currentUserRank?.userId === user.userId;

            return (
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.04 }}
                key={user.userId}
                className={`${styles.row} ${isCurrent ? styles.activeRow : ""}`}
              >
                <span className={styles.rank}>#{user.rank}</span>

                <div className={styles.userInfo}>
                  <img
                    src={`https://api.dicebear.com/7.x/initials/svg?seed=${user.userId}`}
                    alt="VELoop rewards user image"
                  />

                  <div>
                    <h4>{user.userId}</h4>
                    <span>Premium competitor</span>
                  </div>
                </div>

                <div className={styles.coinCell}>
                  <FaCoins />
                  {user.weeklyCoinsEarned?.toLocaleString()}
                </div>

                <div className={styles.xpCell}>
                  <FaBolt />
                  {user.xp?.toLocaleString()}
                </div>

                <div className={styles.xpCell}>
                  <PiCoinsFill style={{ color: "#ffd700" }} />
                  {user.coins?.toLocaleString()}
                </div>

                <div>
                  <span
                    className={
                      currentUserRank.participated
                        ? styles.activeStatus
                        : styles.offlineStatus
                    }
                  >
                    <FaCheckCircle />
                    Active
                  </span>
                </div>
              </motion.div>
            );
          })
        ) : (
          <div className={styles.empty}>
            No leaderboard participants available.
          </div>
        )}
      </div>

      <div className={styles.pagination}>
        <button disabled={page <= 1} onClick={() => onPageChange(page - 1)}>
          Previous
        </button>

        <div>
          Page <strong>{page}</strong> of <strong>{totalPages}</strong>
        </div>

        <button
          disabled={page >= totalPages}
          onClick={() => onPageChange(page + 1)}
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default LeaderboardTable;
