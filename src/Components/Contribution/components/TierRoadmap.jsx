import { FaCircleCheck, FaLock } from "react-icons/fa6";
import styles from "./TierRoadmap.module.css";

export default function TierRoadmap({ completion, tiers }) {
  return (
    <section className={styles.roadmapCard}>
      <div className={styles.cardGlow}></div>

      <div className={styles.cardHeader}>
        <div>
          <span className={styles.headerBadge}>VAULT LEVELS</span>

          <h2>Tier Roadmap</h2>

          <p>
            Complete your daily contribution streak to unlock premium vault
            rewards.
          </p>
        </div>

        <div className={styles.currentProgress}>{completion}%</div>
      </div>

      <div className={styles.timeline}>
        {tiers.map((tier, index) => {
          const unlocked = completion >= tier.max;

          const active = completion >= tier.min && completion < tier.max + 1;

          return (
            <div key={tier.name} className={styles.timelineItem}>
              <div
                className={`
${styles.timelineNode}
${styles[tier.color]}
${unlocked ? styles.unlocked : ""}
${active ? styles.active : ""}
`}
              >
                {unlocked ? <FaCircleCheck /> : active ? tier.icon : <FaLock />}
              </div>

              {index < tiers.length - 1 && (
                <div
                  className={`
${styles.connector}
${completion >= tiers[index + 1].min ? styles.connectorActive : ""}
`}
                ></div>
              )}

              <div className={styles.tierCard}>
                <div className={styles.tierTop}>
                  <h3>{tier.name}</h3>

                  <span>
                    {tiers.length - 1 === index
                      ? "100%"
                      : `${tier.min}% - ${tier.max}%`}
                  </span>
                </div>

                <p>{tier.reward}</p>

                <div className={styles.status}>
                  {unlocked ? "Unlocked" : active ? "Current" : "Locked"}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
