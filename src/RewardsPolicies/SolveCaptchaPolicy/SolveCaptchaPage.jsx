import React from "react";
import styles from "../FeaturePolicyPage.module.css";
import LegalHero from "../../Legal/common/LegalHero";
import SectionHead from "../../Legal/common/SectionHead";
import {
  FaKeyboard,
  FaExclamationTriangle,
  FaCheckCircle,
  FaShieldAlt,
} from "react-icons/fa";

const SolveCaptchaPage = () => {
  return (
    <LegalHero
      crumb={true}
      badge="Feature Rules"
      hTitle="Solve Captcha"
      hText="This page explains the captcha task feature, including task validity, crediting standards, abuse prevention, and enforcement conditions."
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
        "Captcha-related tasks may be creditable only where the platform records valid completion under the applicable task rules.",
        "Task availability, credit amount, and completion criteria may be changed, limited, or removed at any time.",
      ]}
      supportTitle={["Support details", "Task review"]}
      supportDesc={[
        "Users may contact support if a valid captcha task appears uncredited, subject to available task records and verification review.",
        "The platform may deny claims where completion cannot be verified or where abuse indicators exist.",
      ]}
      isRewards={true}
    >
      <section className={styles.section}>
        <SectionHead Icon={FaKeyboard} title="How it works" />
        <p>
          Users may complete eligible captcha-based tasks to receive platform
          rewards where such tasks are made available by VELOOP Rewards. The
          platform may define task rules, attempt conditions, validation
          methods, and reward values in its sole discretion.
        </p>
      </section>
      <section className={styles.section}>
        <SectionHead Icon={FaCheckCircle} title="Task completion rules" />
        <ul>
          <li>
            Only correctly completed and validly recorded captcha tasks may be
            credited.
          </li>
          <li>
            The platform may apply frequency limits, quality controls, or
            session-based restrictions.
          </li>
          <li>
            Reward values may be modified, paused, or withdrawn depending on
            operational or campaign conditions.
          </li>
        </ul>
      </section>
      <section className={styles.section}>
        <SectionHead Icon={FaShieldAlt} title="Invalid activity" />
        <ul>
          <li>
            Automation tools, scripted completion, task bypassing, bulk abuse,
            or manipulated responses are prohibited.
          </li>
          <li>
            Repeated invalid behavior may result in credit denial, task removal,
            feature restriction, or account enforcement action.
          </li>
          <li>
            Completion attempts rejected by the platform or relevant systems may
            receive no reward.
          </li>
        </ul>
      </section>
      <section className={styles.noticeBox}>
        <SectionHead Icon={FaExclamationTriangle} title="Summary and caution" />
        <p>
          Captcha rewards apply only to genuine, verifiable task completion.
          Platform and system validation control whether a task is accepted and
          credited.
        </p>
      </section>
    </LegalHero>
  );
};

export default SolveCaptchaPage;
