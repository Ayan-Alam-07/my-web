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
      cTitle={"earning / streak-rewards"}
      badge="Streak"
      hTitle="Streak Rewards"
      hText="This page explains how streak rewards work on VELOOP Rewards, what users must do to maintain a streak, when a streak may reset, and what to do if a valid streak action is not credited."
      metaInfo={[
        { title: "Effective Date", value: "May 23, 2026" },
        { title: "Last Updated", value: "May 23, 2026" },
        { title: "Reward Type", value: "Recurring engagement reward" },
        { title: "Tracking", value: "Requires valid activity tracking" },
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
          Streak rewards are given when a user completes the required qualifying
          action during each eligible streak period, such as a daily activity
          window, without missing the required pattern.
        </p>
        <p>
          As a general rule, missing a required streak action for the active
          period may reset that streak, unless a specific feature or campaign
          states otherwise.
        </p>
      </section>

      <section className={styles.section}>
        <SectionHead Icon={FaRedoAlt} title="How streaks reset" />
        <p>
          A streak may reset if the required action is not completed within the
          allowed time window, if the activity is not properly recorded, or if
          the action becomes invalid under the applicable feature rules.
        </p>
        <p>
          Streak timing, grace conditions, and reset rules may vary between
          features, so users should follow the instructions shown inside the
          active streak feature or campaign.
        </p>
      </section>

      <section className={styles.section}>
        <SectionHead Icon={FaCalendarCheck} title="Tracking tips" />
        <p>
          To reduce the risk of missed streak credit, users should complete the
          required activity with a stable internet connection and allow the
          feature to finish loading before leaving the page or app.
        </p>
        <p>
          If a valid streak action appears uncredited because of a network or
          technical issue, the user should contact support within a reasonable
          time with the approximate date, account details, and relevant feature
          information.
        </p>
      </section>

      <section className={styles.section}>
        <SectionHead Icon={FaShieldAlt} title="Eligibility and fair use" />
        <ul>
          <li>
            Only valid, eligible, and properly tracked activity may count toward
            a streak.
          </li>
          <li>
            Duplicate, artificial, or manipulated activity may cause a streak
            reward to be denied or reset.
          </li>
          <li>
            VPN use, automation, emulator activity, or other account abuse may
            lead to streak cancellation, reversal, feature restriction, or
            further account review.
          </li>
        </ul>
      </section>

      <section className={styles.noticeBox}>
        <SectionHead Icon={FaExclamationTriangle} title="Important notice" />
        <p>
          Completing a required action usually counts toward a streak when the
          action is eligible and properly tracked. If a user believes a valid
          streak action was missed in error, the user should contact support for
          review.
        </p>
      </section>
    </LegalHero>
  );
};

export default StreakRewardsPage;
