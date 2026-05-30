import React from "react";
import styles from "../FeaturePolicyPage.module.css";
import LegalHero from "../../Legal/common/LegalHero";
import SectionHead from "../../Legal/common/SectionHead";
import {
  FaCoins,
  FaExchangeAlt,
  FaLock,
  FaExclamationTriangle,
  FaQuestionCircle,
  FaUserShield,
  FaBookOpen,
} from "react-icons/fa";

const PlatformCurrenciesPage = () => {
  return (
    <LegalHero
      crumb={true}
      badge="Getting Started"
      hTitle="Platform Currencies"
      hText="This page explains what VEs, XP, Gems, Tokens, and Spins are, how they are used inside VELOOP Rewards, and how some supported credits may connect to exchange or redemption features."
      metaInfo={[
        { title: "Effective Date", value: "Launch Date" },
        { title: "Last Updated", value: "May 23, 2026" },
        { title: "Owner", value: "Ayan Alam" },
        {
          title: "Currency Type",
          value:
            "Virtual in-platform credits used for rewards, progression, access, and supported platform features",
        },
      ]}
      fNoticeText={[
        "All platform currencies are virtual in-platform values used for rewards, progress, and supported feature access. They are not bank deposits, investment products, or cash balances.",
        "VELOOP Rewards may update earning rules, exchange rates, usage limits, or currency availability over time based on platform operations, campaign needs, or verification checks.",
        "Supported redemption, transfer, or exchange options may vary over time based on platform availability, verification, campaign rules, and operational requirements.",
      ]}
      supportTitle={["Support details", "Currency notice"]}
      supportDesc={[
        "Users with questions regarding balances, swaps, redemptions, or missing credits should contact platform support with relevant account details.",
        "Currency balances may be reviewed, corrected, reversed, frozen, or forfeited where invalid activity, abuse, or technical issues are detected.",
      ]}
      isRewards={true}
    >
      <section className={styles.section}>
        <SectionHead Icon={FaCoins} title="Currency definitions" />
        <ul>
          <li>
            <strong>VEs</strong> are the main reward credits used in supported
            redemption or reward exchange flows, subject to current platform
            rules, eligibility, and availability.
          </li>
          <li>
            <strong>XP</strong> is used for progression, levels, and account
            advancement.
          </li>
          <li>
            <strong>Gems</strong> are platform credits that may be exchanged
            through supported swap or conversion features where such options are
            officially available.
          </li>
          <li>
            <strong>Tokens</strong> are used for selected in-platform purchases
            or reward-related actions.
          </li>
          <li>
            <strong>Spins</strong> are used to access eligible wheel-based
            reward features.
          </li>
        </ul>
      </section>

      <section className={styles.section}>
        <SectionHead Icon={FaQuestionCircle} title="Quick start flow" />
        <ul>
          <li>
            Earn: Complete supported activities such as ads, tasks, missions,
            streaks, or other eligible platform actions.
          </li>
          <li>
            Progress: Build XP, levels, and other activity-based progress where
            supported.
          </li>
          <li>
            Convert: Use eligible exchange or swap tools for Gems, Tokens, or
            other supported credits where available.
          </li>
          <li>
            Redeem: Use VEs or other supported reward credits in official
            redemption flows, subject to eligibility and current platform rules.
          </li>
        </ul>
      </section>

      <section className={styles.section}>
        <SectionHead Icon={FaExchangeAlt} title="Use and exchange" />
        <p>
          Some platform credits may be earned through supported activities, used
          in eligible features, exchanged through approved tools, or redeemed
          where official redemption options are available. Supported conversion
          rules, reward values, and feature availability may change over time
          based on platform configuration, campaigns, verification checks, and
          operational updates.
        </p>
      </section>

      <section className={styles.noticeBox}>
        <SectionHead Icon={FaUserShield} title="Important user note" />
        <p>
          VELOOP Rewards uses virtual in-platform credits for rewards,
          progression, access, and feature participation. These values are not
          bank balances, deposits, or investment products. Where supported by
          the platform, certain credits may be used in official exchange or
          redemption features. Users should always rely on the current Help
          Center and withdrawal guidance for the latest supported options.
        </p>
      </section>

      <section className={styles.section}>
        <SectionHead Icon={FaLock} title="Ownership and control" />
        <p>
          All platform balances remain part of the VELOOP Rewards ecosystem and
          are managed according to platform records and rules. To protect fair
          use for genuine users, balances may be reviewed or adjusted in limited
          situations such as proven policy violations, fraud prevention checks,
          technical correction, inactivity rules, or feature updates. If a user
          believes a balance adjustment was applied incorrectly, the user may
          contact official support and request manual review.
        </p>
      </section>

      <section className={styles.section}>
        <SectionHead Icon={FaBookOpen} title="Need help with balances?" />
        <p>
          If a balance does not update as expected, an exchange feature is not
          available, or a reward-related action appears incorrect, users should
          contact official support with their registered email, the relevant
          activity details, and a short explanation of the issue. Manual review
          may be available where appropriate.
        </p>
      </section>

      <section className={styles.noticeBox}>
        <SectionHead Icon={FaExclamationTriangle} title="Important notice" />
        <p>
          These are virtual in-platform credits used for supported rewards,
          progression, and feature access. Redemption or exchange options, where
          available, are subject to platform rules, eligibility, and current
          feature support.
        </p>
      </section>
    </LegalHero>
  );
};

export default PlatformCurrenciesPage;
