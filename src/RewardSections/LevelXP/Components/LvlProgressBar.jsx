import { useList } from "../../../Context/ContextStore";
import styles from "./LvlProgressBar.module.css";
import { FaBolt } from "react-icons/fa";

const LvlProgressBar = ({ status }) => {
  const { data, level, dataLoading } = useList();

  if (dataLoading || !data) return null;

  const xp = data?.xp ?? 0;
  const nextXP = data?.nextXP ?? 0;
  const progress = Math.max(0, Math.min(100, data?.progress ?? 0));
  const remaining = Math.max(nextXP - xp, 0);

  // add this color instead of white color in LvlDashboard compoentn and related compoennts
  // color: #f2f8ff

  return (
    <div className={styles.wrapper}>
      {status && (
        <>
          <div className={styles.topRow}>
            <div>
              <p className={styles.label}>Current XP</p>
              <h3>
                <FaBolt style={{ color: "#8b5cf6" }} /> {xp} XP
              </h3>
            </div>

            <div className={styles.rightInfo}>
              <span className={styles.nextPill}>XP target</span>
            </div>
          </div>

          <div className={styles.barShell}>
            <div className={styles.barFill} style={{ width: `${progress}%` }}>
              <span className={styles.glow} />
            </div>
          </div>
        </>
      )}

      {!status && (
        <div className={styles.middleSection}>
          <div className={styles.progressWrapper}>
            <div className={styles.progressInfo}>
              <span>
                <FaBolt style={{ color: "#8b5cf6" }} /> {xp} XP
              </span>
              <strong>
                <FaBolt style={{ color: "#8b5cf6" }} /> {nextXP} XP
              </strong>
            </div>

            <div className={styles.progressBar}>
              <div
                className={styles.progressFill}
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>
      )}

      {status && (
        <div className={styles.bottomRow}>
          <span>{progress.toFixed(0)}% completed</span>
          {level !== 7 ? (
            <span>
              {remaining} XP left to level up to {level + 1}
            </span>
          ) : (
            <span>You have reached maximum levels wait for new Level.</span>
          )}
        </div>
      )}
    </div>
  );
};

export default LvlProgressBar;
