import { useEffect } from "react";
import CommonNavArr from "../../Components/CommonComponents/CommonNavArr";
import { useList } from "../../Context/ContextStore";
import styles from "./Leaderboard.module.css";
import { useLocation } from "react-router-dom";
import CirLoader from "../../Components/CommonComponents/CirLoader";

const Leaderboard = () => {
  //{ users = [] }

  const { leaderboard, fetchData, isLoading } = useList();
  const users = leaderboard;

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/leaderboard") {
      console.log("leaderboard data fetching");
      fetchData();
      console.log("leaderboard fetched");
    }
  }, [location.pathname]);

  return (
    <div className="container-fluid px-0">
      <CommonNavArr id={20} navigation={"/Home"} />
      <div className={`${styles.container} container px-3 mt-5`}>
        <div className={styles.header}>
          <div>
            <p className={styles.eyebrow}>Top performers</p>
            <h2>Leaderboard</h2>
          </div>
          <span className={styles.badge}>{users.length} ranked</span>
        </div>

        <p className={styles.subtext}>
          Stay active, earn more XP, and increase your visibility among top
          reward earners.
        </p>

        {!isLoading ? (
          <div className={styles.list}>
            {users.map((u, i) => (
              <div key={i} className={styles.row}>
                <div className={styles.left}>
                  <div className={styles.rank}>{i + 1}</div>
                  <div>
                    <h4>{u.userId}</h4>
                    <p>Trusted active earner</p>
                  </div>
                </div>

                <div className={styles.points}>
                  <strong>{u.xp}</strong>
                  <span>XP</span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <CirLoader
            title={"leaderboard"}
            para={"Please wait a moment we are fetching you data"}
          />
        )}
      </div>
    </div>
  );
};

export default Leaderboard;
