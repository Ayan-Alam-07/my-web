import React from "react";
import styles from "../FeaturePolicyPage.module.css";
import LegalHero from "../../Legal/common/LegalHero";
import SectionHead from "../../Legal/common/SectionHead";
import {
  FaCalendarCheck,
  FaExclamationTriangle,
  FaCheckCircle,
  FaShieldAlt,
} from "react-icons/fa";

const DailyCheckInPage = () => {
  return (
    <LegalHero
      crumb={true}
      badge="Feature Rules"
      hTitle="Daily Check-In"
      hText="This page explains how the Daily Check-In streak works on VELOOP Rewards, when users must claim their daily reward, what may reset a streak, and what to do if a valid claim does not appear."
      metaInfo={[
        { title: "Effective Date", value: "May 19, 2026" },
        { title: "Last Updated", value: "May 19, 2026" },
        { title: "Owner", value: "Ayan Alam" },
        {
          title: "Operating Model",
          value: "Online-operated platform based in Ramgarh, Jharkhand, India",
        },
      ]}
      fNoticeText={[
        "Daily Check-In rewards are part of the platform’s engagement system and are generally credited when a user completes a valid daily claim within the active claim window.",
        "Missed check-ins, technical issues, invalid activity, or unsupported claim attempts may interrupt or reset streak progress under current platform rules.",
      ]}
      supportTitle={["Support details", "Streak review"]}
      supportDesc={[
        "If a completed daily claim appears missing, users should contact support with their Account ID, claim date, approximate time of attempt, and a screenshot where available.",
        "Manual streak restoration is generally not available unless a verified platform-wide technical issue or a valid system-record mismatch is identified during review.",
      ]}
      isRewards={true}
    >
      <section className={styles.section}>
        <SectionHead Icon={FaCalendarCheck} title="How it works" />
        <p>
          The daily check-in system is based on streak participation. Users may
          claim eligible streak-based rewards by checking in during the
          applicable daily claim period on consecutive days.
        </p>
        <p>
          A daily claim window lasts for one platform day and resets according
          to the platform’s active schedule. Users should complete their claim
          within that period to maintain their streak.
        </p>
        <p>
          A daily claim window lasts from 00:00 to 23:59 IST each day. Users
          should complete their daily claim within this period to maintain
          streak continuity.
        </p>
      </section>
      <section className={styles.section}>
        <SectionHead Icon={FaCheckCircle} title="Streak rules" />
        <ul>
          <li>
            Users must complete one valid daily claim within each active claim
            window to maintain streak progression.
          </li>
          <li>
            Missing a claim window may reset the streak or interrupt
            streak-related benefits under current feature rules.
          </li>
          <li>
            Reward values, streak milestones, and claim timing rules may be
            updated by the platform from time to time.
          </li>
        </ul>
      </section>

      <section className={styles.section}>
        <SectionHead Icon={FaCheckCircle} title="If your check-in is missing" />
        <p>
          If a daily claim does not appear correctly, users should first refresh
          the app or page and wait a short time for the system to update. If the
          claim still appears missing, the user should contact official support
          with the Account ID, claim date, approximate time of attempt, and a
          screenshot where available.
        </p>
      </section>

      <section className={styles.section}>
        <SectionHead Icon={FaShieldAlt} title="Invalid activity" />
        <ul>
          <li>
            Using multiple accounts, bots, automated claims, or other invalid
            methods to maintain a streak is not allowed.
          </li>
          <li>
            Platform records and available system logs are used to review claim
            validity in the event of disputes.
          </li>
          <li>
            Streak rewards may be withheld, reversed, or reset where abuse,
            invalid activity, or system correction is required.
          </li>
        </ul>
      </section>
      <section className={styles.noticeBox}>
        <SectionHead Icon={FaExclamationTriangle} title="Summary and caution" />
        <p>
          Daily Check-In is designed to reward consistent participation. Users
          should complete each daily claim on time, and disputed streak issues
          may be reviewed using available platform records and system logs.
        </p>
      </section>
    </LegalHero>
  );
};

export default DailyCheckInPage;
