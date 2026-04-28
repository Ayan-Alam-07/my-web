import styles from "./LvlHeroCard.module.css";

const LvlHeroCard = ({ data }) => {
  const remaining = Math.max((data?.nextXP ?? 0) - (data?.xp ?? 0), 0);

  return (
    <div className={styles.heroCard}>
      <div className={styles.left}>
        <span className={styles.kicker}>Rewards level</span>
        <h1>Level {data?.level ?? 0}</h1>
        <p>
          You’re building momentum. Earn more XP to unlock stronger rewards,
          better rank visibility, and premium badge progression.
        </p>

        <div className={styles.metaRow}>
          <div className={styles.metaBox}>
            <span>Current badge</span>
            <strong>{data?.badge || "Starter"}</strong>
          </div>
          <div className={styles.metaBox}>
            <span>XP left to next level</span>
            <strong>{remaining} XP</strong>
          </div>
        </div>
      </div>

      <div className={styles.coinPanel}>
        <span className={styles.coinLabel}>Available coins</span>
        <div className={styles.coinValueWrap}>
          <span className={styles.coinIcon}>✦</span>
          <h2>{data?.coins ?? 0}</h2>
        </div>
        <p className={styles.coinHint}>
          Use your balance to redeem rewards, climb faster, and stay active.
        </p>
      </div>
    </div>
  );
};

export default LvlHeroCard;
