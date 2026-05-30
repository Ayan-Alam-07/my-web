import React from "react";
import styles from "../FeaturePolicyPage.module.css";
import LegalHero from "../../Legal/common/LegalHero";
import SectionHead from "../../Legal/common/SectionHead";
import {
  FaUsers,
  FaExclamationTriangle,
  FaCheckCircle,
  FaShieldAlt,
} from "react-icons/fa";

const SocialFollowRewardsPage = () => {
  return (
    <LegalHero
      crumb={true}
      cTitle={"earning / follow-and-earn"}
      badge="Follow"
      hTitle="Social Follow Rewards"
      hText="This page explains how one-time Social Follow Rewards work, how users can complete follow verification, what eligibility limits apply, and how valid claims are reviewed and credited."
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
        "Social Follow Rewards are one-time promotional rewards intended for genuine engagement with official VELOOP Rewards social channels.",
        "Reward credit may require follow verification and may be denied where claims are duplicate, unverifiable, or inconsistent with current platform rules.",
      ]}
      supportTitle={["Support details", "Verification notice"]}
      supportDesc={[
        "If a valid one-time Social Follow Reward was not credited, users may contact support and should include their registered email, social media username, campaign name if available, and a screenshot or other requested proof of follow status.",
        "Claims may be denied where follow verification cannot be confirmed, where duplicate submissions are detected, or where the claim does not satisfy the active campaign rules.",
      ]}
      isRewards={true}
    >
      <section className={styles.section}>
        <SectionHead Icon={FaUsers} title="How it works" />
        <div>
          <p>
            Eligible users may receive a one-time promotional reward when a
            Social Follow campaign is active for an official VELOOP Rewards
            social profile or page.
          </p>
          <ol>
            <li>
              Open the official VELOOP Rewards social profile from the platform.
            </li>
            <li>Follow the profile and return to the app or feature page.</li>
            <li>
              Tap the verification or claim button and complete any required
              verification step.
            </li>
          </ol>
          <p>
            Where verification is successful, the reward may be credited
            automatically or after review under the active campaign rules.
          </p>
        </div>
      </section>
      <section className={styles.section}>
        <SectionHead Icon={FaCheckCircle} title="Eligibility and limits" />
        <ul>
          <li>
            Social Follow Rewards are one-time only unless a different rule is
            clearly stated for a specific campaign.
          </li>
          <li>
            Users may need to complete a claim or verification step, such as
            returning to the app, tapping verify, or submitting the requested
            follow details.
          </li>
          <li>
            Duplicate, unverifiable, or already-used follow claims may be
            rejected under the campaign rules.
          </li>
        </ul>
      </section>
      <section className={styles.section}>
        <SectionHead Icon={FaShieldAlt} title="Invalid activity" />
        <ul>
          <li>
            Fake follows, multiple-account submissions, or manipulated social
            activity are not allowed.
          </li>
          <li>
            Social Follow Rewards are intended for genuine followers.
            Unfollowing immediately after claiming or using abusive follow
            patterns may lead to loss of eligibility for future promotional
            events.
          </li>
          <li>
            If follow verification cannot be confirmed, the platform may refuse
            or remove the related reward credit under the active campaign rules.
          </li>
        </ul>
      </section>
      <section className={styles.noticeBox}>
        <SectionHead Icon={FaExclamationTriangle} title="Summary and caution" />
        <p>
          Social Follow Rewards are limited one-time promotional rewards for
          genuine engagement with official VELOOP Rewards social channels. Once
          the required verification is successfully completed, eligible users
          may receive the applicable campaign reward.
        </p>
      </section>
    </LegalHero>
  );
};

export default SocialFollowRewardsPage;
