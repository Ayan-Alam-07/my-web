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
      cTitle={"earning / level-system"}
      badge="Levels"
      hTitle="Level System"
      hText="This page explains how the XP and level system works on VELOOP Rewards, how users level up through valid activity, what benefits progression may unlock, and how the platform handles invalid or automated XP activity."
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
        "XP and level progression are virtual platform systems used to recognize user activity, unlock feature-based benefits, and support progression-based engagement.",
        "To maintain a fair and balanced experience, the platform may occasionally update progression requirements, XP logic, level thresholds, or related benefits.",
      ]}
      supportTitle={["Support details", "Progress review"]}
      supportDesc={[
        "Users may contact support if they notice a major XP or level discrepancy, with the approximate date, account details, and relevant feature activity.",
        "Reported issues may be reviewed using available activity logs, system records, and applicable progression rules.",
      ]}
      isRewards={true}
    >
      <section className={styles.section}>
        <SectionHead Icon={FaLayerGroup} title="How it works" />
        <p>
          The VELOOP Rewards level system uses XP or similar progression metrics
          to reflect valid user activity and participation across supported
          features.
        </p>
        <p>
          As users progress through levels, they may unlock additional platform
          benefits, status recognition, feature access, or reward opportunities
          under the current level structure.
        </p>
        <p>
          If progression is credited incorrectly because of a technical issue,
          invalid activity, or system error, the platform may correct the XP or
          level status to maintain fairness across the platform.
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
            Leveling up may unlock feature-based benefits, status recognition,
            or reward opportunities under the active level structure.
          </li>
          <li>
            Level thresholds, progression rates, and related benefits may evolve
            over time as the platform updates or improves the progression
            system.
          </li>
        </ul>
      </section>
      <section className={styles.section}>
        <SectionHead Icon={FaShieldAlt} title="Invalid activity" />
        <ul>
          <li>
            Artificial XP farming, such as using unauthorized scripts,
            automation tools, exploit abuse, or manipulated account activity, is
            prohibited.
          </li>
          <li>
            Natural user participation and genuine platform activity are fully
            allowed and encouraged.
          </li>
          <li>
            Where abuse or invalid progression is detected, the platform may
            remove XP, adjust levels, limit benefits, or take further account
            action under the applicable rules.
          </li>
        </ul>
      </section>

      <section className={styles.section}>
        <SectionHead Icon={FaCheckCircle} title="How XP is earned" />
        <p>
          XP may be earned through eligible actions across supported VELOOP
          Rewards features, such as daily participation, missions, ads,
          referrals, games, or other valid engagement activities made available
          by the platform.
        </p>
      </section>

      <section className={styles.noticeBox}>
        <SectionHead Icon={FaExclamationTriangle} title="Summary and caution" />
        <p>
          The level system is designed to reward valid engagement and help users
          progress through platform activity over time. XP, levels, and related
          benefits may be updated or corrected where needed to maintain
          fairness, system accuracy, and feature balance.
        </p>
      </section>
    </LegalHero>
  );
};

export default LevelSystemPage;
