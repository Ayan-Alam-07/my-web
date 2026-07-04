import {
  FaGift,
  FaClock,
  FaLock,
  FaCircleCheck,
  FaShieldHalved,
  FaArrowTrendUp,
} from "react-icons/fa6";
import styles from "./HeroCard.module.css";

export default function HeroCard({
  contributedDays,
  totalDays,
  remainingDays,
  hasContributedToday,
  rewardClaimed,
  onContribute,
}) {
  const percentage = Math.round((contributedDays / totalDays) * 100);

  const metaStats = [
    {
      title: "Completed",
      value: `${contributedDays} / ${totalDays}`,
      icon: FaCircleCheck,
    },
    { title: "Days Left", value: remainingDays, icon: FaClock },
    { title: "Growth", value: `${percentage}%`, icon: FaArrowTrendUp },
    { title: "Locked", value: "₹10", icon: FaLock },
  ];

  return (
    <section className={styles.heroCard}>
      <div className={styles.glowOne}></div>
      <div className={styles.glowTwo}></div>
      <div className={styles.noise}></div>

      <div className={styles.heroHeader}>
        <div className={styles.left}>
          <div className={styles.badges}>
            <span className={styles.vaultBadge}>
              <FaShieldHalved />
              Secure Vault
            </span>

            <span className={styles.liveBadge}>
              <span className={styles.liveDot}></span>
              Live Rewards
            </span>
          </div>

          <p className={styles.heroLabel}>DAILY SYNC PROGRAM</p>

          <h1 className={styles.heroReward}>₹ 10</h1>

          <p className={styles.heroSubtitle}>
            Complete all 30 sync days and instantly unlock your guaranteed
            reward.
          </p>
        </div>

        <div className={styles.rewardWrapper}>
          <div className={styles.rewardGlow}></div>

          <div className={styles.rewardIcon}>
            <FaGift />
          </div>
        </div>
      </div>

      <div className={styles.progressSection}>
        <div className={styles.progressTop}>
          <span>Vault Progress</span>

          <strong>{percentage}%</strong>
        </div>

        <div className={styles.progressBar}>
          <div
            className={styles.progressFill}
            style={{
              width: `${percentage}%`,
            }}
          >
            <div className={styles.progressShine}></div>
          </div>
        </div>
      </div>

      <div className={styles.statsGrid}>
        {metaStats.map((stat) => (
          <div key={stat.title} className={styles.statCard}>
            <div className={styles.statIcon}>
              <stat.icon />
            </div>

            <div className="d-flex flex-column align-items-center align-items-md-start">
              <h3>{stat.value}</h3>
              <p className="mb-0">{stat.title}</p>
            </div>
          </div>
        ))}
      </div>

      {rewardClaimed ? (
        <button className={styles.claimedButton} disabled>
          Reward Claimed
        </button>
      ) : hasContributedToday ? (
        <button className={styles.completedButton} disabled>
          Sync Completed
        </button>
      ) : (
        <button className={styles.contributeButton} onClick={onContribute}>
          Sync Today
        </button>
      )}
    </section>
  );
}
