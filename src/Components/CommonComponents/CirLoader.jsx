import styles from "./CirLoader.module.css";

const CirLoader = ({ para }) => {
  return (
    <div className={styles.loadingWrapper}>
      <div className={styles.loader}></div>
      <p>{`${para}...`}</p>
    </div>
  );
};
export default CirLoader;
