import React from "react";
import styles from "../FeaturePolicyPage.module.css";
import LegalHero from "../../Legal/common/LegalHero";
import SectionHead from "../../Legal/common/SectionHead";
import {
  FaUserPlus,
  FaCheckCircle,
  FaCoins,
  FaExclamationTriangle,
} from "react-icons/fa";

const JoinMembershipPage = () => {
  return (
    <LegalHero
      crumb={true}
      badge="Getting Started"
      hTitle="Join Membership"
      hText="This page explains the optional membership feature, joining conditions, activation cost, and important limitations."
      metaInfo={[
        { title: "Effective Date", value: "Launch Date" },
        { title: "Last Updated", value: "May 23, 2026" },
        { title: "Membership Status", value: "Optional feature" },
        { title: "Current Joining Cost", value: "250 VEs and 70 XP" },
      ]}
      fNoticeText={[
        "Membership is optional and is not required for all users to access VELOOP Rewards.",
        "Once membership is activated, consumed in-platform credits are generally non-refundable and non-reversible unless the platform decides otherwise.",
      ]}
      supportTitle={["Support details", "Membership notice"]}
      supportDesc={[
        "Users should review displayed membership details before joining and may contact support for clarification regarding feature access.",
        "Membership benefits, pricing, access rules, and feature availability may change at any time without creating a permanent entitlement.",
      ]}
      isRewards={true}
    >
      <section className={styles.section}>
        <SectionHead Icon={FaUserPlus} title="What membership means" />
        <p>
          VELOOP Rewards may provide an optional membership feature that unlocks
          selected platform benefits, participation rights, or additional user
          access depending on the current platform configuration.
        </p>
      </section>

      <section className={styles.section}>
        <SectionHead Icon={FaCoins} title="Current joining requirement" />
        <p>
          The currently shared joining requirement is 250 VEs and 70 XP. This
          joining cost uses in-platform credits and does not require a direct
          out-of-pocket cash payment from the user for activation.
        </p>
      </section>

      <section className={styles.section}>
        <SectionHead Icon={FaCheckCircle} title="Key rules" />
        <ul>
          <li>Joining is optional and not mandatory.</li>
          <li>Membership may provide platform-specific benefits only.</li>
          <li>Users cannot unjoin simply to recover spent credits.</li>
          <li>
            Platform membership terms may change based on business, security, or
            operational decisions.
          </li>
        </ul>
      </section>

      <section className={styles.noticeBox}>
        <SectionHead Icon={FaExclamationTriangle} title="Important notice" />
        <p>
          Users should activate membership only after reviewing the current
          displayed conditions, because consumed platform credits may not be
          refunded after successful activation.
        </p>
      </section>
    </LegalHero>
  );
};

export default JoinMembershipPage;
