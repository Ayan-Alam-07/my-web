import { useEffect, useState } from "react";
import styles from "./LvlDashboard.module.css";

import { getLevel, getLeaderboard } from "../../../services/levelService";
import ProgressBar from "../components/ProgressBar";
import LvlBadge from "../components/LvlBadge";
import LvlLeaderboard from "../components/LvlLeaderboard";
import ActionButtons from "../components/ActionButtons";

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

  if (!data) return <div className={styles.loading}>Loading...</div>;

  return (
    <div className={styles.container}>
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
  );
};

export default LvlDashboard;
