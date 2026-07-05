import {
  FaGift,
  FaLock,
  FaCircleCheck,
  FaGem,
  FaArrowRight,
} from "react-icons/fa6";

import RewardArrow from "../../CommonComponents/RewardArrow";

import { useEffect, useMemo, useRef } from "react";

import styles from "./RewardJourney.module.css";

export default function RewardJourney({
  currentDay,

  milestones,
}) {
  const wrapperRef = useRef(null);

  const activeRef = useRef(null);

  const totalDays = 30;

  const progress = (currentDay / totalDays) * 100;

  const nextReward = useMemo(() => {
    return milestones.find((m) => currentDay < m.day);
  }, [currentDay, milestones]);

  useEffect(() => {
    if (activeRef.current) {
      activeRef.current.scrollIntoView({
        behavior: "smooth",

        inline: "center",

        block: "nearest",
      });
    }
  }, []);

  return (
    <section className={styles.rewardJourney}>
      <div className={styles.bgGlow}></div>

      <div className={styles.bgGlow2}></div>

      <div className={styles.header}>
        <div>
          <span className={styles.badge}>VAULT JOURNEY</span>

          <h2>Reward Journey</h2>

          <p>
            Unlock exclusive rewards by maintaining your contribution streak.
          </p>
        </div>
      </div>

      <div className={styles.timelineWrapper} ref={wrapperRef}>
        <div className={styles.timeline}>
          {milestones.map((item, index) => {
            const unlocked = currentDay >= item.day;

            const active =
              currentDay < item.day && nextReward?.day === item.day;

            return (
              <div
                key={item.day}
                ref={active ? activeRef : null}
                className={styles.milestone}
              >
                <div
                  className={`

${styles.node}

${unlocked ? styles.unlocked : ""}

${active ? styles.active : ""}

`}
                >
                  {unlocked ? <FaCircleCheck /> : <FaLock />}
                </div>

                {index !== milestones.length - 1 && (
                  <div
                    className={`

${styles.connector}

${currentDay >= milestones[index + 1].day ? styles.connectorFill : ""}

`}
                  />
                )}

                <div className={styles.card}>
                  <div className={styles.rewardTop}>
                    <h4>Day {item.day}</h4>

                    <span>Milestone</span>
                  </div>

                  <div className={styles.rewardAmount}>
                    <FaGem />

                    {item.reward}
                  </div>

                  <p>
                    {unlocked ? "Unlocked" : active ? "Next Reward" : "Locked"}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className={styles.finalVault}>
        <div className="d-flex align-items-center flex-column flex-md-row">
          <div className={`mb-4 mb-md-0 ${styles.finalIcon}`}>
            <FaGift />
          </div>

          <div className="ms-sm-4 ms-lg-5">
            <span>Unlock On Day 30</span>

            <h3>₹10 Cash Reward</h3>

            <p>Complete all milestones and unlock instant withdrawal</p>
          </div>
        </div>

        <div className={styles.arrow}>
          <RewardArrow />
        </div>
      </div>
    </section>
  );
}
