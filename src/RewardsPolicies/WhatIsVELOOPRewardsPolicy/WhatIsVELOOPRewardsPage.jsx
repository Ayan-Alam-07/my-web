import React from "react";
import styles from "../FeaturePolicyPage.module.css";
import LegalHero from "../../Legal/common/LegalHero";
import SectionHead from "../../Legal/common/SectionHead";
import { FaInfoCircle, FaGamepad, FaCoins, FaShieldAlt } from "react-icons/fa";

const WhatIsVELOOPRewardsPage = () => {
  return (
    <LegalHero
      crumb={true}
      badge="Getting Started"
      hTitle="What is VELOOP Rewards?"
      hText="This page explains what VELOOP Rewards is, how the platform works, what users can do, and how virtual rewards are used inside the platform."
      metaInfo={[
        { title: "Effective Date", value: "Launch Date" },
        { title: "Last Updated", value: "May 23, 2026" },
        { title: "Owner", value: "Ayan Alam" },
        {
          title: "Operating Model",
          value: "Online-operated platform based in Ramgarh, Jharkhand, India",
        },
      ]}
      fNoticeText={[
        "VELOOP Rewards is a digital rewards and engagement platform and is not a banking, investment, gambling, or betting service.",
        "Platform features, rewards, currencies, and activity availability may be updated, limited, paused, or removed at any time based on platform, legal, security, or operational requirements.",
      ]}
      supportTitle={["Support details", "Platform notice"]}
      supportDesc={[
        "Users with account, reward, or feature-related questions should contact official support using the listed platform contact channels.",
        "Participation in VELOOP Rewards remains subject to eligibility, verification, platform rules, and anti-abuse review.",
      ]}
      isRewards={true}
    >
      <section className={styles.section}>
        <SectionHead Icon={FaInfoCircle} title="Platform overview" />
        <p>
          VELOOP Rewards is an activity-based rewards platform where users can
          complete supported tasks and engagement features to earn in-platform
          credits and benefits. The platform may include ads, referrals,
          surveys, games, spins, missions, badges, streak rewards, daily
          rewards, exchange features, and other reward-based activities.
        </p>
      </section>

      <section className={styles.section}>
        <SectionHead Icon={FaGamepad} title="What users can do" />
        <ul>
          <li>Watch ads and claim eligible rewards.</li>
          <li>Spin the wheel where spins are available.</li>
          <li>Complete tasks, streaks, missions, and badge activities.</li>
          <li>Use supported wallet, exchange, and redemption features.</li>
          <li>
            Participate in leaderboard, referral, and event-based features.
          </li>
        </ul>
      </section>

      <section className={styles.section}>
        <SectionHead Icon={FaCoins} title="Virtual rewards system" />
        <p>
          VELOOP Rewards uses internal virtual values such as VEs, XP, Gems,
          Tokens, and Spins to manage platform progression, access, and reward
          functions. These values are platform-controlled credits and do not
          represent independent financial assets or bank balances.
        </p>
      </section>

      <section className={styles.noticeBox}>
        <SectionHead Icon={FaShieldAlt} title="Important user notice" />
        <p>
          Reward access, earnings, progression, and withdrawals may depend on
          user eligibility, feature availability, fraud review, technical
          validation, and compliance with platform policies.
        </p>
      </section>
    </LegalHero>
  );
};

export default WhatIsVELOOPRewardsPage;
