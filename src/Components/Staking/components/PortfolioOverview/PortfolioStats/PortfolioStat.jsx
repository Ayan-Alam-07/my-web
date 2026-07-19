import styles from "./PortfolioStats.module.css";
import { CalendarDays } from "lucide-react";

const PortfolioStat = ({
  title,
  value,
  icon,
  color = "white",
  identity = "",
  unClass,
}) => {
  return (
    <div className={`${styles.stat} ${unClass ? styles.statGMobBorder : ""}`}>
      <span className={styles.title}>{title}</span>

      <div
        className={`${styles.valueRow} ${title === "End Date" ? styles.dateConc : ""}`}
        style={{ gap: title === "End Date" ? "7px" : "" }}
      >
        <div className="d-flex align-items-center">
          {title === "End Date" ? <CalendarDays /> : ""}
        </div>
        <h3 className={`${styles.value} ${styles[color]} ${styles[identity]}`}>
          {value}{" "}
          <span className={styles.unit}>
            {title !== "End Date" ? "VEs" : ""}
          </span>
        </h3>
      </div>
    </div>
  );
};

export default PortfolioStat;
