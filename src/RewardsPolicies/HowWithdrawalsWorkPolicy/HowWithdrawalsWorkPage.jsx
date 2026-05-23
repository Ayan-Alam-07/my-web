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
      badge="Withdrawals"
      hTitle="How Withdrawals Work"
      hText="This page explains the minimum threshold, supported payout methods, processing expectations, and withdrawal-related requirements."
      metaInfo={[
        { title: "Effective Date", value: "Launch Date" },
        { title: "Last Updated", value: "May 23, 2026" },
        { title: "Minimum Withdrawal", value: "Rs. 10" },
        { title: "Standard Processing Target", value: "Within 24 hours" },
      ]}
      fNoticeText={[
        "Submitting a withdrawal request does not guarantee approval, instant processing, or payout without review.",
        "Withdrawals may be delayed, reviewed, rejected, limited, or reversed where suspicious activity, invalid details, or policy violations are detected.",
      ]}
      supportTitle={["Support details", "Withdrawal review notice"]}
      supportDesc={[
        "Users should contact support for withdrawal issues using the official support email and include relevant account and payout details.",
        "Processing times may vary due to manual review, verification checks, queue load, payout partner availability, holidays, or security investigations.",
      ]}
      isRewards={true}
    >
      <section className={styles.section}>
        <SectionHead Icon={FaMoneyCheckAlt} title="Eligibility and threshold" />
        <p>
          Eligible users may request a withdrawal or supported redemption once
          they meet the current minimum withdrawal amount of Rs. 10 and satisfy
          platform verification and account compliance conditions.
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
      </section>

      <section className={styles.section}>
        <SectionHead Icon={FaClock} title="Processing and review" />
        <p>
          Withdrawals are generally targeted for processing within 24 hours, but
          actual timing may vary. Every request remains subject to payout detail
          accuracy, account standing, anti-fraud review, and operational
          capacity.
        </p>
      </section>

      <section className={styles.noticeBox}>
        <SectionHead Icon={FaExclamationTriangle} title="Important notice" />
        <p>
          Users must provide correct payout details and remain policy-compliant,
          because invalid information, suspicious behavior, or failed
          verification may prevent payment from being completed.
        </p>
      </section>
    </LegalHero>
  );
};

export default HowWithdrawalsWorkPage;
