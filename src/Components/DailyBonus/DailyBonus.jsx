import styles from "./DailyBonus.module.css";
import axios from "axios";
import { useList } from "../../Context/ContextStore";
import { FaGift, FaCheckCircle, FaPlayCircle, FaCoins } from "react-icons/fa";
import { showError, showSuccess } from "../../utils/Toast";
import CommonNavArr from "../CommonComponents/CommonNavArr";
import { GiDiamonds } from "react-icons/gi";

function DailyBonus() {
  const { isLoading, setIsLoading } = useList();

  const claimBonus = async () => {
    try {
      setIsLoading(true);

      const res = await axios.post("/api/daily-bonus/start");

      const taskId = res.data.taskId;

      window.open("CPA_OFFER_LINK", "_blank");

      showSuccess("Complete the task to receive your bonus");

      // simulation example
      setTimeout(async () => {
        const verify = await axios.post("/api/daily-bonus/verify", {
          taskId,
          status: "success",
        });

        showSuccess(`🎉 ${verify.data.reward} Gems Credited!`);
      }, 5000);
    } catch (err) {
      showError(err.response?.data || "Bonus failed");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container-fluid px-0">
      <CommonNavArr id={14} navigation={"/Home"} />
      <div className="container">
        <div className={styles.bonusWrapper}>
          <div className={styles.bonusCard}>
            <div className={styles.header}>
              <FaGift className={styles.iconGift} />

              <h2>Daily Bonus</h2>

              <p>Claim your daily reward by completing a quick offer.</p>
            </div>

            <div className={styles.rewardSection}>
              <GiDiamonds className={styles.coinIcon} />

              <div>
                <span className={styles.rewardTitle}>Reward</span>

                <h3>
                  Up to{" "}
                  <span
                    style={{
                      color: "#a02be9",
                      filter: "drop-shadow(0 0 6px rgba(160, 32, 240, 0.6))",
                      fontWeight: "800",
                      letterSpacing: "1px",
                    }}
                  >
                    25
                  </span>{" "}
                  Gems
                </h3>
              </div>
            </div>

            <div className={styles.steps}>
              <h4>Steps to claim</h4>

              <ul>
                <li>
                  <FaPlayCircle className={styles.stepIcon} />
                  Click the claim button
                </li>

                <li>
                  <FaCheckCircle className={styles.stepIcon} />
                  Install & open the app for 2 minutes
                </li>

                <li>
                  <FaCoins className={styles.stepIcon} />
                  Receive your reward instantly
                </li>
              </ul>
            </div>

            <button
              onClick={claimBonus}
              disabled={isLoading}
              className={styles.claimBtn}
            >
              {isLoading ? "Processing..." : "Claim Daily Bonus"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DailyBonus;
