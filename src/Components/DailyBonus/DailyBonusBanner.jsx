import { useNavigate } from "react-router-dom";
import styles from "./DailyBonusBanner.module.css";

import { FaGift, FaCoins, FaArrowRight } from "react-icons/fa";
import { GiDiamonds } from "react-icons/gi";

function DailyBonusBanner() {
  const navigate = useNavigate();

  const goToBonus = () => {
    navigate("/daily-bonus");
  };

  return (
    <div className={styles.bannerCard} onClick={goToBonus}>
      <div className={styles.leftSection}>
        <div>
          <FaGift className={styles.giftIcon} />
        </div>

        <div className="d-flex flex-column text-center text-sm-end">
          <div className="mb-3 pb-1">
            <h3>Daily Bonus</h3>

            <p>Complete a quick offer and earn free gems today</p>

            <div className={styles.rewardTag}>
              {/* <FaCoins /> */}
              <GiDiamonds
                style={{
                  color: "#a020f0",
                  filter: "drop-shadow(0 0 6px rgba(169, 85, 221, 1))",
                  marginRight: "3px",
                }}
              />
              <span>Up to 25 Gems</span>
              <GiDiamonds
                style={{
                  color: "#a020f0",
                  filter: "drop-shadow(0 0 6px rgba(169, 85, 221, 1))",
                  marginLeft: "3px",
                }}
              />
            </div>
          </div>
          <button className={styles.openBtn}>
            Claim Now
            <FaArrowRight />
          </button>
        </div>
      </div>
      {/*
      <div className={styles.rightSection}>
        <button className={styles.openBtn}>
          Claim Now <FaArrowRight />
        </button>
      </div>
      */}
    </div>
  );
}

export default DailyBonusBanner;
