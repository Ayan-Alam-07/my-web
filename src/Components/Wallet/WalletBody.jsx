// import style from "./WalletBody.module.css";
// import { FaCoins } from "react-icons/fa6";
// import { FaIndianRupeeSign } from "react-icons/fa6";
// import { useState } from "react";
// import PaymentMethod from "./PaymentMethod";
// import Transactions from "../Transaction/Transactions";
// import { useList } from "../../Context/ContextStore";
// import RefreshCoins from "../../Components/CommonComponents/RefreshButton";

// const WalletBody = () => {
//   const { user, setIsRedeemHistory } = useList();
//   const [activeTab, setActiveTab] = useState("payment");
//   // const [showTransaction, setShowTransaction] = useState(false);

//   return (
//     <div className="container-fluid">
//       <div className="container">
//         <div
//           className="row mt-4 pt-2 pb-4 align-items-center"
//           style={{ borderBottom: "2px solid #fff" }}
//         >
//           <div className="col-6" style={{ borderRight: "2px solid #fff" }}>
//             <div className="d-flex align-items-center justify-content-center ">
//               <div className="ms-lg-4">
//                 <span className={style.availPara}>
//                   <span style={{ color: "#ffd700" }}>Available VEs.</span>
//                 </span>
//                 <div className="d-flex align-items-center mt-4 pt-3 ms-lg-3 ">
//                   <FaCoins style={{ color: "#FFD700", fontSize: "36px" }} />
//                   <h3
//                     className={`m-0 ms-3 ms-md-4 ps-lg-1 ${style.homeBalance}`}
//                   >
//                     {user.coins} <RefreshCoins ref={2} />
//                   </h3>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="col-6">
//             <div className="d-flex align-items-center justify-content-center ">
//               <div className="me-lg-4">
//                 <span className={style.availPara}>
//                   <span style={{ color: "#00c853" }}>Available Bal.</span>
//                 </span>
//                 <div className="d-flex align-items-center mt-4 pt-3 ms-lg-3 ">
//                   <FaIndianRupeeSign
//                     style={{ color: "#00C853", fontSize: "36px" }}
//                   />
//                   <h3
//                     className={`m-0 ms-2 ms-md-4 ps-lg-1 ${style.homeBalance}`}
//                   >
//                     7878.0
//                   </h3>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="mt-2 mt-lg-3"></div>
//         </div>

//         <div className="row">
//           <div className="col-12 p-0">
//             <div className="d-flex justify-content-end mt-3 pt-2">
//               <p
//                 className={style.walletTabs}
//                 onClick={() => setActiveTab("payment")}
//                 style={{
//                   fontWeight: activeTab === "payment" ? "bold" : "normal",
//                   opacity: activeTab === "payment" ? "" : "0.7",
//                 }}
//               >
//                 Payment Method
//               </p>
//               <div className={style.tabsSeperator}></div>
//               <p
//                 className={style.walletTabs}
//                 onClick={() => {
//                   // setShowTransaction(true);
//                   setIsRedeemHistory(false);
//                   setActiveTab("transactions");
//                 }}
//                 style={{
//                   fontWeight: activeTab === "transactions" ? "bold" : "normal",
//                   opacity: activeTab === "transactions" ? "1" : "0.7",
//                 }}
//               >
//                 Transactions
//               </p>
//             </div>
//             {activeTab === "payment" && <PaymentMethod />}
//             {activeTab === "transactions" && (
//               <Transactions /> //showTransaction={showTransaction}
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default WalletBody;

import React, {
  useState,
  useEffect,
  useMemo,
  useCallback,
  useContext,
} from "react";
import { useList } from "../../Context/ContextStore";
import PaymentMethod from "./PaymentMethod";
import Transactions from "../Transaction/Transactions";
import RefreshCoins from "../../Components/CommonComponents/RefreshButton";

import styles from "./WalletBody.module.css";
import {
  FaWallet,
  FaCoins,
  FaArrowUp,
  FaCopy,
  FaSync,
  FaCheckCircle,
  FaShieldAlt,
  FaUserPlus,
  FaTrophy,
  FaBolt,
  FaHeadset,
  FaChevronRight,
  FaChartLine,
  FaLock,
} from "react-icons/fa";
import CommonNavArr from "../CommonComponents/CommonNavArr";
import { showSuccess } from "../../utils/Toast";

// --- Configuration & Constants ---
const WALLET_CONFIG = {
  VE_EXCHANGE_RATE: 0.05, // Example: 1 VE = ₹0.05
  LEVEL_THRESHOLDS: [0, 500, 1500, 5000, 15000, 50000], // XP needed per level
};

const WalletBody = () => {
  // --- State Management ---
  const { user, setIsRedeemHistory } = useList();
  const [activeTab, setActiveTab] = useState("payment"); // 'payment' | 'transactions'
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [animationTrigger, setAnimationTrigger] = useState(false); // Trigger for count-ups

  if (!user) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className={styles.loadingSpinner}></div>
      </div>
    );
  }

  // --- Performance: Memoized Calculations ---
  const walletMetrics = useMemo(() => {
    const coins = user?.coins ?? 0;
    const level = user?.level ?? 1;
    const currentXp = user?.xp ?? 0;
    const withdrawals = user?.withdrawals || [];

    // Calculations
    const veValueInr = coins * WALLET_CONFIG.VE_EXCHANGE_RATE;
    const totalWithdrawnInr = withdrawals.reduce(
      (acc, curr) => acc + (curr.amount || 0),
      0,
    );

    // XP Progress Logic
    const nextLevelXp = WALLET_CONFIG.LEVEL_THRESHOLDS[level] || level * 10000;
    const xpProgress = Math.min(100, (currentXp / nextLevelXp) * 100);
    const xpRemaining = Math.max(0, nextLevelXp - currentXp);

    return {
      coins,
      level,
      currentXp,
      nextLevelXp,
      xpProgress,
      xpRemaining,
      veValueInr,
      totalWithdrawnInr,
      totalLifetime: veValueInr + totalWithdrawnInr, // Simplified lifetime metric
      referralCount: user?.referralCount || 0,
    };
  }, [user]);

  // --- Handlers ---
  const handleRefresh = useCallback(async () => {
    console.log("[WalletBody] Refresh triggered manually");
    setIsRefreshing(true);
    try {
      await RefreshCoins();
      setAnimationTrigger((prev) => !prev); // Re-trigger number animations
    } catch (err) {
      console.error("Refresh failed", err);
    } finally {
      setIsRefreshing(false);
      // setTimeout(() => setIsRefreshing(false), 800);
    }
  }, [RefreshCoins]);

  const handleCopyId = useCallback(() => {
    const userId = user?._id || user?.userId;
    if (userId) {
      navigator.clipboard.writeText(userId);
      showSuccess("UserID copied!");
    }
  }, [user]);

  const switchTab = useCallback((tab) => {
    setActiveTab(tab);
  }, []);

  // --- Animation Helper: Count Up Effect ---
  const AnimatedValue = ({ end, prefix = "", suffix = "" }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      let start = 0;
      const duration = 1200;
      const incrementTime = 20;
      const steps = duration / incrementTime;
      const stepValue = end / steps;

      const timer = setInterval(() => {
        start += stepValue;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, incrementTime);
      return () => clearInterval(timer);
    }, [end, animationTrigger]);

    return (
      <span className={styles.valueText}>
        {prefix}
        {count.toLocaleString()}
        {suffix}
      </span>
    );
  };

  const stats = [
    {
      icon: FaCoins,
      title: "Available VEs",
      value: walletMetrics.coins,
      theme: ["#fbbf24", "rgba(251, 191, 36, 0.1)"],
    },
    {
      icon: FaWallet,
      title: "Est. Balance",
      value: walletMetrics.veValueInr.toFixed(0),
      theme: ["#6366f1", "rgba(99, 102, 241, 0.1)"],
    },
    {
      icon: FaArrowUp,
      title: "Withdrawn",
      value: walletMetrics.totalWithdrawnInr.toFixed(0),
      theme: ["#10b981", "rgba(16, 185, 129, 0.1)"],
    },
    {
      icon: FaTrophy,
      title: "Current Rank",
      value: walletMetrics.level,
      theme: ["#ec4899", "rgba(236, 72, 153, 0.1)"],
    },
  ];

  return (
    <div className="container-fluid px-1 px-md-2">
      <div className={styles.pageColor}>
        <CommonNavArr id={1} navigation={"/Home"} />
        <div className={`mt-5 ${styles.walletContainer}`}>
          <div className="container">
            {/* SECTION 1: PREMIUM WALLET HERO */}
            <section className={styles.heroSection}>
              <div className={styles.heroGlassCard}>
                <div className={styles.heroContent}>
                  <div className="d-flex justify-content-between align-items-start mb-4">
                    <div>
                      <div className={styles.badgeGroup}>
                        <span
                          className={`${styles.statusBadge} ${styles.verifiedBadge}`}
                        >
                          <FaCheckCircle /> Verified
                        </span>
                        <span
                          className={`${styles.statusBadge} ${styles.levelBadge}`}
                        >
                          Lvl {walletMetrics.level}
                        </span>
                      </div>
                      <h2 className={styles.heroTitle}>Net Worth</h2>
                      <p className={styles.heroSubtitle}>
                        <span className={styles.veCount}>
                          <FaCoins className={styles.coinIcon} />
                          <AnimatedValue end={walletMetrics.coins} />
                        </span>
                        <span className={styles.veLabel}>Available VEs</span>
                      </p>
                    </div>

                    <div className={styles.heroActions}>
                      <div className={styles.iconBtn}>
                        <RefreshCoins ref={0} />
                      </div>

                      <button
                        onClick={handleCopyId}
                        className={styles.iconBtn}
                        aria-label="Copy User ID"
                      >
                        <FaCopy />
                      </button>
                    </div>
                  </div>

                  {/* Main Balance Display */}
                  <div className={styles.balanceDisplay}>
                    <div className={styles.mainValue}>
                      ₹
                      <AnimatedValue
                        end={walletMetrics.veValueInr.toFixed(0)}
                      />
                    </div>
                    <div className={styles.balanceMeta}>
                      <span className={styles.label}>Current VE Value</span>
                      <span className={styles.label}>|</span>
                      <span className={styles.label}>
                        Lifetime: ₹{walletMetrics.totalLifetime.toFixed(0)}
                      </span>
                    </div>
                  </div>

                  {/* SECTION 8: TRUST & SECURITY */}
                  <div className={styles.trustBar}>
                    <div className={styles.trustItem}>
                      <FaLock /> Encrypted
                    </div>
                    <div className={styles.trustItem}>
                      <FaShieldAlt /> Fraud Protection
                    </div>
                    <div className={styles.trustItem}>
                      <FaCheckCircle /> Protected Withdrawals
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 2: PORTFOLIO OVERVIEW */}
            <section className={`row g-4 ${styles.statsGrid}`}>
              {stats.map((stat, idx) => (
                <div key={stat.title} className="col-12 col-md-6 col-lg-3">
                  <div className={styles.statCard}>
                    <div
                      className={styles.statIconBox}
                      style={{
                        color: stat.theme[0],
                        background: stat.theme[1],
                      }}
                    >
                      <stat.icon />
                    </div>
                    <div className={styles.statInfo}>
                      <p className={`mb-2 ${styles.statLabel}`}>{stat.title}</p>
                      <h4 className={styles.statValue}>
                        {idx === 1 || idx === 2 ? "₹" : idx === 3 ? "Lvl" : ""}{" "}
                        <AnimatedValue end={stat.value} />
                      </h4>
                    </div>
                  </div>
                </div>
              ))}
            </section>

            {/* SECTION 3 & 4: SMART TABS & CONTENT */}
            <section className={styles.tabsSection}>
              <div className={styles.tabsHeader}>
                <button
                  className={`${styles.tabBtn} ${activeTab === "payment" ? styles.activeTab : ""} ${activeTab !== "payment" ? styles.tabBtnUnSelected : ""}`}
                  onClick={() => switchTab("payment")}
                >
                  Payment Methods
                </button>
                <button
                  className={`${styles.tabBtn} ${activeTab === "transactions" ? styles.activeTab : ""} ${activeTab !== "transactions" ? styles.tabBtnUnSelected : ""}`}
                  onClick={() => switchTab("transactions")}
                >
                  Transactions History
                </button>
              </div>

              <div className={styles.tabContent}>
                {/* SECTION 7: TRANSACTION SUMMARY (Only visible on Transactions Tab) */}

                {/* EXISTING COMPONENTS */}
                <div className={styles.componentWrapper}>
                  {activeTab === "payment" ? (
                    <PaymentMethod />
                  ) : (
                    <Transactions
                      setIsRedeemHistory={setIsRedeemHistory}
                      RefreshCoins={handleRefresh}
                    />
                  )}
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletBody;
