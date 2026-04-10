import styles from "./QuickLinkAbs.module.css";

const QuickLinkAbs = ({
  icon,
  title,
  wrapper,
  border,
  dataIndex,
  isActive,
}) => {
  return (
    <div
      data-index={dataIndex}
      className={`${styles.card} ${styles[border]} ${isActive ? styles.activeCard : ""} `}
    >
      <div className={`${styles.iconWrapper} ${styles[wrapper]}`}>{icon}</div>
      <span className={styles.title}>{title}</span>
    </div>
  );
};

export default QuickLinkAbs;
