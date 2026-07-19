import styles from "./ActivePortfolio.module.css";

import PortfolioTop from "../PortfolioTop/PortfolioTop";
import CircularProgress from "../CircularProgress/CircularProgress";
import PortfolioStats from "../PortfolioStats/PortfolioStats";
import PortfolioFooter from "../PortfolioFooter/PortfolioFooter";

const ActivePortfolio = ({ portfolio }) => {
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.heading}>Active Portfolio</h2>

      <div className={styles.card}>
        {/* Blue Edge Glow */}
        <span className={`${styles.edgeGlow} ${styles.leftGlow}`} />
        <span className={`${styles.edgeGlow} ${styles.rightGlow}`} />

        {/* Background Glow */}
        <span className={styles.radialGlow} />

        <PortfolioTop portfolio={portfolio} />

        <div className={styles.body}>
          <CircularProgress portfolio={portfolio} />

          <PortfolioStats portfolio={portfolio} />
        </div>

        <PortfolioFooter portfolio={portfolio} />
      </div>
    </section>
  );
};

export default ActivePortfolio;
