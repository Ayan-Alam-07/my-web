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
      cTitle={"earning / solve-captcha"}
      badge="Task"
      hTitle="Solve Captcha"
      hText="This page explains how Solve Captcha tasks work on VELOOP Rewards, how task accuracy affects crediting, what limits may apply, and how the platform reviews invalid or automated completion."
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
        "Solve Captcha rewards are generally credited when an eligible task is completed accurately and recorded successfully under the active task rules.",
        "Task availability, reward amount, daily limits, and completion criteria may change depending on platform conditions, abuse controls, or campaign settings.",
      ]}
      supportTitle={["Support details", "Task review"]}
      supportDesc={[
        "Users may contact support if a valid captcha task appears uncredited, with their Account ID, task date, approximate time, and a screenshot where available.",
        "Claims may be reviewed using available task records and verification checks, but tasks may remain uncredited where completion cannot be confirmed or abuse indicators are present.",
      ]}
      isRewards={true}
    >
      <section className={styles.section}>
        <SectionHead Icon={FaKeyboard} title="How it works" />
        <p>
          Users may complete eligible captcha-based tasks to receive platform
          rewards when such tasks are made available by VELOOP Rewards. The
          platform sets the task rules, attempt conditions, verification steps,
          and reward values for each task type under the current feature
          settings.
        </p>
        <p>
          Automated verification may be used to confirm that captcha tasks were
          completed by a real user and submitted correctly. This helps maintain
          fair reward distribution and reduce abuse across the platform.
        </p>
      </section>
      <section className={styles.section}>
        <SectionHead Icon={FaCheckCircle} title="Task completion rules" />
        <ul>
          <li>
            Only accurately completed and successfully recorded captcha tasks
            may be credited.
          </li>
          <li>
            Occasional errors may happen, but consistently high accuracy is
            required for continued participation and reward crediting.
          </li>
          <li>
            Daily task limits, quality controls, or session-based restrictions
            may apply depending on current platform conditions.
          </li>
          <li>
            Reward values may be modified, paused, or withdrawn depending on
            operational, campaign, or abuse-prevention conditions.
          </li>
        </ul>
      </section>
      <section className={styles.section}>
        <SectionHead Icon={FaShieldAlt} title="Invalid activity" />
        <ul>
          <li>
            Automation tools, scripted completion, task bypassing, bulk abuse,
            or manipulated responses are not allowed.
          </li>
          <li>
            Repeatedly incorrect, invalid, or suspicious task behavior may lead
            to credit denial, temporary task restriction, feature limitation, or
            further account review.
          </li>
          <li>
            Completion attempts rejected by the platform or relevant
            verification systems may receive no reward.
          </li>
        </ul>
      </section>

      <section className={styles.section}>
        <SectionHead
          Icon={FaCheckCircle}
          title="If a captcha task is not credited"
        />
        <p>
          If a completed captcha task does not appear correctly, users should
          wait briefly for the system to update and then refresh the page or
          app. If the task still appears uncredited, the user should contact
          support with the Account ID, task date, approximate time, and a
          screenshot where available.
        </p>
      </section>

      <section className={styles.noticeBox}>
        <SectionHead Icon={FaExclamationTriangle} title="Summary and caution" />
        <p>
          Solve Captcha rewards are intended for genuine human task completion.
          Accurate responses, successful verification, and valid system
          recording help determine whether a task is accepted and credited.
        </p>
      </section>
    </LegalHero>
  );
};

export default SolveCaptchaPage;
