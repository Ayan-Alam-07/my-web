import styles from "./TopBar.module.css";

import { FaBars, FaBell, FaDiamond } from "react-icons/fa6";

export default function TopBar({
  mission = {
    remaining: 2,
    boost: 0.2,
    expiresIn: "2h",
  },
  notificationCount = 0,
}) {
  return (
    <header className={styles.topBar}>
      {/* CENTER */}

      <button className={styles.mission}>
        <div className={styles.missionIcon}>
          <FaDiamond />
        </div>

        <div className={styles.text}>
          <span className={styles.title}>Mission</span>

          <small>
            {mission.remaining} Left • +{mission.boost}%
          </small>
        </div>

        <span className={styles.time}>{mission.expiresIn}</span>
      </button>

      {/* RIGHT */}

      <button className={styles.iconButton}>
        <FaBell />

        {notificationCount > 0 && (
          <span className={styles.badge}>{notificationCount}</span>
        )}
      </button>
    </header>
  );
}
