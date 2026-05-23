import React from "react";
import styles from "../FeaturePolicyPage.module.css";
import LegalHero from "../../Legal/common/LegalHero";
import SectionHead from "../../Legal/common/SectionHead";
import {
  FaUsersCog,
  FaExclamationTriangle,
  FaCheckCircle,
  FaShieldAlt,
} from "react-icons/fa";

const TeamBattlePage = () => {
  return (
    <LegalHero
      crumb={true}
      badge="Future Feature Rules"
      hTitle="Team Battle"
      hText="This page provides preliminary rules for the upcoming Team Battle feature, including participation principles, fair-play expectations, and platform rights to change or delay release."
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
        "Team Battle is an upcoming feature and may be introduced, revised, delayed, limited, or cancelled at the platform’s discretion.",
        "Any future participation, scoring, ranking, or team-based reward system will remain subject to separate live rules when officially activated.",
      ]}
      supportTitle={["Support details", "Future feature notice"]}
      supportDesc={[
        "Support may provide only limited information until this feature is officially launched.",
        "No user is entitled to access, rewards, or team status for a feature that is not yet live or fully deployed.",
      ]}
      isRewards={true}
    >
      <section className={styles.section}>
        <SectionHead Icon={FaUsersCog} title="Feature overview" />
        <p>
          Team Battle is a planned future feature intended to allow users to
          participate in team-based competitive or collaborative platform
          events. Final mechanics, scoring logic, entry conditions, and rewards
          may differ from any early notices or previews.
        </p>
      </section>
      <section className={styles.section}>
        <SectionHead
          Icon={FaCheckCircle}
          title="Expected participation principles"
        />
        <ul>
          <li>
            Participation may require account eligibility, valid activity, and
            compliance with event-specific rules.
          </li>
          <li>
            Reward distribution, team assignment, and battle conditions may be
            updated before or after launch.
          </li>
          <li>
            The platform may apply event periods, rank thresholds, team limits,
            or entry controls.
          </li>
        </ul>
      </section>
      <section className={styles.section}>
        <SectionHead Icon={FaShieldAlt} title="Fair-play and enforcement" />
        <ul>
          <li>
            Manipulated team activity, coordinated abuse, fake participation, or
            exploit use will be prohibited.
          </li>
          <li>
            The platform may suspend, cancel, or reset results if integrity
            risks or technical issues arise.
          </li>
          <li>
            Preview information does not guarantee final availability or final
            reward logic.
          </li>
        </ul>
      </section>
      <section className={styles.noticeBox}>
        <SectionHead Icon={FaExclamationTriangle} title="Summary and caution" />
        <p>
          Team Battle is an upcoming feature notice only. Final live rules may
          differ, and the platform may change, postpone, or remove the feature
          before or after rollout.
        </p>
      </section>
    </LegalHero>
  );
};

export default TeamBattlePage;
