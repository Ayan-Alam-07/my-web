import { useEffect, useState } from "react";
import styles from "./BonusBody.module.css";
import SecFooter from "../../CommonComponents/SecFooter";
import { GiProfit } from "react-icons/gi";
import { FaCheck, FaLock, FaShieldAlt, FaCoins } from "react-icons/fa";
import { BsLightningFill } from "react-icons/bs";
import { TiTick } from "react-icons/ti";

import {
  claimBonusReward,
  getBonusRewards,
} from "../../../services/bounsService";
import { showError, showSuccess } from "../../../utils/Toast";
import { useList } from "../../../Context/ContextStore";

const BonusBody = () => {
  const { fetchCoins, setIsLoading } = useList();

  const [doneWatch, setDoneWatch] = useState(0);
  const [watchBonus, setWatchBonus] = useState([]);
  const [loadingId, setLoadingId] = useState("");

  useEffect(() => {
    setIsLoading(true);
    const fetchBonusRewards = async () => {
      try {
        const data = await getBonusRewards();
        console.log(data);
        setDoneWatch(data?.todayAdsWatched || 0);
        setWatchBonus(data?.rewards || []);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBonusRewards();
  }, []);

  const handleClaim = async (bonus) => {
    setIsLoading(true);
    try {
      if (doneWatch < bonus.reqWatch) {
        return showError(
          `Watch at least ${bonus.reqWatch} ads to claim this reward`,
        );
      }

      setLoadingId(bonus._id);

      const response = await claimBonusReward(bonus._id);

      fetchCoins(false);
      showSuccess(response?.message || "Bonus claimed successfully");

      setWatchBonus((prev) =>
        prev.map((item) =>
          item._id === bonus._id ? { ...item, claimed: true } : item,
        ),
      );
    } catch (error) {
      console.error(error);

      showError(
        error?.response?.data?.message || "Failed to claim bonus reward",
      );
    } finally {
      setLoadingId("");
      setIsLoading(false);
    }
  };

  return (
    <div className="container-fluid px-0 px-md-2">
      <div className="container mt-3 pt-1">
        <div className={styles.bonusContainer}>
          <div className={styles.bonusHeader}>
            <h1 className={styles.bonusTitle}>PRIZE VAULT</h1>
            <div className={styles.bonusSubtitle}>{doneWatch} Ads Watched</div>
          </div>

          <div className={styles.ladderContainer}>
            <div className={styles.energyRail}>
              {watchBonus.map((bonus) => {
                const isUnlocked = doneWatch >= bonus.reqWatch;

                const isClaimed = bonus.claimed;

                return (
                  <div
                    key={`node-${bonus._id}`}
                    className={`
          ${styles.railNode}
          ${
            isClaimed
              ? styles.completedNode
              : isUnlocked
                ? styles.activeNode
                : ""
          }
        `}
                  />
                );
              })}
            </div>

            <div className={styles.rewardsStack}>
              {watchBonus.map((bonus) => {
                const isUnlocked = doneWatch >= bonus.reqWatch;

                const isClaimed = bonus.claimed;

                const isLoading = loadingId === bonus._id;

                console.group(
                  `%c[PRIZE VAULT] ${bonus._id}`,
                  "color:#FFD700;font-weight:bold",
                );

                console.log("bonusCoin:", bonus.bonusCoin);

                console.log("reqWatch:", bonus.reqWatch);

                console.log("doneWatch:", doneWatch);

                console.log("claimed:", isClaimed);

                console.log("unlocked:", isUnlocked);

                console.groupEnd();

                return (
                  <div
                    key={bonus._id}
                    className={`${styles.token}
          ${
            isClaimed
              ? styles.claimed
              : isUnlocked
                ? styles.active
                : styles.locked
          }`}
                  >
                    {/* <div className={styles.tokenGlow} /> */}

                    <div className={styles.tokenVisual}>
                      <div className={styles.tokenLabel}>
                        {isClaimed
                          ? "COLLECTED"
                          : isUnlocked
                            ? "UNLOCKED"
                            : "LOCKED"}
                      </div>

                      <div className={styles.tokenAmount}>
                        <span className={styles.tokenValue}>
                          +{bonus.bonusCoin}
                        </span>

                        <span className={styles.tokenCurrency}>VEs</span>
                      </div>
                    </div>

                    <div className={styles.tokenAction}>
                      {isClaimed ? (
                        <button disabled className={styles.claimedBadge}>
                          <TiTick />
                          Owned
                        </button>
                      ) : isLoading ? (
                        <button disabled className={styles.btnClaim}>
                          Claiming...
                        </button>
                      ) : isUnlocked ? (
                        <button
                          onClick={() => handleClaim(bonus)}
                          className={styles.btnClaim}
                        >
                          <GiProfit />
                          Collect
                        </button>
                      ) : (
                        <div
                          className={`${styles.tokenLabel} ${styles.btnStatus}`}
                        >
                          <FaLock size={20} className="me-2" />
                          {isClaimed
                            ? "COLLECTED"
                            : isUnlocked
                              ? "UNLOCKED"
                              : "LOCKED"}
                        </div>
                      )}
                      <div className={styles.tokenReq}>
                        {isClaimed
                          ? "Achievement Unlocked"
                          : isUnlocked
                            ? "Ready To Collect"
                            : `${Math.max(
                                0,
                                bonus.reqWatch - doneWatch,
                              )} Ads Required`}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <SecFooter
          mt={30}
          mb={35}
          name={"Bonus"}
          link={"/help-center/earning/watch-ad-bonuses"}
        />
      </div>
    </div>
  );
};

export default BonusBody;
