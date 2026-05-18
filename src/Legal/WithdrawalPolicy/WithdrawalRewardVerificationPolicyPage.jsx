import React from "react";
import LegalHero from "../common/LegalHero";
import SectionHead from "../common/SectionHead";
import styles from "../common/LegalDocs.module.css";
import {
  FaExclamationTriangle,
  FaWallet,
  FaUserCheck,
  FaClock,
  FaUndoAlt,
  FaBalanceScale,
} from "react-icons/fa";

const metaInfo = [
  { title: "Effective Date", value: "Launch Date" },
  { title: "Last Updated", value: "May 18, 2026" },
  { title: "Document Type", value: "Withdrawal & Reward Verification Policy" },
  {
    title: "Applies To",
    value: "Redemptions, withdrawals, rewards, balances, and payout review",
  },
];

const supportTitle = ["Withdrawal support", "Verification notice"];

const supportDesc = [
  "Users with questions relating to reward approval, redemption requests, payout status, withdrawal delays, or eligibility review may contact VELOOP Rewards support through the available support channel.",
  "All withdrawal, payout, and reward-verification activity is subject to account review, fraud detection, location eligibility, technical validation, and platform discretion. A submitted request does not automatically create a payout obligation.",
];

const finalNotice = [
  "This Withdrawal & Reward Verification Policy should be read together with the Terms & Conditions, Platform Currency Policy, Earnings Disclaimer, Anti-Fraud Policy, Refund & Cancellation Policy, and other legal pages published by VELOOP Rewards.",
  "By using VELOOP Rewards, users acknowledge that all redemptions, balance conversions, withdrawal requests, and reward approvals are subject to verification, fraud review, policy compliance, and operational approval by VELOOP Rewards.",
];

const reviewTriggers = [
  "Suspicious activity, unusual behavior, duplicate patterns, abnormal reward accumulation, or irregular task completion activity.",
  "VPN use, emulator use, bot activity, automation signals, ad abuse, fake referrals, self-referrals, or multiple account indicators.",
  "Incomplete or inaccurate payout information, unsupported payout details, verification mismatch, or inconsistent account identity indicators.",
  "Technical errors, reward-crediting anomalies, third-party validation issues, campaign disputes, or platform security checks.",
  "Policy violations, abuse reports, leaderboard manipulation concerns, exchange misuse, or other conduct that may affect payout legitimacy.",
];

const WithdrawalRewardVerificationPolicyPage = () => {
  return (
    <LegalHero
      badge="Withdrawal & Reward Verification Policy"
      hTitle="Withdrawal & Reward Verification Policy"
      hText="This policy explains how VELOOP Rewards reviews, verifies, approves, delays, rejects, limits, or reverses reward redemptions, withdrawals, payout requests, and related balance activity."
      metaInfo={metaInfo}
      crumb
      cTitle="Withdrawal & Reward Verification Policy"
      fNoticeText={finalNotice}
      supportTitle={supportTitle}
      supportDesc={supportDesc}
    >
      <section className={styles.noticeSection}>
        <SectionHead
          Icon={FaExclamationTriangle}
          title="Important withdrawal notice"
        />
        <div className={styles.noticeBox}>
          <p>
            VELOOP Rewards may allow eligible users to redeem certain approved
            reward values through supported methods such as UPI, PayPal, Amazon
            gift cards, or Google Play gift cards, subject to platform rules and
            availability. However, all reward approvals and payout requests
            remain conditional until successfully reviewed and approved by the
            platform.
          </p>
        </div>
      </section>

      <section className={styles.contentSection}>
        <SectionHead
          Icon={FaWallet}
          title="Eligibility and minimum withdrawal rules"
        />
        <div className={styles.card}>
          <p>
            Users must satisfy the then-current eligibility requirements
            established by VELOOP Rewards before a withdrawal or redemption
            request may be considered. This may include meeting the applicable
            minimum threshold, maintaining an eligible account status, providing
            required redemption details, and complying with all platform rules.
          </p>
          <p>
            Based on the current platform model, the minimum withdrawal amount
            is 10 INR, although VELOOP Rewards reserves the right to change
            thresholds, supported payout methods, eligible regions, redemption
            ratios, or processing criteria at any time.
          </p>
        </div>
      </section>

      <section className={styles.contentSection}>
        <SectionHead
          Icon={FaUserCheck}
          title="Verification and review process"
        />
        <div className={styles.card}>
          <p>
            Before approving a reward, payout, or redemption request, VELOOP
            Rewards may conduct account-level, transaction-level, behavioral,
            technical, or compliance-related verification checks. Verification
            may include review of login status, country or region eligibility,
            payout details, task-completion validity, referral legitimacy, and
            fraud-risk indicators.
          </p>
          <p>
            The platform may place a request under review for reasons including:
          </p>
          <ul>
            {reviewTriggers.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className={styles.contentSection}>
        <SectionHead Icon={FaClock} title="Processing times and delays" />
        <div className={styles.card}>
          <p>
            VELOOP Rewards may aim to process eligible withdrawal requests
            within approximately 24 hours, but actual timing may vary depending
            on verification workload, support volume, technical issues, payout
            method availability, external provider dependencies, or compliance
            review requirements.
          </p>
          <p>
            Processing estimates are informational only and do not guarantee
            payout within a fixed timeframe. Delays may occur even after a
            request is submitted or appears pending in the platform interface.
          </p>
        </div>
      </section>

      <section className={styles.contentSection}>
        <SectionHead
          Icon={FaUndoAlt}
          title="Rejections, reversals, and limitations"
        />
        <div className={styles.card}>
          <p>
            VELOOP Rewards may reject, reverse, cancel, hold, limit, or
            permanently deny withdrawals, redemptions, credited rewards,
            conversion results, or payout eligibility where it reasonably
            believes a request is invalid, suspicious, abusive, technically
            flawed, unsupported, or inconsistent with platform policies.
          </p>
          <p>
            The platform may also reverse rewards or refuse withdrawal where
            fraud, fake referrals, ad abuse, prohibited software, multiple
            accounts, unauthorized automation, verification failure, or
            technical crediting errors are detected before or after a payout
            request is submitted.
          </p>
        </div>
      </section>

      <section className={styles.contentSection}>
        <SectionHead
          Icon={FaBalanceScale}
          title="Platform rights and interpretation"
        />
        <div className={styles.card}>
          <p>
            VELOOP Rewards reserves the right to determine withdrawal
            eligibility, apply verification standards, request supporting
            details, modify payout systems, suspend redemption features, and
            interpret reward-related disputes in accordance with its internal
            processes, security standards, legal obligations, and business
            needs.
          </p>
          <p>
            A balance display, pending request status, prior payout history, or
            visible reward indicator does not create a guaranteed entitlement to
            redemption unless and until VELOOP Rewards completes review and
            approves the request under its then-current rules.
          </p>
        </div>
      </section>
    </LegalHero>
  );
};

export default WithdrawalRewardVerificationPolicyPage;
