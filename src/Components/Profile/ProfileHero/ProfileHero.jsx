import { useMemo } from "react";
import { FaCopy } from "react-icons/fa";
import { FaShieldAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import { useList } from "../../../Context/ContextStore";
import { showSuccess } from "../../../utils/Toast";

import styles from "./ProfileHero.module.css";

const ProfileHero = () => {
  const navigate = useNavigate();

  const { user, level, data } = useList();

  console.group("PROFILE HERO");

  console.log("User Object:", user);
  console.log("Level:", level);
  console.log("XP Data:", data);

  console.groupEnd();

  if (!user) {
    console.error("PROFILE HERO ERROR: User object missing");

    return null;
  }

  const extractedName = user?.email ? user.email.split("@")[0] : "VELOOP User";

  const avatarLetter = user?.email ? user.email.charAt(0).toUpperCase() : "V";

  const xpProgress = useMemo(() => {
    const progress = Number(data?.progress) || 0;

    console.log("XP Progress Calculated:", progress);

    return Math.min(progress, 100);
  }, [data]);

  const copyUserId = () => {
    console.log("Copying User ID:", user?.userId);

    navigator.clipboard.writeText(user?.userId || "");

    showSuccess("User ID Copied");
  };

  return (
    <div className={styles.heroWrapper}>
      <div className={styles.heroCard}>
        {/* Left */}

        <div className={styles.leftSection}>
          <div
            className={styles.avatarContainer}
            onClick={() => navigate("/Lvl-Dashboard")}
          >
            {user?.photo ? (
              <img src={user.photo} alt="profile" className={styles.avatar} />
            ) : (
              <div className={styles.avatarFallback}>{avatarLetter}</div>
            )}

            <div className={styles.levelBadge}>LVL {level}</div>
          </div>

          <div className={styles.userInfo}>
            <h2 className={styles.username}>{extractedName}</h2>

            <p className={styles.email}>{user?.email}</p>

            <div className={styles.userIdRow}>
              <span>ID: {user?.userId || "Loading..."}</span>

              <FaCopy className={styles.copyIcon} onClick={copyUserId} />
            </div>
          </div>
        </div>

        {/* Right */}

        <div className={styles.rightSection}>
          <div className={styles.levelCard}>
            <FaShieldAlt className={styles.levelIcon} />

            <div>
              <h4>Current Level</h4>

              <span>Level {level}</span>
            </div>
          </div>

          <div className={styles.xpSection}>
            <div className={styles.xpTop}>
              <span>XP Progress</span>

              <span>
                {data?.xp || 0}
                {" / "}
                {data?.nextXP || 0}
              </span>
            </div>

            <div className={styles.progressBar}>
              <div
                className={styles.progressFill}
                style={{
                  width: `${xpProgress}%`,
                }}
              />
            </div>

            <p className={styles.progressText}>
              {xpProgress.toFixed(0)}% completed
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHero;
