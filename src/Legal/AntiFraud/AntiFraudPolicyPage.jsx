import React from "react";
import LegalHero from "../common/LegalHero";
import SectionHead from "../common/SectionHead";
import styles from "../common/LegalDocs.module.css";
import {
  FaExclamationTriangle,
  FaShieldAlt,
  FaRobot,
  FaUserSlash,
  FaMoneyCheckAlt,
  FaSearch,
  FaBalanceScale,
} from "react-icons/fa";

const metaInfo = [
  { title: "Effective Date", value: "Launch Date" },
  { title: "Last Updated", value: "May 18, 2026" },
  { title: "Document Type", value: "Anti-Fraud Policy" },
  { title: "Enforcement Scope", value: "All users and reward activity" },
];

const supportTitle = ["Fraud review support", "Enforcement note"];

const supportDesc = [
  "Users who believe an account action, reward reversal, or withdrawal restriction was applied in error may contact support for review with relevant account details, screenshots, and other supporting information where available.",
  "VELOOP Rewards may review enforcement concerns, but fraud investigations, risk scoring, internal detection methods, and platform-protection measures are not required to be fully disclosed to users.",
];

const finalNotice = [
  "This Anti-Fraud Policy should be read together with the Terms & Conditions, Withdrawal & Reward Verification Policy, Platform Currency Policy, Community Rules, Privacy Policy, and other legal pages published by VELOOP Rewards.",
  "By using VELOOP Rewards, users acknowledge that suspicious activity may lead to warnings, limits, verification requests, withdrawal holds, reward reversals, account suspension, permanent bans, and forfeiture of virtual balances where permitted by platform rules and applicable law.",
];

const suspiciousBehaviors = [
  "Use of bots, scripts, macros, auto-clickers, task automation, or any software intended to simulate genuine user behavior.",
  "Use of VPNs, proxies, device masking, identity masking, IP manipulation, or geo-evasion methods intended to bypass platform controls.",
  "Use of emulators, virtual devices, cloned environments, or unauthorized device-level tools where the platform prohibits such use.",
  "Self-referrals, fake referrals, duplicate accounts, coordinated abuse, misleading participation, or manipulation of referral systems.",
  "Ad abuse, survey abuse, offerwall abuse, reward farming, multi-device exploitation, campaign manipulation, or suspicious repetitive behavior.",
  "Submission of false information, impersonation, fake identities, misleading payout data, or attempts to bypass verification requirements.",
];

const actionsPlatformMayTake = [
  "Flag or review suspicious accounts, devices, sessions, networks, referrals, or withdrawal requests.",
  "Temporarily limit access to specific features, redemption routes, earning methods, or account actions.",
  "Hold, reject, delay, cancel, or reverse withdrawals, rewards, credits, exchanges, or leaderboard outcomes.",
  "Request identity, location, account, or activity verification where needed.",
  "Suspend or permanently ban accounts and forfeit platform-managed balances, virtual credits, or pending benefits linked to abusive conduct.",
];

const AntiFraudPolicyPage = () => {
  return (
    <LegalHero
      badge="Anti-Fraud Policy"
      hTitle="Anti-Fraud Policy"
      hText="This Anti-Fraud Policy explains how VELOOP Rewards detects, investigates, prevents, and enforces against suspicious activity, abuse, manipulation, and unauthorized use of the platform, its reward systems, and its withdrawal processes."
      metaInfo={metaInfo}
      crumb
      cTitle="Anti-Fraud Policy"
      fNoticeText={finalNotice}
      supportTitle={supportTitle}
      supportDesc={supportDesc}
    >
      <section className={styles.noticeSection}>
        <SectionHead
          Icon={FaExclamationTriangle}
          title="Important anti-fraud notice"
        />
        <div className={styles.noticeBox}>
          <p>
            VELOOP Rewards operates a strict anti-fraud framework to protect
            platform fairness, reward integrity, campaign validity, partner
            trust, and payment safety. The platform may investigate suspicious
            conduct at any time and may take immediate protective action where
            fraud, abuse, policy evasion, or unauthorized technical behavior is
            detected or reasonably suspected.
          </p>
        </div>
      </section>

      <section className={styles.contentSection}>
        <SectionHead Icon={FaShieldAlt} title="Purpose of this policy" />
        <div className={styles.card}>
          <p>
            VELOOP Rewards provides rewards, tasks, ads, referrals, exchanges,
            and redemption features in a controlled digital environment. Because
            such systems are vulnerable to exploitation, the platform uses this
            Anti-Fraud Policy to preserve fair participation, reduce abuse,
            protect legitimate users, and maintain trust with advertising,
            reward, and payment partners.
          </p>
          <p>
            This policy applies to all users, devices, sessions, traffic
            sources, reward activities, referrals, withdrawals, and interactions
            with the platform, whether conducted directly or through linked
            third-party systems.
          </p>
        </div>
      </section>

      <section className={styles.contentSection}>
        <SectionHead
          Icon={FaRobot}
          title="Prohibited fraudulent or suspicious behavior"
        />
        <div className={styles.card}>
          <p>
            Any behavior intended to exploit, manipulate, imitate, bypass, or
            unfairly benefit from VELOOP Rewards may be treated as fraud, abuse,
            or prohibited conduct, even where the exact method is not
            specifically listed in this policy.
          </p>
          <ul>
            {suspiciousBehaviors.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className={styles.contentSection}>
        <SectionHead
          Icon={FaSearch}
          title="Monitoring, review, and fraud detection"
        />
        <div className={styles.card}>
          <p>
            VELOOP Rewards may use automated systems, manual review, behavioral
            analysis, device checks, IP analysis, referral review, payout
            review, campaign review, login pattern checks, and other internal
            controls to detect risk indicators or abnormal activity.
          </p>
          <p>
            The platform may compare user activity across accounts, devices,
            sessions, and traffic sources in order to identify duplicate use,
            manipulation patterns, abusive clusters, or inconsistencies between
            declared and observed behavior. Internal review methods may change
            over time and are not required to be publicly disclosed.
          </p>
        </div>
      </section>

      <section className={styles.contentSection}>
        <SectionHead
          Icon={FaMoneyCheckAlt}
          title="Reward and withdrawal enforcement"
        />
        <div className={styles.card}>
          <p>
            Where suspicious activity is detected or reasonably suspected,
            VELOOP Rewards may hold, review, reject, reverse, or cancel rewards,
            referral credits, leaderboard benefits, exchange outcomes, or
            withdrawal requests. The presence of a visible balance, completed
            task, or submitted payout request does not prevent fraud review or
            enforcement action.
          </p>
          <p>
            Rewards may be removed and withdrawals may be denied where the
            platform determines that activity was generated through abuse,
            automation, fake referrals, technical circumvention, invalid
            campaign participation, or other prohibited methods.
          </p>
        </div>
      </section>

      <section className={styles.contentSection}>
        <SectionHead
          Icon={FaUserSlash}
          title="Account actions and balance forfeiture"
        />
        <div className={styles.card}>
          <p>
            Accounts found to be involved in fraud, abuse, or serious policy
            violations may be subject to warning, restriction, temporary
            suspension, permanent suspension, termination, or related
            enforcement measures. The severity of the action may depend on the
            nature of the conduct, the apparent intent, the scale of the abuse,
            prior history, and risk to the platform or other users.
          </p>
          <ul>
            {actionsPlatformMayTake.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
          <p>
            Where permitted by platform rules and applicable law, VELOOP Rewards
            may permanently deduct, void, or forfeit virtual balances, credits,
            pending withdrawals, or platform benefits connected to fraudulent or
            abusive conduct.
          </p>
        </div>
      </section>

      <section className={styles.contentSection}>
        <SectionHead
          Icon={FaBalanceScale}
          title="Platform discretion and final review"
        />
        <div className={styles.card}>
          <p>
            VELOOP Rewards reserves the right to make final determinations
            regarding fraud risk, suspicious behavior, account abuse, referral
            manipulation, invalid activity, and enforcement outcomes based on
            platform records, internal tools, security policies, and operational
            judgment.
          </p>
          <p>
            Although users may request a review of certain enforcement actions,
            the platform is not required to restore accounts, rewards, or
            balances where it reasonably concludes that abuse or fraud occurred.
            For security reasons, detailed fraud signals, detection thresholds,
            and internal review logic may remain confidential.
          </p>
        </div>
      </section>
    </LegalHero>
  );
};

export default AntiFraudPolicyPage;
