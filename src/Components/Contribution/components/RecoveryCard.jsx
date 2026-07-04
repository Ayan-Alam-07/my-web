import { FaTriangleExclamation } from "react-icons/fa6";

import styles from "./RecoveryCard.module.css";

export default function RecoveryCard({ cost, balance, missedDays, onRecover }) {
  return (
    <section className={styles.recoveryCard}>
      <div className={styles.recoveryHeader}>
        <div className={styles.recoveryIcon}>
          <FaTriangleExclamation />
        </div>

        <div>
          <h3>Streak Protection</h3>

          <p>You missed {missedDays} sync day</p>
        </div>
      </div>

      <div className={styles.recoveryInfo}>
        <div>
          Cost
          <strong>{cost} VEs</strong>
        </div>

        <div>
          Balance
          <strong>{balance} VEs</strong>
        </div>
      </div>

      <button className={styles.recoverButton} onClick={onRecover}>
        Restore Streak
      </button>
    </section>
  );
}
