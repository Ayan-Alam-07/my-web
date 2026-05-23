import React from "react";
import styles from "../FeaturePolicyPage.module.css";
import LegalHero from "../../Legal/common/LegalHero";
import SectionHead from "../../Legal/common/SectionHead";
import {
  FaSyncAlt,
  FaExclamationTriangle,
  FaCheckCircle,
  FaShieldAlt,
} from "react-icons/fa";

const SpinTheWheelPage = () => {
  return (
    <LegalHero
      crumb={true}
      badge="Feature Rules"
      hTitle="Spin the Wheel"
      hText="This page explains the VELOOP Rewards spin feature, including variable outcomes, eligibility, availability, invalid activity, and platform control over spin mechanics."
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
        "Spin results are variable and may depend on current rules, event settings, promotional logic, availability conditions, and platform adjustments.",
        "Spins are a gamified promotional feature and do not create gambling, betting, investment, or financial rights.",
      ]}
      supportTitle={["Support details", "Result review"]}
      supportDesc={[
        "Users may contact support for review of missing spin results where platform records show a possible issue.",
        "Platform records will control in disputes involving claimed outcomes, missing credits, or invalid spin behavior.",
      ]}
      isRewards={true}
    >
      <section className={styles.section}>
        <SectionHead Icon={FaSyncAlt} title="How it works" />
        <p>
          Eligible users may use supported spin access to participate in a
          variable-outcome reward feature. Rewards, outcomes, and available
          prize categories may differ by event, feature configuration, and
          platform rules.
        </p>
      </section>
      <section className={styles.section}>
        <SectionHead Icon={FaCheckCircle} title="Outcome rules" />
        <ul>
          <li>
            Spin rewards are variable and are not fixed across all users or
            sessions.
          </li>
          <li>
            The platform may change prize pools, reward values, eligibility
            rules, or access conditions at any time.
          </li>
          <li>
            Spin access may depend on available spins, credits, event
            conditions, or other platform criteria.
          </li>
        </ul>
      </section>
      <section className={styles.section}>
        <SectionHead Icon={FaShieldAlt} title="Invalid activity" />
        <ul>
          <li>
            Automation, result manipulation, exploit attempts, multiple-account
            abuse, or repeated invalid spin behavior are prohibited.
          </li>
          <li>
            Improper spin activity may result in reward reversal, access
            restriction, spin cancellation, or account action.
          </li>
          <li>
            Technical interruption does not automatically entitle a user to a
            specific spin result.
          </li>
        </ul>
      </section>
      <section className={styles.noticeBox}>
        <SectionHead Icon={FaExclamationTriangle} title="Summary and caution" />
        <p>
          Spin the Wheel provides variable promotional outcomes only.
          Participation is subject to eligibility, valid platform operation, and
          anti-abuse enforcement, and no specific result is guaranteed.
        </p>
      </section>
    </LegalHero>
  );
};

export default SpinTheWheelPage;
