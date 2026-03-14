import { useNavigate } from "react-router-dom";
import styles from "./DailyBonusBanner.module.css";

import { FaGift, FaCoins, FaArrowRight } from "react-icons/fa";

function DailyBonusBanner() {
  const navigate = useNavigate();

  const goToBonus = () => {
    navigate("/daily-bonus");
  };

  return (
    <div className={styles.bannerCard} onClick={goToBonus}>
      <div className={styles.leftSection}>
        <FaGift className={styles.giftIcon} />

        <div>
          <h3>Daily Bonus</h3>

          <p>Complete a quick offer and earn free gems today</p>

          <div className={styles.rewardTag}>
            <FaCoins />
            <span>Up to 25 Gems</span>
          </div>
        </div>
      </div>

      <div className={styles.rightSection}>
        <button className={styles.openBtn}>
          Claim Now
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
}

export default DailyBonusBanner;
