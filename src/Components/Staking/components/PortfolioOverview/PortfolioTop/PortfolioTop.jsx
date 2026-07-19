import styles from "./PortfolioTop.module.css";

import { ArrowRight, Star } from "lucide-react";

const PortfolioTop = ({ portfolio }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.left}>
        <div className={styles.status}>
          <span className={styles.dot}></span>
          ACTIVE
        </div>

        <div className={styles.info}>
          <div className={styles.titleRow}>
            <h2>{portfolio.title}</h2>

            <div className={styles.star}>
              <Star size={12} fill="currentColor" />
            </div>
          </div>

          <p>Portfolio {portfolio.portfolioId}</p>
        </div>
      </div>

      <button className={`${styles.button} `}>
        <span>View Details</span>

        <div className={styles.arrow}>
          <ArrowRight size={18} />
        </div>
      </button>
    </div>
  );
};

export default PortfolioTop;
