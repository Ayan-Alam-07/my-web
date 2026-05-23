import React from "react";
import styles from "../FeaturePolicyPage.module.css";
import LegalHero from "../../Legal/common/LegalHero";
import SectionHead from "../../Legal/common/SectionHead";
import {
  FaCoins,
  FaExchangeAlt,
  FaLock,
  FaExclamationTriangle,
} from "react-icons/fa";

const PlatformCurrenciesPage = () => {
  return (
    <LegalHero
      crumb={true}
      badge="Getting Started"
      hTitle="Platform Currencies"
      hText="This page explains the purpose of VEs, XP, Gems, Tokens, and Spins used inside VELOOP Rewards."
      metaInfo={[
        { title: "Effective Date", value: "Launch Date" },
        { title: "Last Updated", value: "May 23, 2026" },
        { title: "Owner", value: "Ayan Alam" },
        {
          title: "Currency Type",
          value: "Virtual in-platform credits and progression values",
        },
      ]}
      fNoticeText={[
        "All platform currencies are virtual, platform-controlled values and do not represent bank deposits, investment products, or guaranteed cash ownership.",
        "VELOOP Rewards may change balances, earning logic, exchange rates, usage rules, or currency availability at any time.",
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
            redemption flows.
          </li>
          <li>
            <strong>XP</strong> is used for progression, levels, and account
            advancement.
          </li>
          <li>
            <strong>Gems</strong> are exchangeable platform credits where swap
            options are available.
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
        <SectionHead Icon={FaExchangeAlt} title="Use and exchange" />
        <p>
          Some currencies may be earned, spent, exchanged, or redeemed only
          through approved platform systems. Supported conversions, reward
          values, and usage logic may change based on platform configuration,
          campaigns, and feature availability.
        </p>
      </section>

      <section className={styles.section}>
        <SectionHead Icon={FaLock} title="Ownership and control" />
        <p>
          All balances remain part of the VELOOP Rewards platform ecosystem and
          are subject to platform control. The platform may limit, suspend,
          remove, reset, or adjust currency balances in connection with fraud
          checks, policy enforcement, technical correction, inactivity rules, or
          feature updates.
        </p>
      </section>

      <section className={styles.noticeBox}>
        <SectionHead Icon={FaExclamationTriangle} title="Important notice" />
        <p>
          Internal platform currencies have no independent legal cash value
          except where redemption is officially offered and successfully
          approved under current platform rules.
        </p>
      </section>
    </LegalHero>
  );
};

export default PlatformCurrenciesPage;
