import React from "react";
import LegalHero from "../common/LegalHero";
import SectionHead from "../common/SectionHead";
import styles from "../common/LegalDocs.module.css";
import {
  FaExclamationTriangle,
  FaTools,
  FaAd,
  FaMoneyCheckAlt,
  FaShieldAlt,
  FaBalanceScale,
  FaSyncAlt,
} from "react-icons/fa";

const metaInfo = [
  { title: "Effective Date", value: "Launch Date" },
  { title: "Last Updated", value: "May 18, 2026" },
  { title: "Document Type", value: "Platform Disclaimer" },
  { title: "Applies To", value: "All VELOOP Rewards users" },
];

const supportTitle = ["Disclaimer support", "Operational note"];

const supportDesc = [
  "For questions about platform rules, withdrawals, legal concerns, or content on this page, users should contact VELOOP Rewards using the appropriate support or business email.",
  "Where a user believes a reward, feature, or activity was incorrectly represented, the platform may review the issue but is not obligated to grant any compensation unless required by law or explicitly approved by the platform.",
];

const finalNotice = [
  "This Disclaimer applies together with the Terms & Conditions, Privacy Policy, Earnings Disclaimer, Advertising & Offerwall Policy, Withdrawal & Reward Verification Policy, and other legal pages published by VELOOP Rewards.",
  "By using VELOOP Rewards, the user acknowledges that platform services, rewards, campaigns, tracking systems, and redemption functions are provided subject to operational limits, validation, third-party dependencies, and ongoing platform control.",
];

const DisclaimerPage = () => {
  return (
    <LegalHero
      badge="Disclaimer"
      hTitle="Disclaimer"
      hText="This Disclaimer explains the limits of responsibility, service guarantees, third-party reliance, reward expectations, and legal interpretation that apply when users access or rely on VELOOP Rewards and its features."
      metaInfo={metaInfo}
      crumb
      cTitle="Disclaimer"
      fNoticeText={finalNotice}
      supportTitle={supportTitle}
      supportDesc={supportDesc}
    >
      <section className={styles.noticeSection}>
        <SectionHead
          Icon={FaExclamationTriangle}
          title="Important legal notice"
        />
        <div className={styles.noticeBox}>
          <p>
            VELOOP Rewards is a platform-managed promotional rewards service
            provided on an "as available" and "as operated" basis. Nothing on
            the platform should be interpreted as a guarantee of uninterrupted
            service, guaranteed earnings, guaranteed task availability, fixed
            redemption approval, financial return, or legal entitlement to
            continued access to any feature or reward mechanic.
          </p>
        </div>
      </section>

      <section className={styles.contentSection}>
        <SectionHead Icon={FaTools} title="General platform disclaimer" />
        <div className={styles.card}>
          <p>
            VELOOP Rewards provides access to promotional tasks, gamified
            systems, reward-based features, redemption opportunities, account
            tools, and engagement mechanics according to platform configuration
            at a given time. Platform content, task listings, event structures,
            exchange systems, and reward mechanics may change without prior
            notice.
          </p>
          <p>
            The platform does not promise that all services will remain
            continuously available, error-free, secure, complete, or suitable
            for every user, device, network, or jurisdiction. Temporary outages,
            bugs, maintenance, campaign interruptions, technical failures,
            validation errors, or third-party disruptions may affect the user
            experience.
          </p>
        </div>
      </section>

      <section className={styles.contentSection}>
        <SectionHead
          Icon={FaAd}
          title="Advertising, surveys, offerwalls, and third-party systems"
        />
        <div className={styles.card}>
          <p>
            VELOOP Rewards may rely on third-party ad providers, rewarded video
            systems, offerwalls, survey providers, tracking systems, promotional
            campaigns, authentication services, or analytics tools. The platform
            does not control all actions, tracking decisions, approval
            standards, fraud filters, payment decisions, or service outcomes of
            such third parties.
          </p>
          <p>
            VELOOP Rewards is not responsible for third-party ad unavailability,
            survey rejection, offer tracking failure, delayed crediting, partner
            account restrictions, app installation errors, eligibility
            rejection, campaign expiry, or similar external issues. Users
            participate in third-party powered activities with the understanding
            that some outcomes depend on systems outside direct platform
            control.
          </p>
        </div>
      </section>

      <section className={styles.contentSection}>
        <SectionHead
          Icon={FaMoneyCheckAlt}
          title="Rewards, withdrawals, and value disclaimer"
        />
        <div className={styles.card}>
          <p>
            VELOOP Rewards may allow users to collect virtual platform credits,
            complete reward activities, request withdrawals, or access exchange
            mechanisms where supported. However, no reward, internal balance,
            activity completion, or displayed account amount should be
            interpreted as guaranteed cash ownership, financial deposit, bank
            balance, salary, investment income, or unconditional withdrawal
            entitlement.
          </p>
          <p>
            All rewards remain subject to verification, anti-fraud review,
            account standing, campaign validity, technical validation, platform
            rules, payout method support, and operational approval. The platform
            may delay, limit, deny, reverse, correct, or cancel a reward or
            withdrawal where suspicious activity, abuse indicators, validation
            issues, partner failure, or compliance concerns exist.
          </p>
        </div>
      </section>

      <section className={styles.contentSection}>
        <SectionHead
          Icon={FaShieldAlt}
          title="Security and user risk disclaimer"
        />
        <div className={styles.card}>
          <p>
            VELOOP Rewards applies reasonable efforts to maintain service
            security, account protections, and fraud prevention controls. Even
            so, no internet service, online platform, network connection,
            browser environment, or digital account system can be guaranteed to
            be fully secure or immune from misuse, compromise, delay, malicious
            conduct, or technical attack.
          </p>
          <p>
            Users are responsible for maintaining the safety of their devices,
            credentials, email access, and login methods. VELOOP Rewards is not
            responsible for losses arising from a user’s own negligence, device
            compromise, insecure network use, phishing response, or unauthorized
            third-party access that occurs outside reasonable platform control.
          </p>
        </div>
      </section>

      <section className={styles.contentSection}>
        <SectionHead
          Icon={FaSyncAlt}
          title="Availability, updates, and feature changes"
        />
        <div className={styles.card}>
          <p>
            VELOOP Rewards reserves the right to add, modify, restrict, suspend,
            pause, replace, or permanently remove any feature, reward, event,
            campaign, exchange system, task type, referral mechanic, level rule,
            withdrawal route, or promotional offering at any time.
          </p>
          <p>
            Users should not rely on current platform behavior as a permanent
            promise of future availability. Any examples, descriptions, visual
            balances, feature labels, or historical reward patterns shown on the
            platform are subject to revision, correction, or discontinuation
            according to platform discretion.
          </p>
        </div>
      </section>

      <section className={styles.contentSection}>
        <SectionHead
          Icon={FaBalanceScale}
          title="Interpretation and limitation of reliance"
        />
        <div className={styles.card}>
          <p>
            Content published on VELOOP Rewards, including descriptions, FAQs,
            in-app text, help content, support replies, promotional messaging,
            and user-facing explanations, is intended for general operational
            guidance unless explicitly stated otherwise. Such content should not
            be treated as legal advice, financial advice, tax advice, investment
            advice, guaranteed business representation, or binding promise
            beyond the platform’s published legal documents.
          </p>
          <p>
            To the maximum extent permitted by applicable law, VELOOP Rewards
            disclaims liability for indirect, incidental, consequential,
            speculative, or expectation-based losses arising from reliance on
            reward estimates, platform availability, account balances, campaign
            participation, or third-party activity outcomes.
          </p>
        </div>
      </section>
    </LegalHero>
  );
};

export default DisclaimerPage;
