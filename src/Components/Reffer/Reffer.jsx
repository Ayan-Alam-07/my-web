import CommonNavArr from "../CommonComponents/CommonNavArr";
import { useList } from "../../Context/ContextStore";
import { showError, showSuccess } from "../../utils/Toast";
import { FaCopy, FaGift, FaUsers, FaShare } from "react-icons/fa";
import style from "./Reffer.module.css";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Referral() {
  const { user, setIsLoading, isLoading } = useList();
  const [totalReferrals, setTotalReferrals] = useState(0);

  const referralLink = `velooprewards.vercel.app/register?ref=${user.referralCode}`;

  const copyRefferLink = () => {
    navigator.clipboard.writeText(referralLink);
    showSuccess("Referral link copied!");
  };

  const copyRefferCode = () => {
    navigator.clipboard.writeText(user.referralCode);
    showSuccess("Referral Code copied!");
  };

  useEffect(() => {
    if (!user?.token) return;

    const fetchReferralData = async () => {
      try {
        setIsLoading(true);

        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/auth/referral-history`,
          {
            headers: {
              Authorization: `Bearer ${user.token}`,
            },
          },
        );
        // showSuccess("Fetched referral details");
        setTotalReferrals(res.data.totalReferrals);
      } catch (err) {
        showError(err.response?.data || "Error fetching referral data");
      } finally {
        setIsLoading(false);
      }
    };

    fetchReferralData();
  }, [user]);

  const rules = [
    { id: 1, para: "Only genuine new users are eligible." },
    { id: 2, para: "Reward is credited after successful registration." },
    { id: 3, para: "Self-referrals are strictly prohibited." },
    { id: 4, para: "Multiple accounts from same user are not allowed." },
    {
      id: 5,
      para: "Fake referrals will result in permanent account suspension.",
    },
  ];

  return (
    <div className="container-fluid px-0">
      <CommonNavArr id={11} navigation={"/Home"} />
      <div className="container px-2">
        <div className={style.referralContainer}>
          <div className={style.referralCard}>
            {/* 🎁 Header */}
            <div className={style.referralHeader}>
              <FaGift size={28} />
              <h2 className="mb-0">Refer & Earn Rewards</h2>
            </div>

            {/* 💰 Reward Section */}
            <div className={style.rewardBox}>
              <h3>
                Earn <span>137 VEs</span> Per Referral
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
                  <FaCopy /> <span className="md-d-none">Copy Refer Link</span>
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
              <FaUsers size={24} />
              <p>Total Number of Referrals</p>
              {isLoading ? <span>Fetching...</span> : <h3>{totalReferrals}</h3>}
            </div>

            {/* 📜 Rules Section */}
            <div className={style.rulesBox}>
              <h4>Referral Rules!</h4>
              <ul>
                {rules.map((rule) => (
                  <li key={rule.id}>
                    <span
                      className="me-2"
                      style={{ color: rule.id !== 5 ? "green" : "yellow" }}
                    >
                      {rule.id === 5 ? "⚠" : "✔"}
                    </span>{" "}
                    <span>{rule.para}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
