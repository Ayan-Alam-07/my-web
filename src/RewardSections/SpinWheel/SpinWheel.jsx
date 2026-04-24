// SpinWheel.jsx

import { useEffect, useMemo, useState } from "react";
import styles from "./SpinWheel.module.css";
import {
  getSpinDetails,
  playSpin,
  claimSpinReward,
  discardSpinReward,
} from "../../services/spinService";
import { FaCoins, FaGift, FaBolt, FaRedo } from "react-icons/fa";
import { useList } from "../../Context/ContextStore";
import CommonNavArr from "../../Components/CommonComponents/CommonNavArr";
import { showError } from "../../utils/Toast";
import CirLoader from "../../Components/CommonComponents/CirLoader";

const SpinWheel = () => {
  const [rewards, setRewards] = useState([]);
  const [spins, setSpins] = useState(0);
  const [rotation, setRotation] = useState(0);
  const [selectedReward, setSelectedReward] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const { isLoading, setIsLoading } = useList();
  const [isFetchSpin, setIsFetchSpin] = useState(false);

  const [isSpinning, setIsSpinning] = useState(false);

  useEffect(() => {
    fetchSpinDetails();
    // console.log(rewards);
  }, []);

  const fetchSpinDetails = async () => {
    setIsLoading(true);
    setIsFetchSpin(true);
    try {
      const response = await getSpinDetails();

      setRewards(response.data.rewards || []);
      setSpins(response.data.availableSpins || 0);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
      setIsFetchSpin(false);
    }
  };

  const segmentAngle = useMemo(() => {
    return rewards.length ? 360 / rewards.length : 0;
  }, [rewards]);

  const handleSpin = async () => {
    if (spins <= 0) {
      showError(`You have ${spins} spin left. Earn spins to claim rewards.`);
      return;
    }

    if (isLoading || isSpinning || rewards.length === 0) return;

    setIsLoading(true);
    setIsSpinning(true);
    setSelectedReward(null);
    setShowPopup(false);

    try {
      const response = await playSpin();
      const reward = response.data.reward;

      // const rewardIndex = rewards.findIndex((item) => item._id === reward._id);
      const rewardIndex = rewards.findIndex(
        (item) => item.order === response.data.rewardOrder,
      );
      setIsLoading(false);

      if (rewardIndex === -1) {
        throw new Error("Reward not found in wheel data");
      }

      const sliceAngle = 360 / rewards.length;
      const rewardCenterAngle = rewardIndex * sliceAngle + sliceAngle / 2;
      const pointerAngle = 0;
      const randomSpins = Math.floor(Math.random() * 5) + 6;
      const randomDuration = Math.floor(Math.random() * 3) + 3;
      const stopAngle = 360 - rewardCenterAngle + pointerAngle;
      const normalizedRotation = rotation % 360;
      const deltaRotation =
        360 * randomSpins + ((stopAngle - normalizedRotation + 360) % 360);
      const finalRotation = rotation + deltaRotation;

      const wheelElement = document.querySelector(`.${styles.wheel}`);
      if (wheelElement) {
        wheelElement.style.transition = `transform ${randomDuration}s cubic-bezier(0.08, 0.85, 0.18, 1)`;
      }

      setRotation(finalRotation);

      setTimeout(
        () => {
          setSelectedReward(reward);
          setShowPopup(true);
          setIsLoading(false);
          setIsSpinning(false);
        },
        randomDuration * 1000 + 100,
      );
      setSpins(response.data.availableSpins);
    } catch (error) {
      console.log("Spin error:", error?.response?.data || error.message);
      showError(error?.response?.data?.message || "Spin failed");
      setIsLoading(false);
      setIsSpinning(false);
    }
  };

  const handleClaimReward = async () => {
    try {
      setIsLoading(true);
      const response = await claimSpinReward();
      setSpins(response.data.availableSpins);
      setShowPopup(false);
      setSelectedReward(null);
    } catch (error) {
      console.log(
        "Claim reward error:",
        error?.response?.data || error.message,
      );
      showError(error?.response?.data?.message || "Failed to claim reward");
    } finally {
      setIsLoading(false);
    }
  };

  const handleDiscardReward = async () => {
    try {
      setIsLoading(true);
      await discardSpinReward();
      setShowPopup(false);
      setSelectedReward(null);
    } catch (error) {
      console.log(
        "Discard reward error:",
        error?.response?.data || error.message,
      );
      showError(error?.response?.data?.message || "Failed to discard reward");
    } finally {
      setIsLoading(false);
    }
  };

  const getRewardIcon = (reward) => {
    if (reward.icon) return reward.icon;

    const rewardType = reward.rewardType || reward.type;

    switch (rewardType) {
      case "coins":
        return <FaCoins />;
      case "xp":
        return <FaBolt />;
      case "free_spin":
        return <FaRedo />;
      case "voucher":
        return <FaGift />;
      default:
        return "🎁";
    }
  };

  return (
    <div className="container-fluid px-0">
      <CommonNavArr id={18} navigation={"/Home"} />

      <div className={styles.page}>
        <div className="container px-3">
          <div className={styles.topSection}>
            <div>
              <h1 className={styles.title}>Turn Luck Into Rewards</h1>
              <p className={styles.subtitle}>
                Spin daily and win premium rewards
              </p>
            </div>

            <div className={styles.spinsCard}>
              <span>Available Spins</span>
              <h2>{spins}</h2>
            </div>
          </div>

          {!isFetchSpin ? (
            <>
              <div className={styles.wheelSection}>
                <div className={styles.pointer}></div>

                <div
                  className={styles.wheel}
                  style={{
                    transform: `rotate(${rotation}deg)`,
                    transition:
                      "transform 5.5s cubic-bezier(0.12, 0.8, 0.18, 1)",
                  }}
                >
                  {rewards.map((reward, index) => {
                    const angle = 360 / rewards.length;
                    return (
                      <div
                        key={reward._id}
                        className={styles.slice}
                        style={{
                          transform: `rotate(${index * angle}deg)`,
                        }}
                      >
                        <div
                          className={styles.sliceShape}
                          style={{
                            background: reward.color,
                          }}
                        >
                          <div className={styles.sliceInner}>
                            <span
                              className={styles.sliceLabel}
                              style={{
                                fontSize:
                                  index === 4 || index === 5 ? "15px" : "",
                              }}
                            >
                              <span className="d-inline-block me-1">
                                {getRewardIcon(reward)}
                              </span>
                              <span>
                                {index === 8
                                  ? "Loose"
                                  : index === 4 || index === 5
                                    ? `₹ ${reward.amount} RS`
                                    : index === 3
                                      ? "1 Spin"
                                      : reward.title}
                              </span>
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  })}

                  <div className={styles.centerCircle}>
                    <button
                      className={styles.spinButton}
                      onClick={handleSpin}
                      disabled={isLoading || spins <= 0 || isSpinning}
                    >
                      {isSpinning ? "ZoOo" : "SPIN"}
                    </button>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-center align-items-center">
                <button
                  disabled={isSpinning}
                  className={`${styles.spinWheelBtn} ${spins <= 0 && styles.outOfspin}`}
                  onClick={handleSpin}
                >
                  {isSpinning
                    ? "Wait for Reward"
                    : spins <= 0
                      ? "Out of spin"
                      : "Spin & Win"}
                </button>
              </div>
            </>
          ) : (
            <CirLoader para={"Fetching the Spin Rewards"} />
          )}

          <div>
            <h5 className="mb-4">Rewards Probabilities: </h5>
            <div className={styles.rewardCards}>
              {rewards.map((reward, idx) => (
                <div key={reward._id} className={styles.rewardCard}>
                  <div
                    className={styles.rewardCardIcon}
                    style={{ background: reward.color }}
                  >
                    {getRewardIcon(reward)}
                  </div>

                  <div className="d-flex justify-content-between align-items-center align-items-lg-start flex-column">
                    <h4>
                      {idx === 8
                        ? "Lose"
                        : idx === 4 || idx === 5
                          ? `Gift Card ₹${reward.amount}`
                          : idx === 3
                            ? "Free Spin"
                            : reward.title}
                    </h4>
                    <p className="m-0">{reward.probability}% Chance</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {showPopup && selectedReward && (
            <div className={styles.popupOverlay}>
              <div className={styles.popupCard}>
                <div className={styles.popupGlow}></div>

                <div
                  className={styles.popupRewardIcon}
                  style={{ background: selectedReward.color }}
                >
                  <span className="d-inline-block mt-2">
                    {getRewardIcon(selectedReward)}
                  </span>
                </div>

                <h2>
                  {selectedReward.type === "empty"
                    ? "Unfortunately"
                    : "Congratulations"}
                </h2>
                <p>
                  {selectedReward.type === "empty" ? "You Lose" : "You Won"}
                </p>

                <h1>{selectedReward.title}</h1>

                <button
                  className={` ${styles.popupButton} ${styles.discardRwd}`}
                  onClick={handleDiscardReward}
                  disabled={isLoading}
                >
                  No Thanks
                </button>

                <button
                  className={` mt-3 ${styles.popupButton}`}
                  onClick={handleClaimReward}
                  disabled={isLoading}
                >
                  Claim Reward
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SpinWheel;
