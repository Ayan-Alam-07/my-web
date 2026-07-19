import styles from "./PortfolioStats.module.css";
import PortfolioStat from "./PortfolioStat";

const PortfolioStats = ({ portfolio }) => {
  const stats = [
    {
      title: "Invested Amount",
      value: `${portfolio.invested.toLocaleString("en-IN")}`,
      identity: "investAmount",
    },
    {
      title: "Current Value",
      value: `${portfolio.currentValue.toLocaleString("en-IN", {
        minimumFractionDigits: 4,
        maximumFractionDigits: 4,
      })}`,
      color: "green",
    },
    {
      title: "Daily Reward",
      value: `+${portfolio.rewardToday}`,
      color: "green",
    },
    {
      title: "Expected Value",
      value: `+${portfolio.expectedValue.toLocaleString("en-IN")}`,
      color: "gold",
    },
    {
      title: "Total Earned",
      value: `+${portfolio.totalEarned.toLocaleString("en-IN", {
        minimumFractionDigits: 4,
        maximumFractionDigits: 4,
      })}`,
      color: "green",
    },
    {
      title: "End Date",
      value: portfolio.endDate,
      identity: "endDate",
    },
  ];

  return (
    <section>
      <div className={styles.wrapper}>
        <div className={styles.row}>
          {stats.slice(0, 3).map((stat, idx) => (
            <PortfolioStat
              key={idx}
              title={stat.title}
              value={stat.value}
              color={stat.color}
              identity={stat.identity ? stat.identity : ""}
            />
          ))}
        </div>

        <div className={styles.horizontal} />

        <div className={styles.row}>
          {stats.slice(3).map((stat, idx) => (
            <PortfolioStat
              key={idx}
              title={stat.title}
              value={stat.value}
              color={stat.color}
              identity={stat.identity ? stat.identity : ""}
            />
          ))}
        </div>
      </div>

      <div className={styles.gMobWrapper}>
        <div className={styles.gMobRow}>
          {stats.slice(0, 2).map((stat, idx) => (
            <PortfolioStat
              key={idx}
              title={stat.title}
              value={stat.value}
              color={stat.color}
              identity={stat.identity ? stat.identity : ""}
              unClass={(idx + 1) % 2 !== 0 ? true : false}
            />
          ))}
        </div>
        <div className={styles.horizontal} />
        <div className={styles.gMobRow}>
          {stats.slice(2, 4).map((stat, idx) => (
            <PortfolioStat
              key={idx}
              title={stat.title}
              value={stat.value}
              color={stat.color}
              identity={stat.identity ? stat.identity : ""}
              unClass={(idx + 1) % 2 !== 0 ? true : false}
            />
          ))}
        </div>
        <div className={styles.horizontal} />
        <div className={styles.gMobRow}>
          {stats.slice(5).map((stat, idx) => (
            <PortfolioStat
              key={idx}
              title={stat.title}
              value={stat.value}
              color={stat.color}
              identity={stat.identity ? stat.identity : ""}
              unClass={true}
            />
          ))}
          {stats.slice(4, 5).map((stat, idx) => (
            <PortfolioStat
              key={idx}
              title={stat.title}
              value={stat.value}
              color={stat.color}
              identity={stat.identity ? stat.identity : ""}
              unClass={false}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioStats;
