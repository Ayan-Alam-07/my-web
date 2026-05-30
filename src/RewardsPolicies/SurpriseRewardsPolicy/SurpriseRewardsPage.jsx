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
      cTitle={"future / surprise-rewards"}
      badge="Coming Soon"
      hTitle="Surprise Rewards"
      hText="Coming soon: Surprise Rewards is an upcoming promotional feature that may occasionally grant eligible users bonus rewards during special moments, campaigns, or platform activities. Final reward triggers, eligibility conditions, reward types, and availability rules will be announced only when the feature is officially launched."
      metaInfo={[
        { title: "Effective Date", value: "May 20, 2026" },
        { title: "Last Updated", value: "May 30, 2026" },
        { title: "Owner", value: "Ayan Alam" },
        {
          title: "Operating Model",
          value: "Online-operated platform based in Ramgarh, Jharkhand, India",
        },
      ]}
      fNoticeText={[
        "Surprise Rewards is an upcoming promotional feature concept and is not currently live for user participation or reward claims.",
        "Final reward timing, eligibility rules, campaign conditions, and bonus values may change before release and will apply only after official platform activation.",
      ]}
      supportTitle={["Support details", "Future feature notice"]}
      supportDesc={[
        "Support may not be able to confirm final reward triggers, campaign timing, or bonus structures until Surprise Rewards is officially launched.",
        "We will publish clear reward guidance, eligibility details, and support information once the feature becomes live.",
      ]}
      isRewards={true}
    >
      <section className={styles.noticeBox}>
        <SectionHead Icon={FaExclamationTriangle} title="Current status" />
        <p>
          Surprise Rewards is not live yet and no active bonus event, hidden
          trigger, or special reward campaign is currently available for users.
          This page is a preview of a possible future feature and does not
          create any current right to receive, request, or claim a surprise
          reward.
        </p>
      </section>

      <section className={styles.section}>
        <SectionHead Icon={FaGift} title="Feature overview" />
        <p>
          Surprise Rewards may be introduced as a future engagement feature that
          occasionally grants bonus rewards through platform-defined moments,
          campaigns, milestones, or supported user activities. These rewards may
          be limited-time, event-based, selective, or linked to special
          promotional conditions announced at launch.
        </p>
      </section>

      <section className={styles.section}>
        <SectionHead Icon={FaCheckCircle} title="What users can expect" />
        <ul>
          <li>
            Future Surprise Rewards may be used to make the platform more
            engaging through occasional bonus opportunities or special reward
            moments.
          </li>
          <li>
            Not every user, session, event, or activity will necessarily qualify
            for a surprise reward.
          </li>
          <li>
            Reward types may vary by campaign and could include bonus credits,
            event-based perks, or other supported in-platform benefits if
            officially announced.
          </li>
        </ul>
      </section>

      <section className={styles.section}>
        <SectionHead Icon={FaCheckCircle} title="Expected reward rules" />
        <ul>
          <li>
            Surprise rewards may depend on account eligibility, campaign design,
            valid activity, event timing, verification status, or other
            platform-defined conditions announced at launch.
          </li>
          <li>
            The platform may limit reward availability by account, region,
            campaign period, activity type, or fairness controls.
          </li>
          <li>
            Some reward conditions may remain partially undisclosed to preserve
            the surprise nature of the feature, but the overall feature rules
            and eligibility standards will be explained when the feature goes
            live.
          </li>
        </ul>
      </section>

      <section className={styles.section}>
        <SectionHead Icon={FaShieldAlt} title="What is not available yet" />
        <ul>
          <li>No active Surprise Rewards campaign is currently running.</li>
          <li>
            No user can currently request or trigger a surprise reward on
            demand.
          </li>
          <li>
            This preview page does not guarantee future access to any specific
            bonus, campaign, or hidden reward opportunity.
          </li>
        </ul>
      </section>

      <section className={styles.section}>
        <SectionHead Icon={FaShieldAlt} title="Integrity and enforcement" />
        <ul>
          <li>
            Attempts to manipulate reward logic, exploit hidden triggers, use
            invalid activity, or artificially force eligibility may result in
            reward cancellation or account enforcement under platform rules.
          </li>
          <li>
            The platform may revoke surprise rewards that were granted in error,
            linked to abuse, or obtained through invalid participation.
          </li>
          <li>
            Preview information does not guarantee that Surprise Rewards will
            launch, remain available, or continue in the same format shown in
            early notices.
          </li>
        </ul>
      </section>

      <section className={styles.section}>
        <SectionHead
          Icon={FaExclamationTriangle}
          title="Campaign-specific rules notice"
        />
        <p>
          If Surprise Rewards is launched in the future, individual campaigns or
          reward moments may have their own specific rules covering eligibility,
          timing, reward types, campaign periods, and account conditions. Users
          should rely on the official campaign notice for any live Surprise
          Rewards event rather than on this preview page alone.
        </p>
      </section>

      <section className={styles.noticeBox}>
        <SectionHead Icon={FaExclamationTriangle} title="Summary and caution" />
        <p>
          We are exploring Surprise Rewards as a future promotional feature to
          create occasional bonus moments across the platform. Until the feature
          is officially launched, all reward logic, campaign timing, eligibility
          standards, and benefit structures remain preliminary and may change
          during development.
        </p>
      </section>
    </LegalHero>
  );
};

export default SurpriseRewardsPage;
