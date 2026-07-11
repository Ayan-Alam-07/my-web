// import { useNavigate } from "react-router-dom";
// import styles from "./DailyBonusBanner.module.css";

// import { FaGift, FaCoins, FaArrowRight } from "react-icons/fa";
// import { GiDiamonds } from "react-icons/gi";

// function DailyBonusBanner() {
//   const navigate = useNavigate();

//   const goToBonus = () => {
//     navigate("/daily-bonus");
//   };

//   return (
//     <div className={styles.bannerCard} onClick={goToBonus}>
//       <div className={styles.leftSection}>
//         <div>
//           <FaGift className={styles.giftIcon} />
//         </div>

//         <div className="d-flex flex-column text-center text-sm-end">
//           <div className="mb-3 pb-1">
//             <h3>Daily Bonus</h3>

//             <p>Complete a quick offer and earn free gems today</p>

//             <div className={styles.rewardTag}>
//               {/* <FaCoins /> */}
//               <GiDiamonds
//                 style={{
//                   color: "#a020f0",
//                   filter: "drop-shadow(0 0 6px rgba(169, 85, 221, 1))",
//                   marginRight: "3px",
//                 }}
//               />
//               <span>Up to 25 Gems</span>
//               <GiDiamonds
//                 style={{
//                   color: "#a020f0",
//                   filter: "drop-shadow(0 0 6px rgba(169, 85, 221, 1))",
//                   marginLeft: "3px",
//                 }}
//               />
//             </div>
//           </div>
//           <button className={styles.openBtn}>
//             Claim Now
//             <FaArrowRight />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default DailyBonusBanner;

import React from "react";
import styles from "./DailyBonusBanner.module.css";
import arrowStyle from "../../Components/CommonComponents/RewardArrow.module.css";
import {
  HiMiniGiftTop,
  HiMiniSparkles,
  HiMiniShieldCheck,
  HiMiniBolt,
  HiMiniFire,
  HiMiniChevronRight,
} from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export default function DailyBonusBanner() {
  const navigate = useNavigate();

  const goToBonus = () => {
    navigate("/daily-bonus");
  };

  const metaPills = [
    { title: "Trusted", icon: HiMiniShieldCheck },
    { title: "Instant claim", icon: HiMiniBolt },
    { title: "Daily", icon: HiMiniFire },
  ];

  return (
    <section
      className={`mx-md-2 mx-lg-3 ${styles.banner}`}
      aria-label="Daily claim bonus banner"
      onClick={goToBonus}
    >
      <div className={styles.glowOne} />
      <div className={styles.glowTwo} />
      <div className={styles.pattern} />

      <div className={styles.left}>
        <div className={`d-none d-lg-grid ${styles.iconWrap}`}>
          <HiMiniGiftTop className={styles.mainIcon} />
        </div>

        <div className={styles.content}>
          <div className="d-flex d-lg-none align-items-end gap-4 gap-lg-3 mb-3 mb-md-4 pb-1 pd-md-0">
            <div className={styles.iconWrap}>
              <HiMiniGiftTop className={styles.mainIcon} />
            </div>
            <div>
              <span className={styles.eyebrow}>Daily bonus</span>
              <h2 className={styles.title}>Claim your daily bonus now</h2>
            </div>
          </div>

          <div className="d-none d-lg-inline-block">
            <span className={styles.eyebrow}>Daily bonus</span>
            <h2 className={styles.title}>Claim your daily bonus Asap!</h2>
          </div>
          <p className={styles.subtitle}>
            <span className="d-md-none">
              Stay active every day to keep your streak alive and unlock more
              premium benefits.
            </span>
            <span className="d-none d-md-block">
              Stay active every day to keep your streak alive and unlock more
              premium benefits, exclusive rewards & bonus features.
            </span>
          </p>

          <div className={styles.metaRow}>
            {metaPills.map((pill, idx) => (
              <span key={idx} className={styles.metaPill}>
                <pill.icon />
                <span>
                  {pill.title}{" "}
                  {idx === 0 && (
                    <span className="d-none d-md-inline-block">bonus</span>
                  )}
                  {idx === metaPills.length - 1 && (
                    <>
                      <span className="d-md-none">VEs</span>{" "}
                      <span className="d-none d-md-inline-block">bonuses</span>
                    </>
                  )}
                </span>
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="d-lg-none">
        <button className={styles.claimButton} type="button">
          Claim daily bonus
          <ChevronRight size={18} className={arrowStyle.rewardArrow} />
        </button>
      </div>

      <div className={styles.right}>
        <div className={styles.highlightCard}>
          <div className={styles.highlightTop}>
            <span className={styles.claimTag}>
              <HiMiniSparkles />
              Claim available
            </span>
          </div>

          <div className={styles.claimBox}>
            <span className={styles.claimLabel}>Today’s access</span>
            <strong className={styles.claimTitle}>
              Tap to collect your daily bonus
            </strong>
            <p className={styles.claimText}>
              Users must claim daily to continue their active streak.
            </p>
          </div>

          <button className={styles.claimButton} type="button">
            Claim daily bonus
            <ChevronRight size={18} className={arrowStyle.rewardArrow} />
          </button>
        </div>
      </div>
    </section>
  );
}
