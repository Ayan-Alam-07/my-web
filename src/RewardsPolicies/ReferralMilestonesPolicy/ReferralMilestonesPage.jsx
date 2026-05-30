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
      cTitle={"future / referral-milestones"}
      badge="Coming Soon"
      hTitle="Referral Milestones"
      hText="Coming soon: Referral Milestones is an upcoming feature concept designed to reward long-term referral growth. Final rules, milestone targets, and benefits will be announced only when the feature is officially launched."
      metaInfo={[
        { title: "Effective Date", value: "May 20, 2026" },
        { title: "Last Updated", value: "May 19, 2026" },
        { title: "Owner", value: "Ayan Alam" },
        {
          title: "Operating Model",
          value: "Online-operated platform based in Ramgarh, Jharkhand, India",
        },
      ]}
      fNoticeText={[
        "Referral Milestones is an upcoming feature concept that we are currently exploring to reward long-term referral growth.",
        "Final milestone targets, benefits, launch timing, and eligibility rules may change before release and will apply only after official platform activation.",
      ]}
      supportTitle={["Support details", "Future feature notice"]}
      supportDesc={[
        "Support may not be able to confirm final milestone rules, thresholds, or reward values until the feature is officially launched.",
        "We will publish clear milestone rules, qualifying conditions, and support guidance once Referral Milestones becomes live.",
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

      <section className={styles.noticeBox}>
        <SectionHead Icon={FaExclamationTriangle} title="Current status" />
        <p>
          Referral Milestones is not live yet and cannot currently be earned,
          claimed, or activated by users. This page is an early feature preview
          only and is intended to explain the direction of the feature before
          launch.
        </p>
      </section>

      <section className={styles.section}>
        <SectionHead Icon={FaCheckCircle} title="What users can expect" />
        <ul>
          <li>
            The feature may reward users for reaching valid referral milestones
            over time.
          </li>
          <li>
            Rewards, thresholds, and qualification windows may differ by launch
            version or campaign design.
          </li>
          <li>
            Only genuine, eligible, and platform-approved referrals may count
            toward any future milestone.
          </li>
        </ul>
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

      <section className={styles.section}>
        <SectionHead Icon={FaShieldAlt} title="What is not available yet" />
        <ul>
          <li>Milestone tracking is not currently active for users.</li>
          <li>No milestone reward can currently be claimed or requested.</li>
          <li>
            Referral counts are not guaranteed to convert into milestone rewards
            until official launch rules are announced.
          </li>
        </ul>
      </section>

      <section className={styles.noticeBox}>
        <SectionHead Icon={FaExclamationTriangle} title="Summary and caution" />
        <p>
          We are working on Referral Milestones as a possible future reward
          feature for growing referrers. Until the feature is officially
          launched, no milestone benefit is available, and all milestone
          structures remain provisional and subject to change.
        </p>
      </section>
    </LegalHero>
  );
};

export default ReferralMilestonesPage;
