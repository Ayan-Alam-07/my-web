import styles from "./CirLoader.module.css";

const CirLoader = ({ para, id, title }) => {
  return (
    <div
      className={styles.loadingWrapper}
      style={{
        minHeight:
          id === 1 ? "70vh" : title === "leaderboard" ? "30vh" : "50vh",
      }}
    >
      <div className={styles.loader}></div>
      <p className={styles.para}>{`${para}...`}</p>
    </div>
  );
};
export default CirLoader;
