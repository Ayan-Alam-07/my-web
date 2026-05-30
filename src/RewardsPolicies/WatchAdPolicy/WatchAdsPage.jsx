import React from "react";
import styles from "../FeaturePolicyPage.module.css";
import LegalHero from "../../Legal/common/LegalHero";
import SectionHead from "../../Legal/common/SectionHead";
import {
  FaPlayCircle,
  FaExclamationTriangle,
  FaCheckCircle,
  FaShieldAlt,
} from "react-icons/fa";

const WatchAdsPage = () => {
  return (
    <LegalHero
      crumb={true}
      cTitle={"earning / watch-ads"}
      badge="Feature Rules"
      hTitle="Watch Ads"
      hText="This page explains how Watch Ads rewards work on VELOOP Rewards, how valid views are credited, what may delay or block rewards, and what users should do if an ad does not credit correctly."
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
        "Watch Ads rewards are promotional in-platform rewards and are usually credited for valid ad views that complete successfully and track correctly.",
        "Reward values and ad availability may vary based on campaign conditions, placement, geography, user eligibility, ad inventory, and platform updates.",
      ]}
      supportTitle={["Support details", "Review notice"]}
      supportDesc={[
        "If an ad reward does not appear, users should first wait a short time for tracking to complete, then contact official support with their account details, approximate time, and a screenshot where available.",
        "Reward claims may be reviewed where tracking does not complete correctly, but valid ad activity may still qualify once the issue is checked against available platform or partner records.",
      ]}
      isRewards={true}
    >
      <section className={styles.section}>
        <SectionHead Icon={FaPlayCircle} title="How it works" />
        <p>
          <p>
            Users may earn in-platform rewards by watching eligible ads made
            available through VELOOP Rewards or its advertising partners. Reward
            availability, ad length, and reward amount may differ between
            sessions, campaigns, and users, but valid ad views are generally
            intended to be rewarded when tracking completes successfully.
          </p>
        </p>
      </section>
      <section className={styles.section}>
        <SectionHead Icon={FaCheckCircle} title="Eligibility and rewards" />
        <ul>
          <li>
            Reward amounts may vary depending on the current ad campaign,
            placement, and user eligibility.
          </li>
          <li>
            Users should complete the full ad flow in a normal and trackable way
            to qualify for credit.
          </li>
          <li>
            Credits may depend on successful campaign completion, device
            validation, and routine abuse-prevention checks.
          </li>
        </ul>
      </section>
      <section className={styles.section}>
        <SectionHead Icon={FaShieldAlt} title="Restrictions" />
        <ul>
          <li>
            Using bots, auto-clickers, VPNs, emulators, or other invalid methods
            to watch ads is not allowed.
          </li>
          <li>
            Invalid, duplicate, manipulated, or suspicious ad activity may lead
            to zero credit, reward reversal, feature restriction, or account
            suspension.
          </li>
          <li>
            Third-party ad failures, internet problems, or tracking issues may
            sometimes prevent a reward from being credited correctly.
          </li>
        </ul>
      </section>

      <section className={styles.section}>
        <SectionHead Icon={FaCheckCircle} title="If an ad does not credit" />
        <p>
          If an ad reward does not appear immediately, users should wait around
          15 minutes for tracking to complete. If the reward still does not
          appear, the user should contact official support with the account
          details, the approximate time of completion, and a screenshot where
          available.
        </p>
      </section>

      <section className={styles.section}>
        <SectionHead Icon={FaCheckCircle} title="Helpful tips" />
        <ul>
          <li>
            Use a stable internet connection while opening and completing the
            ad.
          </li>
          <li>
            Let the ad finish normally when completion is required for credit.
          </li>
          <li>
            Avoid switching accounts, resetting identifiers, or using restricted
            tools during ad activity.
          </li>
        </ul>
      </section>

      <section className={styles.noticeBox}>
        <SectionHead Icon={FaExclamationTriangle} title="Summary and caution" />
        <p>
          VELOOP Rewards aims to credit every valid ad view correctly. However,
          ad-based rewards still depend on campaign availability, successful
          tracking, user eligibility, and platform or partner validation checks.
        </p>
      </section>
    </LegalHero>
  );
};

export default WatchAdsPage;
