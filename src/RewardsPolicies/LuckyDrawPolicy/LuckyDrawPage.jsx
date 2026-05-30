import React from "react";
import styles from "../FeaturePolicyPage.module.css";
import LegalHero from "../../Legal/common/LegalHero";
import SectionHead from "../../Legal/common/SectionHead";
import {
  FaDice,
  FaExclamationTriangle,
  FaCheckCircle,
  FaShieldAlt,
} from "react-icons/fa";

const LuckyDrawPage = () => {
  return (
    <LegalHero
      crumb={true}
      cTitle={"future / lucky-draw"}
      badge="Coming Soon"
      hTitle="Lucky Draw"
      hText="Coming soon: Lucky Draw is an upcoming promotional feature that may allow eligible users to join limited-time reward events under platform-defined rules. Final entry methods, prize details, event timing, and eligibility conditions will be announced only when a Lucky Draw event is officially launched."
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
        "Lucky Draw is an upcoming promotional feature concept and is not currently live for user participation.",
        "Final draw rules, prize structures, entry limits, and eligibility conditions may change before release and will apply only after official platform activation.",
      ]}
      supportTitle={["Support details", "Future feature notice"]}
      supportDesc={[
        "Support may not be able to confirm final draw mechanics, prize structures, or eligibility conditions until a Lucky Draw event is officially launched.",
        "We will publish clear event rules, qualifying conditions, prize details, and support guidance once Lucky Draw becomes live.",
      ]}
      isRewards={true}
    >
      <section className={styles.noticeBox}>
        <SectionHead Icon={FaExclamationTriangle} title="Current status" />
        <p>
          Lucky Draw is not live yet and no active draw, prize event, or entry
          process is currently available for users. This page is a preview of a
          possible future promotional feature and does not create any current
          right to participate, enter, or claim a reward.
        </p>
      </section>

      <section className={styles.section}>
        <SectionHead Icon={FaDice} title="Feature overview" />
        <p>
          Lucky Draw may be introduced as a limited-time promotional event where
          eligible users can enter according to platform-defined campaign rules.
          Entry methods, selection logic, reward categories, draw timing, and
          participation conditions may vary by campaign, season, event type, or
          future platform update.
        </p>
      </section>

      <section className={styles.section}>
        <SectionHead Icon={FaCheckCircle} title="What users can expect" />
        <ul>
          <li>
            Future Lucky Draw events may offer promotional rewards through
            limited-time campaigns or special platform activities.
          </li>
          <li>
            Entry may depend on activity-based conditions, account status,
            campaign rules, region support, or event-specific participation
            limits.
          </li>
          <li>
            Prize types, winner counts, and draw timing may differ from one
            event to another depending on the final campaign structure.
          </li>
        </ul>
      </section>

      <section className={styles.section}>
        <SectionHead Icon={FaCheckCircle} title="Expected eligibility rules" />
        <ul>
          <li>
            Participation may require a valid account, compliance with platform
            policies, and satisfaction of event-specific conditions announced at
            the time of launch.
          </li>
          <li>
            The platform may limit entries by account, event, region, campaign
            period, verification status, or other fairness controls.
          </li>
          <li>
            Full event rules, prize details, entry windows, and selection
            methods will be published separately for each live Lucky Draw event
            if and when the feature launches.
          </li>
        </ul>
      </section>

      <section className={styles.section}>
        <SectionHead Icon={FaShieldAlt} title="What is not available yet" />
        <ul>
          <li>No Lucky Draw event is currently open for entry.</li>
          <li>
            No prize pool, winner list, or draw schedule is currently active.
          </li>
          <li>
            Users cannot currently submit, reserve, or request Lucky Draw
            participation based on this preview page.
          </li>
        </ul>
      </section>

      <section className={styles.section}>
        <SectionHead Icon={FaShieldAlt} title="Integrity and enforcement" />
        <ul>
          <li>
            Fraud, duplicate entries, manipulated activity, fake accounts, or
            exploit-based participation may result in disqualification,
            cancellation of rewards, or account enforcement.
          </li>
          <li>
            The platform may review, delay, cancel, or revise draw outcomes if
            verification issues, abuse indicators, technical errors, or fairness
            concerns are detected.
          </li>
          <li>
            Preview information does not guarantee that a specific Lucky Draw
            event will launch, remain available, or continue in the same format.
          </li>
        </ul>
      </section>

      <section className={styles.section}>
        <SectionHead
          Icon={FaExclamationTriangle}
          title="Event-specific rules notice"
        />
        <p>
          If Lucky Draw is launched in the future, each live event may have its
          own specific rules covering eligibility, opening and closing dates,
          prize details, draw timing, winner selection, and claim conditions.
          Users should rely on the official event notice published for that
          specific draw rather than on this preview page alone.
        </p>
      </section>

      <section className={styles.noticeBox}>
        <SectionHead Icon={FaExclamationTriangle} title="Summary and caution" />
        <p>
          We are exploring Lucky Draw as a future promotional feature for
          limited-time reward campaigns. Until the feature is officially
          launched, all Lucky Draw mechanics, prizes, eligibility rules, and
          campaign conditions remain preliminary and may change during
          development.
        </p>
      </section>
    </LegalHero>
  );
};

export default LuckyDrawPage;
