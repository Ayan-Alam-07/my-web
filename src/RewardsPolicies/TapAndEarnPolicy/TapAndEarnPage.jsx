import React from "react";
import styles from "../FeaturePolicyPage.module.css";
import LegalHero from "../../Legal/common/LegalHero";
import SectionHead from "../../Legal/common/SectionHead";
import {
  FaHandPointer,
  FaExclamationTriangle,
  FaCheckCircle,
  FaShieldAlt,
} from "react-icons/fa";

const TapAndEarnPage = () => {
  return (
    <LegalHero
      crumb={true}
      cTitle={"earning / tap-and-earn"}
      badge="Feature Rules"
      hTitle="Tap & Earn"
      hText="This page explains how Tap & Earn works on VELOOP Rewards, how valid taps are credited, what limits may apply, and how the platform reviews invalid or automated activity."
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
        "Tap & Earn is a promotional interaction-based feature designed to reward valid user participation within the platform’s active limits and session rules.",
        "Credits may be limited, adjusted, or reversed where repeated invalid activity, automation, or technical manipulation is detected during review.",
      ]}
      supportTitle={["Support details", "Validation notice"]}
      supportDesc={[
        "Users who believe a valid Tap & Earn action was not credited may contact support with their Account ID, approximate time of activity, and a screenshot where available.",
        "Disputed claims may be reviewed using platform logs, timing records, and validation checks to confirm whether the activity qualified for credit.",
      ]}
      isRewards={true}
    >
      <section className={styles.section}>
        <SectionHead Icon={FaHandPointer} title="How it works" />
        <p>
          Tap & Earn allows eligible users to receive platform credits through
          valid interaction-based activity within the app or website. Tap
          values, participation limits, and reward rules may vary based on
          current feature settings, but genuine and consistent activity is
          generally intended to qualify within the active limits.
        </p>
      </section>
      <section className={styles.section}>
        <SectionHead
          Icon={FaCheckCircle}
          title="Eligibility and reward rules"
        />
        <ul>
          <li>
            Only genuine user-generated taps and eligible interaction may be
            credited.
          </li>
          <li>
            Tap values, session limits, claim windows, and cooldown conditions
            may be updated from time to time under current feature rules.
          </li>
          <li>
            The platform may pause, limit, or rebalance the feature for
            operational, fairness, technical, or security reasons.
          </li>
        </ul>
      </section>
      <section className={styles.section}>
        <SectionHead Icon={FaShieldAlt} title="Invalid activity" />
        <ul>
          <li>
            Auto-clickers, macros, bots, non-human tap patterns, or device
            manipulation are not allowed. Users should interact at a natural
            human pace during Tap & Earn activity.
          </li>
          <li>
            Suspicious or repeated invalid activity may first lead to warning,
            temporary feature restriction, or reward reversal. Continued abuse
            or use of automated tools may result in account suspension.
          </li>
          <li>
            Where supported, the platform may automatically detect, block, or
            limit unauthorized interaction tools used to manipulate Tap & Earn
            activity.
          </li>
        </ul>
      </section>

      <section className={styles.section}>
        <SectionHead Icon={FaCheckCircle} title="If taps are not credited" />
        <p>
          If valid Tap & Earn activity does not appear correctly, users should
          wait briefly for the system to update and then refresh the app or
          page. If the issue continues, the user should contact support with the
          Account ID, approximate time of activity, and a screenshot where
          available.
        </p>
      </section>

      <section className={styles.noticeBox}>
        <SectionHead Icon={FaExclamationTriangle} title="Summary and caution" />
        <p>
          Tap & Earn is designed for genuine user participation and may reward
          active, valid interaction within the platform’s current limits.
          Artificial tapping, automation, or technical misuse may invalidate
          rewards and lead to feature-level or account-level enforcement where
          necessary.
        </p>
      </section>
    </LegalHero>
  );
};

export default TapAndEarnPage;
