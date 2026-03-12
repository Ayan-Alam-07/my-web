import { useNavigate } from "react-router-dom";
import { FaGift, FaArrowRight } from "react-icons/fa";
import styles from "./RefferBanner.module.css";

export default function ReferralBanner() {
  const navigate = useNavigate();

  return (
    <div className={styles.bannerCard} onClick={() => navigate("/referral")}>
      <div className={styles.bannerLeft}>
        <div className={styles.iconWrapper}>
          <FaGift size={26} />
        </div>

        <div>
          <h3>Refer Your Friends & Earn Money</h3>
          <p>
            Earn <span>Upto ₹100</span> for every successful referral
          </p>
        </div>
      </div>

      <div className={styles.bannerRight}>
        <FaArrowRight />
      </div>
    </div>
  );
}
