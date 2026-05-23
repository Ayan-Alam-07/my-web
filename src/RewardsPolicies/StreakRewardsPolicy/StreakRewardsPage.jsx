import React from "react";
import styles from "../FeaturePolicyPage.module.css";
import LegalHero from "../../Legal/common/LegalHero";
import SectionHead from "../../Legal/common/SectionHead";
import {
  FaCalendarCheck,
  FaRedoAlt,
  FaShieldAlt,
  FaExclamationTriangle,
} from "react-icons/fa";

const StreakRewardsPage = () => {
  return (
    <LegalHero
      crumb={true}
      badge="Earning Rules"
      hTitle="Streak Rewards"
      hText="This page explains how streak rewards work, how streaks continue or reset, and when streak-based rewards may be denied or removed."
      metaInfo={[
        { title: "Effective Date", value: "Launch Date" },
        { title: "Last Updated", value: "May 23, 2026" },
        { title: "Reward Type", value: "Recurring engagement reward" },
        { title: "Validation", value: "Subject to platform review" },
      ]}
      fNoticeText={[
        "Streak rewards depend on valid recurring activity completed within the required time window.",
        "Streaks may reset, pause, or become ineligible where required actions are missed, invalid, or linked to suspicious behavior.",
      ]}
      supportTitle={["Support details", "Streak review notice"]}
      supportDesc={[
        "Users experiencing a missed streak credit should contact support with the approximate date, account details, and relevant feature information.",
        "Streak-related claims are subject to technical validation, feature logs, anti-abuse checks, and current platform rules.",
      ]}
      isRewards={true}
    >
      <section className={styles.section}>
        <SectionHead Icon={FaCalendarCheck} title="How streak rewards work" />
        <p>
          Streak rewards are given when a user completes qualifying actions on
          consecutive eligible periods, such as daily or recurring activity
          windows, without breaking the required pattern.
        </p>
      </section>

      <section className={styles.section}>
        <SectionHead Icon={FaRedoAlt} title="How streaks reset" />
        <p>
          A streak may reset if the required action is not completed on time, if
          a claim becomes invalid, or if a platform condition needed for the
          streak is not satisfied. Specific streak timing and reset rules may
          vary between features and campaigns.
        </p>
      </section>

      <section className={styles.section}>
        <SectionHead Icon={FaShieldAlt} title="Validation and restrictions" />
        <ul>
          <li>Only valid and trackable activity may count toward a streak.</li>
          <li>
            Duplicate, artificial, or manipulated activity may invalidate a
            streak.
          </li>
          <li>
            VPN use, automation, emulator activity, or account abuse may lead to
            reset, cancellation, or reversal.
          </li>
        </ul>
      </section>

      <section className={styles.noticeBox}>
        <SectionHead Icon={FaExclamationTriangle} title="Important notice" />
        <p>
          Completing an action does not always guarantee streak credit unless
          the action is properly tracked, eligible, and accepted by the
          platform’s validation systems.
        </p>
      </section>
    </LegalHero>
  );
};

export default StreakRewardsPage;
