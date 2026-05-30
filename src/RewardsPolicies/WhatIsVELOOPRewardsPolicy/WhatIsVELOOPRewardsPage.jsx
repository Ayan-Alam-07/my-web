import React from "react";
import styles from "../FeaturePolicyPage.module.css";
import LegalHero from "../../Legal/common/LegalHero";
import SectionHead from "../../Legal/common/SectionHead";
import {
  FaInfoCircle,
  FaGamepad,
  FaCoins,
  FaShieldAlt,
  FaBalanceScale,
} from "react-icons/fa";

const WhatIsVELOOPRewardsPage = () => {
  return (
    <LegalHero
      crumb={true}
      cTitle={"getting-started / what-is-veloop-rewards"}
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
        "VELOOP Rewards is a digital rewards and engagement platform and is not a banking, investment, gambling, betting, or guaranteed-income service.",
        "Platform features, rewards, virtual credits, exchanges, redemption options, and activity availability may change or be reviewed over time for technical, verification, security, legal, campaign, or operational reasons.",
      ]}
      supportTitle={["Support details", "Platform notice"]}
      supportDesc={[
        "Users with account, reward, withdrawal, or feature-related questions should contact official support through the listed channels and provide the details needed for review.",
        "If a reward, balance, or withdrawal is under review, additional verification may be requested and support will normally respond within the stated response timeframe.",
      ]}
      isRewards={true}
    >
      <section className={styles.section}>
        <SectionHead Icon={FaInfoCircle} title="Platform overview" />
        <p>
          VELOOP Rewards is a rewards and engagement platform where eligible
          users can complete supported activities such as ads, referrals,
          surveys, games, spins, missions, streak rewards, badges, daily
          rewards, exchange tools, and other available earning features to
          receive in-platform credits and supported reward opportunities.
          Features, rewards, and redemption options may vary based on account
          status, region support, activity validation, campaign availability,
          and compliance with platform rules.
        </p>
      </section>

      <section className={styles.section}>
        <SectionHead Icon={FaGamepad} title="What users can do" />
        <ul>
          <li>Watch supported ads and complete eligible reward activities.</li>
          <li>
            Use spins and participate in wheel-based reward features where
            available.
          </li>
          <li>
            Complete tasks, streaks, missions, badges, and other supported
            earning actions.
          </li>
          <li>
            Use wallet, exchange, swap, and redemption features where officially
            supported.
          </li>
          <li>
            Participate in leaderboard, referral, giveaway, and other
            event-based features where eligible.
          </li>
        </ul>
      </section>

      <section className={styles.section}>
        <SectionHead Icon={FaCoins} title="Virtual rewards system" />
        <p>
          VELOOP Rewards uses internal virtual values such as VEs, XP, Gems,
          Tokens, and Spins for progression, access, task participation, and
          reward-related platform features. These values are virtual in-platform
          credits only. They are not bank balances, deposits, stored-value
          accounts, investment products, or independent financial assets.
          Certain credits may be used in officially supported exchange or
          redemption features, subject to eligibility, review, and current
          platform rules.
        </p>
      </section>

      <section className={styles.noticeBox}>
        <SectionHead Icon={FaShieldAlt} title="Important user notice" />
        <p>
          Reward access, earnings, exchanges, and withdrawals may be reviewed
          for account eligibility, payout detail accuracy, supported region,
          task validation, fraud prevention, and compliance with platform rules.
          Review may take place in cases such as duplicate accounts,
          self-referrals, VPN or proxy use, bot or automated activity, emulator
          use, invalid ad engagement, offer tracking problems, payout detail
          mismatch, or other suspicious activity affecting platform integrity.
          If a user believes a reward, balance adjustment, or withdrawal review
          was applied incorrectly, the user may contact official support and
          request manual review.
        </p>
      </section>

      <section className={styles.section}>
        <SectionHead Icon={FaBalanceScale} title="Fair use and review" />
        <p>
          VELOOP Rewards aims to review accounts and reward activity fairly and
          consistently. Where practical, users may be asked for additional
          details before a final decision is made on a restricted reward,
          balance adjustment, or withdrawal review. Platform decisions may be
          based on system records, activity validation, payout checks, and
          anti-abuse controls designed to protect genuine users and the
          platform.
        </p>
      </section>
    </LegalHero>
  );
};

export default WhatIsVELOOPRewardsPage;
