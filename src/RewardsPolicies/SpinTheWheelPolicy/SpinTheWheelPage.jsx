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
      cTitle={"earning / spin-the-wheel"}
      badge="Spin & Earn"
      hTitle="Spin the Wheel"
      hText="This page explains how the VELOOP Rewards spin feature works, how spin access and outcomes are handled, what happens during technical issues, and why this feature is a promotional game activity rather than gambling or betting."
      metaInfo={[
        { title: "Effective Date", value: "May 20, 2026" },
        { title: "Last Updated", value: "May 19, 2026" },
        { title: "Owner", value: "Ayan Alam" },
        {
          title: "Operating Model",
          value: "Online-operated platform based in Ramgarh, Jharkhand, India",
        },
      ]}
      fNoticeText={[
        "This feature is a gamified promotional activity for entertainment and reward engagement only. It does not involve real-money gambling, betting, wagering, or financial investment.",
        "Spin outcomes may vary based on active feature rules, promotional settings, available rewards, and current platform conditions.",
      ]}
      supportTitle={["Support details", "Result review"]}
      supportDesc={[
        "Users may contact support if a spin result appears missing, interrupted, or incorrectly credited, with the account details, approximate time, and a screenshot where available.",
        "Reported issues may be reviewed using available platform records, system logs, and applicable feature rules.",
      ]}
      isRewards={true}
    >
      <section className={styles.section}>
        <SectionHead Icon={FaSyncAlt} title="How it works" />
        <p>
          Eligible users may use supported spin access to participate in a
          promotional spin feature that offers system-generated reward outcomes.
          Available rewards, outcome types, and prize categories may differ by
          event, feature configuration, and current platform rules.
        </p>
        <p>
          This feature is designed as a game-like promotional activity and does
          not require real-money betting or create financial rights in any
          outcome.
        </p>
      </section>
      <section className={styles.section}>
        <SectionHead Icon={FaCheckCircle} title="Outcome rules" />
        <ul>
          <li>
            Spin outcomes are not identical for every user or session and may
            depend on the active feature configuration.
          </li>
          <li>
            Reward availability, prize pools, eligibility rules, and access
            conditions may change based on event settings, promotional
            campaigns, or platform updates.
          </li>
          <li>
            Spin access may depend on available spins, eligible credits,
            campaign participation, or other current platform criteria.
          </li>
          <li>
            Outcomes are determined through the platform’s configured spin logic
            for the active feature or event.
          </li>
        </ul>
      </section>

      <section className={styles.section}>
        <SectionHead Icon={FaCheckCircle} title="Technical interruptions" />
        <p>
          If a spin is interrupted because of a loading issue, app crash, or
          connection problem, the result may still be recorded in the platform’s
          available system logs.
        </p>
        <p>
          If a user believes a spin did not complete correctly or a reward was
          not shown properly, the user should contact support with the account
          details, approximate time, and a screenshot if available.
        </p>
      </section>

      <section className={styles.section}>
        <SectionHead Icon={FaShieldAlt} title="Invalid activity" />
        <ul>
          <li>
            Automation, result manipulation, exploit attempts, multiple-account
            abuse, or repeated invalid spin behavior are not allowed.
          </li>
          <li>
            Improper spin activity may lead to reward reversal, spin
            cancellation, feature restriction, or further account review.
          </li>
          <li>
            Claims relating to suspicious or unverifiable spin activity may be
            denied where platform records do not support the claimed result.
          </li>
        </ul>
      </section>
      <section className={styles.noticeBox}>
        <SectionHead Icon={FaExclamationTriangle} title="Summary and caution" />
        <p>
          Spin the Wheel is a promotional entertainment feature with variable
          reward outcomes. Participation remains subject to eligibility, valid
          system operation, and fair-use rules, and users should contact support
          if a genuine technical issue appears to affect a spin result.
        </p>
      </section>
    </LegalHero>
  );
};

export default SpinTheWheelPage;
