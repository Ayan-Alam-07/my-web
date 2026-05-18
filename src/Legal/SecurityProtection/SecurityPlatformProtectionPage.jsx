import React from "react";
import LegalHero from "../common/LegalHero";
import SectionHead from "../common/SectionHead";
import styles from "../common/LegalDocs.module.css";
import {
  FaExclamationTriangle,
  FaShieldAlt,
  FaUserLock,
  FaBug,
  FaServer,
  FaBalanceScale,
} from "react-icons/fa";

const metaInfo = [
  { title: "Effective Date", value: "Launch Date" },
  { title: "Last Updated", value: "May 18, 2026" },
  { title: "Document Type", value: "Security & Platform Protection" },
  {
    title: "Applies To",
    value:
      "Accounts, systems, monitoring, abuse prevention, and service protection",
  },
];

const supportTitle = ["Security support", "Protection notice"];

const supportDesc = [
  "Users who believe their account has been compromised, misused, accessed without authorization, or affected by suspicious activity may contact VELOOP Rewards support with relevant account and incident details.",
  "VELOOP Rewards may apply automated and manual protective measures to preserve platform integrity, including restrictions, monitoring, validation checks, temporary limitations, and enforcement actions where needed for security or operational protection.",
];

const finalNotice = [
  "This Security & Platform Protection page should be read together with the Terms & Conditions, Privacy Policy, Anti-Fraud Policy, Withdrawal & Reward Verification Policy, Community Rules, and other legal pages published by VELOOP Rewards.",
  "By using VELOOP Rewards, users acknowledge that the platform may deploy reasonable technical, behavioral, and operational safeguards to detect abuse, secure accounts, maintain service stability, and protect platform systems, balances, data, and community trust.",
];

const protectionExamples = [
  "Login monitoring, device and session review, IP-based checks, region validation, and unusual-access detection.",
  "Automated fraud signals, risk scoring, duplicate pattern review, task-behavior monitoring, and reward-anomaly analysis.",
  "Restrictions on suspicious withdrawals, exchange activity, referrals, ad interactions, or account functionality pending review.",
  "Temporary holds, cooldowns, rate limits, system throttling, feature blocks, or other preventive operational controls.",
  "Manual review, technical investigation, evidence assessment, and escalation where suspicious activity, abuse, or security threats are identified.",
];

const SecurityPlatformProtectionPage = () => {
  return (
    <LegalHero
      badge="Security & Platform Protection"
      hTitle="Security & Platform Protection"
      hText="This page explains the measures VELOOP Rewards may use to protect accounts, systems, platform balances, user interactions, rewards, and service operations from abuse, unauthorized access, fraud, and other threats."
      metaInfo={metaInfo}
      crumb
      cTitle="Security & Platform Protection"
      fNoticeText={finalNotice}
      supportTitle={supportTitle}
      supportDesc={supportDesc}
    >
      <section className={styles.noticeSection}>
        <SectionHead
          Icon={FaExclamationTriangle}
          title="Important security notice"
        />
        <div className={styles.noticeBox}>
          <p>
            VELOOP Rewards may implement security, monitoring, and
            system-protection mechanisms to preserve platform integrity, user
            trust, fair reward distribution, account safety, and service
            continuity. Such measures may be applied automatically or manually
            and may affect account access, reward status, withdrawal activity,
            or feature availability where suspicious activity or operational
            risk is detected.
          </p>
        </div>
      </section>

      <section className={styles.contentSection}>
        <SectionHead Icon={FaShieldAlt} title="Protective security measures" />
        <div className={styles.card}>
          <p>
            VELOOP Rewards may use technical, operational, and behavior-based
            safeguards to protect its services, users, and systems from misuse,
            compromise, or instability. These measures may include, without
            limitation:
          </p>
          <ul>
            {protectionExamples.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
          <p>
            The specific security controls used by VELOOP Rewards may change
            over time and need not be publicly disclosed in full where doing so
            could reduce the effectiveness of platform protection.
          </p>
        </div>
      </section>

      <section className={styles.contentSection}>
        <SectionHead
          Icon={FaUserLock}
          title="Account safety and user responsibility"
        />
        <div className={styles.card}>
          <p>
            Users are responsible for maintaining the confidentiality of their
            login credentials, authentication access, connected sign-in methods,
            and any account-related information under their control. Users must
            notify VELOOP Rewards promptly if they suspect unauthorized access,
            credential compromise, or account misuse.
          </p>
          <p>
            VELOOP Rewards may require verification, temporarily restrict
            access, or suspend platform actions where an account appears
            compromised or where user identity, login behavior, or payout
            actions require additional confirmation for security reasons.
          </p>
        </div>
      </section>

      <section className={styles.contentSection}>
        <SectionHead
          Icon={FaBug}
          title="Threats, vulnerabilities, and misuse"
        />
        <div className={styles.card}>
          <p>
            Users must not attempt to interfere with platform systems, probe for
            vulnerabilities, bypass restrictions, exploit bugs, use reverse
            engineering techniques, manipulate task flows, or access platform
            resources in an unauthorized manner. Any attempt to compromise or
            test the platform without permission may be treated as a serious
            violation.
          </p>
          <p>
            Where technical errors, security weaknesses, or unexpected reward
            behavior are discovered, VELOOP Rewards may patch, disable, reset,
            roll back, or temporarily restrict affected features, balances, or
            accounts to prevent abuse or wider platform harm.
          </p>
        </div>
      </section>

      <section className={styles.contentSection}>
        <SectionHead
          Icon={FaServer}
          title="Service continuity and defensive actions"
        />
        <div className={styles.card}>
          <p>
            To protect the platform and its users, VELOOP Rewards may
            temporarily limit services, pause features, block access from
            selected environments, restrict risky actions, or alter operational
            settings during maintenance, outages, attacks, suspicious spikes,
            provider failures, or other service-protection events.
          </p>
          <p>
            Services are provided on an available basis, and uninterrupted
            access cannot be guaranteed. VELOOP Rewards is entitled to
            prioritize security, stability, and abuse prevention when balancing
            service availability against operational risk.
          </p>
        </div>
      </section>

      <section className={styles.contentSection}>
        <SectionHead
          Icon={FaBalanceScale}
          title="Interpretation and enforcement"
        />
        <div className={styles.card}>
          <p>
            VELOOP Rewards reserves the right to determine what protective
            actions are reasonably necessary to defend the platform, its
            systems, its users, its balances, and its operations from abuse,
            compromise, or instability. Security-related decisions may include
            warnings, temporary blocks, reward restrictions, verification holds,
            suspensions, terminations, or escalation under related policies.
          </p>
          <p>
            This page may be updated from time to time as technology, threat
            conditions, business operations, and legal or compliance
            requirements evolve.
          </p>
        </div>
      </section>
    </LegalHero>
  );
};

export default SecurityPlatformProtectionPage;
