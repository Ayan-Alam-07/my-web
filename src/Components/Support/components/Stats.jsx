import React from "react";
import styles from "./Stats.module.css";

const items = [
  { num: "98%", label: "Issues resolved on first contact" },
  { num: "<2m", label: "Average reply time" },
  { num: "24/7", label: "Real human agents on standby" },
  { num: "12k+", label: "Members helped this month" },
];

export default function Stats() {
  return (
    <section className={styles.wrap}>
      <div className={styles.grid}>
        {items.map((i) => (
          <div key={i.label} className={styles.card}>
            <div className={styles.num}>{i.num}</div>
            <div className={styles.label}>{i.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
