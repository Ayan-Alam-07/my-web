import React from "react";
import LegalHero from "../common/LegalHero";
import SectionHead from "../common/SectionHead";
import styles from "../common/LegalDocs.module.css";
import {
  FaExclamationTriangle,
  FaEnvelope,
  FaMapMarkerAlt,
  FaUserShield,
  FaClock,
  FaBalanceScale,
} from "react-icons/fa";

const metaInfo = [
  { title: "Effective Date", value: "Launch Date" },
  { title: "Last Updated", value: "May 18, 2026" },
  { title: "Document Type", value: "Contact & Compliance" },
  {
    title: "Applies To",
    value: "Support, notices, requests, and compliance matters",
  },
];

const supportTitle = ["Primary support", "Compliance notice"];

const supportDesc = [
  "General user support, reward-related questions, account issues, deletion requests, and platform concerns may be directed to VELOOP Rewards through its available support contact channels.",
  "Formal business, legal, copyright, policy, or compliance communications should be sent using the designated business or legal contact details published by VELOOP Rewards. Response timing may vary depending on the nature of the request, verification needs, or operational workload.",
];

const finalNotice = [
  "This Contact & Compliance page should be read together with the Privacy Policy, Terms & Conditions, DMCA / Copyright Policy, Anti-Fraud Policy, Withdrawal & Reward Verification Policy, and other legal pages published by VELOOP Rewards.",
  "By using VELOOP Rewards, users acknowledge that support requests, legal notices, compliance submissions, and verification-related communications may be subject to identity checks, evidence review, response prioritization, and internal handling procedures.",
];

const requestTypes = [
  "General support, task-related issues, referral concerns, reward questions, and platform feature assistance.",
  "Withdrawal-related queries, verification follow-ups, payout review requests, and account eligibility questions.",
  "Privacy-related requests, including account deletion requests, data-related questions, or lawful access inquiries.",
  "Copyright, brand misuse, ownership disputes, or intellectual property complaints.",
  "Business communication, compliance matters, partnership-related contact, or formal legal notices.",
];

const ContactCompliancePage = () => {
  return (
    <LegalHero
      badge="Contact & Compliance"
      hTitle="Contact & Compliance"
      hText="This page explains how users, rights holders, business contacts, and other parties may contact VELOOP Rewards for support, compliance requests, account matters, privacy requests, copyright complaints, and formal notices."
      metaInfo={metaInfo}
      crumb
      cTitle="Contact & Compliance"
      fNoticeText={finalNotice}
      supportTitle={supportTitle}
      supportDesc={supportDesc}
    >
      <section className={styles.noticeSection}>
        <SectionHead
          Icon={FaExclamationTriangle}
          title="Important contact notice"
        />
        <div className={styles.noticeBox}>
          <p>
            VELOOP Rewards is an online-operated platform based in India.
            Support, verification, policy, and compliance communications may be
            handled digitally and may require reasonable identity confirmation,
            evidence review, or additional details before any action is taken.
          </p>
        </div>
      </section>

      <section className={styles.contentSection}>
        <SectionHead Icon={FaEnvelope} title="Available contact channels" />
        <div className={styles.card}>
          <p>
            Users may contact VELOOP Rewards through its published support and
            business email addresses, and additional communication channels such
            as a support page, community link, or messaging platform may be
            introduced by the platform in the future.
          </p>
          <ul>
            <li>Support email: velooprewardsteam@gmail.com</li>
            <li>Business email: veloop.ifratech@gmail.com</li>
            <li>
              Additional support channels may be added later by platform notice.
            </li>
          </ul>
        </div>
      </section>

      <section className={styles.contentSection}>
        <SectionHead Icon={FaMapMarkerAlt} title="Operator location" />
        <div className={styles.card}>
          <p>
            VELOOP Rewards is currently operated as an individual-owned online
            platform based in Ramgarh, Jharkhand, India. Unless and until
            updated by the platform, this location information is provided for
            general contact and business identification purposes only.
          </p>
          <p>
            The absence of a public office, storefront, or walk-in support
            location does not limit VELOOP Rewards from operating as a digital
            service or from handling platform matters through remote
            communication channels.
          </p>
        </div>
      </section>

      <section className={styles.contentSection}>
        <SectionHead Icon={FaUserShield} title="Types of requests accepted" />
        <div className={styles.card}>
          <p>
            VELOOP Rewards may accept and review communications relating to the
            following categories, subject to verification, clarity, and
            operational feasibility:
          </p>
          <ul>
            {requestTypes.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className={styles.contentSection}>
        <SectionHead Icon={FaClock} title="Response times and processing" />
        <div className={styles.card}>
          <p>
            VELOOP Rewards aims to respond to general support requests within
            approximately 24 to 72 hours, although this period may vary based on
            request volume, weekends, holidays, technical review, fraud
            screening, verification requirements, or the complexity of the
            matter.
          </p>
          <p>
            Some requests may take longer where identity confirmation, payout
            review, abuse review, data verification, legal analysis, or
            third-party dependency checks are required. Submission of a request
            does not guarantee a particular outcome, resolution timeline, or
            approval.
          </p>
        </div>
      </section>

      <section className={styles.contentSection}>
        <SectionHead
          Icon={FaBalanceScale}
          title="Deletion, legal notices, and compliance handling"
        />
        <div className={styles.card}>
          <p>
            Users who wish to request account deletion or data deletion may
            contact customer support. VELOOP Rewards may require reasonable
            verification before completing deletion in order to protect platform
            security, prevent unauthorized requests, and confirm that the
            request is valid.
          </p>
          <p>
            Formal legal, compliance, copyright, or policy-related notices
            should contain enough detail to allow review, including identity
            details, the nature of the request, supporting information, and any
            relevant account or content references. VELOOP Rewards reserves the
            right to reject, ignore, or defer incomplete, abusive, misleading,
            or unverifiable requests where permitted by law.
          </p>
        </div>
      </section>
    </LegalHero>
  );
};

export default ContactCompliancePage;
