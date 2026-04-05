// src/Components/Bonus/BonusBody.jsx

import { useEffect, useState } from "react";
import style from "./BonusBody.module.css";
import { GiProfit } from "react-icons/gi";
import {
  claimBonusReward,
  getBonusRewards,
} from "../../../services/bounsService";
import { showError, showSuccess } from "../../../utils/Toast";
import { useList } from "../../../Context/ContextStore";
import { TiTick } from "react-icons/ti";

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
    <div className="container-fluid mt-4 pt-1">
      <div className="container">
        <div className="row mb-4">
          {watchBonus.map((bonus) => {
            const completed = Math.min(doneWatch, bonus.reqWatch);
            const progress = (completed / bonus.reqWatch) * 100;
            const isUnlocked = doneWatch >= bonus.reqWatch;
            const isClaimed = bonus.claimed;

            return (
              <div
                key={bonus._id}
                className="col-12 col-sm-6 col-lg-3 mb-4 mb-lg-3"
              >
                <div className={style.bonusCont}>
                  <div className={style.bonusinfoPointCont}>
                    <p className={style.adPara}>
                      <span className={style.adText}>Ad</span> Bonus
                    </p>

                    <span className={style.bonusCoin}>
                      + {bonus.bonusCoin} <span>VEs</span>
                    </span>
                  </div>

                  <div className={style.progressWrap}>
                    <div className={style.progressText}>
                      {Math.round(progress)}%
                    </div>

                    <div className={style.progressBar}>
                      <div
                        className={style.progressFill}
                        style={{ width: `${progress}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className={style.bonusAdCount}>
                    <h4 className={style.bonusCount}>
                      <span className={style.completedBonus}>{completed}</span>{" "}
                      /{" "}
                      <span className={style.bonusReqWatch}>
                        {bonus.reqWatch}
                      </span>
                    </h4>

                    <button
                      className={`${style.claimBtn} ${
                        isUnlocked && !isClaimed ? style.active : ""
                      } ${!isUnlocked ? style.locked : ""} ${isClaimed ? style.bonusClaimed : ""}`}
                      onClick={() => handleClaim(bonus)}
                      disabled={loadingId === bonus._id || isClaimed}
                    >
                      {isClaimed ? <TiTick size={18} /> : <GiProfit />}

                      {isClaimed
                        ? "Claimed"
                        : loadingId === bonus._id
                          ? "Claiming..."
                          : isUnlocked
                            ? "Claim"
                            : "Locked"}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BonusBody;
