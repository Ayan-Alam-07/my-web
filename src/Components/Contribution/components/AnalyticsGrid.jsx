import { FaFire, FaWallet, FaCrown, FaGem } from "react-icons/fa6";

import styles from "./AnalyticsGrid.module.css";

export default function AnalyticsGrid({
  lifetimeDays = 128,
  balance,
  completion,
  reward,
}) {
  const getTier = () => {
    if (completion >= 100) {
      return {
        name: "Legend",
        color: "#FFD54A",
        reward: "₹10 Unlocked",
      };
    }

    if (completion >= 80) {
      return {
        name: "Diamond",
        color: "#38BDF8",
        reward: "+1000 SVEs",
      };
    }

    if (completion >= 60) {
      return {
        name: "Platinum",
        color: "#A855F7",
        reward: "+1000 SVEs",
      };
    }

    if (completion >= 40) {
      return {
        name: "Gold",
        color: "#FACC15",
        reward: "+1000 SVEs",
      };
    }

    if (completion >= 20) {
      return {
        name: "Silver",
        color: "#C0C0C0",
        reward: "+1000 SVEs",
      };
    }

    return {
      name: "Bronze",
      color: "#CD7F32",
      reward: "+1000 SVEs",
    };
  };

  const tier = getTier();

  const nextReward =
    completion >= 100 ? "Vault Completed" : `${100 - completion}% Left`;

  const cards = [
    {
      title: "Lifetime",
      value: lifetimeDays,
      subtitle: "Sync Days",
      icon: <FaFire />,
      accent: "orange",
    },

    {
      title: "Wallet",
      value: balance,
      subtitle: "Available VEs",
      icon: <FaWallet />,
      accent: "gold",
    },

    {
      title: "Vault Tier",
      value: tier.name,
      subtitle: tier.reward,
      icon: <FaCrown />,
      accent: "blue",
      color: tier.color,
    },

    {
      title: "Next Reward",
      value: nextReward,
      subtitle: reward,
      icon: <FaGem />,
      accent: "purple",
    },
  ];

  return (
    <section className={styles.analyticsCard}>
      <div className={styles.cardGlow}></div>

      <div className={styles.cardGlow2}></div>

      <div className={styles.cardHeader}>
        <div>
          <span className={styles.liveBadge}>LIVE INSIGHTS</span>

          <h3>Vault Analytics</h3>

          <p>Real-time reward statistics and vault status.</p>
        </div>

        <div className={styles.analyticsBadge}>4 Metrics</div>
      </div>

      <div className={styles.analyticsGrid}>
        {cards.map((card) => (
          <div
            key={card.title}
            className={`${styles.analyticsItem} ${styles[card.accent]}`}
          >
            <div className={styles.iconWrapper}>
              <div className={styles.analyticsIcon}>{card.icon}</div>
            </div>

            <span className={styles.cardTitle}>{card.title}</span>

            <div className={styles.aligner}>
              <h2
                style={{
                  color: card.color || "#fff",
                }}
              >
                {card.value}
              </h2>

              <p>{card.subtitle}</p>
            </div>

            <div className={styles.cardShine}></div>
          </div>
        ))}
      </div>
    </section>
  );
}
