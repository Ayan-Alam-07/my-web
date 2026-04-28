// import { useEffect, useState } from "react";
// import styles from "./LvlDashboard.module.css";

// import LvlProgressBar from "../Components/LvlProgressBar";
// import LvlBadge from "../Components/LvlBadge";
// import LvlLeaderboard from "../Components/LvlLeaderboard";
// import ActionButtons from "../Components/ActionButtons";
// import CommonNavArr from "../../../Components/CommonComponents/CommonNavArr";
// import CirLoader from "../../../Components/CommonComponents/CirLoader";
// import { useList } from "../../../Context/ContextStore";

// const LvlDashboard = () => {
//   const { data, leaderboard, dataLoading, fetchData } = useList();

//   const token = localStorage.getItem("token");

//   return (
//     <div className="container-fluid px-0">
//       <CommonNavArr id={19} navigation={"/Home"} />

//       {dataLoading ? (
//         <CirLoader id={4} para={"Fetching!! Your Levels..."} />
//       ) : (
//         <div className={`${styles.container} px-3`}>
//           <div className={styles.header}>
//             <h1>Level {data.level}</h1>
//             <div className={styles.coins}>💰 {data.coins}</div>
//           </div>

//           <LvlBadge badge={data.badge} />

//           <div className={styles.card}>
//             <LvlProgressBar />
//           </div>

//           <ActionButtons token={token} refresh={fetchData} />

//           <LvlLeaderboard users={leaderboard} />
//         </div>
//       )}
//     </div>
//   );
// };

// export default LvlDashboard;

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

const LvlDashboard = () => {
  const { data, leaderboard, dataLoading, fetchData } = useList();
  const token = localStorage.getItem("token");

  // console.log(leaderboard);

  if (dataLoading || !data) {
    return (
      <div className="container-fluid px-0">
        <CommonNavArr id={19} navigation={"/Home"} />
        <CirLoader id={4} para={"Fetching!! Your Levels..."} />
      </div>
    );
  }

  return (
    <div className={`${styles.backGround} container-fluid px-0`}>
      <CommonNavArr id={19} navigation={"/Home"} />

      <section className={`container mt-5 ${styles.container} px-3`}>
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
    </div>
  );
};

export default LvlDashboard;
