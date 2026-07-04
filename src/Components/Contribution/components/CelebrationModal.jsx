import { FaGift, FaTrophy } from "react-icons/fa6";

import styles from "./CelebrationModal.module.css";

export default function CelebrationModal({ open, reward, onClaim }) {
  if (!open) return null;

  return (
    <div className={styles.celebrationOverlay}>
      <div className={styles.celebrationModal}>
        <div className={styles.trophyContainer}>
          <FaTrophy />
        </div>

        <span className={styles.rewardUnlocked}>REWARD UNLOCKED</span>

        <h2>Congratulations</h2>

        <p>You completed all 30 days successfully.</p>

        <div className={styles.rewardAmount}>{reward}</div>

        <button className={styles.claimRewardBtn} onClick={onClaim}>
          <FaGift />
          Claim Reward
        </button>
      </div>
    </div>
  );
}
