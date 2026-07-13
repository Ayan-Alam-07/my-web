import styles from "./ActionButtons.module.css";

import {
  FaPlus,
  FaArrowRightArrowLeft,
  FaBolt,
  FaClockRotateLeft,
} from "react-icons/fa6";

const actions = [
  {
    title: "Invest",
    subtitle: "Create Stake",
    icon: FaPlus,
    color: "#2563EB",
    action: "create",
  },
  {
    title: "Swap",
    subtitle: "Stake ↔ Wallet",
    icon: FaArrowRightArrowLeft,
    color: "#8B5CF6",
    action: "swap",
  },
  {
    title: "Activate",
    subtitle: "Today's Mission",
    icon: FaBolt,
    color: "#10B981",
    action: "activate",
  },
  {
    title: "History",
    subtitle: "Transactions",
    icon: FaClockRotateLeft,
    color: "#F59E0B",
    action: "history",
  },
];

export default function ActionButtons() {
  return (
    <section className={styles.actions}>
      {actions.map((item) => (
        <button key={item.action} className={styles.card}>
          <div
            className={styles.icon}
            style={{
              background: `linear-gradient(135deg, ${item.color}, ${item.color}CC)`,
            }}
          >
            <item.icon />
          </div>

          <span className={styles.title}>{item.title}</span>

          <small className={styles.subtitle}>{item.subtitle}</small>
        </button>
      ))}
    </section>
  );
}
