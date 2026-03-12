import { useNavigate } from "react-router-dom";
import styles from "./ReferralEntryCard.module.css";

export default function ReferralEntryCard() {
  const navigate = useNavigate();

  return (
    <div
      className={styles.referralEntryCard}
      onClick={() => navigate("/referral")}
    >
      <div className={styles.overlay}></div>

      <div className={styles.content}>
        <h2>Refer & Earn</h2>
        <p>
          Invite your friends and earn <span>Upto ₹100</span> for every
          successful referrals.
        </p>

        <button className={styles.ctaBtn}>Start Referring</button>
      </div>
    </div>
  );
}
