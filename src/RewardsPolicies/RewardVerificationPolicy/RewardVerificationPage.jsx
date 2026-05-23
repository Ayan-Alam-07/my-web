import React from "react";
import styles from "../FeaturePolicyPage.module.css";
import LegalHero from "../../Legal/common/LegalHero";
import SectionHead from "../../Legal/common/SectionHead";
import {
  FaSearch,
  FaUserCheck,
  FaShieldAlt,
  FaExclamationTriangle,
} from "react-icons/fa";

const RewardVerificationPage = () => {
  return (
    <LegalHero
      crumb={true}
      badge="Withdrawals"
      hTitle="Reward Verification"
      hText="This page explains why VELOOP Rewards verifies earnings, balances, exchanges, referrals, and withdrawal requests before approval."
      metaInfo={[
        { title: "Effective Date", value: "Launch Date" },
        { title: "Last Updated", value: "May 23, 2026" },
        { title: "Review Type", value: "Manual and system-based validation" },
        { title: "Purpose", value: "Fraud prevention and payout integrity" },
      ]}
      fNoticeText={[
        "Reward verification helps prevent fake claims, duplicate activity, referral abuse, payout fraud, and invalid reward processing.",
        "Rewards may be delayed, rejected, reversed, or limited if verification requirements are not met or suspicious activity is detected.",
      ]}
      supportTitle={["Support details", "Verification notice"]}
      supportDesc={[
        "Users asked for additional review should cooperate with platform support and provide accurate account or payout information where required.",
        "Verification is a core part of the platform’s fraud prevention system and may apply before or after a reward is granted.",
      ]}
      isRewards={true}
    >
      <section className={styles.section}>
        <SectionHead Icon={FaSearch} title="What verification means" />
        <p>
          Reward verification is the process used by VELOOP Rewards to review
          account activity, earnings, balances, exchange requests, referrals,
          and withdrawal claims before final approval or payout.
        </p>
      </section>

      <section className={styles.section}>
        <SectionHead Icon={FaUserCheck} title="What may be reviewed" />
        <ul>
          <li>Account login status and account legitimacy.</li>
          <li>Region eligibility and feature access conditions.</li>
          <li>Payout details, reward claim accuracy, and redemption data.</li>
          <li>Referral validity and activity quality.</li>
          <li>Fraud-risk indicators and policy compliance status.</li>
        </ul>
      </section>

      <section className={styles.section}>
        <SectionHead Icon={FaShieldAlt} title="Why verification matters" />
        <p>
          Verification helps protect the platform against bots, fake referrals,
          multiple-account abuse, VPN misuse, emulator use, ad abuse, offer
          manipulation, and other invalid reward behavior.
        </p>
      </section>

      <section className={styles.noticeBox}>
        <SectionHead Icon={FaExclamationTriangle} title="Important notice" />
        <p>
          Approval of a reward, balance update, or withdrawal is never final if
          later review confirms invalid or abusive activity connected to that
          benefit.
        </p>
      </section>
    </LegalHero>
  );
};

export default RewardVerificationPage;
