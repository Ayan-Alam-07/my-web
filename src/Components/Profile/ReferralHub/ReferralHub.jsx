import { FaCopy } from "react-icons/fa";
import { FaShareAlt } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaHistory } from "react-icons/fa";

import { useNavigate } from "react-router-dom";

import { useList } from "../../../Context/ContextStore";
import { showSuccess } from "../../../utils/Toast";

import styles from "./ReferralHub.module.css";

const ReferralHub = () => {
  const navigate = useNavigate();

  const { user, setIsInviteToHistory } = useList();

  console.group("REFERRAL HUB");

  console.log("User:", user);
  console.log("Referral Code:", user?.referralCode);

  console.groupEnd();

  const referralCode = user?.referralCode || user?.userId || "VELOOP";

  const copyReferralCode = () => {
    console.log("Copy Referral:", referralCode);

    navigator.clipboard.writeText(referralCode);

    showSuccess("Referral Code Copied");
  };

  const shareReferral = async () => {
    console.log("Sharing Referral Code");

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
    <div className={styles.card}>
      <div className={styles.header}>
        <div>
          <h3>Refer & Earn</h3>

          <p>Invite friends and earn bonus rewards</p>
        </div>

        <FaUsers className={styles.headerIcon} />
      </div>

      <div className={styles.codeBox}>
        <span>Your Referral Code</span>

        <h2>{referralCode}</h2>
      </div>

      <div className={styles.buttonRow}>
        <button className={styles.primaryBtn} onClick={copyReferralCode}>
          <FaCopy />
          Copy Code
        </button>

        <button className={styles.secondaryBtn} onClick={shareReferral}>
          <FaShareAlt />
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
