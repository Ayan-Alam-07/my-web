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
      badge="Feature Rules"
      hTitle="Tap & Earn"
      hText="This page explains the Tap & Earn feature, including user interaction rules, reward validation, abuse prevention, and platform enforcement rights."
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
        "Tap & Earn is a promotional interaction-based feature and may be subject to claim limits, session controls, system validation, and platform review.",
        "Credits may be denied, reduced, limited, or reversed where repeated invalid activity or technical manipulation is detected.",
      ]}
      supportTitle={["Support details", "Validation notice"]}
      supportDesc={[
        "Users who believe a valid Tap & Earn action was not credited may contact support with relevant timing and account details.",
        "Platform logs, system validation rules, and anti-abuse controls will determine whether a disputed claim is accepted.",
      ]}
      isRewards={true}
    >
      <section className={styles.section}>
        <SectionHead Icon={FaHandPointer} title="How it works" />
        <p>
          Tap & Earn allows eligible users to receive platform credits through
          valid interaction-based activity within the app or website. Reward
          logic, tap values, and participation limits may vary depending on
          platform configuration and active feature rules.
        </p>
      </section>
      <section className={styles.section}>
        <SectionHead
          Icon={FaCheckCircle}
          title="Eligibility and reward rules"
        />
        <ul>
          <li>Only valid user-generated interaction may be credited.</li>
          <li>
            Tap values, session limits, claim windows, or cooldown conditions
            may change at any time.
          </li>
          <li>
            The platform may limit or pause the feature for operational,
            fairness, technical, or security reasons.
          </li>
        </ul>
      </section>
      <section className={styles.section}>
        <SectionHead Icon={FaShieldAlt} title="Invalid activity" />
        <ul>
          <li>
            Auto-clickers, macros, bot activity, rapid artificial interaction,
            or device manipulation are prohibited.
          </li>
          <li>
            Suspicious behavior may result in feature restriction, reward
            reversal, balance forfeiture, or permanent suspension.
          </li>
          <li>
            App-level protective measures may automatically block or close
            unauthorized interaction tools where supported.
          </li>
        </ul>
      </section>
      <section className={styles.noticeBox}>
        <SectionHead Icon={FaExclamationTriangle} title="Summary and caution" />
        <p>
          Tap & Earn rewards are available only for genuine user participation.
          Any artificial tapping, automation, or technical misuse may invalidate
          the feature and result in platform enforcement action.
        </p>
      </section>
    </LegalHero>
  );
};

export default TapAndEarnPage;
