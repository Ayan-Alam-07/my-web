import React from "react";
import LegalHero from "../common/LegalHero";
import SectionHead from "../common/SectionHead";
import styles from "../common/LegalDocs.module.css";

import {
  FaExclamationTriangle,
  FaRocket,
  FaTools,
  FaClipboardCheck,
  FaUserShield,
  FaBalanceScale,
} from "react-icons/fa";

const metaInfo = [
  { title: "Effective Date", value: "Launch Date" },
  { title: "Last Updated", value: "May 18, 2026" },
  { title: "Document Type", value: "Future Features Notice" },
  {
    title: "Applies To",
    value: "Upcoming tools, game systems, rewards, and platform expansions",
  },
];

const supportTitle = ["Feature questions", "Important development note"];

const supportDesc = [
  "Users with questions about announced, previewed, experimental, upcoming, or unavailable platform features may contact VELOOP Rewards support for general clarification where appropriate.",
  "Any mention of planned, upcoming, beta, preview, possible, experimental, or future features is informational only and does not create a legal promise, service guarantee, launch commitment, or permanent right of access.",
];

const finalNotice = [
  "This Future Features Notice should be read together with the Terms & Conditions, Platform Currency Policy, Earnings Disclaimer, Disclaimer, Legal Notice, and other legal pages published by VELOOP Rewards.",
  "By using VELOOP Rewards, users acknowledge that future features, preview tools, experimental mechanics, and planned additions may change in concept, scope, timing, availability, eligibility, or may never be released at all.",
];

const possibleFeatures = [
  "Lucky draw systems, milestone rewards, collectible card mechanics, surprise rewards, mystery rewards, referral milestones, and team-based competitive features.",
  "Additional mission systems, seasonal campaigns, leaderboard variations, exchange-center expansions, new reward categories, and event-based platform mechanics.",
  "New monetization, promotional, or partner-linked opportunities, including expanded task systems, sponsored activities, and platform collaboration features.",
  "Future digital reward models, blockchain-related experiments, web3-style mechanics, or other optional technology-driven platform features where permitted and operationally appropriate.",
];

const FutureFeaturesNoticePage = () => {
  return (
    <LegalHero
      badge="Future Features Notice"
      hTitle="Future Features Notice"
      hText="This notice explains how VELOOP Rewards communicates about planned, upcoming, experimental, beta, preview, or possible future features, products, and reward systems."
      metaInfo={metaInfo}
      crumb
      cTitle="Future Features Notice"
      fNoticeText={finalNotice}
      supportTitle={supportTitle}
      supportDesc={supportDesc}
    >
      <section className={styles.noticeSection}>
        <SectionHead
          Icon={FaExclamationTriangle}
          title="Important future-feature notice"
        />
        <div className={styles.noticeBox}>
          <p>
            VELOOP Rewards may refer to upcoming tools, planned systems, beta
            ideas, preview concepts, roadmap items, or experimental platform
            features in its app, website, community spaces, support messages, or
            promotional communication. Such references are provided for
            informational purposes only and should not be interpreted as a
            binding promise that any specific feature will be launched,
            maintained, or made available to all users.
          </p>
        </div>
      </section>

      <section className={styles.contentSection}>
        <SectionHead
          Icon={FaRocket}
          title="Examples of possible future features"
        />
        <div className={styles.card}>
          <p>
            VELOOP Rewards may explore, test, discuss, preview, or develop
            additional features in the future. These may include, without
            limitation:
          </p>
          <ul>
            {possibleFeatures.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
          <p>
            The presence of a feature mention, teaser, roadmap note, interface
            placeholder, announcement, waitlist, coming-soon label, or in-app
            reference does not guarantee release or continued support.
          </p>
        </div>
      </section>

      <section className={styles.contentSection}>
        <SectionHead
          Icon={FaTools}
          title="Changes, delays, and cancellations"
        />
        <div className={styles.card}>
          <p>
            VELOOP Rewards reserves the right to change, delay, pause, test,
            limit, redesign, discontinue, or cancel any future feature, even
            after discussion, promotion, early access, or partial rollout.
            Development timelines may shift due to technical limitations, legal
            concerns, business decisions, fraud prevention needs, resource
            constraints, security reviews, or third-party dependency issues.
          </p>
          <p>
            Users should not rely on any anticipated feature as a guaranteed
            future benefit, source of earnings, platform entitlement, or
            permanent functionality unless and until the feature is officially
            released and governed by the then-current platform rules.
          </p>
        </div>
      </section>

      <section className={styles.contentSection}>
        <SectionHead
          Icon={FaClipboardCheck}
          title="Testing, beta access, and eligibility"
        />
        <div className={styles.card}>
          <p>
            Some upcoming features may be made available only in limited
            testing, beta environments, phased rollouts, invite-only releases,
            region-specific launches, or account-specific experiments. Access to
            a beta, test, or pilot feature does not guarantee ongoing access,
            general release, or continued reward treatment.
          </p>
          <p>
            VELOOP Rewards may apply separate rules, eligibility requirements,
            temporary restrictions, experimental reward logic, or additional
            verification standards to any future feature made available on a
            limited or testing basis.
          </p>
        </div>
      </section>

      <section className={styles.contentSection}>
        <SectionHead
          Icon={FaUserShield}
          title="User expectations and platform protection"
        />
        <div className={styles.card}>
          <p>
            Users must not treat feature announcements, hints, social posts,
            support statements, prototype screens, or community discussions as a
            guarantee of future platform behavior, fixed reward design, or
            permanent product scope. VELOOP Rewards may update its roadmap and
            feature direction at any time.
          </p>
          <p>
            Where a future feature affects internal currencies, tasks, bonuses,
            eligibility, leaderboards, or redemption systems, the platform may
            introduce additional legal, fraud, privacy, verification, or
            operational terms before making the feature generally available.
          </p>
        </div>
      </section>

      <section className={styles.contentSection}>
        <SectionHead
          Icon={FaBalanceScale}
          title="Interpretation and policy updates"
        />
        <div className={styles.card}>
          <p>
            VELOOP Rewards reserves the right to interpret all feature-related
            communications consistently with this notice and other applicable
            platform policies. Any platform roadmap, feature preview, or
            announcement must be read as non-binding unless expressly stated
            otherwise in a formal published policy or release notice.
          </p>
          <p>
            This notice may be updated from time to time as the platform
            evolves, new technologies are considered, or additional
            future-facing systems are introduced.
          </p>
        </div>
      </section>
    </LegalHero>
  );
};

export default FutureFeaturesNoticePage;
