// import style from "./BonusBanner.module.css";
// import { FaCoins, FaShieldAlt, FaBolt, FaCheckCircle } from "react-icons/fa";
// const BonusBanner = () => {
//   return (
//     <div className="row justify-content-center mt-3 mb-2">
//       <div
//         className="col-12 col-md-12 p-0"
//         onClick={() => navigate("/watchAd-bonus")}
//       >
//         <div className={style.ticket}>
//           {/* LEFT — reward visual */}
//           <div className={style.left}>
//             <div className={style.coinStack}>
//               <FaCoins className={style.coinIcon} />
//               <span className={`${style.spark} ${style.spark1}`} />
//               <span className={`${style.spark} ${style.spark2}`} />
//               <span className={`${style.spark} ${style.spark3}`} />
//             </div>
//           </div>

//           {/* RIGHT — content */}
//           <div className={style.right}>
//             <div className={style.topRow}>
//               <span className={style.tag}>Live Bonus</span>
//               <span className={style.trust}>
//                 <FaShieldAlt /> Secure
//               </span>
//               <span className={style.trustDot} />
//               <span className={style.trust}>
//                 <FaBolt /> Instant
//               </span>
//               <span className={style.trustDot} />
//               <span className={style.trust}>
//                 <FaCheckCircle /> Verified
//               </span>
//             </div>

//             <h4 className={style.title}>
//               Watch Ads &amp; Earn <em>Bonus VEs</em>
//             </h4>

//             <div className={style.progress}>
//               <div className={style.progressFill} />
//             </div>

//             <div className={style.bottomRow}>
//               <span className={style.status}>
//                 <strong>Ready</strong> — claim in under 30 sec
//               </span>
//               <span className={style.cta}>
//                 Claim Now <span className={style.ctaArrow}>→</span>
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default BonusBanner;

import style from "./BonusBanner.module.css";
import {
  FaCoins,
  FaShieldAlt,
  FaBolt,
  FaCheckCircle,
  FaArrowRight,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const BonusBanner = () => {
  const navigate = useNavigate();

  return (
    <div className="row justify-content-center mt-3 mb-2 mb-lg-0  mx-md-2 mx-lg-3">
      <div
        className="col-12 p-0"
        onClick={() => navigate("/watchAd-bonus")}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            navigate("/watchAd-bonus");
          }
        }}
      >
        <div className={style.banner}>
          <div className={style.glow} />
          <div className={style.gridPattern} />

          <div className={style.content}>
            <div className={style.left}>
              <div className={style.liveRow}>
                <span className={`d-none d-md-inline-flex ${style.liveBadge}`}>
                  <span className={style.liveDot} />
                  Live Bonus
                </span>

                <div className={style.trustGroup}>
                  <span className={`d-md-none ${style.trustItem}`}>
                    <span className={style.liveDot} />
                    Live Bonus
                  </span>
                  <span className={style.trustItem}>
                    <FaShieldAlt /> Secure
                  </span>
                  <span className={style.trustItem}>
                    <FaBolt /> Instant
                  </span>
                  <span className={style.trustItem}>
                    <FaCheckCircle /> Verified
                  </span>
                </div>
              </div>

              <h4 className={style.title}>
                Watch ads and unlock <span>Bonus VEs</span>
              </h4>

              <p className={style.subtitle}>
                Fast reward activation with verified crediting and real-time
                bonus access.
              </p>

              <div className={style.metaRow}>
                <div className={style.rewardBox}>
                  <div className={style.rewardIconWrap}>
                    <FaCoins className={style.rewardIcon} />
                  </div>
                  <div>
                    <span className={style.rewardLabel}>Reward status</span>
                    <strong className={style.rewardValue}>
                      Ready to claim
                    </strong>
                  </div>
                </div>

                <div className={`d-none d-md-block ${style.progressWrap}`}>
                  <div className={style.progressTop}>
                    <span>Bonus availability</span>
                    <strong>78%</strong>
                  </div>
                  <div className={style.progressBar}>
                    <div className={style.progressFill} />
                  </div>
                </div>
              </div>
            </div>

            <div className="d-lg-none">
              <button type="button" className={style.ctaButton}>
                Claim Now
                <FaArrowRight />
              </button>
            </div>

            <div className={style.right}>
              <div className={style.ctaCard}>
                <span className={style.ctaEyebrow}>Estimated time</span>
                <strong className={style.ctaTime}>Under 30 sec</strong>

                <button type="button" className={style.ctaButton}>
                  Claim Now
                  <FaArrowRight />
                </button>

                <span className={style.ctaFoot}>Instant reward flow</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BonusBanner;
