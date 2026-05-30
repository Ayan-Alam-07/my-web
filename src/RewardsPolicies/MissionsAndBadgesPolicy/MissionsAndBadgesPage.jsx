import React from "react";
import styles from "../FeaturePolicyPage.module.css";
import LegalHero from "../../Legal/common/LegalHero";
import SectionHead from "../../Legal/common/SectionHead";
import {
  FaTasks,
  FaMedal,
  FaCheckCircle,
  FaExclamationTriangle,
} from "react-icons/fa";

const MissionsAndBadgesPage = () => {
  return (
    <LegalHero
      crumb={true}
      cTitle={"earning / missions-and-badges"}
      badge="Achievements"
      hTitle="Missions and Badges"
      hText="This page explains how missions and badges work inside VELOOP Rewards, how users can complete goals, how achievements are tracked, and when badges provide rewards or recognition-only status."
      metaInfo={[
        { title: "Effective Date", value: "May 23, 2026" },
        { title: "Last Updated", value: "May 23, 2026" },
        { title: "Feature Type", value: "Goal and achievement system" },
        {
          title: "Reward Status",
          value: "Usually verified automatically after valid completion",
        },
      ]}
      fNoticeText={[
        "Mission completion and badge-related rewards depend on completing all required conditions under the active feature rules.",
        "Some badges may provide reward-linked benefits, while others may be recognition-only achievements, depending on the badge description or campaign settings.",
      ]}
      supportTitle={["Support details", "Mission notice"]}
      supportDesc={[
        "Users with mission tracking or badge progress issues may contact support with the relevant activity details, approximate date, and affected mission or badge information.",
        "Valid issues are usually reviewed through available activity records, while incomplete, invalid, duplicate, or suspicious activity may prevent mission or badge credit from being issued.",
      ]}
      isRewards={true}
    >
      <section className={styles.section}>
        <SectionHead Icon={FaTasks} title="Missions" />
        <p>
          Missions are structured platform goals that may require users to
          complete one or more eligible actions, such as daily activity,
          referrals, ad engagement, games, progression tasks, or event
          participation.
        </p>
        <p>
          Completing missions may help users unlock progress milestones, badge
          eligibility, or feature-based rewards, depending on the active mission
          design.
        </p>
      </section>

      <section className={styles.section}>
        <SectionHead Icon={FaMedal} title="Badges" />
        <p>
          Badges are achievement indicators awarded for progress, milestones,
          participation, or special accomplishments within the platform.
        </p>
        <p>
          A badge may either provide a defined feature benefit or serve as a
          recognition-only achievement, depending on the badge description,
          campaign rules, or current platform settings.
        </p>
      </section>

      <section className={styles.section}>
        <SectionHead Icon={FaCheckCircle} title="Completion rules" />
        <ul>
          <li>
            All required mission conditions must be completed successfully for
            progress or reward credit to apply.
          </li>
          <li>
            Progress may depend on valid tracking, account eligibility, feature
            availability, and completion within the required time or campaign
            rules.
          </li>
          <li>
            Eligible mission and badge rewards are usually processed after valid
            completion, but may be delayed or reviewed where technical issues or
            invalid activity are detected.
          </li>
        </ul>
      </section>

      <section className={styles.section}>
        <SectionHead Icon={FaMedal} title="Reward and recognition types" />
        <p>
          Some badges are designed as recognition-only achievements, while
          others may be linked to feature benefits, bonus access, or reward
          eligibility. Users should check the badge or mission description to
          understand whether a specific achievement includes a reward benefit.
        </p>
      </section>

      <section className={styles.noticeBox}>
        <SectionHead Icon={FaExclamationTriangle} title="Important notice" />
        <p>
          Mission progress, badge ownership, and related rewards are managed
          through the platform’s tracking and verification systems and may be
          corrected where necessary to address technical errors, invalid
          activity, or fairness concerns.
        </p>
      </section>
    </LegalHero>
  );
};

export default MissionsAndBadgesPage;
