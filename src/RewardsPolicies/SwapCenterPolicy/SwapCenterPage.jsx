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
      cTitle={"wallet / swap-center"}
      badge="Internal Exchange"
      hTitle="Swap Center"
      hText="This page explains how supported platform values can be swapped inside VELOOP Rewards, how current conversion rates are applied, and what eligibility, validation, or technical limits may affect a swap."
      metaInfo={[
        { title: "Effective Date", value: "May 23, 2026" },
        { title: "Last Updated", value: "May 23, 2026" },
        { title: "Feature Type", value: "Internal platform exchange feature" },
        { title: "Availability", value: "Subject to platform support" },
      ]}
      fNoticeText={[
        "Current swap rates, supported conversion directions, limits, and minimum requirements are shown at the time of the swap request and may be updated from time to time.",
        "Completed swaps are generally final, but if a technical issue affects the conversion process, users may contact support for review.",
      ]}
      supportTitle={["Support details", "Swap notice"]}
      supportDesc={[
        "Users with swap-related issues should contact support with their account details, balance values, the time of the attempted swap, and any relevant screenshot of the issue.",
        "Swap access may be paused temporarily for security review, technical maintenance, or feature updates where necessary to protect users and platform integrity.",
      ]}
      isRewards={true}
    >
      <section className={styles.section}>
        <SectionHead Icon={FaExchangeAlt} title="What the Swap Center does" />
        <p>
          The Swap Center allows eligible users to exchange one supported
          platform value into another supported platform value when that swap
          option is currently available in VELOOP Rewards.
        </p>
      </section>

      <section className={styles.section}>
        <SectionHead Icon={FaCoins} title="Supported example" />
        <p>
          A current supported example is that Gems may be exchanged into VEs
          when that option is active. Other exchange directions may be added,
          updated, or discontinued over time as platform features evolve.
        </p>
      </section>

      <section className={styles.section}>
        <SectionHead Icon={FaShieldAlt} title="Validation and restrictions" />
        <ul>
          <li>
            Swap features are available to eligible users, subject to standard
            account and security verification checks.
          </li>
          <li>
            Exchange values may vary based on the current platform rate,
            supported conversion rules, and feature settings shown at the time
            of confirmation.
          </li>
          <li>
            If unusual or invalid activity is detected, a swap may be paused,
            reviewed, or corrected under current platform rules.
          </li>
        </ul>
      </section>

      <section className={styles.noticeBox}>
        <SectionHead Icon={FaExclamationTriangle} title="Important notice" />
        <p>
          Users should review the current conversion rate, minimum requirements,
          and resulting balance details before confirming a swap. The rate shown
          at confirmation is the rate used for that swap request.
        </p>
      </section>
    </LegalHero>
  );
};

export default SwapCenterPage;
