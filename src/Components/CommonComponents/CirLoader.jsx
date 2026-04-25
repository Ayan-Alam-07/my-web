import styles from "./CirLoader.module.css";

const CirLoader = ({ para, id }) => {
  return (
    <div
      className={styles.loadingWrapper}
      style={{ minHeight: id === 1 || id === 4 ? "70vh" : "50vh" }}
    >
      <div className={styles.loader}></div>
      <p>{`${para}...`}</p>
    </div>
  );
};
export default CirLoader;
