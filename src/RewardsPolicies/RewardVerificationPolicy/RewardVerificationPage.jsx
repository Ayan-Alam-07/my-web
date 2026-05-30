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
      cTitle={"withdrawals / reward-verification"}
      badge="Withdrawals"
      hTitle="Reward Verification"
      hText="This page explains why VELOOP Rewards verifies earnings, balances, exchanges, referrals, and withdrawal requests before approval."
      metaInfo={[
        { title: "Effective Date", value: "May 20, 2026" },
        { title: "Last Updated", value: "May 23, 2026" },
        { title: "Review Type", value: "Manual and system-based validation" },
        { title: "Purpose", value: "Fraud prevention and payout integrity" },
      ]}
      fNoticeText={[
        "Reward verification helps us protect genuine users, maintain fair reward distribution, and reduce fake claims, referral abuse, and payout fraud.",
        "Where verification is incomplete or unusual activity is detected, rewards or withdrawals may be delayed, reviewed, limited, rejected, or reversed under platform rules.",
      ]}
      supportTitle={["Support and appeal details", "Verification notice"]}
      supportDesc={[
        "If a user believes a reward, referral, balance adjustment, or withdrawal review was handled incorrectly, the user should contact official support with the account ID, relevant screenshots, and a short explanation for fair manual review.",
        "Verification is a core part of the platform’s fraud prevention and payout integrity system and may apply before or after a reward is granted.",
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
          <li>
            Account ownership, login consistency, and single-account compliance.
          </li>
          <li>
            Region eligibility and access to supported features or campaigns.
          </li>
          <li>
            Payout details, reward claim accuracy, and redemption request data.
          </li>
          <li>
            Referral validity, genuine participation, and completion quality.
          </li>
          <li>
            Fraud-risk indicators, unusual device behavior, and policy
            compliance status.
          </li>
        </ul>
        <p>
          Genuine participation generally means completing supported activities
          as intended, using one real account, avoiding automation, and
          following feature-specific fair-play rules.
        </p>
      </section>

      <section className={styles.section}>
        <SectionHead Icon={FaShieldAlt} title="Fair play guidance" />
        <p>
          For examples of prohibited behavior such as multiple accounts,
          self-referrals, bots, VPN misuse, auto-clicking, emulator use, or
          invalid task completion, users should also read the platform’s Fair
          Play and Account Rules pages.
        </p>
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
          A reward, balance update, exchange, or withdrawal may be corrected,
          limited, or reversed if later review confirms invalid activity, abuse,
          or a policy violation connected to that benefit.
        </p>
      </section>
    </LegalHero>
  );
};

export default RewardVerificationPage;
