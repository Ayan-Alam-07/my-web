import React from "react";
import styles from "../FeaturePolicyPage.module.css";
import LegalHero from "../../Legal/common/LegalHero";
import SectionHead from "../../Legal/common/SectionHead";
import {
  FaDice,
  FaExclamationTriangle,
  FaCheckCircle,
  FaShieldAlt,
} from "react-icons/fa";

const LuckyDrawPage = () => {
  return (
    <LegalHero
      crumb={true}
      badge="Future Feature Rules"
      hTitle="Lucky Draw"
      hText="This page provides preliminary rules for the upcoming Lucky Draw feature, including eligibility, promotional conditions, and platform rights to revise the feature."
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
        "Lucky Draw is an upcoming promotional feature and does not constitute gambling, betting, or investment activity.",
        "Any future lucky-draw event may be changed, restricted, delayed, or withdrawn at the platform’s discretion.",
      ]}
      supportTitle={["Support details", "Future feature notice"]}
      supportDesc={[
        "Support may not confirm specific reward mechanics until the feature is formally launched.",
        "Preview descriptions do not guarantee event availability, prize structure, or user eligibility.",
      ]}
      isRewards={true}
    >
      <section className={styles.section}>
        <SectionHead Icon={FaDice} title="Feature overview" />
        <p>
          Lucky Draw may be introduced as a promotional event-based feature
          allowing eligible users to participate under specific platform-defined
          conditions. Entry methods, reward logic, draw timing, and prize rules
          may vary depending on the campaign or event setup.
        </p>
      </section>
      <section className={styles.section}>
        <SectionHead Icon={FaCheckCircle} title="Expected eligibility rules" />
        <ul>
          <li>
            Participation may require valid account status and compliance with
            event-specific conditions.
          </li>
          <li>
            Draw rules, prize pools, selection methods, and eligibility
            requirements may be updated without prior notice.
          </li>
          <li>
            The platform may limit user participation, regions, entries, or
            event duration.
          </li>
        </ul>
      </section>
      <section className={styles.section}>
        <SectionHead Icon={FaShieldAlt} title="Integrity and enforcement" />
        <ul>
          <li>
            Fraud, duplicate entries, manipulated activity, or exploit behavior
            will invalidate participation.
          </li>
          <li>
            The platform may cancel or revise results where verification issues
            or fairness concerns arise.
          </li>
          <li>
            No preview notice guarantees that a specific lucky draw will become
            active or remain active.
          </li>
        </ul>
      </section>
      <section className={styles.noticeBox}>
        <SectionHead Icon={FaExclamationTriangle} title="Summary and caution" />
        <p>
          Lucky Draw is a future promotional feature notice only. Final entry
          rules, prizes, and event conditions may differ from any early
          description.
        </p>
      </section>
    </LegalHero>
  );
};

export default LuckyDrawPage;
