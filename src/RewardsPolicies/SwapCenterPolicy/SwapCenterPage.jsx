import React from "react";
import styles from "../FeaturePolicyPage.module.css";
import LegalHero from "../../Legal/common/LegalHero";
import SectionHead from "../../Legal/common/SectionHead";
import {
  FaExchangeAlt,
  FaCoins,
  FaShieldAlt,
  FaExclamationTriangle,
} from "react-icons/fa";

const SwapCenterPage = () => {
  return (
    <LegalHero
      crumb={true}
      badge="Wallet"
      hTitle="Swap Center"
      hText="This page explains how internal platform values may be exchanged inside VELOOP Rewards and what limits or restrictions may apply."
      metaInfo={[
        { title: "Effective Date", value: "Launch Date" },
        { title: "Last Updated", value: "May 23, 2026" },
        { title: "Feature Type", value: "Internal platform exchange feature" },
        { title: "Availability", value: "Subject to platform support" },
      ]}
      fNoticeText={[
        "Swap rates, conversion directions, limits, and minimum requirements may change at any time.",
        "Completed swap actions may be treated as final unless the platform reverses them for technical correction, fraud handling, or policy enforcement.",
      ]}
      supportTitle={["Support details", "Swap notice"]}
      supportDesc={[
        "Users with swap-related issues should contact support with account details, balance values, and the time of the attempted exchange.",
        "The platform may pause or disable swap access at any time for security, compliance, fraud review, or operational maintenance.",
      ]}
      isRewards={true}
    >
      <section className={styles.section}>
        <SectionHead Icon={FaExchangeAlt} title="What the Swap Center does" />
        <p>
          The Swap Center allows supported in-platform values to be exchanged
          into other supported platform values where the feature is made
          available by VELOOP Rewards.
        </p>
      </section>

      <section className={styles.section}>
        <SectionHead Icon={FaCoins} title="Supported example" />
        <p>
          A current supported example is that Gems may be exchanged into VEs
          where the option is available. Other exchange directions may be added,
          changed, restricted, or removed in the future.
        </p>
      </section>

      <section className={styles.section}>
        <SectionHead Icon={FaShieldAlt} title="Validation and restrictions" />
        <ul>
          <li>Swap requests may depend on account standing and eligibility.</li>
          <li>
            Exchange values may vary based on current platform settings and
            rules.
          </li>
          <li>
            Invalid or suspicious activity may cause a swap to be denied,
            reviewed, or reversed.
          </li>
        </ul>
      </section>

      <section className={styles.noticeBox}>
        <SectionHead Icon={FaExclamationTriangle} title="Important notice" />
        <p>
          Users should review current conversion details before confirming a
          swap, because platform rates and feature conditions may change without
          prior notice.
        </p>
      </section>
    </LegalHero>
  );
};

export default SwapCenterPage;
