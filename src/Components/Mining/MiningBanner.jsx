import styles from "./MiningBanner.module.css";
import { FaBolt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { GiMiner } from "react-icons/gi";
import { IoMdInfinite } from "react-icons/io";
import { RiSecurePaymentFill } from "react-icons/ri";
import RewardArrow from "../CommonComponents/RewardArrow";

const MiningBanner = () => {
  const navigate = useNavigate();

  const cells = Array.from({ length: 64 });

  const featurePill = [
    { title: "Passive Earnings", icon: FaMoneyBillTrendUp, color: "#10B981" },
    { title: "VEs Mining", icon: GiMiner, color: "#FBBF24" },
    { title: "Safe & Verified", icon: RiSecurePaymentFill, color: "#3B82F6" },
    { title: "Earn 24/7", icon: IoMdInfinite, color: "#8B5CF6" },
  ];

  return (
    <div className={styles.miningBanner} onClick={() => navigate("/ve-mining")}>
      {/* HOTTEST BADGE */}
      <div className={styles.hotBadge}>🔥 HOTTEST</div>

      {/* LEFT VISUAL */}
      <div className={styles.miningVisual}>
        <div className={styles.grid}>
          {cells.map((_, index) => (
            <span
              key={index}
              className={`${styles.cell} ${
                index % 3 === 0 ? styles.activeCell : ""
              }`}
            />
          ))}
        </div>

        <div className={styles.energyOrb}></div>

        <div className={styles.floatToken}>+VE</div>
        <div className={styles.floatToken2}>+VE</div>
        <div className={styles.floatToken3}>+VE</div>
        <div className={styles.floatToken4}>+VE</div>
        <div className={styles.floatToken5}>+VE</div>
      </div>

      {/* CONTENT */}
      <div className={styles.miningContent}>
        <div className={styles.miningLabel}>NEW EARNING METHOD</div>

        <h2 className={styles.miningTitle}>
          Start <span className={styles.titleHighlight}>VEs Mining</span>
        </h2>

        <p className={styles.miningDesc}>
          <span className="d-none d-lg-block">
            Generate VEs Rewards automatically while staying active. A brand new
            passive earning system available only on VEloop Rewards.
          </span>
          <span className="d-lg-none">
            Stay active and earn passively with new system — available
            exclusively on VELoop Rewards.
          </span>
        </p>

        <div className={styles.miningFeatures}>
          {featurePill.map((pill) => (
            <span key={pill.title} className={styles.featurePill}>
              <pill.icon
                size={17}
                className="mb-1 me-1"
                style={{ color: pill.color }}
              />{" "}
              {pill.title}
            </span>
          ))}
        </div>

        <button className={styles.miningBtn}>
          <FaBolt />
          Start Mining
          <RewardArrow />
        </button>
      </div>
    </div>
  );
};

export default MiningBanner;
