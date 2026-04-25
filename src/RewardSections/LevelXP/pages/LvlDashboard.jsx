import { useEffect, useState } from "react";
import styles from "./LvlDashboard.module.css";

import { getLevel, getLeaderboard } from "../../../services/levelService";
import ProgressBar from "../Components/ProgressBar";
import LvlBadge from "../Components/LvlBadge";
import LvlLeaderboard from "../Components/LvlLeaderboard";
import ActionButtons from "../Components/ActionButtons";
import CommonNavArr from "../../../Components/CommonComponents/CommonNavArr";
import CirLoader from "../../../Components/CommonComponents/CirLoader";

const LvlDashboard = () => {
  const [data, setData] = useState(null);
  const [leaderboard, setLeaderboard] = useState([]);

  const token = localStorage.getItem("token");
  console.log("TOKEN FROM STORAGE:", token);

  const fetchData = async () => {
    const res = await getLevel(token);
    const lb = await getLeaderboard();

    setData(res.data);
    setLeaderboard(lb.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!data) return <CirLoader id={4} para={"Fetching! your Level"} />;

  return (
    <div className="container-fluid px-0">
      <CommonNavArr id={19} navigation={"/Home"} />
      <div className={`${styles.container} px-3`}>
        <div className={styles.header}>
          <h1>Level {data.level}</h1>
          <div className={styles.coins}>💰 {data.coins}</div>
        </div>

        <LvlBadge badge={data.badge} />

        <div className={styles.card}>
          <p>
            {data.xp} / {data.nextXP} XP
          </p>
          <ProgressBar progress={data.progress} />
        </div>

        <ActionButtons token={token} refresh={fetchData} />

        <LvlLeaderboard users={leaderboard} />
      </div>
    </div>
  );
};

export default LvlDashboard;
