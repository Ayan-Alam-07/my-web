import React, { useState, useEffect, useRef, useCallback } from "react";
import styles from "./DailyBonus.module.css";
import CommonNavArr from "../CommonComponents/CommonNavArr";
import SecFooter from "../CommonComponents/SecFooter";
import GemIcon from "../CommonComponents/GemIcon";

const CheckIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none">
    <circle cx="10" cy="10" r="10" fill="url(#checkBg)" />
    <path
      d="M6 10L9 13L14 7"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <defs>
      <linearGradient id="checkBg" x1="0" y1="0" x2="20" y2="20">
        <stop offset="0%" stopColor="#10b981" />
        <stop offset="100%" stopColor="#059669" />
      </linearGradient>
    </defs>
  </svg>
);

const ClockIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <circle
      cx="10"
      cy="10"
      r="8"
      stroke="#f59e0b"
      strokeWidth="1.5"
      fill="none"
    />
    <path
      d="M10 6V10L13 12"
      stroke="#f59e0b"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

const DownloadIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path
      d="M10 3V13M10 13L6 9M10 13L14 9"
      stroke="#f59e0b"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3 14V15C3 16.1046 3.89543 17 5 17H15C16.1046 17 17 16.1046 17 15V14"
      stroke="#f59e0b"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

const CursorIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path
      d="M5 2L5 15L8.5 11.5L12 17L14 16L10.5 10.5L15 10.5L5 2Z"
      fill="#f59e0b"
      stroke="#f59e0b"
      strokeWidth="0.5"
      strokeLinejoin="round"
    />
  </svg>
);

const SparkleIcon = ({ size = 16, color = "#fbbf24" }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
    <path
      d="M8 0L9.5 6.5L16 8L9.5 9.5L8 16L6.5 9.5L0 8L6.5 6.5L8 0Z"
      fill={color}
    />
  </svg>
);

const ShieldIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
    <path
      d="M24 4L6 12V22C6 33.1 13.68 43.44 24 46C34.32 43.44 42 33.1 42 22V12L24 4Z"
      fill="url(#shieldGrad)"
      opacity="0.15"
    />
    <path
      d="M24 4L6 12V22C6 33.1 13.68 43.44 24 46C34.32 43.44 42 33.1 42 22V12L24 4Z"
      stroke="url(#shieldStroke)"
      strokeWidth="1.5"
      fill="none"
    />
    <path
      d="M16 24L22 30L34 18"
      stroke="#10b981"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <defs>
      <linearGradient id="shieldGrad" x1="6" y1="4" x2="42" y2="46">
        <stop offset="0%" stopColor="#10b981" />
        <stop offset="100%" stopColor="#059669" />
      </linearGradient>
      <linearGradient id="shieldStroke" x1="6" y1="4" x2="42" y2="46">
        <stop offset="0%" stopColor="#34d399" />
        <stop offset="100%" stopColor="#047857" />
      </linearGradient>
    </defs>
  </svg>
);

const DAYS = [
  { title: "Mon", value: 15 },
  { title: "Tue", value: 30 },
  { title: "Wed", value: 15 },
  { title: "Thu", value: 45 },
  { title: "Fri", value: 22 },
  { title: "Sat", value: 22 },
  { title: "Sun", value: 100 },
];

const DailyBonus = () => {
  const [claimState, setClaimState] = useState("idle"); // idle | installing | timing | claimed | cooldown
  const [timer, setTimer] = useState(120);
  const [currentDay, setCurrentDay] = useState(0);
  const [streak, setStreak] = useState(0);
  const [totalGems, setTotalGems] = useState(0);
  const [nextClaimTime, setNextClaimTime] = useState(null);
  const [sparkles, setSparkles] = useState([]);
  const [gemPulse, setGemPulse] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const timerRef = useRef(null);
  const cooldownRef = useRef(null);
  const sparkleIntervalRef = useRef(null);

  useEffect(() => {
    const today = new Date().getDay();
    const adjustedDay = today === 0 ? 6 : today - 1;
    setCurrentDay(adjustedDay);
    setStreak(adjustedDay);

    const savedState = localStorage.getItem("dailyBonusState");
    if (savedState) {
      const parsed = JSON.parse(savedState);
      const savedDate = parsed.date;
      const todayStr = new Date().toDateString();
      if (savedDate === todayStr) {
        setClaimState("cooldown");
        setTotalGems(parsed.totalGems || 0);
        const now = new Date();
        const tomorrow = new Date(now);
        tomorrow.setDate(tomorrow.getDate() + 1);
        tomorrow.setHours(0, 0, 0, 0);
        const diff = tomorrow - now;
        setNextClaimTime(diff);
      } else {
        setTotalGems(parsed.totalGems || 0);
        localStorage.removeItem("dailyBonusState");
      }
    }
  }, []);

  useEffect(() => {
    if (claimState === "timing") {
      timerRef.current = setInterval(() => {
        setTimer((prev) => {
          if (prev <= 1) {
            clearInterval(timerRef.current);
            setClaimState("claimed");
            setTotalGems((g) => g + 15);
            setShowSuccess(true);
            setGemPulse(true);
            setTimeout(() => setGemPulse(false), 2000);
            localStorage.setItem(
              "dailyBonusState",
              JSON.stringify({
                date: new Date().toDateString(),
                totalGems: totalGems + 15,
                streak: streak + 1,
              }),
            );
            setTimeout(() => {
              setShowSuccess(false);
              setClaimState("cooldown");
              const now = new Date();
              const tomorrow = new Date(now);
              tomorrow.setDate(tomorrow.getDate() + 1);
              tomorrow.setHours(0, 0, 0, 0);
              setNextClaimTime(tomorrow - now);
            }, 4000);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [claimState, totalGems, streak]);

  useEffect(() => {
    if (claimState === "cooldown" && nextClaimTime) {
      cooldownRef.current = setInterval(() => {
        setNextClaimTime((prev) => {
          if (prev <= 1000) {
            clearInterval(cooldownRef.current);
            setClaimState("idle");
            setTimer(120);
            localStorage.removeItem("dailyBonusState");
            return null;
          }
          return prev - 1000;
        });
      }, 1000);
    }
    return () => {
      if (cooldownRef.current) clearInterval(cooldownRef.current);
    };
  }, [claimState, nextClaimTime]);

  useEffect(() => {
    if (claimState === "claimed") {
      const newSparkles = [];
      for (let i = 0; i < 20; i++) {
        newSparkles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 12 + 8,
          delay: Math.random() * 0.5,
          duration: Math.random() * 1 + 1,
          color: ["#fbbf24", "#f59e0b", "#a78bfa", "#7c3aed", "#c4b5fd"][
            Math.floor(Math.random() * 5)
          ],
        });
      }
      setSparkles(newSparkles);
      sparkleIntervalRef.current = setTimeout(() => setSparkles([]), 4000);
    }
    return () => {
      if (sparkleIntervalRef.current) clearTimeout(sparkleIntervalRef.current);
    };
  }, [claimState]);

  const handleClaim = useCallback(() => {
    if (claimState !== "idle") return;
    setClaimState("installing");
  }, [claimState]);

  const handleInstall = useCallback(() => {
    setClaimState("timing");
    setTimer(120);
  }, []);

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  const formatCooldown = (ms) => {
    if (!ms) return "";
    const totalSec = Math.floor(ms / 1000);
    const h = Math.floor(totalSec / 3600);
    const m = Math.floor((totalSec % 3600) / 60);
    const s = totalSec % 60;
    return `${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  const progressPercent =
    claimState === "timing" ? ((120 - timer) / 120) * 100 : 0;

  const getButtonContent = () => {
    switch (claimState) {
      case "idle":
        return (
          <>
            <GemIcon size={22} className={styles.btnGem} />
            <span>Claim 15 Gems</span>
          </>
        );
      case "installing":
        return (
          <>
            <DownloadIcon />
            <span>Install & Open App</span>
          </>
        );
      case "timing":
        return (
          <>
            <ClockIcon />
            <span>Keep App Open — {formatTime(timer)}</span>
          </>
        );
      case "claimed":
        return (
          <>
            <CheckIcon size={22} />
            <span>Reward Received!</span>
          </>
        );
      case "cooldown":
        return (
          <>
            <ClockIcon />
            <span>Next in {formatCooldown(nextClaimTime)}</span>
          </>
        );
      default:
        return null;
    }
  };

  const getStepStatus = (step) => {
    if (claimState === "idle") return step === 1 ? "active" : "pending";
    if (claimState === "installing")
      return step <= 1 ? "done" : step === 2 ? "active" : "pending";
    if (claimState === "timing") return step <= 2 ? "done" : "active";
    if (claimState === "claimed" || claimState === "cooldown") return "done";
    return "pending";
  };

  return (
    <div className="container-fluid px-0">
      <div className={styles.pageColor}>
        <CommonNavArr id={14} navigation={"/Home"} />
        <div className={styles.page}>
          <div className="container px-3">
            <div className={styles.bgGlow} />
            <div className={styles.bgGlow2} />
            <div className={styles.gridOverlay} />

            <div className={styles.container}>
              {/* Header */}
              <header className={styles.header}>
                <div className={styles.headerLeft}>
                  <div className={styles.logoWrapper}>
                    <GemIcon size={28} />
                    <div className={styles.logoGlow} />
                  </div>
                  <div>
                    <h1 className={styles.logoText}>GemVault</h1>
                    <p className={styles.logoSub}>Daily Rewards</p>
                  </div>
                </div>
                <div className={styles.gemBalance}>
                  <GemIcon size={18} />
                  <span className={styles.gemCount}>{totalGems}</span>
                </div>
              </header>

              {/* Main Card */}
              <div className={styles.mainCard}>
                {sparkles.length > 0 && (
                  <div className={styles.sparkleContainer}>
                    {sparkles.map((s) => (
                      <div
                        key={s.id}
                        className={styles.sparkle}
                        style={{
                          left: `${s.x}%`,
                          top: `${s.y}%`,
                          "--delay": `${s.delay}s`,
                          "--duration": `${s.duration}s`,
                        }}
                      >
                        <SparkleIcon size={s.size} color={s.color} />
                      </div>
                    ))}
                  </div>
                )}

                {/* Top Badge */}
                <div className={styles.badgeRow}>
                  <div className={styles.badge}>
                    <SparkleIcon size={12} color="#fbbf24" />
                    <span>Daily Bonus</span>
                  </div>
                  <div className={styles.streakBadge}>
                    <span className={styles.streakFlame}>🔥</span>
                    <span>{streak} Day Streak</span>
                  </div>
                </div>

                {/* Gem Display */}
                <div
                  className={`${styles.gemDisplay} ${gemPulse ? styles.gemPulse : ""}`}
                >
                  <div className={styles.gemGlowRing} />
                  <div className={styles.gemGlowRing2} />
                  <div className={styles.gemIconWrapper}>
                    <GemIcon size={80} className={styles.mainGem} />
                    <div className={styles.gemShine} />
                  </div>
                  <div className={styles.gemLabel}>
                    <span className={styles.gemAmount}>+15</span>
                    <span className={styles.gemUnit}>Gems</span>
                  </div>
                </div>

                {/* Timer Progress */}
                {claimState === "timing" && (
                  <div className={styles.timerSection}>
                    <div className={styles.timerBarBg}>
                      <div
                        className={styles.timerBarFill}
                        style={{ width: `${progressPercent}%` }}
                      />
                      <div
                        className={styles.timerBarGlow}
                        style={{ left: `${progressPercent}%` }}
                      />
                    </div>
                    <div className={styles.timerLabels}>
                      <span>0:00</span>
                      <span className={styles.timerCenter}>
                        {formatTime(timer)} remaining
                      </span>
                      <span>2:00</span>
                    </div>
                  </div>
                )}

                {/* Claim Button */}
                <button
                  className={`${styles.claimBtn} ${
                    claimState === "idle"
                      ? styles.claimBtnIdle
                      : claimState === "installing"
                        ? styles.claimBtnInstall
                        : claimState === "timing"
                          ? styles.claimBtnTiming
                          : claimState === "claimed"
                            ? styles.claimBtnClaimed
                            : styles.claimBtnCooldown
                  }`}
                  onClick={
                    claimState === "idle"
                      ? handleClaim
                      : claimState === "installing"
                        ? handleInstall
                        : null
                  }
                  disabled={
                    claimState === "timing" ||
                    claimState === "claimed" ||
                    claimState === "cooldown"
                  }
                >
                  {claimState === "idle" && (
                    <div className={styles.btnShimmer} />
                  )}
                  {getButtonContent()}
                </button>

                {/* Success Overlay */}
                {showSuccess && (
                  <div className={styles.successOverlay}>
                    <div className={styles.successContent}>
                      <div className={styles.successIcon}>
                        <CheckIcon size={40} />
                      </div>
                      <span className={styles.successText}>
                        +15 Gems Added!
                      </span>
                    </div>
                  </div>
                )}

                {/* Weekly Tracker */}
                <div className={styles.weekSection}>
                  <h3 className={styles.weekTitle}>This Week</h3>
                  <div className={styles.weekGrid}>
                    {DAYS.map((day, i) => (
                      <div
                        key={day.title}
                        className={`${styles.dayCell} ${i === DAYS.length - 1 ? styles.maxDay : ""} ${styles.dayClaimed}`}
                      >
                        <span className={styles.dayLabel}>{day.title}</span>
                        <div className={styles.dayGemSlot}>
                          <GemIcon className={styles.dayGemIcon} />
                        </div>
                        <span className={styles.dayReward}>+{day.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* How It Works */}
              <div className={styles.rulesCard}>
                <div className={styles.rulesHeader}>
                  <h2 className={styles.rulesTitle}>How It Works</h2>
                  <p className={styles.rulesSub}>
                    3 simple steps to earn your daily gems
                  </p>
                </div>

                <div className={styles.stepsContainer}>
                  {/* Connector Line */}
                  <div className={styles.connectorLine} />

                  {[
                    {
                      step: 1,
                      icon: <CursorIcon />,
                      title: "Click Claim Button",
                      desc: "Tap the claim button above to start the process",
                    },
                    {
                      step: 2,
                      icon: <DownloadIcon />,
                      title: "Install & Open App for 2 Min",
                      desc: "Download the sponsored app and keep it open for at least 2 minutes",
                    },
                    {
                      step: 3,
                      icon: <CheckIcon size={20} />,
                      title: "Receive Your Reward Instantly",
                      desc: "15 gems will be credited to your balance immediately",
                    },
                  ].map((item, idx) => {
                    const status = getStepStatus(item.step);
                    return (
                      <div
                        key={item.step}
                        className={`${styles.step} ${
                          status === "done"
                            ? styles.stepDone
                            : status === "active"
                              ? styles.stepActive
                              : styles.stepPending
                        }`}
                      >
                        <div className={styles.stepLeft}>
                          <div
                            className={`${styles.stepNumber} ${
                              status === "done"
                                ? styles.stepNumberDone
                                : status === "active"
                                  ? styles.stepNumberActive
                                  : styles.stepNumberPending
                            }`}
                          >
                            {status === "done" ? (
                              <CheckIcon size={16} />
                            ) : (
                              item.icon
                            )}
                          </div>
                          {idx < 2 && <div className={styles.stepConnector} />}
                        </div>
                        <div className={styles.stepContent}>
                          <h4 className={styles.stepTitle}>{item.title}</h4>
                          <p className={styles.stepDesc}>{item.desc}</p>
                        </div>
                        {status === "done" && (
                          <span className={styles.stepDoneTag}>Done</span>
                        )}
                        {status === "active" && (
                          <span className={styles.stepActiveTag}>
                            In Progress
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Trust Badges */}
              <div className={styles.trustSection}>
                <div className={styles.trustCard}>
                  <ShieldIcon />
                  <div className={styles.trustInfo}>
                    <h4>Secure & Verified</h4>
                    <p>
                      All rewards are verified and credited instantly to your
                      account
                    </p>
                  </div>
                </div>
                <div className={styles.trustGrid}>
                  <div className={styles.trustItem}>
                    <div className={styles.trustIconWrap}>
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M10 1L12.39 6.26L18 7.27L14 11.14L14.94 16.73L10 14.27L5.06 16.73L6 11.14L2 7.27L7.61 6.26L10 1Z"
                          fill="#f59e0b"
                        />
                      </svg>
                    </div>
                    <span>Trusted by 50K+ Users</span>
                  </div>
                  <div className={styles.trustItem}>
                    <div className={styles.trustIconWrap}>
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <circle
                          cx="10"
                          cy="10"
                          r="8"
                          stroke="#10b981"
                          strokeWidth="1.5"
                          fill="none"
                        />
                        <path
                          d="M6 10L9 13L14 7"
                          stroke="#10b981"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <span>Instant Payout</span>
                  </div>
                  <div className={styles.trustItem}>
                    <div className={styles.trustIconWrap}>
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <rect
                          x="3"
                          y="3"
                          width="14"
                          height="14"
                          rx="3"
                          stroke="#7c3aed"
                          strokeWidth="1.5"
                          fill="none"
                        />
                        <path
                          d="M7 10H13M10 7V13"
                          stroke="#7c3aed"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                    <span>15 Gems / Day</span>
                  </div>
                  <div className={styles.trustItem}>
                    <div className={styles.trustIconWrap}>
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M10 2C5.58 2 2 5.58 2 10C2 14.42 5.58 18 10 18C14.42 18 18 14.42 18 10C18 5.58 14.42 2 10 2ZM11 15H9V9H11V15ZM11 7H9V5H11V7Z"
                          fill="#3b82f6"
                        />
                      </svg>
                    </div>
                    <span>24/7 Support</span>
                  </div>
                </div>
              </div>

              {/* FAQ */}
              <div className={styles.faqCard}>
                <h2 className={styles.faqTitle}>Frequently Asked Questions</h2>
                <FAQItem
                  question="How often can I claim the daily bonus?"
                  answer="You can claim once every 24 hours. The timer resets at midnight based on your local timezone."
                />
                <FAQItem
                  question="What happens if I close the app before 2 minutes?"
                  answer="The timer will pause. You need to keep the sponsored app open for a continuous 2 minutes to receive the reward."
                />
                <FAQItem
                  question="Do the gems expire?"
                  answer="No, your earned gems never expire. They stay in your balance until you use them."
                />
                <FAQItem
                  question="Is there a streak bonus?"
                  answer="Currently, each day gives a flat 15 gems. Streak bonuses may be introduced in future updates."
                />
              </div>

              <SecFooter
                mt={45}
                mb={5}
                name={"Daily Bonus"}
                link={"/help-center/earning/daily-rewards"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const FAQItem = ({ question, answer }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={`${styles.faqItem} ${open ? styles.faqItemOpen : ""}`}>
      <button className={styles.faqQuestion} onClick={() => setOpen(!open)}>
        <span>{question}</span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          className={`${styles.faqChevron} ${open ? styles.faqChevronOpen : ""}`}
        >
          <path
            d="M4 6L8 10L12 6"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <div className={styles.faqAnswer}>
        <p>{answer}</p>
      </div>
    </div>
  );
};

export default DailyBonus;
