import styles from "./PortfolioOverview.module.css";

import { Eye, TrendingUp, Coins, Wallet } from "lucide-react";

import AnimatedCounter from "../../../../CommonComponents/AnimatedCounter";
import React from "react";
const PortfolioOverview = ({ overview }) => {
  const stats = [
    {
      iconWrapClass: "green",
      icon: TrendingUp,
      value: overview.todayProfit,
      para: "Today's Profit",
      duration: 1100,
      min: 2,
      max: 2,
      unit: "VEs",
      animation: true,
    },
    {
      iconWrapClass: "gold",
      icon: Coins,
      value: overview.expectedProfit,
      para: "Expected Profit",
      duration: 1500,
      min: 1,
      max: 2,
      unit: "VEs",
      animation: true,
    },
    {
      iconWrapClass: "blue",
      icon: Wallet,
      value: overview.activePortfolio,
      para: "Active Portfolio",
      animation: true,
    },
  ];

  return (
    <>
      <section className={styles.card}>
        <div className={styles.left}>
          <span className={styles.label}>PORTFOLIO OVERVIEW</span>

          <div className={styles.balanceRow}>
            <h2>
              <AnimatedCounter
                value={overview.totalInvested}
                duration={1800}
                formatter={(v) =>
                  v.toLocaleString("en-IN", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 3,
                  })
                }
              />
              <span> VEs</span>
            </h2>

            <button className={styles.eye}>
              <Eye size={22} />
            </button>
          </div>

          <p className={styles.subtitle}>Total Invested Value</p>
        </div>

        <div className={styles.divider} />

        {stats.map((stat, idx) => (
          <React.Fragment key={idx}>
            <div
              className={`${styles.stat}  ${stats.length - 1 === idx ? styles.hide : ""}`}
            >
              <div className={`${styles.icon} ${styles[stat.iconWrapClass]}`}>
                <stat.icon size={30} />
              </div>

              {stats.length - 1 !== idx ? (
                <h3>
                  <AnimatedCounter
                    value={stat.value}
                    duration={stat.duration}
                    formatter={(v) =>
                      v.toLocaleString("en-IN", {
                        minimumFractionDigits: stat.min,
                        maximumFractionDigits: stat.max,
                      })
                    }
                  />
                  <span> {stat.unit}</span>
                </h3>
              ) : (
                <h3>{overview.activePortfolio}</h3>
              )}

              <p>{stat.para}</p>
            </div>
            <div
              className={`${styles.divider} ${styles.hide} `}
              style={{ display: stats.length - 1 === idx ? "none" : "" }}
            />
          </React.Fragment>
        ))}
      </section>
      <div className={`${styles.mobStats}`}>
        <div className={`d-flex align-items-center `}>
          <div className={`${styles.icon} ${styles[stats[2].iconWrapClass]}`}>
            <Wallet size={30} />
          </div>
          <p>{stats[2].para}</p>
        </div>
        <h3>{overview.activePortfolio}</h3>
      </div>
    </>
  );
};

export default PortfolioOverview;
