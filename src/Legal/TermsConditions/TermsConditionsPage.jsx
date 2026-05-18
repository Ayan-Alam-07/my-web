import React from "react";
import LegalHero from "../common/LegalHero";
import SectionHead from "../common/SectionHead";
import styles from "../common/LegalDocs.module.css";
import {
  FaCheckCircle,
  FaUserShield,
  FaWallet,
  FaBan,
  FaExclamationTriangle,
  FaMoneyCheckAlt,
  FaSyncAlt,
  FaBalanceScale,
} from "react-icons/fa";

const metaInfo = [
  { title: "Effective Date", value: "Launch Date" },
  { title: "Last Updated", value: "May 18, 2026" },
  { title: "Jurisdiction", value: "India" },
  { title: "Operator", value: "Ayan Alam" },
];

const supportTitle = ["Support details", "Response and operations"];

const supportDesc = [
  "For support requests, withdrawal concerns, legal questions, copyright complaints, or compliance-related communications, users should contact the appropriate platform email with relevant account details where necessary.",
  "VELOOP Rewards is an online-operated platform. Users requesting account deletion, policy clarification, or payout review may be asked to complete verification steps before action is processed.",
];

const finalNotice = [
  "These Terms & Conditions form the core user agreement governing access to VELOOP Rewards and should be read together with the Privacy Policy, Anti-Fraud Policy, Platform Currency Policy, Withdrawal & Reward Verification Policy, and other legal pages published by the platform.",
  "By registering, accessing, or using VELOOP Rewards, users acknowledge that platform features, rewards, availability, payout handling, verification requirements, and policy rules may be updated, limited, paused, or withdrawn by the platform where necessary for business, operational, legal, security, or compliance reasons.",
];

const eligibilityPoints = [
  "Users must provide accurate registration and account information when requested.",
  "Use of the platform must comply with applicable local laws and platform restrictions.",
  "Users below the age required by their local law should only use the platform with parental or guardian supervision.",
  "VELOOP Rewards may restrict access in selected countries or regions based on operational, legal, compliance, security, or business considerations.",
];

const accountRules = [
  "Only one account is permitted per user unless the platform expressly authorizes otherwise.",
  "Users must not create fake, duplicate, shared, or misleading accounts.",
  "Accounts remain subject to monitoring, limitation, suspension, or closure where suspicious or prohibited activity is detected.",
  "Accounts, reward balances, history, and access rights remain platform-controlled and do not create property rights independent of the platform.",
];

const rewardsRules = [
  "Rewards, credits, exchange rates, and redemption rules may be updated at any time.",
  "Completion of an activity does not automatically guarantee payout unless the activity is properly tracked, validated, and compliant with platform rules.",
  "Leaderboard rewards, event rewards, and campaign-specific rewards may depend on eligibility, ranking, availability, and fraud review.",
  "Virtual credits including VEs, Gems, XP, Tokens, Spins, badges, and similar units are non-transferable platform-controlled digital credits.",
];

const prohibitedActivity = [
  "Botting, auto-clicking, scripting, emulator use, VPN use, device spoofing, or automated engagement.",
  "Self-referrals, fake referrals, multi-account abuse, or reward manipulation.",
  "Misleading data, false identity details, abusive behavior, ad abuse, survey abuse, or offerwall abuse.",
  "Technical exploitation, security interference, reverse engineering, scraping, or attempts to disrupt platform operations.",
];

const withdrawalRules = [
  "Minimum withdrawal amount currently starts from Rs. 10, subject to change by the platform.",
  "Supported payout methods may include UPI, PayPal, Amazon gift cards, Google Play gift cards, or other platform-approved methods where available.",
  "Withdrawal requests may be reviewed, delayed, limited, rejected, reversed, or cancelled where suspicious activity, verification failure, abuse indicators, technical errors, or policy violations are identified.",
  "Estimated processing timelines are operational targets only and are not guaranteed deadlines.",
];

const platformRights = [
  "Modify, suspend, remove, or replace any feature, reward system, offer, event, mission, leaderboard, exchange rate, or redemption method.",
  "Investigate suspicious conduct and request additional information or verification from users.",
  "Suspend or terminate accounts and forfeit platform credits where violations, abuse, or fraud are detected.",
  "Change these Terms & Conditions and related policies at any time by publishing updated versions on the platform.",
];

const TermsConditionsPage = () => {
  return (
    <LegalHero
      badge="Terms & Conditions"
      hTitle="Terms & Conditions"
      hText="These Terms & Conditions govern access to and use of VELOOP Rewards. They explain the legal rules for account use, platform participation, rewards, withdrawals, prohibited conduct, suspensions, and the rights reserved by the platform."
      metaInfo={metaInfo}
      crumb
      cTitle="Terms & Conditions"
      fNoticeText={finalNotice}
      supportTitle={supportTitle}
      supportDesc={supportDesc}
    >
      <section className={styles.noticeSection}>
        <SectionHead
          Icon={FaExclamationTriangle}
          title="Important platform notice"
        />
        <div className={styles.noticeBox}>
          <p>
            VELOOP Rewards is a promotional, gamified, and platform-managed
            rewards service. It is not a bank, financial institution, investment
            program, betting system, deposit scheme, or gambling platform.
            Platform credits and internal balances do not represent stored
            monetary deposits, securities, or independent financial assets.
          </p>
        </div>
      </section>

      <section className={styles.contentSection}>
        <SectionHead Icon={FaCheckCircle} title="Eligibility and access" />
        <div className={styles.card}>
          <p>
            By using VELOOP Rewards, the user confirms that the platform is
            being accessed lawfully and that all provided information is
            accurate to the best of the user’s knowledge. Access may be denied,
            limited, or withdrawn where a user fails verification, violates
            policies, or falls within a restricted region or risk category.
          </p>
          <ul>
            {eligibilityPoints.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className={styles.contentSection}>
        <SectionHead
          Icon={FaUserShield}
          title="Accounts and account ownership"
        />
        <div className={styles.card}>
          <p>
            Users are responsible for maintaining the security of their own
            accounts and for activity occurring under their login credentials.
            VELOOP Rewards may treat activity from a logged-in account as
            activity authorized by the account holder unless platform records
            show otherwise.
          </p>
          <ul>
            {accountRules.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className={styles.contentSection}>
        <SectionHead
          Icon={FaWallet}
          title="Rewards, virtual credits, and redemption"
        />
        <div className={styles.card}>
          <p>
            VELOOP Rewards may provide users with access to virtual platform
            units, task-based rewards, referrals, leaderboard incentives,
            exchange features, promotional missions, and other earning
            opportunities. All reward systems remain subject to platform
            control, tracking validation, account review, and policy compliance.
          </p>
          <ul>
            {rewardsRules.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className={styles.contentSection}>
        <SectionHead Icon={FaBan} title="Prohibited conduct" />
        <div className={styles.card}>
          <p>
            The platform strictly prohibits abusive, deceptive, manipulative, or
            technically unauthorized behavior. Any attempt to interfere with
            platform integrity, reward logic, ad systems, survey systems,
            referral systems, or security controls may lead to immediate
            enforcement action.
          </p>
          <ul>
            {prohibitedActivity.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className={styles.contentSection}>
        <SectionHead
          Icon={FaMoneyCheckAlt}
          title="Withdrawals and verification"
        />
        <div className={styles.card}>
          <p>
            Redemption and withdrawal requests are subject to eligibility
            checks, fraud review, account standing, regional support, payment
            method availability, and verification requirements. Submission of a
            request does not obligate the platform to process it where
            compliance concerns or abuse indicators exist.
          </p>
          <ul>
            {withdrawalRules.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className={styles.contentSection}>
        <SectionHead
          Icon={FaSyncAlt}
          title="Platform changes and service availability"
        />
        <div className={styles.card}>
          <p>
            VELOOP Rewards is provided on an "as available" and "as operated"
            basis. The platform does not guarantee uninterrupted availability,
            permanent feature access, error-free reward tracking, or continuous
            availability of any task, event, ad campaign, payout route, exchange
            function, or earning method.
          </p>
          <p>
            Downtime, bugs, maintenance, third-party ad limitations, offerwall
            failures, campaign expiry, fraud prevention controls, payment
            interruptions, and technical changes may affect the user experience
            or the availability of rewards and withdrawals.
          </p>
        </div>
      </section>

      <section className={styles.contentSection}>
        <SectionHead
          Icon={FaBalanceScale}
          title="Platform rights, suspension, and governing law"
        />
        <div className={styles.card}>
          <p>
            VELOOP Rewards reserves broad administrative authority over its
            service in order to protect business operations, reward integrity,
            security systems, and legal compliance. Enforcement decisions may be
            taken without prior notice where the platform reasonably believes
            that immediate action is necessary.
          </p>
          <ul>
            {platformRights.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
          <p>
            These Terms & Conditions shall be governed by and interpreted in
            accordance with the laws of India. Any dispute relating to platform
            use, policy enforcement, rewards, or account action shall be subject
            to applicable Indian jurisdiction, unless otherwise required by
            mandatory law.
          </p>
        </div>
      </section>
    </LegalHero>
  );
};

export default TermsConditionsPage;
