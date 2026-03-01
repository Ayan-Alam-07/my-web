import CommonNavArr from "../CommonComponents/CommonNavArr";
import { useList } from "../../Context/ContextStore";
import { showSuccess } from "../../utils/Toast";
import { FaCopy, FaGift, FaUsers, FaShare } from "react-icons/fa";
import style from "./Reffer.module.css";

export default function Referral() {
  const { user } = useList();

  const referralLink = `velooprewards.vercel.app/register?ref=${user.referralCode}`;

  const copyRefferLink = () => {
    navigator.clipboard.writeText(referralLink);
    showSuccess("Referral link copied!");
  };

  const copyRefferCode = () => {
    navigator.clipboard.writeText(user.referralCode);
    showSuccess("Referral Code copied!");
  };

  return (
    <div className="container-fluid px-0">
      <CommonNavArr id={11} navigation={"/Home"} />
      <div className="container px-2">
        <div className={style.referralContainer}>
          <div className={style.referralCard}>
            {/* 🎁 Header */}
            <div className={style.referralHeader}>
              <FaGift size={28} />
              <h2>Refer & Earn Rewards</h2>
            </div>

            {/* 💰 Reward Section */}
            <div className={style.rewardBox}>
              <h3>
                Earn <span>137 Coins</span> Per Referral
              </h3>
              <p>
                Invite friends and earn rewards when they successfully register.
              </p>
            </div>

            {/* 📋 Referral Code */}
            <div className={style.codeSection}>
              <h4>Your Referral Code</h4>
              <div className="d-flex justify-content-center">
                <div className={style.codeBox}>
                  <span>{user.referralCode}</span>
                </div>
              </div>
              <div className="d-flex justify-content-center mt-4">
                <button className={style.copyBtn} onClick={copyRefferCode}>
                  <FaCopy /> Copy Referral Code
                </button>
              </div>
            </div>

            {/* 🔗 Referral Link */}
            <div className={style.linkSection}>
              <h4 className={style.linkSectionHeader}>
                Share Your Referral Link
              </h4>
              <div className={style.linkBox}>
                <input value={referralLink} readOnly />
                <button className={style.copyBtn} onClick={copyRefferLink}>
                  <FaCopy />
                </button>
              </div>
            </div>

            {/* share Button */}
            <div className="d-flex justify-content-center mt-4">
              <button
                className={style.whatsappBtn}
                onClick={() =>
                  window.open(
                    `https://wa.me/?text=Join VELOOP Rewards and earn 137 coins! ${referralLink}`,
                  )
                }
              >
                <FaShare className="me-2" />
                WhatsApp
              </button>
            </div>

            {/* 📊 Stats Placeholder */}
            <div className={style.statsBox}>
              <FaUsers size={20} />
              <p>Total Referrals: {user.referrals?.length || 0}</p>
            </div>

            {/* 📜 Rules Section */}
            <div className={style.rulesBox}>
              <h4>Referral Rules!</h4>
              <ul>
                <li>
                  <span className="me-2">✔</span>{" "}
                  <span>Only genuine new users are eligible.</span>
                </li>
                <li>
                  <span className="me-2">✔</span>{" "}
                  <span>Reward is credited after successful registration.</span>
                </li>
                <li>
                  <span className="me-2">✔</span>{" "}
                  <span>Self-referrals are strictly prohibited.</span>
                </li>
                <li>
                  <span className="me-2">✔</span>{" "}
                  <span>Multiple accounts from same user are not allowed.</span>
                </li>
                <li>
                  <span className="me-2">⚠</span>{" "}
                  <span>
                    Fake referrals will result in permanent account suspension.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
