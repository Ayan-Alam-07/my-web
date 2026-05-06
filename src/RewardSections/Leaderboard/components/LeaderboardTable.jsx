import styles from "./LeaderboardTable.module.css";
import LeaderboardRow from "./LeaderboardRow";
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
  // const isLoading = true;
  return (
    <section className={styles.tableWrap}>
      <div className={styles.topHead}>
        <div>
          <span>Rankings</span>
          <h2>Weekly leaderboard standings</h2>
        </div>

        <div className={styles.ruleBox}>
          <small>Tie-Break rule</small>
          <strong>Higher weekly coins, then higher XP</strong>
        </div>
      </div>

      <span className={`table-responsive ${styles.tableResponsive}`}>
        {isLoading ? (
          <CirLoader para={"Fetching Leaderboard participants"} />
        ) : (
          <table className={`table align-middle mb-0 ${styles.tableCustom}`}>
            <thead>
              <tr>
                <th>Rank</th>
                <th>User ID</th>
                <th>Weekly Coins</th>
                <th>XP</th>
                <th>Total Coins</th>
                <th>Status</th>
              </tr>
            </thead>

            {/* {isLoading ? (
            <CirLoader para={"Fetching Leaderboard participants"} />
          ) : ( */}
            <tbody>
              {
                // isLoading ? (
                // ) : // [...Array(8)].map((_, index) => (
                //   <tr key={index}>
                //     <td colSpan="6">
                //       <div className={styles.skeletonRow} />
                //     </td>
                //   </tr>
                // ))
                rows.length ? (
                  rows.map((user) => (
                    <LeaderboardRow
                      key={`${user.userId}-${user.rank}`}
                      user={user}
                      isCurrentUser={currentUserRank?.userId === user.userId}
                    />
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className={styles.emptyCell}>
                      No participants yet. Join this week’s leaderboard and
                      become the first ranked user.
                    </td>
                  </tr>
                )
              }
            </tbody>
            {/* )} */}
          </table>
        )}
      </span>

      <div className={styles.paginationRow}>
        <button
          type="button"
          className={styles.pageBtn}
          disabled={page <= 1}
          onClick={() => onPageChange(page - 1)}
        >
          Previous
        </button>

        <div className={styles.pageText}>
          Page <strong>{page}</strong> of <strong>{totalPages}</strong>
        </div>

        <button
          type="button"
          className={styles.pageBtn}
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
