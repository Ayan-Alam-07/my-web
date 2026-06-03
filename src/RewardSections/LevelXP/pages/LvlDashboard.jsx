import styles from "./LvlDashboard.module.css";
import { useList } from "../../../Context/ContextStore";
import CommonNavArr from "../../../Components/CommonComponents/CommonNavArr";
import CirLoader from "../../../Components/CommonComponents/CirLoader";

import LvlHeroCard from "../Components/LvlHeroCard";
import LvlProgressBar from "../Components/LvlProgressBar";
import LvlBadge from "../Components/LvlBadge";
import LvlStatsGrid from "../Components/LvlStatsGrid";
// import LvlLeaderboard from "../../Leaderboard/LvlLeaderboard";
import ActionButtons from "../Components/ActionButtons";
import LeaderboardBanner from "../../Leaderboard/LeaderboardBanner";
import { useEffect } from "react";
import SecFooter from "../../../Components/CommonComponents/SecFooter";

const LvlDashboard = () => {
  const { data, dataLoading, fetchData } = useList();
  const token = localStorage.getItem("token");

  if (dataLoading || !data) {
    return (
      <div className="container-fluid px-0">
        <CommonNavArr id={19} navigation={"/Home"} />
        <CirLoader id={4} para={"Fetching!! Your Levels..."} />
      </div>
    );
  }

  return (
    <div
      className={`${styles.backGround} container-fluid px-0`}
      style={{ color: "red" }}
    >
      <CommonNavArr id={19} navigation={"/Home"} />

      <section className={`container mt-4 ${styles.container} px-3`}>
        <div className={styles.topGrid}>
          <LvlHeroCard data={data} />
          <LvlBadge badge={data.badge} />
          {console.log(data.badge)}
        </div>

        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <div>
              <p className={styles.eyebrow}>Level progress</p>
              <h3>Keep going, you’re close to the next reward</h3>
            </div>
            <span className={styles.softPill}>Live XP</span>
          </div>
          <LvlProgressBar status={true} />
        </div>

        <div className={styles.mainGrid}>
          {/* <div className={styles.leftColumn}> */}
          <LvlStatsGrid data={data} />

          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <div>
                <p className={styles.eyebrow}>Boost your earnings</p>
                <h3>Complete more actions to unlock faster growth</h3>
              </div>
            </div>

            <ActionButtons token={token} refresh={fetchData} />
            {/* </div> */}
          </div>

          {/* <div className={styles.rightColumn}> */}
          {/* </div> */}
        </div>
        <div className="mt-4">
          {/* <LvlLeaderboard users={leaderboard} /> */}
          <LeaderboardBanner />
        </div>
      </section>
      <SecFooter
        mt={25}
        mb={10}
        name={"Level System"}
        link={"/help-center/earning/level-system"}
      />
    </div>
  );
};

export default LvlDashboard;
