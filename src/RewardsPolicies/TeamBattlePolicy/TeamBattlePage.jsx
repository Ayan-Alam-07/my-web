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
      cTitle={"future / team-battle"}
      badge="Coming Soon"
      hTitle="Team Battle"
      hText="Coming soon: Team Battle is an upcoming feature that may allow eligible users to join team-based competitive or collaborative platform events. Final rules for team formation, scoring, ranking, rewards, and participation conditions will be published only when the feature is officially launched."
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
        "Team Battle is an upcoming feature concept and is not currently live for user participation.",
        "Final participation rules, scoring methods, team limits, rankings, and reward structures may change before release and will apply only after official platform activation.",
      ]}
      supportTitle={["Support details", "Future feature notice"]}
      supportDesc={[
        "Support may not be able to confirm final team mechanics, scoring logic, or reward rules until Team Battle is officially launched.",
        "We will publish clear participation rules, team conditions, event guidance, and support information once the feature becomes live.",
      ]}
      isRewards={true}
    >
      <section className={styles.noticeBox}>
        <SectionHead Icon={FaExclamationTriangle} title="Current status" />
        <p>
          Team Battle is not live yet and no team event, ranking session, or
          battle reward system is currently active for users. This page is a
          preview of a possible future feature and does not create any current
          right to enter, join a team, compete, or claim a reward.
        </p>
      </section>

      <section className={styles.section}>
        <SectionHead Icon={FaUsersCog} title="Feature overview" />
        <p>
          Team Battle may be introduced as a future feature where users can take
          part in team-based platform events based on shared progress,
          performance, contribution, or event participation. Final mechanics,
          scoring logic, match structure, ranking systems, and reward models may
          vary by event type, season, campaign design, or future platform
          update.
        </p>
      </section>

      <section className={styles.section}>
        <SectionHead Icon={FaCheckCircle} title="What users can expect" />
        <ul>
          <li>
            Future Team Battle events may allow users to join teams and
            participate in limited-time competitive or collaborative challenges.
          </li>
          <li>
            Teams may be assigned automatically, selected by event design, or
            based on eligibility conditions announced at launch.
          </li>
          <li>
            Rankings, milestone goals, or contribution-based rewards may differ
            from one event to another depending on the final campaign structure.
          </li>
        </ul>
      </section>

      <section className={styles.section}>
        <SectionHead
          Icon={FaCheckCircle}
          title="Expected participation principles"
        />
        <ul>
          <li>
            Participation may require a valid account, eligible activity, and
            compliance with event-specific conditions announced for each live
            Team Battle event.
          </li>
          <li>
            The platform may apply event periods, team size limits, score
            thresholds, contribution rules, entry caps, or region-based access
            controls.
          </li>
          <li>
            Full live rules for team assignment, ranking methods, reward
            distribution, and tie-handling may be published separately for each
            event if and when Team Battle launches.
          </li>
        </ul>
      </section>

      <section className={styles.section}>
        <SectionHead Icon={FaShieldAlt} title="What is not available yet" />
        <ul>
          <li>No Team Battle event is currently open for participation.</li>
          <li>
            No active team formation, ranking board, or battle reward is
            currently available.
          </li>
          <li>
            Users cannot currently join, reserve, create, or request team-based
            participation based on this preview page.
          </li>
        </ul>
      </section>

      <section className={styles.section}>
        <SectionHead Icon={FaShieldAlt} title="Fair-play and enforcement" />
        <ul>
          <li>
            Manipulated activity, fake participation, coordinated abuse, exploit
            use, or artificial score generation may lead to disqualification,
            reward cancellation, or account enforcement under platform rules.
          </li>
          <li>
            The platform may review, suspend, reset, or cancel results if
            integrity concerns, abuse indicators, technical issues, or fairness
            risks are detected.
          </li>
          <li>
            Preview information does not guarantee that Team Battle will launch,
            remain available, or continue in the same format shown in early
            notices.
          </li>
        </ul>
      </section>

      <section className={styles.section}>
        <SectionHead
          Icon={FaExclamationTriangle}
          title="Event-specific rules notice"
        />
        <p>
          If Team Battle is launched in the future, individual events may have
          their own detailed rules covering eligibility, team assignment,
          scoring, ranking periods, contribution logic, reward conditions, and
          dispute handling. Users should rely on the official event notice for a
          live Team Battle event rather than on this preview page alone.
        </p>
      </section>

      <section className={styles.noticeBox}>
        <SectionHead Icon={FaExclamationTriangle} title="Summary and caution" />
        <p>
          We are exploring Team Battle as a future gamified feature for users
          who enjoy team-based challenges and shared competition. Until the
          feature is officially launched, all team mechanics, rankings, event
          conditions, and reward structures remain preliminary and may change
          during development.
        </p>
      </section>
    </LegalHero>
  );
};

export default TeamBattlePage;
