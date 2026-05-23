import React from "react";
import styles from "../FeaturePolicyPage.module.css";
import LegalHero from "../../Legal/common/LegalHero";
import SectionHead from "../../Legal/common/SectionHead";
import {
  FaQuestionCircle,
  FaExclamationTriangle,
  FaCheckCircle,
  FaShieldAlt,
} from "react-icons/fa";

const MysteryRewardsPage = () => {
  return (
    <LegalHero
      crumb={true}
      badge="Future Feature Rules"
      hTitle="Mystery Rewards"
      hText="This page provides preliminary rules for the upcoming Mystery Rewards feature, including uncertain reward outcomes, eligibility principles, and platform controls."
      metaInfo={[
        { title: "Effective Date", value: "Launch Date" },
        { title: "Last Updated", value: "May 19, 2026" },
        { title: "Owner", value: "Ayan Alam" },
        {
          title: "Operating Model",
          value: "Online-operated platform based in Ramgarh, Jharkhand, India",
        },
      ]}
      fNoticeText={[
        "Mystery Rewards is an upcoming feature concept and any future reward outcome, trigger logic, or availability will remain platform-controlled.",
        "The platform may revise, suspend, delay, or cancel the feature before or after any preview communication.",
      ]}
      supportTitle={["Support details", "Future feature notice"]}
      supportDesc={[
        "Support may have limited information until the feature is officially released.",
        "No early notice creates a guaranteed entitlement to any mystery reward or event outcome.",
      ]}
      isRewards={true}
    >
      <section className={styles.section}>
        <SectionHead Icon={FaQuestionCircle} title="Feature overview" />
        <p>
          Mystery Rewards may be introduced as a future promotional feature
          where users receive undisclosed or partially undisclosed reward
          outcomes under platform-defined conditions. The feature may involve
          random, conditional, event-based, or limited-time reward logic
          depending on future platform design.
        </p>
      </section>
      <section className={styles.section}>
        <SectionHead Icon={FaCheckCircle} title="Expected reward principles" />
        <ul>
          <li>
            Reward categories, eligibility rules, and availability may differ
            between users, campaigns, or event periods.
          </li>
          <li>
            The platform may choose not to disclose all trigger conditions,
            internal weighting, or selection criteria.
          </li>
          <li>
            Mystery reward structures may be changed, reset, or removed without
            prior notice.
          </li>
        </ul>
      </section>
      <section className={styles.section}>
        <SectionHead Icon={FaShieldAlt} title="Integrity and enforcement" />
        <ul>
          <li>
            Exploit attempts, manipulation of hidden systems, multiple-account
            abuse, or unfair participation may invalidate eligibility.
          </li>
          <li>
            The platform may reverse, cancel, or correct mystery rewards granted
            in error or obtained through invalid conduct.
          </li>
          <li>
            Preview content does not guarantee final launch or permanent
            operation.
          </li>
        </ul>
      </section>
      <section className={styles.noticeBox}>
        <SectionHead Icon={FaExclamationTriangle} title="Summary and caution" />
        <p>
          Mystery Rewards is a future feature notice only. Any future version
          may involve undisclosed conditions, changing reward logic, and limited
          promotional availability.
        </p>
      </section>
    </LegalHero>
  );
};

export default MysteryRewardsPage;
