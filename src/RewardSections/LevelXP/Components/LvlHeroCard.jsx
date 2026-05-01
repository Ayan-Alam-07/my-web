import styles from "./LvlHeroCard.module.css";
import { PiTreasureChestFill } from "react-icons/pi";
import { FaCoins } from "react-icons/fa";

const LvlHeroCard = ({ data }) => {
  const remaining = Math.max((data?.nextXP ?? 0) - (data?.xp ?? 0), 0);

  const metaLvlData = [
    { title: "Current badge", reward: data?.badge || "Starter" },
    { title: "XP left to next level", reward: `${remaining} XP` },
    { title: "Next Level", reward: data.level },
  ];

  const metaRewards = [
    {
      title: "Available VEs",
      value: data?.coins,
      icon: <FaCoins />,
      desc: "Use your VEs to redeem rewards, & stay active.",
    },
    {
      title: "Next Reward",
      value: `${data?.lvlReward}`,
      icon: <PiTreasureChestFill />,
      desc: "Use your VEs to redeem rewards, & stay active.",
    },
  ];

  const rewardlen = metaRewards.length - 1;

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
          {metaLvlData.map((meta, idx) => (
            <div
              key={idx}
              className={`${styles.metaBox} ${idx === metaLvlData.length - 1 ? styles.nextLevel : ""}`}
              style={{ width: idx === metaLvlData.length - 1 ? "96%" : "" }}
            >
              <span>{meta.title}</span>
              <strong>{meta.reward}</strong>
            </div>
          ))}
        </div>
      </div>

      <div style={{ display: "grid", gap: "20px" }}>
        {metaRewards.map((reward, idx) => (
          <div
            key={idx}
            className={`${styles.coinPanel} ${idx === rewardlen ? styles.nxtReward : ""}`}
          >
            <span
              className={styles.coinLabel}
              style={{ color: idx === rewardlen ? "#ff9e8a" : "#fde68a" }}
            >
              {reward.title}
            </span>
            <div className={styles.coinValueWrap}>
              <span
                className={styles.coinIcon}
                style={{
                  background:
                    idx === rewardlen
                      ? "linear-gradient(135deg, #FFC1B3, #E57F6C)"
                      : "linear-gradient(135deg, #facc15, #f59e0b)",
                }}
              >
                {reward.icon}
              </span>

              <h2>{reward.value}</h2>
            </div>
            <p className={styles.coinHint}>{reward.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LvlHeroCard;
