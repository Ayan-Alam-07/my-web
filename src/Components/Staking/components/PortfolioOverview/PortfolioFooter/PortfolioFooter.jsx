import styles from "./PortfolioFooter.module.css";

const PortfolioFooter = ({ portfolio }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.bottom}>
        <div className={styles.item}>
          <span className={styles.label}>Started On</span>
          <h4>{portfolio.startedOn}</h4>
        </div>

        <div className={styles.item}>
          <span className={`${styles.label} ${styles.durationCont}`}>
            Duration
          </span>
          <h4 className={styles.durationCont}>{portfolio.duration} </h4>
        </div>
      </div>
    </div>
  );
};

export default PortfolioFooter;
