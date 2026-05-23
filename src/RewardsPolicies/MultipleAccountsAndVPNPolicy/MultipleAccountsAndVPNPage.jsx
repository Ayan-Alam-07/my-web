import React from "react";
import styles from "../FeaturePolicyPage.module.css";
import LegalHero from "../../Legal/common/LegalHero";
import SectionHead from "../../Legal/common/SectionHead";
import {
  FaUsersSlash,
  FaGlobe,
  FaShieldAlt,
  FaExclamationTriangle,
} from "react-icons/fa";

const MultipleAccountsAndVPNPage = () => {
  return (
    <LegalHero
      crumb={true}
      badge="Safety Rules"
      hTitle="Multiple Accounts and VPN Rules"
      hText="This page explains VELOOP Rewards rules regarding duplicate accounts, self-referrals, masked access, and VPN-related restrictions."
      metaInfo={[
        { title: "Effective Date", value: "Launch Date" },
        { title: "Last Updated", value: "May 23, 2026" },
        { title: "Multiple Accounts", value: "Not allowed" },
        { title: "VPN Usage", value: "Not allowed where restricted by policy" },
      ]}
      fNoticeText={[
        "Users may maintain only the account allowed for genuine personal use unless the platform expressly permits otherwise.",
        "Duplicate accounts, self-referrals, location masking, or suspicious network behavior may lead to reward cancellation, forfeiture, suspension, or permanent ban.",
      ]}
      supportTitle={["Support details", "Safety notice"]}
      supportDesc={[
        "Users who believe an account restriction was applied incorrectly may contact support with their account information for review.",
        "The platform may use device, network, behavior, and account signals to identify duplicate ownership, masked access, or abuse patterns.",
      ]}
      isRewards={true}
    >
      <section className={styles.section}>
        <SectionHead Icon={FaUsersSlash} title="Multiple account rule" />
        <p>
          VELOOP Rewards does not allow users to create, control, or benefit
          from multiple accounts for the same person, household, device pattern,
          or abuse purpose unless specifically permitted by the platform.
        </p>
      </section>

      <section className={styles.section}>
        <SectionHead Icon={FaGlobe} title="VPN and masked access" />
        <p>
          VPN or proxy usage is prohibited where it hides actual region,
          bypasses restrictions, manipulates eligibility, interferes with reward
          systems, or triggers fraud detection controls.
        </p>
      </section>

      <section className={styles.section}>
        <SectionHead Icon={FaShieldAlt} title="Enforcement actions" />
        <ul>
          <li>Reward cancellation or reversal.</li>
          <li>Referral invalidation.</li>
          <li>Withdrawal denial or account review.</li>
          <li>Suspension, restriction, or permanent termination.</li>
        </ul>
      </section>

      <section className={styles.noticeBox}>
        <SectionHead Icon={FaExclamationTriangle} title="Important notice" />
        <p>
          The platform reserves the right to restrict access in selected regions
          or usage environments based on operational, legal, compliance,
          security, or business considerations.
        </p>
      </section>
    </LegalHero>
  );
};

export default MultipleAccountsAndVPNPage;
