import { FaBolt } from "react-icons/fa";
import { FaTrophy } from "react-icons/fa";
import { FaArrowTrendUp } from "react-icons/fa6";

import { useList } from "../../../Context/ContextStore";

import styles from "./XPProgress.module.css";

const XPProgress = () => {
  const { level, data, dataLoading } = useList();

  console.group("XP PROGRESS");

  console.log("Level:", level);
  console.log("XP Data:", data);
  console.log("Loading:", dataLoading);

  console.groupEnd();

  if (dataLoading) {
    return (
      <div className={styles.card}>
        <h3>Loading XP Data...</h3>
      </div>
    );
  }

  if (!data) {
    console.error("XP PROGRESS ERROR: XP data missing");

    return null;
  }

  const currentXP = Number(data?.xp) || 0;

  const nextXP = Number(data?.nextXP) || 0;

  const progress = Number(data?.progress) || 0;

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div>
          <h3>Level Progress</h3>

          <p>Earn XP and unlock higher rewards</p>
        </div>

        <FaBolt className={styles.headerIcon} />
      </div>

      <div className="row">
        <div className="col-lg-4">
          <div className={styles.levelCard}>
            <FaTrophy className={styles.levelIcon} />

            <h2>LVL {level}</h2>

            <span>Current Level</span>
          </div>
        </div>

        <div className="col-lg-8">
          <div className={styles.progressCard}>
            <div className={styles.progressTop}>
              <span>XP Progress</span>

              <span>
                {currentXP}
                {" / "}
                {nextXP}
              </span>
            </div>

            <div className={styles.progressBar}>
              <div
                className={styles.progressFill}
                style={{
                  width: `${Math.min(progress, 100)}%`,
                }}
              />
            </div>

            <div className={styles.progressInfo}>
              <div>
                <FaArrowTrendUp />

                <span>{progress.toFixed(0)}% Completed</span>
              </div>

              <div>Next Level Reward</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default XPProgress;
