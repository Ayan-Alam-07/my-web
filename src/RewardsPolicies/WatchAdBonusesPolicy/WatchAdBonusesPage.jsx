import React from "react";
import styles from "../FeaturePolicyPage.module.css";
import LegalHero from "../../Legal/common/LegalHero";
import SectionHead from "../../Legal/common/SectionHead";
import {
  FaGift,
  FaExclamationTriangle,
  FaCheckCircle,
  FaShieldAlt,
} from "react-icons/fa";

const WatchAdBonusesPage = () => {
  return (
    <LegalHero
      crumb={true}
      cTitle={"earning / watch-ad-bonuses"}
      badge="Bonus"
      hTitle="Watch Ad Bonuses"
      hText="This page explains how Watch Ad Bonuses work, when bonus rewards may apply in addition to normal ad rewards, and how bonus eligibility, tracking, and fair-use checks are handled."
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
        "Watch Ad Bonuses are optional promotional rewards that may apply to selected eligible ad interactions or active bonus campaigns in addition to normal ad rewards.",
        "Bonus credit depends on successful ad completion, valid tracking, campaign eligibility, and compliance with current platform rules.",
      ]}
      supportTitle={["Support details", "Bonus review"]}
      supportDesc={[
        "Users may contact support if a valid bonus appears missing, with the approximate date, account details, and relevant ad or campaign information.",
        "Reported bonus issues may be reviewed using available ad logs, campaign records, tracking data, and current eligibility rules.",
      ]}
      isRewards={true}
    >
      <section className={styles.section}>
        <SectionHead Icon={FaGift} title="How it works" />
        <p>
          Watch Ad Bonuses may be offered as additional promotional rewards when
          users complete selected eligible ad interactions. These bonuses may be
          separate from ordinary ad rewards and may apply only during active
          bonus campaigns or under specific feature conditions.
        </p>
        <p>
          Bonus format, timing, value, and availability may vary depending on
          platform settings, campaign rules, and supported ad activity.
        </p>
      </section>
      <section className={styles.section}>
        <SectionHead Icon={FaCheckCircle} title="Bonus rules" />
        <ul>
          <li>
            Bonus rewards may apply only to selected eligible ad interactions,
            active campaigns, or feature-based bonus events.
          </li>
          <li>
            Valid ad completion and successful tracking are generally required
            before a bonus can be credited.
          </li>
          <li>
            Ordinary ad rewards may still apply even where a specific ad
            interaction does not qualify for an extra bonus reward.
          </li>
          <li>
            The platform may change bonus values, availability, or campaign
            conditions as bonus programs are updated.
          </li>
        </ul>
      </section>
      <section className={styles.section}>
        <SectionHead Icon={FaShieldAlt} title="Invalid activity" />
        <ul>
          <li>
            Artificial ad engagement, repeated invalid claims, bot usage, or
            manipulation of bonus systems is not allowed.
          </li>
          <li>
            Attempts to manipulate bonus rewards may lead to bonus cancellation,
            loss of future bonus eligibility, reward reversal, or account
            restrictions where necessary.
          </li>
          <li>
            Third-party ad delivery or campaign failures may prevent bonus
            crediting in some cases.
          </li>
        </ul>
      </section>

      <section className={styles.section}>
        <SectionHead Icon={FaGift} title="Relation to Watch Ads" />
        <p>
          Watch Ad Bonuses are separate from the standard Watch Ads reward
          feature. Users should refer to the main Watch Ads page for the general
          rules on ad completion, while this page explains the extra promotional
          bonus layer that may apply in selected cases.
        </p>
      </section>

      <section className={styles.noticeBox}>
        <SectionHead Icon={FaExclamationTriangle} title="Summary and caution" />
        <p>
          Watch Ad Bonuses are optional promotional rewards that may be
          available under selected campaign or feature conditions. Bonus credit
          usually depends on successful ad completion, valid tracking, and
          current bonus eligibility rules.
        </p>
      </section>
    </LegalHero>
  );
};

export default WatchAdBonusesPage;
