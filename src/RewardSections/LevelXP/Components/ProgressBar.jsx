import styles from "./ProgressBar.module.css";

const ProgressBar = ({ progress }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.fill} style={{ width: `${progress}%` }} />
    </div>
  );
};

export default ProgressBar;
