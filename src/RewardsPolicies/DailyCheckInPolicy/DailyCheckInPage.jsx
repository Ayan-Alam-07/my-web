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
      hText="This page explains the VELOOP Rewards daily streak feature, including streak continuity, eligibility, forfeiture conditions, and verification rules."
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
        "Daily check-in rewards are part of the platform’s engagement system and may depend on valid login, streak continuity, and platform rule compliance.",
        "Missed check-ins, technical failures, policy abuse, or suspicious behavior may interrupt, reset, or invalidate streak progress.",
      ]}
      supportTitle={["Support details", "Streak review"]}
      supportDesc={[
        "Users should contact support if a completed daily claim appears missing, subject to account review and system logs.",
        "Streak restoration is not guaranteed and may be denied where no valid platform record exists.",
      ]}
      isRewards={true}
    >
      <section className={styles.section}>
        <SectionHead Icon={FaCalendarCheck} title="How it works" />
        <p>
          The daily check-in system is based on streak participation. Users may
          claim eligible streak-based rewards by checking in during the
          applicable period on consecutive days.
        </p>
      </section>
      <section className={styles.section}>
        <SectionHead Icon={FaCheckCircle} title="Streak rules" />
        <ul>
          <li>
            Users must complete valid daily participation to maintain streak
            progression.
          </li>
          <li>
            Missed claim windows may reset or interrupt streak-related benefits.
          </li>
          <li>
            Reward values, streak milestones, and claim windows may be changed
            by the platform.
          </li>
        </ul>
      </section>
      <section className={styles.section}>
        <SectionHead Icon={FaShieldAlt} title="Invalid activity" />
        <ul>
          <li>
            Fake engagement, multiple accounts, automated claims, or suspicious
            claim patterns are prohibited.
          </li>
          <li>
            Platform records control claim validity in the event of disputes.
          </li>
          <li>
            Streak rewards may be withheld, reversed, or reset where abuse or
            error is detected.
          </li>
        </ul>
      </section>
      <section className={styles.noticeBox}>
        <SectionHead Icon={FaExclamationTriangle} title="Summary and caution" />
        <p>
          Daily check-in is a streak-based feature, not a guaranteed
          entitlement. Users are responsible for timely participation, and the
          platform may validate or reject disputed streak claims.
        </p>
      </section>
    </LegalHero>
  );
};

export default DailyCheckInPage;
