import styles from "./StakingBanner.module.css";
import { useNavigate } from "react-router-dom";
import {
  FaShieldHalved,
  FaArrowTrendUp,
  FaLock,
  FaCoins,
  FaPercent,
  FaChartSimple,
  FaWallet,
} from "react-icons/fa6";
import { RiSecurePaymentFill } from "react-icons/ri";
import RewardArrow from "../CommonComponents/RewardArrow";
import { useEffect, useState } from "react";
import AnimatedCounter from "../CommonComponents/AnimatedCounter";

export default function StakingBanner() {
  const navigate = useNavigate();

  const rings = Array.from({ length: 18 });
  const particles = ["+30%", "+1500", "Interest", "Locked", "APY"];

  const [currentIndex, setCurrentIndex] = useState(0);

  const plans = [
    { amount: 8000, interest: 25 },
    { amount: 25000, interest: 25 },
    { amount: 40000, interest: 22 },
    { amount: 5000, interest: 18 },
    { amount: 55000, interest: 25 },
    { amount: 80000, interest: 40 },
    { amount: 12000, interest: 40 },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % plans.length);
    }, 6100);

    return () => clearInterval(interval);
  }, []);

  const plan = plans[currentIndex];

  const stakeAmount = plan.amount;
  const interest = plan.interest;

  const returns = Math.round(stakeAmount * (1 + interest / 100));
  const features = [
    {
      title: "10% Monthly APY",
      icon: FaPercent,
      color: "#10B981",
    },
    {
      title: "Protected Vault",
      icon: FaShieldHalved,
      color: "#3B82F6",
    },
    {
      title: "Instant Unlock",
      icon: FaWallet,
      color: "#A855F7",
    },
    {
      title: "Compound Growth",
      icon: FaArrowTrendUp,
      color: "#FBBF24",
    },
  ];

  return (
    <section
      className={styles.stakingBanner}
      onClick={() => navigate("/staking")}
    >
      <div className={styles.topBadge}>
        <RiSecurePaymentFill size={16} className="me-1" /> SECURED{" "}
        <span className={styles.topBadgeHide}>STAKING</span>
      </div>

      <div className={`${styles.visual} ${styles.hideVisual}`}>
        <div className={styles.ringArea}>
          {rings.map((_, index) => (
            <span
              key={index}
              className={`${styles.ring}

${index % 4 === 0 ? styles.activeRing : ""}

`}
            />
          ))}
        </div>

        <div className={styles.vault}>
          <div className={styles.vaultTop} />

          <div className={styles.vaultBody}>
            <div className={styles.lockCircle}>
              <FaLock />
            </div>
          </div>
        </div>

        <div className={styles.coin}>
          <FaCoins />
        </div>

        <div className={styles.graph}>
          <div />
          <div />
          <div />
          <div />
          <div />
        </div>

        <div className={styles.float1}>{particles[0]}</div>

        <div className={styles.float2}>{particles[1]}</div>

        <div className={styles.float3}>{particles[2]}</div>

        <div className={styles.float4}>{particles[3]}</div>

        <div className={styles.float5}>{particles[4]}</div>
      </div>

      <span className={styles.tabContainer}>
        <div className={styles.visual}>
          <div className={styles.ringArea}>
            {rings.map((_, index) => (
              <span
                key={index}
                className={`${styles.ring}

${index % 4 === 0 ? styles.activeRing : ""}

`}
              />
            ))}
          </div>

          <div className={styles.vault}>
            <div className={styles.vaultTop} />

            <div className={styles.vaultBody}>
              <div className={styles.lockCircle}>
                <FaLock />
              </div>
            </div>
          </div>

          <div className={styles.coin}>
            <FaCoins />
          </div>

          <div className={styles.graph}>
            <div />
            <div />
            <div />
            <div />
            <div />
          </div>

          <div className={styles.float1}>{particles[0]}</div>

          <div className={styles.float2}>{particles[1]}</div>

          <div className={styles.float3}>{particles[2]}</div>

          <div className={styles.float4}>{particles[3]}</div>

          <div className={styles.float5}>{particles[4]}</div>
        </div>

        <div className={styles.tabContent}>
          <h2 className={styles.heding}>
            Stake <span>VEs</span>
          </h2>

          <p className={styles.description}>
            Securely stake your VEs and earn a guaranteed{" "}
            <strong>
              <span className={styles.percentGlow}>
                <AnimatedCounter
                  value={interest}
                  formatter={(v) => `${v.toFixed(0)}%`}
                />
              </span>{" "}
            </strong>{" "}
            return with automatic compounding
          </p>

          <p className={`${styles.description} ${styles.mobDescription}`}>
            Secure your VEs & earn{" "}
            <strong>
              <span className={styles.percentGlow}>
                <AnimatedCounter
                  value={interest}
                  formatter={(v) => `${v.toFixed(0)}%`}
                />
              </span>{" "}
            </strong>{" "}
            guaranteed returns
          </p>

          <div className={`${styles.features} ${styles.tabFeatures}`}>
            {features.map((item, idx) => (
              <div
                key={item.title}
                className={`${styles.feature} ${idx === features.length - 3 || idx === features.length - 1 ? styles.hide : ""}`}
              >
                <item.icon
                  style={{
                    color: item.color,
                  }}
                />

                <span>{item.title}</span>
              </div>
            ))}
          </div>
        </div>
      </span>

      <div className={styles.content}>
        <div className={styles.label}>PASSIVE INCOME</div>

        <h2 className={styles.heding}>
          Stake Your <span>VEs</span>
        </h2>

        <p className={styles.description}>
          Lock your VEs securely inside the Vault and earn a guaranteed{" "}
          <strong>
            <span className={styles.percentGlow}>
              <AnimatedCounter
                value={interest}
                formatter={(v) => `${v.toFixed(0)}%`}
              />
            </span>{" "}
          </strong>{" "}
          staking return while your balance compounds automatically.
        </p>

        <div className={styles.preview}>
          <div className={styles.previewCard}>
            <span className={styles.prevLabel}>Stake</span>

            <strong>
              <AnimatedCounter
                value={stakeAmount}
                formatter={(v) => `${Math.round(v).toLocaleString()} `}
              />
              <span className={styles.prevUnit}>VEs</span>
            </strong>
          </div>

          <div className={styles.previewArrow}>
            <FaArrowTrendUp />
          </div>

          <div className={styles.previewCard}>
            <span className={styles.prevLabel}>Returns</span>

            <strong>
              <AnimatedCounter
                value={returns}
                formatter={(v) => `${Math.round(v).toLocaleString()} `}
              />
              <span className={styles.prevUnit}>VEs</span>
            </strong>
          </div>
        </div>

        <div className={styles.features}>
          {features.map((item, idx) => (
            <div
              key={item.title}
              className={`${styles.feature} ${idx === features.length - 3 ? styles.hide : ""}`}
            >
              <item.icon
                style={{
                  color: item.color,
                }}
              />

              <span>{item.title}</span>
            </div>
          ))}
        </div>

        <button className={styles.cta}>
          <FaChartSimple />
          Start Staking
          <RewardArrow />
        </button>
      </div>
    </section>
  );
}
