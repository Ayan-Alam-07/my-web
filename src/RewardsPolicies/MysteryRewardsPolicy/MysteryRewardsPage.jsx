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
      cTitle={"future / mystery-rewards"}
      badge="Coming Soon"
      hTitle="Mystery Rewards"
      hText="Coming soon: Mystery Rewards is an upcoming feature that may allow eligible users to receive reward outcomes that are revealed only at or after the moment of qualification. Final reward types, eligibility rules, campaign conditions, and availability details will be announced only when the feature is officially launched."
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
        "Mystery Rewards is an upcoming feature concept and is not currently live for user participation or reward claims.",
        "Final reward structures, reveal conditions, eligibility rules, and campaign formats may change before release and will apply only after official platform activation.",
      ]}
      supportTitle={["Support details", "Future feature notice"]}
      supportDesc={[
        "Support may not be able to confirm final reward outcomes, reveal methods, or campaign conditions until Mystery Rewards is officially launched.",
        "We will publish clear reward guidance, eligibility details, and support information once the feature becomes live.",
      ]}
      isRewards={true}
    >
      <section className={styles.noticeBox}>
        <SectionHead Icon={FaExclamationTriangle} title="Current status" />
        <p>
          Mystery Rewards is not live yet and no active mystery reward event,
          reward reveal, or related campaign is currently available for users.
          This page is a preview of a possible future feature and does not
          create any current right to receive, request, or claim a mystery
          reward.
        </p>
      </section>

      <section className={styles.section}>
        <SectionHead Icon={FaQuestionCircle} title="Feature overview" />
        <p>
          Mystery Rewards may be introduced as a future promotional feature
          where the final reward is not fully disclosed until qualification,
          reveal, or reward delivery. The feature may use event-based,
          campaign-based, limited-time, or condition-based reward logic
          depending on the final platform design.
        </p>
      </section>

      <section className={styles.section}>
        <SectionHead Icon={FaCheckCircle} title="What users can expect" />
        <ul>
          <li>
            Future Mystery Rewards may be designed to add excitement and
            curiosity through reward outcomes that are revealed later rather
            than shown in advance.
          </li>
          <li>
            Reward categories may vary by campaign and could include bonus
            credits, promotional perks, or other supported in-platform benefits
            if officially announced.
          </li>
          <li>
            Not every user, event, or activity will necessarily qualify for a
            mystery reward opportunity.
          </li>
        </ul>
      </section>

      <section className={styles.section}>
        <SectionHead Icon={FaCheckCircle} title="Expected reward principles" />
        <ul>
          <li>
            Reward categories, reveal timing, eligibility standards, and
            availability may differ between users, campaigns, event periods, or
            future launch versions.
          </li>
          <li>
            Some reward details may remain undisclosed until the reveal stage in
            order to preserve the mystery element of the feature, but the
            overall rules and eligibility principles will be explained when the
            feature becomes live.
          </li>
          <li>
            The platform may apply campaign periods, account-level limits,
            region restrictions, activity requirements, or verification checks
            as part of future mystery reward events.
          </li>
        </ul>
      </section>

      <section className={styles.section}>
        <SectionHead Icon={FaShieldAlt} title="What is not available yet" />
        <ul>
          <li>No Mystery Rewards event is currently active for users.</li>
          <li>
            No reward reveal flow or mystery reward claim process is currently
            available.
          </li>
          <li>
            This preview page does not guarantee future access to any specific
            reward outcome, campaign, or reveal opportunity.
          </li>
        </ul>
      </section>

      <section className={styles.section}>
        <SectionHead Icon={FaShieldAlt} title="Integrity and enforcement" />
        <ul>
          <li>
            Exploit attempts, manipulation of reward systems, multiple-account
            abuse, invalid activity, or unfair participation may invalidate
            eligibility and may lead to reward reversal or account enforcement
            under platform rules.
          </li>
          <li>
            The platform may reverse, cancel, or correct mystery rewards that
            were granted in error, linked to abuse, or obtained through invalid
            conduct.
          </li>
          <li>
            Preview information does not guarantee that Mystery Rewards will
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
          If Mystery Rewards is launched in the future, individual campaigns or
          reward events may have their own detailed rules covering eligibility,
          reveal timing, campaign periods, reward categories, limits, and claim
          conditions. Users should rely on the official notice for any live
          Mystery Rewards campaign rather than on this preview page alone.
        </p>
      </section>

      <section className={styles.noticeBox}>
        <SectionHead Icon={FaExclamationTriangle} title="Summary and caution" />
        <p>
          We are exploring Mystery Rewards as a future promotional feature that
          may reveal reward outcomes only after certain qualifying conditions
          are met. Until the feature is officially launched, all reward logic,
          reveal methods, campaign timing, and eligibility standards remain
          preliminary and may change during development.
        </p>
      </section>
    </LegalHero>
  );
};

export default MysteryRewardsPage;
