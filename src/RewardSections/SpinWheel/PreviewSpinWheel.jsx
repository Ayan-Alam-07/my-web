// PreviewSpinWheel.jsx

import RewardsBase from "../RewardsBase/RewardsBase";
import styles from "./PreviewSpinWheel.module.css";
import { RotateCw, Coins, Gift, Sparkles } from "lucide-react";

const PreviewSpinWheel = () => {
  const icon = <RotateCw size={24} />;

  return (
    <RewardsBase
      icon={icon}
      title={"Spin The Wheel"}
      badge={"Spin & Win"}
      btnText={"Spin & Earn Rewards"}
      cardClass={"spinWheelCard"}
      glowClass={"spinWheelGlow"}
      iconBoxClass={"spinWheelIconBox"}
      badgeClass={"spinWheelBadge"}
      btnClass={"spinWheelBtn"}
      navigation={"spin-wheel"}
    >
      <div className={styles.middle}>
        <div className={styles.wheelWrapper}>
          <div className={styles.pointer}></div>

          <div className={styles.wheel}>
            <div className={styles.centerCircle}>
              <RotateCw size={18} />
            </div>
          </div>
        </div>

        <div className={styles.rewardStack}>
          <div className={styles.rewardChip}>
            <Coins size={14} />
            <span>500 VEs</span>
          </div>

          <div className={styles.rewardChip}>
            <Gift size={14} />
            <span>Gift Card</span>
          </div>

          <div className={styles.rewardChip}>
            <Sparkles size={14} />
            <span>Mystery Box</span>
          </div>
        </div>
      </div>
    </RewardsBase>
  );
};

export default PreviewSpinWheel;
