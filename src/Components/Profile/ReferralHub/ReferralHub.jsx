import { FaCopy } from "react-icons/fa";
import { FaShareAlt } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaHistory } from "react-icons/fa";

import { useNavigate } from "react-router-dom";

import { useList } from "../../../Context/ContextStore";
import { showSuccess } from "../../../utils/Toast";

import styles from "./ReferralHub.module.css";
import css from "../UserProfile.module.css";

const ReferralHub = () => {
  const navigate = useNavigate();

  const { user, setIsInviteToHistory, setProfileToRef } = useList();

  const referralCode = user?.referralCode || user?.userId || "VELOOP";

  const copyReferralCode = () => {
    navigator.clipboard.writeText(referralCode);
    showSuccess("Referral Code Copied");
  };

  const shareReferral = async () => {
    const shareText = `Join VELOOP Rewards using my referral code: ${referralCode}`;
    try {
      if (navigator.share) {
        await navigator.share({
          title: "VELOOP Rewards",
          text: shareText,
        });
      } else {
        navigator.clipboard.writeText(shareText);

        showSuccess("Referral message copied");
      }
    } catch (error) {
      console.error("Share Error:", error);
    }
  };

  return (
    <div className={css.card}>
      <div className={`${css.header} ${styles.header}`}>
        <div>
          <h3>Refer & Earn</h3>

          <p>Invite friends and earn bonus rewards</p>
        </div>

        <FaUsers
          className={styles.headerIcon}
          onClick={() => {
            navigate("/referral");
            setProfileToRef(true);
          }}
        />
      </div>

      <div className={styles.codeBox}>
        <span>Your Referral Code</span>

        <h2>{referralCode}</h2>
      </div>

      <div className={styles.buttonRow}>
        <button className={styles.primaryBtn} onClick={copyReferralCode}>
          <FaCopy className="me-2" />
          Copy Code
        </button>

        <button className={styles.secondaryBtn} onClick={shareReferral}>
          <FaShareAlt className="me-2" />
          Share
        </button>
      </div>

      <div
        className={styles.historyCard}
        onClick={() => {
          console.log("Opening Invite History");

          setIsInviteToHistory(true);

          navigate("/invite-history");
        }}
      >
        <FaHistory />

        <span>Referral History</span>
      </div>
    </div>
  );
};

export default ReferralHub;
