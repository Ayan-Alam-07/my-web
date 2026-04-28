import styles from "./LvlStatsGrid.module.css";

const LvlStatsGrid = ({ data }) => {
  const xp = data?.xp ?? 0;
  const nextXP = data?.nextXP ?? 0;
  const progress = Math.max(0, Math.min(100, data?.progress ?? 0));
  const remaining = Math.max(nextXP - xp, 0);

  const items = [
    { label: "Current XP", value: `${xp}`, note: "earned so far" },
    { label: "Next level", value: `${nextXP}`, note: "XP target" },
    { label: "Remaining", value: `${remaining}`, note: "XP left" },
    {
      label: "Completion",
      value: `${progress.toFixed(0)}%`,
      note: "toward upgrade",
    },
  ];

  return (
    <div className={styles.grid}>
      {items.map((item) => (
        <div key={item.label} className={styles.card}>
          <span>{item.label}</span>
          <strong>{item.value}</strong>
          <p>{item.note}</p>
        </div>
      ))}
    </div>
  );
};

export default LvlStatsGrid;
