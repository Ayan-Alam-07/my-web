import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaBolt, FaCoins, FaLock, FaUnlock } from "react-icons/fa";
import styles from "./TapEarn.module.css";
import CommonNavArr from "../../../Components/CommonComponents/CommonNavArr";

import TapCoin from "../components/TapCoin";
import TapStats from "../components/TapStats";
import RewardPopup from "../components/RewardPopup";
import LockOverlay from "../components/LockOverlay";

const REWARDS = [
  { label: "+1.8 VES", value: 1.8 },
  { label: "+50 TOKEN", value: 0.5 },
  { label: "+0.6 GEMS", value: 0.6 },
  { label: "+2 SPINS", value: 0 },
];

export default function TapEarn() {
  const [taps, setTaps] = useState(0);
  const [spins, setSpins] = useState(0);
  const [tokens, setTokens] = useState(0);
  const [popups, setPopups] = useState([]);
  const [locked, setLocked] = useState(false);
  const [lockShake, setLockShake] = useState(false);
  const [lockFlash, setLockFlash] = useState(false);
  const [cooldown, setCooldown] = useState(200);
  const tapsSinceLock = useRef(0);

  // Auto cooldown countdown
  useEffect(() => {
    if (!locked) return;
    const t = setInterval(() => {
      setCooldown((c) => {
        if (c <= 1) {
          setLocked(false);
          return 0;
        }
        return c - 1;
      });
    }, 1000);
    return () => clearInterval(t);
  }, [locked]);

  // Floating ambient particles
  const particles = useMemo(
    () =>
      Array.from({ length: 28 }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: 2 + Math.random() * 5,
        dur: 6 + Math.random() * 10,
        delay: Math.random() * 6,
      })),
    [],
  );

  const handleTap = ({ x, y }) => {
    if (locked) {
      setLockShake(true);
      setLockFlash(true);
      setTimeout(() => setLockShake(false), 500);
      setTimeout(() => setLockFlash(false), 500);
      if (navigator.vibrate) navigator.vibrate(60);
      return;
    }

    const reward = REWARDS[Math.floor(Math.random() * REWARDS.length)];
    setTaps((t) => t + 1);
    if (reward.label.includes("SPIN")) setSpins((s) => s + 2);
    else setTokens((t) => +(t + reward.value).toFixed(2));

    const id = Date.now() + Math.random();
    setPopups((p) => [...p, { id, x, y, label: reward.label }]);
    setTimeout(() => setPopups((p) => p.filter((it) => it.id !== id)), 1500);

    if (navigator.vibrate) navigator.vibrate(15);

    tapsSinceLock.current += 1;
    if (tapsSinceLock.current >= 25) {
      tapsSinceLock.current = 0;
      setCooldown(180);
      setLocked(true);
    }
  };

  return (
    <div className="container-fluid px-0">
      <CommonNavArr id={21} navigation={"/Home"} />
      <div className={styles.page}>
        <div className="container px-1 px-md-3">
          <div className={`${styles.bgOrb} ${styles.orb1}`} />
          <div className={`${styles.bgOrb} ${styles.orb2}`} />
          <div className={`${styles.bgOrb} ${styles.orb3}`} />

          {particles.map((p) => (
            <motion.span
              key={p.id}
              className={styles.particle}
              style={{
                left: p.left + "%",
                top: p.top + "%",
                width: p.size,
                height: p.size,
              }}
              animate={{ y: [0, -40, 0], opacity: [0.2, 1, 0.2] }}
              transition={{
                duration: p.dur,
                delay: p.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}

          <div className={styles.container}>
            <div className={styles.header}>
              <div className={styles.brand}>
                <div className={styles.brandIcon}>
                  <FaBolt />
                </div>
                <div>
                  <div className={styles.brandTitle}>Tap & Earn</div>
                  <span className={styles.brandSub}>WEB3 REWARD ENGINE</span>
                </div>
              </div>
              <div className={styles.balancePill}>
                <FaCoins style={{ color: "#ffd76a" }} />
                <span
                  style={{ color: "#cfd3e1", fontSize: 12, letterSpacing: 1 }}
                >
                  BALANCE
                </span>
                <span className={styles.balanceVal}>
                  {tokens.toFixed(2)} VES
                </span>
              </div>
            </div>

            <TapStats
              taps={taps}
              spins={spins}
              tokens={tokens}
              locked={locked}
            />

            <div className={styles.tapWrap}>
              <TapCoin onTap={handleTap} locked={locked}>
                <AnimatePresence>
                  {locked && (
                    <LockOverlay
                      shake={lockShake}
                      flash={lockFlash}
                      cooldown={cooldown}
                    />
                  )}
                </AnimatePresence>

                <AnimatePresence>
                  {popups.map((p) => (
                    <RewardPopup key={p.id} {...p} />
                  ))}
                </AnimatePresence>
              </TapCoin>

              <div className={styles.tapHelp}>
                {locked ? (
                  <span style={{ color: "#ff9aa3" }}>
                    <FaLock style={{ marginRight: 8 }} />
                    Reward engine cooling down…
                  </span>
                ) : (
                  <span>
                    <FaUnlock style={{ marginRight: 8, color: "#6dffb0" }} />
                    Tap the coin to mint rewards
                  </span>
                )}
              </div>
            </div>

            <div className={styles.bottomLabel}>
              <motion.div
                className={styles.bottomBadge}
                animate={{
                  boxShadow: [
                    "0 10px 40px rgba(255,170,50,0.18)",
                    "0 10px 60px rgba(255,170,50,0.35)",
                    "0 10px 40px rgba(255,170,50,0.18)",
                  ],
                }}
                transition={{
                  duration: 2.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <span className={styles.pulseDot} />⚡ PREMIUM REWARD ENGINE
                ACTIVE
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
