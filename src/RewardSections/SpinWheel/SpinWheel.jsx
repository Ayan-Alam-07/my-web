// SpinWheel.jsx

import { useEffect, useMemo, useState } from "react";
import styles from "./SpinWheel.module.css";
import { getSpinDetails, playSpin } from "../../services/spinService";
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
  }, []);

  const fetchSpinDetails = async () => {
    setIsLoading(true);
    setIsFetchSpin(true);
    try {
      const response = await getSpinDetails();
      setRewards(response.data.rewards || []);
      setSpins(response.data.totalSpins || 0);
      // console.log(rewards);
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
    if (spins <= 0)
      showError(`you have ${spins} spin, Earn spins to claim Rewards`);
    if (isLoading || spins <= 0 || rewards.length === 0) return;
    setIsLoading(true);
    try {
      setIsSpinning(true);

      setSelectedReward(null);
      setShowPopup(false);

      const response = await playSpin();
      setIsLoading(false);
      const reward = response.data.reward;

      const rewardIndex = rewards.findIndex((item) => item._id === reward._id);

      if (rewardIndex === -1) {
        setIsLoading(false);
        return;
      }

      const sliceAngle = 360 / rewards.length;

      // exact center angle of backend selected reward
      const rewardCenterAngle = rewardIndex * sliceAngle + sliceAngle / 2;

      // pointer is fixed at top center
      const pointerAngle = 0;

      // random extra spins between 6 and 10
      const randomSpins = Math.floor(Math.random() * 5) + 6;

      // random animation duration between 2s and 4s
      const randomDuration = Math.floor(Math.random() * 3) + 3;

      // final angle where selected reward should stop under pointer
      const stopAngle = 360 - rewardCenterAngle + pointerAngle;

      // normalize current rotation
      const normalizedRotation = rotation % 360;

      // make sure wheel continues forward only
      const deltaRotation =
        360 * randomSpins + ((stopAngle - normalizedRotation + 360) % 360);

      const finalRotation = rotation + deltaRotation;

      const wheelElement = document.querySelector(`.${styles.wheel}`);

      if (wheelElement) {
        wheelElement.style.transition = `transform ${randomDuration}s cubic-bezier(0.08, 0.85, 0.18, 1)`;
      }

      setRotation(finalRotation);

      setSpins(response.data.remainingSpins);

      setTimeout(
        () => {
          setSelectedReward(reward);
          setShowPopup(true);
          setIsLoading(false);
          setIsSpinning(false);
        },
        randomDuration * 1000 + 100,
      );
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  const getRewardIcon = (reward) => {
    if (reward.icon) return reward.icon;

    switch (reward.rewardType) {
      case "VE":
        return <FaCoins />;
      case "XP":
        return <FaBolt />;
      case "FREE_SPIN":
        return <FaRedo />;
      case "GIFT_VOUCHER":
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
                                    ? `₹ ${reward.value} RS`
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
                      {isLoading ? "ZoOo" : "SPIN"}
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
                          ? `Gift Card ₹${reward.value}`
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
                  {selectedReward.rewardType === "LOSE"
                    ? "Unfortunately"
                    : "Congratulations"}
                </h2>
                <p>
                  {selectedReward.rewardType === "LOSE"
                    ? "You Lose"
                    : "You Won"}
                </p>

                <h1>{selectedReward.title}</h1>

                <button
                  className={styles.popupButton}
                  onClick={() => setShowPopup(false)}
                >
                  Awesome
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
