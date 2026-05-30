import React from "react";
import styles from "../FeaturePolicyPage.module.css";
import LegalHero from "../../Legal/common/LegalHero";
import SectionHead from "../../Legal/common/SectionHead";
import {
  FaMoneyCheckAlt,
  FaClock,
  FaCheckCircle,
  FaExclamationTriangle,
} from "react-icons/fa";

const HowWithdrawalsWorkPage = () => {
  return (
    <LegalHero
      crumb={true}
      cTitle={"withdrawals / how-withdrawals-work"}
      badge="Withdrawals"
      hTitle="How Withdrawals Work"
      hText="This page explains the minimum threshold, supported payout methods, processing expectations, and withdrawal-related requirements."
      metaInfo={[
        { title: "Effective Date", value: "May 23, 2026" },
        { title: "Last Updated", value: "May 23, 2026" },
        { title: "Minimum Withdrawal", value: "Rs. 10" },
        {
          title: "Processing Time",
          value: "Usually within 24 hours, up to 72 hours in review cases",
        },
      ]}
      fNoticeText={[
        "Withdrawal requests are processed for eligible accounts that comply with platform rules, verification requirements, and fair-play standards.",
        "Requests may take longer or require review where payout details are incorrect, verification is incomplete, or unusual activity is detected.",
      ]}
      supportTitle={["Support details", "Withdrawal review notice"]}
      supportDesc={[
        "Users with withdrawal issues should contact official support and include their registered account details, selected payout method, payout address or ID, request time, and any relevant screenshot.",
        "Processing times may vary due to queue load, payout partner availability, holidays, verification checks, or manual security review.",
      ]}
      isRewards={true}
    >
      <section className={styles.section}>
        <SectionHead Icon={FaMoneyCheckAlt} title="Eligibility and threshold" />
        <p>
          Eligible users may request a withdrawal or supported redemption after
          reaching the current minimum withdrawal threshold of Rs. 10 and
          completing any required verification or account checks.
        </p>
      </section>

      <section className={styles.section}>
        <SectionHead Icon={FaCheckCircle} title="Supported payout methods" />
        <ul>
          <li>UPI</li>
          <li>PayPal</li>
          <li>Amazon Gift Cards</li>
          <li>Google Play Gift Cards</li>
        </ul>
        <p>
          Available payout methods may vary based on user eligibility, region,
          payout partner support, and current platform availability.
        </p>
      </section>

      <section className={styles.section}>
        <SectionHead Icon={FaClock} title="Processing and review" />
        <p>
          We aim to process eligible withdrawal requests within 24 hours.
          However, users should allow up to 72 hours during high-volume periods,
          payout partner delays, holidays, or manual security and verification
          review.
        </p>
        <p>
          Processing depends on correct payout details, successful verification,
          and compliance with current platform rules.
        </p>
      </section>

      <section className={styles.noticeBox}>
        <SectionHead Icon={FaExclamationTriangle} title="Important notice" />
        <p>
          To avoid delays, users should provide accurate payout details and
          complete any required verification steps. Incorrect information,
          failed verification, or confirmed policy violations may prevent a
          withdrawal from being completed.
        </p>
      </section>
    </LegalHero>
  );
};

export default HowWithdrawalsWorkPage;
