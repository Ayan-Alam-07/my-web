import React from "react";
import LegalHero from "../common/LegalHero";
import SectionHead from "../common/SectionHead";
import styles from "../common/LegalDocs.module.css";
import {
  FaDatabase,
  FaUserLock,
  FaCookieBite,
  FaShareAlt,
  FaTrashAlt,
  FaShieldAlt,
  FaGavel,
  FaExclamationTriangle,
} from "react-icons/fa";

const metaInfo = [
  { title: "Effective Date", value: "Launch Date" },
  { title: "Last Updated", value: "May 18, 2026" },
  { title: "Data Controller", value: "VELOOP Rewards" },
  { title: "Country", value: "India" },
];

const supportTitle = ["Privacy support", "Requests and verification"];

const supportDesc = [
  "For privacy questions, account issues, policy concerns, or legal communication, users should contact the platform using the designated support or business email with enough information to identify the relevant account.",
  "Requests relating to account deletion, data access, or data removal may require identity or account verification before any action is processed in order to protect account security and prevent unauthorized requests.",
];

const finalNotice = [
  "This Privacy Policy should be read together with the Terms & Conditions, Anti-Fraud Policy, Advertising & Offerwall Policy, Withdrawal & Reward Verification Policy, and other legal pages published by VELOOP Rewards.",
  "By accessing or using VELOOP Rewards, users acknowledge that their information may be collected, used, stored, reviewed, and shared as described in this policy where reasonably necessary for platform operation, legal compliance, fraud prevention, service improvement, and reward processing.",
];

const collectedInfo = [
  "Identity and account details, such as name, email address, login credentials, and profile-related information.",
  "Technical and device-related information, such as device identifiers, browser data, operating system details, app or site usage signals, IP address, and approximate location indicators.",
  "Authentication information from supported login providers, including Google login and related account verification signals where used.",
  "Reward activity and account records, such as task participation, referrals, withdrawals, exchanges, bonus claims, reward history, and account status information.",
  "Tracking and analytics data, such as cookies, session data, ad interaction data, campaign attribution signals, and advertising-related events where supported by platform systems or third-party tools.",
];

const usagePurposes = [
  "Create, operate, maintain, and secure user accounts and platform functionality.",
  "Track completed activities, rewards, referrals, exchanges, levels, and redemption eligibility.",
  "Detect suspicious activity, abuse, bots, fake referrals, policy evasion, and unauthorized technical behavior.",
  "Process withdrawal requests, account reviews, customer support requests, and deletion requests.",
  "Measure performance, improve user experience, evaluate campaign quality, and manage advertising or promotional systems.",
];

const sharingRules = [
  "Service providers, hosting tools, authentication providers, analytics tools, customer support tools, or infrastructure vendors where needed to operate the platform.",
  "Advertising partners, reward partners, offerwall providers, survey providers, or campaign partners where user interaction requires third-party processing or tracking.",
  "Payment or reward fulfillment channels where needed to deliver approved withdrawals, gift cards, or supported reward outcomes.",
  "Law enforcement, regulators, courts, or legal authorities where disclosure is required by law, legal process, or legitimate compliance needs.",
];

const userRights = [
  "Request access to account-related personal data held by the platform, subject to verification and lawful limitations.",
  "Request correction of inaccurate account information where applicable.",
  "Request deletion of the account and related personal data, subject to account verification, pending fraud review, legal retention obligations, or unresolved disputes.",
  "Withdraw use of the platform by closing the account, understanding that certain retained records may still be kept where necessary for legal, fraud prevention, or operational reasons.",
];

const PrivacyPolicyPage = () => {
  return (
    <LegalHero
      badge="Privacy Policy"
      hTitle="Privacy Policy"
      hText="This Privacy Policy explains how VELOOP Rewards collects, uses, stores, protects, and shares personal and technical information when users access the platform, create accounts, participate in rewards activities, or request support and withdrawals."
      metaInfo={metaInfo}
      crumb
      cTitle="Privacy Policy"
      fNoticeText={finalNotice}
      supportTitle={supportTitle}
      supportDesc={supportDesc}
    >
      <section className={styles.noticeSection}>
        <SectionHead
          Icon={FaExclamationTriangle}
          title="Important privacy notice"
        />
        <div className={styles.noticeBox}>
          <p>
            VELOOP Rewards collects data that is necessary to operate a rewards
            platform, manage user accounts, process participation records,
            prevent fraud, support withdrawals, and improve service performance.
            Continued use of the platform means the user understands that such
            data practices are part of normal platform operation subject to this
            policy and applicable legal requirements.
          </p>
        </div>
      </section>

      <section className={styles.contentSection}>
        <SectionHead Icon={FaDatabase} title="Information collected" />
        <div className={styles.card}>
          <p>
            VELOOP Rewards may collect personal, technical, transactional, and
            activity-related information directly from users, automatically from
            user devices, and through connected third-party systems that support
            login, analytics, ads, offers, or reward operations.
          </p>
          <ul>
            {collectedInfo.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className={styles.contentSection}>
        <SectionHead Icon={FaUserLock} title="How information is used" />
        <div className={styles.card}>
          <p>
            Collected information is used for platform administration, account
            security, fraud prevention, reward calculation, support handling,
            feature delivery, service improvement, and compliance. VELOOP
            Rewards uses data only to the extent reasonably necessary for
            operating and protecting the platform and its users.
          </p>
          <ul>
            {usagePurposes.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className={styles.contentSection}>
        <SectionHead
          Icon={FaCookieBite}
          title="Cookies, analytics, and advertising technologies"
        />
        <div className={styles.card}>
          <p>
            VELOOP Rewards may use cookies, tracking technologies, device
            recognition tools, session tools, analytics systems, and ad-related
            technologies to understand usage, secure sessions, measure campaign
            quality, support reward attribution, and improve platform
            performance.
          </p>
          <p>
            Third-party ad networks, rewarded ad providers, offerwalls, survey
            systems, or analytics partners may also use their own tracking
            technologies in accordance with their own policies. VELOOP Rewards
            does not control every processing practice of such third parties and
            users should understand that external systems may apply separate
            privacy terms where their services are accessed through the
            platform.
          </p>
        </div>
      </section>

      <section className={styles.contentSection}>
        <SectionHead
          Icon={FaShareAlt}
          title="Sharing and disclosure of information"
        />
        <div className={styles.card}>
          <p>
            VELOOP Rewards does not treat user data as public profile content by
            default, but information may be shared with selected third parties
            where needed to operate the platform, complete reward workflows,
            maintain security, fulfill legal duties, or support service
            delivery.
          </p>
          <ul>
            {sharingRules.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className={styles.contentSection}>
        <SectionHead Icon={FaShieldAlt} title="Data security and retention" />
        <div className={styles.card}>
          <p>
            VELOOP Rewards uses reasonable administrative, technical, and
            operational measures intended to reduce the risk of unauthorized
            access, misuse, loss, or disclosure of user information. However, no
            internet-based service, transmission method, or data storage
            environment can be guaranteed to be completely secure.
          </p>
          <p>
            Personal data may be retained for as long as reasonably necessary to
            operate the account, maintain reward and transaction records, comply
            with legal obligations, resolve disputes, investigate abuse, enforce
            policies, or protect the platform from fraud and security risks.
          </p>
        </div>
      </section>

      <section className={styles.contentSection}>
        <SectionHead
          Icon={FaTrashAlt}
          title="User rights, deletion, and account closure"
        />
        <div className={styles.card}>
          <p>
            Users may contact VELOOP Rewards to request access, correction,
            deletion, or closure of their account-related information where such
            rights are available and reasonably supported. In order to protect
            user accounts, the platform may require identity or account
            verification before acting on any sensitive request.
          </p>
          <ul>
            {userRights.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
          <p>
            Where a deletion request is approved after verification and there is
            no unresolved compliance, abuse, payment, or legal issue requiring
            retention, the platform may permanently delete eligible user data
            from active systems.
          </p>
        </div>
      </section>

      <section className={styles.contentSection}>
        <SectionHead
          Icon={FaGavel}
          title="Children, international access, and policy updates"
        />
        <div className={styles.card}>
          <p>
            VELOOP Rewards is not intended to solicit unlawful use by minors
            under the age required by local law. Where a user is below the
            legally required age in their jurisdiction, platform use should
            occur only with parental or guardian supervision.
          </p>
          <p>
            The platform may restrict or deny access in selected regions for
            operational, legal, compliance, or security reasons. VELOOP Rewards
            may also update this Privacy Policy from time to time by publishing
            a revised version on the website, and continued use after such
            updates may be treated as acceptance of the revised policy where
            permitted by law.
          </p>
        </div>
      </section>
    </LegalHero>
  );
};

export default PrivacyPolicyPage;
