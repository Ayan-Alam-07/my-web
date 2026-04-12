import styles from "./RewardsBase.module.css";

const Badge = ({ badge, badgeClass, title }) => {
  return (
    <span className={`${styles.badge} ${styles[badgeClass]}`}>
      {title === "level" && "Grow"} {badge}
    </span>
  );
};
export default Badge;
