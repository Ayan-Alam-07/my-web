import React from "react";
import styles from "../FeaturePolicyPage.module.css";
import LegalHero from "../../Legal/common/LegalHero";
import SectionHead from "../../Legal/common/SectionHead";
import {
  FaProjectDiagram,
  FaExclamationTriangle,
  FaCheckCircle,
  FaShieldAlt,
} from "react-icons/fa";

const ReferralMilestonesPage = () => {
  return (
    <LegalHero
      crumb={true}
      badge="Future Feature Rules"
      hTitle="Referral Milestones"
      hText="This page provides preliminary rules for the upcoming referral milestone feature, including milestone logic, validation conditions, and anti-abuse controls."
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
        "Referral Milestones is a future feature concept and may be changed, paused, or not launched depending on platform priorities and operational decisions.",
        "Any future milestone benefits will remain subject to referral validity, abuse review, and official platform confirmation.",
      ]}
      supportTitle={["Support details", "Future feature notice"]}
      supportDesc={[
        "Support may not be able to confirm milestone rules until the feature becomes live.",
        "No milestone claim is valid until the platform formally activates the feature and applicable conditions.",
      ]}
      isRewards={true}
    >
      <section className={styles.section}>
        <SectionHead Icon={FaProjectDiagram} title="Feature overview" />
        <p>
          Referral Milestones may in the future allow users to receive
          additional rewards after reaching specific valid referral targets.
          Milestone numbers, reward types, and qualification conditions will be
          determined by the platform when and if the feature launches.
        </p>
      </section>
      <section className={styles.section}>
        <SectionHead Icon={FaCheckCircle} title="Expected milestone rules" />
        <ul>
          <li>
            Milestones may depend only on valid, eligible, and non-fraudulent
            referrals accepted by the platform.
          </li>
          <li>
            Thresholds, reward values, and qualification periods may be revised
            at any time.
          </li>
          <li>
            The platform may require milestone review before any related reward
            is approved.
          </li>
        </ul>
      </section>
      <section className={styles.section}>
        <SectionHead Icon={FaShieldAlt} title="Anti-abuse rules" />
        <ul>
          <li>
            Self-referrals, duplicate accounts, fake users, manipulated signups,
            or bulk abuse will invalidate milestone eligibility.
          </li>
          <li>
            The platform may reset, deny, or reverse milestone benefits where
            abuse or error is detected.
          </li>
          <li>
            Milestone previews do not guarantee future access or future reward
            approval.
          </li>
        </ul>
      </section>
      <section className={styles.noticeBox}>
        <SectionHead Icon={FaExclamationTriangle} title="Summary and caution" />
        <p>
          Referral Milestones is a future feature notice only. Any future reward
          structure will apply only to valid referrals and may change before
          live release.
        </p>
      </section>
    </LegalHero>
  );
};

export default ReferralMilestonesPage;
