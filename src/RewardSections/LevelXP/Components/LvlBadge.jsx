import styles from "./LvlBadge.module.css";

const LvlBadge = ({ badge }) => {
  return <div className={styles.badge}>{badge}</div>;
};

export default LvlBadge;
