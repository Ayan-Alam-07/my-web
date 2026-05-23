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
      badge="Feature Rules"
      hTitle="Social Follow Rewards"
      hText="This page explains the one-time social follow reward feature, including eligibility, verification, duplication limits, and invalid claim rules."
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
        "Social follow rewards are intended as one-time promotional rewards to verify genuine user engagement with official VELOOP Rewards social channels.",
        "These rewards may require validation and are not intended for repeated, duplicate, temporary, or manipulated claims.",
      ]}
      supportTitle={["Support details", "Verification notice"]}
      supportDesc={[
        "Users who believe a valid one-time social follow reward was not credited may contact support with the requested verification details.",
        "The platform may deny repeated, unverifiable, or suspicious follow claims even where a user attempts manual submission.",
      ]}
      isRewards={true}
    >
      <section className={styles.section}>
        <SectionHead Icon={FaUsers} title="How it works" />
        <p>
          Eligible users may receive a one-time promotional reward for following
          an official VELOOP Rewards social media profile or page where such
          reward activity is offered by the platform.
        </p>
      </section>
      <section className={styles.section}>
        <SectionHead Icon={FaCheckCircle} title="Eligibility and limits" />
        <ul>
          <li>
            Social follow rewards are one-time only unless explicitly stated
            otherwise by the platform.
          </li>
          <li>
            Users may be required to complete verification steps before the
            reward is approved.
          </li>
          <li>
            Repeated, duplicate, reversed, or unverifiable follow actions may be
            rejected.
          </li>
        </ul>
      </section>
      <section className={styles.section}>
        <SectionHead Icon={FaShieldAlt} title="Invalid activity" />
        <ul>
          <li>
            Fake follows, temporary follows for claim abuse, multiple-account
            submissions, or manipulated social activity are prohibited.
          </li>
          <li>
            The platform may refuse, reverse, or remove credits if follow
            verification fails.
          </li>
          <li>
            The availability of social follow rewards may be changed, suspended,
            or discontinued at any time.
          </li>
        </ul>
      </section>
      <section className={styles.noticeBox}>
        <SectionHead Icon={FaExclamationTriangle} title="Summary and caution" />
        <p>
          Social follow rewards are limited, promotional, and
          verification-based. They are intended only to confirm genuine one-time
          engagement with official platform social channels.
        </p>
      </section>
    </LegalHero>
  );
};

export default SocialFollowRewardsPage;
