import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ContributionBanner.module.css";
import RewardArrow from "../CommonComponents/RewardArrow";

export default function ContributionBanner() {
  const navigate = useNavigate();

  const completedDays = 18;
  const totalDays = 30;
  const percentage = (completedDays / totalDays) * 100;

  return (
    <div
      className={styles.banner}
      onClick={() => navigate("/contribution-vault")}
    >
      <div className={styles.bgGlow}></div>

      <div className={styles.left}>
        <span className={styles.badge}>MONTHLY REWARD PROGRAM</span>

        <h2 className={styles.heading}>Mega Reward Vault</h2>

        <p className={styles.description}>
          Contribute daily & collect 30 Sync and unlock your guaranteed monthly
          reward.
        </p>

        <div className={styles.progressCard}>
          <div className={styles.progressInfo}>
            <span>
              {completedDays} / 30{" "}
              <span style={{ color: "#74daff", fontWeight: "700" }}>Sync</span>
            </span>
            <span>{Math.round(percentage)}%</span>
          </div>

          <div className={styles.progressTrack}>
            <div
              className={styles.progressFill}
              style={{ width: `${percentage}%` }}
            />
          </div>

          <span className={styles.remaining}>
            Only {30 - completedDays} Sync remaining
          </span>
        </div>

        <button
          className={styles.cta}
          onClick={(e) => {
            e.stopPropagation();
            navigate("/contribution-vault");
          }}
        >
          <span className="d-inline-block me-2">Open Vault</span>{" "}
          <RewardArrow marginB={3} />
        </button>
      </div>

      <div className={styles.rewardCard}>
        <div className={styles.rewardBadge}>GUARANTEED REWARD</div>

        <h3 className={styles.rewardAmount}>
          ₹<span className="d-inline-block ms-1">10</span>
        </h3>

        <p className={styles.rewardText}>Available Claim Now</p>

        <div className={styles.streak}>🔥 18 Day Sync</div>
      </div>
    </div>
  );
}
