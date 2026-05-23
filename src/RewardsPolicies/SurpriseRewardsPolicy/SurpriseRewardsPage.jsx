import React from "react";
import styles from "../FeaturePolicyPage.module.css";
import LegalHero from "../../Legal/common/LegalHero";
import SectionHead from "../../Legal/common/SectionHead";
import {
  FaGift,
  FaExclamationTriangle,
  FaCheckCircle,
  FaShieldAlt,
} from "react-icons/fa";

const SurpriseRewardsPage = () => {
  return (
    <LegalHero
      crumb={true}
      badge="Future Feature Rules"
      hTitle="Surprise Rewards"
      hText="This page provides preliminary rules for the upcoming Surprise Rewards feature, including promotional availability, reward uncertainty, and platform controls."
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
        "Surprise Rewards is an upcoming promotional feature and may be offered selectively, conditionally, temporarily, or not at all.",
        "Reward timing, value, and trigger conditions may be varied entirely at the platform’s discretion.",
      ]}
      supportTitle={["Support details", "Future feature notice"]}
      supportDesc={[
        "Support may not be able to confirm undisclosed or unreleased reward triggers before launch.",
        "Preview notices do not guarantee that a user will receive any surprise reward or future reward access.",
      ]}
      isRewards={true}
    >
      <section className={styles.section}>
        <SectionHead Icon={FaGift} title="Feature overview" />
        <p>
          Surprise Rewards may in the future be offered as special promotional
          benefits triggered by platform-defined events, campaigns, milestones,
          or activity patterns. These rewards may be occasional, selective,
          limited, or event-specific.
        </p>
      </section>
      <section className={styles.section}>
        <SectionHead Icon={FaCheckCircle} title="Expected reward rules" />
        <ul>
          <li>
            Not all users, activities, or events will necessarily qualify for a
            surprise reward.
          </li>
          <li>
            Reward conditions, availability, and values may remain undisclosed
            or may change without notice.
          </li>
          <li>
            The platform may limit surprise rewards by account, campaign,
            geography, event period, or verification status.
          </li>
        </ul>
      </section>
      <section className={styles.section}>
        <SectionHead Icon={FaShieldAlt} title="Integrity and enforcement" />
        <ul>
          <li>
            Attempts to manipulate hidden triggers, exploit reward logic, or
            artificially force eligibility will be prohibited.
          </li>
          <li>
            The platform may revoke surprise rewards granted in error or
            obtained through invalid activity.
          </li>
          <li>
            Preview notices are informational only and do not guarantee rollout.
          </li>
        </ul>
      </section>
      <section className={styles.noticeBox}>
        <SectionHead Icon={FaExclamationTriangle} title="Summary and caution" />
        <p>
          Surprise Rewards is a future feature notice only. Any future reward
          system may be selective, limited, and subject to hidden or changing
          promotional conditions.
        </p>
      </section>
    </LegalHero>
  );
};

export default SurpriseRewardsPage;
