import React from "react";
import styles from "../FeaturePolicyPage.module.css";
import LegalHero from "../../Legal/common/LegalHero";
import SectionHead from "../../Legal/common/SectionHead";
import {
  FaLayerGroup,
  FaExclamationTriangle,
  FaCheckCircle,
  FaShieldAlt,
} from "react-icons/fa";

const LevelSystemPage = () => {
  return (
    <LegalHero
      crumb={true}
      badge="Feature Rules"
      hTitle="Level System"
      hText="This page explains the XP and level progression system, including progression logic, reward eligibility, resets, and enforcement controls."
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
        "XP and level progression are platform-controlled virtual progression systems used for engagement, rewards logic, feature access, or status benefits where applicable.",
        "The platform may rebalance, reset, reclassify, or modify progression requirements, XP logic, and level rewards at any time.",
      ]}
      supportTitle={["Support details", "Progress review"]}
      supportDesc={[
        "Users may contact support for review of major progression discrepancies, subject to available activity logs and system verification.",
        "Platform records control level status, XP totals, and reward eligibility in the event of a dispute.",
      ]}
      isRewards={true}
    >
      <section className={styles.section}>
        <SectionHead Icon={FaLayerGroup} title="How it works" />
        <p>
          The VELOOP Rewards level system uses XP or similar progression metrics
          to measure user activity and participation. Levels may unlock
          additional platform benefits, status recognition, or reward
          opportunities as defined by current platform rules.
        </p>
      </section>
      <section className={styles.section}>
        <SectionHead Icon={FaCheckCircle} title="Progression rules" />
        <ul>
          <li>
            XP may be earned only through valid eligible actions recognized by
            the platform.
          </li>
          <li>
            Level thresholds, progression rates, and related benefits may be
            changed, expanded, reduced, or reset.
          </li>
          <li>
            Progression does not create ownership rights over any specific
            future reward or advantage unless expressly confirmed by the
            platform.
          </li>
        </ul>
      </section>
      <section className={styles.section}>
        <SectionHead Icon={FaShieldAlt} title="Invalid activity" />
        <ul>
          <li>
            Artificial XP farming, exploit abuse, repeated invalid actions, or
            account manipulation are prohibited.
          </li>
          <li>
            The platform may remove XP, adjust levels, block benefits, or
            suspend accounts where abuse is detected.
          </li>
          <li>
            Incorrectly credited progression may be corrected without prior
            notice.
          </li>
        </ul>
      </section>
      <section className={styles.noticeBox}>
        <SectionHead Icon={FaExclamationTriangle} title="Summary and caution" />
        <p>
          The level system is a virtual progression framework only. XP and
          levels may be updated or corrected by the platform, and users should
          not treat progression as a guaranteed future reward entitlement.
        </p>
      </section>
    </LegalHero>
  );
};

export default LevelSystemPage;
