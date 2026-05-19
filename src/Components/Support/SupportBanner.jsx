import React from "react";
import {
  FiHeadphones,
  FiArrowRight,
  FiShield,
  FiZap,
  FiClock,
} from "react-icons/fi";
import styles from "./SupportBanner.module.css";
import { useNavigate } from "react-router-dom";

const SupportBanner = ({
  title = "Need a hand? We're here 24/7",
  description = "Our reward specialists are ready to help you claim, track, and maximize every perk — anytime, anywhere.",
  ctaLabel = "Contact Support",
}) => {
  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onClick(e);
    }
  };

  const navigate = useNavigate();

  return (
    <section
      role="button"
      tabIndex={0}
      aria-label="Open customer support"
      onClick={() => navigate("/customer-service")}
      onKeyDown={handleKeyDown}
      className={styles.banner}
    >
      {/* Decorative reward elements */}

      <div className={styles.decor} aria-hidden="true">
        <span className={`${styles.orb} ${styles.orbGold}`} />
        <span className={`${styles.orb} ${styles.orbCyan}`} />
        <span className={`${styles.orb} ${styles.orbPurple}`} />
        <span className={`${styles.coin} ${styles.coin1}`} />
        <span className={`${styles.coin} ${styles.coin2}`} />
        <span className={`${styles.sparkle} ${styles.sparkle1}`} />
        <span className={`${styles.sparkle} ${styles.sparkle2}`} />
        <span className={`${styles.sparkle} ${styles.sparkle3}`} />

        <svg
          className={styles.streak}
          viewBox="0 0 600 200"
          preserveAspectRatio="none"
        >
          <path
            d="M0,150 C150,80 350,180 600,40"
            stroke="url(#streakGrad)"
            strokeWidth="1.5"
            fill="none"
          />

          <defs>
            <linearGradient id="streakGrad" x1="0" x2="1">
              <stop offset="0%" stopColor="#f5c878" stopOpacity="0" />
              <stop offset="50%" stopColor="#f5c878" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#7cc4ff" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Animated glow border */}
      <span className={styles.glowBorder} aria-hidden="true" />

      <div className={styles.inner}>
        <div className="d-none d-md-block">
          <div className={`${styles.iconWrap}`} aria-hidden="true">
            <div className={styles.iconHalo} />
            <FiHeadphones className={styles.icon} />
          </div>
        </div>

        <div className="d-flex gap-3 d-md-none align-items-center">
          <div className={styles.iconWrap} aria-hidden="true">
            <div className={styles.iconHalo} />
            <FiHeadphones className={styles.icon} />
          </div>

          <h2 className={styles.title}>{title}</h2>
        </div>

        <div className={styles.content}>
          <h2 className={`d-none d-md-block ${styles.title}`}>{title}</h2>

          <p className={styles.description}>{description}</p>

          <ul className={styles.badges} aria-label="Support guarantees">
            <li className={styles.badge}>
              <FiClock aria-hidden="true" />

              <span>24/7 Support</span>
            </li>

            <li className={styles.badge}>
              <FiZap aria-hidden="true" />

              <span>Fast Response</span>
            </li>

            <li className={styles.badge}>
              <FiShield aria-hidden="true" />

              <span>
                Secure{" "}
                <span className="d-none d-md-inline-block">Assistance</span>
              </span>
            </li>
          </ul>
        </div>

        <div className={styles.ctaWrap}>
          <span className={styles.cta}>
            <span>{ctaLabel}</span>

            <FiArrowRight className={styles.ctaArrow} aria-hidden="true" />
          </span>
        </div>
      </div>
    </section>
  );
};

export default SupportBanner;
