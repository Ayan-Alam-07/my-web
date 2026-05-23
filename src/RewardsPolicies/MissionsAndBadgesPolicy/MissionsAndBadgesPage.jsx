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
      badge="Earning Rules"
      hTitle="Missions and Badges"
      hText="This page explains how mission-based progress and badge-based achievements work inside VELOOP Rewards."
      metaInfo={[
        { title: "Effective Date", value: "Launch Date" },
        { title: "Last Updated", value: "May 23, 2026" },
        { title: "Feature Type", value: "Goal and achievement system" },
        { title: "Reward Status", value: "Subject to eligibility and review" },
      ]}
      fNoticeText={[
        "Mission completion and badge-related rewards depend on satisfying all listed feature conditions.",
        "VELOOP Rewards may update, expand, limit, or remove missions, badge criteria, and related reward values at any time.",
      ]}
      supportTitle={["Support details", "Mission notice"]}
      supportDesc={[
        "Users with mission tracking or badge progress issues may contact support with the relevant activity details.",
        "Incomplete, invalid, duplicate, or suspicious activity may prevent mission or badge credit from being issued.",
      ]}
      isRewards={true}
    >
      <section className={styles.section}>
        <SectionHead Icon={FaTasks} title="Missions" />
        <p>
          Missions are structured platform goals that may require the completion
          of one or more actions such as daily activity, referrals, ad
          engagement, games, progression tasks, or event participation.
        </p>
      </section>

      <section className={styles.section}>
        <SectionHead Icon={FaMedal} title="Badges" />
        <p>
          Badges are achievement indicators awarded for progress, milestones,
          participation, or special accomplishments within the platform. Some
          badges may include reward benefits while others may be
          recognition-only achievements.
        </p>
      </section>

      <section className={styles.section}>
        <SectionHead Icon={FaCheckCircle} title="Completion rules" />
        <ul>
          <li>All required conditions must be completed successfully.</li>
          <li>
            Progress may depend on proper tracking, account eligibility, and
            feature availability.
          </li>
          <li>
            Mission and badge rewards may be delayed, reviewed, or rejected if
            invalid activity is detected.
          </li>
        </ul>
      </section>

      <section className={styles.noticeBox}>
        <SectionHead Icon={FaExclamationTriangle} title="Important notice" />
        <p>
          Badge ownership, mission completion, and related rewards remain
          platform-managed and may be corrected or reversed where necessary for
          fairness, abuse handling, or system integrity.
        </p>
      </section>
    </LegalHero>
  );
};

export default MissionsAndBadgesPage;
