import styles from "./ActionButtons.module.css";
import { AiOutlineSwap } from "react-icons/ai";

import {
  FaPlus,
  FaArrowRightArrowLeft,
  FaBolt,
  FaClockRotateLeft,
} from "react-icons/fa6";

const actions = [
  {
    title: "Invest",
    subtitle: "Grow Your VEs",
    icon: FaPlus,
    className: styles.invest,
  },
  {
    title: "Swap",
    subtitle: "SVEs ⇄ VEs",
    icon: FaArrowRightArrowLeft,
    className: styles.swap,
  },
  {
    title: "Revive",
    subtitle: "Daily Stake",
    icon: FaBolt,
    className: styles.revive,
  },
  {
    title: "History",
    subtitle: "Portfolio",
    icon: FaClockRotateLeft,
    className: styles.history,
  },
];

export default function ActionButtons() {
  return (
    <section>
      <h3 className={styles.actionHds}>Actions:</h3>
      <div className={styles.actions}>
        {actions.map((action, idx) => (
          <button key={action.title} className={styles.card}>
            <div className={`${styles.iconWrapper} ${action.className}`}>
              <action.icon />
            </div>

            <div className="text-center text-sm-start">
              <h4>{action.title}</h4>

              {actions.length - 3 === idx ? (
                <span>
                  SVEs <AiOutlineSwap /> VEs
                </span>
              ) : (
                <span>{action.subtitle}</span>
              )}
            </div>

            <div className={styles.hoverGlow}></div>
          </button>
        ))}
      </div>
    </section>
  );
}
